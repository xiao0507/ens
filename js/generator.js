/* CET6 确定性组卷引擎（离线、无 API）。
 * 依据套号 + salt 派生伪随机序列，从内置题库选题并对选择题选项做稳定洗牌，
 * 同一套号题目可复现，“重新生成”通过 salt 改变结果。
 */
(function (global) {
  "use strict";

  var DATA = null;
  function db() {
    if (!global.CET6_DATA) throw new Error("题库数据未加载");
    return global.CET6_DATA;
  }

  /* ---------- 确定性随机 ---------- */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function makeRng(setNo, salt, prime) {
    var seed = (setNo * 2654435761 + salt * 40503 + prime * 97) >>> 0;
    return mulberry32(seed);
  }
  function pickIndex(rng, length, offset) {
    return ((Math.floor(rng() * length) + (offset || 0)) % length + length) % length;
  }
  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }
  var LETTERS = ["A", "B", "C", "D"];

  /* 对四选一题目做稳定洗牌，返回新题目（options 重排、answer 改写） */
  function shuffleMCQ(question, rng) {
    var opts = question.options || [];
    var correctLetter = String(question.answer).toUpperCase();
    var correctIdx = LETTERS.indexOf(correctLetter);
    if (correctIdx < 0 || opts.length !== 4) {
      return { q: question.q, options: opts, answer: question.answer, tip: question.tip };
    }
    var correctText = opts[correctIdx];
    var order = shuffle([0, 1, 2, 3], rng);
    var newOpts = order.map(function (i) { return opts[i]; });
    var newIdx = order.indexOf(correctIdx);
    return {
      q: question.q,
      options: newOpts,
      answer: LETTERS[newIdx],
      tip: question.tip || "",
      _correctText: correctText,
    };
  }

  function shufflePassageMCQ(passage, rng) {
    return Object.assign({}, passage, {
      questions: (passage.questions || []).map(function (q) { return shuffleMCQ(q, rng); }),
    });
  }

  /* ---------- 各板块组卷 ---------- */
  function buildWriting(setNo, salt) {
    var pool = db().writing || [];
    var rng = makeRng(setNo, salt, 11);
    return pool[pickIndex(rng, pool.length, setNo + salt)] || null;
  }

  function buildTranslation(setNo, salt) {
    var pool = db().translation || [];
    var rng = makeRng(setNo, salt, 23);
    return pool[pickIndex(rng, pool.length, setNo * 2 + salt)] || null;
  }

  function buildListening(setNo, salt) {
    var pool = db().listening || [];
    var rng = makeRng(setNo, salt, 37);
    var group = pool[pickIndex(rng, pool.length, setNo - 1)];
    if (!group) return null;
    return {
      id: group.id,
      conversations: (group.conversations || []).map(function (p) { return shufflePassageMCQ(p, rng); }),
      passages: (group.passages || []).map(function (p) { return shufflePassageMCQ(p, rng); }),
      lectures: (group.lectures || []).map(function (p) { return shufflePassageMCQ(p, rng); }),
    };
  }

  function buildBankCloze(setNo, salt) {
    var pool = db().bankCloze || [];
    var rng = makeRng(setNo, salt, 41);
    var item = pool[pickIndex(rng, pool.length, setNo + salt * 3)];
    if (!item) return null;
    // 词库展示顺序按套号洗牌，答案以“单词原形”匹配，故不受影响
    var bank = shuffle(item.bank || [], rng);
    return Object.assign({}, item, { bank: bank });
  }

  function buildMatching(setNo, salt) {
    var pool = db().matching || [];
    var rng = makeRng(setNo, salt, 53);
    var item = pool[pickIndex(rng, pool.length, setNo + salt * 5)];
    if (!item) return null;
    // 句子顺序按套号洗牌，answer 仍指向段落 label
    var statements = shuffle(item.statements || [], rng);
    return Object.assign({}, item, { statements: statements });
  }

  function buildCarefulPair(setNo, salt) {
    var pool = db().carefulReading || [];
    var rng = makeRng(setNo, salt, 59);
    if (!pool.length) return [null, null];
    var first = pickIndex(rng, pool.length, setNo - 1);
    var second = pickIndex(rng, pool.length, setNo + salt + 6);
    if (second === first) second = (second + 1) % pool.length;
    return [
      pool[first] ? shufflePassageMCQ(pool[first], rng) : null,
      pool[second] ? shufflePassageMCQ(pool[second], rng) : null,
    ];
  }

  function buildReading(setNo, salt) {
    return {
      bank: buildBankCloze(setNo, salt),
      matching: buildMatching(setNo, salt),
      careful: buildCarefulPair(setNo, salt),
    };
  }

  function fullPaper(setNo, salt) {
    DATA = db();
    salt = salt || 0;
    return {
      set: setNo,
      salt: salt,
      writing: buildWriting(setNo, salt),
      listening: buildListening(setNo, salt),
      reading: buildReading(setNo, salt),
      translation: buildTranslation(setNo, salt),
    };
  }

  function partPaper(setNo, part, salt) {
    DATA = db();
    salt = salt || 0;
    var out = { set: setNo, salt: salt, part: part };
    if (part === "writing") out.writing = buildWriting(setNo, salt);
    else if (part === "listening") out.listening = buildListening(setNo, salt);
    else if (part === "reading") out.reading = buildReading(setNo, salt);
    else if (part === "translation") out.translation = buildTranslation(setNo, salt);
    return out;
  }

  function stats() {
    DATA = db();
    return {
      writing: (DATA.writing || []).length,
      translation: (DATA.translation || []).length,
      listening: (DATA.listening || []).length,
      bank: (DATA.bankCloze || []).length,
      matching: (DATA.matching || []).length,
      careful: (DATA.carefulReading || []).length,
    };
  }

  global.CET6_GENERATOR = {
    fullPaper: fullPaper,
    partPaper: partPaper,
    stats: stats,
    _internals: { mulberry32: mulberry32, shuffle: shuffle, LETTERS: LETTERS },
  };
})(window);
