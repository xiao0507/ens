/* CET6 页面交互与渲染 */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var paperEl = $("paper");
  var setInput = $("setInput");
  var cmdInput = $("cmdInput");
  var statusEl = $("statusMsg");

  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
  var state = { set: 1, salt: 0, view: null };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function flash(msg) {
    statusEl.textContent = msg || "";
    if (msg) setTimeout(function () { if (statusEl.textContent === msg) statusEl.textContent = ""; }, 4000);
  }
  function readSet() {
    var n = parseInt(setInput.value, 10);
    if (isNaN(n) || n < 1 || n > 50) return null;
    return n;
  }

  function analysisHTML(an) {
    an = an || {};
    return (
      '<div class="analysis-block"><h4>✅ 文章重点</h4><div>' + (an.passage || "—") + "</div></div>" +
      '<div class="analysis-block"><h4>✅ 句式重点</h4><div>' + (an.sentence || "—") + "</div></div>" +
      '<div class="analysis-block"><h4>✅ 词汇重点</h4><div>' + (an.vocabulary || "—") + "</div></div>"
    );
  }

  function answerToggle(label, bodyInner, section) {
    return (
      '<details class="answer" data-section="' + section + '">' +
      "<summary>" + label + "</summary>" +
      '<div class="answer-body">' + bodyInner + "</div>" +
      "</details>"
    );
  }

  function mcqHTML(questions, startNo) {
    startNo = startNo || 1;
    return questions.map(function (q, i) {
      var no = startNo + i;
      var opts = (q.options || []).map(function (o, j) {
        return '<li><span class="opt-key">' + LETTERS[j] + ".</span> " + esc(o) + "</li>";
      }).join("");
      return (
        '<div class="question" data-qno="' + no + '">' +
        '<div class="q-text">' + no + ". " + esc(q.q) + "</div>" +
        '<ul class="options">' + opts + "</ul></div>"
      );
    }).join("");
  }

  /* ---------- 写作 ---------- */
  function renderWriting(w) {
    if (!w) return "";
    var body =
      '<div class="analysis-block"><h4>参考范文（150–200 词）</h4><div class="essay">' + esc(w.modelEssay) + "</div></div>" +
      analysisHTML(w.analysis);
    return (
      '<section class="paper-section" data-section="writing">' +
      '<div class="sec-head"><h3>一、写作 Writing</h3><span class="pct">占比 15% · 建议 30 分钟 · 150–200 词</span></div>' +
      "<h4>" + esc(w.title) + "</h4>" +
      '<div class="passage">' + esc(w.direction) + "</div>" +
      '<div class="meta-note">✍️ 答题区：请在练习本或文档中完成，再展开范文对照。</div>' +
      answerToggle("点击展开 写作参考范文 + 解析", body, "writing") +
      "</section>"
    );
  }

  /* ---------- 听力 ---------- */
  function listenBlock(title, block, startNo) {
    var html = '<div class="sub-head">' + title + "</div>";
    var n = startNo;
    var answerBits = [];
    block.forEach(function (p, pi) {
      var qs = p.questions || [];
      html += '<details class="transcript"><summary>🎧 第 ' + (pi + 1) + " 篇 · 录音文字稿（做完再看）</summary>" +
        '<div class="t-body">' + esc(p.script) + "</div></details>";
      html += mcqHTML(qs, n);
      var keys = qs.map(function (q, i) {
        return '<span class="answer-key">' + (n + i) + "." + esc(q.answer) + "</span>";
      }).join("");
      var tips = qs.map(function (q, i) {
        return "<div class='tip'>" + (n + i) + ". " + esc(q.tip || "") + "</div>";
      }).join("");
      answerBits.push("<div class='analysis-block'><h4>第 " + (pi + 1) + " 篇</h4><div>" + keys + "</div>" + tips + analysisHTML(p.analysis) + "</div>");
      n += qs.length;
    });
    return { html: html, answer: answerBits.join(""), next: n };
  }

  function renderListening(L) {
    if (!L) return "";
    var c = listenBlock("2.1 长对话 Long Conversations（2 篇）", L.conversations || [], 1);
    var p = listenBlock("2.2 听力篇章 Passages（2 篇）", L.passages || [], c.next);
    var l = listenBlock("2.3 讲座 / 讲话 Lectures（3 篇）", L.lectures || [], p.next);
    var body = l.answer + p.answer + c.answer;
    return (
      '<section class="paper-section" data-section="listening">' +
      '<div class="sec-head"><h3>二、听力理解 Listening Comprehension</h3><span class="pct">占比 35% · 共 25 题</span></div>' +
      '<div class="meta-note">🎧 本站为文字版练习：每篇可展开「录音文字稿」模拟听力；课堂使用时可由教师朗读或导入音频。</div>' +
      c.html + p.html + l.html +
      answerToggle("点击展开 听力答案 + 解析", body, "listening") +
      "</section>"
    );
  }

  /* ---------- 阅读 ---------- */
  function renderBank(item) {
    if (!item) return "";
    var text = esc(item.passage).replace(/__\s*(\d+)\s*__/g, function (_, n) {
      return '<b style="color:#2563eb">[ ' + n + " ]</b>";
    });
    var bank = (item.bank || []).map(function (w, i) {
      return '<span class="answer-key" style="background:#eff6ff;color:#1e40af">' +
        esc(w.word) + " <span class='tip'>" + esc(w.pos || "") + "</span></span>";
    }).join(" ");
    var keys = (item.answers || []).map(function (w, i) {
      return '<span class="answer-key">' + (i + 1) + ". " + esc(w) + "</span>";
    }).join("");
    var body = "<div>" + keys + "</div>" + analysisHTML(item.analysis);
    return (
      '<div class="sub-head">3.1 词汇理解（选词填空）<span class="tag">　从词库选 10 个词填入空白，每词限用一次</span></div>' +
      '<div class="passage">' + text + "</div>" +
      "<div><b>词库：</b></div><div style='margin:6px 0'>" + bank + "</div>" +
      answerToggle("点击展开 选词填空答案 + 解析", body, "reading")
    );
  }

  function renderMatching(item) {
    if (!item) return "";
    var paras = (item.paragraphs || []).map(function (p) {
      return '<p><b style="color:#1e40af">[' + esc(p.label) + "]</b> " + esc(p.text) + "</p>";
    }).join("");
    var stmts = (item.statements || []).map(function (s, i) {
      return '<div class="question"><div class="q-text">' + (i + 1) + ". " + esc(s.s) +
        ' <span class="tip">（匹配段落：____ ）</span></div></div>';
    }).join("");
    var keys = (item.statements || []).map(function (s, i) {
      return '<span class="answer-key">' + (i + 1) + "." + esc(s.answer) + "</span>";
    }).join("");
    var tips = (item.statements || []).map(function (s, i) {
      return "<div class='tip'>" + (i + 1) + ". " + esc(s.tip || "") + "</div>";
    }).join("");
    var body = "<div>" + keys + "</div>" + tips + analysisHTML(item.analysis);
    return (
      '<div class="sub-head">3.2 长篇阅读（段落匹配）<span class="tag">　每个句子对应一个段落，段落可被重复选择或不选</span></div>' +
      '<div class="passage">' + paras + "</div>" + stmts +
      answerToggle("点击展开 段落匹配答案 + 解析", body, "reading")
    );
  }

  function renderCareful(passages) {
    var html = '<div class="sub-head">3.3 仔细阅读（选择题，2 篇）</div>';
    var bodies = "";
    passages.forEach(function (p, pi) {
      if (!p) return;
      html += '<div class="passage"><b>Passage ' + (pi + 1) + "（建议 8 分钟）</b>\n\n" + esc(p.passage) + "</div>";
      html += mcqHTML(p.questions || [], 1 + pi * 5);
      var keys = (p.questions || []).map(function (q, i) {
        return '<span class="answer-key">' + (1 + pi * 5 + i) + "." + esc(q.answer) + "</span>";
      }).join("");
      var tips = (p.questions || []).map(function (q, i) {
        return "<div class='tip'>" + (1 + pi * 5 + i) + ". " + esc(q.tip || "") + "</div>";
      }).join("");
      bodies += "<div class='analysis-block'><h4>Passage " + (pi + 1) + "</h4><div>" + keys + "</div>" + tips + analysisHTML(p.analysis) + "</div>";
    });
    html += answerToggle("点击展开 仔细阅读答案 + 解析", bodies, "reading");
    return html;
  }

  function renderReading(R) {
    if (!R) return "";
    return (
      '<section class="paper-section" data-section="reading">' +
      '<div class="sec-head"><h3>三、阅读理解 Reading Comprehension</h3><span class="pct">占比 35%</span></div>' +
      renderBank(R.bank) + renderMatching(R.matching) + renderCareful(R.careful || []) +
      "</section>"
    );
  }

  /* ---------- 翻译 ---------- */
  function renderTranslation(t) {
    if (!t) return "";
    var body =
      '<div class="analysis-block"><h4>参考译文</h4><div class="reference">' + esc(t.reference) + "</div></div>" +
      analysisHTML(t.analysis);
    return (
      '<section class="paper-section" data-section="translation">' +
      '<div class="sec-head"><h3>四、翻译 Translation</h3><span class="pct">占比 15% · 建议 30 分钟 · 140–160 汉字</span></div>' +
      "<h4>" + esc(t.title) + "</h4>" +
      '<div class="passage">' + esc(t.chinese) + "</div>" +
      '<div class="meta-note">🌐 请将上面的中文段落译成英语（中国文化 / 社会 / 经济主题）。</div>' +
      answerToggle("点击展开 翻译参考译文 + 解析", body, "translation") +
      "</section>"
    );
  }

  function titleBar(setNo, salt, label) {
    return (
      '<div class="paper-title"><h2>第 ' + setNo + " 套 CET6 预测模拟卷</h2>" +
      "<p>" + (label || "写作 · 听力 · 阅读 · 翻译") +
      (salt ? "（变体 #" + salt + "）" : "") + "</p></div>"
    );
  }

  /* ---------- 视图切换 ---------- */
  function showFull(setNo, salt) {
    var paper = CET6_GENERATOR.fullPaper(setNo, salt);
    state.set = setNo; state.salt = salt; state.view = "full";
    paperEl.innerHTML =
      titleBar(setNo, salt) +
      renderWriting(paper.writing) +
      renderListening(paper.listening) +
      renderReading(paper.reading) +
      renderTranslation(paper.translation);
    flash("已生成第 " + setNo + " 套完整试卷");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showPart(setNo, part, salt) {
    var pp = CET6_GENERATOR.partPaper(setNo, part, salt);
    state.set = setNo; state.salt = salt; state.view = "part:" + part;
    var names = { writing: "写作 Writing", listening: "听力理解 Listening", reading: "阅读理解 Reading", translation: "翻译 Translation" };
    var inner = "";
    if (part === "writing") inner = renderWriting(pp.writing);
    if (part === "listening") inner = renderListening(pp.listening);
    if (part === "reading") inner = renderReading(pp.reading);
    if (part === "translation") inner = renderTranslation(pp.translation);
    paperEl.innerHTML = titleBar(setNo, salt, "单项练习 · " + names[part]) + inner;
    flash("已生成第 " + setNo + " 套 · " + names[part]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setAllDetails(open) {
    var nodes = paperEl.querySelectorAll("details.answer");
    nodes.forEach(function (d) { d.open = open; });
  }
  function expandSection(part) {
    var nodes = paperEl.querySelectorAll("details.answer");
    nodes.forEach(function (d) {
      if (!part || d.getAttribute("data-section") === part) d.open = true;
    });
  }

  /* ---------- 指令 ---------- */
  function handleCommand(raw) {
    var r = CET6_ROUTER.route(raw, state.set || readSet() || 1);
    if (r.action === "invalid") { flash(r.message); return; }

    if (r.action === "full") { showFull(r.set, 0); return; }
    if (r.action === "part") {
      var s = r.set || readSet() || state.set || 1;
      showPart(s, r.part, 0);
      return;
    }
    if (r.action === "regen") {
      var salt = state.salt + 1;
      if (state.view === "full") showFull(state.set, salt);
      else if (state.view && state.view.indexOf("part:") === 0) showPart(state.set, state.view.split(":")[1], salt);
      else { var fs = readSet(); if (fs) showFull(fs, salt); }
      return;
    }
    if (r.action === "expand") {
      if (!state.view) { var es = r.set || readSet() || 1; showFull(es, 0); }
      expandSection(r.part);
      flash(r.part ? "已展开对应大题答案" : "已展开全部答案");
      return;
    }
    flash("未识别指令，可试试：生成第3套 / 只出翻译题 / 展开阅读答案");
  }

  /* ---------- 事件 ---------- */
  $("btnFull").addEventListener("click", function () {
    var n = readSet();
    if (n === null) { flash("请输入 1–50 之间的套号"); return; }
    showFull(n, 0);
  });
  $("btnRegen").addEventListener("click", function () { handleCommand("重新生成这套"); });
  document.querySelectorAll(".btn.part").forEach(function (b) {
    b.addEventListener("click", function () {
      var n = readSet() || state.set || 1;
      showPart(n, b.getAttribute("data-part"), 0);
    });
  });
  $("btnExpandAll").addEventListener("click", function () { setAllDetails(true); });
  $("btnCollapseAll").addEventListener("click", function () { setAllDetails(false); });
  $("btnCmd").addEventListener("click", function () {
    var v = cmdInput.value; if (v.trim()) handleCommand(v);
  });
  cmdInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { var v = cmdInput.value; if (v.trim()) handleCommand(v); }
  });

  /* 启动自检 */
  try {
    var st = CET6_GENERATOR.stats();
    console.log("题库统计：", st);
  } catch (e) {
    paperEl.innerHTML = '<div class="placeholder">题库数据加载失败：' + esc(e.message) + "</div>";
  }
})();
