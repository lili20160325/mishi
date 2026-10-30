// 密室逃脱：①按脚本走一遍通关路线；②穷举所有能到达的状态，确认“任何状态下都还能逃出去”（不会卡死）；
// ③从纸条文字里独立算出每把锁的密码，和锁的答案比对；④检查锁的输入方式、提示、物品等数据。
// 运行：node test/rooms.test.js [--src]
'use strict';
const load=require('./load');const ctx=load(['ENGINE','ROOMS']);const E=ctx.PZE.room,ROOMS=ctx.PZ_ROOMS,ITEMS=ctx.PZ_ITEMS;
let fails=0;const fail=(r,m)=>{fails++;console.log('FAIL',r.id,m);};
const clone=s=>JSON.parse(JSON.stringify(s));
function act(r,st,a){if(a[0]==='code')return E.code(r,st,a[1],a[2]);if(a[0]==='take')return E.take(r,st,a[1]);if(a[0]==='use')return E.use(r,st,a[1],a[2]);if(a[0]==='combine')return E.combine(r,st,a[1],a[2]);if(a[0]==='look')return E.look(r,st,a[1]);}
const key=st=>Object.keys(st.flags).filter(k=>st.flags[k]).sort().join(',')+'|'+st.inv.slice().sort().join(',')+'|'+(st.done?1:0);
/* ---- 精确小数 ---- */
const dec=s=>{const [i,f='']=String(s).split('.');return {n:BigInt(i+f),d:10n**BigInt(f.length)};};
const mul=(a,b)=>({n:a.n*b.n,d:a.d*b.d}),add=(a,b)=>({n:a.n*b.d+b.n*a.d,d:a.d*b.d}),eqv=(a,b)=>a.n*b.d===b.n*a.d;
const sub=(a,b)=>({n:a.n*b.d-b.n*a.d,d:a.d*b.d}),div=(a,b)=>({n:a.n*b.d,d:a.d*b.n});
function gcdN(a,b){a=Math.abs(a);b=Math.abs(b);while(b){const t=a%b;a=b;b=t;}return a||1;}
function cycleInfo(num, den){
  num=((num%den)+den)%den;
  const seen=new Map();
  let rem=num, digits='';
  for(let i=0;i<den+3;i++){
    if(rem===0) return {finite:true, prefix:digits, cycle:''};
    if(seen.has(rem)){const st=seen.get(rem);return {finite:false, prefix:digits.slice(0,st), cycle:digits.slice(st)};}
    seen.set(rem, digits.length);
    rem*=10;
    digits+=String(Math.floor(rem/den));
    rem%=den;
  }
  throw new Error('cycle '+num+'/'+den);
}
function pureFrac(cycle){
  const num=Number(cycle), den=10**cycle.length-1, g=gcdN(num, den);
  return {n:num/g, d:den/g};
}
const lockOf=(r,obj,flags)=>{const st={flags:Object.fromEntries((flags||[]).map(f=>[f,true])),inv:[],done:false};return E.view(r,st,obj).lock;};
const noteOf=(r,obj,flags)=>{const st={flags:Object.fromEntries((flags||[]).map(f=>[f,true])),inv:[],done:false};return E.view(r,st,obj).note||'';};
/* ---- ③ 独立算密码：只读孩子看到的纸条文字 ---- */
const NUMW={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};
const IDIOMS=['五颜六色','七上八下','九牛一毛','三心二意','一心一意','四面八方','十全十美','千言万语','百发百中','三言两语','六神无主','八仙过海'];
const CN='零一二三四五六七八九';
const EN_QA={
  "Nikki: A typhoon is coming! Please _____ the windows.\nYafei: OK!":"CLOSE",
  "【听力·广播】Good morning! Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don't run. Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：Typhoon Haitang is coming on _____ afternoon.":"SATURDAY",
  "【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.":"LIGHTS",
  "You'll need to turn off the _____.":"LIGHTS",
  "【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____.":"INDOORS",
  "【小作文·校长通知】Make sure you wear a _____ on your way home.":"RAINCOAT",
  "You'll want to close the _____.":"WINDOWS",
  "【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____.":"UMBRELLA",
  "【小作文·安全 tip】You'll need to close the _____ when a typhoon is landing.":"WINDOWS",
  "Yiming: What will we need to do?\nMulan: We will need to stay _____.":"INDOORS",
  "【听力·广播】If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don't run.\n问：Stay away from _____!":"TREES",
  "【小作文·安全 tip】Please remember to bring everything _____.":"INSIDE",
  "If you happen to be outside, get to a safe place _____.":"QUICKLY",
  "【听力·广播】Bring everything inside, and close your windows. Also, turn off your lights and TV.\n问：Please close your _____.":"WINDOWS",
  "【小作文·安全 tip】… is better than … → A _____ is better than an umbrella.":"RAINCOAT",
  "Stay away from _____! (trees)":"TREES",
  "【听力·广播】Wear a colourful raincoat so others can see you.\n问：Wear a colourful _____.":"RAINCOAT",
  "【Wonderland】What can you find in a first-aid kit? A _____ helps you see in the dark.":"FLASHLIGHT",
  "Bring everything _____. (把东西都收进来)":"INSIDE",
  "【听力·广播】Also, turn off your lights and TV.\n问：Turn off your _____ and TV.":"LIGHTS",
  "【Wonderland】In a first-aid kit, a _____ can cover a small cut.":"BANDAGE",
  "Wear a colourful _____ so others can see you.":"RAINCOAT",
  "A raincoat is better than an _____.":"UMBRELLA",
  "A _____ will come on Friday. / A _____ is coming.":"TYPHOON",
  "Girl A: You'll need to turn off the lights.\nGirl B: Good _____!":"IDEA",
  "Girl A: You'll want to close the windows.\nGirl B: You're _____!":"RIGHT",
  "Don't _____. We can keep safe.":"WORRY",
  "Try to stay _____ during a typhoon. (opposite of outdoors)":"INDOORS",
  "Right, what about _____? If you happen to be outside…":"OUTDOORS",
  "【Wonderland】Blow a _____ if you need help and others cannot see you.":"WHISTLE",
  'How do you learn new words? I like to learn words in _____.':'CHUNKS',
  'What is a _____? A group of words that go together. (语块)':'CHUNK',
  '_____ = 担心':'WORRY',
  'Please _____ the sentences. (读)':'READ',
  'Be careful! Don\'t let the book _____. (落下)':'FALL',
  'Don\'t speak too _____. (大声的)':'LOUD',
  'Is there _____ in the box? (任何东西)':'ANYTHING',
  'There are a _____ new words on the card. (几个)':'FEW',
  'Can you write a _____? (句子)':'SENTENCE',
  'Look them up in the _____. (词典)':'DICTIONARY',
  'Make word _____ with pictures. (卡片)':'CARDS',
  'Keep the chunks in _____. (记在心里)':'MIND',
  'I\'m _____ to join the science club. (be going to)':'GOING',
  'Which _____ are you going to join? (社团)':'CLUB',
  'I want to join the _____ club. (科学)':'SCIENCE',
  'Any _____? (有什么建议吗？)':'ADVICE',
  'You can try new _____. (事物)':'THINGS',
  'Join a club to make more _____. (朋友)':'FRIENDS',
  'I can share my _____. (想法)':'IDEAS',
  'A _____ can help us at the fair. (机器人)':'ROBOT',
  'Sports help me _____ taller and stronger. (成长/长高)':'GROW',
  'It is a _____ to learn new skills. (机会)':'CHANCE',
  'I like dancing as _____. (也)':'WELL',
  'What _____ will you learn in the club? (技能)':'SKILL',
  'What\'s _____? (怎么了？)':'WRONG',
  '_____ for asking. (谢谢关心)':'THANKS',
  'I feel _____. (难过的)':'SAD',
  'Sorry to _____ that. (听到……很难过)':'HEAR',
  'Don\'t _____ up! (放弃)':'GIVE',
  'We may _____ the game, but we tried. (输掉)':'LOSE',
  'My best friend is _____. (生病的)':'ILL',
  'I _____ my hometown. (想念)':'MISS',
  'That must be _____. (那一定很难)':'HARD',
  'How are you _____ now?':'FEELING',
  'I feel _____ now. (好多了)':'BETTER',
  'Do you want to _____ about it?':'TALK',
  'I _____ how you feel.':'KNOW',
  'Is everything all _____?':'RIGHT',
  'I\'m _____ about you. (担心的)':'WORRIED',
  'Let\'s _____ together. (一起学习)':'STUDY'
};

const POEM_BANK={
  '春晓':'觉','静夜思':'光','登鹳雀楼':'目','悯农':'辛','咏鹅':'波','江雪':'雪',
  '赋得古原草送别':'尽','望庐山瀑布':'天','早发白帝城':'住','绝句':'天','枫桥夜泊':'船',
  '游园不值':'住','题西林壁':'中','惠崇春江晚景':'知','小池':'头','晓出净慈寺送林子方':'红',
  '村居':'鸢','所见':'樾','赠汪伦':'情','黄鹤楼送孟浩然之广陵':'流'
};

const RIDDLE_ANS={
  '一口咬掉牛尾巴':'告',
  '田里长草':'苗',
  '两人一起走':'从',
  '十张口':'古',
  '一点一横长，一撇到南洋':'厂',
  '上边雨，下边令':'零',
  '一日一月':'明',
  '禾字去了撇':'木'
};
function fmtDec(a){
  // reduce fraction to string without trailing zeros
  let n=a.n,d=a.d;if(n%d===0n)return String(n/d);
  // decimal
  const scale=1000000n;const v=(n*scale)/d;let s=String(v);const neg=s[0]==='-';if(neg)s=s.slice(1);
  while(s.length<7)s='0'+s;
  let ip=s.slice(0,-6)||'0',fp=s.slice(-6).replace(/0+$/,'');
  return (neg?'-':'')+ip+(fp?'.'+fp:'');
}
function autoCalc(note){
  let m;
  // 循环小数
  if((m=note.match(/循环小数：计算 (\d+)÷(\d+)，商的循环节有几位数字？/))){
    const info=cycleInfo(+m[1], +m[2]); if(info.finite) throw 'finite len'; return String(info.cycle.length);
  }
  if((m=note.match(/循环小数：计算 (\d+)÷(\d+)，把循环节按顺序连起来是多少？/))){
    const info=cycleInfo(+m[1], +m[2]); if(info.finite||/^0/.test(info.cycle)) throw 'bad block'; return info.cycle;
  }
  if((m=note.match(/循环小数：计算 (\d+)÷(\d+)，从小数点后第几位开始循环？/))){
    const info=cycleInfo(+m[1], +m[2]); if(info.finite) throw 'finite from'; return String(info.prefix.length+1);
  }
  if((m=note.match(/循环小数：0\.\d+…（循环节是 (\d+)）化成最简分数，(分母|分子)是多少？/))){
    const fr=pureFrac(m[1]); return String(m[2]==='分母'?fr.d:fr.n);
  }
  if((m=note.match(/循环小数：最简分数 (\d+)\/(\d+) 写成小数，把循环节按顺序连起来是多少？/))){
    const info=cycleInfo(+m[1], +m[2]); if(info.finite||/^0/.test(info.cycle)) throw 'bad asdec'; return info.cycle;
  }
  if((m=note.match(/下面哪个算式的商是循环小数？① (\d+)÷(\d+) ② (\d+)÷(\d+) ③ (\d+)÷(\d+) ④ (\d+)÷(\d+)/))){
    const opts=[]; for(let i=0;i<4;i++) opts.push([+m[1+i*2], +m[2+i*2]]);
    const hits=opts.map(([a,b],i)=>cycleInfo(a,b).finite?0:i+1).filter(Boolean);
    if(hits.length!==1) throw 'which '+hits; return String(hits[0]);
  }
  // 小数四则 / 小数应用
  if((m=note.match(/小数四则：([\d.]+) \+ ([\d.]+) − ([\d.]+) = \?/))) return fmtDec(sub(add(dec(m[1]),dec(m[2])),dec(m[3])));
  if((m=note.match(/小数四则：([\d.]+) \+ ([\d.]+) = \?/))) return fmtDec(add(dec(m[1]),dec(m[2])));
  if((m=note.match(/小数四则：([\d.]+) − ([\d.]+) = \?/))) return fmtDec(sub(dec(m[1]),dec(m[2])));
  if((m=note.match(/小数四则：([\d.]+) × ([\d.]+) = \?/))) return fmtDec(mul(dec(m[1]),dec(m[2])));
  if((m=note.match(/小数四则：([\d.]+) ÷ ([\d.]+) = \?/))) return fmtDec(div(dec(m[1]),dec(m[2])));
  if((m=note.match(/早上跑了 ([\d.]+) 千米，晚上又跑了 ([\d.]+) 千米/))) return fmtDec(add(dec(m[1]),dec(m[2])));
  if((m=note.match(/红绳长 ([\d.]+) 米，蓝绳长 ([\d.]+) 米/))) return fmtDec(sub(dec(m[1]),dec(m[2])));
  if((m=note.match(/一盒牛奶有 ([\d.]+) 升，喝掉 ([\d.]+) 升/))) return fmtDec(sub(dec(m[1]),dec(m[2])));
  if((m=note.match(/彩笔每支 ([\d.]+) 元，买了 (\d+) 支/))) return fmtDec(mul(dec(m[1]),dec(m[2])));
  if((m=note.match(/操场一圈 ([\d.]+) 千米，跑了 ([\d.]+) 圈/))) return fmtDec(mul(dec(m[1]),dec(m[2])));
  if((m=note.match(/([\d.]+) 升果汁平均分进 (\d+) 个杯子/))) return fmtDec(div(dec(m[1]),dec(m[2])));
  if((m=note.match(/一根丝带长 ([\d.]+) 米，每段长 ([\d.]+) 米/))) return fmtDec(div(dec(m[1]),dec(m[2])));
  if((m=note.match(/(\d+) 支钢笔一共 ([\d.]+) 元/))) return fmtDec(div(dec(m[2]),dec(m[1])));
  if((m=note.match(/一块布长 ([\d.]+) 米，做裙子用去 ([\d.]+) 米，做裤子用去 ([\d.]+) 米/))) return fmtDec(sub(sub(dec(m[1]),dec(m[2])),dec(m[3])));
  if((m=note.match(/面包每个 ([\d.]+) 元，买了 (\d+) 个，付了 ([\d.]+) 元/))) return fmtDec(sub(dec(m[3]), mul(dec(m[1]),dec(m[2]))));
  if((m=note.match(/故事书每本 ([\d.]+) 元，买 (\d+) 本；书签每张 ([\d.]+) 元，买 (\d+) 张/))) return fmtDec(add(mul(dec(m[1]),dec(m[2])), mul(dec(m[3]),dec(m[4]))));
  if((m=note.match(/米袋里有 ([\d.]+) 千克，吃掉 ([\d.]+) 千克后又买来 ([\d.]+) 千克/))) return fmtDec(add(sub(dec(m[1]),dec(m[2])),dec(m[3])));
  // 多步购物
  if((m=note.match(/【算一算】笔记本每本 ([\d.]+) 元，买 (\d+) 本；橡皮每块 ([\d.]+) 元，买 (\d+) 块/)))
    return fmtDec(add(mul(dec(m[1]),dec(m[2])),mul(dec(m[3]),dec(m[4]))));
  // 花坛外圈小路
  if((m=note.match(/【算一算】长方形花坛长 ([\d.]+) 米、宽 ([\d.]+) 米。四周铺宽 ([\d.]+) 米的小路/))){
    const L=+m[1],W=+m[2],p=+m[3];
    return String((L+2*p)*(W+2*p)-L*W);
  }
  // 米→平方分米
  if((m=note.match(/【算一算】长方形桌面长 ([\d.]+) 米、宽 ([\d.]+) 米。面积是多少平方分米/)))
    return String(Math.round(+m[1]*10*+m[2]*10));
  // 两步方程 ax − b = cx + d
  if((m=note.match(/【算一算】解方程：(\d+)x − (\d+) = (\d+)x \+ (\d+)/)))
    return String((+m[2]+ +m[4])/(+m[1]- +m[3]));
  // 连续加减应用
  if((m=note.match(/【算一算】一桶油重 ([\d.]+) 千克，用去 ([\d.]+) 千克后又倒入 ([\d.]+) 千克/))){
    // a - b + c
    const a=dec(m[1]),b=dec(m[2]),c=dec(m[3]);
    const amb={n:a.n*b.d - b.n*a.d, d:a.d*b.d};
    return fmtDec(add(amb,c));
  }
  // 两块三角形总面积 = 底×高
  if((m=note.match(/【算一算】一块三角形彩纸底 ([\d.]+) 厘米、高 ([\d.]+) 厘米。用同样的两块/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  // 速度路程
  if((m=note.match(/【算一算】一辆车平均每小时行 ([\d.]+) 千米，行了 ([\d.]+) 小时/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  // 打折
  if((m=note.match(/【算一算】一件原价 ([\d.]+) 元的外套打 (\d+) 折/)))
    return fmtDec(mul(dec(m[1]),dec((+m[2]/10).toString())));
  // 长方形面积
  if((m=note.match(/【算一算】长方形：长 ([\d.]+) 米，宽 ([\d.]+) 米/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  // 三角形
  if((m=note.match(/【算一算】三角形：底 ([\d.]+) 厘米，高 ([\d.]+) 厘米/)))
    return fmtDec({n:dec(m[1]).n*dec(m[2]).n, d:dec(m[1]).d*dec(m[2]).d*2n});
  // 梯形
  if((m=note.match(/【算一算】梯形：上底 ([\d.]+) 分米，下底 ([\d.]+) 分米，高 ([\d.]+) 分米/))){
    const t=mul(add(dec(m[1]),dec(m[2])),dec(m[3]));
    return fmtDec({n:t.n,d:t.d*2n});
  }
  // 方程 Nx − M = P
  if((m=note.match(/【算一算】方程：(\d+)x − (\d+) = (\d+)/)))
    return String((+m[3]+ +m[2])/ +m[1]);
  // 方程 Nx + M = P
  if((m=note.match(/【算一算】方程：(\d+)x \+ (\d+) = (\d+)/)))
    return String((+m[3]- +m[2])/ +m[1]);
  // 植树（允许换行或同一行）
  if((m=note.match(/【算一算】小路长 (\d+) 米。[\s\S]*?每隔 (\d+) 米种一棵树（两头都要种）/)))
    return String(+m[1]/ +m[2]+1);
  // 单位
  if((m=note.match(/【算一算】([\d.]+) 千米 = \? 米/)))
    return fmtDec(mul(dec(m[1]),dec('1000')));
  // 小数×整数：每X 价，买 n
  if((m=note.match(/【算一算】每.+? ([\d.]+) 元，买 (\d+) .+。一共多少元？/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  // 小数×小数：名每单位 价，买 n 单位
  if((m=note.match(/【算一算】.+每(?:米|千克|升) ([\d.]+) 元，买 ([\d.]+) (?:米|千克|升)。一共多少元？/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  // 小数÷整数：平均倒进/剪成/装进/人平分
  if((m=note.match(/【算一算】([\d.]+) .+平均倒进 (\d+) 个瓶子/)))
    return fmtDec({n:dec(m[1]).n, d:dec(m[1]).d*BigInt(m[2])});
  if((m=note.match(/【算一算】([\d.]+) .+平均剪成 (\d+) 段/)))
    return fmtDec({n:dec(m[1]).n, d:dec(m[1]).d*BigInt(m[2])});
  if((m=note.match(/【算一算】([\d.]+) .+平均装进 (\d+) 袋/)))
    return fmtDec({n:dec(m[1]).n, d:dec(m[1]).d*BigInt(m[2])});
  if((m=note.match(/【算一算】([\d.]+) .+平均倒进 (\d+) 杯/)))
    return fmtDec({n:dec(m[1]).n, d:dec(m[1]).d*BigInt(m[2])});
  if((m=note.match(/【算一算】([\d.]+) .+由 (\d+) 人平分/)))
    return fmtDec({n:dec(m[1]).n, d:dec(m[1]).d*BigInt(m[2])});
  // 小数÷小数：一共有 a，每份 b，分成多少份
  if((m=note.match(/【算一算】一共有 ([\d.]+) .+，每份 ([\d.]+) .+。可以分成多少份？/))){
    const a=dec(m[1]), b=dec(m[2]);
    return fmtDec({n:a.n*b.d, d:a.d*b.n});
  }
  // 简单乘法 / 除法 / 加减
  if((m=note.match(/【算一算】([\d.]+) × ([\d.]+) = \?/)))
    return fmtDec(mul(dec(m[1]),dec(m[2])));
  if((m=note.match(/【算一算】([\d.]+) ÷ ([\d.]+) = \?/))){
    const a=dec(m[1]), b=dec(m[2]);
    return fmtDec({n:a.n*b.d, d:a.d*b.n});
  }
  if((m=note.match(/【算一算】一个袋子里有 (\d+) 个红球、(\d+) 个蓝球。一共有几个球？/)))
    return String(+m[1]+ +m[2]);
  if((m=note.match(/【算一算】班级有 (\d+) 人，分成 (\d+) 组，平均每组几人？/)))
    return String(+m[1]/ +m[2]);
  // 古诗：按诗题查缺字（玩家纸条不再给整句）
  if((m=note.match(/《([^》]+)》/))){
    if(POEM_BANK[m[1]]) return POEM_BANK[m[1]];
  }
  // 古诗：从【整句】与 blank 对比（兼容旧数据）
  if((m=note.match(/【整句】(.+)/))){
    const full=m[1].trim();
    const blankLine=(note.match(/[^\n]*___+[^\n]*/)||[])[0];
    if(!blankLine)throw 'poem blank';
    // align blank line (without spaces around ___) to full
    const bl=blankLine.replace(/\s/g,'').replace(/___+/,'\0');
    const fl=full.replace(/\s/g,'').replace(/[，。！？、]/g, ch=>ch);
    // find missing char(s): replace \0 with chars from full
    let bi=0,fi=0,miss='';
    const bchars=[...bl],fchars=[...fl];
    // simpler: remove punctuation from both, find where ___ was
    const bp=blankLine.replace(/\s/g,'');
    const idx=bp.indexOf('___');
    if(idx<0)throw 'no blank mark';
    // map index in blank (without ___) to full by matching prefix/suffix
    const prefix=bp.slice(0,idx).replace(/___/g,'');
    const suffix=bp.slice(idx+3);
    // full without spaces
    const f2=full.replace(/\s/g,'');
    if(!f2.startsWith(prefix)){
      // try ignoring punctuation differences
    }
    const start=f2.indexOf(prefix)===0?prefix.length:f2.indexOf(prefix.replace(/[，。]/g,''));
    // Direct: missing length = full_len - (blank without ___).length
    const without=bp.replace('___','');
    const missLen=f2.replace(/[，。！？、]/g,'').length - without.replace(/[，。！？、]/g,'').length;
    // Find by walking
    let i=0,j=0;miss='';
    const fp=[...f2], bonly=[...bp];
    // Replace ___ with placeholder and extract
    const re=bp.replace('___','(.+)');
    // Use known approach: prefix + missing + suffix = full (punct-aware)
    const pref=bp.slice(0,idx);
    const suf=bp.slice(idx+3);
    // Strip to han + letters only for matching? Keep punctuation in full.
    // full should be pref + X + suf where X is missing chars
    if(f2.startsWith(pref) && f2.endsWith(suf)){
      miss=f2.slice(pref.length, f2.length-suf.length);
      return miss;
    }
    // fallback: compare char by char
    throw 'poem align '+JSON.stringify({pref,suf,f2,full});
  }
  // 英语（支持多行题干：广播听力 / 小作文）
  if((m=note.match(/【英语题】([\s\S]+?)\n（线索：/)) || (m=note.match(/【英语题】(.+)/))){
    const q=m[1].trim();
    if(!EN_QA[q])throw 'unknown en '+JSON.stringify(q).slice(0,120);
    return EN_QA[q];
  }
  // 字谜
  for(const [q,a] of Object.entries(RIDDLE_ANS)){
    if(note.includes(q))return a;
  }
  throw 'unparsed note';
}
/** Collect locks for a room with the flags needed to see each lock */
function locksOf(r){
  const out=[];
  for(const o of r.objects){
    for(const v of o.views){
      if(!v.lock)continue;
      out.push({obj:o.id, flags:v.if||[], lock:v.lock, note:v.note||''});
    }
  }
  return out;
}
function checksFor(r){
  if(CHECK_FIXED[r.id])return CHECK_FIXED[r.id];
  // auto: for each lock, calc from its note (or sibling note object)
  return locksOf(r).map(L=>{
    return {obj:L.obj, flags:(L.flags||[]).filter(f=>f[0]!=='!').map(f=>f.replace(/^!/,'')) /* only positive flags for view - actually need flags that make THIS view active */,
      // For view with if:['!desk_open'], we need desk_open absent - pass flags that are required positively
      _rawIf:L.flags,
      calc(n){
        let note=n;
        if(!note||note.length<3){
          // look for note on other objects
          for(const o of r.objects){
            for(const v of o.views){
              if(v.note && (v.note.includes('【算一算】')||v.note.includes('【整句】')||v.note.includes('【英语题】')||v.note.includes('___'))){
                // Prefer note matching lock type
                note=v.note;break;
              }
            }
          }
        }
        return autoCalc(note);
      }};
  }).map(c=>{
    // Fix flags: for if:['!desk_open'], viewing lock needs desk_open false → flags=[]
    // for if:['shelf_lit'], need flags:['shelf_lit']
    const pos=(c._rawIf||[]).filter(f=>f[0]!=='!');
    return {obj:c.obj, flags:pos, calc:c.calc};
  });
}
const CHECK_FIXED={
 r1:[{obj:'desk',calc(n){const m=n.match(/长 ([\d.]+) 米，宽 ([\d.]+) 米/);const a=mul(dec(m[1]),dec(m[2]));return String(a.n/a.d);}},
     {obj:'shelf',flags:['shelf_lit'],calc(n){if(!/担心/.test(n)||!/Unit 1/.test(n))throw 'note';return 'WORRY';}}],
 r2:[{obj:'cabinet',calc(){const n=noteOf(ROOMS[1],'board');const line='明月松间照，清泉石上流';const m=n.match(/明月 ___ 间照，清泉 ___ 上流/);if(!m)throw 'note';return line[2]+line[8];}},
     {obj:'door',flags:['riddle_seen'],calc(n){if(!/一口咬掉牛尾巴/.test(n))throw 'note';return '告';}}],
 r3:[{obj:'fridge',calc(n){const order=['eggs','milk','sugar'];const lines=n.split('\n');return order.map(w=>{const l=lines.find(x=>x.includes(w)&&/·/.test(x));return NUMW[l.match(/·\s*(\w+)/)[1]];}).join('');}},
     {obj:'cupboard',calc(n){const a=n.match(/面粉　(\d+) 袋　每袋 ([\d.]+) 元/),b=n.match(/黄油　1 块　([\d.]+) 元/);const t=add(mul(dec(a[1]),dec(a[2])),dec(b[1]));const v=Number(t.n)/Number(t.d);return String(Math.round(v*100)/100);}},
     {obj:'oven',calc(n){const m=n.match(/(\d+)x − (\d+) = (\d+)/);const x=(+m[3]+ +m[2])/ +m[1];return String(x);}}],
 r4:[{obj:'safe',calc(){const n=noteOf(ROOMS[3],'desk');const blanks=n.match(/[\u4e00-\u9fa5]*\s?___\s?[\u4e00-\u9fa5]*/g);if(blanks.length!==4)throw 'blanks '+blanks.length;
       return blanks.map(b=>{const pat=b.replace(/\s/g,'');const cand=IDIOMS.filter(id=>id.length===4&&[...pat.replace('___','?')].every((c,i)=>c==='?'?CN.includes(id[i]):id[i]===c));if(cand.length!==1)throw 'idiom '+b+' '+cand;const ch=cand[0][pat.indexOf('___')];return CN.indexOf(ch);}).join('');}},
     {obj:'boxes',calc(){const n=noteOf(ROOMS[3],'telescope',['lens_in']);return n.match(/in the (\w+) box/)[1];}},
     {obj:'door',calc(n){const m=n.match(/上底 (\d+) 分米，下底 (\d+) 分米，高 (\d+) 分米/);return String((+m[1]+ +m[2])*+m[3]/2);}}],
 r5:[{obj:'bed',flags:['dug'],calc(){const n=noteOf(ROOMS[4],'sign');const m=n.match(/长 (\d+) 米。\n从头到尾，每隔 (\d+) 米种一棵树（两头都要种）/);return String(+m[1]/ +m[2]+1);}},
     {obj:'gate',calc(n){const poem='春色满园关不住，一枝红杏出墙来';if(!/春色满园关不 ___，\n一枝红 ___ 出墙来/.test(n))throw 'note';return poem[6]+poem[11];}}]
};
let totalStates=0;
for(const r of ROOMS){
  // ① 通关脚本
  let st=E.init();for(const a of r.solution){const res=act(r,st,a);if(!res.ok)fail(r,'solution step failed '+JSON.stringify(a)+' '+res.text);}
  if(!st.done)fail(r,'solution does not escape');
  // ② 穷举可达状态
  const start=E.init();const seen=new Map([[key(start),start]]);const edges=new Map();const q=[start];
  while(q.length){const s=q.shift(),k=key(s);const out=new Set();if(s.done){edges.set(k,out);continue;}
    const tries=[];for(const o of r.objects){tries.push(['look',o.id],['take',o.id]);const v=E.view(r,s,o.id);if(v&&v.lock){tries.push(['code',o.id,v.lock.answer]);tries.push(['code',o.id,'0000']);}
      for(const it of s.inv)tries.push(['use',o.id,it]);}
    for(let i=0;i<s.inv.length;i++)for(let j=i+1;j<s.inv.length;j++)tries.push(['combine',s.inv[i],s.inv[j]]);
    for(const a of tries){const n=clone(s);const res=act(r,n,a);if(!res||!res.ok){if(key(n)!==k)fail(r,'failed action changed state '+JSON.stringify(a));continue;}const nk=key(n);out.add(nk);if(!seen.has(nk)){seen.set(nk,n);q.push(n);}}
    edges.set(k,out);if(seen.size>20000){fail(r,'state explosion');break;}}
  const doneKeys=[...seen.keys()].filter(k=>seen.get(k).done);if(!doneKeys.length)fail(r,'escape unreachable');
  const good=new Set(doneKeys);let ch=true;while(ch){ch=false;for(const [k,out] of edges){if(good.has(k))continue;for(const n of out)if(good.has(n)){good.add(k);ch=true;break;}}}
  const stuck=[...seen.keys()].filter(k=>!good.has(k));if(stuck.length)fail(r,'dead-end states: '+stuck.slice(0,3).join(' ; '));
  totalStates+=seen.size;
  const invSeen=new Set();for(const s of seen.values())s.inv.forEach(i=>invSeen.add(i));
  const roomItems=new Set();r.objects.forEach(o=>o.views.forEach(v=>{[v.take,v.lock&&v.lock.ok,...(v.use||[])].forEach(e=>e&&(e.give||[]).forEach(i=>roomItems.add(i)));}));(r.combos||[]).forEach(c=>c.give.forEach(i=>roomItems.add(i)));
  for(const i of roomItems){if(!ITEMS[i])fail(r,'unknown item '+i);if(!invSeen.has(i))fail(r,'item never obtainable '+i);}
  // ③ 密码独立核对
  const checks=checksFor(r);
  for(const c of checks){const L=lockOf(r,c.obj,c.flags);if(!L){fail(r,'no lock at '+c.obj+' flags '+c.flags);continue;}
    let want;try{want=c.calc(noteOf(r,c.obj,c.flags));}catch(e){fail(r,'calc '+c.obj+' '+e);continue;}
    if(E.norm(want)!==E.norm(L.answer))fail(r,'lock '+c.obj+' answer '+L.answer+' but note gives '+want);}
  const checked=new Set(checks.map(c=>c.obj));r.objects.forEach(o=>o.views.forEach(v=>{if(v.lock&&!checked.has(o.id))fail(r,'lock without independent check '+o.id);}));
  const lockCount=r.objects.reduce((a,o)=>a+o.views.filter(v=>v.lock).length,0);
  // ④ 锁的输入方式能输入答案
  r.objects.forEach(o=>{const b=o.box;if(!(b[0]>=0&&b[1]>=0&&b[0]+b[2]<=400&&b[1]+b[3]<=300))fail(r,'box out of scene '+o.id);
    o.views.forEach(v=>{const L=v.lock;if(!L)return;const a=L.answer;
      if(L.kind==='num'){if(!new RegExp(L.dot?'^[0-9.]+$':'^[0-9]+$').test(a)||a.length>L.len)fail(r,'num lock cannot type '+a+' len '+L.len);}
      else if(L.kind==='alpha'){if(!/^[A-Z]+$/.test(a)||a.length>L.len)fail(r,'alpha lock '+a);}
      else if(L.kind==='dial'){if([...a].length!==L.opts.length||[...a].some((ch,i)=>L.opts[i].indexOf(ch)<0))fail(r,'dial cannot reach '+a);if(L.opts.some((op,i)=>op[0]===[...a][i]))fail(r,'dial starts on the answer');}
      else if(L.kind==='choice'){const o2=L.opts.find(x=>x.v===a);if(!o2)fail(r,'choice answer missing');}
      if(!L.bad||!L.ok||!L.ok.text)fail(r,'lock texts');});});
  const flagsOnPath=new Set();st=E.init();for(const a of r.solution){act(r,st,a);Object.keys(st.flags).forEach(f=>flagsOnPath.add(f));}
  r.hints.forEach(h=>{if(!flagsOnPath.has(h.until))fail(r,'hint stage never completes '+h.until);if(h.tiers.length!==3)fail(r,'hint tiers');if(h.obj&&!E.obj(r,h.obj))fail(r,'hint obj '+h.obj);});
  st=E.init();for(const a of r.solution){if(!E.hint(r,st))fail(r,'no hint available before '+JSON.stringify(a));act(r,st,a);}
  if(!r.explain||r.explain.length<3||r.story.length<2)fail(r,'story/explain');
  console.log(`${r.id} ${r.title}: ${r.solution.length} 步通关路线 ✓，可达状态 ${seen.size} 个、卡死状态 ${stuck.length} 个，${lockCount} 把锁的密码独立核对 ✓，物品 ${roomItems.size} 个`);
}
console.log(fails?`\n${fails} FAILURES`:`\nALL OK — ${ROOMS.length} 间密室，共穷举 ${totalStates} 个状态`);process.exit(fails?1:0);
