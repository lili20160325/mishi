/*ROOMS-EXTRA-START*/
(function(G){
'use strict';
function R(x,y,w,h,f,rx,ex){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"'+(rx?' rx="'+rx+'"':'')+(ex||'')+'/>';}
function T(x,y,s,ch,ex){return '<text x="'+x+'" y="'+y+'" font-size="'+s+'" text-anchor="middle" dominant-baseline="central"'+(ex||'')+'>'+ch+'</text>';}
function P(d,f,ex){return '<path d="'+d+'" fill="'+f+'"'+(ex||'')+'/>';}
function C(x,y,r,f,ex){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(ex||'')+'/>';}
function el(cx,cy,rx,ry,f,ex){return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="'+f+'"'+(ex||'')+'/>';}
var SK=' stroke="#5b4636" stroke-width="2.5" stroke-linejoin="round"';
function g(id,inner){return '<g class="obj" data-obj="'+id+'">'+inner+'</g>';}
var ITEMS=G.PZ_ITEMS;
ITEMS['key_r1']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r2']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r2']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r2']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['gift_r3']={name:'点心',icon:'🧁',desc:'给机器人小厨的点心。'};
ITEMS['tool_r3']={name:'放行章',icon:'🔏',desc:'一枚放行章，对方看见才肯收礼物。'};
ITEMS['partA_r4']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r4']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r4']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r5']={name:'开盒许可',icon:'📑',desc:'一枚开盒许可小章。'};
ITEMS['key_r5']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r6']={name:'启动卡',icon:'💳',desc:'启动书架暗格的卡片。'};
ITEMS['key_r6']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['key_r7']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r8']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r8']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r8']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['gift_r9']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['tool_r9']={name:'放行章',icon:'🔏',desc:'一枚放行章，对方看见才肯收礼物。'};
ITEMS['partA_r10']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r10']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r10']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r11']={name:'开盒许可',icon:'📑',desc:'一枚开盒许可小章。'};
ITEMS['key_r11']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r12']={name:'启动卡',icon:'💳',desc:'启动书架暗格的卡片。'};
ITEMS['key_r12']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['key_r13']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r14']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r14']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r14']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['gift_r15']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['tool_r15']={name:'放行章',icon:'🔏',desc:'一枚放行章，对方看见才肯收礼物。'};
ITEMS['partA_r16']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r16']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r16']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r17']={name:'开盒许可',icon:'📑',desc:'一枚开盒许可小章。'};
ITEMS['key_r17']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r18']={name:'启动卡',icon:'💳',desc:'启动书架暗格的卡片。'};
ITEMS['key_r18']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['key_r19']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r20']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r20']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r20']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['gift_r21']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['tool_r21']={name:'放行章',icon:'🔏',desc:'一枚放行章，对方看见才肯收礼物。'};
ITEMS['partA_r22']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r22']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r22']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r23']={name:'开盒许可',icon:'📑',desc:'一枚开盒许可小章。'};
ITEMS['key_r23']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r24']={name:'启动卡',icon:'💳',desc:'启动书架暗格的卡片。'};
ITEMS['key_r24']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['key_r25']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r26']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r26']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r26']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['gift_r27']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['tool_r27']={name:'放行章',icon:'🔏',desc:'一枚放行章，对方看见才肯收礼物。'};
ITEMS['partA_r28']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r28']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r28']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r29']={name:'开盒许可',icon:'📑',desc:'一枚开盒许可小章。'};
ITEMS['key_r29']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['scrap_r30']={name:'启动卡',icon:'💳',desc:'启动书架暗格的卡片。'};
ITEMS['key_r30']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
var r1={id:'r1',title:'阳光书房',emoji:'📚',sub:'第一章 · 数学+英语',
 story:['第一章 · 校园清晨「阳光书房」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','目标：逃出教学楼。这间「书房」的门有两道机关——先开书桌拿钥匙，再解开门上的字谜锁。','四处看看：黑板、架子上也许藏着干扰信息，别被骗了！'],
 objects:[
  {id:'door',name:'门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'门上有一把字谜锁，旁边贴着纸条：',note:'【英语题】Nikki: A typhoon is coming! Please _____ the windows.\nYafei: OK!\n（线索：Typhoon 单元对话，动词，5 个字母，首字母 C；把窗关上。）',lock:{kind:'alpha',len:5,answer:'CLOSE',prompt:'输入英文大写',ok:{set:['door_code'],text:'门上的字锁开了！还差一把钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先把门上的字锁打开。'},
    {text:'字锁已经开了，钥匙孔亮着光。',use:[{item:'key_r1',win:true,text:'钥匙一转——「阳光书房」逃脱成功！'}],wrong:'要用钥匙才能打开。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌抽屉挂着密码锁，纸条被压在玻璃板下：',note:'【算一算】笔记本每本 4.5 元，买 3 本；橡皮每块 2.8 元，买 2 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'19.1',prompt:'输入密码',ok:{set:['desk_open'],text:'咔哒！抽屉开了，里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'抽屉里有一把钥匙。',take:{give:['key_r1'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上用粉笔写着：“想出门？先算对抽屉题，再读门上的字！”旁边还画了一串无关的数字 3-1-4，别当成密码。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'架子上有一本翻旧的练习册，夹着一张废稿：把 2+2 写成了 5——显然是干扰。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'小盒是空的，盖子内侧写着：“钥匙不在我这儿。”'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看书桌玻璃板下的算式。','算出答案就是抽屉密码。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点书桌拿起钥匙。','把钥匙拿起来。']},
  {until:'door_code',obj:'door',tiers:['门上还有字母锁，要先读英文线索。','Typhoon 单元对话，动词，5 个字母，首字母 C；把窗关上。','结合词性、首字母和中文意思方向来猜。']},
  {until:'escaped',obj:'door',tiers:['字锁开了，还要用钥匙。','选中钥匙，再点门。','先点钥匙，再点门。']}
 ],
 explain:['4.5×3+2.8×2=19.1','门上英文：Nikki: A typhoon is coming! Please _____ the windows.\nYafei: OK! → CLOSE','用钥匙打开门，逃脱成功。'],
 solution:[['code','desk','19.1'],['take','desk'],['code','door','CLOSE'],['use','door','key_r1']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(300,150,72,124,'#c98b52',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📚')+T(350,275,20,'✨');
  return s;}
};
var r2={id:'r2',title:'快乐教室',emoji:'🏫',sub:'第一章 · 通行证',
 story:['第一章 · 校园清晨「快乐教室」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','「快乐教室」的出口是一台刷卡机。要先拿到卡片和徽章，拼成通行证。','讲台锁着卡片，作业盒锁着徽章——两道锁都要开！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'刷卡机嘀嘀响：“请出示通行证。”',use:[{item:'combo_r2',take:['combo_r2'],win:true,text:'嘀——通过！「快乐教室」逃脱成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台锁着，纸条上有题：',note:'【算一算】循环小数：计算 1÷3，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'1',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有一张卡片。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r2'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'作业盒上还有第二把锁：',note:'【成语填空】兄 ___ 弟 恭\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['兄','弟','恭','天','了','友']],answer:'友',prompt:'转到正确的字',ok:{set:['box_open'],text:'盒子开了，里面有一枚徽章！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_tool'],text:'里面有一枚徽章。',take:{give:['tool_r2'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板写着步骤：①开抽屉拿卡片 ②开盒子拿徽章 ③物品栏组合 ④去刷卡机。旁边涂鸦“密码=1234”是假的！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'架子上有一张作废的旧卡，磁条已经刮花了，刷不上。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[{a:'scrap_r2',b:'tool_r2',give:['combo_r2'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开讲台。','算纸条上的题。','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']},
  {until:'took_scrap',obj:'desk',tiers:['拿起卡片。','点讲台。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['盒子上是成语转盘。','看空格前后。','兄弟友爱、恭敬，说家庭和睦']},
  {until:'took_tool',obj:'box',tiers:['拿起徽章。','点作业盒。','拿起来。']},
  {until:'made_combo',tiers:['卡片和徽章可以组合。','物品栏先点一个再点另一个。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证再点刷卡机。','刷卡过关。']}
 ],
 explain:['1÷3=0.3333…，循环节是 3，有 1 位。','成语「兄友弟恭」缺「友」。兄弟友爱、恭敬，说家庭和睦','组合成通行证，刷卡逃脱。'],
 solution:[['code','desk','1'],['take','desk'],['code','box','友'],['take','box'],['combine','scrap_r2','tool_r2'],['use','door','combo_r2']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(18,18,96,74,'#bfe8ff',8,SK)+C(90,40,10,'#fff2a8')+R(28,60,30,24,'#7ccf6c',3));
  s+=g('board',R(128,12,170,100,'#1e8449',6,' stroke="#a86b38" stroke-width="6"')+T(213,45,12,'黑板',' fill="#fff"')+T(213,70,10,'认真审题',' fill="#d5f5e3"')+T(213,92,9,'1+1=?',' fill="#a9dfbf"'));
  s+=g('desk',R(28,150,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,160,70,34,'#d9a26c',4):C(88,180,5,'#5b4636'))+T(96,220,10,'讲台',' fill="#5b4636"')+T(145,168,14,'📚'));
  s+=g('box',R(180,158,76,54,'#f5b041',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗'));
  s+=g('door',R(308,150,72,124,'#8fb6e8',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏫')+T(350,275,20,'✏️');
  return s;}
};
var r3={id:'r3',title:'香香厨房',emoji:'🍳',sub:'第一章 · 助人',
 story:['第一章 · 校园清晨「香香厨房」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','你遇见了机器人小厨，对方说：“想让我开门，先送点心——但点心被锁住了，还要一枚放行章。”','两道锁：桌子里是点心，食材盒里是放行章。都拿到才能交任务！'],
 objects:[
  {id:'door',name:'机器人小厨',box:[310,150,70,120],views:[
    {if:['!has_stamp'],text:'机器人小厨抱着手臂：“先拿到放行章，我才收点心！”'},
    {text:'机器人小厨点点头：“放行章齐了，把点心给我吧。”',use:[{item:'gift_r3',take:['gift_r3'],win:true,text:'机器人小厨收下了！「香香厨房」任务完成，门开了！'}],wrong:'机器人小厨摇头：“我要的是点心。”'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子抽屉锁着：',note:'【算一算】小数四则：3.75 + 0.6 = ?',lock:{kind:'num',len:4,dot:true,answer:'4.35',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份点心！'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份点心。',take:{give:['gift_r3'],set:['took_gift'],text:'你拿到了点心。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'食材盒上贴着“放行章”，要开锁：',note:'【英语题】【听力·广播】Good morning! Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run. Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：Typhoon Haitang is coming on _____ afternoon.\n（线索：听广播找时间，8 个字母，首字母 S；一周里的星期六。）',lock:{kind:'alpha',len:8,answer:'SATURDAY',prompt:'输入英文大写',ok:{set:['box_open'],text:'盒子开了，里面有一枚放行章！'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!has_stamp'],text:'里面有一枚放行章。',take:{give:['tool_r3'],set:['has_stamp'],text:'你拿到了放行章。（可以去找对方啦）'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'菜谱板：任务清单——□ 点心　□ 放行章　□ 交给机器人小厨。有人把清单改成“直接喊芝麻开门”，别信。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'架子上有一张机器人小厨的照片，背面写着：“没有章，我什么都不收。”'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桌子拿点心。','算一算纸条上的题。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'took_gift',obj:'desk',tiers:['拿起点心。','点桌子。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['先解开食材盒上的英文锁，拿到通行证印章。','听广播找时间，8 个字母，首字母 S；一周里的星期六。','拼对大写单词。']},
  {until:'has_stamp',obj:'box',tiers:['拿起放行章。','点食材盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把点心交给机器人小厨。','选中点心，再点机器人小厨。','先点物品再点对方。']}
 ],
 explain:['3.75 + 0.6 = 4.35。小数点对齐再相加。','【听力·广播】Good morning! Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run. Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：Typhoon Haitang is coming on _____ afternoon. → SATURDAY','拿到放行章和点心，交给机器人小厨。'],
 solution:[['code','desk','4.35'],['take','desk'],['code','box','SATURDAY'],['take','box'],['use','door','gift_r3']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  for(var i=0;i<8;i++)for(var j=0;j<2;j++)s+=R(i*50+(j%2)*25,214+j*43,25,43,'#b6dbe6',0,' opacity=".45"');
  s+=g('window',R(18,18,100,78,'#bfe8ff',8,SK)+C(96,40,11,'#fff2a8')+R(28,70,36,20,'#ffd6a5',3));
  s+=g('board',R(130,16,160,96,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(210,48,14,'📋')+T(210,78,11,'今日菜谱',' fill="#5b4636"')+T(210,96,9,'step by step',' fill="#888"'));
  s+=g('desk',R(24,148,140,58,'#e8c9a0',6,SK)+R(36,156,56,32,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(88,174,5,'#5b4636'))+T(90,218,10,'操作台',' fill="#5b4636"')+T(150,170,16,'🔪'));
  s+=g('box',R(178,158,78,54,'#ff9f68',6,SK)+(f.box_open?R(188,166,58,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3))+T(216,220,10,'食材',' fill="#5b4636"'));
  s+=g('shelf',R(270,22,110,118,'#c98b52',6,SK)+R(280,50,90,8,'#8a5428',2)+R(280,86,90,8,'#8a5428',2)+T(325,70,18,'🥣')+T(325,110,18,'🧂'));
  s+=g('door',R(304,148,72,128,'#ffd6a5',6,SK)+C(358,210,5,'#ffcf4d',SK)+R(314,160,40,36,'#fff',4)+T(334,250,9,'灶台旁',' fill="#5b4636"'));
  s+=T(50,268,22,'🍳')+T(360,268,20,'🍳')+T(200,268,16,'🥖');
  return s;}
};
var r4={id:'r4',title:'绿茵操场',emoji:'⚽',sub:'第一章 · 动手组装',
 story:['第一章 · 校园清晨「绿茵操场」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','「绿茵操场」要组装一件关键道具才能出门。','材料 A 锁在长椅，材料 B 锁在器材箱。拼好后放到组装台上！'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台闪着灯：“放入成品。”',use:[{item:'combo_r4',take:['combo_r4'],win:true,text:'成品就位——「绿茵操场」装置启动，门开了！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着材料 A：',note:'【算一算】长方形花坛长 12 米、宽 8 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'44',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r4'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'器材箱锁着材料 B：',note:'【英语题】【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.\n（线索：通知信安全 tip，复数，6 个字母，首字母 L；离校前关掉。）',lock:{kind:'alpha',len:6,answer:'LIGHTS',prompt:'输入英文大写',ok:{set:['box_open'],text:'开了！里面有材料 B。'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!took_b'],text:'里面有材料 B。',take:{give:['partB_r4'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板图纸：材料 A + 材料 B = 成品 → 放入组装台。角落有人乱写“只需材料 A”，那是陷阱。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'架子上有一颗生锈的螺丝，拧不进去，不是材料。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[{a:'partA_r4',b:'partB_r4',give:['combo_r4'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算数学题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_a',obj:'desk',tiers:['拿材料 A。','点开拿起。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['材料 B 在带字母锁的盒子里。','通知信安全 tip，复数，6 个字母，首字母 L；离校前关掉。','大写拼写。']},
  {until:'took_b',obj:'box',tiers:['拿材料 B。','点器材箱。','拿起来。']},
  {until:'made_combo',tiers:['两样材料可组合。','物品栏点两个拼。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['外围 (12+2)×(8+2) 减去花坛 12×8 = 44','【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave. → LIGHTS','组合成成品，放到组装台。'],
 solution:[['code','desk','44'],['take','desk'],['code','box','LIGHTS'],['take','box'],['combine','partA_r4','partB_r4'],['use','door','combo_r4']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,200,400,100,'#9ee07a');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(300,155,72,120,'#c98b52',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'⚽')+T(350,275,20,'🏆');
  return s;}
};
var r5={id:'r5',title:'蝴蝶公园',emoji:'🎠',sub:'第一章 · 双锁逃脱',
 story:['第一章 · 校园清晨「蝴蝶公园」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','「蝴蝶公园」的园门需要钥匙，可钥匙锁在花箱里；开盒之前，还得先解开石凳的机关拿到开盒许可章。','黑板上抄着和抽屉一样的算式——先四处观察，再动手！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {if:['!took_key'],text:'园门锁着，钥匙孔空空的。去找钥匙吧。'},
    {text:'你有钥匙了。',use:[{item:'key_r5',win:true,text:'门开了！「蝴蝶公园」逃脱成功！'}],wrong:'要用钥匙。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上有密码锁。算对才能拿到“开盒许可”小章：',note:'【算一算】每瓶果汁 2.5 元，买 4 瓶。一共多少元？',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r5'],text:'抽屉开了，里面有一枚开盒许可小章（拿上它，再去开钥匙盒）。'},bad:'密码不对哦，再算一算。'}},
    {text:'抽屉空了。许可章你已经拿着。'}
  ]},
  {id:'box',name:'钥匙盒',box:[200,160,70,50],views:[
    {if:['!desk_open'],text:'钥匙盒旁边贴着纸条：“请先到桌子取得开盒许可。”盒子暂时打不开。'},
    {if:['desk_open','!box_open'],text:'许可章生效了，钥匙盒可以开锁：',note:'《春晓》　唐·孟浩然\n春眠不 ___ 晓，处处闻啼鸟。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','觉']],answer:'觉',prompt:'转到正确的字',ok:{set:['box_open'],text:'钥匙盒开了！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_key'],text:'盒子里有一把钥匙。',take:{give:['key_r5'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'钥匙盒空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上用粉笔抄着同一道题（和抽屉纸条一样），方便你对照。角落写着假密码 0000。',note:'【算一算】每瓶果汁 2.5 元，买 4 瓶。一共多少元？'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'架子夹层里有一把生锈的假钥匙，插不进门。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开石凳拿许可章。','看纸条或黑板上的算式。','小数乘整数：按整数相乘，再数小数点后有几位。']},
  {until:'box_open',obj:'box',tiers:['钥匙盒是古诗转盘。','《春晓》。','回忆原句。']},
  {until:'took_key',obj:'box',tiers:['拿起钥匙。','点钥匙盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['去开门。','选中钥匙点园门。','先点钥匙再点门。']}
 ],
 explain:['2.5 × 4 = 10','《春晓》：春眠不觉晓，处处闻啼鸟。，缺「觉」。','用钥匙打开园门。'],
 solution:[['code','desk','10'],['code','box','觉'],['take','box'],['use','door','key_r5']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,160,400,140,'#8fd99a');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(304,160,70,120,'#8b6914',6,SK)+P('M304 160l35-20 35 20','#6aaa5a',SK)+C(358,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🎠')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r6={id:'r6',title:'静静图书馆',emoji:'📖',sub:'第一章 · 三锁挑战',
 story:['第一章 · 校园清晨「静静图书馆」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','最难的一间「静静图书馆」！馆门有字母锁，钥匙却藏在书架暗格；暗格又要先开阅览桌。','数学、语文、英语三道锁环环相扣——观察每个角落再动手。'],
 objects:[
  {id:'door',name:'馆门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'馆门上有字母密码锁：',note:'【英语题】You\'ll need to turn off the _____.\n（线索：Typhoon 单元 Spotlight，复数名词，6 个字母，首字母 L；屋里的灯。）',lock:{kind:'alpha',len:6,answer:'LIGHTS',prompt:'输入英文大写',ok:{set:['door_code'],text:'字母锁开了！还需要钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先解开门上的字母锁。'},
    {text:'字母锁已开，钥匙孔亮着。',use:[{item:'key_r6',win:true,text:'三锁全开！「静静图书馆」逃脱成功！'}],wrong:'还差钥匙。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌锁着，纸条写着：',note:'【算一算】循环小数：计算 1÷3，把循环节按顺序连起来是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r6'],text:'抽屉开了，里面有一张“书架暗格启动卡”。'},bad:'密码不对哦，再算一算。'}},
    {text:'启动卡已取走。去开书架吧。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!desk_open'],text:'书架有一个暗格，但机关没启动。先去开阅览桌。'},
    {if:['desk_open','!shelf_open'],text:'暗格亮起转盘：',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','光']],answer:'光',prompt:'转到正确的字',ok:{set:['shelf_open'],text:'暗格开了，里面有一把钥匙！'},bad:'不对哦，再想想。'}},
    {if:['shelf_open','!took_key'],text:'暗格里有钥匙。',take:{give:['key_r6'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'暗格空了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板流程图：抽屉(数学) → 书架(语文) → 门(英语+钥匙)。有人把箭头画反了，别跟错。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'还书箱里只有一张空白便签和一颗糖，不是线索。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算数学题。','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']},
  {until:'shelf_open',obj:'shelf',tiers:['书架暗格是古诗转盘。','《静夜思》。','回忆原句。']},
  {until:'took_key',obj:'shelf',tiers:['拿起钥匙。','点书架。','拿起来。']},
  {until:'door_code',obj:'door',tiers:['去开大门字母锁。','Typhoon 单元 Spotlight，复数名词，6 个字母，首字母 L；屋里的灯。','大写拼写。']},
  {until:'escaped',obj:'door',tiers:['字母锁开了，用钥匙。','选中钥匙点馆门。','先点钥匙再点门。']}
 ],
 explain:['1÷3=0.3333…。循环节连起来是 3。','《静夜思》：床前明月光，疑是地上霜。，缺「光」。','英文门禁：You\'ll need to turn off the _____. → LIGHTS','三锁齐开，用钥匙出门。'],
 solution:[['code','desk','3'],['code','shelf','光'],['take','shelf'],['code','door','LIGHTS'],['use','door','key_r6']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fef9e7',6,' stroke="#b7950b" stroke-width="5"')+T(208,45,14,'📖')+T(208,72,11,'本周推荐',' fill="#7d6608"')+T(208,92,9,'静静阅读',' fill="#b7950b"'));
  s+=g('desk',R(28,150,136,56,'#d4b896',6,SK)+(f.desk_open?R(40,160,70,34,'#f5e6d3',4):C(88,180,5,'#5b4636'))+T(96,220,10,'阅览桌',' fill="#5b4636"')+T(145,170,16,'🔎'));
  s+=g('box',R(180,158,76,54,'#a0522d',6,SK)+(f.box_open?R(190,166,56,38,'#e8d5c4',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'还书箱',' fill="#5b4636"'));
  s+=g('shelf',R(270,16,118,160,'#8b6914',6,SK)+R(280,50,98,8,'#5d4e37',2)+R(280,90,98,8,'#5d4e37',2)+R(280,130,98,8,'#5d4e37',2)+T(329,70,12,'📘')+T(329,110,12,'📙')+T(329,150,12,'📔'));
  s+=g('door',R(300,150,72,124,'#a0522d',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📖')+T(350,275,20,'📚');
  return s;}
};
var r7={id:'r7',title:'星星屋',emoji:'🔭',sub:'第一章 · 数学+英语',
 story:['第一章 · 校园清晨「星星屋」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','目标：逃出教学楼。这间「天文台」的观星门有两道机关——先开观测台拿钥匙，再解开门上的字谜锁。','四处看看：黑板、架子上也许藏着干扰信息，别被骗了！'],
 objects:[
  {id:'door',name:'观星门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'观星门上有一把字谜锁，旁边贴着纸条：',note:'【英语题】【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____.\n（线索：听广播找安全地点，7 个字母，首字母 I；待在屋里。）',lock:{kind:'alpha',len:7,answer:'INDOORS',prompt:'输入英文大写',ok:{set:['door_code'],text:'门上的字锁开了！还差一把钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先把门上的字锁打开。'},
    {text:'字锁已经开了，钥匙孔亮着光。',use:[{item:'key_r7',win:true,text:'钥匙一转——「星星屋」逃脱成功！'}],wrong:'要用钥匙才能打开。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台抽屉挂着密码锁，纸条被压在玻璃板下：',note:'【算一算】小数四则：8.4 − 2.75 = ?',lock:{kind:'num',len:4,dot:true,answer:'5.65',prompt:'输入密码',ok:{set:['desk_open'],text:'咔哒！抽屉开了，里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'抽屉里有一把钥匙。',take:{give:['key_r7'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'星图上用粉笔写着：“想出门？先算对抽屉题，再读门上的字！”旁边还画了一串无关的数字 3-1-4，别当成密码。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'架子上有一本翻旧的练习册，夹着一张废稿：把 2+2 写成了 5——显然是干扰。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {text:'星盒是空的，盖子内侧写着：“钥匙不在我这儿。”'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看观测台玻璃板下的算式。','算出答案就是抽屉密码。','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点观测台拿起钥匙。','把钥匙拿起来。']},
  {until:'door_code',obj:'door',tiers:['门上还有字母锁，要先读英文线索。','听广播找安全地点，7 个字母，首字母 I；待在屋里。','结合词性、首字母和中文意思方向来猜。']},
  {until:'escaped',obj:'door',tiers:['字锁开了，还要用钥匙。','选中钥匙，再点观星门。','先点钥匙，再点门。']}
 ],
 explain:['8.4 − 2.75 = 5.65。小数点对齐，位数少的补 0。','门上英文：【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____. → INDOORS','用钥匙打开观星门，逃脱成功。'],
 solution:[['code','desk','5.65'],['take','desk'],['code','door','INDOORS'],['use','door','key_r7']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(300,150,72,124,'#8e7cc3',6,SK)+C(354,215,5,'#ffd34d',SK));
  s+=T(50,270,22,'🔭')+T(350,270,20,'🚀');
  return s;}
};
var r8={id:'r8',title:'奇妙实验室',emoji:'🔬',sub:'第一章 · 通行证',
 story:['第一章 · 校园清晨「奇妙实验室」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','「奇妙实验室」的出口是一台刷卡机。要先拿到卡片和徽章，拼成通行证。','实验台锁着卡片，试剂箱锁着徽章——两道锁都要开！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'刷卡机嘀嘀响：“请出示通行证。”',use:[{item:'combo_r8',take:['combo_r8'],win:true,text:'嘀——通过！「奇妙实验室」逃脱成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台锁着，纸条上有题：',note:'【算一算】长方形桌面长 1.2 米、宽 0.8 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:2,answer:'96',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有一张卡片。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r8'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'试剂箱上还有第二把锁：',note:'【成语填空】父 慈 ___ 孝\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['父','慈','孝','天','了','子']],answer:'子',prompt:'转到正确的字',ok:{set:['box_open'],text:'盒子开了，里面有一枚徽章！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_tool'],text:'里面有一枚徽章。',take:{give:['tool_r8'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'公式板写着步骤：①开抽屉拿卡片 ②开盒子拿徽章 ③物品栏组合 ④去刷卡机。旁边涂鸦“密码=1234”是假的！'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'架子上有一张作废的旧卡，磁条已经刮花了，刷不上。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[{a:'scrap_r8',b:'tool_r8',give:['combo_r8'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开实验台。','算纸条上的题。','先把米换成分米，再相乘。']},
  {until:'took_scrap',obj:'desk',tiers:['拿起卡片。','点实验台。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['盒子上是成语转盘。','看空格前后。','父母慈爱、子女孝顺']},
  {until:'took_tool',obj:'box',tiers:['拿起徽章。','点试剂箱。','拿起来。']},
  {until:'made_combo',tiers:['卡片和徽章可以组合。','物品栏先点一个再点另一个。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证再点刷卡机。','刷卡过关。']}
 ],
 explain:['先换成 12 分米 × 8 分米 = 96 平方分米','成语「父慈子孝」缺「子」。父母慈爱、子女孝顺','组合成通行证，刷卡逃脱。'],
 solution:[['code','desk','96'],['take','desk'],['code','box','子'],['take','box'],['combine','scrap_r8','tool_r8'],['use','door','combo_r8']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=R(10,220,380,10,'#a0b8c8',2);
  s+=g('window',R(18,18,96,74,'#d4f1f9',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,14,160,94,'#ecf5ff',6,' stroke="#2980b9" stroke-width="5"')+T(208,45,14,'⚗️')+T(208,72,11,'实验步骤',' fill="#1a5276"')+T(208,92,9,'H2O · O2',' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#aeb6bf',6,SK)+(f.desk_open?R(40,160,70,34,'#d5dbdb',4):C(88,180,5,'#5b4636'))+T(96,220,10,'实验台',' fill="#5b4636"')+T(150,175,16,'🔬'));
  s+=g('box',R(180,158,76,54,'#58d68d',6,SK)+(f.box_open?R(190,166,56,38,'#d5f5e3',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#85929e',6,SK)+T(330,70,18,'🧪')+T(330,110,18,'💊')+T(330,145,16,'🌡️'));
  s+=g('door',R(308,150,72,124,'#5dade2',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🔬')+T(350,275,20,'🧬');
  return s;}
};
var r9={id:'r9',title:'糖果超市',emoji:'🛒',sub:'第一章 · 助人',
 story:['第一章 · 校园清晨「糖果超市」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','你遇见了小花猫，对方说：“想让我开门，先送礼物——但礼物被锁住了，还要一枚放行章。”','两道锁：柜台里是礼物，购物篮里是放行章。都拿到才能交任务！'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {if:['!has_stamp'],text:'小花猫抱着手臂：“先拿到放行章，我才收礼物！”'},
    {text:'小花猫点点头：“放行章齐了，把礼物给我吧。”',use:[{item:'gift_r9',take:['gift_r9'],win:true,text:'小花猫收下了！「糖果超市」任务完成，门开了！'}],wrong:'小花猫摇头：“我要的是礼物。”'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台抽屉锁着：',note:'【算一算】彩带每米 1.5 元，买 2.4 米。一共多少元？',lock:{kind:'num',len:3,dot:true,answer:'3.6',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r9'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'购物篮上贴着“放行章”，要开锁：',note:'【英语题】【小作文·校长通知】Make sure you wear a _____ on your way home.\n（线索：通知信穿戴，8 个字母，首字母 R；彩色的更好。）',lock:{kind:'alpha',len:8,answer:'RAINCOAT',prompt:'输入英文大写',ok:{set:['box_open'],text:'盒子开了，里面有一枚放行章！'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!has_stamp'],text:'里面有一枚放行章。',take:{give:['tool_r9'],set:['has_stamp'],text:'你拿到了放行章。（可以去找对方啦）'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'促销牌：任务清单——□ 礼物　□ 放行章　□ 交给小花猫。有人把清单改成“直接喊芝麻开门”，别信。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {text:'架子上有一张小花猫的照片，背面写着：“没有章，我什么都不收。”'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开柜台拿礼物。','算一算纸条上的题。','小数乘小数：先当整数乘，再看两个因数一共有几位小数。']},
  {until:'took_gift',obj:'desk',tiers:['拿起礼物。','点柜台。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['先解开购物篮上的英文锁，拿到通行证印章。','通知信穿戴，8 个字母，首字母 R；彩色的更好。','拼对大写单词。']},
  {until:'has_stamp',obj:'box',tiers:['拿起放行章。','点购物篮。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品再点对方。']}
 ],
 explain:['1.5 × 2.4 = 3.6','【小作文·校长通知】Make sure you wear a _____ on your way home. → RAINCOAT','拿到放行章和礼物，交给小花猫。'],
 solution:[['code','desk','3.6'],['take','desk'],['code','box','RAINCOAT'],['take','box'],['use','door','gift_r9']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  for(var i=0;i<5;i++)s+=R(20+i*74,230,60,50,'#f8e0d0',4,' opacity=".5"');
  s+=g('window',R(16,16,100,78,'#cce8ff',8,SK)+T(66,55,14,'OPEN',' fill="#e74c3c" font-weight="700"'));
  s+=g('board',R(130,14,160,92,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(210,45,14,'📢')+T(210,72,12,'特价区',' fill="#c0392b"')+T(210,92,10,'SALE',' fill="#e67e22"'));
  s+=g('desk',R(24,150,130,54,'#e0d0c0',6,SK)+(f.desk_open?R(36,160,70,32,'#fff',4):C(80,178,5,'#5b4636'))+T(90,218,10,'收银台',' fill="#5b4636"')+T(140,175,16,'🧾'));
  s+=g('box',R(175,158,80,54,'#ffb36b',6,SK)+(f.box_open?R(185,166,60,38,'#ffe0b0',3):R(198,174,34,20,'#ffcf4d',3))+T(215,226,10,'购物篮',' fill="#5b4636"'));
  s+=g('shelf',R(270,24,114,130,'#b9793f',6,SK)+R(280,55,94,8,'#8a5428',2)+R(280,95,94,8,'#8a5428',2)+T(327,75,16,'🍪')+T(327,115,16,'🧃'));
  s+=g('door',R(304,155,72,120,'#5dade2',6,SK)+R(312,165,56,50,'#aed6f1',4)+C(358,230,5,'#ffcf4d',SK)+T(334,255,9,'出口',' fill="#1a5276"'));
  s+=T(48,275,22,'🛒')+T(350,275,20,'🛒');
  return s;}
};
var r10={id:'r10',title:'小火车站',emoji:'🚂',sub:'第一章 · 动手组装',
 story:['第一章 · 校园清晨「小火车站」','清晨的校园忽然响起警报，一扇扇门自动锁上了。','「小火车站」要组装一件关键道具才能出门。','材料 A 锁在检票台，材料 B 锁在行李箱。拼好后放到组装台上！'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台闪着灯：“放入成品。”',use:[{item:'combo_r10',take:['combo_r10'],win:true,text:'成品就位——「小火车站」装置启动，门开了！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台锁着材料 A：',note:'【算一算】循环小数：0.3333…（循环节是 3）化成最简分数，分母是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r10'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'行李箱锁着材料 B：',note:'【英语题】You\'ll want to close the _____.\n（线索：Typhoon 单元 Spotlight，复数名词，7 个字母，首字母 W；墙上的窗。）',lock:{kind:'alpha',len:7,answer:'WINDOWS',prompt:'输入英文大写',ok:{set:['box_open'],text:'开了！里面有材料 B。'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!took_b'],text:'里面有材料 B。',take:{give:['partB_r10'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'时刻表图纸：材料 A + 材料 B = 成品 → 放入组装台。角落有人乱写“只需材料 A”，那是陷阱。'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'架子上有一颗生锈的螺丝，拧不进去，不是材料。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'窗外的升旗台空荡荡的，旗绳被风吹得啪啪响。'}
  ]}
 ],
 combos:[{a:'partA_r10',b:'partB_r10',give:['combo_r10'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开检票台。','算数学题。','纯循环小数：循环几位，分母就是几个 9。一位用 9，两位用 99，写好再约分，约完的分母才是答案。']},
  {until:'took_a',obj:'desk',tiers:['拿材料 A。','点开拿起。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['材料 B 在带字母锁的盒子里。','Typhoon 单元 Spotlight，复数名词，7 个字母，首字母 W；墙上的窗。','大写拼写。']},
  {until:'took_b',obj:'box',tiers:['拿材料 B。','点行李箱。','拿起来。']},
  {until:'made_combo',tiers:['两样材料可组合。','物品栏点两个拼。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['0.3333… 的循环节是 3，写成 3/9，约分得 1/3，分母是 3。','You\'ll want to close the _____. → WINDOWS','组合成成品，放到组装台。'],
 solution:[['code','desk','3'],['take','desk'],['code','box','WINDOWS'],['take','box'],['combine','partA_r10','partB_r10'],['use','door','combo_r10']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=R(0,250,400,8,'#555')+R(0,268,400,4,'#555');
  for(var i=0;i<12;i++)s+=R(10+i*33,250,16,8,'#fff',' opacity=".7"');
  s+=g('window',R(16,16,100,78,'#b0c4de',8,SK)+T(66,55,18,'🚂'));
  s+=g('board',R(128,12,170,96,'#1a1a2e',6,' stroke="#4d8bff" stroke-width="5"')+T(213,40,11,'时刻表',' fill="#7CFC00"')+T(213,62,9,'G123  09:30',' fill="#7CFC00"')+T(213,82,9,'D456  10:15',' fill="#7CFC00"'));
  s+=g('desk',R(28,148,128,54,'#c0c8d0',6,SK)+(f.desk_open?R(40,158,70,32,'#e8eef4',4):C(84,176,5,'#5b4636'))+T(92,216,10,'检票台',' fill="#5b4636"'));
  s+=g('box',R(175,158,78,54,'#8e44ad',6,SK)+(f.box_open?R(185,166,58,38,'#d7bde2',3):R(198,174,34,20,'#ffcf4d',3))+T(214,228,10,'行李箱',' fill="#5b4636"'));
  s+=g('shelf',R(275,28,108,120,'#7f8c9d',6,SK)+T(329,80,22,'🎒')+T(329,120,18,'🧳'));
  s+=g('door',R(300,150,72,124,'#34495e',6,SK)+R(310,162,52,40,'#5d6d7e',4)+C(354,220,5,'#ffcf4d',SK)+T(330,255,9,'站台',' fill="#ecf0f1"'));
  s+=T(48,285,22,'🚂')+T(350,285,20,'🎫');
  return s;}
};
var r11={id:'r11',title:'彩虹美术室',emoji:'🎨',sub:'第二章 · 双锁逃脱',
 story:['第二章 · 午后奇遇「彩虹美术室」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','「彩虹美术室」的画室门需要钥匙，可钥匙锁在颜料盒里；开盒之前，还得先解开画桌的机关拿到开盒许可章。','黑板上抄着和抽屉一样的算式——先四处观察，再动手！'],
 objects:[
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {if:['!took_key'],text:'画室门锁着，钥匙孔空空的。去找钥匙吧。'},
    {text:'你有钥匙了。',use:[{item:'key_r11',win:true,text:'门开了！「彩虹美术室」逃脱成功！'}],wrong:'要用钥匙。'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌上有密码锁。算对才能拿到“开盒许可”小章：',note:'【算一算】小数四则：2.4 × 0.15 = ?',lock:{kind:'num',len:4,dot:true,answer:'0.36',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r11'],text:'抽屉开了，里面有一枚开盒许可小章（拿上它，再去开钥匙盒）。'},bad:'密码不对哦，再算一算。'}},
    {text:'抽屉空了。许可章你已经拿着。'}
  ]},
  {id:'box',name:'钥匙盒',box:[200,160,70,50],views:[
    {if:['!desk_open'],text:'钥匙盒旁边贴着纸条：“请先到桌子取得开盒许可。”盒子暂时打不开。'},
    {if:['desk_open','!box_open'],text:'许可章生效了，钥匙盒可以开锁：',note:'《登鹳雀楼》　唐·王之涣\n欲穷千里 ___，更上一层楼。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','目']],answer:'目',prompt:'转到正确的字',ok:{set:['box_open'],text:'钥匙盒开了！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_key'],text:'盒子里有一把钥匙。',take:{give:['key_r11'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'钥匙盒空了。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'画板上用粉笔抄着同一道题（和抽屉纸条一样），方便你对照。角落写着假密码 0000。',note:'【算一算】小数四则：2.4 × 0.15 = ?'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'架子夹层里有一把生锈的假钥匙，插不进门。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开画桌拿许可章。','看纸条或黑板上的算式。','先按整数相乘，再点小数点：两个因数一共有几位小数，积就有几位小数。']},
  {until:'box_open',obj:'box',tiers:['钥匙盒是古诗转盘。','《登鹳雀楼》。','回忆原句。']},
  {until:'took_key',obj:'box',tiers:['拿起钥匙。','点钥匙盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['去开门。','选中钥匙点画室门。','先点钥匙再点门。']}
 ],
 explain:['2.4 × 0.15 = 0.36。先按整数乘，再点上小数点。','《登鹳雀楼》：欲穷千里目，更上一层楼。，缺「目」。','用钥匙打开画室门。'],
 solution:[['code','desk','0.36'],['code','box','目'],['take','box'],['use','door','key_r11']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(304,150,72,124,'#e8a87c',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r12={id:'r12',title:'叮咚音乐室',emoji:'🎵',sub:'第二章 · 三锁挑战',
 story:['第二章 · 午后奇遇「叮咚音乐室」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','最难的一间「叮咚音乐室」！琴房门有字母锁，钥匙却藏在书架暗格；暗格又要先开琴凳旁小桌。','数学、语文、英语三道锁环环相扣——观察每个角落再动手。'],
 objects:[
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'琴房门上有字母密码锁：',note:'【英语题】【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____.\n（线索：听广播比一比，8 个字母，首字母 U；挡雨的伞。）',lock:{kind:'alpha',len:8,answer:'UMBRELLA',prompt:'输入英文大写',ok:{set:['door_code'],text:'字母锁开了！还需要钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先解开门上的字母锁。'},
    {text:'字母锁已开，钥匙孔亮着。',use:[{item:'key_r12',win:true,text:'三锁全开！「叮咚音乐室」逃脱成功！'}],wrong:'还差钥匙。'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌锁着，纸条写着：',note:'【算一算】解方程：3x − 24 = 2x + 18\n求 x。',lock:{kind:'num',len:2,answer:'42',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r12'],text:'抽屉开了，里面有一张“书架暗格启动卡”。'},bad:'密码不对哦，再算一算。'}},
    {text:'启动卡已取走。去开书架吧。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {if:['!desk_open'],text:'乐谱架有一个暗格，但机关没启动。先去开琴凳旁小桌。'},
    {if:['desk_open','!shelf_open'],text:'暗格亮起转盘：',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','辛']],answer:'辛',prompt:'转到正确的字',ok:{set:['shelf_open'],text:'暗格开了，里面有一把钥匙！'},bad:'不对哦，再想想。'}},
    {if:['shelf_open','!took_key'],text:'暗格里有钥匙。',take:{give:['key_r12'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'暗格空了。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'乐谱板流程图：抽屉(数学) → 书架(语文) → 门(英语+钥匙)。有人把箭头画反了，别跟错。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'乐器盒里只有一张空白便签和一颗糖，不是线索。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开琴凳旁小桌。','算数学题。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'shelf_open',obj:'shelf',tiers:['书架暗格是古诗转盘。','《悯农》。','回忆原句。']},
  {until:'took_key',obj:'shelf',tiers:['拿起钥匙。','点乐谱架。','拿起来。']},
  {until:'door_code',obj:'door',tiers:['去开大门字母锁。','听广播比一比，8 个字母，首字母 U；挡雨的伞。','大写拼写。']},
  {until:'escaped',obj:'door',tiers:['字母锁开了，用钥匙。','选中钥匙点琴房门。','先点钥匙再点门。']}
 ],
 explain:['移项合并：(3-2)x = 24+18 → x = 42','《悯农》：谁知盘中餐，粒粒皆辛苦。，缺「辛」。','英文门禁：【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____. → UMBRELLA','三锁齐开，用钥匙出门。'],
 solution:[['code','desk','42'],['code','shelf','辛'],['take','shelf'],['code','door','UMBRELLA'],['use','door','key_r12']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(18,18,96,74,'#e8daef',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#2c3e50',6,' stroke="#9b59b6" stroke-width="5"')+T(208,40,12,'♪ ♫ ♪',' fill="#f1c40f"')+T(208,70,11,'今日曲目',' fill="#ecf0f1"')+T(208,92,9,'Do Re Mi',' fill="#aed6f1"'));
  s+=g('desk',R(28,150,136,56,'#af7ac5',6,SK)+(f.desk_open?R(40,160,70,34,'#d7bde2',4):C(88,180,5,'#5b4636'))+T(96,220,10,'琴旁桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#f39c12',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#7d3c98',6,SK)+T(330,70,22,'🎹')+T(330,115,20,'🎻')+T(330,150,16,'🥁'));
  s+=g('door',R(300,150,72,124,'#8e44ad',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎵')+T(350,275,20,'🎵');
  return s;}
};
var r13={id:'r13',title:'秘密小花园',emoji:'🌷',sub:'第二章 · 数学+英语',
 story:['第二章 · 午后奇遇「秘密小花园」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','目标：穿过奇遇街。这间「花园」的园门有两道机关——先开石凳拿钥匙，再解开门上的字谜锁。','四处看看：黑板、架子上也许藏着干扰信息，别被骗了！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'园门上有一把字谜锁，旁边贴着纸条：',note:'【英语题】【小作文·安全 tip】You\'ll need to close the _____ when a typhoon is landing.\n（线索：作文句型 You\'ll need to…，7 个字母，首字母 W。）',lock:{kind:'alpha',len:7,answer:'WINDOWS',prompt:'输入英文大写',ok:{set:['door_code'],text:'门上的字锁开了！还差一把钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先把门上的字锁打开。'},
    {text:'字锁已经开了，钥匙孔亮着光。',use:[{item:'key_r13',win:true,text:'钥匙一转——「秘密小花园」逃脱成功！'}],wrong:'要用钥匙才能打开。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳抽屉挂着密码锁，纸条被压在玻璃板下：',note:'【算一算】6.4 升油平均倒进 4 个瓶子，每个瓶子多少升？',lock:{kind:'num',len:3,dot:true,answer:'1.6',prompt:'输入密码',ok:{set:['desk_open'],text:'咔哒！抽屉开了，里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'抽屉里有一把钥匙。',take:{give:['key_r13'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上用粉笔写着：“想出门？先算对抽屉题，再读门上的字！”旁边还画了一串无关的数字 3-1-4，别当成密码。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'架子上有一本翻旧的练习册，夹着一张废稿：把 2+2 写成了 5——显然是干扰。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'花箱是空的，盖子内侧写着：“钥匙不在我这儿。”'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看石凳玻璃板下的算式。','算出答案就是抽屉密码。','总数÷瓶数，就是每个瓶子分到的量。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点石凳拿起钥匙。','把钥匙拿起来。']},
  {until:'door_code',obj:'door',tiers:['门上还有字母锁，要先读英文线索。','作文句型 You\'ll need to…，7 个字母，首字母 W。','结合词性、首字母和中文意思方向来猜。']},
  {until:'escaped',obj:'door',tiers:['字锁开了，还要用钥匙。','选中钥匙，再点园门。','先点钥匙，再点门。']}
 ],
 explain:['6.4 ÷ 4 = 1.6','门上英文：【小作文·安全 tip】You\'ll need to close the _____ when a typhoon is landing. → WINDOWS','用钥匙打开园门，逃脱成功。'],
 solution:[['code','desk','1.6'],['take','desk'],['code','door','WINDOWS'],['use','door','key_r13']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,160,400,140,'#90d080');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(300,160,70,120,'#8b6914',6,SK)+P('M300 160l35-20 35 20','#6aaa5a',SK)+C(354,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🌷')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r14={id:'r14',title:'活力体育馆',emoji:'🏀',sub:'第二章 · 通行证',
 story:['第二章 · 午后奇遇「活力体育馆」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','「活力体育馆」的出口是一台刷卡机。要先拿到卡片和徽章，拼成通行证。','长椅锁着卡片，器材箱锁着徽章——两道锁都要开！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'刷卡机嘀嘀响：“请出示通行证。”',use:[{item:'combo_r14',take:['combo_r14'],win:true,text:'嘀——通过！「活力体育馆」逃脱成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着，纸条上有题：',note:'【算一算】循环小数：下面哪个算式的商是循环小数？① 1÷2 ② 3÷4 ③ 1÷3 ④ 2÷5。填序号。',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有一张卡片。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r14'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'器材箱上还有第二把锁：',note:'【成语填空】家 喻 户 ___\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['家','喻','户','天','了','晓']],answer:'晓',prompt:'转到正确的字',ok:{set:['box_open'],text:'盒子开了，里面有一枚徽章！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_tool'],text:'里面有一枚徽章。',take:{give:['tool_r14'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板写着步骤：①开抽屉拿卡片 ②开盒子拿徽章 ③物品栏组合 ④去刷卡机。旁边涂鸦“密码=1234”是假的！'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'架子上有一张作废的旧卡，磁条已经刮花了，刷不上。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[{a:'scrap_r14',b:'tool_r14',give:['combo_r14'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。']},
  {until:'took_scrap',obj:'desk',tiers:['拿起卡片。','点长椅。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['盒子上是成语转盘。','看空格前后。','家家户户都知道，形容很有名']},
  {until:'took_tool',obj:'box',tiers:['拿起徽章。','点器材箱。','拿起来。']},
  {until:'made_combo',tiers:['卡片和徽章可以组合。','物品栏先点一个再点另一个。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证再点刷卡机。','刷卡过关。']}
 ],
 explain:['① 1÷2=0.5 有限小数，② 3÷4=0.75 有限小数，③ 1÷3=0.3333… 循环小数，④ 2÷5=0.4 有限小数。所以填 3。','成语「家喻户晓」缺「晓」。家家户户都知道，形容很有名','组合成通行证，刷卡逃脱。'],
 solution:[['code','desk','3'],['take','desk'],['code','box','晓'],['take','box'],['combine','scrap_r14','tool_r14'],['use','door','combo_r14']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,200,400,100,'#e8c878');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(308,155,72,120,'#c98b52',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏀')+T(350,275,20,'🏆');
  return s;}
};
var r15={id:'r15',title:'智慧电脑室',emoji:'💻',sub:'第二章 · 助人',
 story:['第二章 · 午后奇遇「智慧电脑室」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','你遇见了小花猫，对方说：“想让我开门，先送礼物——但礼物被锁住了，还要一枚放行章。”','两道锁：电脑桌里是礼物，配件盒里是放行章。都拿到才能交任务！'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {if:['!has_stamp'],text:'小花猫抱着手臂：“先拿到放行章，我才收礼物！”'},
    {text:'小花猫点点头：“放行章齐了，把礼物给我吧。”',use:[{item:'gift_r15',take:['gift_r15'],win:true,text:'小花猫收下了！「智慧电脑室」任务完成，门开了！'}],wrong:'小花猫摇头：“我要的是礼物。”'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌抽屉锁着：',note:'【算一算】小数四则：6.3 ÷ 0.3 = ?',lock:{kind:'num',len:2,answer:'21',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r15'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'配件盒上贴着“放行章”，要开锁：',note:'【英语题】Yiming: What will we need to do?\nMulan: We will need to stay _____.\n（线索：Typhoon 单元，副词/场所，7 个字母，首字母 I；待在室内。）',lock:{kind:'alpha',len:7,answer:'INDOORS',prompt:'输入英文大写',ok:{set:['box_open'],text:'盒子开了，里面有一枚放行章！'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!has_stamp'],text:'里面有一枚放行章。',take:{give:['tool_r15'],set:['has_stamp'],text:'你拿到了放行章。（可以去找对方啦）'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'屏幕墙：任务清单——□ 礼物　□ 放行章　□ 交给小花猫。有人把清单改成“直接喊芝麻开门”，别信。'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {text:'架子上有一张小花猫的照片，背面写着：“没有章，我什么都不收。”'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开电脑桌拿礼物。','算一算纸条上的题。','除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。']},
  {until:'took_gift',obj:'desk',tiers:['拿起礼物。','点电脑桌。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['先解开配件盒上的英文锁，拿到通行证印章。','Typhoon 单元，副词/场所，7 个字母，首字母 I；待在室内。','拼对大写单词。']},
  {until:'has_stamp',obj:'box',tiers:['拿起放行章。','点配件盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品再点对方。']}
 ],
 explain:['6.3 ÷ 0.3 = 21。','Yiming: What will we need to do?\nMulan: We will need to stay _____. → INDOORS','拿到放行章和礼物，交给小花猫。'],
 solution:[['code','desk','21'],['take','desk'],['code','box','INDOORS'],['take','box'],['use','door','gift_r15']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(18,18,96,74,'#d6eaf8',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#1c2833',6,' stroke="#3498db" stroke-width="5"')+T(208,45,14,'💻')+T(208,72,11,'CODE LAB',' fill="#58d68d"')+T(208,92,9,'hello()', ' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#5d6d7e',6,SK)+(f.desk_open?R(40,160,70,34,'#aeb6bf',4):C(88,180,5,'#58d68d'))+T(96,220,10,'电脑桌',' fill="#5b4636"')+R(100,155,50,28,'#2c3e50',3)+R(105,160,40,18,'#3498db',2));
  s+=g('box',R(180,158,76,54,'#3498db',6,SK)+(f.box_open?R(190,166,56,38,'#aed6f1',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#34495e',6,SK)+T(330,70,18,'⌨️')+T(330,110,18,'🖱️')+T(330,145,16,'💾'));
  s+=g('door',R(304,150,72,124,'#2c3e50',6,SK)+C(358,215,5,'#58d68d',SK));
  s+=T(48,275,22,'💻')+T(350,275,20,'🖥️');
  return s;}
};
var r16={id:'r16',title:'月亮书房',emoji:'📚',sub:'第二章 · 动手组装',
 story:['第二章 · 午后奇遇「月亮书房」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','「月亮书房」要组装一件关键道具才能出门。','材料 A 锁在书桌，材料 B 锁在小盒。拼好后放到组装台上！'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台闪着灯：“放入成品。”',use:[{item:'combo_r16',take:['combo_r16'],win:true,text:'成品就位——「月亮书房」装置启动，门开了！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌锁着材料 A：',note:'【算一算】一桶油重 18.6 千克，用去 5.8 千克后又倒入 3.5 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'16.3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r16'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'小盒锁着材料 B：',note:'【英语题】【听力·广播】If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run.\n问：Stay away from _____!\n（线索：听广播找危险物，5 个字母，首字母 T；大风时别靠近。）',lock:{kind:'alpha',len:5,answer:'TREES',prompt:'输入英文大写',ok:{set:['box_open'],text:'开了！里面有材料 B。'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!took_b'],text:'里面有材料 B。',take:{give:['partB_r16'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板图纸：材料 A + 材料 B = 成品 → 放入组装台。角落有人乱写“只需材料 A”，那是陷阱。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'架子上有一颗生锈的螺丝，拧不进去，不是材料。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[{a:'partA_r16',b:'partB_r16',give:['combo_r16'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开书桌。','算数学题。','先减去用去的，再加上倒入的。']},
  {until:'took_a',obj:'desk',tiers:['拿材料 A。','点开拿起。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['材料 B 在带字母锁的盒子里。','听广播找危险物，5 个字母，首字母 T；大风时别靠近。','大写拼写。']},
  {until:'took_b',obj:'box',tiers:['拿材料 B。','点小盒。','拿起来。']},
  {until:'made_combo',tiers:['两样材料可组合。','物品栏点两个拼。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['18.6 − 5.8 + 3.5 = 16.3','【听力·广播】If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run.\n问：Stay away from _____! → TREES','组合成成品，放到组装台。'],
 solution:[['code','desk','16.3'],['take','desk'],['code','box','TREES'],['take','box'],['combine','partA_r16','partB_r16'],['use','door','combo_r16']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(300,150,72,124,'#c98b52',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📚')+T(350,275,20,'✨');
  return s;}
};
var r17={id:'r17',title:'星星教室',emoji:'🏫',sub:'第二章 · 双锁逃脱',
 story:['第二章 · 午后奇遇「星星教室」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','「星星教室」的教室门需要钥匙，可钥匙锁在作业盒里；开盒之前，还得先解开讲台的机关拿到开盒许可章。','黑板上抄着和抽屉一样的算式——先四处观察，再动手！'],
 objects:[
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {if:['!took_key'],text:'教室门锁着，钥匙孔空空的。去找钥匙吧。'},
    {text:'你有钥匙了。',use:[{item:'key_r17',win:true,text:'门开了！「星星教室」逃脱成功！'}],wrong:'要用钥匙。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上有密码锁。算对才能拿到“开盒许可”小章：',note:'【算一算】一共有 4.8 米绳子，每份 1.2 米。可以分成多少份？',lock:{kind:'num',len:1,answer:'4',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r17'],text:'抽屉开了，里面有一枚开盒许可小章（拿上它，再去开钥匙盒）。'},bad:'密码不对哦，再算一算。'}},
    {text:'抽屉空了。许可章你已经拿着。'}
  ]},
  {id:'box',name:'钥匙盒',box:[200,160,70,50],views:[
    {if:['!desk_open'],text:'钥匙盒旁边贴着纸条：“请先到桌子取得开盒许可。”盒子暂时打不开。'},
    {if:['desk_open','!box_open'],text:'许可章生效了，钥匙盒可以开锁：',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','波']],answer:'波',prompt:'转到正确的字',ok:{set:['box_open'],text:'钥匙盒开了！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_key'],text:'盒子里有一把钥匙。',take:{give:['key_r17'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'钥匙盒空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上用粉笔抄着同一道题（和抽屉纸条一样），方便你对照。角落写着假密码 0000。',note:'【算一算】一共有 4.8 米绳子，每份 1.2 米。可以分成多少份？'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'架子夹层里有一把生锈的假钥匙，插不进门。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开讲台拿许可章。','看纸条或黑板上的算式。','小数除以小数：先把除数变成整数（两边同乘 10 或 100），再除。']},
  {until:'box_open',obj:'box',tiers:['钥匙盒是古诗转盘。','《咏鹅》。','回忆原句。']},
  {until:'took_key',obj:'box',tiers:['拿起钥匙。','点钥匙盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['去开门。','选中钥匙点教室门。','先点钥匙再点门。']}
 ],
 explain:['4.8 ÷ 1.2 = 4','《咏鹅》：白毛浮绿水，红掌拨清波。，缺「波」。','用钥匙打开教室门。'],
 solution:[['code','desk','4'],['code','box','波'],['take','box'],['use','door','key_r17']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(18,18,96,74,'#bfe8ff',8,SK)+C(90,40,10,'#fff2a8')+R(28,60,30,24,'#7ccf6c',3));
  s+=g('board',R(128,12,170,100,'#1e8449',6,' stroke="#a86b38" stroke-width="6"')+T(213,45,12,'黑板',' fill="#fff"')+T(213,70,10,'认真审题',' fill="#d5f5e3"')+T(213,92,9,'1+1=?',' fill="#a9dfbf"'));
  s+=g('desk',R(28,150,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,160,70,34,'#d9a26c',4):C(88,180,5,'#5b4636'))+T(96,220,10,'讲台',' fill="#5b4636"')+T(145,168,14,'📚'));
  s+=g('box',R(180,158,76,54,'#f5b041',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗'));
  s+=g('door',R(304,150,72,124,'#8fb6e8',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏫')+T(350,275,20,'✏️');
  return s;}
};
var r18={id:'r18',title:'甜甜厨房',emoji:'🍳',sub:'第二章 · 三锁挑战',
 story:['第二章 · 午后奇遇「甜甜厨房」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','最难的一间「甜甜厨房」！厨房门有字母锁，钥匙却藏在书架暗格；暗格又要先开桌子。','数学、语文、英语三道锁环环相扣——观察每个角落再动手。'],
 objects:[
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'厨房门上有字母密码锁：',note:'【英语题】【小作文·安全 tip】Please remember to bring everything _____.\n（线索：作文句型 Please remember to…，6 个字母，首字母 I。）',lock:{kind:'alpha',len:6,answer:'INSIDE',prompt:'输入英文大写',ok:{set:['door_code'],text:'字母锁开了！还需要钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先解开门上的字母锁。'},
    {text:'字母锁已开，钥匙孔亮着。',use:[{item:'key_r18',win:true,text:'三锁全开！「甜甜厨房」逃脱成功！'}],wrong:'还差钥匙。'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子锁着，纸条写着：',note:'【算一算】循环小数：0.1818…（循环节是 18）化成最简分数，分子是多少？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r18'],text:'抽屉开了，里面有一张“书架暗格启动卡”。'},bad:'密码不对哦，再算一算。'}},
    {text:'启动卡已取走。去开书架吧。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {if:['!desk_open'],text:'碗架有一个暗格，但机关没启动。先去开桌子。'},
    {if:['desk_open','!shelf_open'],text:'暗格亮起转盘：',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','雪']],answer:'雪',prompt:'转到正确的字',ok:{set:['shelf_open'],text:'暗格开了，里面有一把钥匙！'},bad:'不对哦，再想想。'}},
    {if:['shelf_open','!took_key'],text:'暗格里有钥匙。',take:{give:['key_r18'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'暗格空了。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'菜谱板流程图：抽屉(数学) → 书架(语文) → 门(英语+钥匙)。有人把箭头画反了，别跟错。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'食材盒里只有一张空白便签和一颗糖，不是线索。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桌子。','算数学题。','先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。']},
  {until:'shelf_open',obj:'shelf',tiers:['书架暗格是古诗转盘。','《江雪》。','回忆原句。']},
  {until:'took_key',obj:'shelf',tiers:['拿起钥匙。','点碗架。','拿起来。']},
  {until:'door_code',obj:'door',tiers:['去开大门字母锁。','作文句型 Please remember to…，6 个字母，首字母 I。','大写拼写。']},
  {until:'escaped',obj:'door',tiers:['字母锁开了，用钥匙。','选中钥匙点厨房门。','先点钥匙再点门。']}
 ],
 explain:['0.1818… 写成 18/99，约分得 2/11，分子是 2。','《江雪》：孤舟蓑笠翁，独钓寒江雪。，缺「雪」。','英文门禁：【小作文·安全 tip】Please remember to bring everything _____. → INSIDE','三锁齐开，用钥匙出门。'],
 solution:[['code','desk','2'],['code','shelf','雪'],['take','shelf'],['code','door','INSIDE'],['use','door','key_r18']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  for(var i=0;i<8;i++)for(var j=0;j<2;j++)s+=R(i*50+(j%2)*25,214+j*43,25,43,'#b6dbe6',0,' opacity=".45"');
  s+=g('window',R(18,18,100,78,'#bfe8ff',8,SK)+C(96,40,11,'#fff2a8')+R(28,70,36,20,'#ffd6a5',3));
  s+=g('board',R(130,16,160,96,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(210,48,14,'📋')+T(210,78,11,'今日菜谱',' fill="#5b4636"')+T(210,96,9,'step by step',' fill="#888"'));
  s+=g('desk',R(24,148,140,58,'#e8c9a0',6,SK)+R(36,156,56,32,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(88,174,5,'#5b4636'))+T(90,218,10,'操作台',' fill="#5b4636"')+T(150,170,16,'🔪'));
  s+=g('box',R(178,158,78,54,'#ff9f68',6,SK)+(f.box_open?R(188,166,58,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3))+T(216,220,10,'食材',' fill="#5b4636"'));
  s+=g('shelf',R(270,22,110,118,'#c98b52',6,SK)+R(280,50,90,8,'#8a5428',2)+R(280,86,90,8,'#8a5428',2)+T(325,70,18,'🥣')+T(325,110,18,'🧂'));
  s+=g('door',R(300,148,72,128,'#ffd6a5',6,SK)+C(354,210,5,'#ffcf4d',SK)+R(310,160,40,36,'#fff',4)+T(330,250,9,'灶台旁',' fill="#5b4636"'));
  s+=T(50,268,22,'🍳')+T(360,268,20,'🍳')+T(200,268,16,'🥖');
  return s;}
};
var r19={id:'r19',title:'风筝操场',emoji:'⚽',sub:'第二章 · 数学+英语',
 story:['第二章 · 午后奇遇「风筝操场」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','目标：穿过奇遇街。这间「操场」的场馆门有两道机关——先开长椅拿钥匙，再解开门上的字谜锁。','四处看看：黑板、架子上也许藏着干扰信息，别被骗了！'],
 objects:[
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'场馆门上有一把字谜锁，旁边贴着纸条：',note:'【英语题】If you happen to be outside, get to a safe place _____.\n（线索：Typhoon 单元，副词，7 个字母，首字母 Q；赶快、迅速地。）',lock:{kind:'alpha',len:7,answer:'QUICKLY',prompt:'输入英文大写',ok:{set:['door_code'],text:'门上的字锁开了！还差一把钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先把门上的字锁打开。'},
    {text:'字锁已经开了，钥匙孔亮着光。',use:[{item:'key_r19',win:true,text:'钥匙一转——「风筝操场」逃脱成功！'}],wrong:'要用钥匙才能打开。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉挂着密码锁，纸条被压在玻璃板下：',note:'【算一算】小数四则：12.6 + 0.45 − 3.05 = ?',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'咔哒！抽屉开了，里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'抽屉里有一把钥匙。',take:{give:['key_r19'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上用粉笔写着：“想出门？先算对抽屉题，再读门上的字！”旁边还画了一串无关的数字 3-1-4，别当成密码。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'架子上有一本翻旧的练习册，夹着一张废稿：把 2+2 写成了 5——显然是干扰。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'器材箱是空的，盖子内侧写着：“钥匙不在我这儿。”'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看长椅玻璃板下的算式。','算出答案就是抽屉密码。','看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅拿起钥匙。','把钥匙拿起来。']},
  {until:'door_code',obj:'door',tiers:['门上还有字母锁，要先读英文线索。','Typhoon 单元，副词，7 个字母，首字母 Q；赶快、迅速地。','结合词性、首字母和中文意思方向来猜。']},
  {until:'escaped',obj:'door',tiers:['字锁开了，还要用钥匙。','选中钥匙，再点场馆门。','先点钥匙，再点门。']}
 ],
 explain:['12.6 + 0.45 − 3.05 = 10。先加再减。','门上英文：If you happen to be outside, get to a safe place _____. → QUICKLY','用钥匙打开场馆门，逃脱成功。'],
 solution:[['code','desk','10'],['take','desk'],['code','door','QUICKLY'],['use','door','key_r19']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,200,400,100,'#9ee07a');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(300,155,72,120,'#c98b52',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'⚽')+T(350,275,20,'🏆');
  return s;}
};
var r20={id:'r20',title:'蜗牛公园',emoji:'🎠',sub:'第二章 · 通行证',
 story:['第二章 · 午后奇遇「蜗牛公园」','午后的小镇像走进了奇幻故事，出口被谜题挡住。','「蜗牛公园」的出口是一台刷卡机。要先拿到卡片和徽章，拼成通行证。','石凳锁着卡片，花箱锁着徽章——两道锁都要开！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'刷卡机嘀嘀响：“请出示通行证。”',use:[{item:'combo_r20',take:['combo_r20'],win:true,text:'嘀——通过！「蜗牛公园」逃脱成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳锁着，纸条上有题：',note:'【算一算】梯形：上底 6.5 分米，下底 9.5 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'32',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有一张卡片。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r20'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花箱上还有第二把锁：',note:'【成语填空】心 浮 ___ 躁\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['心','浮','躁','天','了','气']],answer:'气',prompt:'转到正确的字',ok:{set:['box_open'],text:'盒子开了，里面有一枚徽章！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_tool'],text:'里面有一枚徽章。',take:{give:['tool_r20'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌写着步骤：①开抽屉拿卡片 ②开盒子拿徽章 ③物品栏组合 ④去刷卡机。旁边涂鸦“密码=1234”是假的！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'架子上有一张作废的旧卡，磁条已经刮花了，刷不上。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'窗外传来卖气球的吆喝，可现在出不去。'}
  ]}
 ],
 combos:[{a:'scrap_r20',b:'tool_r20',give:['combo_r20'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿起卡片。','点石凳。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['盒子上是成语转盘。','看空格前后。','心里不踏实、容易着急']},
  {until:'took_tool',obj:'box',tiers:['拿起徽章。','点花箱。','拿起来。']},
  {until:'made_combo',tiers:['卡片和徽章可以组合。','物品栏先点一个再点另一个。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证再点刷卡机。','刷卡过关。']}
 ],
 explain:['（6.5+9.5）×4÷2 = 32','成语「心浮气躁」缺「气」。心里不踏实、容易着急','组合成通行证，刷卡逃脱。'],
 solution:[['code','desk','32'],['take','desk'],['code','box','气'],['take','box'],['combine','scrap_r20','tool_r20'],['use','door','combo_r20']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,160,400,140,'#8fd99a');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(308,160,70,120,'#8b6914',6,SK)+P('M308 160l35-20 35 20','#6aaa5a',SK)+C(362,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🎠')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r21={id:'r21',title:'书香角',emoji:'📖',sub:'第三章 · 助人',
 story:['第三章 · 夜色逃脱「书香角」','夜色降临，最后的密室亮起幽幽的灯。','你遇见了小花猫，对方说：“想让我开门，先送礼物——但礼物被锁住了，还要一枚放行章。”','两道锁：阅览桌里是礼物，还书箱里是放行章。都拿到才能交任务！'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {if:['!has_stamp'],text:'小花猫抱着手臂：“先拿到放行章，我才收礼物！”'},
    {text:'小花猫点点头：“放行章齐了，把礼物给我吧。”',use:[{item:'gift_r21',take:['gift_r21'],win:true,text:'小花猫收下了！「书香角」任务完成，门开了！'}],wrong:'小花猫摇头：“我要的是礼物。”'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌抽屉锁着：',note:'【算一算】循环小数：计算 1÷6，从小数点后第几位开始循环？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r21'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'还书箱上贴着“放行章”，要开锁：',note:'【英语题】【听力·广播】Bring everything inside, and close your windows. Also, turn off your lights and TV.\n问：Please close your _____.\n（线索：听广播找动作对象，7 个字母，首字母 W。）',lock:{kind:'alpha',len:7,answer:'WINDOWS',prompt:'输入英文大写',ok:{set:['box_open'],text:'盒子开了，里面有一枚放行章！'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!has_stamp'],text:'里面有一枚放行章。',take:{give:['tool_r21'],set:['has_stamp'],text:'你拿到了放行章。（可以去找对方啦）'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板：任务清单——□ 礼物　□ 放行章　□ 交给小花猫。有人把清单改成“直接喊芝麻开门”，别信。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'架子上有一张小花猫的照片，背面写着：“没有章，我什么都不收。”'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌拿礼物。','算一算纸条上的题。','看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。']},
  {until:'took_gift',obj:'desk',tiers:['拿起礼物。','点阅览桌。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['先解开还书箱上的英文锁，拿到通行证印章。','听广播找动作对象，7 个字母，首字母 W。','拼对大写单词。']},
  {until:'has_stamp',obj:'box',tiers:['拿起放行章。','点还书箱。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品再点对方。']}
 ],
 explain:['1÷6=0.1666…，从小数点后第 2 位开始循环。','【听力·广播】Bring everything inside, and close your windows. Also, turn off your lights and TV.\n问：Please close your _____. → WINDOWS','拿到放行章和礼物，交给小花猫。'],
 solution:[['code','desk','2'],['take','desk'],['code','box','WINDOWS'],['take','box'],['use','door','gift_r21']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fef9e7',6,' stroke="#b7950b" stroke-width="5"')+T(208,45,14,'📖')+T(208,72,11,'本周推荐',' fill="#7d6608"')+T(208,92,9,'静静阅读',' fill="#b7950b"'));
  s+=g('desk',R(28,150,136,56,'#d4b896',6,SK)+(f.desk_open?R(40,160,70,34,'#f5e6d3',4):C(88,180,5,'#5b4636'))+T(96,220,10,'阅览桌',' fill="#5b4636"')+T(145,170,16,'🔎'));
  s+=g('box',R(180,158,76,54,'#a0522d',6,SK)+(f.box_open?R(190,166,56,38,'#e8d5c4',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'还书箱',' fill="#5b4636"'));
  s+=g('shelf',R(270,16,118,160,'#8b6914',6,SK)+R(280,50,98,8,'#5d4e37',2)+R(280,90,98,8,'#5d4e37',2)+R(280,130,98,8,'#5d4e37',2)+T(329,70,12,'📘')+T(329,110,12,'📙')+T(329,150,12,'📔'));
  s+=g('door',R(304,150,72,124,'#a0522d',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📖')+T(350,275,20,'📚');
  return s;}
};
var r22={id:'r22',title:'流星台',emoji:'🔭',sub:'第三章 · 动手组装',
 story:['第三章 · 夜色逃脱「流星台」','夜色降临，最后的密室亮起幽幽的灯。','「流星台」要组装一件关键道具才能出门。','材料 A 锁在观测台，材料 B 锁在星盒。拼好后放到组装台上！'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台闪着灯：“放入成品。”',use:[{item:'combo_r22',take:['combo_r22'],win:true,text:'成品就位——「流星台」装置启动，门开了！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台锁着材料 A：',note:'【算一算】一块三角形彩纸底 8 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r22'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'星盒锁着材料 B：',note:'【英语题】【小作文·安全 tip】… is better than … → A _____ is better than an umbrella.\n（线索：Spotlight 比较句，8 个字母，首字母 R。）',lock:{kind:'alpha',len:8,answer:'RAINCOAT',prompt:'输入英文大写',ok:{set:['box_open'],text:'开了！里面有材料 B。'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!took_b'],text:'里面有材料 B。',take:{give:['partB_r22'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'星图图纸：材料 A + 材料 B = 成品 → 放入组装台。角落有人乱写“只需材料 A”，那是陷阱。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'架子上有一颗生锈的螺丝，拧不进去，不是材料。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[{a:'partA_r22',b:'partB_r22',give:['combo_r22'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算数学题。','先求一块三角形面积，再乘 2。']},
  {until:'took_a',obj:'desk',tiers:['拿材料 A。','点开拿起。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['材料 B 在带字母锁的盒子里。','Spotlight 比较句，8 个字母，首字母 R。','大写拼写。']},
  {until:'took_b',obj:'box',tiers:['拿材料 B。','点星盒。','拿起来。']},
  {until:'made_combo',tiers:['两样材料可组合。','物品栏点两个拼。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['一块 = 8×6÷2 = 24，两块 = 48','【小作文·安全 tip】… is better than … → A _____ is better than an umbrella. → RAINCOAT','组合成成品，放到组装台。'],
 solution:[['code','desk','48'],['take','desk'],['code','box','RAINCOAT'],['take','box'],['combine','partA_r22','partB_r22'],['use','door','combo_r22']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(300,150,72,124,'#8e7cc3',6,SK)+C(354,215,5,'#ffd34d',SK));
  s+=T(50,270,22,'🔭')+T(350,270,20,'🚀');
  return s;}
};
var r23={id:'r23',title:'气泡实验室',emoji:'🔬',sub:'第三章 · 双锁逃脱',
 story:['第三章 · 夜色逃脱「气泡实验室」','夜色降临，最后的密室亮起幽幽的灯。','「气泡实验室」的实验室门需要钥匙，可钥匙锁在试剂箱里；开盒之前，还得先解开实验台的机关拿到开盒许可章。','黑板上抄着和抽屉一样的算式——先四处观察，再动手！'],
 objects:[
  {id:'door',name:'实验室门',box:[310,160,70,120],views:[
    {if:['!took_key'],text:'实验室门锁着，钥匙孔空空的。去找钥匙吧。'},
    {text:'你有钥匙了。',use:[{item:'key_r23',win:true,text:'门开了！「气泡实验室」逃脱成功！'}],wrong:'要用钥匙。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台上有密码锁。算对才能拿到“开盒许可”小章：',note:'【算一算】循环小数：最简分数 2/11 写成小数，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r23'],text:'抽屉开了，里面有一枚开盒许可小章（拿上它，再去开钥匙盒）。'},bad:'密码不对哦，再算一算。'}},
    {text:'抽屉空了。许可章你已经拿着。'}
  ]},
  {id:'box',name:'钥匙盒',box:[200,160,70,50],views:[
    {if:['!desk_open'],text:'钥匙盒旁边贴着纸条：“请先到桌子取得开盒许可。”盒子暂时打不开。'},
    {if:['desk_open','!box_open'],text:'许可章生效了，钥匙盒可以开锁：',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','尽']],answer:'尽',prompt:'转到正确的字',ok:{set:['box_open'],text:'钥匙盒开了！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_key'],text:'盒子里有一把钥匙。',take:{give:['key_r23'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'钥匙盒空了。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'公式板上用粉笔抄着同一道题（和抽屉纸条一样），方便你对照。角落写着假密码 0000。',note:'【算一算】循环小数：最简分数 2/11 写成小数，把循环节按顺序连起来是多少？'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'架子夹层里有一把生锈的假钥匙，插不进门。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开实验台拿许可章。','看纸条或黑板上的算式。','把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。']},
  {until:'box_open',obj:'box',tiers:['钥匙盒是古诗转盘。','《赋得古原草送别》。','回忆原句。']},
  {until:'took_key',obj:'box',tiers:['拿起钥匙。','点钥匙盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['去开门。','选中钥匙点实验室门。','先点钥匙再点门。']}
 ],
 explain:['2/11=0.1818…，循环节连起来是 18。','《赋得古原草送别》：野火烧不尽，春风吹又生。，缺「尽」。','用钥匙打开实验室门。'],
 solution:[['code','desk','18'],['code','box','尽'],['take','box'],['use','door','key_r23']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=R(10,220,380,10,'#a0b8c8',2);
  s+=g('window',R(18,18,96,74,'#d4f1f9',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,14,160,94,'#ecf5ff',6,' stroke="#2980b9" stroke-width="5"')+T(208,45,14,'⚗️')+T(208,72,11,'实验步骤',' fill="#1a5276"')+T(208,92,9,'H2O · O2',' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#aeb6bf',6,SK)+(f.desk_open?R(40,160,70,34,'#d5dbdb',4):C(88,180,5,'#5b4636'))+T(96,220,10,'实验台',' fill="#5b4636"')+T(150,175,16,'🔬'));
  s+=g('box',R(180,158,76,54,'#58d68d',6,SK)+(f.box_open?R(190,166,56,38,'#d5f5e3',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#85929e',6,SK)+T(330,70,18,'🧪')+T(330,110,18,'💊')+T(330,145,16,'🌡️'));
  s+=g('door',R(304,150,72,124,'#5dade2',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🔬')+T(350,275,20,'🧬');
  return s;}
};
var r24={id:'r24',title:'果果超市',emoji:'🛒',sub:'第三章 · 三锁挑战',
 story:['第三章 · 夜色逃脱「果果超市」','夜色降临，最后的密室亮起幽幽的灯。','最难的一间「果果超市」！出口有字母锁，钥匙却藏在书架暗格；暗格又要先开柜台。','数学、语文、英语三道锁环环相扣——观察每个角落再动手。'],
 objects:[
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'出口上有字母密码锁：',note:'【英语题】Stay away from _____! (trees)\n（线索：Typhoon 单元安全提示，复数名词，5 个字母，首字母 T；外面的大树。）',lock:{kind:'alpha',len:5,answer:'TREES',prompt:'输入英文大写',ok:{set:['door_code'],text:'字母锁开了！还需要钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先解开门上的字母锁。'},
    {text:'字母锁已开，钥匙孔亮着。',use:[{item:'key_r24',win:true,text:'三锁全开！「果果超市」逃脱成功！'}],wrong:'还差钥匙。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台锁着，纸条写着：',note:'【算一算】小路长 48 米。从头到尾，每隔 6 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r24'],text:'抽屉开了，里面有一张“书架暗格启动卡”。'},bad:'密码不对哦，再算一算。'}},
    {text:'启动卡已取走。去开书架吧。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {if:['!desk_open'],text:'货架有一个暗格，但机关没启动。先去开柜台。'},
    {if:['desk_open','!shelf_open'],text:'暗格亮起转盘：',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','不','天']],answer:'天',prompt:'转到正确的字',ok:{set:['shelf_open'],text:'暗格开了，里面有一把钥匙！'},bad:'不对哦，再想想。'}},
    {if:['shelf_open','!took_key'],text:'暗格里有钥匙。',take:{give:['key_r24'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'暗格空了。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'促销牌流程图：抽屉(数学) → 书架(语文) → 门(英语+钥匙)。有人把箭头画反了，别跟错。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {text:'购物篮里只有一张空白便签和一颗糖，不是线索。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开柜台。','算数学题。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'shelf_open',obj:'shelf',tiers:['书架暗格是古诗转盘。','《望庐山瀑布》。','回忆原句。']},
  {until:'took_key',obj:'shelf',tiers:['拿起钥匙。','点货架。','拿起来。']},
  {until:'door_code',obj:'door',tiers:['去开大门字母锁。','Typhoon 单元安全提示，复数名词，5 个字母，首字母 T；外面的大树。','大写拼写。']},
  {until:'escaped',obj:'door',tiers:['字母锁开了，用钥匙。','选中钥匙点出口。','先点钥匙再点门。']}
 ],
 explain:['段数=48÷6=8，棵数=段数+1=9','《望庐山瀑布》：飞流直下三千尺，疑是银河落九天。，缺「天」。','英文门禁：Stay away from _____! (trees) → TREES','三锁齐开，用钥匙出门。'],
 solution:[['code','desk','9'],['code','shelf','天'],['take','shelf'],['code','door','TREES'],['use','door','key_r24']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  for(var i=0;i<5;i++)s+=R(20+i*74,230,60,50,'#f8e0d0',4,' opacity=".5"');
  s+=g('window',R(16,16,100,78,'#cce8ff',8,SK)+T(66,55,14,'OPEN',' fill="#e74c3c" font-weight="700"'));
  s+=g('board',R(130,14,160,92,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(210,45,14,'📢')+T(210,72,12,'特价区',' fill="#c0392b"')+T(210,92,10,'SALE',' fill="#e67e22"'));
  s+=g('desk',R(24,150,130,54,'#e0d0c0',6,SK)+(f.desk_open?R(36,160,70,32,'#fff',4):C(80,178,5,'#5b4636'))+T(90,218,10,'收银台',' fill="#5b4636"')+T(140,175,16,'🧾'));
  s+=g('box',R(175,158,80,54,'#ffb36b',6,SK)+(f.box_open?R(185,166,60,38,'#ffe0b0',3):R(198,174,34,20,'#ffcf4d',3))+T(215,226,10,'购物篮',' fill="#5b4636"'));
  s+=g('shelf',R(270,24,114,130,'#b9793f',6,SK)+R(280,55,94,8,'#8a5428',2)+R(280,95,94,8,'#8a5428',2)+T(327,75,16,'🍪')+T(327,115,16,'🧃'));
  s+=g('door',R(300,155,72,120,'#5dade2',6,SK)+R(308,165,56,50,'#aed6f1',4)+C(354,230,5,'#ffcf4d',SK)+T(330,255,9,'出口',' fill="#1a5276"'));
  s+=T(48,275,22,'🛒')+T(350,275,20,'🛒');
  return s;}
};
var r25={id:'r25',title:'温馨客厅',emoji:'🛋️',sub:'第三章 · 数学+英语',
 story:['第三章 · 夜色逃脱「温馨客厅」','夜色降临，最后的密室亮起幽幽的灯。','目标：打开夜色大门。这间「温馨客厅」的房门有两道机关——先开茶几拿钥匙，再解开门上的字谜锁。','四处看看：黑板、架子上也许藏着干扰信息，别被骗了！'],
 objects:[
  {id:'door',name:'房门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'房门上有一把字谜锁，旁边贴着纸条：',note:'【英语题】【听力·广播】Wear a colourful raincoat so others can see you.\n问：Wear a colourful _____.\n（线索：听广播找穿戴，8 个字母，首字母 R。）',lock:{kind:'alpha',len:8,answer:'RAINCOAT',prompt:'输入英文大写',ok:{set:['door_code'],text:'门上的字锁开了！还差一把钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先把门上的字锁打开。'},
    {text:'字锁已经开了，钥匙孔亮着光。',use:[{item:'key_r25',win:true,text:'钥匙一转——「温馨客厅」逃脱成功！'}],wrong:'要用钥匙才能打开。'}
  ]},
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'茶几抽屉挂着密码锁，纸条被压在玻璃板下：',note:'【算一算】一辆车平均每小时行 60 千米，行了 2.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'150',prompt:'输入密码',ok:{set:['desk_open'],text:'咔哒！抽屉开了，里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'抽屉里有一把钥匙。',take:{give:['key_r25'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'全家福',box:[130,20,150,90],views:[
    {text:'全家福上用粉笔写着：“想出门？先算对抽屉题，再读门上的字！”旁边还画了一串无关的数字 3-1-4，别当成密码。'}
  ]},
  {id:'shelf',name:'电视柜',box:[290,40,90,120],views:[
    {text:'架子上有一本翻旧的练习册，夹着一张废稿：把 2+2 写成了 5——显然是干扰。'}
  ]},
  {id:'box',name:'玩具箱',box:[200,160,70,50],views:[
    {text:'玩具箱是空的，盖子内侧写着：“钥匙不在我这儿。”'}
  ]},
  {id:'window',name:'窗帘',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看茶几玻璃板下的算式。','算出答案就是抽屉密码。','路程 = 速度 × 时间。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点茶几拿起钥匙。','把钥匙拿起来。']},
  {until:'door_code',obj:'door',tiers:['门上还有字母锁，要先读英文线索。','听广播找穿戴，8 个字母，首字母 R。','结合词性、首字母和中文意思方向来猜。']},
  {until:'escaped',obj:'door',tiers:['字锁开了，还要用钥匙。','选中钥匙，再点房门。','先点钥匙，再点门。']}
 ],
 explain:['路程 = 速度 × 时间 = 60 × 2.5 = 150','门上英文：【听力·广播】Wear a colourful raincoat so others can see you.\n问：Wear a colourful _____. → RAINCOAT','用钥匙打开房门，逃脱成功。'],
 solution:[['code','desk','150'],['take','desk'],['code','door','RAINCOAT'],['use','door','key_r25']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="lvW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1df"/><stop offset="1" stop-color="#ffe0c2"/></linearGradient></defs><defs><radialGradient id="lvL" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#ffe7a3"/><stop offset="1" stop-color="#ffe7a3" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#lvW)');
  s+=R(0,228,400,72,'#e7c49a');
  for(var i=0;i<6;i++)s+=P('M0 '+(236+i*10)+'H400','none',' stroke="#e7c89a" stroke-width="1" opacity=".45"');
  s+=C(268,176,78,'url(#lvL)');
  s+=R(248,150,8,78,'#8a5a32')+C(252,142,7,'#fff1c2')+C(252,142,16,'#ffe08a',' opacity=".55"');
  s+=el(200,268,150,22,'#e7b7c4');
  s+=R(78,236,210,28,'#f7d7cc',18,' stroke="#e7b8aa" stroke-width="2"')+R(92,222,150,22,'#ffe8df',14);
  s+=g('window',R(22,28,78,64,'#ffe0c2',4,' stroke="#f3d5c4" stroke-width="6"')+R(22,28,16,64,'#f8c9d4')+R(84,28,16,64,'#f8c9d4')+T(61,108,11,'窗帘',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(132,36,118,70,'#fffaf3',2,' stroke="#e7c4a4" stroke-width="3"')+el(168,62,16,18,'#f3c2b0')+el(196,62,16,18,'#f3c2b0')+C(168,60,3,'#5b4636')+C(196,60,3,'#5b4636')+T(190,92,11,'全家福',' fill="#8a5a48"'));
  s+=g('desk',el(92,172,58,16,'#e7c7a2')+R(40,164,70,14,f.desk_open?'#fff6e0':'#d7b48a',4)+(f.desk_open?'':C(78,170,3,'#8a5a32'))+T(92,198,11,'茶几',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(196,168,62,40,'#e39b6a',10,' stroke="#c47c48" stroke-width="2"')+(f.box_open?R(204,174,46,26,'#ffe6c8',4):R(210,180,28,14,'#f2c14a',3))+T(226,222,11,'玩具箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,78,78,52,'#1c2430',6)+R(308,86,62,28,'#7eb6d6',2)+R(286,128,100,8,'#cbb89a',2)+T(336,156,12,'🪴'));
  s+=g('door',R(300,150,64,128,'#f0d7b8',4,' stroke="#e0c2a0" stroke-width="3"')+C(348,214,4,'#e7b84a')+T(332,292,11,'房门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r26={id:'r26',title:'月亮卧室',emoji:'🛏️',sub:'第三章 · 通行证',
 story:['第三章 · 夜色逃脱「月亮卧室」','夜色降临，最后的密室亮起幽幽的灯。','「月亮卧室」的出口是一台刷卡机。要先拿到卡片和徽章，拼成通行证。','床头柜锁着卡片，收纳篮锁着徽章——两道锁都要开！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'刷卡机嘀嘀响：“请出示通行证。”',use:[{item:'combo_r26',take:['combo_r26'],win:true,text:'嘀——通过！「月亮卧室」逃脱成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜锁着，纸条上有题：',note:'【算一算】一件原价 80 元的外套打 8 折。应付多少元？',lock:{kind:'num',len:2,answer:'64',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有一张卡片。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r26'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'收纳篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'收纳篮上还有第二把锁：',note:'【成语填空】如 ___ 如 诉\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['如','诉','天','了','的','泣']],answer:'泣',prompt:'转到正确的字',ok:{set:['box_open'],text:'盒子开了，里面有一枚徽章！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_tool'],text:'里面有一枚徽章。',take:{give:['tool_r26'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'梦的清单',box:[130,20,150,90],views:[
    {text:'梦的清单写着步骤：①开抽屉拿卡片 ②开盒子拿徽章 ③物品栏组合 ④去刷卡机。旁边涂鸦“密码=1234”是假的！'}
  ]},
  {id:'shelf',name:'衣柜',box:[290,40,90,120],views:[
    {text:'架子上有一张作废的旧卡，磁条已经刮花了，刷不上。'}
  ]},
  {id:'window',name:'小窗',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[{a:'scrap_r26',b:'tool_r26',give:['combo_r26'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开床头柜。','算纸条上的题。','打 8 折就是用原价乘 0.8。']},
  {until:'took_scrap',obj:'desk',tiers:['拿起卡片。','点床头柜。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['盒子上是成语转盘。','看空格前后。','像在哭泣、又像在诉说']},
  {until:'took_tool',obj:'box',tiers:['拿起徽章。','点收纳篮。','拿起来。']},
  {until:'made_combo',tiers:['卡片和徽章可以组合。','物品栏先点一个再点另一个。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证再点刷卡机。','刷卡过关。']}
 ],
 explain:['80 × 0.8 = 64','成语「如泣如诉」缺「泣」。像在哭泣、又像在诉说','组合成通行证，刷卡逃脱。'],
 solution:[['code','desk','64'],['take','desk'],['code','box','泣'],['take','box'],['combine','scrap_r26','tool_r26'],['use','door','combo_r26']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="bdW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2448"/><stop offset="1" stop-color="#3a2a58"/></linearGradient></defs><defs><radialGradient id="bdM" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#fff6c8"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#bdW)');
  s+=C(86,48,36,'url(#bdM)')+C(96,44,22,'#1c2448');
  for(var i=0;i<12;i++)s+=C((i*67+20)%380,(i*23+16)%90,i%3?1:1.6,'#fff',' opacity=".8"');
  s+=R(0,214,400,86,'#2a2444');
  s+=R(60,200,230,78,'#efe4ff',16,' stroke="#d5c4ee" stroke-width="2"')+R(78,188,120,24,'#fff',10)+R(210,190,50,20,'#ffd6e8',8);
  s+=g('window',R(200,22,70,58,'#3a2a58',20,' stroke="#cbb6e8" stroke-width="4"')+T(235,96,11,'小窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(124,118,130,36,'#2a2444',8)+T(188,136,12,'梦的清单',' fill="#f7e6ff"'));
  s+=g('desk',R(24,160,78,46,'#d9c4ea',8,' stroke="#b89ad4" stroke-width="2"')+R(32,168,40,20,f.desk_open?'#fff':'#cbb0e0',4)+(f.desk_open?'':C(58,178,3,'#6a4e88'))+T(62,220,11,'床头柜',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',el(230,176,28,16,'#f2b7cc')+(f.box_open?el(230,176,18,10,'#fff0f6'):'')+T(230,204,11,'收纳篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,36,78,150,'#3a3158',6)+R(310,70,58,6,'#6a5a90')+R(310,110,58,6,'#6a5a90')+T(338,92,14,'👕')+T(338,136,12,'📚'));
  s+=g('door',R(308,148,60,130,'#4a3d68',6)+C(354,214,4,'#ffe08a')+T(338,292,11,'卧室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r27={id:'r27',title:'林荫公园',emoji:'🌳',sub:'第三章 · 助人',
 story:['第三章 · 夜色逃脱「林荫公园」','夜色降临，最后的密室亮起幽幽的灯。','你遇见了小花猫，对方说：“想让我开门，先送礼物——但礼物被锁住了，还要一枚放行章。”','两道锁：长椅里是礼物，野餐篮里是放行章。都拿到才能交任务！'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {if:['!has_stamp'],text:'小花猫抱着手臂：“先拿到放行章，我才收礼物！”'},
    {text:'小花猫点点头：“放行章齐了，把礼物给我吧。”',use:[{item:'gift_r27',take:['gift_r27'],win:true,text:'小花猫收下了！「林荫公园」任务完成，门开了！'}],wrong:'小花猫摇头：“我要的是礼物。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着：',note:'【算一算】笔记本每本 6.5 元，买 2 本；橡皮每块 3.2 元，买 3 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'22.6',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r27'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'野餐篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'野餐篮上贴着“放行章”，要开锁：',note:'【英语题】【Wonderland】What can you find in a first-aid kit? A _____ helps you see in the dark.\n（线索：急救箱拓展，10 个字母，首字母 F；手电筒。）',lock:{kind:'alpha',len:10,answer:'FLASHLIGHT',prompt:'输入英文大写',ok:{set:['box_open'],text:'盒子开了，里面有一枚放行章！'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!has_stamp'],text:'里面有一枚放行章。',take:{give:['tool_r27'],set:['has_stamp'],text:'你拿到了放行章。（可以去找对方啦）'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'游园地图',box:[130,20,150,90],views:[
    {text:'游园地图：任务清单——□ 礼物　□ 放行章　□ 交给小花猫。有人把清单改成“直接喊芝麻开门”，别信。'}
  ]},
  {id:'shelf',name:'售货亭',box:[290,40,90,120],views:[
    {text:'架子上有一张小花猫的照片，背面写着：“没有章，我什么都不收。”'}
  ]},
  {id:'window',name:'大树',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅拿礼物。','算一算纸条上的题。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_gift',obj:'desk',tiers:['拿起礼物。','点长椅。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['先解开野餐篮上的英文锁，拿到通行证印章。','急救箱拓展，10 个字母，首字母 F；手电筒。','拼对大写单词。']},
  {until:'has_stamp',obj:'box',tiers:['拿起放行章。','点野餐篮。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品再点对方。']}
 ],
 explain:['6.5×2+3.2×3=22.6','【Wonderland】What can you find in a first-aid kit? A _____ helps you see in the dark. → FLASHLIGHT','拿到放行章和礼物，交给小花猫。'],
 solution:[['code','desk','22.6'],['take','desk'],['code','box','FLASHLIGHT'],['take','box'],['use','door','gift_r27']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="pkS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ecbff"/><stop offset="1" stop-color="#e7f8c8"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#pkS)');
  s+=R(0,168,400,132,'#3aaa4a');
  s+=C(330,42,22,'#ffe56a')+C(330,42,34,'#ffe56a',' opacity=".25"');
  s+=C(36,118,34,'#1f7a38')+C(70,104,28,'#46b85a')+C(18,128,22,'#2f9a48')+R(40,130,10,70,'#6b4428');
  s+=C(300,96,40,'#176b32')+C(348,110,30,'#2f8f44')+R(326,120,12,70,'#5a3a22');
  s+=P('M70 300 C110 210 150 200 190 168 C230 214 280 230 340 300z','#f3e2b8');
  for(var i=0;i<9;i++)s+=C(16+i*18,250+(i%3)*8,4,i%2?'#ff8fb8':'#ffe14a');
  s+=T(150,140,12,'🐦')+T(250,150,11,'🐦');
  s+=g('window',C(64,150,26,'#2f9a44')+R(58,164,12,40,'#6b4428')+T(64,214,11,'大树',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(128,22,120,52,'#f4ffe4',4,' stroke="#2f7a32" stroke-width="4"')+T(188,48,12,'游园地图',' fill="#14521c"'));
  s+=g('desk',R(28,176,118,8,'#c9a06a',3)+R(36,184,8,22,'#8a5a32')+R(120,184,8,22,'#8a5a32')+R(48,178,70,6,f.desk_open?'#fff1cc':'#e7c48a',2)+T(86,222,11,'长椅',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(196,166,64,36,'#e7b15a',6,' stroke="#c48a2a" stroke-width="2"')+P('M196 166 h64 l-8-12 h-48z','#e25b4a')+(f.box_open?R(206,172,44,20,'#fff6d8',3):'')+T(228,218,11,'野餐篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,48,70,78,'#fff6d4',4,' stroke="#e07a3a" stroke-width="3"')+P('M284 48 h86 l-10-16 h-66z','#e23b3b')+T(326,86,16,'🍦')+T(326,112,12,'🎈'));
  s+=g('door',R(312,150,8,120,'#6b4428')+R(362,150,8,120,'#6b4428')+P('M312 156 Q340 118 370 156','none',' stroke="#2f8a40" stroke-width="8"')+T(340,250,11,'园门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r28={id:'r28',title:'彩虹花园',emoji:'🌷',sub:'第三章 · 动手组装',
 story:['第三章 · 夜色逃脱「彩虹花园」','夜色降临，最后的密室亮起幽幽的灯。','「彩虹花园」要组装一件关键道具才能出门。','材料 A 锁在花坛沿，材料 B 锁在种子盒。拼好后放到组装台上！'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台闪着灯：“放入成品。”',use:[{item:'combo_r28',take:['combo_r28'],win:true,text:'成品就位——「彩虹花园」装置启动，门开了！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿锁着材料 A：',note:'【算一算】循环小数：计算 2÷11，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r28'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'box',name:'种子盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'种子盒锁着材料 B：',note:'【英语题】Bring everything _____. (把东西都收进来)\n（线索：Typhoon 单元，副词，6 个字母，首字母 I；往屋里收。）',lock:{kind:'alpha',len:6,answer:'INSIDE',prompt:'输入英文大写',ok:{set:['box_open'],text:'开了！里面有材料 B。'},bad:'不对哦，再想想英文怎么说。'}},
    {if:['box_open','!took_b'],text:'里面有材料 B。',take:{give:['partB_r28'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'空了。'}
  ]},
  {id:'board',name:'花名牌',box:[130,20,150,90],views:[
    {text:'花名牌图纸：材料 A + 材料 B = 成品 → 放入组装台。角落有人乱写“只需材料 A”，那是陷阱。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'架子上有一颗生锈的螺丝，拧不进去，不是材料。'}
  ]},
  {id:'window',name:'花窗',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[{a:'partA_r28',b:'partB_r28',give:['combo_r28'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开花坛沿。','算数学题。','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']},
  {until:'took_a',obj:'desk',tiers:['拿材料 A。','点开拿起。','拿起来。']},
  {until:'box_open',obj:'box',tiers:['材料 B 在带字母锁的盒子里。','Typhoon 单元，副词，6 个字母，首字母 I；往屋里收。','大写拼写。']},
  {until:'took_b',obj:'box',tiers:['拿材料 B。','点种子盒。','拿起来。']},
  {until:'made_combo',tiers:['两样材料可组合。','物品栏点两个拼。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['2÷11=0.1818…，循环节是 18，有 2 位。','Bring everything _____. (把东西都收进来) → INSIDE','组合成成品，放到组装台。'],
 solution:[['code','desk','2'],['take','desk'],['code','box','INSIDE'],['take','box'],['combine','partA_r28','partB_r28'],['use','door','combo_r28']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="flS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd0e4"/><stop offset="1" stop-color="#fff6ea"/></linearGradient></defs><defs><radialGradient id="flG" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#flS)');
  s+=C(200,40,70,'url(#flG)',' opacity=".55"');
  s+=R(0,150,400,150,'#f3d7c4');
  s+=el(90,230,70,28,'#c98462');
  s+=el(200,250,80,26,'#b87455');
  s+=el(310,228,60,24,'#d09070');
  var cols=['#ff6fa5','#ffd23f','#fff','#ff8a5b','#e86bff','#ff4d6d'];
  for(var i=0;i<22;i++)s+=C(40+(i*37)%250,210+(i*19)%70,i%3?5:7,cols[i%6]);
  for(var k=0;k<8;k++)s+=C(250+(k*16)%120,200+(k*23)%60,4,cols[(k+2)%6]);
  s+=P('M292 280 Q330 90 378 280','none',' stroke="#f2a0c0" stroke-width="10"');
  s+=P('M306 270 Q330 120 362 270','none',' stroke="#7dce6a" stroke-width="3"');
  s+=C(250,196,14,'#b9e6f5',' stroke="#fff" stroke-width="3"');
  s+=g('window',C(62,78,22,'#ffe08a')+C(62,78,8,'#fff')+T(62,118,11,'花窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,28,130,40,'#fff',20,' stroke="#f2a0c4" stroke-width="3"')+T(182,48,12,'今日花名',' fill="#a14d72"'));
  s+=g('desk',R(24,168,100,16,'#d7a07a',8)+(f.desk_open?R(40,160,36,12,'#fff6e0',3):C(70,176,4,'#fff'))+T(74,200,11,'花坛沿',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,164,52,36,'#f6d56a',6,' stroke="#e0b040" stroke-width="2"')+(f.box_open?R(174,170,40,22,'#fff8d8',3):'')+T(194,214,11,'种子盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(250,70,36,90,'#8fbf62',4)+C(268,78,8,'#ff6fa5')+C(268,100,8,'#ffd23f')+C(268,122,8,'#fff')+T(268,168,11,'花架',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M300 200 Q334 130 368 200 V280 H300z','#ffd0e4',' opacity=".35"')+T(334,250,11,'花拱门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=T(40,140,14,'🦋');
  return s;}
};
var r29={id:'r29',title:'石头过河',emoji:'🛶',sub:'第三章 · 双锁逃脱',
 story:['第三章 · 夜色逃脱「石头过河」','夜色降临，最后的密室亮起幽幽的灯。','「石头过河」的渡船需要钥匙，可钥匙锁在木箱里；开盒之前，还得先解开岸边石桌的机关拿到开盒许可章。','黑板上抄着和抽屉一样的算式——先四处观察，再动手！'],
 objects:[
  {id:'door',name:'渡船',box:[310,160,70,120],views:[
    {if:['!took_key'],text:'渡船锁着，钥匙孔空空的。去找钥匙吧。'},
    {text:'你有钥匙了。',use:[{item:'key_r29',win:true,text:'门开了！「石头过河」逃脱成功！'}],wrong:'要用钥匙。'}
  ]},
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'岸边石桌上有密码锁。算对才能拿到“开盒许可”小章：',note:'【算一算】小数四则：0.8 + 1.25 = ?',lock:{kind:'num',len:4,dot:true,answer:'2.05',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r29'],text:'抽屉开了，里面有一枚开盒许可小章（拿上它，再去开钥匙盒）。'},bad:'密码不对哦，再算一算。'}},
    {text:'抽屉空了。许可章你已经拿着。'}
  ]},
  {id:'box',name:'钥匙盒',box:[200,160,70,50],views:[
    {if:['!desk_open'],text:'钥匙盒旁边贴着纸条：“请先到桌子取得开盒许可。”盒子暂时打不开。'},
    {if:['desk_open','!box_open'],text:'许可章生效了，钥匙盒可以开锁：',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],text:'钥匙盒开了！'},bad:'不对哦，再想想。'}},
    {if:['box_open','!took_key'],text:'盒子里有一把钥匙。',take:{give:['key_r29'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'钥匙盒空了。'}
  ]},
  {id:'board',name:'渡口牌',box:[130,20,150,90],views:[
    {text:'渡口牌上用粉笔抄着同一道题（和抽屉纸条一样），方便你对照。角落写着假密码 0000。',note:'【算一算】小数四则：0.8 + 1.25 = ?'}
  ]},
  {id:'shelf',name:'竹排',box:[290,40,90,120],views:[
    {text:'架子夹层里有一把生锈的假钥匙，插不进门。'}
  ]},
  {id:'window',name:'河柳',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开岸边石桌拿许可章。','看纸条或黑板上的算式。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'box_open',obj:'box',tiers:['钥匙盒是古诗转盘。','《早发白帝城》。','回忆原句。']},
  {until:'took_key',obj:'box',tiers:['拿起钥匙。','点钥匙盒。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['去开门。','选中钥匙点渡船。','先点钥匙再点门。']}
 ],
 explain:['0.8 + 1.25 = 2.05。小数点对齐再相加。','《早发白帝城》：两岸猿声啼不住，轻舟已过万重山。，缺「住」。','用钥匙打开渡船。'],
 solution:[['code','desk','2.05'],['code','box','住'],['take','box'],['use','door','key_r29']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="rvS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d8fd4"/><stop offset="1" stop-color="#d7f1ff"/></linearGradient></defs><defs><linearGradient id="rvW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e5f98"/><stop offset="1" stop-color="#7ec8ea"/></linearGradient></defs>';
  s+=R(0,0,400,128,'url(#rvS)');
  s+=P('M0 118 Q80 96 160 114 T320 104 T400 120 V136 H0z','#3e8f46');
  s+=R(0,124,400,112,'url(#rvW)');
  s+=el(200,200,180,16,'#fff',' opacity=".18"');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 160 q20 8 40 0','none',' stroke="#e7f7ff" stroke-width="2" opacity=".55"');
  s+=el(86,156,16,8,'#efe6d4')+el(138,184,18,9,'#d9d0bc')+el(196,158,14,7,'#f7f1e4')+el(250,190,17,8,'#e4d8c4');
  s+=R(0,228,400,72,'#2f8a44');
  for(var k=0;k<7;k++)s+=R(8+k*14,108,3,28,'#1f6b32');
  for(var n=0;n<5;n++)s+=R(300+n*12,112,3,26,'#14532a');
  s+=P('M18 150 C40 40 70 50 78 150','none',' stroke="#1f6b32" stroke-width="3"')+P('M30 150 C48 70 66 74 70 150','none',' stroke="#2f8a40" stroke-width="2"');
  s+=C(48,46,10,'#fff6c2')+el(70,168,18,4,'#fff6c2',' opacity=".35"');
  s+=g('window',P('M40 150 C55 60 90 70 96 148','#246b38')+T(70,168,11,'河柳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(132,24,8,70,'#6b4428')+R(140,30,108,40,'#f6e2b0',2,' stroke="#6b3e1e" stroke-width="3"')+T(194,50,12,'小心过河',' fill="#5b3a1e"'));
  s+=g('desk',el(90,186,52,14,'#d5cbb8')+R(48,178,36,10,f.desk_open?'#fff6e0':'#b7aa96',3)+T(90,214,11,'岸边石桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',P('M196 168 h60 l8 40 h-76z','#c98b52')+(f.box_open?P('M204 176 h44 l4 20 h-52z','#f0d2a4'):'')+T(226,224,11,'木箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,40,6,100,'#d7b07a')+R(324,28,6,112,'#c9a06a')+R(348,48,6,92,'#e2c48a')+T(326,150,11,'竹排',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M304 250 Q340 210 378 250 L370 272 H312z','#f4e2c0')+P('M340 188 v28','none',' stroke="#8a5a32" stroke-width="3"')+P('M320 188 h40','none',' stroke="#f7f1e4" stroke-width="3"')+T(340,236,11,'渡船',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=T(40,250,14,'🦆');
  return s;}
};
var r30={id:'r30',title:'石拱桥头',emoji:'🌉',sub:'第三章 · 三锁挑战',
 story:['第三章 · 夜色逃脱「石拱桥头」','夜色降临，最后的密室亮起幽幽的灯。','最难的一间「石拱桥头」！桥门有字母锁，钥匙却藏在书架暗格；暗格又要先开桥头石凳。','数学、语文、英语三道锁环环相扣——观察每个角落再动手。'],
 objects:[
  {id:'door',name:'桥门',box:[310,160,70,120],views:[
    {if:['!door_code'],text:'桥门上有字母密码锁：',note:'【英语题】【听力·广播】Also, turn off your lights and TV.\n问：Turn off your _____ and TV.\n（线索：听广播找要关掉的东西，6 个字母，首字母 L。）',lock:{kind:'alpha',len:6,answer:'LIGHTS',prompt:'输入英文大写',ok:{set:['door_code'],text:'字母锁开了！还需要钥匙。'},bad:'不对哦，再想想英文怎么说。'},wrong:'先解开门上的字母锁。'},
    {text:'字母锁已开，钥匙孔亮着。',use:[{item:'key_r30',win:true,text:'三锁全开！「石拱桥头」逃脱成功！'}],wrong:'还差钥匙。'}
  ]},
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳锁着，纸条写着：',note:'【算一算】长方形花坛长 10 米、宽 6 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],give:['scrap_r30'],text:'抽屉开了，里面有一张“书架暗格启动卡”。'},bad:'密码不对哦，再算一算。'}},
    {text:'启动卡已取走。去开书架吧。'}
  ]},
  {id:'shelf',name:'灯笼架',box:[290,40,90,120],views:[
    {if:['!desk_open'],text:'灯笼架有一个暗格，但机关没启动。先去开桥头石凳。'},
    {if:['desk_open','!shelf_open'],text:'暗格亮起转盘：',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','不','天']],answer:'天',prompt:'转到正确的字',ok:{set:['shelf_open'],text:'暗格开了，里面有一把钥匙！'},bad:'不对哦，再想想。'}},
    {if:['shelf_open','!took_key'],text:'暗格里有钥匙。',take:{give:['key_r30'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'暗格空了。'}
  ]},
  {id:'board',name:'桥名牌',box:[130,20,150,90],views:[
    {text:'桥名牌流程图：抽屉(数学) → 书架(语文) → 门(英语+钥匙)。有人把箭头画反了，别跟错。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'竹篮里只有一张空白便签和一颗糖，不是线索。'}
  ]},
  {id:'window',name:'桥柳',box:[24,24,90,70],views:[
    {text:'窗外夜色沉沉，远处有几盏灯一闪一闪，像在倒数。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桥头石凳。','算数学题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'shelf_open',obj:'shelf',tiers:['书架暗格是古诗转盘。','《绝句》。','回忆原句。']},
  {until:'took_key',obj:'shelf',tiers:['拿起钥匙。','点灯笼架。','拿起来。']},
  {until:'door_code',obj:'door',tiers:['去开大门字母锁。','听广播找要关掉的东西，6 个字母，首字母 L。','大写拼写。']},
  {until:'escaped',obj:'door',tiers:['字母锁开了，用钥匙。','选中钥匙点桥门。','先点钥匙再点门。']}
 ],
 explain:['外围 (10+2)×(6+2) 减去花坛 10×6 = 36','《绝句》：两个黄鹂鸣翠柳，一行白鹭上青天。，缺「天」。','英文门禁：【听力·广播】Also, turn off your lights and TV.\n问：Turn off your _____ and TV. → LIGHTS','三锁齐开，用钥匙出门。'],
 solution:[['code','desk','36'],['code','shelf','天'],['take','shelf'],['code','door','LIGHTS'],['use','door','key_r30']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="brS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ec7ea"/><stop offset="1" stop-color="#e7eef4"/></linearGradient></defs><defs><linearGradient id="brW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d88b8"/><stop offset="1" stop-color="#8ec4de"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#brS)');
  s+=R(0,176,400,124,'url(#brW)');
  s+=P('M10 230 Q100 70 200 230 Q300 70 400 230 V268 H10z','#c8c2b6');
  s+=P('M10 230 Q100 120 200 230 Q300 120 400 230','none',' stroke="#8d887c" stroke-width="8"');
  for(var i=0;i<9;i++)s+=R(28+i*40,150,6,36,'#efe8dc');
  s+=R(24,168,10,70,'#6e675c')+R(360,168,10,70,'#6e675c')+C(29,164,5,'#ffb84a')+C(365,164,5,'#ffb84a');
  s+=g('window',P('M20 150 C40 80 90 90 100 150','#3e8f55')+T(60,168,11,'桥柳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(140,24,110,36,'#f4efe6',2,' stroke="#6e675c" stroke-width="4"')+T(194,42,13,'石拱桥',' fill="#3a3834"'));
  s+=g('desk',R(30,168,100,18,'#b7b1a6',4)+R(40,172,40,8,f.desk_open?'#fff6e0':'#8d887c',2)+T(80,204,11,'桥头石凳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(180,164,60,40,'#a67c52',3)+(f.box_open?R(186,170,48,24,'#f3ddb8',2):'')+T(210,220,11,'竹篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,36,8,80,'#6e675c')+C(304,32,8,'#e23b3b')+R(330,50,8,70,'#6e675c')+C(334,46,8,'#f2c14a')+T(340,140,11,'灯笼',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(300,156,70,90,'#8d7b68',4)+P('M300 156 l35-24 35 24','#5c5148')+T(334,230,11,'桥门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var EXTRA=[r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/