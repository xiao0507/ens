/* 离线 DOM 冒烟测试（Node，无需浏览器/联网）：
 * 用极简 DOM 桩加载全部脚本，模拟点击与指令，验证渲染不抛错且产出关键内容。
 * 运行：node scripts/smoke.js
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = global;

// 先加载数据与逻辑
[
  "js/data/writing.js",
  "js/data/translation.js",
  "js/data/listening.js",
  "js/data/reading-bank.js",
  "js/data/reading-matching.js",
  "js/data/reading-careful-1.js",
  "js/data/reading-careful-2.js",
  "js/router.js",
  "js/generator.js",
].forEach((f) => require(path.join(ROOT, f)));

function makeEl() {
  return {
    value: "",
    innerHTML: "",
    textContent: "",
    _ls: {},
    addEventListener(t, fn) { this._ls[t] = fn; },
    click() { if (this._ls.click) this._ls.click(); },
    keydown(k) { if (this._ls.keydown) this._ls.keydown({ key: k }); },
    querySelectorAll() { return []; },
  };
}
const els = {};
global.document = {
  getElementById(id) { return (els[id] = els[id] || makeEl()); },
  querySelectorAll() { return []; },
};
global.scrollTo = () => {};
global.setTimeout = (fn) => 0;

// 加载应用（绑定事件）
require(path.join(ROOT, "js/app.js"));

let failures = 0;
const ok = (cond, msg) => {
  console.log((cond ? "  ✅ " : "  ❌ ") + msg);
  if (!cond) failures++;
};

// 1) 生成整套第 3 套
els.setInput.value = "3";
els.btnFull.click();
const full = els.paper.innerHTML;
ok(full.includes("第 3 套"), "整套标题含套号");
ok(full.includes("写作"), "含写作板块");
ok(full.includes("听力理解"), "含听力板块");
ok(full.includes("阅读理解"), "含阅读板块");
ok(full.includes("翻译 Translation"), "含翻译板块");
ok(full.includes("共 25 题"), "听力标注 25 题");
ok((full.match(/details class="answer"/g) || []).length === 6, "整套含 6 个答案折叠区(写作1/听力1/阅读3/翻译1)");
ok(!/undefined/.test(full), "渲染结果无 undefined");

// 2) 只出翻译题
els.cmdInput.value = "只出翻译题";
els.btnCmd.click();
const tr = els.paper.innerHTML;
ok(tr.includes("翻译 Translation"), "单题型含翻译");
ok(!tr.includes("听力理解 Listening"), "单题型不含听力");
ok(!/undefined/.test(tr), "单题型渲染无 undefined");

// 3) 重新生成（同套号变体）
els.cmdInput.value = "重新生成这套题";
els.btnCmd.click();
ok(els.paper.innerHTML.includes("变体 #1"), "重新生成产生变体标记");

// 4) 越界套号提示
els.cmdInput.value = "生成第99套";
els.btnCmd.click();
ok(els.statusMsg.textContent.includes("1～50"), "越界套号给出提示");

// 5) 展开/收起按钮不报错
els.btnExpandAll.click();
els.btnCollapseAll.click();
ok(true, "展开/全部收起执行无异常");

console.log(failures ? `\n❌ 冒烟测试失败 ${failures} 项` : "\n✅ DOM 冒烟测试全部通过");
process.exit(failures ? 1 : 0);
