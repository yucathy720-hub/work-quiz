const people = {
  a: ['内容增长厂', '你的团队原型', '快速试验', '热点观察 · 创意迭代 · 反馈敏感', '先发一版，明天带着数据回来。', '你喜欢反馈来得快的工作。遇到模糊问题，你倾向于先做一次低成本试验，再决定值不值得加码。', '能从一堆意见里提炼出值得验证的创意。入组时可以问问团队多久复盘一次。', '你的浏览器永远开着三个竞品页面，还有一个随时能发的草稿。'],
  b: ['产品体验厂', '你的团队原型', '用户体验', '场景观察 · 表达清楚 · 体验打磨', '同事说功能能用，你问用户为什么走了。', '你愿意顺着一个卡点多问几句，尤其在意第一次用的人能不能顺利完成任务。', '能把「感觉不好用」变成具体、可修改的问题。入组时可以问问谁能直接接触用户。', '你的工位便利贴上写着：这按钮到底是谁在点？'],
  c: ['商业经营厂', '你的团队原型', '目标经营', '目标拆解 · 资源协调 · 成本意识', '先把账算明白，再决定要不要开这个会。', '你习惯先说清目标和资源，再决定由谁负责哪一段。你喜欢知道投入最终换来了什么。', '能在目标冲突时谈出可落地的优先级。入组时可以问问绩效指标和手头资源是否匹配。', '群里有人说「全都很急」，你回复了一张优先级表。'],
  d: ['技术平台厂', '你的团队原型', '工程建设', '系统思考 · 稳定交付 · 自动化', '同样的问题出现第三次，你已经在写自动化。', '你倾向于追到反复出问题的那个环节，再做一次能被复用的改进。', '能把个人经验变成团队接得住的系统。入组时可以问问有没有明确的维护责任和改造时间。', '你最想退订的邮件，是那封每天都需要手动确认的报表。']
};

// Each option starts with its scoring dimension.
const bank = [
  ['周一收到一个只写着「做点新东西」的需求，你先做什么？', 'a做个小样发给一小批人看反应', 'b问几位用户现在最卡在哪一步', 'c问清楚这次最需要达成什么目标', 'd先找找哪些现有组件能复用'],
  ['一场会开了四十分钟还没结论，你会怎么收尾？', 'c明确今天必须定的事和负责人', 'd把卡住的决定和依赖记进协作流程', 'b把争议还原成一个具体的使用场景', 'a提议明天拿两个草案回来对照'],
  ['新功能上线后，第一天你最想看什么？', 'd有没有报错、波动或告警', 'a第一波人有没有点进来并愿意转发', 'c实际结果离原定目标还有多远', 'b用户在第几步离开了'],
  ['你最愿意接手哪种烂摊子？', 'b一个大家都会抱怨却说不清的使用流程', 'c一个投入很多但没人能说清产出的项目', 'd一套天天靠人工救火的流程', 'a一个曝光突然掉下来、需要重新找抓手的栏目'],
  ['领导给你一周时间试个新点子，你最想交出什么？', 'a几个经过小范围试投的创意', 'd一个可重复运行的验证工具', 'b一段用户操作记录和改版方案', 'c一份成本与潜在收益都写明的试行计划'],
  ['跨团队协作，每个人都说自己没空，你怎么推进？', 'b找个双方都关心的用户问题开个头', 'a用短周期的小试验降低参与成本', 'd把接口和依赖定清楚，让大家能并行', 'c算清优先级，谈妥人手和交付边界'],
  ['看见竞品上了一个新功能，你首先好奇？', 'd这种功能在规模变大后怎么保持稳定', 'c它靠什么回本，值不值这笔投入', 'a它是怎么在短时间内被那么多人看到的', 'b它解决了用户以前遇到的哪个麻烦'],
  ['项目复盘只留十分钟，你最想提哪件事？', 'c预算和结果哪里差得最远', 'b哪条真实反馈改变了团队的判断', 'd下一次怎样靠系统避免同样的失误', 'a哪次尝试带来了超预期的反馈'],
  ['你更喜欢经理怎么给反馈？', 'd指出哪处实现容易出问题，给我改进空间', 'b拿具体的用户操作讲哪里不顺', 'a给我看即时数据，让我快速试下一版', 'c说清楚结果和预期差多少、资源能怎么调'],
  ['团队要砍掉一半待办，你会先保住什么？', 'b用户用得最频繁、却一直很难用的那一步', 'c直接决定核心目标能否达成的事项', 'a能尽快验证未知机会的小尝试', 'd会成为后续所有项目瓶颈的基础工作'],
  ['你最希望新人入职第一天就能拿到什么？', 'a历次试验的结果和创意素材库', 'b典型用户案例和实际反馈', 'd清晰的文档和可用的自助环境', 'c团队目标、职责边界和近期计划'],
  ['周五有人说「顺手再加个小需求」，你的反应？', 'c问它要替换掉哪项已排好的工作', 'a如果能单独启动，就丢个小样下周看', 'b先看它会不会打乱原来顺畅的流程', 'd确认依赖、影响范围和能否回滚'],
  ['如果有一笔小额自主预算，你最愿意花在哪？', 'd把重复的人工操作自动化', 'a试一轮新的分发渠道', 'c打通一个长期拖慢交付的合作环节', 'b请几个目标用户现场试用产品'],
  ['你最愿意把哪种成果写进简历？', 'b让一个复杂流程从七步缩到三步', 'd把原本靠人工值守的流程做成稳定服务', 'c在资源有限时把项目做到了盈亏平衡', 'a从零试出一个有稳定新增的渠道'],
  ['结果突然比预期差很多，你先排查什么？', 'c转化、成本、供给哪段偏离了目标', 'd数据链路是否异常、变更记录里有什么', 'b这批人到底是在哪一步放弃的', 'a不同渠道和素材是不是反馈一致'],
  ['哪种任务会让你不知不觉忘了下班？', 'a看到第一波结果后忍不住想试第二版', 'c把一堆分散资源拼成能落地的计划', 'b把一个拧巴的交互改到用起来顺手', 'd定位一个持续很久却没人说明白的问题'],
  ['你希望同事因为哪件事最常来找你？', 'b帮他们看用户在使用时会不会迷路', 'a帮他们想一套能马上小范围试的做法', 'c帮他们拍板哪件事该做、哪件事该停', 'd帮他们找一套可以复用的工具或方案'],
  ['团队只能改一个每周例会，你想改成？', 'd过一遍事故、重复劳动和工程改造', 'b一起看一位真实用户是怎么完成任务的', 'a带着实验结果来挑下一轮要试的点子', 'c对齐核心目标、资源和本周取舍'],
  ['面对一个高曝光但不熟悉的机会，你最舒服的推进方式？', 'c先明确投入上限和退出条件', 'a先低成本试一次，看第一波反馈', 'd先建好监控和回滚路径，再逐步放量', 'b找最可能遇到麻烦的一群人先试用'],
  ['如果下周换团队，你最想先确认哪件事？', 'a能不能快速做小试验并看到反馈', 'b产品决策有没有机会听到真实用户', 'c目标、权限和投入能不能对得上', 'd有没有时间建设和维护长期系统']
];

const dimensions = Object.keys(people);
const opportunities = Object.fromEntries(dimensions.map(key => [
  key, bank.filter(([, ...options]) => options.some(option => option[0] === key)).length
]));

function getResult(answers) {
  const scores = Object.fromEntries(dimensions.map(key => [key, 0]));
  const recent = {};
  bank.forEach((row, index) => {
    const key = row[answers[index] + 1][0];
    scores[key]++;
    recent[key] = index;
  });
  // Compare by selection rate so dimensions with more appearances do not gain an advantage.
  // Equal rates favor repeat selections, then the most recently chosen dimension.
  return dimensions.reduce((best, key) => {
    const difference = scores[key] * opportunities[best] - scores[best] * opportunities[key];
    return (difference || scores[key] - scores[best] || (recent[key] ?? -1) - (recent[best] ?? -1)) > 0 ? key : best;
  });
}

if (typeof document !== 'undefined') {
  const byId = id => document.getElementById(id);
  const answers = [];
  let index = 0;

  function renderQuestion() {
    const [prompt, ...options] = bank[index];
    byId('question').textContent = prompt;
    byId('count').textContent = `第 ${index + 1} / ${bank.length} 题`;
    byId('progress').max = bank.length;
    byId('progress').value = answers.length;
    const choices = options.map((option, position) => {
      const label = document.createElement('label');
      label.className = 'choice';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'choice';
      radio.value = position;
      radio.checked = answers[index] === position;
      const body = document.createElement('span');
      const letter = document.createElement('strong');
      letter.textContent = 'ABCD'[position];
      letter.setAttribute('aria-hidden', 'true');
      body.append(letter, option.slice(1));
      label.append(radio, body);
      return label;
    });
    byId('choices').replaceChildren(...choices);
    byId('back').disabled = index === 0;
    byId('next').disabled = answers[index] === undefined;
    byId('next').textContent = index === bank.length - 1 ? '查看结果' : '下一题';
    byId('question').focus();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      byId('choices').animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'none' }], { duration: 230, easing: 'ease-out' });
    }
  }

  function start() {
    answers.length = 0;
    index = 0;
    byId('home').hidden = true;
    byId('result').hidden = true;
    byId('quiz').hidden = false;
    window.scrollTo(0, 0);
    renderQuestion();
  }

  byId('start').addEventListener('click', start);
  byId('restart').addEventListener('click', start);
  byId('back').addEventListener('click', () => {
    index--;
    renderQuestion();
  });
  byId('choices').addEventListener('change', event => {
    answers[index] = Number(event.target.value);
    byId('progress').value = answers.length;
    byId('next').disabled = false;
  });
  byId('form').addEventListener('submit', event => {
    event.preventDefault();
    if (answers[index] === undefined) return;
    if (index < bank.length - 1) {
      index++;
      renderQuestion();
      return;
    }
    const fields = ['person', 'era', 'role', 'traits', 'line', 'reason', 'strength', 'bonus'];
    people[getResult(answers)].forEach((value, position) => {
      byId(fields[position]).textContent = value;
    });
    byId('quiz').hidden = true;
    byId('result').hidden = false;
    window.scrollTo(0, 0);
    byId('person').focus({ preventScroll: true });
  });
}
