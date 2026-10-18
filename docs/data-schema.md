# CET6 题库数据规范（js/data/*.js）

所有数据文件用普通 `<script>` 加载（非 ES Module，保证 `file://` 双击直接可用），统一挂载到全局 `window.CET6_DATA`。
每个文件开头必须有：

```js
window.CET6_DATA = window.CET6_DATA || {};
```

## 通用要求
- 英文语篇必须为**原创编写**，难度对标最新大学英语六级（CET-6），语言地道、无语法错误。
- 选择题 `options` 固定 4 项，`answer` 用原始正确项字母 `"A"/"B"/"C"/"D"`（程序会按套号自动重排选项并修正答案，因此数据里给原始字母即可）。
- 解析三段式字段固定为：`passage`（文章/篇章重点）、`sentence`（句式/长难句重点）、`vocabulary`（词汇重点，词汇请给「词 / 音标 / 中文释义」，可多组用 `<br>` 或换行）。
- 文本中可用简单 HTML：`<b>`、`<i>`、`<br>`、`<p>`。
- `id` 在各自题型内从 1 开始连续编号。

## 1. writing.js —— 写作（≥12 篇）
```js
window.CET6_DATA = window.CET6_DATA || {};
CET6_DATA.writing = [
  {
    id: 1,
    title: "话题中文简述，如：论大学生培养批判性思维的重要性",
    direction: "Directions: For this part, you are allowed 30 minutes to write an essay on the importance of ... You should write at least 150 words but no more than 200 words.",
    modelEssay: "参考范文英文全文，150–200词，分三段。",
    analysis: {
      passage: "文章重点：三段结构与论证逻辑说明。",
      sentence: "句式重点：2–3个可复用写作句型/长难句拆解。",
      vocabulary: "词汇重点：高分写作词组与替换表达，附中文。"
    }
  }
];
```

## 2. translation.js —— 翻译（≥12 篇，主题：中国文化/社会/经济/科技）
```js
CET6_DATA.translation = [
  {
    id: 1,
    title: "如：中国茶文化",
    chinese: "中文原文段落，140–160个汉字，内容完整。",
    reference: "English reference translation（地道、完整对应原文）。",
    analysis: {
      passage: "翻译要点：整体处理思路、语序调整。",
      sentence: "句式重点：典型句的英文处理/从句/非谓语。",
      vocabulary: "词汇重点：主题核心词汇与固定译法，附音标与释义。"
    }
  }
];
```

## 3. listening.js —— 听力（恰好 10 套，每套为一整组）
每套结构固定：2 篇长对话（每篇 4 题）、2 篇听力篇章（题量依次 3、4 题）、3 篇讲座/讲话（题量依次 3、3、4 题）。合计 8+7+10=25 题。
题目选项不放答案；答案放每题 `answer`；每篇给 `script`（录音文字稿）与篇级三段解析；每题给 `tip`（答案线索，1 句）。
```js
CET6_DATA.listening = [
  {
    id: 1,
    conversations: [
      { script: "长对话文字稿……",
        analysis: { passage:"", sentence:"", vocabulary:"" },
        questions: [ { q:"Question text", options:["A...","B...","C...","D..."], answer:"B", tip:"线索说明" } ] }
    ],
    passages: [ { script:"", analysis:{passage:"",sentence:"",vocabulary:""}, questions:[ ...3题 ] } ],
    lectures:  [ { script:"", analysis:{passage:"",sentence:"",vocabulary:""}, questions:[ ... ] } ]
  }
];
```
要求：conversations 2 篇各 4 题；passages 2 篇，题数分别为 3、4；lectures 3 篇，题数分别为 3、3、4；全组共 25 题。

## 4. reading-bank.js —— 词汇理解（选词填空，≥8 篇）
一篇短文含 10 个空，15 选 10。空用 `__1__`～`__10__` 标记。
```js
CET6_DATA.bankCloze = [
  { id:1,
    passage: "正文，含 __1__ …… __10__ 共十个空。",
    bank: [ {word:"abundant", pos:"adj.", ipa:"/əˈbʌndənt/", meaning:"丰富的"}, /* 共15个 */ ],
    answers: ["词1","词2", ...],   // 恰好10个，对应空1–10，填 bank 中的单词原形
    analysis:{ passage:"", sentence:"", vocabulary:"" } }
];
```

## 5. reading-matching.js —— 长篇阅读（段落匹配，≥6 篇）
一篇文章拆 8–10 个标号段落 A–…，10 个句子匹配段落。
```js
CET6_DATA.matching = [
  { id:1,
    paragraphs:[ {label:"A", text:"段落原文"}, {label:"B", text:""} ],
    statements:[ {s:"待匹配句子", answer:"C", tip:"同义替换线索"} /* 共10句 */ ],
    analysis:{ passage:"", sentence:"", vocabulary:"" } }
];
```

## 6. reading-careful-1.js 与 reading-careful-2.js —— 仔细阅读（每个文件 6 篇，共 12 篇）
每篇 5 道单选。文件1直接赋值；文件2用 concat 追加。
文件1：
```js
CET6_DATA.carefulReading = [ {id:1, passage:"正文(350–450词)",
  questions:[ {q:"", options:[4], answer:"C", tip:"定位+推理1句"} /*5题*/ ],
  analysis:{passage:"",sentence:"",vocabulary:""} } ];
```
文件2：
```js
CET6_DATA.carefulReading = (CET6_DATA.carefulReading || []).concat([
  { id:7, passage:"", questions:[ /*5题*/ ], analysis:{passage:"",sentence:"",vocabulary:""} }
]);
```
（文件2的 id 从 7 到 12，保持全局连续。）
