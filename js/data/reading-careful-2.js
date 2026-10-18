window.CET6_DATA = window.CET6_DATA || {};

/* 仔细阅读 第 2 批（文件 2）：id 7–12，与文件 1 合并；使用 concat 追加，不覆盖 */
CET6_DATA.carefulReading = (CET6_DATA.carefulReading || []).concat([
  {
    id: 7,
    passage: "When a major technology company released an automated hiring tool several years ago, engineers discovered that the system systematically penalized resumes containing the word 'women's.' The episode has become a cautionary tale about artificial intelligence and bias, yet researchers warn that the problem extends well beyond a single notorious case. Machine-learning models learn patterns from historical data, and when that data reflects long-standing inequalities, the models can reproduce them at a scale and speed that human managers cannot match.\n\nThe mechanisms are often subtle. A hiring algorithm trained on a decade of resumes from an industry dominated by men may infer that candidates resembling previously successful employees—disproportionately male—are preferable. A medical algorithm used to allocate care-management programs was found to favor white patients over equally sick black patients, because it used healthcare costs as a proxy for medical need. Language models, meanwhile, can associate prestigious professions with masculine pronouns and domestic roles with feminine ones, reflecting imbalances in the texts they were trained on.\n\nCritics argue that the phrase 'algorithm bias' can be misleading. The algorithms themselves do not harbor prejudices; rather, they encode the decisions of those who collect data, choose labels, and define objectives. A model optimized solely for efficiency may systematically disadvantage minority applicants, while the engineers who built it never explicitly considered fairness. This observation has led to a growing field of research devoted to detecting and correcting such disparities. Audits, for instance, can test whether a model produces different outcomes for groups that are otherwise comparable, and 'debiasing' techniques can rebalance training data or impose constraints during optimization.\n\nNevertheless, technical fixes have limits. Fairness is not a single mathematical property; competing definitions sometimes conflict, and a model cannot be optimized for all of them simultaneously. Moreover, auditing requires access to data and systems that private companies guard closely, and the affected individuals rarely know when an algorithm has shaped decisions about their lives.\n\nScholars therefore insist that bias in artificial intelligence is fundamentally a social problem. Diverse engineering teams, public disclosure, and democratic debate about where automation is appropriate may matter as much as better mathematics. Without such measures, they warn, machine learning risks rendering old inequalities not only persistent but seemingly objective—prejudice dressed in the neutral language of data.",
    questions: [
      {
        q: "What does the example of the automated hiring tool mainly illustrate?",
        options: [
          "AI systems can reproduce historical inequalities on a large scale.",
          "Technology companies deliberately discriminate against female applicants.",
          "Women generally write weaker resumes than men in technology industries.",
          "Human managers make hiring decisions more slowly than machines."
        ],
        answer: "A",
        tip: "定位第1段。例证/细节题：该例用于说明模型从历史数据中学会并放大长期不平等，而非公司有意歧视。"
      },
      {
        q: "The word \"proxy\" in Paragraph 2 is closest in meaning to",
        options: ["an obstacle", "a substitute measure", "a guarantee", "a final target"],
        answer: "B",
        tip: "定位第2段。词义题：该算法用医疗花费作为医疗需求的“替代指标”，substitute measure 最贴合。"
      },
      {
        q: "What can be inferred about technical solutions to algorithmic bias?",
        options: [
          "They can eliminate all bias once the training data is rebalanced.",
          "Their value is limited partly because fairness has competing definitions.",
          "Most engineers reject them as mathematically impossible.",
          "They work best when companies keep their systems confidential."
        ],
        answer: "B",
        tip: "定位第4段。推断题：公平并非单一数学属性，不同定义相互冲突，故技术修复有其局限。"
      },
      {
        q: "What is the scholars' attitude toward treating AI bias as a purely technical issue?",
        options: ["Approving.", "Critical.", "Indifferent.", "Cautiously optimistic."],
        answer: "B",
        tip: "定位第5段。态度题：学者坚持偏见“根本上是社会问题”，对纯技术视角持批评态度。"
      },
      {
        q: "Which of the following best states the main idea of the passage?",
        options: [
          "How quickly machine-learning models process human language.",
          "Why one hiring tool damaged the reputation of a single company.",
          "The origins of AI bias, its consequences, and the limits of proposed fixes.",
          "A comparison of the daily workloads of managers and algorithms."
        ],
        answer: "C",
        tip: "主旨题：全文按“现象—机制—对策—局限—社会根源”展开，C 项完整覆盖。"
      }
    ],
    analysis: {
      passage: "第1段以招聘工具事件引入：模型会从历史数据中习得并规模化复制不平等；第2段举例说明偏见机制的隐蔽性（招聘、医疗分配、语言模型）；第3段指出“算法偏见”实为人类在数据采集、标签设定、目标定义环节决策的编码，并介绍审计与去偏技术；第4段转折：技术修复有边界，公平定义彼此冲突，且审计受商业保密限制；第5段升华：偏见本质是社会问题，需多元团队、公开披露与公共讨论，否则旧有不公将被包装成“客观数据”。",
      sentence: "1) A medical algorithm <i>used to allocate care-management programs</i> was found to favor white patients over equally sick black patients, <b>because</b> it used healthcare costs as a proxy for medical need. 主干 A medical algorithm was found to favor A over B；used to...为过去分词短语作后置定语；because 引导原因状语从句。<br>2) A model <i>optimized solely for efficiency</i> may systematically disadvantage minority applicants, <b>while</b> the engineers <i>who built it</i> never explicitly considered fairness. 主干 A model may disadvantage applicants；optimized...作后置定语；while 引导对比状语从句，内含 who 引导的定语从句。<br>3) Without such measures, <i>they warn</i>, machine learning risks rendering old inequalities not only persistent but seemingly objective—prejudice <i>dressed in the neutral language of data</i>. 主干 machine learning risks rendering old inequalities persistent and objective；they warn 为插入语；dressed in...为过去分词短语作 prejudice 的后置定语。",
      vocabulary: "bias /ˈbaɪəs/ n. 偏见（同义 prejudice）<br>reproduce /ˌriːprəˈdjuːs/ v. 再现；复制（同义 replicate）<br>allocate /ˈæləkeɪt/ v. 分配（同义 distribute）<br>proxy /ˈprɒksi/ n. 替代指标；代理人（同义 substitute）<br>disparity /dɪˈspærəti/ n. 差异；不平等（同义 inequality）<br>audit /ˈɔːdɪt/ n./v. 审查；审计<br>encode /ɪnˈkəʊd/ v. 编码；隐含<br>objective /əbˈdʒektɪv/ adj. 客观的<br>替换积累：penalize→punish；subtle→hard to detect；systematically→consistently；notorious→infamous。"
    }
  },
  {
    id: 8,
    passage: "Images of sea turtles entangled in plastic bags have made marine debris one of the most visible environmental problems of the century. Yet for decades, international efforts to address it have proceeded in fragments, and researchers say the world is still treating the symptoms rather than the source of the crisis.\n\nThe scale is sobering. Millions of tons of plastic enter the ocean each year, much of it carried by rivers from rapidly developing coastal regions. Once afloat, the material does not simply disappear. Sunlight and wave action break larger objects into microplastics, fragments smaller than five millimeters, which have been found in Arctic ice, deep-sea sediments, and the bodies of organisms ranging from plankton to whales. Because plastic moves through food chains, some scientists regard it as a slow, global experiment whose consequences remain largely unknown.\n\nGovernance has struggled to keep pace. The oceans are governed by an intricate web of international agreements, but few of these instruments were designed with plastic in mind. Cleanup operations, though photogenic, recover only a tiny fraction of what enters the water, and they cannot remove microplastics at all. Recycling, meanwhile, handles a minority of global plastic production, and much of the material labeled as recyclable has historically been shipped abroad rather than reprocessed at home.\n\nA growing number of policymakers therefore argue that the only durable solution lies upstream. Their proposals include bans on single-use items, requirements that companies finance the collection of their own packaging, and design rules that make plastic products easier to reuse or recycle. Negotiations among more than 170 countries aim to produce a binding treaty that could restrict production of virgin plastic and impose uniform obligations on manufacturers. Such measures remain contentious: petrochemical industries and some major producing nations favor voluntary commitments over mandatory caps.\n\nSupporters of a strong treaty concede that reducing plastic will involve costs and inconvenience. They counter, however, that the alternative—permanent accumulation in ecosystems that supply much of humanity's food and oxygen—is incomparably more expensive. The central lesson, marine biologists suggest, is that the ocean has for centuries absorbed humanity's discards because it seemed limitless. It is not, and governance must finally reflect that fact.",
    questions: [
      {
        q: "According to the passage, why are ocean cleanup operations of limited value?",
        options: [
          "They are prohibited by most international maritime agreements.",
          "They recover only a tiny fraction of floating plastic and cannot remove microplastics.",
          "They concentrate exclusively on rivers and ignore the open sea.",
          "They deliberately destroy deep-sea sediments and plankton."
        ],
        answer: "B",
        tip: "定位第3段。细节题：清理行动回收量极小，且对微塑料无能为力。"
      },
      {
        q: "What can be inferred about plastic labeled \"recyclable\"?",
        options: [
          "Most of it is efficiently reprocessed within the country that collects it.",
          "Much of it has been exported abroad instead of being recycled locally.",
          "It is explicitly excluded from all treaty negotiations.",
          "It breaks down at sea more slowly than ordinary plastic."
        ],
        answer: "B",
        tip: "定位第3段末句。推断题：原文“shipped abroad rather than reprocessed at home”的同义改写。"
      },
      {
        q: "The phrase \"lies upstream\" in Paragraph 4 most probably means the solution should",
        options: [
          "target the production and design stage of plastic",
          "be carried out in deep waters far offshore",
          "focus on the final disposal of waste",
          "be organized by cleanup volunteers"
        ],
        answer: "A",
        tip: "定位第4段。词义/语境题：upstream 与“下游清理”相对，指在生产、设计源头治理。"
      },
      {
        q: "What is the petrochemical industry's stance toward mandatory production caps?",
        options: [
          "Enthusiastic support for strict caps.",
          "A preference for voluntary commitments instead.",
          "Complete indifference to the negotiations.",
          "A demand for an immediate ban on virgin plastic."
        ],
        answer: "B",
        tip: "定位第4段末。态度题：行业和部分生产国 favor voluntary commitments over mandatory caps。"
      },
      {
        q: "Which of the following is the main idea of the passage?",
        options: [
          "How sunlight and waves gradually form microplastics.",
          "Why cleanup technology continues to improve each year.",
          "Ocean plastic demands source-oriented, binding international governance.",
          "The historical development of international fishing treaties."
        ],
        answer: "C",
        tip: "主旨题：文章批判末端清理，主张源头管控与具约束力的全球条约，C 项概括核心。"
      }
    ],
    analysis: {
      passage: "第1段由海洋生物受害图像引入，提出核心论点：治理碎片化、治标不治本；第2段说明规模与危害——河流输入、破碎为微塑料、进入极地与深海乃至食物链；第3段剖析治理困境：现有海洋公约缺乏针对塑料的设计，清理收效甚微，回收比例低且“可回收”塑料长期被出口；第4段转向“上游”方案：限用一次性制品、生产者责任、再利用设计，以及170余国谈判约束性条约，并点出行业与生产国的阻力；第5段支持者让步后反驳：任由塑料在生态系统中累积代价更高，海洋从来并非无限。",
      sentence: "1) Sunlight and wave action break larger objects into microplastics, <i>fragments smaller than five millimeters</i>, <b>which</b> have been found in Arctic ice, deep-sea sediments, and the bodies of organisms ranging from plankton to whales. 主干 Sunlight and wave action break objects into microplastics；fragments...为同位语；which 引导非限制性定语从句；ranging from...to...作后置定语。<br>2) Negotiations among more than 170 countries aim to produce a binding treaty <b>that</b> could restrict production of virgin plastic <b>and</b> impose uniform obligations on manufacturers. 主干 Negotiations aim to produce a treaty；that 定语从句含 restrict 与 impose 两个并列谓语。<br>3) They counter, however, <b>that</b> the alternative—permanent accumulation in ecosystems <i>that supply much of humanity's food and oxygen</i>—is incomparably more expensive. 主干 They counter that the alternative is more expensive；破折号间为插入语，内含 that 引导的定语从句。",
      vocabulary: "debris /ˈdeɪbriː/ n. 残骸；碎片（同义 litter）<br>entangle /ɪnˈtæŋɡl/ v. 缠住（同义 trap）<br>sobering /ˈsəʊbərɪŋ/ adj. 令人警醒的<br>sediment /ˈsedɪmənt/ n. 沉积物<br>intricate /ˈɪntrɪkət/ adj. 错综复杂的（同义 complex）<br>binding /ˈbaɪndɪŋ/ adj. 有约束力的（反义 voluntary）<br>virgin plastic 原生塑料<br>contentious /kənˈtenʃəs/ adj. 有争议的（同义 controversial）<br>mandatory /ˈmændətəri/ adj. 强制的（同义 compulsory）<br>concede /kənˈsiːd/ v. 承认；让步<br>替换积累：durable→lasting；caps→upper limits；discards→waste。"
    }
  },
  {
    id: 9,
    passage: "For decades, telemedicine was treated as a promising but peripheral part of healthcare, hampered by regulation, reimbursement rules, and habits forged in doctors' offices. A public-health emergency changed all that almost overnight. As clinics closed and patients stayed home, consultations by video or telephone surged from a rarity to a routine, prompting a lasting reassessment of what remote care can and cannot do.\n\nEnthusiasts argue that the benefits extend well beyond infection control. For rural patients who once drove hours for a specialist appointment, virtual visits save time, wages, and fuel. Chronically ill patients can be monitored at home through connected devices that transmit blood pressure, glucose, and heart rhythm, allowing clinicians to detect deterioration before it becomes an emergency. Several studies have found remote follow-up after surgery or heart failure to be at least as effective as in-person care, and sometimes more so, precisely because patients are more likely to keep appointments they can attend from their kitchens.\n\nSkeptics, however, caution that the apparent success of emergency-era telemedicine may not generalize. Much of it substituted for visits that would have happened anyway, among patients who already had doctors and broadband. The populations with the greatest needs—the elderly, the poor, and those with limited digital skills—are precisely those most likely to be excluded. A screen cannot palpate an abdomen, listen carefully to lungs through a cheap microphone, or detect the unspoken anxiety that a clinician reads from body language. There is also evidence that easy scheduling can generate low-value visits, increasing rather than reducing total spending.\n\nHow regulators respond will determine which of these visions prevails. Requiring insurers to pay for telemedicine on equal terms has made the market flourish, yet critics worry that permanent parity removes incentives to prove which remote services genuinely improve outcomes. Privacy rules, licensing across state or national borders, and standards for the flood of data from wearable devices all remain unsettled.\n\nMost clinicians now reject both extreme positions. Telemedicine, they suggest, is not a replacement for the hospital but an additional instrument, whose value depends on matching the technology to the condition and the patient. The task ahead is less about celebrating novelty than about learning, carefully and humbly, where distance matters—and where it does not.",
    questions: [
      {
        q: "Why did telemedicine remain a peripheral part of healthcare for decades?",
        options: [
          "The necessary video technology had not yet been invented.",
          "Regulation, reimbursement rules, and established habits held it back.",
          "Patients unanimously refused to consult doctors remotely.",
          "Studies had already proved remote care clinically dangerous."
        ],
        answer: "B",
        tip: "定位第1段。细节题：hampered by regulation, reimbursement rules, and habits 的直接对应。"
      },
      {
        q: "Remote follow-up care can sometimes outperform in-person care because",
        options: [
          "patients are more likely to keep appointments they can attend from home",
          "doctors can palpate patients accurately through connected devices",
          "insurers refuse to charge anything for virtual visits",
          "it removes the need to train medical specialists"
        ],
        answer: "A",
        tip: "定位第2段末。推断题：原文指出患者更能守约，故效果有时更好。"
      },
      {
        q: "The word \"palpate\" in Paragraph 3 is closest in meaning to",
        options: ["examine by touch", "perform surgery on", "treat with drugs", "record on video"],
        answer: "A",
        tip: "定位第3段。词义题：palpate 指医生“触诊”，即用手按压检查。"
      },
      {
        q: "What is the attitude of most clinicians toward telemedicine today?",
        options: [
          "It will eventually replace hospitals entirely.",
          "It should be abandoned as unreliable.",
          "It is a complementary tool to be matched to condition and patient.",
          "Its spread is irrelevant to their profession."
        ],
        answer: "C",
        tip: "定位第5段。态度题：临床医生拒绝两种极端，视其为 additional instrument。"
      },
      {
        q: "What is the passage mainly about?",
        options: [
          "The technical evolution of video-conferencing software.",
          "A balanced look at telemedicine's benefits, limits, and governance.",
          "Why broadband remains unavailable in poor rural regions.",
          "How insurance companies determine reimbursement rates."
        ],
        answer: "B",
        tip: "主旨题：全文利弊并陈并讨论监管走向，B 项最全面。"
      }
    ],
    analysis: {
      passage: "第1段交代背景：远程医疗长期受监管、报销规则与就医习惯制约，突发公共卫生事件使其从例外变为常态；第2段列支持理由：农村可及性、家用连接设备实现慢病监测、术后或心衰随访因守约率高而效果不差甚至更好；第3段为怀疑方降温：急诊时期成果未必可推广，老年与贫困人群遭遇数字鸿沟，屏幕无法触诊、听诊或捕捉肢体语言，便捷预约还可能制造低价值就诊；第4段指出监管决定未来：同等付费促进市场繁荣，但可能弱化疗效验证动力，隐私、跨区执业许可、可穿戴数据标准均悬而未决；第5段给出临床界折中立场：远程医疗是补充工具，关键在于按病情与患者匹配。",
      sentence: "1) Chronically ill patients can be monitored at home through connected devices <b>that</b> transmit blood pressure, glucose, and heart rhythm, <i>allowing clinicians to detect deterioration before it becomes an emergency</i>. 主干 patients can be monitored；that 引导定语从句；allowing...为现在分词短语表结果，内含 before 时间状语从句。<br>2) The populations with the greatest needs—the elderly, the poor, and those with limited digital skills—are precisely those <i>most likely to be excluded</i>. 主干 The populations are those；with the greatest needs 作定语；破折号内为插入举例；most likely to be excluded 为形容词短语作后置定语。<br>3) The task ahead is <b>less about</b> celebrating novelty <b>than about</b> learning, carefully and humbly, where distance matters—and where it does not. less...than...“与其说……不如说……”；where 引导名词性从句作 learning 的宾语；破折号后为省略式并列。",
      vocabulary: "peripheral /pəˈrɪfərəl/ adj. 边缘的；次要的（同义 marginal）<br>hamper /ˈhæmpə/ v. 阻碍（同义 hinder, impede）<br>reimbursement /ˌriːɪmˈbɜːsmənt/ n. 报销；偿付<br>surge /sɜːdʒ/ v. 激增（同义 rise sharply）<br>deterioration /dɪˌtɪəriəˈreɪʃn/ n. 恶化（同义 worsening）<br>palpate /ˈpælpeɪt/ v. 触诊<br>parity /ˈpærəti/ n. 对等；同等<br>prevail /prɪˈveɪl/ v. 获胜；盛行<br>novelty /ˈnɒvlti/ n. 新奇事物<br>替换积累：generalize→apply broadly；flourish→thrive；unsettled→unresolved。"
    }
  },
  {
    id: 10,
    passage: "Few daily experiences shape the mood of a city as powerfully as its traffic. Congestion wastes time, pollutes air, and converts streets, which occupy a large share of urban land, into zones that people move through rather than inhabit. In response, a growing number of cities have begun to question the assumption that dominated twentieth-century planning: that the best response to more cars is more road space.\n\nThe logic of induced demand now underpins much of this rethink. When a highway is widened, driving briefly becomes faster; the delay falls, and trips that were previously avoided, postponed, or routed elsewhere reappear. Within a few years, traffic typically returns to its former level, while emissions, accidents, and the barrier effect of wide roads persist. Researchers comparing cities with and without major highway expansions find remarkably little lasting difference in congestion, but substantial differences in how much land is devoted to moving and parking automobiles.\n\nAccordingly, planners are redirecting investment toward alternatives that move more people using less space. Bus lanes, if enforced continuously, can carry several times the passenger volume of the same width given over to private cars. Congestion charging, in which drivers pay to enter the city center during peak hours, has reduced traffic in every city where it has been properly implemented, while producing revenue for public transit. Lower speed limits and redesigned intersections have cut deaths among pedestrians and cyclists, who account for a disproportionate share of road fatalities.\n\nSuch policies are rarely popular at first. Shopkeepers fear losing customers, commuters resent new charges, and critics dismiss cycling infrastructure as a fashion for the young and affluent. Yet experience shows that fears are often overstated: areas calmed from traffic frequently gain pedestrians, and retail spending can rise once streets become pleasant places to linger. The deeper obstacle may be psychological. Generations have equated mobility with driving, and policies that ask people to change routines feel like punishment even when the alternatives eventually save them time.\n\nThe central insight is that transport is not merely an engineering problem but a choice about what a city is for. Streets cannot simultaneously maximize vehicle throughput and function as markets, playgrounds, and meeting places. Every city, in effect, votes on that trade-off every time it allocates a meter of asphalt.",
    questions: [
      {
        q: "According to the logic of induced demand, widening a highway seldom reduces lasting congestion because",
        options: [
          "road construction projects take far too many years",
          "easier driving draws back trips that refill the added capacity",
          "new highways are quickly damaged by overloaded trucks",
          "public transit services are withdrawn at the same time"
        ],
        answer: "B",
        tip: "定位第2段。细节题：延误下降后原本被抑制的出行重新出现，几年内拥堵回归。"
      },
      {
        q: "What do researchers find when comparing cities with and without major highway expansions?",
        options: [
          "Expanded highways permanently double average traffic speed.",
          "Cities without expansions suffer markedly worse air quality.",
          "Expansions change land use far more than they change long-run congestion.",
          "All cities devote roughly equal land to parking cars."
        ],
        answer: "C",
        tip: "定位第2段末。推断题：拥堵差异甚微，而土地用于汽车的程度差异显著。"
      },
      {
        q: "The word \"linger\" in Paragraph 4 is closest in meaning to",
        options: ["stay on", "rush through", "pay tolls", "park illegally"],
        answer: "A",
        tip: "定位第4段。词义题：街道变得宜人后人们愿意“逗留”，stay on 正确。"
      },
      {
        q: "What is the author's attitude toward the car-centered planning of the twentieth century?",
        options: [
          "Unreserved admiration",
          "Critical reconsideration",
          "Complete indifference",
          "Defensive support"
        ],
        answer: "B",
        tip: "态度题：第1段称其为被质疑的假设，第5段重申应重新选择，属批判性反思。"
      },
      {
        q: "What is the main argument of the passage?",
        options: [
          "Highway construction follows a fixed engineering process.",
          "Urban transport policy is a value trade-off between car throughput and livable streets.",
          "Shopkeepers will oppose every transport reform in principle.",
          "Buses are mechanically more efficient than private cars."
        ],
        answer: "B",
        tip: "主旨题：从诱增需求到替代方案再到“城市为何而存在”，落脚点是空间用途的权衡。"
      }
    ],
    analysis: {
      passage: "第1段从交通对城市情绪的影响切入，亮出被重新审视的旧假设——车多就修路；第2段以“诱增需求”解释扩路失效：暂时畅通诱发被抑制的出行回归，拥堵数年内复原，比较研究显示真正改变的是土地用途；第3段给出更省空间的对策：持续执法的公交道、拥堵收费反哺公共交通、低速与交叉口 redesign 降低行人和骑行者死亡；第4段讨论政策阻力：商户担忧、通勤者反感、骑行设施被讥讽，继而用经验事实反驳，并指出更深障碍是“机动=开车”的心理定式；第5段收束：交通本质是城市功能定位的选择，每一米沥青的分配都是一次投票。",
      sentence: "1) When a highway is widened, driving briefly becomes faster; the delay falls, <b>and</b> trips <i>that were previously avoided, postponed, or routed elsewhere</i> reappear. 分号连接并列分句；that 引导定语从句，含 avoided / postponed / routed 三个并列被动谓语。<br>2) Congestion charging, <b>in which</b> drivers pay to enter the city center during peak hours, has reduced traffic in every city <b>where</b> it has been properly implemented, <i>while producing revenue for public transit</i>. 主干 Congestion charging has reduced traffic；in which 引导非限制性定语从句；where 引导定语从句；while producing 为省略式伴随状语。<br>3) Generations have equated mobility with driving, and policies <i>that ask people to change routines</i> feel like punishment <b>even when</b> the alternatives eventually save them time. and 并列两个分句；that 引导定语从句；even when 引导让步状语从句。",
      vocabulary: "congestion /kənˈdʒestʃən/ n. 拥堵<br>inhabit /ɪnˈhæbɪt/ v. 居住于；栖息<br>induce /ɪnˈdjuːs/ v. 诱发；引起（同义 generate）<br>underpin /ˌʌndəˈpɪn/ v. 支撑；构成基础<br>disproportionate /ˌdɪsprəˈpɔːʃənət/ adj. 不成比例的<br>fatality /fəˈtæləti/ n. （事故）死亡<br>linger /ˈlɪŋɡə/ v. 逗留；徘徊（同义 stay）<br>throughput /ˈθruːpʊt/ n. 通过量；吞吐量<br>trade-off /ˈtreɪdɒf/ n. 权衡；取舍<br>替换积累：persist→remain；resent→feel bitter about；overstated→exaggerated；enforce→compel compliance with。"
    }
  },
  {
    id: 11,
    passage: "For most of the past half-century, the world's capacity to produce food grew faster than its population, a triumph of plant breeding and synthetic fertilizer that economists call the Green Revolution. Yet today the apparent abundance masks a fragile system. Although global output is more than sufficient in calories, hundreds of millions remain undernourished, and the very methods that lifted yields are now straining the ecological foundations on which future harvests depend.\n\nThe first source of fragility is concentration. A handful of crops—maize, wheat, rice, and soybeans—supply most human calories, and a shrinking number of high-yielding varieties have displaced thousands of traditional ones. Uniform fields are efficient, but they are also vulnerable: a single new strain of fungus or an unusual heat wave can sweep across entire regions. The loss of crop diversity is matched by a loss of diversity in the organisms that support agriculture, as pollinator populations decline and soils lose organic matter.\n\nA second strain comes from input dependence. Modern harvests rely heavily on synthetic nitrogen, much of it manufactured from natural gas, and on irrigation water pumped from ancient aquifers that are not being replenished. When energy prices rise, fertilizer prices follow, a relationship that has translated local conflicts into bread shortages thousands of kilometers away. Climate change compounds the pressure: heat suppresses grain formation, droughts become more frequent, and heavy rains wash away the very soil that crops require.\n\nOptimists note that agricultural productivity has repeatedly confounded pessimists, and that technology—from precision farming to gene-edited drought-resistant crops—may do so again. But researchers caution that technology alone is unlikely to solve a problem that is also one of distribution and waste. Roughly a third of all food produced is lost after harvest or thrown away, while diets in wealthy populations increasingly demand resource-intensive meat. Reforming subsidies that encourage water waste and overuse of chemicals would, on most estimates, do as much as any new seed.\n\nFood security, in other words, is rarely a simple matter of growing more. It is a question of growing differently, sharing fairly, and preserving the biodiversity, soils, and stable climate on which every harvest ultimately rests.",
    questions: [
      {
        q: "Why are uniform, high-yielding crop varieties described as vulnerable?",
        options: [
          "They refuse to grow without enormous amounts of manual labor.",
          "One new pest strain or extreme weather event can hit entire regions.",
          "They supply fewer calories per hectare than traditional varieties.",
          "They cannot be harvested with modern agricultural machinery."
        ],
        answer: "B",
        tip: "定位第2段。细节题：单一品种大面积种植，一种新真菌或异常热浪即可横扫产区。"
      },
      {
        q: "What does the passage imply about synthetic nitrogen fertilizer?",
        options: [
          "Its price is largely unaffected by energy markets.",
          "It is produced primarily by subsistence farmers themselves.",
          "Its gas-based production links food costs to energy prices and distant conflicts.",
          "It actively replenishes the ancient aquifers beneath farmland."
        ],
        answer: "C",
        tip: "定位第3段。推断题：氮肥多以天然气制造，能源涨价带动肥价，局部冲突可传导为千里之外的面包短缺。"
      },
      {
        q: "The word \"compounds\" in Paragraph 3 is closest in meaning to",
        options: ["eases", "adds to and worsens", "reverses", "ignores"],
        answer: "B",
        tip: "定位第3段。词义题：compound 作动词意为“使叠加、加重”。"
      },
      {
        q: "What is the researchers' attitude toward relying on technology alone to ensure food security?",
        options: [
          "Enthusiastic endorsement of technology as the sole solution.",
          "Cautious: technology must be paired with distribution and waste reforms.",
          "Outright rejection of all new agricultural technology.",
          "Suspicion that gene-edited crops are inherently unsafe."
        ],
        answer: "B",
        tip: "定位第4段。态度题：研究者 caution，强调问题还在分配与浪费，补贴改革与新种子同等重要。"
      },
      {
        q: "Which statement best captures the main idea of the passage?",
        options: [
          "The Green Revolution ended global hunger once and for all.",
          "Food security needs resilient farming, fair distribution, and reduced waste, not just higher yields.",
          "Meat consumption should be completely prohibited worldwide.",
          "Natural gas is the only viable feedstock for fertilizer."
        ],
        answer: "B",
        tip: "主旨题：第1段提出悖论，第2–4段分析脆弱性与对策，第5段结论明确为“种得不同、分得公平、护住根基”。"
      }
    ],
    analysis: {
      passage: "第1段以绿色革命的成就反衬悖论：热量总量充足却仍有数亿人营养不良，且高产路径正在透支未来收成的生态根基；第2段第一重脆弱——集中化：少数作物与少数高产品种取代传统品种，遗传单一使病虫与热浪可横扫区域，传粉者衰退、土壤有机质流失加剧系统性风险；第3段第二重脆弱——投入依赖：合成氮以天然气为原料，灌溉抽取不可回补的古含水层，肥价随能源价格波动并把地缘冲突传导为面包短缺，气候变化进一步叠加高温、干旱与表土流失；第4段先让步承认技术曾反复击败悲观预测，随即援引研究者观点：技术无法单独解决分配与浪费问题，三分之一食物损失或被弃，富裕饮食转向耗资源的肉类，补贴改革与新种子同样关键；第5段收束：粮食安全是“如何种、如何分、如何保护生物多样性、土壤与稳定气候”的综合命题。",
      sentence: "1) <b>Although</b> global output is more than sufficient in calories, hundreds of millions remain undernourished, <b>and</b> the very methods <i>that lifted yields</i> are now straining the ecological foundations <b>on which</b> future harvests depend. although 引导让步状语；主句由 and 并列两个分句；that lifted yields 为定语从句；on which 为“介词+关系代词”定语从句。<br>2) When energy prices rise, fertilizer prices follow, a relationship <i>that has translated local conflicts into bread thousands of kilometers away</i>. 主干 fertilizer prices follow；a relationship...为同位语，内含 that 定语从句；translate A into B 表示“把 A 转化为 B”。<br>3) <i>Reforming subsidies that encourage water waste and overuse of chemicals</i> would, <b>on most estimates</b>, do as much as any new seed. 动名词短语 Reforming subsidies 作主语；that 引导定语从句；on most estimates 为插入语；as much as 为比较结构。",
      vocabulary: "synthetic /sɪnˈθetɪk/ adj. 合成的（同义 artificial）<br>yield /jiːld/ n. 产量 v. 出产<br>fragile /ˈfrædʒaɪl/ adj. 脆弱的（同义 vulnerable）<br>strain /streɪn/ v. 使紧张；过度使用<br>replenish /rɪˈplenɪʃ/ v. 补充；重新装满<br>compound /kəmˈpaʊnd/ v. 使加重；混合<br>confound /kənˈfaʊnd/ v. 挫败；证明有误（同义 disprove）<br>aquifer /ˈækwɪfə/ n. 含水层<br>pollinator /ˈpɒləneɪtə/ n. 传粉者<br>undernourished /ˌʌndəˈnʌrɪʃt/ adj. 营养不良的<br>替换积累：displace→replace；foundation→basis；subsidy→government support；durable→lasting。"
    }
  },
  {
    id: 12,
    passage: "Common sense treats memory as a storehouse: learning fills it, forgetting empties it, and a good student is one whose shelves are well stocked. Research from the past several decades suggests a rather different picture. Memory, cognitive scientists argue, is less a recording device than an inference engine, continuously rewriting the past to serve present demands. Understanding that shift changes how we should study—and how we think about failure.\n\nConsider the phenomenon known as the testing effect. Students generally prefer rereading notes, an activity that feels productive because the material becomes increasingly familiar. In controlled experiments, however, learners who read a passage once and then repeatedly attempt to retrieve it remember far more a week later than those who simply reread. The very difficulty of recall—the struggle, the partial answers, the errors—appears to strengthen later access to the memory. Errors made during practice, provided they are followed by corrective feedback, do not corrupt learning; they are among its most effective ingredients.\n\nA second counterintuitive principle concerns spacing. A four-hour study session feels more impressive than four one-hour sessions spread across two weeks, yet the latter reliably produces durable retention. Massed repetition produces fluent short-term performance that learners mistake for mastery; forgetting between sessions, although uncomfortable, makes subsequent retrieval more effortful and therefore more effective. Sleep contributes in the same direction: during sleep, the brain appears to consolidate the day's learning while pruning less useful connections, which is why staying up all night before an examination often does more harm than good.\n\nThese findings carry implications beyond the classroom. If memory is reconstructive, then eyewitness confidence is an imperfect guide to accuracy, and vivid details can feel certain without being true. If desirable difficulties aid learning, then teachers and employers should design tasks that demand retrieval and variation rather than passive repetition.\n\nNone of this means that talent and effort are irrelevant. It does suggest that the most effective learners are not those who avoid forgetting and error, but those who exploit them—treating the mind not as a vessel to be filled, but as a muscle that grows precisely when it is challenged.",
    questions: [
      {
        q: "According to the testing effect, retrieval practice outperforms rereading mainly because",
        options: [
          "the difficulty of recall strengthens later access to the memory",
          "students find repeated tests more entertaining than notes",
          "rereading never produces any sense of familiarity",
          "practice tests prevent learners from making any errors"
        ],
        answer: "A",
        tip: "定位第2段。细节题：回忆本身的困难强化了日后提取记忆的通路。"
      },
      {
        q: "What can be inferred about errors committed during practice?",
        options: [
          "They permanently corrupt the learner's memory.",
          "When paired with corrective feedback, they can promote learning.",
          "They should be punished before feedback is given.",
          "They occur only among the least capable students."
        ],
        answer: "B",
        tip: "定位第2段末。推断题：provided they are followed by corrective feedback 为条件，错误是有效学习成分。"
      },
      {
        q: "The word \"pruning\" in Paragraph 3 is closest in meaning to",
        options: ["strengthening", "trimming away", "duplicating", "recording"],
        answer: "B",
        tip: "定位第3段。词义题：睡眠中大脑巩固学习同时“修剪”无用连接，trim away 对应。"
      },
      {
        q: "What is the author's attitude toward staying up all night before an examination?",
        options: [
          "Strong approval of its dedication.",
          "Disapproval, because sleep consolidates learning.",
          "Complete indifference to the practice.",
          "Admiration for the discipline involved."
        ],
        answer: "B",
        tip: "定位第3段末。态度题：明确指出考前通宵 often does more harm than good。"
      },
      {
        q: "What is the main idea of the passage?",
        options: [
          "Memory functions exactly like a video recorder.",
          "Scientific findings on retrieval, spacing, and error should reshape study habits.",
          "Confident eyewitnesses can never report accurate details.",
          "Natural talent matters more than any learning strategy."
        ],
        answer: "B",
        tip: "主旨题：文章先破旧比喻，再依次讲测试效应、间隔与睡眠、错误价值，并延伸到课堂之外。"
      }
    ],
    analysis: {
      passage: "第1段破除“记忆=仓库”的常识，提出认知科学的新比喻——记忆是不断重写过去以服务当下的推断引擎；第2段讲测试效应：重读因流畅感显得有效，但“读一次后反复提取”的一周后保持率显著更高，回忆的困难与伴随纠错反馈的错误反而巩固提取通路；第3段讲间隔效应：分散练习胜过集中突击，集中重复只制造短期流畅，间隔中的适度遗忘使后续提取更费力也更有效，睡眠则巩固所学并修剪无用连接，故考前通宵弊大于利；第4段把结论延伸至课堂之外：记忆的重构性意味着目击证词的自信不等于准确，教学与培训应设计需要提取与变化的“合意困难”；第5段补充并非否定天赋与努力，而是强调善用遗忘与错误，把心智当作受挑战才成长的肌肉。",
      sentence: "1) Memory, <i>cognitive scientists argue</i>, is <b>less</b> a recording device <b>than</b> an inference engine, <i>continuously rewriting the past to serve present demands</i>. 主干 Memory is less A than B；cognitive scientists argue 为插入语；continuously rewriting...为现在分词短语作伴随状语。<br>2) Errors <i>made during practice</i>, <b>provided (that)</b> they are followed by corrective feedback, do not corrupt learning; they are among its most effective ingredients. 主干 Errors do not corrupt learning; they are ingredients；made during practice 作后置定语；provided that 引导条件状语从句作插入。<br>3) Massed repetition produces fluent short-term performance <i>that learners mistake for mastery</i>; forgetting between sessions, <i>although uncomfortable</i>, makes subsequent retrieval more effortful <b>and therefore</b> more effective. 分号并列：前句含 mistake A for B 结构的定语从句；后句主语为 forgetting，although uncomfortable 为省略式让步状语，make + 宾语 + 双宾补。",
      vocabulary: "retrieve /rɪˈtriːv/ v. 检索；取回（同义 recall, recover）<br>retention /rɪˈtenʃn/ n. 保持；记忆力<br>consolidate /kənˈsɒlɪdeɪt/ v. 巩固（同义 strengthen）<br>prune /pruːn/ v. 修剪；删减（同义 trim, cut away）<br>counterintuitive /ˌkaʊntərɪnˈtjuːɪtɪv/ adj. 反直觉的<br>reconstructive /ˌriːkənˈstrʌktɪv/ adj. 重构的<br>massed /mæst/ adj. 集中的（反义 spaced）<br>ingredient /ɪnˈɡriːdiənt/ n. 成分；要素<br>durable /ˈdjʊərəbl/ adj. 持久的（同义 lasting）<br>inference /ˈɪnfərəns/ n. 推断<br>替换积累：corrupt→spoil；exploit→make use of；vessel→container；desirable difficulty 合意困难（术语）。"
    }
  }
]);
