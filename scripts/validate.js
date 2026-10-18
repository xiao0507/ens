/* CET6 题库与组卷离线校验脚本（Node 运行，无需联网）
 * 用法：node scripts/validate.js
 * 校验：文件语法 / 数据结构与数量 / 答案合法性 / 1–50 套组卷不缺项 / 选项洗牌后答案仍正确
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
global.window = global; // 让浏览器 IIFE 挂载的 window 生效

function load(rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) throw new Error("缺少文件：" + rel);
  require(file);
}

let errors = [];
let warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

function isLetter4(a) {
  return ["A", "B", "C", "D"].includes(String(a).toUpperCase());
}
function checkMCQ(list, where) {
  list.forEach((q, i) => {
    if (!q.q) err(`${where} 第${i + 1}题缺少题干 q`);
    if (!Array.isArray(q.options) || q.options.length !== 4)
      err(`${where} 第${i + 1}题 options 必须为 4 项`);
    if (!isLetter4(q.answer)) err(`${where} 第${i + 1}题 answer 非法：${q.answer}`);
  });
}

try {
  // 1) 加载数据（require 成功即语法通过）
  [
    "js/data/writing.js",
    "js/data/translation.js",
    "js/data/listening.js",
    "js/data/reading-bank.js",
    "js/data/reading-matching.js",
    "js/data/reading-careful-1.js",
    "js/data/reading-careful-2.js",
  ].forEach(load);
  load("js/router.js");
  load("js/generator.js");

  const D = window.CET6_DATA;

  // 2) 写作
  (D.writing || []).forEach((w) => {
    if (!w.title || !w.direction || !w.modelEssay) err(`写作 id=${w.id} 字段缺失`);
    const words = (w.modelEssay || "").trim().split(/\s+/).length;
    if (words < 140) warn(`写作 id=${w.id} 范文 ${words} 词，偏少`);
  });
  if ((D.writing || []).length < 12) err("写作应≥12篇");

  // 3) 翻译
  (D.translation || []).forEach((t) => {
    if (!t.chinese || !t.reference) err(`翻译 id=${t.id} 字段缺失`);
  });
  if ((D.translation || []).length < 12) err("翻译应≥12篇");

  // 4) 听力
  if ((D.listening || []).length !== 10) err("听力应为 10 组");
  (D.listening || []).forEach((g, gi) => {
    const tag = `听力组${gi + 1}`;
    if ((g.conversations || []).length !== 2) err(`${tag} 长对话应为2篇`);
    if ((g.passages || []).length !== 2) err(`${tag} 听力篇章应为2篇`);
    if ((g.lectures || []).length !== 3) err(`${tag} 讲座应为3篇`);
    const counts = [4, 4, 3, 4, 3, 3, 4];
    const all = []
      .concat(g.conversations || [])
      .concat(g.passages || [])
      .concat(g.lectures || []);
    all.forEach((p, pi) => {
      if (!p.script) err(`${tag} 第${pi + 1}篇缺少 script`);
      checkMCQ(p.questions || [], `${tag} 第${pi + 1}篇`);
      if ((p.questions || []).length !== counts[pi])
        err(`${tag} 第${pi + 1}篇题数应为${counts[pi]}，实际${(p.questions || []).length}`);
    });
  });

  // 5) 选词填空
  (D.bankCloze || []).forEach((b) => {
    const tag = `选词填空 id=${b.id}`;
    if ((b.bank || []).length !== 15) err(`${tag} 词库应为15个`);
    if ((b.answers || []).length !== 10) err(`${tag} answers 应为10个`);
    const blanks = (b.passage || "").match(/__\s*\d+\s*__/g) || [];
    if (blanks.length !== 10) err(`${tag} 空标记应为10，实际${blanks.length}`);
    const words = (b.bank || []).map((x) => x.word);
    const unique = new Set(words.map((s) => String(s).toLowerCase()));
    if (unique.size !== words.length) err(`${tag} 词库存在重复词`);
    (b.answers || []).forEach((a) => {
      if (!words.some((w) => String(w).toLowerCase() === String(a).toLowerCase()))
        err(`${tag} 答案不在词库：${a}`);
    });
  });
  if ((D.bankCloze || []).length < 8) err("选词填空应≥8篇");

  // 6) 长篇匹配
  (D.matching || []).forEach((m) => {
    const tag = `长篇匹配 id=${m.id}`;
    const labels = (m.paragraphs || []).map((p) => p.label);
    if ((m.paragraphs || []).length < 8) err(`${tag} 段落应≥8`);
    if ((m.statements || []).length !== 10) err(`${tag} 句子应为10`);
    (m.statements || []).forEach((s) => {
      if (!labels.includes(s.answer)) err(`${tag} 答案段落不存在：${s.answer}`);
    });
  });
  if ((D.matching || []).length < 6) err("长篇匹配应≥6篇");

  // 7) 仔细阅读
  if ((D.carefulReading || []).length < 12)
    err(`仔细阅读应≥12篇，实际${(D.carefulReading || []).length}`);
  (D.carefulReading || []).forEach((p) => {
    const tag = `仔细阅读 id=${p.id}`;
    if ((p.questions || []).length !== 5) err(`${tag} 应为5题`);
    checkMCQ(p.questions || [], tag);
    const wc = (p.passage || "").trim().split(/\s+/).length;
    if (wc < 320) warn(`${tag} 正文 ${wc} 词，偏短`);
  });

  // 8) 模拟组卷 1–50 套（多个 salt），并验证 MCQ 洗牌后答案正确
  const G = window.CET6_GENERATOR;
  const LETTERS = ["A", "B", "C", "D"];
  function verifyShuffled(list, where) {
    list.forEach((q, i) => {
      const idx = LETTERS.indexOf(String(q.answer).toUpperCase());
      if (idx < 0) return;
      if (q.options[idx] !== q._correctText)
        err(`${where} 第${i + 1}题洗牌后答案错位`);
    });
  }
  for (let set = 1; set <= 50; set++) {
    for (const salt of [0, 1, 2]) {
      const paper = G.fullPaper(set, salt);
      if (!paper.writing) err(`第${set}套(salt${salt})缺写作`);
      if (!paper.translation) err(`第${set}套(salt${salt})缺翻译`);
      if (!paper.listening) err(`第${set}套(salt${salt})缺听力`);
      if (!paper.reading || !paper.reading.bank || !paper.reading.matching)
        err(`第${set}套(salt${salt})阅读缺项`);
      if (!paper.reading.careful[0] || !paper.reading.careful[1])
        err(`第${set}套(salt${salt})仔细阅读缺篇`);
      const L = paper.listening;
      const listenQs = []
        .concat(...L.conversations.map((p) => p.questions))
        .concat(...L.passages.map((p) => p.questions))
        .concat(...L.lectures.map((p) => p.questions));
      if (listenQs.length !== 25) err(`第${set}套听力题数=${listenQs.length}，应为25`);
      verifyShuffled(listenQs, `第${set}套听力`);
      paper.reading.careful.forEach((p, pi) =>
        verifyShuffled(p.questions, `第${set}套仔细P${pi + 1}`)
      );
    }
  }
} catch (e) {
  err("加载/执行异常：" + e.message);
}

// 9) 路由冒烟
try {
  const r1 = window.CET6_ROUTER.route("生成第3套六级模拟卷");
  if (r1.action !== "full" || r1.set !== 3) err("路由 full 识别失败");
  const r2 = window.CET6_ROUTER.route("生成第10套，只出翻译题");
  if (r2.action !== "part" || r2.part !== "translation") err("路由 part 识别失败");
  const r3 = window.CET6_ROUTER.route("展开阅读理解答案");
  if (r3.action !== "expand" || r3.part !== "reading") err("路由 expand 识别失败");
  const r4 = window.CET6_ROUTER.route("生成第99套");
  if (r4.action !== "invalid") err("路由越界识别失败");
} catch (e) {
  err("路由异常：" + e.message);
}

/* ---------- 汇总 ---------- */
const s = window.CET6_GENERATOR ? window.CET6_GENERATOR.stats() : {};
console.log("题库统计：", JSON.stringify(s));
console.log(`校验：错误 ${errors.length} 项，警告 ${warnings.length} 项`);
warnings.forEach((w) => console.log("  ⚠️  " + w));
if (errors.length) {
  errors.forEach((e) => console.log("  ❌ " + e));
  process.exit(1);
}
console.log("✅ 全部结构、答案合法性与 1–50 套组卷校验通过");
