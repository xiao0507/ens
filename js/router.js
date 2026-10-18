/* CET6 指令路由：由 Python 版 cet6_router 等价移植为浏览器 JS。
 * 识别：整套 / 单独题型 / 展开答案 / 重新生成；校验套号 1–50。
 */
(function (global) {
  "use strict";

  var PART_MAP = {
    reading: "reading",
    listening: "listening",
    writing: "writing",
    translation: "translation",
  };

  function detectPart(text) {
    if (text.indexOf("阅读") >= 0 || /reading/i.test(text)) return PART_MAP.reading;
    if (text.indexOf("听力") >= 0 || /listening/i.test(text)) return PART_MAP.listening;
    if (text.indexOf("写作") >= 0 || /作文/.test(text) || /writing/i.test(text)) return PART_MAP.writing;
    if (text.indexOf("翻译") >= 0 || /translation/i.test(text)) return PART_MAP.translation;
    return null;
  }

  /**
   * @returns {{action:'full'|'part'|'expand'|'regen'|'unknown', set:number|null, part:(string|null), message?:string}}
   */
  function route(userInput, fallbackSet) {
    var text = String(userInput == null ? "" : userInput).trim();

    var setNo = null;
    var m = text.match(/第\s*(\d+)\s*套/);
    if (m) setNo = parseInt(m.group === undefined ? m[1] : m[1], 10);
    if (setNo !== null && (setNo < 1 || setNo > 50)) {
      return {
        action: "invalid",
        set: setNo,
        part: null,
        message: "【提示】仅支持第 1～50 套，你输入的套号 " + setNo + " 超出范围。",
      };
    }
    if (setNo === null && fallbackSet) setNo = fallbackSet;

    var wantsExpand = text.indexOf("展开") >= 0 && text.indexOf("答案") >= 0;
    var wantsRegen = /重新|换一|换套|再来/.test(text);
    var wantsOnly = text.indexOf("只") >= 0 || /单独|单出|光要/.test(text);
    var part = detectPart(text);

    // “生成第10套，只出翻译题” → 单题型优先
    if (wantsOnly && part) {
      return { action: "part", set: setNo, part: part };
    }
    if (wantsExpand) {
      return { action: "expand", set: setNo, part: part };
    }
    if (wantsRegen) {
      return { action: "regen", set: setNo, part: part };
    }
    if ((text.indexOf("生成") >= 0 || /出|来一|做一/.test(text)) && setNo !== null && !part) {
      return { action: "full", set: setNo, part: null };
    }
    if (part) {
      // 例如“只看阅读”“来一道翻译”
      return { action: "part", set: setNo, part: part };
    }
    return { action: "unknown", set: setNo, part: null };
  }

  global.CET6_ROUTER = { route: route };
})(window);
