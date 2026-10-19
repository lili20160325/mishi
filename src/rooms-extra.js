/*ROOMS-EXTRA-START*/
(function(G){
'use strict';
function R(x,y,w,h,f,rx,ex){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"'+(rx?' rx="'+rx+'"':'')+(ex||'')+'/>';}
function T(x,y,s,ch,ex){return '<text x="'+x+'" y="'+y+'" font-size="'+s+'" text-anchor="middle" dominant-baseline="central"'+(ex||'')+'>'+ch+'</text>';}
function P(d,f,ex){return '<path d="'+d+'" fill="'+f+'"'+(ex||'')+'/>';}
function C(x,y,r,f,ex){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(ex||'')+'/>';}
var SK=' stroke="#5b4636" stroke-width="2.5" stroke-linejoin="round"';
function g(id,inner){return '<g class="obj" data-obj="'+id+'">'+inner+'</g>';}
var ITEMS=G.PZ_ITEMS;
ITEMS['key_r6']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r8']={name:'点心',icon:'🧁',desc:'给机器人小厨的点心。'};
ITEMS['partA_r9']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r9']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r9']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r11']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r11']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r11']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r14']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r16']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r17']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r17']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r17']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r19']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r19']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r19']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r22']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r24']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r25']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r25']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r25']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r27']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r27']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r27']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r30']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r32']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r33']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r33']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r33']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r35']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r35']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r35']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r38']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r40']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r41']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r41']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r41']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r43']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r43']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r43']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r46']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r48']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r49']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r49']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r49']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r51']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r51']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r51']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r54']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r56']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r57']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r57']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r57']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r59']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r59']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r59']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r62']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r64']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r65']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r65']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r65']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r67']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r67']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r67']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r70']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r72']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r73']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r73']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r73']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r75']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r75']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r75']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r78']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r80']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r81']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r81']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r81']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r83']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r83']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r83']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r86']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r88']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r89']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r89']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r89']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r91']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r91']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r91']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
ITEMS['key_r94']={name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'};
ITEMS['gift_r96']={name:'礼物',icon:'🎁',desc:'给小花猫的礼物。'};
ITEMS['partA_r97']={name:'材料A',icon:'🧩',desc:'一块材料。'};
ITEMS['partB_r97']={name:'材料B',icon:'🔧',desc:'另一块材料。'};
ITEMS['combo_r97']={name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'};
ITEMS['scrap_r99']={name:'卡片',icon:'💳',desc:'一张小小的卡片。'};
ITEMS['tool_r99']={name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'};
ITEMS['combo_r99']={name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'};
var r6={id:'r6',title:'阳光书房',emoji:'📚',sub:'数学 · 挑战',
 story:['小黄走进了书房，门在身后轻轻关上。','书桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'门',box:[310,160,70,120],views:[
    {text:'门锁着，需要钥匙。',use:[{item:'key_r6',win:true,text:'钥匙一转，门开了！「阳光书房」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌上有密码锁，旁边贴着纸条：',note:'【算一算】笔记本每本 4.5 元，买 3 本；橡皮每块 2.8 元，买 2 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'19.1',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r6'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着一些小物件。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'小盒是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看书桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点书桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点门。','先点钥匙，再点目标。']}
 ],
 explain:['4.5×3+2.8×2=19.1','打开抽屉拿到钥匙。','用钥匙打开门，挑战成功。'],
 solution:[['code','desk','19.1'],['take','desk'],['use','door','key_r6']],
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
var r7={id:'r7',title:'快乐教室',emoji:'🏫',sub:'数学 · 闯关',
 story:['欢迎来到「快乐教室」挑战站！','讲台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上的挑战题：',note:'【算一算】循环小数：计算 1÷3，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'1',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「快乐教室」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有奖杯模型。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开讲台上的题。','仔细看【算一算】，多步时先算哪一步？','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']}
 ],
 explain:['1÷3=0.3333…，循环节是 3，有 1 位。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','1']],
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
var r8={id:'r8',title:'香香厨房',emoji:'🍳',sub:'数学 · 助人',
 story:['你走进厨房，遇见了机器人小厨。','机器人小厨说：“帮我拿到点心，任务就完成啦！”','先解开桌子上的题，再把点心交给机器人小厨。'],
 objects:[
  {id:'door',name:'机器人小厨',box:[310,150,70,120],views:[
    {text:'机器人小厨眨眨眼：“我想要点心！”',use:[{item:'gift_r8',take:['gift_r8'],win:true,text:'机器人小厨开心地收下了！「香香厨房」任务完成！'}],wrong:'机器人小厨摇摇头：“我要的是点心哦。”'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子抽屉锁着，纸条上有题：',note:'【算一算】小数四则：3.75 + 0.6 = ?',lock:{kind:'num',len:4,dot:true,answer:'4.35',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份点心！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份点心。',take:{give:['gift_r8'],set:['took_gift'],text:'你拿到了点心。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'菜谱板上写着：送给机器人小厨就过关。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上摆着🤖的照片。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开桌子的密码。','看纸条上的题，可能要算两步。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'took_gift',obj:'desk',tiers:['把点心拿起来。','点桌子拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把点心交给机器人小厨。','选中点心，再点机器人小厨。','先点物品，再点对方。']}
 ],
 explain:['3.75 + 0.6 = 4.35。小数点对齐再相加。','拿到点心。','交给机器人小厨，任务完成。'],
 solution:[['code','desk','4.35'],['take','desk'],['use','door','gift_r8']],
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
var r9={id:'r9',title:'绿茵操场',emoji:'⚽',sub:'数学 · 益智',
 story:['「绿茵操场」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r9',take:['combo_r9'],win:true,text:'放上去——成功！「绿茵操场」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】长方形花坛长 12 米、宽 8 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'44',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r9'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'球架上有材料 B。',take:{give:['partB_r9'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板：材料 A + 材料 B = 成品。顺便一题：一口咬掉牛尾巴（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[{a:'partA_r9',b:'partB_r9',give:['combo_r9'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看球架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['外围 (12+2)×(8+2) 减去花坛 12×8 = 44','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','44'],['take','desk'],['take','shelf'],['combine','partA_r9','partB_r9'],['use','door','combo_r9']],
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
var r10={id:'r10',title:'蝴蝶公园',emoji:'🎠',sub:'数学 · 英语',
 story:['双锁挑战站「蝴蝶公园」！','先过石凳，再过花箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：计算 1÷3，把循环节按顺序连起来是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花箱上还有第二关：',note:'【英语题】How do you learn new words? I like to learn words in _____.\n（线索：Unit 1，复数名词，6 个字母，首字母 C；指“成组的语块”。）',lock:{kind:'alpha',len:6,answer:'CHUNKS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「蝴蝶公园」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上放着完成印章模型。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，复数名词，6 个字母，首字母 C；指“成组的语块”。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['1÷3=0.3333…。循环节连起来是 3。','How do you learn new words? I like to learn words in _____. → CHUNKS','两关都对，挑战成功。'],
 solution:[['code','desk','3'],['code','box','CHUNKS']],
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
var r11={id:'r11',title:'静静图书馆',emoji:'📖',sub:'数学 · 通行证',
 story:['「静静图书馆」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r11',take:['combo_r11'],win:true,text:'嘀——通过！「静静图书馆」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌锁着：',note:'【算一算】小数四则：8.4 − 2.75 = ?',lock:{kind:'num',len:4,dot:true,answer:'5.65',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r11'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'书架上有一枚徽章。',take:{give:['tool_r11'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[{a:'scrap_r11',b:'tool_r11',give:['combo_r11'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算题，注意多步运算。','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['8.4 − 2.75 = 5.65。小数点对齐，位数少的补 0。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','5.65'],['take','desk'],['take','shelf'],['combine','scrap_r11','tool_r11'],['use','door','combo_r11']],
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
var r12={id:'r12',title:'星星屋',emoji:'🔭',sub:'语文 · 古诗',
 story:['古诗转盘挑战「星星屋」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《春晓》　唐·孟浩然\n春眠不 ___ 晓，处处闻啼鸟。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','觉']],answer:'觉',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「星星屋」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'墙上写着《春晓》（唐·孟浩然），少了一个字：',note:'《春晓》　唐·孟浩然\n春眠不 ___ 晓，处处闻啼鸟。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {text:'观测台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'观星门',box:[310,160,70,120],views:[
    {text:'观星门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'星图架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《春晓》，唐·孟浩然。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《春晓》：春眠不觉晓，处处闻啼鸟。','缺的字是「觉」。','转对转盘，挑战成功。'],
 solution:[['code','box','觉']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(308,150,72,124,'#8e7cc3',6,SK)+C(362,215,5,'#ffd34d',SK));
  s+=T(50,270,22,'🔭')+T(350,270,20,'🚀');
  return s;}
};
var r13={id:'r13',title:'奇妙实验室',emoji:'🔬',sub:'英语 · 拼写',
 story:['英语拼写站「奇妙实验室」！','小黄看到英文卡片：“用大写字母拼出来！”','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】What is a _____? A group of words that go together. (语块)\n（线索：Unit 1，单数名词，5 个字母，首字母 C；“一小组常一起出现的词”。）',lock:{kind:'alpha',len:5,answer:'CHUNK',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「奇妙实验室」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'实验室门',box:[310,160,70,120],views:[
    {text:'实验室门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'器材架上有英语单词卡片。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，单数名词，5 个字母，首字母 C；“一小组常一起出现的词”。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：What is a _____? A group of words that go together. (语块)','正确答案是 CHUNK。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','CHUNK']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=R(10,220,380,10,'#a0b8c8',2);
  s+=g('window',R(18,18,96,74,'#d4f1f9',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,14,160,94,'#ecf5ff',6,' stroke="#2980b9" stroke-width="5"')+T(208,45,14,'⚗️')+T(208,72,11,'实验步骤',' fill="#1a5276"')+T(208,92,9,'H2O · O2',' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#aeb6bf',6,SK)+(f.desk_open?R(40,160,70,34,'#d5dbdb',4):C(88,180,5,'#5b4636'))+T(96,220,10,'实验台',' fill="#5b4636"')+T(150,175,16,'🔬'));
  s+=g('box',R(180,158,76,54,'#58d68d',6,SK)+(f.box_open?R(190,166,56,38,'#d5f5e3',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#85929e',6,SK)+T(330,70,18,'🧪')+T(330,110,18,'💊')+T(330,145,16,'🌡️'));
  s+=g('door',R(300,150,72,124,'#5dade2',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🔬')+T(350,275,20,'🧬');
  return s;}
};
var r14={id:'r14',title:'糖果超市',emoji:'🛒',sub:'数学 · 挑战',
 story:['你来到了超市。','柜台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开出口，挑战就成功啦！'],
 objects:[
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {text:'出口锁着，需要钥匙。',use:[{item:'key_r14',win:true,text:'钥匙一转，出口开了！「糖果超市」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台上有密码锁，旁边贴着纸条：',note:'【算一算】长方形桌面长 1.2 米、宽 0.8 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:2,answer:'96',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r14'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'促销牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {text:'货架上摆着一些小物件。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {text:'购物篮是空的。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看柜台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先把米换成分米，再相乘。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点柜台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点出口。','先点钥匙，再点目标。']}
 ],
 explain:['先换成 12 分米 × 8 分米 = 96 平方分米','打开抽屉拿到钥匙。','用钥匙打开出口，挑战成功。'],
 solution:[['code','desk','96'],['take','desk'],['use','door','key_r14']],
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
var r15={id:'r15',title:'小火车站',emoji:'🚂',sub:'数学 · 闯关',
 story:['欢迎来到「小火车站」挑战站！','检票台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台上的挑战题：',note:'【算一算】循环小数：0.3333…（循环节是 3）化成最简分数，分母是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「小火车站」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'时刻表上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'行李架上有奖杯模型。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开检票台上的题。','仔细看【算一算】，多步时先算哪一步？','纯循环小数：循环几位，分母就是几个 9。一位用 9，两位用 99，写好再约分，约完的分母才是答案。']}
 ],
 explain:['0.3333… 的循环节是 3，写成 3/9，约分得 1/3，分母是 3。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','3']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=R(0,250,400,8,'#555')+R(0,268,400,4,'#555');
  for(var i=0;i<12;i++)s+=R(10+i*33,250,16,8,'#fff',' opacity=".7"');
  s+=g('window',R(16,16,100,78,'#b0c4de',8,SK)+T(66,55,18,'🚂'));
  s+=g('board',R(128,12,170,96,'#1a1a2e',6,' stroke="#4d8bff" stroke-width="5"')+T(213,40,11,'时刻表',' fill="#7CFC00"')+T(213,62,9,'G123  09:30',' fill="#7CFC00"')+T(213,82,9,'D456  10:15',' fill="#7CFC00"'));
  s+=g('desk',R(28,148,128,54,'#c0c8d0',6,SK)+(f.desk_open?R(40,158,70,32,'#e8eef4',4):C(84,176,5,'#5b4636'))+T(92,216,10,'检票台',' fill="#5b4636"'));
  s+=g('box',R(175,158,78,54,'#8e44ad',6,SK)+(f.box_open?R(185,166,58,38,'#d7bde2',3):R(198,174,34,20,'#ffcf4d',3))+T(214,228,10,'行李箱',' fill="#5b4636"'));
  s+=g('shelf',R(275,28,108,120,'#7f8c9d',6,SK)+T(329,80,22,'🎒')+T(329,120,18,'🧳'));
  s+=g('door',R(308,150,72,124,'#34495e',6,SK)+R(318,162,52,40,'#5d6d7e',4)+C(362,220,5,'#ffcf4d',SK)+T(338,255,9,'站台',' fill="#ecf0f1"'));
  s+=T(48,285,22,'🚂')+T(350,285,20,'🎫');
  return s;}
};
var r16={id:'r16',title:'彩虹美术室',emoji:'🎨',sub:'数学 · 助人',
 story:['你走进美术室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开画桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r16',take:['gift_r16'],win:true,text:'小花猫开心地收下了！「彩虹美术室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌抽屉锁着，纸条上有题：',note:'【算一算】小数四则：2.4 × 0.15 = ?',lock:{kind:'num',len:4,dot:true,answer:'0.36',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r16'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'画板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'画架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'颜料盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开画桌的密码。','看纸条上的题，可能要算两步。','先按整数相乘，再点小数点：两个因数一共有几位小数，积就有几位小数。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点画桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['2.4 × 0.15 = 0.36。先按整数乘，再点上小数点。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','0.36'],['take','desk'],['use','door','gift_r16']],
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
var r17={id:'r17',title:'叮咚音乐室',emoji:'🎵',sub:'数学 · 益智',
 story:['「叮咚音乐室」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r17',take:['combo_r17'],win:true,text:'放上去——成功！「叮咚音乐室」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌锁着：',note:'【算一算】解方程：3x − 24 = 2x + 18\n求 x。',lock:{kind:'num',len:2,answer:'42',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r17'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'乐谱架上有材料 B。',take:{give:['partB_r17'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'乐谱板：材料 A + 材料 B = 成品。顺便一题：田里长草（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[{a:'partA_r17',b:'partB_r17',give:['combo_r17'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开琴凳旁小桌。','算纸条上的题。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看乐谱架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['移项合并：(3-2)x = 24+18 → x = 42','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','42'],['take','desk'],['take','shelf'],['combine','partA_r17','partB_r17'],['use','door','combo_r17']],
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
var r18={id:'r18',title:'秘密小花园',emoji:'🌷',sub:'数学 · 英语',
 story:['双锁挑战站「秘密小花园」！','先过石凳，再过花箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：下面哪个算式的商是循环小数？① 1÷2 ② 3÷4 ③ 1÷3 ④ 2÷5。填序号。',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花箱上还有第二关：',note:'【英语题】_____ = 担心\n（线索：Unit 1，动词/名词，5 个字母，首字母 W；心里不安、怕出事。）',lock:{kind:'alpha',len:5,answer:'WORRY',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「秘密小花园」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上放着完成印章模型。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，动词/名词，5 个字母，首字母 W；心里不安、怕出事。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['① 1÷2=0.5 有限小数，② 3÷4=0.75 有限小数，③ 1÷3=0.3333… 循环小数，④ 2÷5=0.4 有限小数。所以填 3。','_____ = 担心 → WORRY','两关都对，挑战成功。'],
 solution:[['code','desk','3'],['code','box','WORRY']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,160,400,140,'#90d080');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(304,160,70,120,'#8b6914',6,SK)+P('M304 160l35-20 35 20','#6aaa5a',SK)+C(358,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🌷')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r19={id:'r19',title:'活力体育馆',emoji:'🏀',sub:'数学 · 通行证',
 story:['「活力体育馆」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r19',take:['combo_r19'],win:true,text:'嘀——通过！「活力体育馆」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】小数四则：6.3 ÷ 0.3 = ?',lock:{kind:'num',len:2,answer:'21',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r19'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'球架上有一枚徽章。',take:{give:['tool_r19'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[{a:'scrap_r19',b:'tool_r19',give:['combo_r19'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算题，注意多步运算。','除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看球架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['6.3 ÷ 0.3 = 21。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','21'],['take','desk'],['take','shelf'],['combine','scrap_r19','tool_r19'],['use','door','combo_r19']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,200,400,100,'#e8c878');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(300,155,72,120,'#c98b52',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏀')+T(350,275,20,'🏆');
  return s;}
};
var r20={id:'r20',title:'智慧电脑室',emoji:'💻',sub:'语文 · 古诗',
 story:['古诗转盘挑战「智慧电脑室」！','小黄想起课文里读过《静夜思》。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','光']],answer:'光',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「智慧电脑室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'墙上写着《静夜思》（唐·李白），少了一个字：',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {text:'电脑桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'机房门',box:[310,160,70,120],views:[
    {text:'机房门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {text:'主机架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《静夜思》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《静夜思》：床前明月光，疑是地上霜。','缺的字是「光」。','转对转盘，挑战成功。'],
 solution:[['code','box','光']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(18,18,96,74,'#d6eaf8',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#1c2833',6,' stroke="#3498db" stroke-width="5"')+T(208,45,14,'💻')+T(208,72,11,'CODE LAB',' fill="#58d68d"')+T(208,92,9,'hello()', ' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#5d6d7e',6,SK)+(f.desk_open?R(40,160,70,34,'#aeb6bf',4):C(88,180,5,'#58d68d'))+T(96,220,10,'电脑桌',' fill="#5b4636"')+R(100,155,50,28,'#2c3e50',3)+R(105,160,40,18,'#3498db',2));
  s+=g('box',R(180,158,76,54,'#3498db',6,SK)+(f.box_open?R(190,166,56,38,'#aed6f1',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#34495e',6,SK)+T(330,70,18,'⌨️')+T(330,110,18,'🖱️')+T(330,145,16,'💾'));
  s+=g('door',R(308,150,72,124,'#2c3e50',6,SK)+C(362,215,5,'#58d68d',SK));
  s+=T(48,275,22,'💻')+T(350,275,20,'🖥️');
  return s;}
};
var r21={id:'r21',title:'月亮书房',emoji:'📚',sub:'英语 · 拼写',
 story:['英语拼写站「月亮书房」！','书桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Please _____ the sentences. (读)\n（线索：Unit 1，动词，4 个字母，首字母 R；用眼睛看文字出声或默读。）',lock:{kind:'alpha',len:4,answer:'READ',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「月亮书房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'门',box:[310,160,70,120],views:[
    {text:'门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有英语单词卡片。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，动词，4 个字母，首字母 R；用眼睛看文字出声或默读。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Please _____ the sentences. (读)','正确答案是 READ。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','READ']],
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
var r22={id:'r22',title:'星星教室',emoji:'🏫',sub:'数学 · 挑战',
 story:['你来到了教室。','讲台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开教室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门锁着，需要钥匙。',use:[{item:'key_r22',win:true,text:'钥匙一转，教室门开了！「星星教室」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上有密码锁，旁边贴着纸条：',note:'【算一算】一桶油重 18.6 千克，用去 5.8 千克后又倒入 3.5 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'16.3',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r22'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着一些小物件。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'作业盒是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看讲台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先减去用去的，再加上倒入的。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点讲台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点教室门。','先点钥匙，再点目标。']}
 ],
 explain:['18.6 − 5.8 + 3.5 = 16.3','打开抽屉拿到钥匙。','用钥匙打开教室门，挑战成功。'],
 solution:[['code','desk','16.3'],['take','desk'],['use','door','key_r22']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(18,18,96,74,'#bfe8ff',8,SK)+C(90,40,10,'#fff2a8')+R(28,60,30,24,'#7ccf6c',3));
  s+=g('board',R(128,12,170,100,'#1e8449',6,' stroke="#a86b38" stroke-width="6"')+T(213,45,12,'黑板',' fill="#fff"')+T(213,70,10,'认真审题',' fill="#d5f5e3"')+T(213,92,9,'1+1=?',' fill="#a9dfbf"'));
  s+=g('desk',R(28,150,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,160,70,34,'#d9a26c',4):C(88,180,5,'#5b4636'))+T(96,220,10,'讲台',' fill="#5b4636"')+T(145,168,14,'📚'));
  s+=g('box',R(180,158,76,54,'#f5b041',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗'));
  s+=g('door',R(300,150,72,124,'#8fb6e8',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏫')+T(350,275,20,'✏️');
  return s;}
};
var r23={id:'r23',title:'甜甜厨房',emoji:'🍳',sub:'数学 · 闯关',
 story:['欢迎来到「甜甜厨房」挑战站！','桌子上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子上的挑战题：',note:'【算一算】循环小数：0.1818…（循环节是 18）化成最简分数，分子是多少？',lock:{kind:'num',len:1,answer:'2',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「甜甜厨房」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'菜谱板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上有奖杯模型。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开桌子上的题。','仔细看【算一算】，多步时先算哪一步？','先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。']}
 ],
 explain:['0.1818… 写成 18/99，约分得 2/11，分子是 2。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','2']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  for(var i=0;i<8;i++)for(var j=0;j<2;j++)s+=R(i*50+(j%2)*25,214+j*43,25,43,'#b6dbe6',0,' opacity=".45"');
  s+=g('window',R(18,18,100,78,'#bfe8ff',8,SK)+C(96,40,11,'#fff2a8')+R(28,70,36,20,'#ffd6a5',3));
  s+=g('board',R(130,16,160,96,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(210,48,14,'📋')+T(210,78,11,'今日菜谱',' fill="#5b4636"')+T(210,96,9,'step by step',' fill="#888"'));
  s+=g('desk',R(24,148,140,58,'#e8c9a0',6,SK)+R(36,156,56,32,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(88,174,5,'#5b4636'))+T(90,218,10,'操作台',' fill="#5b4636"')+T(150,170,16,'🔪'));
  s+=g('box',R(178,158,78,54,'#ff9f68',6,SK)+(f.box_open?R(188,166,58,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3))+T(216,220,10,'食材',' fill="#5b4636"'));
  s+=g('shelf',R(270,22,110,118,'#c98b52',6,SK)+R(280,50,90,8,'#8a5428',2)+R(280,86,90,8,'#8a5428',2)+T(325,70,18,'🥣')+T(325,110,18,'🧂'));
  s+=g('door',R(308,148,72,128,'#ffd6a5',6,SK)+C(362,210,5,'#ffcf4d',SK)+R(318,160,40,36,'#fff',4)+T(338,250,9,'灶台旁',' fill="#5b4636"'));
  s+=T(50,268,22,'🍳')+T(360,268,20,'🍳')+T(200,268,16,'🥖');
  return s;}
};
var r24={id:'r24',title:'风筝操场',emoji:'⚽',sub:'数学 · 助人',
 story:['你走进操场，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r24',take:['gift_r24'],win:true,text:'小花猫开心地收下了！「风筝操场」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】小数四则：12.6 + 0.45 − 3.05 = ?',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r24'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['12.6 + 0.45 − 3.05 = 10。先加再减。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','10'],['take','desk'],['use','door','gift_r24']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,200,400,100,'#9ee07a');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(304,155,72,120,'#c98b52',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'⚽')+T(350,275,20,'🏆');
  return s;}
};
var r25={id:'r25',title:'蜗牛公园',emoji:'🎠',sub:'数学 · 益智',
 story:['「蜗牛公园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r25',take:['combo_r25'],win:true,text:'放上去——成功！「蜗牛公园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】梯形：上底 6.5 分米，下底 9.5 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'32',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r25'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'花架上有材料 B。',take:{give:['partB_r25'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌：材料 A + 材料 B = 成品。顺便一题：两人一起走（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[{a:'partA_r25',b:'partB_r25',give:['combo_r25'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['（6.5+9.5）×4÷2 = 32','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','32'],['take','desk'],['take','shelf'],['combine','partA_r25','partB_r25'],['use','door','combo_r25']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,160,400,140,'#8fd99a');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(300,160,70,120,'#8b6914',6,SK)+P('M300 160l35-20 35 20','#6aaa5a',SK)+C(354,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🎠')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r26={id:'r26',title:'书香角',emoji:'📖',sub:'数学 · 英语',
 story:['双锁挑战站「书香角」！','先过阅览桌，再过还书箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：计算 1÷6，从小数点后第几位开始循环？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'还书箱上还有第二关：',note:'【英语题】Be careful! Don\'t let the book _____. (落下)\n（线索：Unit 1，动词，4 个字母，首字母 F；从上往下掉。）',lock:{kind:'alpha',len:4,answer:'FALL',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「书香角」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'馆门',box:[310,160,70,120],views:[
    {text:'馆门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，动词，4 个字母，首字母 F；从上往下掉。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['1÷6=0.1666…，从小数点后第 2 位开始循环。','Be careful! Don\'t let the book _____. (落下) → FALL','两关都对，挑战成功。'],
 solution:[['code','desk','2'],['code','box','FALL']],
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
var r27={id:'r27',title:'流星台',emoji:'🔭',sub:'数学 · 通行证',
 story:['「流星台」要刷通行证才能完成任务。','小黄：“卡片和徽章拼起来，去刷卡机刷一下！”','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r27',take:['combo_r27'],win:true,text:'嘀——通过！「流星台」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】一块三角形彩纸底 8 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r27'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'星图架上有一枚徽章。',take:{give:['tool_r27'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[{a:'scrap_r27',b:'tool_r27',give:['combo_r27'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算题，注意多步运算。','先求一块三角形面积，再乘 2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看星图架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['一块 = 8×6÷2 = 24，两块 = 48','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','48'],['take','desk'],['take','shelf'],['combine','scrap_r27','tool_r27'],['use','door','combo_r27']],
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
var r28={id:'r28',title:'气泡实验室',emoji:'🔬',sub:'语文 · 古诗',
 story:['古诗转盘挑战「气泡实验室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《登鹳雀楼》　唐·王之涣\n欲穷千里 ___，更上一层楼。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','目']],answer:'目',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「气泡实验室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'墙上写着《登鹳雀楼》（唐·王之涣），少了一个字：',note:'《登鹳雀楼》　唐·王之涣\n欲穷千里 ___，更上一层楼。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {text:'实验台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'实验室门',box:[310,160,70,120],views:[
    {text:'实验室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'器材架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《登鹳雀楼》，唐·王之涣。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《登鹳雀楼》：欲穷千里目，更上一层楼。','缺的字是「目」。','转对转盘，挑战成功。'],
 solution:[['code','box','目']],
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
var r29={id:'r29',title:'果果超市',emoji:'🛒',sub:'英语 · 拼写',
 story:['英语拼写站「果果超市」！','柜台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Don\'t speak too _____. (大声的)\n（线索：Unit 1，形容词，4 个字母，首字母 L；声音很大。）',lock:{kind:'alpha',len:4,answer:'LOUD',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「果果超市」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {text:'出口开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {text:'货架上有英语单词卡片。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，形容词，4 个字母，首字母 L；声音很大。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Don\'t speak too _____. (大声的)','正确答案是 LOUD。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','LOUD']],
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
var r30={id:'r30',title:'温馨客厅',emoji:'🛋️',sub:'数学 · 挑战',
 story:['你来到了温馨客厅。','茶几上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开房门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'房门',box:[310,160,70,120],views:[
    {text:'房门锁着，需要钥匙。',use:[{item:'key_r30',win:true,text:'钥匙一转，房门开了！「温馨客厅」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'茶几上有密码锁，旁边贴着纸条：',note:'【算一算】循环小数：最简分数 2/11 写成小数，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r30'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'全家福',box:[130,20,150,90],views:[
    {text:'全家福上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'电视柜',box:[290,40,90,120],views:[
    {text:'电视柜上摆着一些小物件。'}
  ]},
  {id:'box',name:'玩具箱',box:[200,160,70,50],views:[
    {text:'玩具箱是空的。'}
  ]},
  {id:'window',name:'窗帘',box:[24,24,90,70],views:[
    {text:'沙发软软的，台灯亮着暖光。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看茶几上的纸条。','纸条上有一道数学题，算出答案就是密码。','把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点茶几，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点房门。','先点钥匙，再点目标。']}
 ],
 explain:['2/11=0.1818…，循环节连起来是 18。','打开抽屉拿到钥匙。','用钥匙打开房门，挑战成功。'],
 solution:[['code','desk','18'],['take','desk'],['use','door','key_r30']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#ffe6c9')+R(0,214,400,86,'#e4c49a');
  s+=P('M40 286c40-36 120-36 160 0s120 28 160 0v14H40z','#e7a0a8',' opacity=".9"');
  s+=R(118,232,150,28,'#f4c7b8',16,SK)+R(126,220,134,22,'#ffe1d6',12,SK);
  s+=R(250,196,16,70,'#c98b52',4)+C(258,188,10,'#ffe08a',' opacity=".9"')+C(258,188,22,'#ffe08a',' opacity=".25"');
  s+=g('window',R(22,24,96,74,'#cfe9ff',6,SK)+R(22,24,18,74,'#f7d0d8')+R(100,24,18,74,'#f7d0d8')+P('M70 24v74M22 60h96','none',' stroke="#fff" stroke-width="2" opacity=".7"')+T(70,108,11,'窗帘',' fill="#3e3428"'));
  s+=g('board',R(132,18,150,86,'#fffaf2',6,' stroke="#d9a07a" stroke-width="5"')+R(148,32,52,40,'#f6d2b8',4)+C(166,48,8,'#f3b6a0')+C(184,50,8,'#f3b6a0')+T(206,86,12,'全家福',' fill="#5b4636"'));
  s+=g('desk',R(28,150,128,36,'#e7c39a',8,SK)+R(40,158,64,16,f.desk_open?'#fff6e0':'#d7b088',4)+(f.desk_open?T(72,168,12,'🍪'):C(96,166,4,'#5b4636'))+T(92,202,11,'茶几',' fill="#3e3428"')+T(140,168,14,'🍵'));
  s+=g('box',R(188,162,76,50,'#f0a06a',8,SK)+(f.box_open?R(196,170,60,34,'#ffe6c8',3):R(206,176,40,20,'#ffcf4d',3))+T(226,226,11,'玩具箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,28,100,118,'#d7c2a4',6,SK)+R(296,78,80,46,'#243044',4)+R(302,84,68,28,'#7ec8ff',2)+T(336,70,16,'📺')+T(336,132,14,'🪴'));
  s+=g('door',R(300,156,72,124,'#e7c9a2',6,SK)+C(354,214,5,'#ffcf4d',SK)+R(318,170,36,28,'#c9e7ff',3)+T(336,250,11,'房门',' fill="#3e3428"'));
  s+=T(36,270,20,'🛋️');
  return s;}
};
var r31={id:'r31',title:'月亮卧室',emoji:'🛏️',sub:'数学 · 闯关',
 story:['欢迎来到「月亮卧室」挑战站！','床头柜上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜上的挑战题：',note:'【算一算】小路长 48 米。从头到尾，每隔 6 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'9',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「月亮卧室」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'卧室门',box:[310,160,70,120],views:[
    {text:'卧室门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'梦的清单',box:[130,20,150,90],views:[
    {text:'梦的清单上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'衣柜',box:[290,40,90,120],views:[
    {text:'衣柜上有奖杯模型。'}
  ]},
  {id:'box',name:'收纳篮',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'小窗',box:[24,24,90,70],views:[
    {text:'枕头鼓鼓的，故事书摊在床上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开床头柜上的题。','仔细看【算一算】，多步时先算哪一步？','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']}
 ],
 explain:['段数=48÷6=8，棵数=段数+1=9','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','9']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f6e9ff')+R(0,200,400,100,'#e7d4f2');
  s+=R(70,214,210,64,'#f7f1ff',10,SK)+R(78,206,150,22,'#ffe9f3',8,SK)+R(86,198,36,16,'#fff',6)+R(130,198,36,16,'#fff',6);
  s+=R(250,168,10,90,'#c9b8a0')+C(255,160,9,'#ffe08a')+C(255,160,18,'#ffe08a',' opacity=".3"');
  s+=g('window',R(22,22,96,74,'#d9e6ff',8,SK)+C(78,52,12,'#fff6c8')+C(84,48,9,'#d9e6ff')+T(70,108,11,'小窗',' fill="#3e3428"'));
  s+=g('board',R(132,16,148,88,'#fff5fb',6,' stroke="#e7b6d4" stroke-width="5"')+T(206,48,16,'🌙')+T(206,76,12,'梦的清单',' fill="#7a4e6a"'));
  s+=g('desk',R(28,150,120,46,'#e6d3ef',6,SK)+R(40,158,52,24,f.desk_open?'#fff':'#d7c0ea',4)+(f.desk_open?'':C(78,170,4,'#5b4636'))+T(88,210,11,'床头柜',' fill="#3e3428"')+T(128,168,14,'🧸'));
  s+=g('box',R(188,160,74,50,'#f2b5c8',6,SK)+(f.box_open?R(196,168,58,34,'#ffe4ee',3):R(206,176,36,18,'#ffcf4d',3))+T(224,224,11,'收纳篮',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,126,'#cbb6e6',6,SK)+R(296,48,80,8,'#a88bc4',2)+R(296,88,80,8,'#a88bc4',2)+T(336,70,16,'👕')+T(336,112,16,'📚'));
  s+=g('door',R(308,156,72,124,'#d7c4ef',6,SK)+C(362,216,5,'#ffd34d',SK)+T(344,118,14,'⭐')+T(344,248,11,'卧室门',' fill="#3e3428"'));
  s+=T(40,276,18,'🛏️')+T(200,276,16,'🧦');
  return s;}
};
var r32={id:'r32',title:'林荫公园',emoji:'🌳',sub:'数学 · 助人',
 story:['你走进林荫公园，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r32',take:['gift_r32'],win:true,text:'小花猫开心地收下了！「林荫公园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】一辆车平均每小时行 60 千米，行了 2.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'150',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r32'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'游园地图',box:[130,20,150,90],views:[
    {text:'游园地图上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'售货亭',box:[290,40,90,120],views:[
    {text:'售货亭上摆着🐱的照片。'}
  ]},
  {id:'box',name:'野餐篮',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'大树',box:[24,24,90,70],views:[
    {text:'鸽子在小路边散步，风吹得树叶沙沙响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','路程 = 速度 × 时间。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['路程 = 速度 × 时间 = 60 × 2.5 = 150','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','150'],['take','desk'],['use','door','gift_r32']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#c9f2ff')+R(0,168,400,132,'#8fd99a');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  s+=P('M-10 250C80 210 140 250 210 220S320 250 410 214V300H-10z','#c9e7b0',' opacity=".55"');
  s+=P('M150 300C170 230 190 210 210 168C230 214 250 236 270 300z','#e7d7b0');
  s+=C(46,150,28,'#3e9a4a')+R(40,168,12,48,'#8a5a32')+C(340,120,26,'#2f8a40')+R(334,140,12,40,'#8a5a32');
  s+=T(24,196,16,'🌸')+T(250,188,14,'🌼')+T(120,250,14,'🐦');
  s+=g('window',R(18,78,90,70,'#b7e39a',8,SK)+T(63,112,22,'🌳')+T(63,156,11,'大树',' fill="#243024"'));
  s+=g('board',R(130,18,156,84,'#f4fbe8',6,' stroke="#5f8f3a" stroke-width="5"')+T(208,48,16,'🗺️')+T(208,76,12,'游园地图',' fill="#2d5a1e"'));
  s+=g('desk',R(28,168,124,28,'#a67c52',6,SK)+R(24,160,132,14,'#c49a62',6,SK)+(f.desk_open?R(70,172,40,16,'#e7c99a',3):C(90,182,4,'#5b4636'))+T(90,214,11,'长椅',' fill="#243024"'));
  s+=g('box',R(188,164,76,48,'#e7b15a',6,SK)+(f.box_open?R(196,172,60,32,'#fff1cc',3):R(206,178,36,18,'#ffcf4d',3))+T(226,226,11,'野餐篮',' fill="#243024"'));
  s+=g('shelf',R(292,36,92,110,'#f0d78c',6,SK)+P('M292 36h92l-10-16h-72z','#e25b4a')+T(338,90,18,'🍦')+T(338,124,14,'🎈'));
  s+=g('door',R(304,150,74,128,'#8d6a3f',6,SK)+R(312,162,26,100,'#6aaa3a',4)+R(344,162,26,100,'#6aaa3a',4)+C(358,214,5,'#ffcf4d',SK)+T(340,292,11,'园门',' fill="#243024"'));
  s+=T(40,276,20,'🌳');
  return s;}
};
var r33={id:'r33',title:'彩虹花园',emoji:'🌷',sub:'数学 · 益智',
 story:['「彩虹花园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r33',take:['combo_r33'],win:true,text:'放上去——成功！「彩虹花园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿锁着：',note:'【算一算】一件原价 80 元的外套打 8 折。应付多少元？',lock:{kind:'num',len:2,answer:'64',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r33'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'花架上有材料 B。',take:{give:['partB_r33'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'花名牌',box:[130,20,150,90],views:[
    {text:'花名牌：材料 A + 材料 B = 成品。顺便一题：十张口（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'种子盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'花窗',box:[24,24,90,70],views:[
    {text:'蜜蜂在花心里嗡嗡，花瓣上还有露水。'}
  ]}
 ],
 combos:[{a:'partA_r33',b:'partB_r33',give:['combo_r33'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开花坛沿。','算纸条上的题。','打 8 折就是用原价乘 0.8。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['80 × 0.8 = 64','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','64'],['take','desk'],['take','shelf'],['combine','partA_r33','partB_r33'],['use','door','combo_r33']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#e7f8ff')+R(0,150,400,150,'#b7e39a');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  for(var i=0;i<5;i++)s+=R(18+i*36,232,30,42,'#6b3e28',4);
  s+=T(30,228,16,'🌷')+T(70,224,16,'🌻')+T(110,230,16,'🌹')+T(150,222,16,'🌼')+T(190,228,14,'🌺');
  s+=C(250,210,16,'#8fd4f2',' stroke="#5b4636" stroke-width="2"')+R(246,226,8,20,'#9aa7b2');
  s+=g('window',R(20,22,92,72,'#d9f5c8',8,SK)+T(66,58,22,'🐝')+T(66,104,11,'花窗',' fill="#243024"'));
  s+=g('board',R(128,16,158,86,'#fffdf4',6,' stroke="#7dae52" stroke-width="5"')+T(206,46,14,'🏷️')+T(206,74,12,'今日花名',' fill="#2d5a1e"'));
  s+=g('desk',R(28,156,126,40,'#c48b62',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#a96b42',4)+(f.desk_open?'':C(92,174,4,'#fff'))+T(90,212,11,'花坛沿',' fill="#243024"'));
  s+=g('box',R(186,160,78,50,'#f0d36a',6,SK)+(f.box_open?R(194,168,62,34,'#fff6d0',3):R(204,174,40,18,'#e7b84a',3))+T(224,224,11,'种子盒',' fill="#243024"'));
  s+=g('shelf',R(286,30,98,116,'#8fbf62',6,SK)+T(336,70,18,'🌷')+T(336,108,18,'🪴')+T(336,140,14,'🎀'));
  s+=g('door',P('M300 168 Q336 120 372 168V280H300z','#f2a3c0',SK)+R(330,200,12,40,'#fff',0,' opacity=".45"')+T(336,250,11,'花拱门',' fill="#243024"'));
  s+=T(360,270,18,'🦋');
  return s;}
};
var r34={id:'r34',title:'石头过河',emoji:'🛶',sub:'数学 · 英语',
 story:['双锁挑战站「石头过河」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】笔记本每本 6.5 元，买 2 本；橡皮每块 3.2 元，买 3 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'22.6',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'木箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'木箱上还有第二关：',note:'【英语题】Is there _____ in the box? (任何东西)\n（线索：Unit 1，代词，8 个字母，首字母 A；疑问/否定句里表示“任何事物”。）',lock:{kind:'alpha',len:8,answer:'ANYTHING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「石头过河」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'渡船',box:[310,160,70,120],views:[
    {text:'渡船只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'渡口牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'竹排',box:[290,40,90,120],views:[
    {text:'竹排上放着完成印章模型。'}
  ]},
  {id:'window',name:'河柳',box:[24,24,90,70],views:[
    {text:'河水哗哗响，石头一颗颗露在水面上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先算笔记本总价，再加橡皮总价。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，代词，8 个字母，首字母 A；疑问/否定句里表示“任何事物”。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['6.5×2+3.2×3=22.6','Is there _____ in the box? (任何东西) → ANYTHING','两关都对，挑战成功。'],
 solution:[['code','desk','22.6'],['code','box','ANYTHING']],
 art:function(f){var s='';
  s+=R(0,0,400,118,'#b9e6ff')+R(0,118,400,28,'#7dce6a')+R(0,146,400,78,'#3d9ad6')+R(0,220,400,80,'#8fd36a');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  for(var i=0;i<7;i++)s+=P('M'+(i*58)+' 168 q16 8 32 0 t32 0','none',' stroke="#e9f7ff" stroke-width="2" opacity=".7"');
  s+=C(78,176,12,'#e4d8c4',SK)+C(124,196,14,'#d9cdb8',SK)+C(172,174,11,'#efe4d2',SK)+C(220,198,13,'#d5c8b0',SK);
  s+=T(28,132,18,'🌿')+T(250,128,16,'🌿')+T(36,268,16,'🦆');
  s+=g('window',R(18,28,90,70,'#9ed98a',8,SK)+P('M36 96 C50 30 90 30 96 90','#2f8f45')+T(64,108,11,'河柳',' fill="#1e3a32"'));
  s+=g('board',R(128,16,156,80,'#f6e7c4',6,' stroke="#8a5a2b" stroke-width="5"')+T(206,44,16,'🛶')+T(206,72,12,'小心过河',' fill="#5b4636"'));
  s+=g('desk',R(26,168,124,36,'#cfc6b6',10,SK)+R(40,176,60,18,f.desk_open?'#fff6e0':'#b7b0a2',4)+(f.desk_open?'':C(86,186,4,'#5b4636'))+T(88,220,11,'岸边石桌',' fill="#1e3a32"'));
  s+=g('box',R(186,164,76,48,'#c98b52',4,SK)+(f.box_open?R(194,172,60,32,'#f0d2a4',3):R(204,178,36,16,'#e2b56a',3))+T(224,226,11,'木箱',' fill="#1e3a32"'));
  s+=g('shelf',R(292,30,92,108,'#6aaa3a',3)+R(304,40,8,90,'#d7b07a')+R(330,34,8,98,'#d7b07a')+R(356,44,8,82,'#d7b07a')+T(334,78,16,'🎋'));
  s+=g('door',P('M310 250 Q340 200 374 250','#e8d7b0')+R(312,188,60,62,'#f4e2c0',8,SK)+T(342,214,20,'⛵')+T(342,258,11,'渡船',' fill="#1e3a32"'));
  s+=T(360,276,16,'🐟');
  return s;}
};
var r35={id:'r35',title:'石拱桥头',emoji:'🌉',sub:'数学 · 通行证',
 story:['「石拱桥头」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r35',take:['combo_r35'],win:true,text:'嘀——通过！「石拱桥头」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳锁着：',note:'【算一算】循环小数：计算 2÷11，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r35'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'灯笼架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'灯笼架上有一枚徽章。',take:{give:['tool_r35'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'桥名牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'桥柳',box:[24,24,90,70],views:[
    {text:'桥洞下面水声轻轻的，栏杆摸上去凉凉的。'}
  ]}
 ],
 combos:[{a:'scrap_r35',b:'tool_r35',give:['combo_r35'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桥头石凳。','算题，注意多步运算。','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看灯笼架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['2÷11=0.1818…，循环节是 18，有 2 位。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','2'],['take','desk'],['take','shelf'],['combine','scrap_r35','tool_r35'],['use','door','combo_r35']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#cfeaff')+R(0,168,400,50,'#4aa3e0')+R(0,214,400,86,'#d5e6c8');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  s+=P('M20 214 Q120 120 200 214 Q280 120 390 214','#d7d0c4')+P('M20 214 Q120 150 200 214 Q280 150 390 214V250H20z','#c3b8a4',SK);
  s+=R(30,150,10,64,'#8d6b45')+R(360,150,10,64,'#8d6b45')+C(35,146,6,'#ffb84a')+C(365,146,6,'#ffb84a');
  for(var i=0;i<6;i++)s+=R(70+i*42,158,4,28,'#efe6d4');
  s+=g('window',R(18,22,88,64,'#bfe6c8',8,SK)+T(62,54,20,'🌿')+T(62,98,11,'桥柳',' fill="#243044"'));
  s+=g('board',R(128,14,150,78,'#fff8e4',6,' stroke="#8a5a2b" stroke-width="5"')+T(203,42,14,'🌉')+T(203,68,12,'石拱桥',' fill="#5b4636"'));
  s+=g('desk',R(28,156,120,36,'#d2c6b2',8,SK)+R(40,164,56,16,f.desk_open?'#fff6e0':'#b7aa96',4)+(f.desk_open?'':C(84,172,4,'#5b4636'))+T(88,208,11,'桥头石凳',' fill="#243044"'));
  s+=g('box',R(186,160,74,48,'#c98b52',4,SK)+(f.box_open?R(194,168,58,32,'#f3ddb8',3):R(204,174,34,16,'#e2b56a',3))+T(222,222,11,'竹篮',' fill="#243044"'));
  s+=g('shelf',R(292,28,90,100,'#e7d7b8',6,SK)+T(336,70,18,'🏮')+T(336,110,16,'🎐'));
  s+=g('door',R(300,156,72,120,'#b08968',6,SK)+P('M300 156l36-22 36 22','#8d6a43')+C(354,214,5,'#ffcf4d',SK)+T(336,250,11,'桥门',' fill="#243044"'));
  return s;}
};
var r36={id:'r36',title:'阳光教室',emoji:'🏫',sub:'语文 · 古诗',
 story:['古诗转盘挑战「阳光教室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','辛']],answer:'辛',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「阳光教室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《悯农》（唐·李绅），少了一个字：',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {text:'讲台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗',box:[24,24,90,70],views:[
    {text:'黑板上还有没擦掉的算式，粉笔灰轻轻飘。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《悯农》，唐·李绅。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《悯农》：谁知盘中餐，粒粒皆辛苦。','缺的字是「辛」。','转对转盘，挑战成功。'],
 solution:[['code','box','辛']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e7f4ff')+R(0,214,400,86,'#f0e2c4');
  for(var i=0;i<7;i++)s+=R(i*58,250,48,28,'#f4e2c4',4,' stroke="#d7c09a" stroke-width="1"');
  s+=R(18,214,364,8,'#e7d3a8');
  s+=g('window',R(16,18,100,78,'#cfe9ff',6,SK)+P('M66 18v78M16 56h100','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'窗',' fill="#3e3428"'));
  s+=g('board',R(126,12,168,104,'#1e8449',4,' stroke="#a86b38" stroke-width="6"')+T(210,42,13,'今天的课',' fill="#fff"')+T(210,66,12,'认真审题',' fill="#d5f5e3"')+T(210,90,11,'1.2 × 0.5',' fill="#abebc6"'));
  s+=g('desk',R(24,150,132,52,'#c98b52',6,SK)+R(36,160,78,28,f.desk_open?'#f6e0c0':'#a86b38',4)+(f.desk_open?T(74,176,12,'📘'):C(100,174,4,'#fff'))+T(90,216,11,'讲台',' fill="#3e3428"')+T(140,166,14,'✏️'));
  s+=g('box',R(186,160,76,50,'#f5c16a',6,SK)+(f.box_open?R(194,168,60,34,'#fff3d6',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'作业盒',' fill="#3e3428"'));
  s+=g('shelf',R(286,22,100,132,'#b9793f',6,SK)+R(296,52,80,8,'#8a5428',2)+R(296,92,80,8,'#8a5428',2)+T(336,74,14,'📕')+T(336,114,14,'🌍'));
  s+=g('door',R(308,150,72,126,'#8fb6e8',6,SK)+R(318,162,52,36,'#d6ebff',4)+C(362,220,5,'#ffcf4d',SK)+T(344,252,11,'教室门',' fill="#3e3428"'));
  s+=T(48,276,18,'🏫');
  return s;}
};
var r37={id:'r37',title:'校园走廊',emoji:'🏫',sub:'英语 · 拼写',
 story:['英语拼写站「校园走廊」！','休息椅上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'休息椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'休息椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】There are a _____ new words on the card. (几个)\n（线索：Unit 1，a ___ = 几个，3 个字母，首字母 F。）',lock:{kind:'alpha',len:3,answer:'FEW',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「校园走廊」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'布告栏',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'楼梯口',box:[310,160,70,120],views:[
    {text:'楼梯口开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'储物柜',box:[290,40,90,120],views:[
    {text:'储物柜上有英语单词卡片。'}
  ]},
  {id:'box',name:'失物箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'走廊窗',box:[24,24,90,70],views:[
    {text:'地砖被踩得发亮，布告栏上别满了纸条。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，a ___ = 几个，3 个字母，首字母 F。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：There are a _____ new words on the card. (几个)','正确答案是 FEW。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','FEW']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f4f0e6');
  for(var i=0;i<8;i++)s+=R(0,214+i*11,400,11,i%2?'#e7dcc8':'#e7dcc8');
  s+=P('M120 214 L200 120 L280 214','none',' stroke="#fff" stroke-width="8" opacity=".25"');
  s+=g('window',R(18,20,96,74,'#d5e8f8',6,SK)+P('M66 20v74M18 56h96','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'走廊窗',' fill="#3e3428"'));
  s+=g('board',R(126,16,160,96,'#fffdf6',4,' stroke="#c98b52" stroke-width="6"')+T(206,46,14,'📌')+T(206,72,12,'失物招领',' fill="#5b4636"')+T(206,94,10,'看看告示',' fill="#888"'));
  s+=g('desk',R(28,156,128,40,'#d8c4a4',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#c8b090',4)+(f.desk_open?'':C(96,174,4,'#5b4636'))+T(92,212,11,'休息椅',' fill="#3e3428"'));
  s+=g('box',R(186,160,76,50,'#e39b4a',6,SK)+(f.box_open?R(194,168,60,34,'#ffe6c2',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'失物箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,124,'#6f8fbe',6,SK)+R(296,40,24,48,'#f4f7fb',3)+R(324,40,24,48,'#f4f7fb',3)+R(352,40,24,48,'#f4f7fb',3)+T(336,112,16,'🎒'));
  s+=g('door',R(300,150,72,126,'#d98a3a',6,SK)+R(312,164,48,40,'#f8e2c0',4)+C(354,220,5,'#5b4636',SK)+T(336,252,11,'楼梯口',' fill="#3e3428"'));
  s+=T(40,276,18,'🪴');
  return s;}
};
var r38={id:'r38',title:'森林小路',emoji:'🌲',sub:'数学 · 挑战',
 story:['你来到了森林小路。','树桩上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开小木屋，挑战就成功啦！'],
 objects:[
  {id:'door',name:'小木屋',box:[310,160,70,120],views:[
    {text:'小木屋锁着，需要钥匙。',use:[{item:'key_r38',win:true,text:'钥匙一转，小木屋开了！「森林小路」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'树桩',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树桩上有密码锁，旁边贴着纸条：',note:'【算一算】小数四则：0.8 + 1.25 = ?',lock:{kind:'num',len:4,dot:true,answer:'2.05',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r38'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'指路牌',box:[130,20,150,90],views:[
    {text:'指路牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {text:'木柴堆上摆着一些小物件。'}
  ]},
  {id:'box',name:'小木箱',box:[200,160,70,50],views:[
    {text:'小木箱是空的。'}
  ]},
  {id:'window',name:'树洞',box:[24,24,90,70],views:[
    {text:'阳光从叶子缝里漏下来，蘑菇一圈一圈。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看树桩上的纸条。','纸条上有一道数学题，算出答案就是密码。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点树桩，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点小木屋。','先点钥匙，再点目标。']}
 ],
 explain:['0.8 + 1.25 = 2.05。小数点对齐再相加。','打开抽屉拿到钥匙。','用钥匙打开小木屋，挑战成功。'],
 solution:[['code','desk','2.05'],['take','desk'],['use','door','key_r38']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#cfe8c8')+R(0,0,400,70,'#1e4d32',0,' opacity=".35"');
  s+=R(0,210,400,90,'#6aaa4a');
  s+=P('M180 300 C200 200 210 160 220 120 C230 170 250 220 270 300z','#c8ad84');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  s+=R(8,40,18,180,'#6b442c')+R(360,30,22,190,'#6b442c')+C(18,36,26,'#1f6b3a')+C(372,28,30,'#1f6b3a');
  s+=C(40,248,8,'#e25b4a')+C(70,260,6,'#f0d36a')+C(250,252,7,'#e8e0d0');
  s+=g('window',R(24,70,80,70,'#2f8f45',8,SK)+T(64,104,20,'🌲')+T(64,150,11,'树洞',' fill="#1e2e1e"'));
  s+=g('board',R(128,20,150,82,'#e7d3a4',6,' stroke="#6b442c" stroke-width="5"')+T(203,50,14,'🪵')+T(203,76,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',C(90,176,34,'#a67c52',SK)+R(40,168,50,22,f.desk_open?'#e7c8a0':'#8a5a32',4)+(f.desk_open?'':C(78,178,4,'#fff'))+T(90,214,11,'树桩',' fill="#1e2e1e"'));
  s+=g('box',R(186,160,74,50,'#b8894a',6,SK)+(f.box_open?R(194,168,58,34,'#f0ddb4',3):R(204,174,36,18,'#e2b56a',3))+T(222,224,11,'小木箱',' fill="#1e2e1e"'));
  s+=g('shelf',R(292,36,90,110,'#8a5a32',4,SK)+R(300,50,16,80,'#6b442c')+R(330,44,16,90,'#6b442c')+R(356,56,16,74,'#6b442c')+T(336,100,14,'🍄'));
  s+=g('door',R(300,150,74,126,'#c49a62',6,SK)+P('M300 150l37-28 37 28','#8d4a3a')+R(322,176,30,28,'#f6e2a8',3)+C(354,220,5,'#ffcf4d',SK)+T(336,252,11,'小木屋',' fill="#1e2e1e"'));
  return s;}
};
var r39={id:'r39',title:'贝壳沙滩',emoji:'🏖️',sub:'数学 · 闯关',
 story:['欢迎来到「贝壳沙滩」挑战站！','沙桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'沙桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'沙桌上的挑战题：',note:'【算一算】长方形花坛长 10 米、宽 6 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「贝壳沙滩」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'沙滩屋',box:[310,160,70,120],views:[
    {text:'沙滩屋开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'沙滩牌',box:[130,20,150,90],views:[
    {text:'沙滩牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'救生圈架',box:[290,40,90,120],views:[
    {text:'救生圈架上有奖杯模型。'}
  ]},
  {id:'box',name:'冷藏箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'椰树',box:[24,24,90,70],views:[
    {text:'浪花一排排走上来，沙子里藏着小贝壳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开沙桌上的题。','仔细看【算一算】，多步时先算哪一步？','先算“花坛+小路”的大长方形，再减去花坛本身。']}
 ],
 explain:['外围 (10+2)×(6+2) 减去花坛 10×6 = 36','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','36']],
 art:function(f){var s='';
  s+=R(0,0,400,132,'#c9f2ff')+R(0,132,400,52,'#3aa0d8')+R(0,184,400,116,'#f6e2b0');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 150 q20 10 40 0 t40 0','none',' stroke="#e7f7ff" stroke-width="3" opacity=".75"');
  s+=C(40,230,4,'#fff')+C(90,250,3,'#ffe08a')+C(150,236,4,'#f7c6c6')+C(240,258,3,'#fff')+T(48,268,14,'🐚');
  s+=P('M300 210 l30-40 30 40z','#ff8f8f',' opacity=".9"')+R(328,210,4,30,'#c98b52');
  s+=g('window',R(16,24,88,70,'#ffe08a',8,' opacity=".3"')+T(60,58,22,'🌴')+T(60,104,11,'椰树',' fill="#5a4630"'));
  s+=g('board',R(124,16,156,80,'#fff8e6',6,' stroke="#e07a4a" stroke-width="5"')+T(202,46,14,'⛱️')+T(202,72,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',R(28,168,120,28,'#e7c99a',10,SK)+(f.desk_open?R(50,172,40,16,'#fff6e0',3):C(88,182,4,'#c98b52'))+T(88,214,11,'沙桌',' fill="#5a4630"'));
  s+=g('box',R(186,160,74,48,'#5dade2',6,SK)+(f.box_open?R(194,168,58,32,'#eaf6ff',3):R(204,174,36,16,'#ffcf4d',3))+T(222,222,11,'冷藏箱',' fill="#5a4630"'));
  s+=g('shelf',R(300,40,78,100,'#f2c14a',6,SK)+R(312,36,8,70,'#c98b52')+T(338,78,18,'🛟')+T(338,118,14,'🩱'));
  s+=g('door',R(308,156,72,100,'#f6e2b8',6,SK)+P('M308 156l36-20 36 20','#e07a4a')+T(344,200,18,'🏠')+T(344,246,11,'沙滩屋',' fill="#5a4630"'));
  s+=T(250,120,16,'🕊️');
  return s;}
};
var r40={id:'r40',title:'田野农庄',emoji:'🚜',sub:'数学 · 助人',
 story:['你走进田野农庄，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开木桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r40',take:['gift_r40'],win:true,text:'小花猫开心地收下了！「田野农庄」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'木桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木桌抽屉锁着，纸条上有题：',note:'【算一算】循环小数：计算 2÷11，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r40'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'丰收牌',box:[130,20,150,90],views:[
    {text:'丰收牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'蔬果架',box:[290,40,90,120],views:[
    {text:'蔬果架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'田边',box:[24,24,90,70],views:[
    {text:'田垄绿绿的，稻草人举着手。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开木桌的密码。','看纸条上的题，可能要算两步。','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点木桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['2÷11=0.1818…。循环节连起来是 18。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','18'],['take','desk'],['use','door','gift_r40']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#d7f3ff')+R(0,150,400,150,'#c6e08a');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  for(var i=0;i<8;i++)s+=R(0,168+i*16,400,8,i%2?'#8fbf4a':'#7aaa3a',0,' opacity=".55"');
  s+=R(250,120,8,70,'#6b442c')+C(254,112,10,'#f2c14a')+R(236,128,36,8,'#6b442c')+T(254,108,12,'🌾');
  s+=g('window',R(16,22,90,70,'#d9f2b0',8,SK)+T(61,56,20,'🚜')+T(61,102,11,'田边',' fill="#3e3420"'));
  s+=g('board',R(124,16,156,80,'#fff8e0',6,' stroke="#8a5a2b" stroke-width="5"')+T(202,46,14,'🌽')+T(202,72,12,'丰收告示',' fill="#5b4636"'));
  s+=g('desk',R(24,156,126,42,'#c98b52',6,SK)+R(36,164,70,22,f.desk_open?'#fff1d0':'#a86b38',4)+(f.desk_open?'':C(90,176,4,'#fff'))+T(86,214,11,'木桌',' fill="#3e3420"')+T(132,170,14,'🥛'));
  s+=g('box',R(184,160,76,50,'#e0a15a',6,SK)+(f.box_open?R(192,168,60,34,'#f8e2c0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'菜筐',' fill="#3e3420"'));
  s+=g('shelf',R(286,28,96,118,'#b7d47a',4,' stroke="#5f8f3a" stroke-width="3"')+T(334,70,18,'🥕')+T(334,108,18,'🍅')+T(334,140,14,'🥚'));
  s+=g('door',R(304,148,78,128,'#c0392b',6,SK)+P('M304 148l39-26 39 26','#922b21')+R(330,190,26,50,'#f6e2b0',3)+C(358,214,5,'#ffcf4d',SK)+T(342,252,11,'谷仓',' fill="#3e3420"'));
  s+=T(40,276,16,'🐔');
  return s;}
};
var r41={id:'r41',title:'荷花池塘',emoji:'🪷',sub:'数学 · 益智',
 story:['「荷花池塘」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r41',take:['combo_r41'],win:true,text:'放上去——成功！「荷花池塘」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'木码头',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木码头锁着：',note:'【算一算】小数四则：5 − 0.25 = ?',lock:{kind:'num',len:4,dot:true,answer:'4.75',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r41'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'水榭',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'水榭上有材料 B。',take:{give:['partB_r41'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'荷塘牌',box:[130,20,150,90],views:[
    {text:'荷塘牌：材料 A + 材料 B = 成品。顺便一题：一点一横长，一撇到南洋（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'远山',box:[24,24,90,70],views:[
    {text:'荷叶圆圆的，蜻蜓停在尖角上。'}
  ]}
 ],
 combos:[{a:'partA_r41',b:'partB_r41',give:['combo_r41'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开木码头。','算纸条上的题。','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看水榭。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['5 − 0.25 = 4.75。小数点对齐，位数少的补 0。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','4.75'],['take','desk'],['take','shelf'],['combine','partA_r41','partB_r41'],['use','door','combo_r41']],
 art:function(f){var s='';
  s+=R(0,0,400,110,'#d7f6ff')+R(0,110,400,190,'#2f8fbf');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  s+=C(50,200,22,'#1f7a4a')+C(90,230,18,'#1f7a4a')+C(150,190,16,'#248a55')+C(40,250,14,'#1b6b40');
  s+=T(50,196,16,'🪷')+T(150,186,16,'🌸')+T(90,226,12,'🐸');
  s+=R(20,168,150,14,'#c9a06a',4,SK);
  s+=g('window',R(18,22,88,64,'#d7f6ff',8,SK)+T(62,52,18,'🐉')+T(62,98,11,'远山',' fill="#f7f1e4"'));
  s+=g('board',R(124,14,156,78,'#f4ffe8',6,' stroke="#2f8f4a" stroke-width="5"')+T(202,42,14,'🪷')+T(202,68,12,'荷塘',' fill="#1e5a32"'));
  s+=g('desk',R(24,160,130,28,'#d7b07a',6,SK)+R(36,166,50,14,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(78,174,3,'#5b4636'))+T(88,206,11,'木码头',' fill="#f7f1e4"'));
  s+=g('box',R(186,158,74,48,'#e7c07a',6,SK)+(f.box_open?R(194,166,58,32,'#fff3d2',3):R(204,172,34,16,'#ffcf4d',3))+T(222,220,11,'竹篮',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,24,92,110,'#f3e2c4',6,SK)+P('M292 24h92l-16-16h-60z','#c0392b')+T(338,78,18,'🏮')+T(338,116,16,'🍵'));
  s+=g('door',C(336,210,40,'#f6e2b8',SK)+C(336,210,26,'#2f8fbf')+T(336,250,11,'月洞门',' fill="#f7f1e4"'));
  s+=T(250,140,16,'🪁');
  return s;}
};
var r42={id:'r42',title:'星空露营',emoji:'⛺',sub:'数学 · 英语',
 story:['双锁挑战站「星空露营」！','先过木头凳，再过冷藏盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'木头凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形桌面长 2.5 米、宽 1.2 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'300',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'冷藏盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'冷藏盒上还有第二关：',note:'【英语题】Can you write a _____? (句子)\n（线索：Unit 1，名词，8 个字母，首字母 S；由单词组成、表达完整意思。）',lock:{kind:'alpha',len:8,answer:'SENTENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「星空露营」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'帐篷',box:[310,160,70,120],views:[
    {text:'帐篷只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'露营牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'背包架',box:[290,40,90,120],views:[
    {text:'背包架上放着完成印章模型。'}
  ]},
  {id:'window',name:'远林',box:[24,24,90,70],views:[
    {text:'松树黑黑的，营火噼啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先把米换成分米，再相乘。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，名词，8 个字母，首字母 S；由单词组成、表达完整意思。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['先换成 25 分米 × 12 分米 = 300 平方分米','Can you write a _____? (句子) → SENTENCE','两关都对，挑战成功。'],
 solution:[['code','desk','300'],['code','box','SENTENCE']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#24344e')+R(0,168,400,132,'#3e5a38');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#24344e');
  s+=R(8,90,16,100,'#2c4a32')+C(16,80,24,'#1e4d32')+R(360,70,18,120,'#2c4a32')+C(370,64,28,'#1e4d32');
  s+=C(120,230,16,'#ff9a3c')+C(120,226,8,'#ffe08a')+R(116,230,8,16,'#6b442c')+T(150,236,14,'🔥');
  s+=g('window',R(20,24,86,64,'#1b3a4a',8,SK)+T(63,54,18,'🏕️')+T(63,100,11,'远林',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,80,'#f6e7c8',6,' stroke="#6b442c" stroke-width="5"')+T(202,46,14,'📌')+T(202,72,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(24,170,130,18,'#8a5a32',4,SK)+R(20,162,138,12,'#a67c52',4,SK)+(f.desk_open?R(70,166,30,10,'#e7c8a0',2):C(90,176,3,'#fff'))+T(88,204,11,'木头凳',' fill="#f7f1e4"'));
  s+=g('box',R(184,158,76,50,'#5d7a8a',6,SK)+(f.box_open?R(192,166,60,34,'#d5e6ee',3):R(202,172,38,18,'#ffcf4d',3))+T(222,222,11,'冷藏盒',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,36,90,108,'#6b442c',4,SK)+T(336,78,18,'🎒')+T(336,118,16,'🥾'));
  s+=g('door',P('M312 270 L342 168 L372 270z','#f2a3a0',SK)+P('M342 190 v70','none',' stroke="#6b442c" stroke-width="2"')+T(342,248,11,'帐篷',' fill="#f7f1e4"'));
  return s;}
};
var r43={id:'r43',title:'大树屋',emoji:'🌳',sub:'数学 · 通行证',
 story:['「大树屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r43',take:['combo_r43'],win:true,text:'嘀——通过！「大树屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'树枝台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树枝台锁着：',note:'【算一算】循环小数：0.1818…（循环节是 18）化成最简分数，分母是多少？',lock:{kind:'num',len:2,answer:'11',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r43'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'松鼠洞',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'松鼠洞上有一枚徽章。',take:{give:['tool_r43'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'树屋牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'宝箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'树窗',box:[24,24,90,70],views:[
    {text:'叶子沙沙响，绳子梯子晃一晃。'}
  ]}
 ],
 combos:[{a:'scrap_r43',b:'tool_r43',give:['combo_r43'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开树枝台。','算题，注意多步运算。','纯循环小数：循环几位，分母就是几个 9。一位用 9，两位用 99，写好再约分，约完的分母才是答案。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看松鼠洞。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['0.1818… 的循环节是 18，写成 18/99，约分得 2/11，分母是 11。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','11'],['take','desk'],['take','shelf'],['combine','scrap_r43','tool_r43'],['use','door','combo_r43']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#c9f0ff');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  s+=R(0,230,400,70,'#7dba62');
  s+=R(70,120,36,180,'#8a5a32',6)+C(40,70,28,'#3aaa4a')+C(120,50,36,'#2f9a40')+C(180,80,24,'#46b85a')+C(20,110,18,'#2f8a40');
  s+=R(150,150,200,16,'#c9a06a',3,SK);
  s+=P('M200 166 q40 20 20 70','none',' stroke="#d7b07a" stroke-width="4"');
  s+=g('window',R(168,96,70,48,'#fff6d0',6,SK)+T(203,120,16,'🪟')+T(203,154,11,'树窗',' fill="#243024"'));
  s+=g('board',R(126,16,150,70,'#f6e7c4',6,' stroke="#6b442c" stroke-width="5"')+T(201,42,14,'🌳')+T(201,64,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(24,168,110,36,'#d7b07a',6,SK)+R(36,176,48,16,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(70,184,3,'#5b4636'))+T(78,218,11,'树枝台',' fill="#243024"'));
  s+=g('box',R(186,164,70,46,'#c98b52',4,SK)+(f.box_open?R(194,170,54,32,'#f3ddb8',3):R(202,176,34,16,'#e2b56a',3))+T(220,224,11,'宝箱',' fill="#243024"'));
  s+=g('shelf',R(286,40,70,90,'#6aaa3a',6,SK)+T(320,80,18,'🐿️')+T(320,116,14,'🍃'));
  s+=g('door',R(300,148,70,78,'#e7c48a',6,SK)+P('M300 148l35-22 35 22','#c0392b')+R(322,166,26,24,'#c9e7ff',3)+C(354,200,4,'#ffcf4d',SK)+T(334,242,11,'树屋门',' fill="#243024"'));
  s+=T(40,270,18,'🐦');
  return s;}
};
var r44={id:'r44',title:'玻璃温室',emoji:'🪴',sub:'语文 · 古诗',
 story:['古诗转盘挑战「玻璃温室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','波']],answer:'波',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「玻璃温室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'浇水牌',box:[130,20,150,90],views:[
    {text:'墙上写着《咏鹅》（唐·骆宾王），少了一个字：',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'育苗台',box:[30,150,120,50],views:[
    {text:'育苗台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'温室门',box:[310,160,70,120],views:[
    {text:'温室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'绿植架',box:[290,40,90,120],views:[
    {text:'绿植架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'玻璃',box:[24,24,90,70],views:[
    {text:'玻璃上有小水珠，空气暖暖香香的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《咏鹅》，唐·骆宾王。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《咏鹅》：白毛浮绿水，红掌拨清波。','缺的字是「波」。','转对转盘，挑战成功。'],
 solution:[['code','box','波']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e9fff6');
  for(var i=0;i<8;i++)s+=R(i*50,0,48,300,'#fff',0,' opacity=".08"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*50)+'H400','none',' stroke="#fff" stroke-width="2" opacity=".25"');
  s+=R(0,220,400,80,'#cfe8c4');
  s+=T(40,190,20,'🌿')+T(80,200,18,'🌵')+T(250,188,18,'🌸');
  s+=g('window',R(16,18,96,78,'#e9fff2',6,' stroke="#9ad7b2" stroke-width="4"')+T(64,56,20,'🪴')+T(64,108,11,'玻璃',' fill="#1e3a2a"'));
  s+=g('board',R(124,14,160,90,'#f4fff4',6,' stroke="#3d9a62" stroke-width="5"')+T(204,44,14,'💧')+T(204,70,12,'浇水时间',' fill="#1e5a32"')+T(204,90,10,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(22,154,132,50,'#cfe3c4',6,SK)+R(34,164,70,26,f.desk_open?'#fff':'#b7d3a8',4)+(f.desk_open?'':C(90,178,4,'#3d6b4a'))+T(88,218,11,'育苗台',' fill="#1e3a2a"')+T(138,172,14,'🌱'));
  s+=g('box',R(184,160,76,50,'#e7b15a',6,SK)+(f.box_open?R(192,168,60,34,'#fff3d0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'花盆箱',' fill="#1e3a2a"'));
  s+=g('shelf',R(286,22,100,130,'#8fbf8a',6,SK)+T(336,60,16,'🌿')+T(336,98,16,'🌺')+T(336,136,14,'🧴'));
  s+=g('door',R(308,148,72,128,'#d8f3e4',6,' stroke="#3d9a62" stroke-width="4"')+P('M344 148v128','none',' stroke="#3d9a62" stroke-width="3"')+C(362,214,5,'#f2c14a',SK)+T(344,252,11,'温室门',' fill="#1e3a2a"'));
  return s;}
};
var r45={id:'r45',title:'雨中街道',emoji:'🌧️',sub:'英语 · 拼写',
 story:['英语拼写站「雨中街道」！','候车椅上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'候车椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'候车椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Look them up in the _____. (词典)\n（线索：Unit 1，名词，10 个字母，首字母 D；查单词用的书。）',lock:{kind:'alpha',len:10,answer:'DICTIONARY',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「雨中街道」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'雨天牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'小店',box:[310,160,70,120],views:[
    {text:'小店开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'报摊',box:[290,40,90,120],views:[
    {text:'报摊上有英语单词卡片。'}
  ]},
  {id:'box',name:'邮筒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'雨丝斜斜的，水洼里倒映着屋檐。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，名词，10 个字母，首字母 D；查单词用的书。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Look them up in the _____. (词典)','正确答案是 DICTIONARY。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','DICTIONARY']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#c5d0dc')+R(0,200,400,100,'#9aa8b5');
  for(var i=0;i<28;i++)s+=P('M'+((i*47)%400)+' '+((i*29)%180)+' l-6 16','none',' stroke="#d5e6f5" stroke-width="2" opacity=".7"');
  s+=P('M40 250c30-16 50-8 70 0s40 8 60-4','none',' stroke="#9ec4de" stroke-width="6" opacity=".45"');
  s+=R(300,120,8,90,'#5d6d7e')+C(304,112,10,'#ffe08a')+C(304,112,20,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,20,96,74,'#c5d8e8',6,SK)+T(64,56,20,'☂️')+T(64,106,11,'橱窗',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,84,'#fffdf8',6,' stroke="#7f8c9d" stroke-width="5"')+T(202,46,14,'☔')+T(202,72,12,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(24,156,126,42,'#b7c4ce',6,SK)+R(36,164,64,22,f.desk_open?'#eef5f8':'#8fa0ae',4)+(f.desk_open?'':C(86,176,4,'#fff'))+T(86,214,11,'候车椅',' fill="#f7f1e4"'));
  s+=g('box',R(184,160,74,50,'#e74c3c',6,SK)+(f.box_open?R(192,168,58,34,'#f5b7b1',3):R(202,174,34,18,'#ffcf4d',3))+T(220,224,11,'邮筒',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,28,96,112,'#5d6d7e',6,SK)+T(334,70,16,'📰')+T(334,112,16,'☂️'));
  s+=g('door',R(300,148,74,120,'#f2d16b',6,SK)+P('M294 148h86l-10 16H304z','#e67e22')+R(316,176,42,40,'#fff6d8',3)+T(336,250,11,'小店',' fill="#f7f1e4"'));
  s+=T(40,270,18,'🐸');
  return s;}
};
var r46={id:'r46',title:'清晨菜场',emoji:'🥬',sub:'数学 · 挑战',
 story:['你来到了清晨菜场。','秤台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开菜场口，挑战就成功啦！'],
 objects:[
  {id:'door',name:'菜场口',box:[310,160,70,120],views:[
    {text:'菜场口锁着，需要钥匙。',use:[{item:'key_r46',win:true,text:'钥匙一转，菜场口开了！「清晨菜场」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'秤台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'秤台上有密码锁，旁边贴着纸条：',note:'【算一算】小数四则：0.8 × 1.25 = ?',lock:{kind:'num',len:1,answer:'1',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r46'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'菜价牌',box:[130,20,150,90],views:[
    {text:'菜价牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'货摊',box:[290,40,90,120],views:[
    {text:'货摊上摆着一些小物件。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {text:'菜筐是空的。'}
  ]},
  {id:'window',name:'摊位',box:[24,24,90,70],views:[
    {text:'吆喝声热热闹闹，青菜上还带着水珠。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看秤台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先按整数相乘，再点小数点：两个因数一共有几位小数，积就有几位小数。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点秤台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点菜场口。','先点钥匙，再点目标。']}
 ],
 explain:['0.8 × 1.25 = 1。先按整数乘，再点上小数点。','打开抽屉拿到钥匙。','用钥匙打开菜场口，挑战成功。'],
 solution:[['code','desk','1'],['take','desk'],['use','door','key_r46']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#fff6e8')+R(0,214,400,86,'#e7d3b0');
  for(var i=0;i<8;i++)s+=R(i*50,0,50,46,i%2?'#e74c3c':'#f5d76e');
  s+=R(0,46,400,10,'#f7f1e4');
  s+=g('window',R(16,64,96,70,'#fff8e8',6,SK)+T(64,98,20,'🥬')+T(64,146,11,'摊位',' fill="#3e3428"'));
  s+=g('board',R(124,62,160,84,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(204,92,13,'今日菜价',' fill="#c0392b"')+T(204,116,11,'青菜 3.5',' fill="#5b4636"')+T(204,134,11,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(22,156,130,50,'#e8d3b0',6,SK)+R(40,148,40,16,'#f7f1e4',3)+R(34,166,70,26,f.desk_open?'#fff':'#d9c4a4',4)+(f.desk_open?'':C(88,180,4,'#5b4636'))+T(88,220,11,'秤台',' fill="#3e3428"'));
  s+=g('box',R(184,160,76,50,'#c98b52',4,SK)+(f.box_open?R(192,168,60,34,'#f3ddb8',3):R(202,174,38,18,'#e2b56a',3))+T(222,224,11,'菜筐',' fill="#3e3428"'));
  s+=g('shelf',R(286,64,100,120,'#b9793f',6,SK)+T(336,100,18,'🐟')+T(336,140,18,'🍎')+T(336,172,14,'🧄'));
  s+=g('door',R(300,150,72,124,'#27ae60',6,SK)+T(336,200,20,'🚪')+T(336,248,11,'菜场口',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🥕');
  return s;}
};
var r47={id:'r47',title:'雪地木屋',emoji:'❄️',sub:'数学 · 闯关',
 story:['欢迎来到「雪地木屋」挑战站！','雪凳上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'雪凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'雪凳上的挑战题：',note:'【算一算】解方程：4x − 10 = 2x + 30\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「雪地木屋」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'木屋',box:[310,160,70,120],views:[
    {text:'木屋开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'雪地牌',box:[130,20,150,90],views:[
    {text:'雪地牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {text:'木柴堆上有奖杯模型。'}
  ]},
  {id:'box',name:'雪橇',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'雪窗',box:[24,24,90,70],views:[
    {text:'雪软软的，脚印一串串通向木屋。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开雪凳上的题。','仔细看【算一算】，多步时先算哪一步？','把含 x 的项移到一边，常数移到另一边。']}
 ],
 explain:['移项合并：(4-2)x = 10+30 → x = 20','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','20']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#e7f2ff')+R(0,168,400,132,'#f7fbff');
  
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');
  for(var i=0;i<18;i++)s+=C((i*73)%400,(i*41)%150,i%3?1.4:2.2,'#fff',' opacity=".85"');
  s+=R(250,150,70,70,'#f7fbff',8,SK)+C(268,168,6,'#5b4636')+C(292,168,6,'#5b4636')+P('M272 188 q10 8 20 0','none',' stroke="#e07a7a" stroke-width="2"')+R(282,188,4,22,'#f0a0a0');
  s+=R(20,120,14,70,'#2f6b4a')+P('M8 120 l20-28 20 28z','#eef8f2')+R(40,100,12,90,'#2f6b4a')+P('M28 100 l18-24 18 24z','#eef8f2');
  s+=g('window',R(18,22,86,64,'#d6ecff',8,SK)+T(61,52,18,'❄️')+T(61,98,11,'雪窗',' fill="#3e5670"'));
  s+=g('board',R(120,16,150,78,'#fff',6,' stroke="#9ec4de" stroke-width="5"')+T(195,44,14,'☃️')+T(195,70,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',R(24,160,120,36,'#f7fbff',8,' stroke="#9ec4de" stroke-width="3"')+R(40,168,50,16,f.desk_open?'#fff6e0':'#e4eef6',4)+(f.desk_open?'':C(80,176,4,'#7f8c9d'))+T(84,212,11,'雪凳',' fill="#3e5670"'));
  s+=g('box',R(184,158,74,48,'#e74c3c',6,SK)+(f.box_open?R(192,166,58,32,'#f5d0cc',3):R(202,172,34,16,'#ffcf4d',3))+T(220,220,11,'雪橇',' fill="#3e5670"'));
  s+=g('shelf',R(292,36,88,100,'#8a5a32',4,SK)+R(300,48,14,70,'#6b442c')+R(326,42,14,78,'#6b442c')+R(352,52,14,64,'#6b442c')+T(334,90,12,'🪵'));
  s+=g('door',R(308,148,74,120,'#f2e2c8',6,SK)+P('M308 148l37-26 37 26','#c0392b')+R(330,176,30,28,'#ffe08a',3)+C(362,220,5,'#ffcf4d',SK)+T(344,248,11,'木屋',' fill="#3e5670"'));
  return s;}
};
var r48={id:'r48',title:'傍晚客厅',emoji:'🌇',sub:'数学 · 助人',
 story:['你走进傍晚客厅，遇见了小花猫。','小黄说：“帮小花猫拿到礼物吧！”','先解开茶几上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r48',take:['gift_r48'],win:true,text:'小花猫开心地收下了！「傍晚客厅」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'茶几抽屉锁着，纸条上有题：',note:'【算一算】循环小数：下面哪个算式的商是循环小数？① 3÷5 ② 7÷2 ③ 2÷11 ④ 8÷5。填序号。',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r48'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'全家福',box:[130,20,150,90],views:[
    {text:'全家福上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'电视柜',box:[290,40,90,120],views:[
    {text:'电视柜上摆着🐱的照片。'}
  ]},
  {id:'box',name:'玩具箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗帘',box:[24,24,90,70],views:[
    {text:'沙发软软的，台灯亮着暖光。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开茶几的密码。','看纸条上的题，可能要算两步。','约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点茶几拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['① 3÷5=0.6 有限小数，② 7÷2=3.5 有限小数，③ 2÷11=0.1818… 循环小数，④ 8÷5=1.6 有限小数。所以填 3。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','3'],['take','desk'],['use','door','gift_r48']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f0d0b0')+R(0,214,400,86,'#c9a078');
  s+=P('M40 286c40-36 120-36 160 0s120 28 160 0v14H40z','#e7a0a8',' opacity=".9"');
  s+=R(118,232,150,28,'#f4c7b8',16,SK)+R(126,220,134,22,'#ffe1d6',12,SK);
  s+=R(250,196,16,70,'#c98b52',4)+C(258,188,10,'#ffe08a',' opacity=".9"')+C(258,188,22,'#ffe08a',' opacity=".25"');
  s+=g('window',R(22,24,96,74,'#ffc98a',6,SK)+R(22,24,18,74,'#f7d0d8')+R(100,24,18,74,'#f7d0d8')+P('M70 24v74M22 60h96','none',' stroke="#fff" stroke-width="2" opacity=".7"')+T(70,108,11,'窗帘',' fill="#3e3428"'));
  s+=g('board',R(132,18,150,86,'#fffaf2',6,' stroke="#d9a07a" stroke-width="5"')+R(148,32,52,40,'#f6d2b8',4)+C(166,48,8,'#f3b6a0')+C(184,50,8,'#f3b6a0')+T(206,86,12,'全家福',' fill="#5b4636"'));
  s+=g('desk',R(28,150,128,36,'#e7c39a',8,SK)+R(40,158,64,16,f.desk_open?'#fff6e0':'#d7b088',4)+(f.desk_open?T(72,168,12,'🍪'):C(96,166,4,'#5b4636'))+T(92,202,11,'茶几',' fill="#3e3428"')+T(140,168,14,'🍵'));
  s+=g('box',R(188,162,76,50,'#f0a06a',8,SK)+(f.box_open?R(196,170,60,34,'#ffe6c8',3):R(206,176,40,20,'#ffcf4d',3))+T(226,226,11,'玩具箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,28,100,118,'#d7c2a4',6,SK)+R(296,78,80,46,'#243044',4)+R(302,84,68,28,'#7ec8ff',2)+T(336,70,16,'📺')+T(336,132,14,'🪴'));
  s+=g('door',R(304,156,72,124,'#e7c9a2',6,SK)+C(358,214,5,'#ffcf4d',SK)+R(322,170,36,28,'#c9e7ff',3)+T(340,250,11,'房门',' fill="#3e3428"'));
  s+=T(36,270,20,'🌇');
  return s;}
};
var r49={id:'r49',title:'夕阳卧室',emoji:'🌇',sub:'数学 · 益智',
 story:['「夕阳卧室」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r49',take:['combo_r49'],win:true,text:'放上去——成功！「夕阳卧室」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜锁着：',note:'【算一算】小数四则：7.2 ÷ 0.16 = ?',lock:{kind:'num',len:2,answer:'45',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r49'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'衣柜',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'衣柜上有材料 B。',take:{give:['partB_r49'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'梦的清单',box:[130,20,150,90],views:[
    {text:'梦的清单：材料 A + 材料 B = 成品。顺便一题：上边雨，下边令（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'收纳篮',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'小窗',box:[24,24,90,70],views:[
    {text:'枕头鼓鼓的，故事书摊在床上。'}
  ]}
 ],
 combos:[{a:'partA_r49',b:'partB_r49',give:['combo_r49'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开床头柜。','算纸条上的题。','除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看衣柜。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['7.2 ÷ 0.16 = 45。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','45'],['take','desk'],['take','shelf'],['combine','partA_r49','partB_r49'],['use','door','combo_r49']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f0d0b0')+R(0,200,400,100,'#c9a078');
  s+=R(70,214,210,64,'#f7f1ff',10,SK)+R(78,206,150,22,'#ffe9f3',8,SK)+R(86,198,36,16,'#fff',6)+R(130,198,36,16,'#fff',6);
  s+=R(250,168,10,90,'#c9b8a0')+C(255,160,9,'#ffe08a')+C(255,160,18,'#ffe08a',' opacity=".3"');
  s+=g('window',R(22,22,96,74,'#ffc98a',8,SK)+C(78,52,12,'#fff6c8')+C(84,48,9,'#ffc98a')+T(70,108,11,'小窗',' fill="#3e3428"'));
  s+=g('board',R(132,16,148,88,'#fff5fb',6,' stroke="#e7b6d4" stroke-width="5"')+T(206,48,16,'🌙')+T(206,76,12,'梦的清单',' fill="#7a4e6a"'));
  s+=g('desk',R(28,150,120,46,'#e6d3ef',6,SK)+R(40,158,52,24,f.desk_open?'#fff':'#d7c0ea',4)+(f.desk_open?'':C(78,170,4,'#5b4636'))+T(88,210,11,'床头柜',' fill="#3e3428"')+T(128,168,14,'🧸'));
  s+=g('box',R(188,160,74,50,'#f2b5c8',6,SK)+(f.box_open?R(196,168,58,34,'#ffe4ee',3):R(206,176,36,18,'#ffcf4d',3))+T(224,224,11,'收纳篮',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,126,'#cbb6e6',6,SK)+R(296,48,80,8,'#a88bc4',2)+R(296,88,80,8,'#a88bc4',2)+T(336,70,16,'👕')+T(336,112,16,'📚'));
  s+=g('door',R(300,156,72,124,'#d7c4ef',6,SK)+C(354,216,5,'#ffd34d',SK)+T(336,118,14,'⭐')+T(336,248,11,'卧室门',' fill="#3e3428"'));
  s+=T(40,276,18,'🌇')+T(200,276,16,'🧦');
  return s;}
};
var r50={id:'r50',title:'黄昏公园',emoji:'🌆',sub:'数学 · 英语',
 story:['双锁挑战站「黄昏公园」！','先过长椅，再过野餐篮。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一桶油重 25.4 千克，用去 8.7 千克后又倒入 4.2 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'20.9',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'野餐篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'野餐篮上还有第二关：',note:'【英语题】Make word _____ with pictures. (卡片)\n（线索：Unit 1，复数名词，5 个字母，首字母 C；配图记单词用的纸片。）',lock:{kind:'alpha',len:5,answer:'CARDS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「黄昏公园」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'游园地图',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'售货亭',box:[290,40,90,120],views:[
    {text:'售货亭上放着完成印章模型。'}
  ]},
  {id:'window',name:'大树',box:[24,24,90,70],views:[
    {text:'鸽子在小路边散步，风吹得树叶沙沙响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先减去用去的，再加上倒入的。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，复数名词，5 个字母，首字母 C；配图记单词用的纸片。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['25.4 − 8.7 + 4.2 = 20.9','Make word _____ with pictures. (卡片) → CARDS','两关都对，挑战成功。'],
 solution:[['code','desk','20.9'],['code','box','CARDS']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#3d4d7a')+R(0,168,400,132,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=P('M-10 250C80 210 140 250 210 220S320 250 410 214V300H-10z','#c9e7b0',' opacity=".55"');
  s+=P('M150 300C170 230 190 210 210 168C230 214 250 236 270 300z','#e7d7b0');
  s+=C(46,150,28,'#3e9a4a')+R(40,168,12,48,'#8a5a32')+C(340,120,26,'#2f8a40')+R(334,140,12,40,'#8a5a32');
  s+=T(24,196,16,'🌸')+T(250,188,14,'🌼')+T(120,250,14,'🐦');
  s+=g('window',R(18,78,90,70,'#b7e39a',8,SK)+T(63,112,22,'🌳')+T(63,156,11,'大树',' fill="#f4efe4"'));
  s+=g('board',R(130,18,156,84,'#f4fbe8',6,' stroke="#5f8f3a" stroke-width="5"')+T(208,48,16,'🗺️')+T(208,76,12,'游园地图',' fill="#2d5a1e"'));
  s+=g('desk',R(28,168,124,28,'#a67c52',6,SK)+R(24,160,132,14,'#c49a62',6,SK)+(f.desk_open?R(70,172,40,16,'#e7c99a',3):C(90,182,4,'#5b4636'))+T(90,214,11,'长椅',' fill="#f4efe4"'));
  s+=g('box',R(188,164,76,48,'#e7b15a',6,SK)+(f.box_open?R(196,172,60,32,'#fff1cc',3):R(206,178,36,18,'#ffcf4d',3))+T(226,226,11,'野餐篮',' fill="#f4efe4"'));
  s+=g('shelf',R(292,36,92,110,'#f0d78c',6,SK)+P('M292 36h92l-10-16h-72z','#e25b4a')+T(338,90,18,'🍦')+T(338,124,14,'🎈'));
  s+=g('door',R(304,150,74,128,'#8d6a3f',6,SK)+R(312,162,26,100,'#6aaa3a',4)+R(344,162,26,100,'#6aaa3a',4)+C(358,214,5,'#ffcf4d',SK)+T(340,292,11,'园门',' fill="#f4efe4"'));
  s+=T(40,276,20,'🌆');
  return s;}
};
var r51={id:'r51',title:'暮色花园',emoji:'🌇',sub:'数学 · 通行证',
 story:['「暮色花园」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r51',take:['combo_r51'],win:true,text:'嘀——通过！「暮色花园」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿锁着：',note:'【算一算】循环小数：0.3333…（循环节是 3）化成最简分数，分子是多少？',lock:{kind:'num',len:1,answer:'1',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r51'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'花架上有一枚徽章。',take:{give:['tool_r51'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'花名牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'种子盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'花窗',box:[24,24,90,70],views:[
    {text:'蜜蜂在花心里嗡嗡，花瓣上还有露水。'}
  ]}
 ],
 combos:[{a:'scrap_r51',b:'tool_r51',give:['combo_r51'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开花坛沿。','算题，注意多步运算。','先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看花架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['0.3333… 写成 3/9，约分得 1/3，分子是 1。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','1'],['take','desk'],['take','shelf'],['combine','scrap_r51','tool_r51'],['use','door','combo_r51']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#3d4d7a')+R(0,150,400,150,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  for(var i=0;i<5;i++)s+=R(18+i*36,232,30,42,'#6b3e28',4);
  s+=T(30,228,16,'🌷')+T(70,224,16,'🌻')+T(110,230,16,'🌹')+T(150,222,16,'🌼')+T(190,228,14,'🌺');
  s+=C(250,210,16,'#8fd4f2',' stroke="#5b4636" stroke-width="2"')+R(246,226,8,20,'#9aa7b2');
  s+=g('window',R(20,22,92,72,'#d9f5c8',8,SK)+T(66,58,22,'🐝')+T(66,104,11,'花窗',' fill="#f4efe4"'));
  s+=g('board',R(128,16,158,86,'#fffdf4',6,' stroke="#7dae52" stroke-width="5"')+T(206,46,14,'🏷️')+T(206,74,12,'今日花名',' fill="#2d5a1e"'));
  s+=g('desk',R(28,156,126,40,'#c48b62',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#a96b42',4)+(f.desk_open?'':C(92,174,4,'#fff'))+T(90,212,11,'花坛沿',' fill="#f4efe4"'));
  s+=g('box',R(186,160,78,50,'#f0d36a',6,SK)+(f.box_open?R(194,168,62,34,'#fff6d0',3):R(204,174,40,18,'#e7b84a',3))+T(224,224,11,'种子盒',' fill="#f4efe4"'));
  s+=g('shelf',R(286,30,98,116,'#8fbf62',6,SK)+T(336,70,18,'🌷')+T(336,108,18,'🪴')+T(336,140,14,'🎀'));
  s+=g('door',P('M300 168 Q336 120 372 168V280H300z','#f2a3c0',SK)+R(330,200,12,40,'#fff',0,' opacity=".45"')+T(336,250,11,'花拱门',' fill="#f4efe4"'));
  s+=T(360,270,18,'🦋');
  return s;}
};
var r52={id:'r52',title:'暮色过河',emoji:'🌅',sub:'语文 · 古诗',
 story:['古诗转盘挑战「暮色过河」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','雪']],answer:'雪',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「暮色过河」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'渡口牌',box:[130,20,150,90],views:[
    {text:'墙上写着《江雪》（唐·柳宗元），少了一个字：',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {text:'岸边石桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'渡船',box:[310,160,70,120],views:[
    {text:'渡船开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'竹排',box:[290,40,90,120],views:[
    {text:'竹排上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'河柳',box:[24,24,90,70],views:[
    {text:'河水哗哗响，石头一颗颗露在水面上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《江雪》，唐·柳宗元。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《江雪》：孤舟蓑笠翁，独钓寒江雪。','缺的字是「雪」。','转对转盘，挑战成功。'],
 solution:[['code','box','雪']],
 art:function(f){var s='';
  s+=R(0,0,400,118,'#3d4d7a')+R(0,118,400,28,'#7dce6a')+R(0,146,400,78,'#1d4e7a')+R(0,220,400,80,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  for(var i=0;i<7;i++)s+=P('M'+(i*58)+' 168 q16 8 32 0 t32 0','none',' stroke="#e9f7ff" stroke-width="2" opacity=".7"');
  s+=C(78,176,12,'#e4d8c4',SK)+C(124,196,14,'#d9cdb8',SK)+C(172,174,11,'#efe4d2',SK)+C(220,198,13,'#d5c8b0',SK);
  s+=T(28,132,18,'🌿')+T(250,128,16,'🌿')+T(36,268,16,'🦆');
  s+=g('window',R(18,28,90,70,'#9ed98a',8,SK)+P('M36 96 C50 30 90 30 96 90','#2f8f45')+T(64,108,11,'河柳',' fill="#f4efe4"'));
  s+=g('board',R(128,16,156,80,'#f6e7c4',6,' stroke="#8a5a2b" stroke-width="5"')+T(206,44,16,'🛶')+T(206,72,12,'小心过河',' fill="#5b4636"'));
  s+=g('desk',R(26,168,124,36,'#cfc6b6',10,SK)+R(40,176,60,18,f.desk_open?'#fff6e0':'#b7b0a2',4)+(f.desk_open?'':C(86,186,4,'#5b4636'))+T(88,220,11,'岸边石桌',' fill="#f4efe4"'));
  s+=g('box',R(186,164,76,48,'#c98b52',4,SK)+(f.box_open?R(194,172,60,32,'#f0d2a4',3):R(204,178,36,16,'#e2b56a',3))+T(224,226,11,'木箱',' fill="#f4efe4"'));
  s+=g('shelf',R(292,30,92,108,'#6aaa3a',3)+R(304,40,8,90,'#d7b07a')+R(330,34,8,98,'#d7b07a')+R(356,44,8,82,'#d7b07a')+T(334,78,16,'🎋'));
  s+=g('door',P('M314 250 Q344 200 378 250','#e8d7b0')+R(316,188,60,62,'#f4e2c0',8,SK)+T(346,214,20,'⛵')+T(346,258,11,'渡船',' fill="#f4efe4"'));
  s+=T(360,276,16,'🐟');
  return s;}
};
var r53={id:'r53',title:'晚霞石桥',emoji:'🌇',sub:'英语 · 拼写',
 story:['英语拼写站「晚霞石桥」！','桥头石凳上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Keep the chunks in _____. (记在心里)\n（线索：Unit 1，短语 keep in ____，4 个字母，首字母 M；指头脑、心里。）',lock:{kind:'alpha',len:4,answer:'MIND',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「晚霞石桥」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'桥名牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'桥门',box:[310,160,70,120],views:[
    {text:'桥门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'灯笼架',box:[290,40,90,120],views:[
    {text:'灯笼架上有英语单词卡片。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'桥柳',box:[24,24,90,70],views:[
    {text:'桥洞下面水声轻轻的，栏杆摸上去凉凉的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，短语 keep in ____，4 个字母，首字母 M；指头脑、心里。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Keep the chunks in _____. (记在心里)','正确答案是 MIND。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','MIND']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#3d4d7a')+R(0,168,400,50,'#1d4e7a')+R(0,214,400,86,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=P('M20 214 Q120 120 200 214 Q280 120 390 214','#d7d0c4')+P('M20 214 Q120 150 200 214 Q280 150 390 214V250H20z','#c3b8a4',SK);
  s+=R(30,150,10,64,'#8d6b45')+R(360,150,10,64,'#8d6b45')+C(35,146,6,'#ffb84a')+C(365,146,6,'#ffb84a');
  for(var i=0;i<6;i++)s+=R(70+i*42,158,4,28,'#efe6d4');
  s+=g('window',R(18,22,88,64,'#bfe6c8',8,SK)+T(62,54,20,'🌿')+T(62,98,11,'桥柳',' fill="#f4efe4"'));
  s+=g('board',R(128,14,150,78,'#fff8e4',6,' stroke="#8a5a2b" stroke-width="5"')+T(203,42,14,'🌉')+T(203,68,12,'石拱桥',' fill="#5b4636"'));
  s+=g('desk',R(28,156,120,36,'#d2c6b2',8,SK)+R(40,164,56,16,f.desk_open?'#fff6e0':'#b7aa96',4)+(f.desk_open?'':C(84,172,4,'#5b4636'))+T(88,208,11,'桥头石凳',' fill="#f4efe4"'));
  s+=g('box',R(186,160,74,48,'#c98b52',4,SK)+(f.box_open?R(194,168,58,32,'#f3ddb8',3):R(204,174,34,16,'#e2b56a',3))+T(222,222,11,'竹篮',' fill="#f4efe4"'));
  s+=g('shelf',R(292,28,90,100,'#e7d7b8',6,SK)+T(336,70,18,'🏮')+T(336,110,16,'🎐'));
  s+=g('door',R(300,156,72,120,'#b08968',6,SK)+P('M300 156l36-22 36 22','#8d6a43')+C(354,214,5,'#ffcf4d',SK)+T(336,250,11,'桥门',' fill="#f4efe4"'));
  return s;}
};
var r54={id:'r54',title:'放学教室',emoji:'🌇',sub:'数学 · 挑战',
 story:['你来到了放学教室。','讲台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开教室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门锁着，需要钥匙。',use:[{item:'key_r54',win:true,text:'钥匙一转，教室门开了！「放学教室」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上有密码锁，旁边贴着纸条：',note:'【算一算】小数四则：8.5 + 1.25 − 0.8 = ?',lock:{kind:'num',len:4,dot:true,answer:'8.95',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r54'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着一些小物件。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'作业盒是空的。'}
  ]},
  {id:'window',name:'窗',box:[24,24,90,70],views:[
    {text:'黑板上还有没擦掉的算式，粉笔灰轻轻飘。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看讲台上的纸条。','纸条上有一道数学题，算出答案就是密码。','看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点讲台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点教室门。','先点钥匙，再点目标。']}
 ],
 explain:['8.5 + 1.25 − 0.8 = 8.95。先加再减。','打开抽屉拿到钥匙。','用钥匙打开教室门，挑战成功。'],
 solution:[['code','desk','8.95'],['take','desk'],['use','door','key_r54']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f0d0b0')+R(0,214,400,86,'#c9a078');
  for(var i=0;i<7;i++)s+=R(i*58,250,48,28,'#f4e2c4',4,' stroke="#d7c09a" stroke-width="1"');
  s+=R(18,214,364,8,'#e7d3a8');
  s+=g('window',R(16,18,100,78,'#ffc98a',6,SK)+P('M66 18v78M16 56h100','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'窗',' fill="#3e3428"'));
  s+=g('board',R(126,12,168,104,'#1e8449',4,' stroke="#a86b38" stroke-width="6"')+T(210,42,13,'今天的课',' fill="#fff"')+T(210,66,12,'认真审题',' fill="#d5f5e3"')+T(210,90,11,'1.2 × 0.5',' fill="#abebc6"'));
  s+=g('desk',R(24,150,132,52,'#c98b52',6,SK)+R(36,160,78,28,f.desk_open?'#f6e0c0':'#a86b38',4)+(f.desk_open?T(74,176,12,'📘'):C(100,174,4,'#fff'))+T(90,216,11,'讲台',' fill="#3e3428"')+T(140,166,14,'✏️'));
  s+=g('box',R(186,160,76,50,'#f5c16a',6,SK)+(f.box_open?R(194,168,60,34,'#fff3d6',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'作业盒',' fill="#3e3428"'));
  s+=g('shelf',R(286,22,100,132,'#b9793f',6,SK)+R(296,52,80,8,'#8a5428',2)+R(296,92,80,8,'#8a5428',2)+T(336,74,14,'📕')+T(336,114,14,'🌍'));
  s+=g('door',R(300,150,72,126,'#8fb6e8',6,SK)+R(310,162,52,36,'#d6ebff',4)+C(354,220,5,'#ffcf4d',SK)+T(336,252,11,'教室门',' fill="#3e3428"'));
  s+=T(48,276,18,'🌇');
  return s;}
};
var r55={id:'r55',title:'放学走廊',emoji:'🌇',sub:'数学 · 闯关',
 story:['欢迎来到「放学走廊」挑战站！','小黄指着休息椅：“把这道题做对，就算过关！”','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'休息椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'休息椅上的挑战题：',note:'【算一算】梯形：上底 5 分米，下底 11 分米，高 6 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「放学走廊」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'楼梯口',box:[310,160,70,120],views:[
    {text:'楼梯口开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'布告栏',box:[130,20,150,90],views:[
    {text:'布告栏上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'储物柜',box:[290,40,90,120],views:[
    {text:'储物柜上有奖杯模型。'}
  ]},
  {id:'box',name:'失物箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'走廊窗',box:[24,24,90,70],views:[
    {text:'地砖被踩得发亮，布告栏上别满了纸条。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开休息椅上的题。','仔细看【算一算】，多步时先算哪一步？','梯形面积 =（上底+下底）×高÷2。']}
 ],
 explain:['（5+11）×6÷2 = 48','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','48']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f0d0b0');
  for(var i=0;i<8;i++)s+=R(0,214+i*11,400,11,i%2?'#c9a078':'#e7dcc8');
  s+=P('M120 214 L200 120 L280 214','none',' stroke="#fff" stroke-width="8" opacity=".25"');
  s+=g('window',R(18,20,96,74,'#ffc98a',6,SK)+P('M66 20v74M18 56h96','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'走廊窗',' fill="#3e3428"'));
  s+=g('board',R(126,16,160,96,'#fffdf6',4,' stroke="#c98b52" stroke-width="6"')+T(206,46,14,'📌')+T(206,72,12,'失物招领',' fill="#5b4636"')+T(206,94,10,'看看告示',' fill="#888"'));
  s+=g('desk',R(28,156,128,40,'#d8c4a4',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#c8b090',4)+(f.desk_open?'':C(96,174,4,'#5b4636'))+T(92,212,11,'休息椅',' fill="#3e3428"'));
  s+=g('box',R(186,160,76,50,'#e39b4a',6,SK)+(f.box_open?R(194,168,60,34,'#ffe6c2',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'失物箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,124,'#6f8fbe',6,SK)+R(296,40,24,48,'#f4f7fb',3)+R(324,40,24,48,'#f4f7fb',3)+R(352,40,24,48,'#f4f7fb',3)+T(336,112,16,'🎒'));
  s+=g('door',R(308,150,72,126,'#d98a3a',6,SK)+R(320,164,48,40,'#f8e2c0',4)+C(362,220,5,'#5b4636',SK)+T(344,252,11,'楼梯口',' fill="#3e3428"'));
  s+=T(40,276,18,'🪴');
  return s;}
};
var r56={id:'r56',title:'黄昏林间',emoji:'🌇',sub:'数学 · 助人',
 story:['你走进黄昏林间，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开树桩上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r56',take:['gift_r56'],win:true,text:'小花猫开心地收下了！「黄昏林间」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'树桩',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树桩抽屉锁着，纸条上有题：',note:'【算一算】循环小数：计算 5÷6，从小数点后第几位开始循环？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r56'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'指路牌',box:[130,20,150,90],views:[
    {text:'指路牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {text:'木柴堆上摆着🐱的照片。'}
  ]},
  {id:'box',name:'小木箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'树洞',box:[24,24,90,70],views:[
    {text:'阳光从叶子缝里漏下来，蘑菇一圈一圈。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开树桩的密码。','看纸条上的题，可能要算两步。','看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点树桩拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['5÷6=0.8333…，从小数点后第 2 位开始循环。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','2'],['take','desk'],['use','door','gift_r56']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2c3a66')+R(0,0,400,70,'#1e4d32',0,' opacity=".35"');
  s+=R(0,210,400,90,'#1e4630');
  s+=P('M180 300 C200 200 210 160 220 120 C230 170 250 220 270 300z','#c8ad84');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=R(8,40,18,180,'#6b442c')+R(360,30,22,190,'#6b442c')+C(18,36,26,'#1f6b3a')+C(372,28,30,'#1f6b3a');
  s+=C(40,248,8,'#e25b4a')+C(70,260,6,'#f0d36a')+C(250,252,7,'#e8e0d0');
  s+=g('window',R(24,70,80,70,'#2f8f45',8,SK)+T(64,104,20,'🌲')+T(64,150,11,'树洞',' fill="#f4efe4"'));
  s+=g('board',R(128,20,150,82,'#e7d3a4',6,' stroke="#6b442c" stroke-width="5"')+T(203,50,14,'🪵')+T(203,76,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',C(90,176,34,'#a67c52',SK)+R(40,168,50,22,f.desk_open?'#e7c8a0':'#8a5a32',4)+(f.desk_open?'':C(78,178,4,'#fff'))+T(90,214,11,'树桩',' fill="#f4efe4"'));
  s+=g('box',R(186,160,74,50,'#b8894a',6,SK)+(f.box_open?R(194,168,58,34,'#f0ddb4',3):R(204,174,36,18,'#e2b56a',3))+T(222,224,11,'小木箱',' fill="#f4efe4"'));
  s+=g('shelf',R(292,36,90,110,'#8a5a32',4,SK)+R(300,50,16,80,'#6b442c')+R(330,44,16,90,'#6b442c')+R(356,56,16,74,'#6b442c')+T(336,100,14,'🍄'));
  s+=g('door',R(304,150,74,126,'#c49a62',6,SK)+P('M304 150l37-28 37 28','#8d4a3a')+R(326,176,30,28,'#f6e2a8',3)+C(358,220,5,'#ffcf4d',SK)+T(340,252,11,'小木屋',' fill="#f4efe4"'));
  return s;}
};
var r57={id:'r57',title:'晚霞沙滩',emoji:'🌅',sub:'数学 · 益智',
 story:['「晚霞沙滩」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r57',take:['combo_r57'],win:true,text:'放上去——成功！「晚霞沙滩」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'沙桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'沙桌锁着：',note:'【算一算】一块三角形彩纸底 10 厘米、高 7 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'70',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r57'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'救生圈架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'救生圈架上有材料 B。',take:{give:['partB_r57'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'沙滩牌',box:[130,20,150,90],views:[
    {text:'沙滩牌：材料 A + 材料 B = 成品。顺便一题：一日一月（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'冷藏箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'椰树',box:[24,24,90,70],views:[
    {text:'浪花一排排走上来，沙子里藏着小贝壳。'}
  ]}
 ],
 combos:[{a:'partA_r57',b:'partB_r57',give:['combo_r57'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开沙桌。','算纸条上的题。','先求一块三角形面积，再乘 2。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看救生圈架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['一块 = 10×7÷2 = 35，两块 = 70','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','70'],['take','desk'],['take','shelf'],['combine','partA_r57','partB_r57'],['use','door','combo_r57']],
 art:function(f){var s='';
  s+=R(0,0,400,132,'#3d4d7a')+R(0,132,400,52,'#1d4e7a')+R(0,184,400,116,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 150 q20 10 40 0 t40 0','none',' stroke="#e7f7ff" stroke-width="3" opacity=".75"');
  s+=C(40,230,4,'#fff')+C(90,250,3,'#ffe08a')+C(150,236,4,'#f7c6c6')+C(240,258,3,'#fff')+T(48,268,14,'🐚');
  s+=P('M300 210 l30-40 30 40z','#ff8f8f',' opacity=".9"')+R(328,210,4,30,'#c98b52');
  s+=g('window',R(16,24,88,70,'#ffe08a',8,' opacity=".3"')+T(60,58,22,'🌴')+T(60,104,11,'椰树',' fill="#f4efe4"'));
  s+=g('board',R(124,16,156,80,'#fff8e6',6,' stroke="#e07a4a" stroke-width="5"')+T(202,46,14,'⛱️')+T(202,72,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',R(28,168,120,28,'#e7c99a',10,SK)+(f.desk_open?R(50,172,40,16,'#fff6e0',3):C(88,182,4,'#c98b52'))+T(88,214,11,'沙桌',' fill="#f4efe4"'));
  s+=g('box',R(186,160,74,48,'#5dade2',6,SK)+(f.box_open?R(194,168,58,32,'#eaf6ff',3):R(204,174,36,16,'#ffcf4d',3))+T(222,222,11,'冷藏箱',' fill="#f4efe4"'));
  s+=g('shelf',R(300,40,78,100,'#f2c14a',6,SK)+R(312,36,8,70,'#c98b52')+T(338,78,18,'🛟')+T(338,118,14,'🩱'));
  s+=g('door',R(300,156,72,100,'#f6e2b8',6,SK)+P('M300 156l36-20 36 20','#e07a4a')+T(336,200,18,'🏠')+T(336,246,11,'沙滩屋',' fill="#f4efe4"'));
  s+=T(250,120,16,'🕊️');
  return s;}
};
var r58={id:'r58',title:'傍晚农庄',emoji:'🌇',sub:'数学 · 英语',
 story:['双锁挑战站「傍晚农庄」！','先过木桌，再过菜筐。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'木桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：最简分数 1/3 写成小数，把循环节按顺序连起来是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'菜筐上还有第二关：',note:'【英语题】I\'m _____ to join the science club. (be going to)\n（线索：Unit 2，be _____ to 表打算，5 个字母，首字母 G。）',lock:{kind:'alpha',len:5,answer:'GOING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「傍晚农庄」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'谷仓',box:[310,160,70,120],views:[
    {text:'谷仓只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'丰收牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'蔬果架',box:[290,40,90,120],views:[
    {text:'蔬果架上放着完成印章模型。'}
  ]},
  {id:'window',name:'田边',box:[24,24,90,70],views:[
    {text:'田垄绿绿的，稻草人举着手。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，be _____ to 表打算，5 个字母，首字母 G。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['1/3=0.3333…，循环节连起来是 3。','I\'m _____ to join the science club. (be going to) → GOING','两关都对，挑战成功。'],
 solution:[['code','desk','3'],['code','box','GOING']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#3d4d7a')+R(0,150,400,150,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  for(var i=0;i<8;i++)s+=R(0,168+i*16,400,8,i%2?'#8fbf4a':'#7aaa3a',0,' opacity=".55"');
  s+=R(250,120,8,70,'#6b442c')+C(254,112,10,'#f2c14a')+R(236,128,36,8,'#6b442c')+T(254,108,12,'🌾');
  s+=g('window',R(16,22,90,70,'#d9f2b0',8,SK)+T(61,56,20,'🚜')+T(61,102,11,'田边',' fill="#f4efe4"'));
  s+=g('board',R(124,16,156,80,'#fff8e0',6,' stroke="#8a5a2b" stroke-width="5"')+T(202,46,14,'🌽')+T(202,72,12,'丰收告示',' fill="#5b4636"'));
  s+=g('desk',R(24,156,126,42,'#c98b52',6,SK)+R(36,164,70,22,f.desk_open?'#fff1d0':'#a86b38',4)+(f.desk_open?'':C(90,176,4,'#fff'))+T(86,214,11,'木桌',' fill="#f4efe4"')+T(132,170,14,'🥛'));
  s+=g('box',R(184,160,76,50,'#e0a15a',6,SK)+(f.box_open?R(192,168,60,34,'#f8e2c0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'菜筐',' fill="#f4efe4"'));
  s+=g('shelf',R(286,28,96,118,'#b7d47a',4,' stroke="#5f8f3a" stroke-width="3"')+T(334,70,18,'🥕')+T(334,108,18,'🍅')+T(334,140,14,'🥚'));
  s+=g('door',R(304,148,78,128,'#c0392b',6,SK)+P('M304 148l39-26 39 26','#922b21')+R(330,190,26,50,'#f6e2b0',3)+C(358,214,5,'#ffcf4d',SK)+T(342,252,11,'谷仓',' fill="#f4efe4"'));
  s+=T(40,276,16,'🐔');
  return s;}
};
var r59={id:'r59',title:'暮色荷塘',emoji:'🌇',sub:'数学 · 通行证',
 story:['「暮色荷塘」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r59',take:['combo_r59'],win:true,text:'嘀——通过！「暮色荷塘」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'木码头',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木码头锁着：',note:'【算一算】小路长 36 米。从头到尾，每隔 4 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r59'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'水榭',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'水榭上有一枚徽章。',take:{give:['tool_r59'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'荷塘牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'远山',box:[24,24,90,70],views:[
    {text:'荷叶圆圆的，蜻蜓停在尖角上。'}
  ]}
 ],
 combos:[{a:'scrap_r59',b:'tool_r59',give:['combo_r59'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开木码头。','算题，注意多步运算。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看水榭。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['段数=36÷4=9，棵数=段数+1=10','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','10'],['take','desk'],['take','shelf'],['combine','scrap_r59','tool_r59'],['use','door','combo_r59']],
 art:function(f){var s='';
  s+=R(0,0,400,110,'#3d4d7a')+R(0,110,400,190,'#1d4e7a');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=C(50,200,22,'#1f7a4a')+C(90,230,18,'#1f7a4a')+C(150,190,16,'#248a55')+C(40,250,14,'#1b6b40');
  s+=T(50,196,16,'🪷')+T(150,186,16,'🌸')+T(90,226,12,'🐸');
  s+=R(20,168,150,14,'#c9a06a',4,SK);
  s+=g('window',R(18,22,88,64,'#d7f6ff',8,SK)+T(62,52,18,'🐉')+T(62,98,11,'远山',' fill="#f4efe4"'));
  s+=g('board',R(124,14,156,78,'#f4ffe8',6,' stroke="#2f8f4a" stroke-width="5"')+T(202,42,14,'🪷')+T(202,68,12,'荷塘',' fill="#1e5a32"'));
  s+=g('desk',R(24,160,130,28,'#d7b07a',6,SK)+R(36,166,50,14,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(78,174,3,'#5b4636'))+T(88,206,11,'木码头',' fill="#f4efe4"'));
  s+=g('box',R(186,158,74,48,'#e7c07a',6,SK)+(f.box_open?R(194,166,58,32,'#fff3d2',3):R(204,172,34,16,'#ffcf4d',3))+T(222,220,11,'竹篮',' fill="#f4efe4"'));
  s+=g('shelf',R(292,24,92,110,'#f3e2c4',6,SK)+P('M292 24h92l-16-16h-60z','#c0392b')+T(338,78,18,'🏮')+T(338,116,16,'🍵'));
  s+=g('door',C(336,210,40,'#f6e2b8',SK)+C(336,210,26,'#1d4e7a')+T(336,250,11,'月洞门',' fill="#f4efe4"'));
  s+=T(250,140,16,'🪁');
  return s;}
};
var r60={id:'r60',title:'黄昏营地',emoji:'🔥',sub:'语文 · 古诗',
 story:['古诗转盘挑战「黄昏营地」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','尽']],answer:'尽',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「黄昏营地」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'露营牌',box:[130,20,150,90],views:[
    {text:'墙上写着《赋得古原草送别》（唐·白居易），少了一个字：',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'木头凳',box:[30,150,120,50],views:[
    {text:'木头凳上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'帐篷',box:[310,160,70,120],views:[
    {text:'帐篷开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'背包架',box:[290,40,90,120],views:[
    {text:'背包架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'远林',box:[24,24,90,70],views:[
    {text:'松树黑黑的，营火噼啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《赋得古原草送别》，唐·白居易。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《赋得古原草送别》：野火烧不尽，春风吹又生。','缺的字是「尽」。','转对转盘，挑战成功。'],
 solution:[['code','box','尽']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#3d4d7a')+R(0,168,400,132,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=R(8,90,16,100,'#2c4a32')+C(16,80,24,'#1e4d32')+R(360,70,18,120,'#2c4a32')+C(370,64,28,'#1e4d32');
  s+=C(120,230,16,'#ff9a3c')+C(120,226,8,'#ffe08a')+R(116,230,8,16,'#6b442c')+T(150,236,14,'🔥');
  s+=g('window',R(20,24,86,64,'#1b3a4a',8,SK)+T(63,54,18,'🏕️')+T(63,100,11,'远林',' fill="#f4efe4"'));
  s+=g('board',R(124,16,156,80,'#f6e7c8',6,' stroke="#6b442c" stroke-width="5"')+T(202,46,14,'📌')+T(202,72,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(24,170,130,18,'#8a5a32',4,SK)+R(20,162,138,12,'#a67c52',4,SK)+(f.desk_open?R(70,166,30,10,'#e7c8a0',2):C(90,176,3,'#fff'))+T(88,204,11,'木头凳',' fill="#f4efe4"'));
  s+=g('box',R(184,158,76,50,'#5d7a8a',6,SK)+(f.box_open?R(192,166,60,34,'#d5e6ee',3):R(202,172,38,18,'#ffcf4d',3))+T(222,222,11,'冷藏盒',' fill="#f4efe4"'));
  s+=g('shelf',R(292,36,90,108,'#6b442c',4,SK)+T(336,78,18,'🎒')+T(336,118,16,'🥾'));
  s+=g('door',P('M316 270 L346 168 L376 270z','#f2a3a0',SK)+P('M346 190 v70','none',' stroke="#6b442c" stroke-width="2"')+T(346,248,11,'帐篷',' fill="#f4efe4"'));
  return s;}
};
var r61={id:'r61',title:'晚霞树屋',emoji:'🌇',sub:'英语 · 拼写',
 story:['英语拼写站「晚霞树屋」！','树枝台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'树枝台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树枝台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Which _____ are you going to join? (社团)\n（线索：Unit 2，名词，4 个字母，首字母 C；兴趣小组/社团。）',lock:{kind:'alpha',len:4,answer:'CLUB',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「晚霞树屋」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'树屋牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'树屋门',box:[310,160,70,120],views:[
    {text:'树屋门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'松鼠洞',box:[290,40,90,120],views:[
    {text:'松鼠洞上有英语单词卡片。'}
  ]},
  {id:'box',name:'宝箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'树窗',box:[24,24,90,70],views:[
    {text:'叶子沙沙响，绳子梯子晃一晃。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，4 个字母，首字母 C；兴趣小组/社团。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Which _____ are you going to join? (社团)','正确答案是 CLUB。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','CLUB']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#3d4d7a');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  s+=R(0,230,400,70,'#1e4630');
  s+=R(70,120,36,180,'#8a5a32',6)+C(40,70,28,'#3aaa4a')+C(120,50,36,'#2f9a40')+C(180,80,24,'#46b85a')+C(20,110,18,'#2f8a40');
  s+=R(150,150,200,16,'#c9a06a',3,SK);
  s+=P('M200 166 q40 20 20 70','none',' stroke="#d7b07a" stroke-width="4"');
  s+=g('window',R(168,96,70,48,'#fff6d0',6,SK)+T(203,120,16,'🪟')+T(203,154,11,'树窗',' fill="#f4efe4"'));
  s+=g('board',R(126,16,150,70,'#f6e7c4',6,' stroke="#6b442c" stroke-width="5"')+T(201,42,14,'🌳')+T(201,64,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(24,168,110,36,'#d7b07a',6,SK)+R(36,176,48,16,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(70,184,3,'#5b4636'))+T(78,218,11,'树枝台',' fill="#f4efe4"'));
  s+=g('box',R(186,164,70,46,'#c98b52',4,SK)+(f.box_open?R(194,170,54,32,'#f3ddb8',3):R(202,176,34,16,'#e2b56a',3))+T(220,224,11,'宝箱',' fill="#f4efe4"'));
  s+=g('shelf',R(286,40,70,90,'#6aaa3a',6,SK)+T(320,80,18,'🐿️')+T(320,116,14,'🍃'));
  s+=g('door',R(300,148,70,78,'#e7c48a',6,SK)+P('M300 148l35-22 35 22','#c0392b')+R(322,166,26,24,'#c9e7ff',3)+C(354,200,4,'#ffcf4d',SK)+T(334,242,11,'树屋门',' fill="#f4efe4"'));
  s+=T(40,270,18,'🐦');
  return s;}
};
var r62={id:'r62',title:'黄昏温室',emoji:'🌇',sub:'数学 · 挑战',
 story:['小黄走进了黄昏温室，门在身后轻轻关上。','育苗台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开温室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'温室门',box:[310,160,70,120],views:[
    {text:'温室门锁着，需要钥匙。',use:[{item:'key_r62',win:true,text:'钥匙一转，温室门开了！「黄昏温室」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'育苗台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'育苗台上有密码锁，旁边贴着纸条：',note:'【算一算】一辆车平均每小时行 48 千米，行了 1.5 小时。一共行了多少千米？',lock:{kind:'num',len:2,answer:'72',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r62'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'浇水牌',box:[130,20,150,90],views:[
    {text:'浇水牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'绿植架',box:[290,40,90,120],views:[
    {text:'绿植架上摆着一些小物件。'}
  ]},
  {id:'box',name:'花盆箱',box:[200,160,70,50],views:[
    {text:'花盆箱是空的。'}
  ]},
  {id:'window',name:'玻璃',box:[24,24,90,70],views:[
    {text:'玻璃上有小水珠，空气暖暖香香的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看育苗台上的纸条。','纸条上有一道数学题，算出答案就是密码。','路程 = 速度 × 时间。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点育苗台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点温室门。','先点钥匙，再点目标。']}
 ],
 explain:['路程 = 速度 × 时间 = 48 × 1.5 = 72','打开抽屉拿到钥匙。','用钥匙打开温室门，挑战成功。'],
 solution:[['code','desk','72'],['take','desk'],['use','door','key_r62']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#ffc98a');
  for(var i=0;i<8;i++)s+=R(i*50,0,48,300,'#fff',0,' opacity=".08"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*50)+'H400','none',' stroke="#fff" stroke-width="2" opacity=".25"');
  s+=R(0,220,400,80,'#c9a078');
  s+=T(40,190,20,'🌿')+T(80,200,18,'🌵')+T(250,188,18,'🌸');
  s+=g('window',R(16,18,96,78,'#e9fff2',6,' stroke="#9ad7b2" stroke-width="4"')+T(64,56,20,'🪴')+T(64,108,11,'玻璃',' fill="#3e3428"'));
  s+=g('board',R(124,14,160,90,'#f4fff4',6,' stroke="#3d9a62" stroke-width="5"')+T(204,44,14,'💧')+T(204,70,12,'浇水时间',' fill="#1e5a32"')+T(204,90,10,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(22,154,132,50,'#cfe3c4',6,SK)+R(34,164,70,26,f.desk_open?'#fff':'#b7d3a8',4)+(f.desk_open?'':C(90,178,4,'#3d6b4a'))+T(88,218,11,'育苗台',' fill="#3e3428"')+T(138,172,14,'🌱'));
  s+=g('box',R(184,160,76,50,'#e7b15a',6,SK)+(f.box_open?R(192,168,60,34,'#fff3d0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'花盆箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,22,100,130,'#8fbf8a',6,SK)+T(336,60,16,'🌿')+T(336,98,16,'🌺')+T(336,136,14,'🧴'));
  s+=g('door',R(300,148,72,128,'#d8f3e4',6,' stroke="#3d9a62" stroke-width="4"')+P('M336 148v128','none',' stroke="#3d9a62" stroke-width="3"')+C(354,214,5,'#f2c14a',SK)+T(336,252,11,'温室门',' fill="#3e3428"'));
  return s;}
};
var r63={id:'r63',title:'傍晚小雨',emoji:'🌃',sub:'数学 · 闯关',
 story:['欢迎来到「傍晚小雨」挑战站！','候车椅上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'候车椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'候车椅上的挑战题：',note:'【算一算】一件原价 120 元的外套打 7 折。应付多少元？',lock:{kind:'num',len:2,answer:'84',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「傍晚小雨」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'小店',box:[310,160,70,120],views:[
    {text:'小店开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'雨天牌',box:[130,20,150,90],views:[
    {text:'雨天牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'报摊',box:[290,40,90,120],views:[
    {text:'报摊上有奖杯模型。'}
  ]},
  {id:'box',name:'邮筒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'雨丝斜斜的，水洼里倒映着屋檐。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开候车椅上的题。','仔细看【算一算】，多步时先算哪一步？','打 7 折就是用原价乘 0.7。']}
 ],
 explain:['120 × 0.7 = 84','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','84']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#3d4d7a')+R(0,200,400,100,'#1e4630');
  for(var i=0;i<28;i++)s+=P('M'+((i*47)%400)+' '+((i*29)%180)+' l-6 16','none',' stroke="#d5e6f5" stroke-width="2" opacity=".7"');
  s+=P('M40 250c30-16 50-8 70 0s40 8 60-4','none',' stroke="#9ec4de" stroke-width="6" opacity=".45"');
  s+=R(300,120,8,90,'#5d6d7e')+C(304,112,10,'#ffe08a')+C(304,112,20,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,20,96,74,'#c5d8e8',6,SK)+T(64,56,20,'☂️')+T(64,106,11,'橱窗',' fill="#f4efe4"'));
  s+=g('board',R(124,16,156,84,'#fffdf8',6,' stroke="#7f8c9d" stroke-width="5"')+T(202,46,14,'☔')+T(202,72,12,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(24,156,126,42,'#b7c4ce',6,SK)+R(36,164,64,22,f.desk_open?'#eef5f8':'#8fa0ae',4)+(f.desk_open?'':C(86,176,4,'#fff'))+T(86,214,11,'候车椅',' fill="#f4efe4"'));
  s+=g('box',R(184,160,74,50,'#e74c3c',6,SK)+(f.box_open?R(192,168,58,34,'#f5b7b1',3):R(202,174,34,18,'#ffcf4d',3))+T(220,224,11,'邮筒',' fill="#f4efe4"'));
  s+=g('shelf',R(286,28,96,112,'#5d6d7e',6,SK)+T(334,70,16,'📰')+T(334,112,16,'☂️'));
  s+=g('door',R(308,148,74,120,'#f2d16b',6,SK)+P('M302 148h86l-10 16H312z','#e67e22')+R(324,176,42,40,'#fff6d8',3)+T(344,250,11,'小店',' fill="#f4efe4"'));
  s+=T(40,270,18,'🐸');
  return s;}
};
var r64={id:'r64',title:'黄昏菜场',emoji:'🏮',sub:'数学 · 助人',
 story:['你走进黄昏菜场，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开秤台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r64',take:['gift_r64'],win:true,text:'小花猫开心地收下了！「黄昏菜场」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'秤台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'秤台抽屉锁着，纸条上有题：',note:'【算一算】笔记本每本 5.4 元，买 4 本；橡皮每块 1.5 元，买 6 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'30.6',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r64'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'菜价牌',box:[130,20,150,90],views:[
    {text:'菜价牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'货摊',box:[290,40,90,120],views:[
    {text:'货摊上摆着🐱的照片。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'摊位',box:[24,24,90,70],views:[
    {text:'吆喝声热热闹闹，青菜上还带着水珠。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开秤台的密码。','看纸条上的题，可能要算两步。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点秤台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['5.4×4+1.5×6=30.6','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','30.6'],['take','desk'],['use','door','gift_r64']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f0d0b0')+R(0,214,400,86,'#c9a078');
  for(var i=0;i<8;i++)s+=R(i*50,0,50,46,i%2?'#e74c3c':'#f5d76e');
  s+=R(0,46,400,10,'#f7f1e4');
  s+=g('window',R(16,64,96,70,'#fff8e8',6,SK)+T(64,98,20,'🥬')+T(64,146,11,'摊位',' fill="#3e3428"'));
  s+=g('board',R(124,62,160,84,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(204,92,13,'今日菜价',' fill="#c0392b"')+T(204,116,11,'青菜 3.5',' fill="#5b4636"')+T(204,134,11,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(22,156,130,50,'#e8d3b0',6,SK)+R(40,148,40,16,'#f7f1e4',3)+R(34,166,70,26,f.desk_open?'#fff':'#d9c4a4',4)+(f.desk_open?'':C(88,180,4,'#5b4636'))+T(88,220,11,'秤台',' fill="#3e3428"'));
  s+=g('box',R(184,160,76,50,'#c98b52',4,SK)+(f.box_open?R(192,168,60,34,'#f3ddb8',3):R(202,174,38,18,'#e2b56a',3))+T(222,224,11,'菜筐',' fill="#3e3428"'));
  s+=g('shelf',R(286,64,100,120,'#b9793f',6,SK)+T(336,100,18,'🐟')+T(336,140,18,'🍎')+T(336,172,14,'🧄'));
  s+=g('door',R(304,150,72,124,'#27ae60',6,SK)+T(340,200,20,'🚪')+T(340,248,11,'菜场口',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🥕');
  return s;}
};
var r65={id:'r65',title:'晚霞雪屋',emoji:'🌅',sub:'数学 · 益智',
 story:['「晚霞雪屋」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r65',take:['combo_r65'],win:true,text:'放上去——成功！「晚霞雪屋」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'雪凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'雪凳锁着：',note:'【算一算】循环小数：计算 1÷7，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'6',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r65'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'木柴堆上有材料 B。',take:{give:['partB_r65'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'雪地牌',box:[130,20,150,90],views:[
    {text:'雪地牌：材料 A + 材料 B = 成品。顺便一题：禾字去了撇（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'雪橇',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'雪窗',box:[24,24,90,70],views:[
    {text:'雪软软的，脚印一串串通向木屋。'}
  ]}
 ],
 combos:[{a:'partA_r65',b:'partB_r65',give:['combo_r65'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开雪凳。','算纸条上的题。','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看木柴堆。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['1÷7=0.142857…，循环节是 142857，有 6 位。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','6'],['take','desk'],['take','shelf'],['combine','partA_r65','partB_r65'],['use','door','combo_r65']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#3d4d7a')+R(0,168,400,132,'#1e4630');
  
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'#3d4d7a');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');
  for(var i=0;i<18;i++)s+=C((i*73)%400,(i*41)%150,i%3?1.4:2.2,'#fff',' opacity=".85"');
  s+=R(250,150,70,70,'#f7fbff',8,SK)+C(268,168,6,'#5b4636')+C(292,168,6,'#5b4636')+P('M272 188 q10 8 20 0','none',' stroke="#e07a7a" stroke-width="2"')+R(282,188,4,22,'#f0a0a0');
  s+=R(20,120,14,70,'#2f6b4a')+P('M8 120 l20-28 20 28z','#eef8f2')+R(40,100,12,90,'#2f6b4a')+P('M28 100 l18-24 18 24z','#eef8f2');
  s+=g('window',R(18,22,86,64,'#d6ecff',8,SK)+T(61,52,18,'❄️')+T(61,98,11,'雪窗',' fill="#f4efe4"'));
  s+=g('board',R(120,16,150,78,'#fff',6,' stroke="#9ec4de" stroke-width="5"')+T(195,44,14,'☃️')+T(195,70,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',R(24,160,120,36,'#f7fbff',8,' stroke="#9ec4de" stroke-width="3"')+R(40,168,50,16,f.desk_open?'#fff6e0':'#e4eef6',4)+(f.desk_open?'':C(80,176,4,'#7f8c9d'))+T(84,212,11,'雪凳',' fill="#f4efe4"'));
  s+=g('box',R(184,158,74,48,'#e74c3c',6,SK)+(f.box_open?R(192,166,58,32,'#f5d0cc',3):R(202,172,34,16,'#ffcf4d',3))+T(220,220,11,'雪橇',' fill="#f4efe4"'));
  s+=g('shelf',R(292,36,88,100,'#8a5a32',4,SK)+R(300,48,14,70,'#6b442c')+R(326,42,14,78,'#6b442c')+R(352,52,14,64,'#6b442c')+T(334,90,12,'🪵'));
  s+=g('door',R(300,148,74,120,'#f2e2c8',6,SK)+P('M300 148l37-26 37 26','#c0392b')+R(322,176,30,28,'#ffe08a',3)+C(354,220,5,'#ffcf4d',SK)+T(336,248,11,'木屋',' fill="#f4efe4"'));
  return s;}
};
var r66={id:'r66',title:'清晨小房间',emoji:'🛋️',sub:'数学 · 英语',
 story:['双锁挑战站「清晨小房间」！','先过茶几，再过玩具箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小数四则：12.5 + 0.08 = ?',lock:{kind:'num',len:5,dot:true,answer:'12.58',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'玩具箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'玩具箱上还有第二关：',note:'【英语题】I want to join the _____ club. (科学)\n（线索：Unit 2，形容词性名词，7 个字母，首字母 S；研究自然的学科。）',lock:{kind:'alpha',len:7,answer:'SCIENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「清晨小房间」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'房门',box:[310,160,70,120],views:[
    {text:'房门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'全家福',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'电视柜',box:[290,40,90,120],views:[
    {text:'电视柜上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗帘',box:[24,24,90,70],views:[
    {text:'沙发软软的，台灯亮着暖光。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，形容词性名词，7 个字母，首字母 S；研究自然的学科。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['12.5 + 0.08 = 12.58。小数点对齐再相加。','I want to join the _____ club. (科学) → SCIENCE','两关都对，挑战成功。'],
 solution:[['code','desk','12.58'],['code','box','SCIENCE']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f7f3ea')+R(0,214,400,86,'#e6d8c4');
  s+=P('M40 286c40-36 120-36 160 0s120 28 160 0v14H40z','#e7a0a8',' opacity=".9"');
  s+=R(118,232,150,28,'#f4c7b8',16,SK)+R(126,220,134,22,'#ffe1d6',12,SK);
  s+=R(250,196,16,70,'#c98b52',4)+C(258,188,10,'#ffe08a',' opacity=".9"')+C(258,188,22,'#ffe08a',' opacity=".25"');
  s+=g('window',R(22,24,96,74,'#d9ecff',6,SK)+R(22,24,18,74,'#f7d0d8')+R(100,24,18,74,'#f7d0d8')+P('M70 24v74M22 60h96','none',' stroke="#fff" stroke-width="2" opacity=".7"')+T(70,108,11,'窗帘',' fill="#3e3428"'));
  s+=g('board',R(132,18,150,86,'#fffaf2',6,' stroke="#d9a07a" stroke-width="5"')+R(148,32,52,40,'#f6d2b8',4)+C(166,48,8,'#f3b6a0')+C(184,50,8,'#f3b6a0')+T(206,86,12,'全家福',' fill="#5b4636"'));
  s+=g('desk',R(28,150,128,36,'#e7c39a',8,SK)+R(40,158,64,16,f.desk_open?'#fff6e0':'#d7b088',4)+(f.desk_open?T(72,168,12,'🍪'):C(96,166,4,'#5b4636'))+T(92,202,11,'茶几',' fill="#3e3428"')+T(140,168,14,'🍵'));
  s+=g('box',R(188,162,76,50,'#f0a06a',8,SK)+(f.box_open?R(196,170,60,34,'#ffe6c8',3):R(206,176,40,20,'#ffcf4d',3))+T(226,226,11,'玩具箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,28,100,118,'#d7c2a4',6,SK)+R(296,78,80,46,'#243044',4)+R(302,84,68,28,'#7ec8ff',2)+T(336,70,16,'📺')+T(336,132,14,'🪴'));
  s+=g('door',R(304,156,72,124,'#e7c9a2',6,SK)+C(358,214,5,'#ffcf4d',SK)+R(322,170,36,28,'#c9e7ff',3)+T(340,250,11,'房门',' fill="#3e3428"'));
  s+=T(36,270,20,'🛋️');
  return s;}
};
var r67={id:'r67',title:'薄雾卧室',emoji:'🛏️',sub:'数学 · 通行证',
 story:['「薄雾卧室」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r67',take:['combo_r67'],win:true,text:'嘀——通过！「薄雾卧室」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜锁着：',note:'【算一算】长方形花坛长 15 米、宽 9 米。四周铺宽 2 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:3,answer:'112',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r67'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'衣柜',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'衣柜上有一枚徽章。',take:{give:['tool_r67'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'梦的清单',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'收纳篮',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'小窗',box:[24,24,90,70],views:[
    {text:'枕头鼓鼓的，故事书摊在床上。'}
  ]}
 ],
 combos:[{a:'scrap_r67',b:'tool_r67',give:['combo_r67'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开床头柜。','算题，注意多步运算。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看衣柜。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['外围 (15+4)×(9+4) 减去花坛 15×9 = 112','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','112'],['take','desk'],['take','shelf'],['combine','scrap_r67','tool_r67'],['use','door','combo_r67']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f7f3ea')+R(0,200,400,100,'#e6d8c4');
  s+=R(70,214,210,64,'#f7f1ff',10,SK)+R(78,206,150,22,'#ffe9f3',8,SK)+R(86,198,36,16,'#fff',6)+R(130,198,36,16,'#fff',6);
  s+=R(250,168,10,90,'#c9b8a0')+C(255,160,9,'#ffe08a')+C(255,160,18,'#ffe08a',' opacity=".3"');
  s+=g('window',R(22,22,96,74,'#d9ecff',8,SK)+C(78,52,12,'#fff6c8')+C(84,48,9,'#d9ecff')+T(70,108,11,'小窗',' fill="#3e3428"'));
  s+=g('board',R(132,16,148,88,'#fff5fb',6,' stroke="#e7b6d4" stroke-width="5"')+T(206,48,16,'🌙')+T(206,76,12,'梦的清单',' fill="#7a4e6a"'));
  s+=g('desk',R(28,150,120,46,'#e6d3ef',6,SK)+R(40,158,52,24,f.desk_open?'#fff':'#d7c0ea',4)+(f.desk_open?'':C(78,170,4,'#5b4636'))+T(88,210,11,'床头柜',' fill="#3e3428"')+T(128,168,14,'🧸'));
  s+=g('box',R(188,160,74,50,'#f2b5c8',6,SK)+(f.box_open?R(196,168,58,34,'#ffe4ee',3):R(206,176,36,18,'#ffcf4d',3))+T(224,224,11,'收纳篮',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,126,'#cbb6e6',6,SK)+R(296,48,80,8,'#a88bc4',2)+R(296,88,80,8,'#a88bc4',2)+T(336,70,16,'👕')+T(336,112,16,'📚'));
  s+=g('door',R(300,156,72,124,'#d7c4ef',6,SK)+C(354,216,5,'#ffd34d',SK)+T(336,118,14,'⭐')+T(336,248,11,'卧室门',' fill="#3e3428"'));
  s+=T(40,276,18,'🛏️')+T(200,276,16,'🧦');
  return s;}
};
var r68={id:'r68',title:'清晨公园',emoji:'🌳',sub:'语文 · 古诗',
 story:['古诗转盘挑战「清晨公园」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「清晨公园」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'游园地图',box:[130,20,150,90],views:[
    {text:'墙上写着《望庐山瀑布》（唐·李白），少了一个字：',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {text:'长椅上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'售货亭',box:[290,40,90,120],views:[
    {text:'售货亭上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'大树',box:[24,24,90,70],views:[
    {text:'鸽子在小路边散步，风吹得树叶沙沙响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《望庐山瀑布》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《望庐山瀑布》：飞流直下三千尺，疑是银河落九天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#e7f6ff')+R(0,168,400,132,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=P('M-10 250C80 210 140 250 210 220S320 250 410 214V300H-10z','#c9e7b0',' opacity=".55"');
  s+=P('M150 300C170 230 190 210 210 168C230 214 250 236 270 300z','#e7d7b0');
  s+=C(46,150,28,'#3e9a4a')+R(40,168,12,48,'#8a5a32')+C(340,120,26,'#2f8a40')+R(334,140,12,40,'#8a5a32');
  s+=T(24,196,16,'🌸')+T(250,188,14,'🌼')+T(120,250,14,'🐦');
  s+=g('window',R(18,78,90,70,'#b7e39a',8,SK)+T(63,112,22,'🌳')+T(63,156,11,'大树',' fill="#3e3428"'));
  s+=g('board',R(130,18,156,84,'#f4fbe8',6,' stroke="#5f8f3a" stroke-width="5"')+T(208,48,16,'🗺️')+T(208,76,12,'游园地图',' fill="#2d5a1e"'));
  s+=g('desk',R(28,168,124,28,'#a67c52',6,SK)+R(24,160,132,14,'#c49a62',6,SK)+(f.desk_open?R(70,172,40,16,'#e7c99a',3):C(90,182,4,'#5b4636'))+T(90,214,11,'长椅',' fill="#3e3428"'));
  s+=g('box',R(188,164,76,48,'#e7b15a',6,SK)+(f.box_open?R(196,172,60,32,'#fff1cc',3):R(206,178,36,18,'#ffcf4d',3))+T(226,226,11,'野餐篮',' fill="#3e3428"'));
  s+=g('shelf',R(292,36,92,110,'#f0d78c',6,SK)+P('M292 36h92l-10-16h-72z','#e25b4a')+T(338,90,18,'🍦')+T(338,124,14,'🎈'));
  s+=g('door',R(308,150,74,128,'#8d6a3f',6,SK)+R(316,162,26,100,'#6aaa3a',4)+R(348,162,26,100,'#6aaa3a',4)+C(362,214,5,'#ffcf4d',SK)+T(344,292,11,'园门',' fill="#3e3428"'));
  s+=T(40,276,20,'🌳');
  return s;}
};
var r69={id:'r69',title:'晨露花园',emoji:'🌷',sub:'英语 · 拼写',
 story:['英语拼写站「晨露花园」！','小黄看到英文卡片：“用大写字母拼出来！”','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Any _____? (有什么建议吗？)\n（线索：Unit 2，不可数名词，6 个字母，首字母 A；别人给你的建议。）',lock:{kind:'alpha',len:6,answer:'ADVICE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「晨露花园」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'花名牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'花拱门',box:[310,160,70,120],views:[
    {text:'花拱门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有英语单词卡片。'}
  ]},
  {id:'box',name:'种子盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'花窗',box:[24,24,90,70],views:[
    {text:'蜜蜂在花心里嗡嗡，花瓣上还有露水。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，不可数名词，6 个字母，首字母 A；别人给你的建议。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Any _____? (有什么建议吗？)','正确答案是 ADVICE。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','ADVICE']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#e7f6ff')+R(0,150,400,150,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  for(var i=0;i<5;i++)s+=R(18+i*36,232,30,42,'#6b3e28',4);
  s+=T(30,228,16,'🌷')+T(70,224,16,'🌻')+T(110,230,16,'🌹')+T(150,222,16,'🌼')+T(190,228,14,'🌺');
  s+=C(250,210,16,'#8fd4f2',' stroke="#5b4636" stroke-width="2"')+R(246,226,8,20,'#9aa7b2');
  s+=g('window',R(20,22,92,72,'#d9f5c8',8,SK)+T(66,58,22,'🐝')+T(66,104,11,'花窗',' fill="#3e3428"'));
  s+=g('board',R(128,16,158,86,'#fffdf4',6,' stroke="#7dae52" stroke-width="5"')+T(206,46,14,'🏷️')+T(206,74,12,'今日花名',' fill="#2d5a1e"'));
  s+=g('desk',R(28,156,126,40,'#c48b62',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#a96b42',4)+(f.desk_open?'':C(92,174,4,'#fff'))+T(90,212,11,'花坛沿',' fill="#3e3428"'));
  s+=g('box',R(186,160,78,50,'#f0d36a',6,SK)+(f.box_open?R(194,168,62,34,'#fff6d0',3):R(204,174,40,18,'#e7b84a',3))+T(224,224,11,'种子盒',' fill="#3e3428"'));
  s+=g('shelf',R(286,30,98,116,'#8fbf62',6,SK)+T(336,70,18,'🌷')+T(336,108,18,'🪴')+T(336,140,14,'🎀'));
  s+=g('door',P('M300 168 Q336 120 372 168V280H300z','#f2a3c0',SK)+R(330,200,12,40,'#fff',0,' opacity=".45"')+T(336,250,11,'花拱门',' fill="#3e3428"'));
  s+=T(360,270,18,'🦋');
  return s;}
};
var r70={id:'r70',title:'晨雾过河',emoji:'🛶',sub:'数学 · 挑战',
 story:['你来到了晨雾过河。','岸边石桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开渡船，挑战就成功啦！'],
 objects:[
  {id:'door',name:'渡船',box:[310,160,70,120],views:[
    {text:'渡船锁着，需要钥匙。',use:[{item:'key_r70',win:true,text:'钥匙一转，渡船开了！「晨雾过河」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'岸边石桌上有密码锁，旁边贴着纸条：',note:'【算一算】循环小数：计算 2÷3，把循环节按顺序连起来是多少？',lock:{kind:'num',len:1,answer:'6',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r70'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'渡口牌',box:[130,20,150,90],views:[
    {text:'渡口牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'竹排',box:[290,40,90,120],views:[
    {text:'竹排上摆着一些小物件。'}
  ]},
  {id:'box',name:'木箱',box:[200,160,70,50],views:[
    {text:'木箱是空的。'}
  ]},
  {id:'window',name:'河柳',box:[24,24,90,70],views:[
    {text:'河水哗哗响，石头一颗颗露在水面上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看岸边石桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点岸边石桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点渡船。','先点钥匙，再点目标。']}
 ],
 explain:['2÷3=0.6666…。循环节连起来是 6。','打开抽屉拿到钥匙。','用钥匙打开渡船，挑战成功。'],
 solution:[['code','desk','6'],['take','desk'],['use','door','key_r70']],
 art:function(f){var s='';
  s+=R(0,0,400,118,'#e7f6ff')+R(0,118,400,28,'#7dce6a')+R(0,146,400,78,'#b7dff5')+R(0,220,400,80,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  for(var i=0;i<7;i++)s+=P('M'+(i*58)+' 168 q16 8 32 0 t32 0','none',' stroke="#e9f7ff" stroke-width="2" opacity=".7"');
  s+=C(78,176,12,'#e4d8c4',SK)+C(124,196,14,'#d9cdb8',SK)+C(172,174,11,'#efe4d2',SK)+C(220,198,13,'#d5c8b0',SK);
  s+=T(28,132,18,'🌿')+T(250,128,16,'🌿')+T(36,268,16,'🦆');
  s+=g('window',R(18,28,90,70,'#9ed98a',8,SK)+P('M36 96 C50 30 90 30 96 90','#2f8f45')+T(64,108,11,'河柳',' fill="#3e3428"'));
  s+=g('board',R(128,16,156,80,'#f6e7c4',6,' stroke="#8a5a2b" stroke-width="5"')+T(206,44,16,'🛶')+T(206,72,12,'小心过河',' fill="#5b4636"'));
  s+=g('desk',R(26,168,124,36,'#cfc6b6',10,SK)+R(40,176,60,18,f.desk_open?'#fff6e0':'#b7b0a2',4)+(f.desk_open?'':C(86,186,4,'#5b4636'))+T(88,220,11,'岸边石桌',' fill="#3e3428"'));
  s+=g('box',R(186,164,76,48,'#c98b52',4,SK)+(f.box_open?R(194,172,60,32,'#f0d2a4',3):R(204,178,36,16,'#e2b56a',3))+T(224,226,11,'木箱',' fill="#3e3428"'));
  s+=g('shelf',R(292,30,92,108,'#6aaa3a',3)+R(304,40,8,90,'#d7b07a')+R(330,34,8,98,'#d7b07a')+R(356,44,8,82,'#d7b07a')+T(334,78,16,'🎋'));
  s+=g('door',P('M306 250 Q336 200 370 250','#e8d7b0')+R(308,188,60,62,'#f4e2c0',8,SK)+T(338,214,20,'⛵')+T(338,258,11,'渡船',' fill="#3e3428"'));
  s+=T(360,276,16,'🐟');
  return s;}
};
var r71={id:'r71',title:'薄雾石桥',emoji:'🌉',sub:'数学 · 闯关',
 story:['欢迎来到「薄雾石桥」挑战站！','桥头石凳上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳上的挑战题：',note:'【算一算】小数四则：10.5 − 1.08 = ?',lock:{kind:'num',len:4,dot:true,answer:'9.42',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「薄雾石桥」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'桥门',box:[310,160,70,120],views:[
    {text:'桥门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'桥名牌',box:[130,20,150,90],views:[
    {text:'桥名牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'灯笼架',box:[290,40,90,120],views:[
    {text:'灯笼架上有奖杯模型。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'桥柳',box:[24,24,90,70],views:[
    {text:'桥洞下面水声轻轻的，栏杆摸上去凉凉的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开桥头石凳上的题。','仔细看【算一算】，多步时先算哪一步？','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']}
 ],
 explain:['10.5 − 1.08 = 9.42。小数点对齐，位数少的补 0。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','9.42']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#e7f6ff')+R(0,168,400,50,'#b7dff5')+R(0,214,400,86,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=P('M20 214 Q120 120 200 214 Q280 120 390 214','#d7d0c4')+P('M20 214 Q120 150 200 214 Q280 150 390 214V250H20z','#c3b8a4',SK);
  s+=R(30,150,10,64,'#8d6b45')+R(360,150,10,64,'#8d6b45')+C(35,146,6,'#ffb84a')+C(365,146,6,'#ffb84a');
  for(var i=0;i<6;i++)s+=R(70+i*42,158,4,28,'#efe6d4');
  s+=g('window',R(18,22,88,64,'#bfe6c8',8,SK)+T(62,54,20,'🌿')+T(62,98,11,'桥柳',' fill="#3e3428"'));
  s+=g('board',R(128,14,150,78,'#fff8e4',6,' stroke="#8a5a2b" stroke-width="5"')+T(203,42,14,'🌉')+T(203,68,12,'石拱桥',' fill="#5b4636"'));
  s+=g('desk',R(28,156,120,36,'#d2c6b2',8,SK)+R(40,164,56,16,f.desk_open?'#fff6e0':'#b7aa96',4)+(f.desk_open?'':C(84,172,4,'#5b4636'))+T(88,208,11,'桥头石凳',' fill="#3e3428"'));
  s+=g('box',R(186,160,74,48,'#c98b52',4,SK)+(f.box_open?R(194,168,58,32,'#f3ddb8',3):R(204,174,34,16,'#e2b56a',3))+T(222,222,11,'竹篮',' fill="#3e3428"'));
  s+=g('shelf',R(292,28,90,100,'#e7d7b8',6,SK)+T(336,70,18,'🏮')+T(336,110,16,'🎐'));
  s+=g('door',R(308,156,72,120,'#b08968',6,SK)+P('M308 156l36-22 36 22','#8d6a43')+C(362,214,5,'#ffcf4d',SK)+T(344,250,11,'桥门',' fill="#3e3428"'));
  return s;}
};
var r72={id:'r72',title:'早读教室',emoji:'🏫',sub:'数学 · 助人',
 story:['你走进早读教室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开讲台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r72',take:['gift_r72'],win:true,text:'小花猫开心地收下了！「早读教室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台抽屉锁着，纸条上有题：',note:'【算一算】长方形桌面长 1.5 米、宽 1.5 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'225',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r72'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗',box:[24,24,90,70],views:[
    {text:'黑板上还有没擦掉的算式，粉笔灰轻轻飘。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开讲台的密码。','看纸条上的题，可能要算两步。','先把米换成分米，再相乘。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点讲台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['先换成 15 分米 × 15 分米 = 225 平方分米','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','225'],['take','desk'],['use','door','gift_r72']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f7f3ea')+R(0,214,400,86,'#e6d8c4');
  for(var i=0;i<7;i++)s+=R(i*58,250,48,28,'#f4e2c4',4,' stroke="#d7c09a" stroke-width="1"');
  s+=R(18,214,364,8,'#e7d3a8');
  s+=g('window',R(16,18,100,78,'#d9ecff',6,SK)+P('M66 18v78M16 56h100','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'窗',' fill="#3e3428"'));
  s+=g('board',R(126,12,168,104,'#1e8449',4,' stroke="#a86b38" stroke-width="6"')+T(210,42,13,'今天的课',' fill="#fff"')+T(210,66,12,'认真审题',' fill="#d5f5e3"')+T(210,90,11,'1.2 × 0.5',' fill="#abebc6"'));
  s+=g('desk',R(24,150,132,52,'#c98b52',6,SK)+R(36,160,78,28,f.desk_open?'#f6e0c0':'#a86b38',4)+(f.desk_open?T(74,176,12,'📘'):C(100,174,4,'#fff'))+T(90,216,11,'讲台',' fill="#3e3428"')+T(140,166,14,'✏️'));
  s+=g('box',R(186,160,76,50,'#f5c16a',6,SK)+(f.box_open?R(194,168,60,34,'#fff3d6',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'作业盒',' fill="#3e3428"'));
  s+=g('shelf',R(286,22,100,132,'#b9793f',6,SK)+R(296,52,80,8,'#8a5428',2)+R(296,92,80,8,'#8a5428',2)+T(336,74,14,'📕')+T(336,114,14,'🌍'));
  s+=g('door',R(304,150,72,126,'#8fb6e8',6,SK)+R(314,162,52,36,'#d6ebff',4)+C(358,220,5,'#ffcf4d',SK)+T(340,252,11,'教室门',' fill="#3e3428"'));
  s+=T(48,276,18,'🏫');
  return s;}
};
var r73={id:'r73',title:'清晨走廊',emoji:'🏫',sub:'数学 · 益智',
 story:['「清晨走廊」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r73',take:['combo_r73'],win:true,text:'放上去——成功！「清晨走廊」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'休息椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'休息椅锁着：',note:'【算一算】循环小数：0.6666…（循环节是 6）化成最简分数，分母是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r73'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'储物柜',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'储物柜上有材料 B。',take:{give:['partB_r73'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'布告栏',box:[130,20,150,90],views:[
    {text:'布告栏：材料 A + 材料 B = 成品。顺便一题：一口咬掉牛尾巴（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'失物箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'走廊窗',box:[24,24,90,70],views:[
    {text:'地砖被踩得发亮，布告栏上别满了纸条。'}
  ]}
 ],
 combos:[{a:'partA_r73',b:'partB_r73',give:['combo_r73'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开休息椅。','算纸条上的题。','纯循环小数：循环几位，分母就是几个 9。一位用 9，两位用 99，写好再约分，约完的分母才是答案。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看储物柜。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['0.6666… 的循环节是 6，写成 6/9，约分得 2/3，分母是 3。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','3'],['take','desk'],['take','shelf'],['combine','partA_r73','partB_r73'],['use','door','combo_r73']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f7f3ea');
  for(var i=0;i<8;i++)s+=R(0,214+i*11,400,11,i%2?'#e6d8c4':'#e7dcc8');
  s+=P('M120 214 L200 120 L280 214','none',' stroke="#fff" stroke-width="8" opacity=".25"');
  s+=g('window',R(18,20,96,74,'#d9ecff',6,SK)+P('M66 20v74M18 56h96','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'走廊窗',' fill="#3e3428"'));
  s+=g('board',R(126,16,160,96,'#fffdf6',4,' stroke="#c98b52" stroke-width="6"')+T(206,46,14,'📌')+T(206,72,12,'失物招领',' fill="#5b4636"')+T(206,94,10,'看看告示',' fill="#888"'));
  s+=g('desk',R(28,156,128,40,'#d8c4a4',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#c8b090',4)+(f.desk_open?'':C(96,174,4,'#5b4636'))+T(92,212,11,'休息椅',' fill="#3e3428"'));
  s+=g('box',R(186,160,76,50,'#e39b4a',6,SK)+(f.box_open?R(194,168,60,34,'#ffe6c2',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'失物箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,24,100,124,'#6f8fbe',6,SK)+R(296,40,24,48,'#f4f7fb',3)+R(324,40,24,48,'#f4f7fb',3)+R(352,40,24,48,'#f4f7fb',3)+T(336,112,16,'🎒'));
  s+=g('door',R(300,150,72,126,'#d98a3a',6,SK)+R(312,164,48,40,'#f8e2c0',4)+C(354,220,5,'#5b4636',SK)+T(336,252,11,'楼梯口',' fill="#3e3428"'));
  s+=T(40,276,18,'🪴');
  return s;}
};
var r74={id:'r74',title:'晨雾森林',emoji:'🌲',sub:'数学 · 英语',
 story:['双锁挑战站「晨雾森林」！','先过树桩，再过小木箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'树桩',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小数四则：3.5 × 0.4 = ?',lock:{kind:'num',len:3,dot:true,answer:'1.4',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'小木箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'小木箱上还有第二关：',note:'【英语题】You can try new _____. (事物)\n（线索：Unit 2，复数名词，6 个字母，首字母 T；各种新事物。）',lock:{kind:'alpha',len:6,answer:'THINGS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「晨雾森林」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'小木屋',box:[310,160,70,120],views:[
    {text:'小木屋只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'指路牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {text:'木柴堆上放着完成印章模型。'}
  ]},
  {id:'window',name:'树洞',box:[24,24,90,70],views:[
    {text:'阳光从叶子缝里漏下来，蘑菇一圈一圈。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先按整数相乘，再点小数点：两个因数一共有几位小数，积就有几位小数。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，复数名词，6 个字母，首字母 T；各种新事物。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['3.5 × 0.4 = 1.4。先按整数乘，再点上小数点。','You can try new _____. (事物) → THINGS','两关都对，挑战成功。'],
 solution:[['code','desk','1.4'],['code','box','THINGS']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e8f6ff')+R(0,0,400,70,'#1e4d32',0,' opacity=".35"');
  s+=R(0,210,400,90,'#d7efc8');
  s+=P('M180 300 C200 200 210 160 220 120 C230 170 250 220 270 300z','#c8ad84');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=R(8,40,18,180,'#6b442c')+R(360,30,22,190,'#6b442c')+C(18,36,26,'#1f6b3a')+C(372,28,30,'#1f6b3a');
  s+=C(40,248,8,'#e25b4a')+C(70,260,6,'#f0d36a')+C(250,252,7,'#e8e0d0');
  s+=g('window',R(24,70,80,70,'#2f8f45',8,SK)+T(64,104,20,'🌲')+T(64,150,11,'树洞',' fill="#3e3428"'));
  s+=g('board',R(128,20,150,82,'#e7d3a4',6,' stroke="#6b442c" stroke-width="5"')+T(203,50,14,'🪵')+T(203,76,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',C(90,176,34,'#a67c52',SK)+R(40,168,50,22,f.desk_open?'#e7c8a0':'#8a5a32',4)+(f.desk_open?'':C(78,178,4,'#fff'))+T(90,214,11,'树桩',' fill="#3e3428"'));
  s+=g('box',R(186,160,74,50,'#b8894a',6,SK)+(f.box_open?R(194,168,58,34,'#f0ddb4',3):R(204,174,36,18,'#e2b56a',3))+T(222,224,11,'小木箱',' fill="#3e3428"'));
  s+=g('shelf',R(292,36,90,110,'#8a5a32',4,SK)+R(300,50,16,80,'#6b442c')+R(330,44,16,90,'#6b442c')+R(356,56,16,74,'#6b442c')+T(336,100,14,'🍄'));
  s+=g('door',R(304,150,74,126,'#c49a62',6,SK)+P('M304 150l37-28 37 28','#8d4a3a')+R(326,176,30,28,'#f6e2a8',3)+C(358,220,5,'#ffcf4d',SK)+T(340,252,11,'小木屋',' fill="#3e3428"'));
  return s;}
};
var r75={id:'r75',title:'晨光沙滩',emoji:'🏖️',sub:'数学 · 通行证',
 story:['「晨光沙滩」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r75',take:['combo_r75'],win:true,text:'嘀——通过！「晨光沙滩」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'沙桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'沙桌锁着：',note:'【算一算】解方程：5x − 15 = 3x + 25\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r75'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'救生圈架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'救生圈架上有一枚徽章。',take:{give:['tool_r75'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'沙滩牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'冷藏箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'椰树',box:[24,24,90,70],views:[
    {text:'浪花一排排走上来，沙子里藏着小贝壳。'}
  ]}
 ],
 combos:[{a:'scrap_r75',b:'tool_r75',give:['combo_r75'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开沙桌。','算题，注意多步运算。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看救生圈架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['移项合并：(5-3)x = 15+25 → x = 20','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','20'],['take','desk'],['take','shelf'],['combine','scrap_r75','tool_r75'],['use','door','combo_r75']],
 art:function(f){var s='';
  s+=R(0,0,400,132,'#e7f6ff')+R(0,132,400,52,'#b7dff5')+R(0,184,400,116,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 150 q20 10 40 0 t40 0','none',' stroke="#e7f7ff" stroke-width="3" opacity=".75"');
  s+=C(40,230,4,'#fff')+C(90,250,3,'#ffe08a')+C(150,236,4,'#f7c6c6')+C(240,258,3,'#fff')+T(48,268,14,'🐚');
  s+=P('M300 210 l30-40 30 40z','#ff8f8f',' opacity=".9"')+R(328,210,4,30,'#c98b52');
  s+=g('window',R(16,24,88,70,'#ffe08a',8,' opacity=".3"')+T(60,58,22,'🌴')+T(60,104,11,'椰树',' fill="#3e3428"'));
  s+=g('board',R(124,16,156,80,'#fff8e6',6,' stroke="#e07a4a" stroke-width="5"')+T(202,46,14,'⛱️')+T(202,72,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',R(28,168,120,28,'#e7c99a',10,SK)+(f.desk_open?R(50,172,40,16,'#fff6e0',3):C(88,182,4,'#c98b52'))+T(88,214,11,'沙桌',' fill="#3e3428"'));
  s+=g('box',R(186,160,74,48,'#5dade2',6,SK)+(f.box_open?R(194,168,58,32,'#eaf6ff',3):R(204,174,36,16,'#ffcf4d',3))+T(222,222,11,'冷藏箱',' fill="#3e3428"'));
  s+=g('shelf',R(300,40,78,100,'#f2c14a',6,SK)+R(312,36,8,70,'#c98b52')+T(338,78,18,'🛟')+T(338,118,14,'🩱'));
  s+=g('door',R(300,156,72,100,'#f6e2b8',6,SK)+P('M300 156l36-20 36 20','#e07a4a')+T(336,200,18,'🏠')+T(336,246,11,'沙滩屋',' fill="#3e3428"'));
  s+=T(250,120,16,'🕊️');
  return s;}
};
var r76={id:'r76',title:'清晨农田',emoji:'🚜',sub:'语文 · 古诗',
 story:['古诗转盘挑战「清晨农田」！','小黄想起课文里读过《早发白帝城》。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「清晨农田」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'丰收牌',box:[130,20,150,90],views:[
    {text:'墙上写着《早发白帝城》（唐·李白），少了一个字：',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'木桌',box:[30,150,120,50],views:[
    {text:'木桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'谷仓',box:[310,160,70,120],views:[
    {text:'谷仓开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'蔬果架',box:[290,40,90,120],views:[
    {text:'蔬果架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'田边',box:[24,24,90,70],views:[
    {text:'田垄绿绿的，稻草人举着手。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《早发白帝城》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《早发白帝城》：两岸猿声啼不住，轻舟已过万重山。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#e7f6ff')+R(0,150,400,150,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  for(var i=0;i<8;i++)s+=R(0,168+i*16,400,8,i%2?'#8fbf4a':'#7aaa3a',0,' opacity=".55"');
  s+=R(250,120,8,70,'#6b442c')+C(254,112,10,'#f2c14a')+R(236,128,36,8,'#6b442c')+T(254,108,12,'🌾');
  s+=g('window',R(16,22,90,70,'#d9f2b0',8,SK)+T(61,56,20,'🚜')+T(61,102,11,'田边',' fill="#3e3428"'));
  s+=g('board',R(124,16,156,80,'#fff8e0',6,' stroke="#8a5a2b" stroke-width="5"')+T(202,46,14,'🌽')+T(202,72,12,'丰收告示',' fill="#5b4636"'));
  s+=g('desk',R(24,156,126,42,'#c98b52',6,SK)+R(36,164,70,22,f.desk_open?'#fff1d0':'#a86b38',4)+(f.desk_open?'':C(90,176,4,'#fff'))+T(86,214,11,'木桌',' fill="#3e3428"')+T(132,170,14,'🥛'));
  s+=g('box',R(184,160,76,50,'#e0a15a',6,SK)+(f.box_open?R(192,168,60,34,'#f8e2c0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'菜筐',' fill="#3e3428"'));
  s+=g('shelf',R(286,28,96,118,'#b7d47a',4,' stroke="#5f8f3a" stroke-width="3"')+T(334,70,18,'🥕')+T(334,108,18,'🍅')+T(334,140,14,'🥚'));
  s+=g('door',R(308,148,78,128,'#c0392b',6,SK)+P('M308 148l39-26 39 26','#922b21')+R(334,190,26,50,'#f6e2b0',3)+C(362,214,5,'#ffcf4d',SK)+T(346,252,11,'谷仓',' fill="#3e3428"'));
  s+=T(40,276,16,'🐔');
  return s;}
};
var r77={id:'r77',title:'晨雾荷塘',emoji:'🪷',sub:'英语 · 拼写',
 story:['英语拼写站「晨雾荷塘」！','木码头上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'木码头',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木码头小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Join a club to make more _____. (朋友)\n（线索：Unit 2，复数名词，7 个字母，首字母 F；和你要好的人。）',lock:{kind:'alpha',len:7,answer:'FRIENDS',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「晨雾荷塘」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'荷塘牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'月洞门',box:[310,160,70,120],views:[
    {text:'月洞门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'水榭',box:[290,40,90,120],views:[
    {text:'水榭上有英语单词卡片。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'远山',box:[24,24,90,70],views:[
    {text:'荷叶圆圆的，蜻蜓停在尖角上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，复数名词，7 个字母，首字母 F；和你要好的人。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Join a club to make more _____. (朋友)','正确答案是 FRIENDS。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','FRIENDS']],
 art:function(f){var s='';
  s+=R(0,0,400,110,'#e7f6ff')+R(0,110,400,190,'#b7dff5');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=C(50,200,22,'#1f7a4a')+C(90,230,18,'#1f7a4a')+C(150,190,16,'#248a55')+C(40,250,14,'#1b6b40');
  s+=T(50,196,16,'🪷')+T(150,186,16,'🌸')+T(90,226,12,'🐸');
  s+=R(20,168,150,14,'#c9a06a',4,SK);
  s+=g('window',R(18,22,88,64,'#d7f6ff',8,SK)+T(62,52,18,'🐉')+T(62,98,11,'远山',' fill="#3e3428"'));
  s+=g('board',R(124,14,156,78,'#f4ffe8',6,' stroke="#2f8f4a" stroke-width="5"')+T(202,42,14,'🪷')+T(202,68,12,'荷塘',' fill="#1e5a32"'));
  s+=g('desk',R(24,160,130,28,'#d7b07a',6,SK)+R(36,166,50,14,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(78,174,3,'#5b4636'))+T(88,206,11,'木码头',' fill="#3e3428"'));
  s+=g('box',R(186,158,74,48,'#e7c07a',6,SK)+(f.box_open?R(194,166,58,32,'#fff3d2',3):R(204,172,34,16,'#ffcf4d',3))+T(222,220,11,'竹篮',' fill="#3e3428"'));
  s+=g('shelf',R(292,24,92,110,'#f3e2c4',6,SK)+P('M292 24h92l-16-16h-60z','#c0392b')+T(338,78,18,'🏮')+T(338,116,16,'🍵'));
  s+=g('door',C(336,210,40,'#f6e2b8',SK)+C(336,210,26,'#b7dff5')+T(336,250,11,'月洞门',' fill="#3e3428"'));
  s+=T(250,140,16,'🪁');
  return s;}
};
var r78={id:'r78',title:'晨雾营地',emoji:'⛺',sub:'数学 · 挑战',
 story:['你来到了晨雾营地。','木头凳上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开帐篷，挑战就成功啦！'],
 objects:[
  {id:'door',name:'帐篷',box:[310,160,70,120],views:[
    {text:'帐篷锁着，需要钥匙。',use:[{item:'key_r78',win:true,text:'钥匙一转，帐篷开了！「晨雾营地」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'木头凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木头凳上有密码锁，旁边贴着纸条：',note:'【算一算】循环小数：下面哪个算式的商是循环小数？① 9÷2 ② 1÷4 ③ 5÷6 ④ 7÷5。填序号。',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r78'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'露营牌',box:[130,20,150,90],views:[
    {text:'露营牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'背包架',box:[290,40,90,120],views:[
    {text:'背包架上摆着一些小物件。'}
  ]},
  {id:'box',name:'冷藏盒',box:[200,160,70,50],views:[
    {text:'冷藏盒是空的。'}
  ]},
  {id:'window',name:'远林',box:[24,24,90,70],views:[
    {text:'松树黑黑的，营火噼啪响。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看木头凳上的纸条。','纸条上有一道数学题，算出答案就是密码。','约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点木头凳，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点帐篷。','先点钥匙，再点目标。']}
 ],
 explain:['① 9÷2=4.5 有限小数，② 1÷4=0.25 有限小数，③ 5÷6=0.8333… 循环小数，④ 7÷5=1.4 有限小数。所以填 3。','打开抽屉拿到钥匙。','用钥匙打开帐篷，挑战成功。'],
 solution:[['code','desk','3'],['take','desk'],['use','door','key_r78']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#e7f6ff')+R(0,168,400,132,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=R(8,90,16,100,'#2c4a32')+C(16,80,24,'#1e4d32')+R(360,70,18,120,'#2c4a32')+C(370,64,28,'#1e4d32');
  s+=C(120,230,16,'#ff9a3c')+C(120,226,8,'#ffe08a')+R(116,230,8,16,'#6b442c')+T(150,236,14,'🔥');
  s+=g('window',R(20,24,86,64,'#1b3a4a',8,SK)+T(63,54,18,'🏕️')+T(63,100,11,'远林',' fill="#3e3428"'));
  s+=g('board',R(124,16,156,80,'#f6e7c8',6,' stroke="#6b442c" stroke-width="5"')+T(202,46,14,'📌')+T(202,72,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(24,170,130,18,'#8a5a32',4,SK)+R(20,162,138,12,'#a67c52',4,SK)+(f.desk_open?R(70,166,30,10,'#e7c8a0',2):C(90,176,3,'#fff'))+T(88,204,11,'木头凳',' fill="#3e3428"'));
  s+=g('box',R(184,158,76,50,'#5d7a8a',6,SK)+(f.box_open?R(192,166,60,34,'#d5e6ee',3):R(202,172,38,18,'#ffcf4d',3))+T(222,222,11,'冷藏盒',' fill="#3e3428"'));
  s+=g('shelf',R(292,36,90,108,'#6b442c',4,SK)+T(336,78,18,'🎒')+T(336,118,16,'🥾'));
  s+=g('door',P('M308 270 L338 168 L368 270z','#f2a3a0',SK)+P('M338 190 v70','none',' stroke="#6b442c" stroke-width="2"')+T(338,248,11,'帐篷',' fill="#3e3428"'));
  return s;}
};
var r79={id:'r79',title:'晨光树屋',emoji:'🌳',sub:'数学 · 闯关',
 story:['欢迎来到「晨光树屋」挑战站！','树枝台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'树枝台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树枝台上的挑战题：',note:'【算一算】小数四则：4.5 ÷ 0.75 = ?',lock:{kind:'num',len:1,answer:'6',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「晨光树屋」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'树屋门',box:[310,160,70,120],views:[
    {text:'树屋门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'树屋牌',box:[130,20,150,90],views:[
    {text:'树屋牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'松鼠洞',box:[290,40,90,120],views:[
    {text:'松鼠洞上有奖杯模型。'}
  ]},
  {id:'box',name:'宝箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'树窗',box:[24,24,90,70],views:[
    {text:'叶子沙沙响，绳子梯子晃一晃。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开树枝台上的题。','仔细看【算一算】，多步时先算哪一步？','除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。']}
 ],
 explain:['4.5 ÷ 0.75 = 6。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','6']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e7f6ff');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  s+=R(0,230,400,70,'#d7efc8');
  s+=R(70,120,36,180,'#8a5a32',6)+C(40,70,28,'#3aaa4a')+C(120,50,36,'#2f9a40')+C(180,80,24,'#46b85a')+C(20,110,18,'#2f8a40');
  s+=R(150,150,200,16,'#c9a06a',3,SK);
  s+=P('M200 166 q40 20 20 70','none',' stroke="#d7b07a" stroke-width="4"');
  s+=g('window',R(168,96,70,48,'#fff6d0',6,SK)+T(203,120,16,'🪟')+T(203,154,11,'树窗',' fill="#3e3428"'));
  s+=g('board',R(126,16,150,70,'#f6e7c4',6,' stroke="#6b442c" stroke-width="5"')+T(201,42,14,'🌳')+T(201,64,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(24,168,110,36,'#d7b07a',6,SK)+R(36,176,48,16,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(70,184,3,'#5b4636'))+T(78,218,11,'树枝台',' fill="#3e3428"'));
  s+=g('box',R(186,164,70,46,'#c98b52',4,SK)+(f.box_open?R(194,170,54,32,'#f3ddb8',3):R(202,176,34,16,'#e2b56a',3))+T(220,224,11,'宝箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,40,70,90,'#6aaa3a',6,SK)+T(320,80,18,'🐿️')+T(320,116,14,'🍃'));
  s+=g('door',R(308,148,70,78,'#e7c48a',6,SK)+P('M308 148l35-22 35 22','#c0392b')+R(330,166,26,24,'#c9e7ff',3)+C(362,200,4,'#ffcf4d',SK)+T(342,242,11,'树屋门',' fill="#3e3428"'));
  s+=T(40,270,18,'🐦');
  return s;}
};
var r80={id:'r80',title:'晨露温室',emoji:'🪴',sub:'数学 · 助人',
 story:['你走进晨露温室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开育苗台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r80',take:['gift_r80'],win:true,text:'小花猫开心地收下了！「晨露温室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'育苗台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'育苗台抽屉锁着，纸条上有题：',note:'【算一算】一桶油重 30 千克，用去 12.5 千克后又倒入 6.8 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'24.3',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r80'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'浇水牌',box:[130,20,150,90],views:[
    {text:'浇水牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'绿植架',box:[290,40,90,120],views:[
    {text:'绿植架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'花盆箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'玻璃',box:[24,24,90,70],views:[
    {text:'玻璃上有小水珠，空气暖暖香香的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开育苗台的密码。','看纸条上的题，可能要算两步。','先减去用去的，再加上倒入的。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点育苗台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['30 − 12.5 + 6.8 = 24.3','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','24.3'],['take','desk'],['use','door','gift_r80']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#d9ecff');
  for(var i=0;i<8;i++)s+=R(i*50,0,48,300,'#fff',0,' opacity=".08"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*50)+'H400','none',' stroke="#fff" stroke-width="2" opacity=".25"');
  s+=R(0,220,400,80,'#e6d8c4');
  s+=T(40,190,20,'🌿')+T(80,200,18,'🌵')+T(250,188,18,'🌸');
  s+=g('window',R(16,18,96,78,'#e9fff2',6,' stroke="#9ad7b2" stroke-width="4"')+T(64,56,20,'🪴')+T(64,108,11,'玻璃',' fill="#3e3428"'));
  s+=g('board',R(124,14,160,90,'#f4fff4',6,' stroke="#3d9a62" stroke-width="5"')+T(204,44,14,'💧')+T(204,70,12,'浇水时间',' fill="#1e5a32"')+T(204,90,10,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(22,154,132,50,'#cfe3c4',6,SK)+R(34,164,70,26,f.desk_open?'#fff':'#b7d3a8',4)+(f.desk_open?'':C(90,178,4,'#3d6b4a'))+T(88,218,11,'育苗台',' fill="#3e3428"')+T(138,172,14,'🌱'));
  s+=g('box',R(184,160,76,50,'#e7b15a',6,SK)+(f.box_open?R(192,168,60,34,'#fff3d0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'花盆箱',' fill="#3e3428"'));
  s+=g('shelf',R(286,22,100,130,'#8fbf8a',6,SK)+T(336,60,16,'🌿')+T(336,98,16,'🌺')+T(336,136,14,'🧴'));
  s+=g('door',R(304,148,72,128,'#d8f3e4',6,' stroke="#3d9a62" stroke-width="4"')+P('M340 148v128','none',' stroke="#3d9a62" stroke-width="3"')+C(358,214,5,'#f2c14a',SK)+T(340,252,11,'温室门',' fill="#3e3428"'));
  return s;}
};
var r81={id:'r81',title:'清晨细雨',emoji:'🌧️',sub:'数学 · 益智',
 story:['「清晨细雨」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r81',take:['combo_r81'],win:true,text:'放上去——成功！「清晨细雨」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'候车椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'候车椅锁着：',note:'【算一算】循环小数：0.5555…（循环节是 5）化成最简分数，分子是多少？',lock:{kind:'num',len:1,answer:'5',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r81'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'报摊',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'报摊上有材料 B。',take:{give:['partB_r81'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'雨天牌',box:[130,20,150,90],views:[
    {text:'雨天牌：材料 A + 材料 B = 成品。顺便一题：田里长草（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'邮筒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'雨丝斜斜的，水洼里倒映着屋檐。'}
  ]}
 ],
 combos:[{a:'partA_r81',b:'partB_r81',give:['combo_r81'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开候车椅。','算纸条上的题。','先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看报摊。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['0.5555… 写成 5/9，约分得 5/9，分子是 5。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','5'],['take','desk'],['take','shelf'],['combine','partA_r81','partB_r81'],['use','door','combo_r81']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e7f6ff')+R(0,200,400,100,'#d7efc8');
  for(var i=0;i<28;i++)s+=P('M'+((i*47)%400)+' '+((i*29)%180)+' l-6 16','none',' stroke="#d5e6f5" stroke-width="2" opacity=".7"');
  s+=P('M40 250c30-16 50-8 70 0s40 8 60-4','none',' stroke="#9ec4de" stroke-width="6" opacity=".45"');
  s+=R(300,120,8,90,'#5d6d7e')+C(304,112,10,'#ffe08a')+C(304,112,20,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,20,96,74,'#c5d8e8',6,SK)+T(64,56,20,'☂️')+T(64,106,11,'橱窗',' fill="#3e3428"'));
  s+=g('board',R(124,16,156,84,'#fffdf8',6,' stroke="#7f8c9d" stroke-width="5"')+T(202,46,14,'☔')+T(202,72,12,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(24,156,126,42,'#b7c4ce',6,SK)+R(36,164,64,22,f.desk_open?'#eef5f8':'#8fa0ae',4)+(f.desk_open?'':C(86,176,4,'#fff'))+T(86,214,11,'候车椅',' fill="#3e3428"'));
  s+=g('box',R(184,160,74,50,'#e74c3c',6,SK)+(f.box_open?R(192,168,58,34,'#f5b7b1',3):R(202,174,34,18,'#ffcf4d',3))+T(220,224,11,'邮筒',' fill="#3e3428"'));
  s+=g('shelf',R(286,28,96,112,'#5d6d7e',6,SK)+T(334,70,16,'📰')+T(334,112,16,'☂️'));
  s+=g('door',R(300,148,74,120,'#f2d16b',6,SK)+P('M294 148h86l-10 16H304z','#e67e22')+R(316,176,42,40,'#fff6d8',3)+T(336,250,11,'小店',' fill="#3e3428"'));
  s+=T(40,270,18,'🐸');
  return s;}
};
var r82={id:'r82',title:'雾中菜场',emoji:'🥬',sub:'数学 · 英语',
 story:['双锁挑战站「雾中菜场」！','先过秤台，再过菜筐。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'秤台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小数四则：4 + 0.75 − 1.2 = ?',lock:{kind:'num',len:4,dot:true,answer:'3.55',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'菜筐上还有第二关：',note:'【英语题】I can share my _____. (想法)\n（线索：Unit 2，复数名词，5 个字母，首字母 I；头脑里的想法。）',lock:{kind:'alpha',len:5,answer:'IDEAS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「雾中菜场」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'菜场口',box:[310,160,70,120],views:[
    {text:'菜场口只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'菜价牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'货摊',box:[290,40,90,120],views:[
    {text:'货摊上放着完成印章模型。'}
  ]},
  {id:'window',name:'摊位',box:[24,24,90,70],views:[
    {text:'吆喝声热热闹闹，青菜上还带着水珠。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，复数名词，5 个字母，首字母 I；头脑里的想法。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['4 + 0.75 − 1.2 = 3.55。先加再减。','I can share my _____. (想法) → IDEAS','两关都对，挑战成功。'],
 solution:[['code','desk','3.55'],['code','box','IDEAS']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#f7f3ea')+R(0,214,400,86,'#e6d8c4');
  for(var i=0;i<8;i++)s+=R(i*50,0,50,46,i%2?'#e74c3c':'#f5d76e');
  s+=R(0,46,400,10,'#f7f1e4');
  s+=g('window',R(16,64,96,70,'#fff8e8',6,SK)+T(64,98,20,'🥬')+T(64,146,11,'摊位',' fill="#3e3428"'));
  s+=g('board',R(124,62,160,84,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(204,92,13,'今日菜价',' fill="#c0392b"')+T(204,116,11,'青菜 3.5',' fill="#5b4636"')+T(204,134,11,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(22,156,130,50,'#e8d3b0',6,SK)+R(40,148,40,16,'#f7f1e4',3)+R(34,166,70,26,f.desk_open?'#fff':'#d9c4a4',4)+(f.desk_open?'':C(88,180,4,'#5b4636'))+T(88,220,11,'秤台',' fill="#3e3428"'));
  s+=g('box',R(184,160,76,50,'#c98b52',4,SK)+(f.box_open?R(192,168,60,34,'#f3ddb8',3):R(202,174,38,18,'#e2b56a',3))+T(222,224,11,'菜筐',' fill="#3e3428"'));
  s+=g('shelf',R(286,64,100,120,'#b9793f',6,SK)+T(336,100,18,'🐟')+T(336,140,18,'🍎')+T(336,172,14,'🧄'));
  s+=g('door',R(304,150,72,124,'#27ae60',6,SK)+T(340,200,20,'🚪')+T(340,248,11,'菜场口',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🥕');
  return s;}
};
var r83={id:'r83',title:'晨雪小路',emoji:'❄️',sub:'数学 · 通行证',
 story:['「晨雪小路」要刷通行证才能完成任务。','小黄：“卡片和徽章拼起来，去刷卡机刷一下！”','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r83',take:['combo_r83'],win:true,text:'嘀——通过！「晨雪小路」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'雪凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'雪凳锁着：',note:'【算一算】梯形：上底 7 分米，下底 13 分米，高 5 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'50',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r83'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'木柴堆上有一枚徽章。',take:{give:['tool_r83'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'雪地牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'雪橇',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'雪窗',box:[24,24,90,70],views:[
    {text:'雪软软的，脚印一串串通向木屋。'}
  ]}
 ],
 combos:[{a:'scrap_r83',b:'tool_r83',give:['combo_r83'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开雪凳。','算题，注意多步运算。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看木柴堆。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['（7+13）×5÷2 = 50','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','50'],['take','desk'],['take','shelf'],['combine','scrap_r83','tool_r83'],['use','door','combo_r83']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#e7f6ff')+R(0,168,400,132,'#d7efc8');
  
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');
  for(var i=0;i<18;i++)s+=C((i*73)%400,(i*41)%150,i%3?1.4:2.2,'#fff',' opacity=".85"');
  s+=R(250,150,70,70,'#f7fbff',8,SK)+C(268,168,6,'#5b4636')+C(292,168,6,'#5b4636')+P('M272 188 q10 8 20 0','none',' stroke="#e07a7a" stroke-width="2"')+R(282,188,4,22,'#f0a0a0');
  s+=R(20,120,14,70,'#2f6b4a')+P('M8 120 l20-28 20 28z','#eef8f2')+R(40,100,12,90,'#2f6b4a')+P('M28 100 l18-24 18 24z','#eef8f2');
  s+=g('window',R(18,22,86,64,'#d6ecff',8,SK)+T(61,52,18,'❄️')+T(61,98,11,'雪窗',' fill="#3e3428"'));
  s+=g('board',R(120,16,150,78,'#fff',6,' stroke="#9ec4de" stroke-width="5"')+T(195,44,14,'☃️')+T(195,70,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',R(24,160,120,36,'#f7fbff',8,' stroke="#9ec4de" stroke-width="3"')+R(40,168,50,16,f.desk_open?'#fff6e0':'#e4eef6',4)+(f.desk_open?'':C(80,176,4,'#7f8c9d'))+T(84,212,11,'雪凳',' fill="#3e3428"'));
  s+=g('box',R(184,158,74,48,'#e74c3c',6,SK)+(f.box_open?R(192,166,58,32,'#f5d0cc',3):R(202,172,34,16,'#ffcf4d',3))+T(220,220,11,'雪橇',' fill="#3e3428"'));
  s+=g('shelf',R(292,36,88,100,'#8a5a32',4,SK)+R(300,48,14,70,'#6b442c')+R(326,42,14,78,'#6b442c')+R(352,52,14,64,'#6b442c')+T(334,90,12,'🪵'));
  s+=g('door',R(300,148,74,120,'#f2e2c8',6,SK)+P('M300 148l37-26 37 26','#c0392b')+R(322,176,30,28,'#ffe08a',3)+C(354,220,5,'#ffcf4d',SK)+T(336,248,11,'木屋',' fill="#3e3428"'));
  return s;}
};
var r84={id:'r84',title:'夜灯小房间',emoji:'🌙',sub:'语文 · 古诗',
 story:['古诗转盘挑战「夜灯小房间」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「夜灯小房间」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'全家福',box:[130,20,150,90],views:[
    {text:'墙上写着《绝句》（唐·杜甫），少了一个字：',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {text:'茶几上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'房门',box:[310,160,70,120],views:[
    {text:'房门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'电视柜',box:[290,40,90,120],views:[
    {text:'电视柜上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗帘',box:[24,24,90,70],views:[
    {text:'夜里只剩一盏小灯，窗帘拉上了。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《绝句》，唐·杜甫。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《绝句》：两个黄鹂鸣翠柳，一行白鹭上青天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2744')+R(0,214,400,86,'#1c1a30');
  s+=P('M40 286c40-36 120-36 160 0s120 28 160 0v14H40z','#e7a0a8',' opacity=".9"');
  s+=R(118,232,150,28,'#f4c7b8',16,SK)+R(126,220,134,22,'#ffe1d6',12,SK);
  s+=R(250,196,16,70,'#c98b52',4)+C(258,188,10,'#ffe08a',' opacity=".9"')+C(258,188,22,'#ffe08a',' opacity=".25"');
  s+=g('window',R(22,24,96,74,'#14182e',6,SK)+R(22,24,18,74,'#f7d0d8')+R(100,24,18,74,'#f7d0d8')+P('M70 24v74M22 60h96','none',' stroke="#fff" stroke-width="2" opacity=".7"')+T(70,108,11,'窗帘',' fill="#f7f1e4"'));
  s+=g('board',R(132,18,150,86,'#fffaf2',6,' stroke="#d9a07a" stroke-width="5"')+R(148,32,52,40,'#f6d2b8',4)+C(166,48,8,'#f3b6a0')+C(184,50,8,'#f3b6a0')+T(206,86,12,'全家福',' fill="#5b4636"'));
  s+=g('desk',R(28,150,128,36,'#e7c39a',8,SK)+R(40,158,64,16,f.desk_open?'#fff6e0':'#d7b088',4)+(f.desk_open?T(72,168,12,'🍪'):C(96,166,4,'#5b4636'))+T(92,202,11,'茶几',' fill="#f7f1e4"')+T(140,168,14,'🍵'));
  s+=g('box',R(188,162,76,50,'#f0a06a',8,SK)+(f.box_open?R(196,170,60,34,'#ffe6c8',3):R(206,176,40,20,'#ffcf4d',3))+T(226,226,11,'玩具箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,28,100,118,'#d7c2a4',6,SK)+R(296,78,80,46,'#243044',4)+R(302,84,68,28,'#7ec8ff',2)+T(336,70,16,'📺')+T(336,132,14,'🪴'));
  s+=g('door',R(308,156,72,124,'#e7c9a2',6,SK)+C(362,214,5,'#ffcf4d',SK)+R(326,170,36,28,'#c9e7ff',3)+T(344,250,11,'房门',' fill="#f7f1e4"'));
  s+=T(36,270,20,'🌙');
  return s;}
};
var r85={id:'r85',title:'星空卧室',emoji:'🌙',sub:'英语 · 拼写',
 story:['英语拼写站「星空卧室」！','床头柜上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜小盒上有字母锁，旁边是英文卡片：',note:'【英语题】A _____ can help us at the fair. (机器人)\n（线索：Unit 2，名词，5 个字母，首字母 R；会按程序干活的机器。）',lock:{kind:'alpha',len:5,answer:'ROBOT',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「星空卧室」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'梦的清单',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'卧室门',box:[310,160,70,120],views:[
    {text:'卧室门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'衣柜',box:[290,40,90,120],views:[
    {text:'衣柜上有英语单词卡片。'}
  ]},
  {id:'box',name:'收纳篮',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'小窗',box:[24,24,90,70],views:[
    {text:'星星从窗户探进来。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，5 个字母，首字母 R；会按程序干活的机器。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：A _____ can help us at the fair. (机器人)','正确答案是 ROBOT。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','ROBOT']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2744')+R(0,200,400,100,'#1c1a30');
  s+=R(70,214,210,64,'#f7f1ff',10,SK)+R(78,206,150,22,'#ffe9f3',8,SK)+R(86,198,36,16,'#fff',6)+R(130,198,36,16,'#fff',6);
  s+=R(250,168,10,90,'#c9b8a0')+C(255,160,9,'#ffe08a')+C(255,160,18,'#ffe08a',' opacity=".3"');
  s+=g('window',R(22,22,96,74,'#14182e',8,SK)+C(78,52,12,'#fff6c8')+C(84,48,9,'#14182e')+T(70,108,11,'小窗',' fill="#f7f1e4"'));
  s+=g('board',R(132,16,148,88,'#fff5fb',6,' stroke="#e7b6d4" stroke-width="5"')+T(206,48,16,'🌙')+T(206,76,12,'梦的清单',' fill="#7a4e6a"'));
  s+=g('desk',R(28,150,120,46,'#e6d3ef',6,SK)+R(40,158,52,24,f.desk_open?'#fff':'#d7c0ea',4)+(f.desk_open?'':C(78,170,4,'#5b4636'))+T(88,210,11,'床头柜',' fill="#f7f1e4"')+T(128,168,14,'🧸'));
  s+=g('box',R(188,160,74,50,'#f2b5c8',6,SK)+(f.box_open?R(196,168,58,34,'#ffe4ee',3):R(206,176,36,18,'#ffcf4d',3))+T(224,224,11,'收纳篮',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,24,100,126,'#cbb6e6',6,SK)+R(296,48,80,8,'#a88bc4',2)+R(296,88,80,8,'#a88bc4',2)+T(336,70,16,'👕')+T(336,112,16,'📚'));
  s+=g('door',R(300,156,72,124,'#d7c4ef',6,SK)+C(354,216,5,'#ffd34d',SK)+T(336,118,14,'⭐')+T(336,248,11,'卧室门',' fill="#f7f1e4"'));
  s+=T(40,276,18,'🌙')+T(200,276,16,'🧦');
  return s;}
};
var r86={id:'r86',title:'星空公园',emoji:'🌃',sub:'数学 · 挑战',
 story:['你来到了星空公园。','长椅上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开园门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门锁着，需要钥匙。',use:[{item:'key_r86',win:true,text:'钥匙一转，园门开了！「星空公园」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上有密码锁，旁边贴着纸条：',note:'【算一算】循环小数：计算 1÷3，从小数点后第几位开始循环？',lock:{kind:'num',len:1,answer:'1',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r86'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'游园地图',box:[130,20,150,90],views:[
    {text:'游园地图上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'售货亭',box:[290,40,90,120],views:[
    {text:'售货亭上摆着一些小物件。'}
  ]},
  {id:'box',name:'野餐篮',box:[200,160,70,50],views:[
    {text:'野餐篮是空的。'}
  ]},
  {id:'window',name:'大树',box:[24,24,90,70],views:[
    {text:'路灯亮了，长椅上有一点湿。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看长椅上的纸条。','纸条上有一道数学题，算出答案就是密码。','看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点园门。','先点钥匙，再点目标。']}
 ],
 explain:['1÷3=0.3333…，从小数点后第 1 位开始循环。','打开抽屉拿到钥匙。','用钥匙打开园门，挑战成功。'],
 solution:[['code','desk','1'],['take','desk'],['use','door','key_r86']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#1b2144')+R(0,168,400,132,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  s+=P('M-10 250C80 210 140 250 210 220S320 250 410 214V300H-10z','#c9e7b0',' opacity=".55"');
  s+=P('M150 300C170 230 190 210 210 168C230 214 250 236 270 300z','#e7d7b0');
  s+=C(46,150,28,'#3e9a4a')+R(40,168,12,48,'#8a5a32')+C(340,120,26,'#2f8a40')+R(334,140,12,40,'#8a5a32');
  s+=T(24,196,16,'🌸')+T(250,188,14,'🌼')+T(120,250,14,'🐦');
  s+=g('window',R(18,78,90,70,'#b7e39a',8,SK)+T(63,112,22,'🌳')+T(63,156,11,'大树',' fill="#f7f1e4"'));
  s+=g('board',R(130,18,156,84,'#f4fbe8',6,' stroke="#5f8f3a" stroke-width="5"')+T(208,48,16,'🗺️')+T(208,76,12,'游园地图',' fill="#2d5a1e"'));
  s+=g('desk',R(28,168,124,28,'#a67c52',6,SK)+R(24,160,132,14,'#c49a62',6,SK)+(f.desk_open?R(70,172,40,16,'#e7c99a',3):C(90,182,4,'#5b4636'))+T(90,214,11,'长椅',' fill="#f7f1e4"'));
  s+=g('box',R(188,164,76,48,'#e7b15a',6,SK)+(f.box_open?R(196,172,60,32,'#fff1cc',3):R(206,178,36,18,'#ffcf4d',3))+T(226,226,11,'野餐篮',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,36,92,110,'#f0d78c',6,SK)+P('M292 36h92l-10-16h-72z','#e25b4a')+T(338,90,18,'🍦')+T(338,124,14,'🎈'));
  s+=g('door',R(300,150,74,128,'#8d6a3f',6,SK)+R(308,162,26,100,'#6aaa3a',4)+R(340,162,26,100,'#6aaa3a',4)+C(354,214,5,'#ffcf4d',SK)+T(336,292,11,'园门',' fill="#f7f1e4"'));
  s+=T(40,276,20,'🌃');
  return s;}
};
var r87={id:'r87',title:'夜香花园',emoji:'🌙',sub:'数学 · 闯关',
 story:['欢迎来到「夜香花园」挑战站！','花坛沿上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿上的挑战题：',note:'【算一算】一块三角形彩纸底 12 厘米、高 5 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'60',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「夜香花园」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'花拱门',box:[310,160,70,120],views:[
    {text:'花拱门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'花名牌',box:[130,20,150,90],views:[
    {text:'花名牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有奖杯模型。'}
  ]},
  {id:'box',name:'种子盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'花窗',box:[24,24,90,70],views:[
    {text:'夜来香轻轻地香。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开花坛沿上的题。','仔细看【算一算】，多步时先算哪一步？','先求一块三角形面积，再乘 2。']}
 ],
 explain:['一块 = 12×5÷2 = 30，两块 = 60','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','60']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#1b2144')+R(0,150,400,150,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  for(var i=0;i<5;i++)s+=R(18+i*36,232,30,42,'#6b3e28',4);
  s+=T(30,228,16,'🌷')+T(70,224,16,'🌻')+T(110,230,16,'🌹')+T(150,222,16,'🌼')+T(190,228,14,'🌺');
  s+=C(250,210,16,'#8fd4f2',' stroke="#5b4636" stroke-width="2"')+R(246,226,8,20,'#9aa7b2');
  s+=g('window',R(20,22,92,72,'#d9f5c8',8,SK)+T(66,58,22,'🐝')+T(66,104,11,'花窗',' fill="#f7f1e4"'));
  s+=g('board',R(128,16,158,86,'#fffdf4',6,' stroke="#7dae52" stroke-width="5"')+T(206,46,14,'🏷️')+T(206,74,12,'今日花名',' fill="#2d5a1e"'));
  s+=g('desk',R(28,156,126,40,'#c48b62',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#a96b42',4)+(f.desk_open?'':C(92,174,4,'#fff'))+T(90,212,11,'花坛沿',' fill="#f7f1e4"'));
  s+=g('box',R(186,160,78,50,'#f0d36a',6,SK)+(f.box_open?R(194,168,62,34,'#fff6d0',3):R(204,174,40,18,'#e7b84a',3))+T(224,224,11,'种子盒',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,30,98,116,'#8fbf62',6,SK)+T(336,70,18,'🌷')+T(336,108,18,'🪴')+T(336,140,14,'🎀'));
  s+=g('door',P('M308 168 Q344 120 380 168V280H308z','#f2a3c0',SK)+R(338,200,12,40,'#fff',0,' opacity=".45"')+T(344,250,11,'花拱门',' fill="#f7f1e4"'));
  s+=T(360,270,18,'🦋');
  return s;}
};
var r88={id:'r88',title:'星夜过河',emoji:'🌌',sub:'数学 · 助人',
 story:['你走进星夜过河，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开岸边石桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r88',take:['gift_r88'],win:true,text:'小花猫开心地收下了！「星夜过河」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'岸边石桌抽屉锁着，纸条上有题：',note:'【算一算】循环小数：最简分数 5/6 写成小数，把循环节按顺序连起来是多少？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r88'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'渡口牌',box:[130,20,150,90],views:[
    {text:'渡口牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'竹排',box:[290,40,90,120],views:[
    {text:'竹排上摆着🐱的照片。'}
  ]},
  {id:'box',name:'木箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'河柳',box:[24,24,90,70],views:[
    {text:'月亮掉进河里，渡船轻轻晃。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开岸边石桌的密码。','看纸条上的题，可能要算两步。','把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点岸边石桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['5/6=0.8333…，循环节连起来是 3。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','3'],['take','desk'],['use','door','gift_r88']],
 art:function(f){var s='';
  s+=R(0,0,400,118,'#1b2144')+R(0,118,400,28,'#7dce6a')+R(0,146,400,78,'#14243f')+R(0,220,400,80,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  for(var i=0;i<7;i++)s+=P('M'+(i*58)+' 168 q16 8 32 0 t32 0','none',' stroke="#e9f7ff" stroke-width="2" opacity=".7"');
  s+=C(78,176,12,'#e4d8c4',SK)+C(124,196,14,'#d9cdb8',SK)+C(172,174,11,'#efe4d2',SK)+C(220,198,13,'#d5c8b0',SK);
  s+=T(28,132,18,'🌿')+T(250,128,16,'🌿')+T(36,268,16,'🦆');
  s+=g('window',R(18,28,90,70,'#9ed98a',8,SK)+P('M36 96 C50 30 90 30 96 90','#2f8f45')+T(64,108,11,'河柳',' fill="#f7f1e4"'));
  s+=g('board',R(128,16,156,80,'#f6e7c4',6,' stroke="#8a5a2b" stroke-width="5"')+T(206,44,16,'🛶')+T(206,72,12,'小心过河',' fill="#5b4636"'));
  s+=g('desk',R(26,168,124,36,'#cfc6b6',10,SK)+R(40,176,60,18,f.desk_open?'#fff6e0':'#b7b0a2',4)+(f.desk_open?'':C(86,186,4,'#5b4636'))+T(88,220,11,'岸边石桌',' fill="#f7f1e4"'));
  s+=g('box',R(186,164,76,48,'#c98b52',4,SK)+(f.box_open?R(194,172,60,32,'#f0d2a4',3):R(204,178,36,16,'#e2b56a',3))+T(224,226,11,'木箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,30,92,108,'#6aaa3a',3)+R(304,40,8,90,'#d7b07a')+R(330,34,8,98,'#d7b07a')+R(356,44,8,82,'#d7b07a')+T(334,78,16,'🎋'));
  s+=g('door',P('M310 250 Q340 200 374 250','#e8d7b0')+R(312,188,60,62,'#f4e2c0',8,SK)+T(342,214,20,'⛵')+T(342,258,11,'渡船',' fill="#f7f1e4"'));
  s+=T(360,276,16,'🐟');
  return s;}
};
var r89={id:'r89',title:'灯火石桥',emoji:'🌃',sub:'数学 · 益智',
 story:['「灯火石桥」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r89',take:['combo_r89'],win:true,text:'放上去——成功！「灯火石桥」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳锁着：',note:'【算一算】小路长 60 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'13',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r89'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'灯笼架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'灯笼架上有材料 B。',take:{give:['partB_r89'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'桥名牌',box:[130,20,150,90],views:[
    {text:'桥名牌：材料 A + 材料 B = 成品。顺便一题：两人一起走（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'桥柳',box:[24,24,90,70],views:[
    {text:'桥灯一盏盏亮起来。'}
  ]}
 ],
 combos:[{a:'partA_r89',b:'partB_r89',give:['combo_r89'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桥头石凳。','算纸条上的题。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看灯笼架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['段数=60÷5=12，棵数=段数+1=13','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','13'],['take','desk'],['take','shelf'],['combine','partA_r89','partB_r89'],['use','door','combo_r89']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#1b2144')+R(0,168,400,50,'#14243f')+R(0,214,400,86,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  s+=P('M20 214 Q120 120 200 214 Q280 120 390 214','#d7d0c4')+P('M20 214 Q120 150 200 214 Q280 150 390 214V250H20z','#c3b8a4',SK);
  s+=R(30,150,10,64,'#8d6b45')+R(360,150,10,64,'#8d6b45')+C(35,146,6,'#ffb84a')+C(365,146,6,'#ffb84a');
  for(var i=0;i<6;i++)s+=R(70+i*42,158,4,28,'#efe6d4');
  s+=g('window',R(18,22,88,64,'#bfe6c8',8,SK)+T(62,54,20,'🌿')+T(62,98,11,'桥柳',' fill="#f7f1e4"'));
  s+=g('board',R(128,14,150,78,'#fff8e4',6,' stroke="#8a5a2b" stroke-width="5"')+T(203,42,14,'🌉')+T(203,68,12,'石拱桥',' fill="#5b4636"'));
  s+=g('desk',R(28,156,120,36,'#d2c6b2',8,SK)+R(40,164,56,16,f.desk_open?'#fff6e0':'#b7aa96',4)+(f.desk_open?'':C(84,172,4,'#5b4636'))+T(88,208,11,'桥头石凳',' fill="#f7f1e4"'));
  s+=g('box',R(186,160,74,48,'#c98b52',4,SK)+(f.box_open?R(194,168,58,32,'#f3ddb8',3):R(204,174,34,16,'#e2b56a',3))+T(222,222,11,'竹篮',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,28,90,100,'#e7d7b8',6,SK)+T(336,70,18,'🏮')+T(336,110,16,'🎐'));
  s+=g('door',R(300,156,72,120,'#b08968',6,SK)+P('M300 156l36-22 36 22','#8d6a43')+C(354,214,5,'#ffcf4d',SK)+T(336,250,11,'桥门',' fill="#f7f1e4"'));
  return s;}
};
var r90={id:'r90',title:'夜自习教室',emoji:'🌙',sub:'数学 · 英语',
 story:['双锁挑战站「夜自习教室」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一辆车平均每小时行 72 千米，行了 2 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'144',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'作业盒上还有第二关：',note:'【英语题】Sports help me _____ taller and stronger. (成长/长高)\n（线索：Unit 2，动词，4 个字母，首字母 G；慢慢变高变壮。）',lock:{kind:'alpha',len:4,answer:'GROW',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「夜自习教室」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗',box:[24,24,90,70],views:[
    {text:'只有一排灯还亮着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','路程 = 速度 × 时间。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，动词，4 个字母，首字母 G；慢慢变高变壮。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['路程 = 速度 × 时间 = 72 × 2 = 144','Sports help me _____ taller and stronger. (成长/长高) → GROW','两关都对，挑战成功。'],
 solution:[['code','desk','144'],['code','box','GROW']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2744')+R(0,214,400,86,'#1c1a30');
  for(var i=0;i<7;i++)s+=R(i*58,250,48,28,'#f4e2c4',4,' stroke="#d7c09a" stroke-width="1"');
  s+=R(18,214,364,8,'#e7d3a8');
  s+=g('window',R(16,18,100,78,'#14182e',6,SK)+P('M66 18v78M16 56h100','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'窗',' fill="#f7f1e4"'));
  s+=g('board',R(126,12,168,104,'#1e8449',4,' stroke="#a86b38" stroke-width="6"')+T(210,42,13,'今天的课',' fill="#fff"')+T(210,66,12,'认真审题',' fill="#d5f5e3"')+T(210,90,11,'1.2 × 0.5',' fill="#abebc6"'));
  s+=g('desk',R(24,150,132,52,'#c98b52',6,SK)+R(36,160,78,28,f.desk_open?'#f6e0c0':'#a86b38',4)+(f.desk_open?T(74,176,12,'📘'):C(100,174,4,'#fff'))+T(90,216,11,'讲台',' fill="#f7f1e4"')+T(140,166,14,'✏️'));
  s+=g('box',R(186,160,76,50,'#f5c16a',6,SK)+(f.box_open?R(194,168,60,34,'#fff3d6',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'作业盒',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,22,100,132,'#b9793f',6,SK)+R(296,52,80,8,'#8a5428',2)+R(296,92,80,8,'#8a5428',2)+T(336,74,14,'📕')+T(336,114,14,'🌍'));
  s+=g('door',R(304,150,72,126,'#8fb6e8',6,SK)+R(314,162,52,36,'#d6ebff',4)+C(358,220,5,'#ffcf4d',SK)+T(340,252,11,'教室门',' fill="#f7f1e4"'));
  s+=T(48,276,18,'🌙');
  return s;}
};
var r91={id:'r91',title:'夜灯走廊',emoji:'🌙',sub:'数学 · 通行证',
 story:['「夜灯走廊」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r91',take:['combo_r91'],win:true,text:'嘀——通过！「夜灯走廊」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'休息椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'休息椅锁着：',note:'【算一算】一件原价 60 元的外套打 9 折。应付多少元？',lock:{kind:'num',len:2,answer:'54',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r91'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'储物柜',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'储物柜上有一枚徽章。',take:{give:['tool_r91'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'布告栏',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'失物箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'走廊窗',box:[24,24,90,70],views:[
    {text:'走廊灯一格一格亮着。'}
  ]}
 ],
 combos:[{a:'scrap_r91',b:'tool_r91',give:['combo_r91'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开休息椅。','算题，注意多步运算。','打 9 折就是用原价乘 0.9。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看储物柜。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['60 × 0.9 = 54','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','54'],['take','desk'],['take','shelf'],['combine','scrap_r91','tool_r91'],['use','door','combo_r91']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2744');
  for(var i=0;i<8;i++)s+=R(0,214+i*11,400,11,i%2?'#1c1a30':'#e7dcc8');
  s+=P('M120 214 L200 120 L280 214','none',' stroke="#fff" stroke-width="8" opacity=".25"');
  s+=g('window',R(18,20,96,74,'#14182e',6,SK)+P('M66 20v74M18 56h96','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'走廊窗',' fill="#f7f1e4"'));
  s+=g('board',R(126,16,160,96,'#fffdf6',4,' stroke="#c98b52" stroke-width="6"')+T(206,46,14,'📌')+T(206,72,12,'失物招领',' fill="#5b4636"')+T(206,94,10,'看看告示',' fill="#888"'));
  s+=g('desk',R(28,156,128,40,'#d8c4a4',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#c8b090',4)+(f.desk_open?'':C(96,174,4,'#5b4636'))+T(92,212,11,'休息椅',' fill="#f7f1e4"'));
  s+=g('box',R(186,160,76,50,'#e39b4a',6,SK)+(f.box_open?R(194,168,60,34,'#ffe6c2',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'失物箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,24,100,124,'#6f8fbe',6,SK)+R(296,40,24,48,'#f4f7fb',3)+R(324,40,24,48,'#f4f7fb',3)+R(352,40,24,48,'#f4f7fb',3)+T(336,112,16,'🎒'));
  s+=g('door',R(300,150,72,126,'#d98a3a',6,SK)+R(312,164,48,40,'#f8e2c0',4)+C(354,220,5,'#5b4636',SK)+T(336,252,11,'楼梯口',' fill="#f7f1e4"'));
  s+=T(40,276,18,'🪴');
  return s;}
};
var r92={id:'r92',title:'萤火森林',emoji:'✨',sub:'语文 · 古诗',
 story:['古诗转盘挑战「萤火森林」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','船']],answer:'船',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「萤火森林」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'指路牌',box:[130,20,150,90],views:[
    {text:'墙上写着《枫桥夜泊》（唐·张继），少了一个字：',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'树桩',box:[30,150,120,50],views:[
    {text:'树桩上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'小木屋',box:[310,160,70,120],views:[
    {text:'小木屋开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'木柴堆',box:[290,40,90,120],views:[
    {text:'木柴堆上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'树洞',box:[24,24,90,70],views:[
    {text:'萤火虫提着小灯笼。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《枫桥夜泊》，唐·张继。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《枫桥夜泊》：姑苏城外寒山寺，夜半钟声到客船。','缺的字是「船」。','转对转盘，挑战成功。'],
 solution:[['code','box','船']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#16192f')+R(0,0,400,70,'#1e4d32',0,' opacity=".35"');
  s+=R(0,210,400,90,'#152015');
  s+=P('M180 300 C200 200 210 160 220 120 C230 170 250 220 270 300z','#c8ad84');
  for(var i=0;i<10;i++)s+=C(30+(i*37)%340,40+(i*19)%80,2,'#d6ff9a',' opacity=".8"');
  s+=R(8,40,18,180,'#6b442c')+R(360,30,22,190,'#6b442c')+C(18,36,26,'#1f6b3a')+C(372,28,30,'#1f6b3a');
  s+=C(40,248,8,'#e25b4a')+C(70,260,6,'#f0d36a')+C(250,252,7,'#e8e0d0');
  s+=g('window',R(24,70,80,70,'#2f8f45',8,SK)+T(64,104,20,'🌲')+T(64,150,11,'树洞',' fill="#f7f1e4"'));
  s+=g('board',R(128,20,150,82,'#e7d3a4',6,' stroke="#6b442c" stroke-width="5"')+T(203,50,14,'🪵')+T(203,76,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',C(90,176,34,'#a67c52',SK)+R(40,168,50,22,f.desk_open?'#e7c8a0':'#8a5a32',4)+(f.desk_open?'':C(78,178,4,'#fff'))+T(90,214,11,'树桩',' fill="#f7f1e4"'));
  s+=g('box',R(186,160,74,50,'#b8894a',6,SK)+(f.box_open?R(194,168,58,34,'#f0ddb4',3):R(204,174,36,18,'#e2b56a',3))+T(222,224,11,'小木箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,36,90,110,'#8a5a32',4,SK)+R(300,50,16,80,'#6b442c')+R(330,44,16,90,'#6b442c')+R(356,56,16,74,'#6b442c')+T(336,100,14,'🍄'));
  s+=g('door',R(308,150,74,126,'#c49a62',6,SK)+P('M308 150l37-28 37 28','#8d4a3a')+R(330,176,30,28,'#f6e2a8',3)+C(362,220,5,'#ffcf4d',SK)+T(344,252,11,'小木屋',' fill="#f7f1e4"'));
  return s;}
};
var r93={id:'r93',title:'月夜沙滩',emoji:'🌙',sub:'英语 · 拼写',
 story:['英语拼写站「月夜沙滩」！','沙桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'沙桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'沙桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】It is a _____ to learn new skills. (机会)\n（线索：Unit 2，名词，6 个字母，首字母 C；难得的机会。）',lock:{kind:'alpha',len:6,answer:'CHANCE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「月夜沙滩」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'沙滩牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'沙滩屋',box:[310,160,70,120],views:[
    {text:'沙滩屋开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'救生圈架',box:[290,40,90,120],views:[
    {text:'救生圈架上有英语单词卡片。'}
  ]},
  {id:'box',name:'冷藏箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'椰树',box:[24,24,90,70],views:[
    {text:'月亮把海面铺成一条银路。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，6 个字母，首字母 C；难得的机会。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：It is a _____ to learn new skills. (机会)','正确答案是 CHANCE。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','CHANCE']],
 art:function(f){var s='';
  s+=R(0,0,400,132,'#1b2144')+R(0,132,400,52,'#14243f')+R(0,184,400,116,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 150 q20 10 40 0 t40 0','none',' stroke="#e7f7ff" stroke-width="3" opacity=".75"');
  s+=C(40,230,4,'#fff')+C(90,250,3,'#ffe08a')+C(150,236,4,'#f7c6c6')+C(240,258,3,'#fff')+T(48,268,14,'🐚');
  s+=P('M300 210 l30-40 30 40z','#ff8f8f',' opacity=".9"')+R(328,210,4,30,'#c98b52');
  s+=g('window',R(16,24,88,70,'#ffe08a',8,' opacity=".3"')+T(60,58,22,'🌴')+T(60,104,11,'椰树',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,80,'#fff8e6',6,' stroke="#e07a4a" stroke-width="5"')+T(202,46,14,'⛱️')+T(202,72,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',R(28,168,120,28,'#e7c99a',10,SK)+(f.desk_open?R(50,172,40,16,'#fff6e0',3):C(88,182,4,'#c98b52'))+T(88,214,11,'沙桌',' fill="#f7f1e4"'));
  s+=g('box',R(186,160,74,48,'#5dade2',6,SK)+(f.box_open?R(194,168,58,32,'#eaf6ff',3):R(204,174,36,16,'#ffcf4d',3))+T(222,222,11,'冷藏箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(300,40,78,100,'#f2c14a',6,SK)+R(312,36,8,70,'#c98b52')+T(338,78,18,'🛟')+T(338,118,14,'🩱'));
  s+=g('door',R(300,156,72,100,'#f6e2b8',6,SK)+P('M300 156l36-20 36 20','#e07a4a')+T(336,200,18,'🏠')+T(336,246,11,'沙滩屋',' fill="#f7f1e4"'));
  s+=T(250,120,16,'🕊️');
  return s;}
};
var r94={id:'r94',title:'星夜谷仓',emoji:'🌙',sub:'数学 · 挑战',
 story:['你来到了星夜谷仓。','木桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开谷仓，挑战就成功啦！'],
 objects:[
  {id:'door',name:'谷仓',box:[310,160,70,120],views:[
    {text:'谷仓锁着，需要钥匙。',use:[{item:'key_r94',win:true,text:'钥匙一转，谷仓开了！「星夜谷仓」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'木桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木桌上有密码锁，旁边贴着纸条：',note:'【算一算】笔记本每本 3.75 元，买 2 本；橡皮每块 2.5 元，买 4 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'17.5',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r94'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'丰收牌',box:[130,20,150,90],views:[
    {text:'丰收牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'蔬果架',box:[290,40,90,120],views:[
    {text:'蔬果架上摆着一些小物件。'}
  ]},
  {id:'box',name:'菜筐',box:[200,160,70,50],views:[
    {text:'菜筐是空的。'}
  ]},
  {id:'window',name:'田边',box:[24,24,90,70],views:[
    {text:'谷仓里有干草的味道。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看木桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点木桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点谷仓。','先点钥匙，再点目标。']}
 ],
 explain:['3.75×2+2.5×4=17.5','打开抽屉拿到钥匙。','用钥匙打开谷仓，挑战成功。'],
 solution:[['code','desk','17.5'],['take','desk'],['use','door','key_r94']],
 art:function(f){var s='';
  s+=R(0,0,400,150,'#1b2144')+R(0,150,400,150,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  for(var i=0;i<8;i++)s+=R(0,168+i*16,400,8,i%2?'#8fbf4a':'#7aaa3a',0,' opacity=".55"');
  s+=R(250,120,8,70,'#6b442c')+C(254,112,10,'#f2c14a')+R(236,128,36,8,'#6b442c')+T(254,108,12,'🌾');
  s+=g('window',R(16,22,90,70,'#d9f2b0',8,SK)+T(61,56,20,'🚜')+T(61,102,11,'田边',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,80,'#fff8e0',6,' stroke="#8a5a2b" stroke-width="5"')+T(202,46,14,'🌽')+T(202,72,12,'丰收告示',' fill="#5b4636"'));
  s+=g('desk',R(24,156,126,42,'#c98b52',6,SK)+R(36,164,70,22,f.desk_open?'#fff1d0':'#a86b38',4)+(f.desk_open?'':C(90,176,4,'#fff'))+T(86,214,11,'木桌',' fill="#f7f1e4"')+T(132,170,14,'🥛'));
  s+=g('box',R(184,160,76,50,'#e0a15a',6,SK)+(f.box_open?R(192,168,60,34,'#f8e2c0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'菜筐',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,28,96,118,'#b7d47a',4,' stroke="#5f8f3a" stroke-width="3"')+T(334,70,18,'🥕')+T(334,108,18,'🍅')+T(334,140,14,'🥚'));
  s+=g('door',R(300,148,78,128,'#c0392b',6,SK)+P('M300 148l39-26 39 26','#922b21')+R(326,190,26,50,'#f6e2b0',3)+C(354,214,5,'#ffcf4d',SK)+T(338,252,11,'谷仓',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🐔');
  return s;}
};
var r95={id:'r95',title:'月下荷塘',emoji:'🌙',sub:'数学 · 闯关',
 story:['欢迎来到「月下荷塘」挑战站！','木码头上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'木码头',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木码头上的挑战题：',note:'【算一算】循环小数：计算 1÷6，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'1',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「月下荷塘」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'月洞门',box:[310,160,70,120],views:[
    {text:'月洞门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'荷塘牌',box:[130,20,150,90],views:[
    {text:'荷塘牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'水榭',box:[290,40,90,120],views:[
    {text:'水榭上有奖杯模型。'}
  ]},
  {id:'box',name:'竹篮',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'远山',box:[24,24,90,70],views:[
    {text:'月洞门里倒映着灯。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开木码头上的题。','仔细看【算一算】，多步时先算哪一步？','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']}
 ],
 explain:['1÷6=0.1666…，循环节是 6，有 1 位。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','1']],
 art:function(f){var s='';
  s+=R(0,0,400,110,'#1b2144')+R(0,110,400,190,'#14243f');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  s+=C(50,200,22,'#1f7a4a')+C(90,230,18,'#1f7a4a')+C(150,190,16,'#248a55')+C(40,250,14,'#1b6b40');
  s+=T(50,196,16,'🪷')+T(150,186,16,'🌸')+T(90,226,12,'🐸');
  s+=R(20,168,150,14,'#c9a06a',4,SK);
  s+=g('window',R(18,22,88,64,'#d7f6ff',8,SK)+T(62,52,18,'🐉')+T(62,98,11,'远山',' fill="#f7f1e4"'));
  s+=g('board',R(124,14,156,78,'#f4ffe8',6,' stroke="#2f8f4a" stroke-width="5"')+T(202,42,14,'🪷')+T(202,68,12,'荷塘',' fill="#1e5a32"'));
  s+=g('desk',R(24,160,130,28,'#d7b07a',6,SK)+R(36,166,50,14,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(78,174,3,'#5b4636'))+T(88,206,11,'木码头',' fill="#f7f1e4"'));
  s+=g('box',R(186,158,74,48,'#e7c07a',6,SK)+(f.box_open?R(194,166,58,32,'#fff3d2',3):R(204,172,34,16,'#ffcf4d',3))+T(222,220,11,'竹篮',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,24,92,110,'#f3e2c4',6,SK)+P('M292 24h92l-16-16h-60z','#c0392b')+T(338,78,18,'🏮')+T(338,116,16,'🍵'));
  s+=g('door',C(344,210,40,'#f6e2b8',SK)+C(344,210,26,'#14243f')+T(344,250,11,'月洞门',' fill="#f7f1e4"'));
  s+=T(250,140,16,'🪁');
  return s;}
};
var r96={id:'r96',title:'深夜营火',emoji:'🌌',sub:'数学 · 助人',
 story:['你走进深夜营火，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开木头凳上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r96',take:['gift_r96'],win:true,text:'小花猫开心地收下了！「深夜营火」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'木头凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木头凳抽屉锁着，纸条上有题：',note:'【算一算】小数四则：6 + 0.75 = ?',lock:{kind:'num',len:4,dot:true,answer:'6.75',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r96'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'露营牌',box:[130,20,150,90],views:[
    {text:'露营牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'背包架',box:[290,40,90,120],views:[
    {text:'背包架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'冷藏盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'远林',box:[24,24,90,70],views:[
    {text:'火星轻轻往天上飘。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开木头凳的密码。','看纸条上的题，可能要算两步。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点木头凳拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['6 + 0.75 = 6.75。小数点对齐再相加。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','6.75'],['take','desk'],['use','door','gift_r96']],
 art:function(f){var s='';
  s+=R(0,0,400,168,'#1b2144')+R(0,168,400,132,'#152015');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  s+=R(8,90,16,100,'#2c4a32')+C(16,80,24,'#1e4d32')+R(360,70,18,120,'#2c4a32')+C(370,64,28,'#1e4d32');
  s+=C(120,230,16,'#ff9a3c')+C(120,226,8,'#ffe08a')+R(116,230,8,16,'#6b442c')+T(150,236,14,'🔥');
  s+=g('window',R(20,24,86,64,'#1b3a4a',8,SK)+T(63,54,18,'🏕️')+T(63,100,11,'远林',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,80,'#f6e7c8',6,' stroke="#6b442c" stroke-width="5"')+T(202,46,14,'📌')+T(202,72,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(24,170,130,18,'#8a5a32',4,SK)+R(20,162,138,12,'#a67c52',4,SK)+(f.desk_open?R(70,166,30,10,'#e7c8a0',2):C(90,176,3,'#fff'))+T(88,204,11,'木头凳',' fill="#f7f1e4"'));
  s+=g('box',R(184,158,76,50,'#5d7a8a',6,SK)+(f.box_open?R(192,166,60,34,'#d5e6ee',3):R(202,172,38,18,'#ffcf4d',3))+T(222,222,11,'冷藏盒',' fill="#f7f1e4"'));
  s+=g('shelf',R(292,36,90,108,'#6b442c',4,SK)+T(336,78,18,'🎒')+T(336,118,16,'🥾'));
  s+=g('door',P('M312 270 L342 168 L372 270z','#f2a3a0',SK)+P('M342 190 v70','none',' stroke="#6b442c" stroke-width="2"')+T(342,248,11,'帐篷',' fill="#f7f1e4"'));
  return s;}
};
var r97={id:'r97',title:'星夜树屋',emoji:'🌙',sub:'数学 · 益智',
 story:['「星夜树屋」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r97',take:['combo_r97'],win:true,text:'放上去——成功！「星夜树屋」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'树枝台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树枝台锁着：',note:'【算一算】长方形花坛长 8 米、宽 5 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r97'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'松鼠洞',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'松鼠洞上有材料 B。',take:{give:['partB_r97'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'树屋牌',box:[130,20,150,90],views:[
    {text:'树屋牌：材料 A + 材料 B = 成品。顺便一题：十张口（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'宝箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'树窗',box:[24,24,90,70],views:[
    {text:'树屋里的小灯像一颗星。'}
  ]}
 ],
 combos:[{a:'partA_r97',b:'partB_r97',give:['combo_r97'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开树枝台。','算纸条上的题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看松鼠洞。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['外围 (8+2)×(5+2) 减去花坛 8×5 = 30','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','30'],['take','desk'],['take','shelf'],['combine','partA_r97','partB_r97'],['use','door','combo_r97']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#1b2144');
  
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'#1b2144');
  s+=R(0,230,400,70,'#152015');
  s+=R(70,120,36,180,'#8a5a32',6)+C(40,70,28,'#3aaa4a')+C(120,50,36,'#2f9a40')+C(180,80,24,'#46b85a')+C(20,110,18,'#2f8a40');
  s+=R(150,150,200,16,'#c9a06a',3,SK);
  s+=P('M200 166 q40 20 20 70','none',' stroke="#d7b07a" stroke-width="4"');
  s+=g('window',R(168,96,70,48,'#fff6d0',6,SK)+T(203,120,16,'🪟')+T(203,154,11,'树窗',' fill="#f7f1e4"'));
  s+=g('board',R(126,16,150,70,'#f6e7c4',6,' stroke="#6b442c" stroke-width="5"')+T(201,42,14,'🌳')+T(201,64,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(24,168,110,36,'#d7b07a',6,SK)+R(36,176,48,16,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(70,184,3,'#5b4636'))+T(78,218,11,'树枝台',' fill="#f7f1e4"'));
  s+=g('box',R(186,164,70,46,'#c98b52',4,SK)+(f.box_open?R(194,170,54,32,'#f3ddb8',3):R(202,176,34,16,'#e2b56a',3))+T(220,224,11,'宝箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,40,70,90,'#6aaa3a',6,SK)+T(320,80,18,'🐿️')+T(320,116,14,'🍃'));
  s+=g('door',R(300,148,70,78,'#e7c48a',6,SK)+P('M300 148l35-22 35 22','#c0392b')+R(322,166,26,24,'#c9e7ff',3)+C(354,200,4,'#ffcf4d',SK)+T(334,242,11,'树屋门',' fill="#f7f1e4"'));
  s+=T(40,270,18,'🐦');
  return s;}
};
var r98={id:'r98',title:'灯下温室',emoji:'✨',sub:'数学 · 英语',
 story:['双锁挑战站「灯下温室」！','先过育苗台，再过花盆箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'育苗台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：计算 3÷11，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'27',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'花盆箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花盆箱上还有第二关：',note:'【英语题】I like dancing as _____. (也)\n（线索：Unit 2，as ___ = 也，4 个字母，首字母 W。）',lock:{kind:'alpha',len:4,answer:'WELL',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「灯下温室」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'温室门',box:[310,160,70,120],views:[
    {text:'温室门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'浇水牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'绿植架',box:[290,40,90,120],views:[
    {text:'绿植架上放着完成印章模型。'}
  ]},
  {id:'window',name:'玻璃',box:[24,24,90,70],views:[
    {text:'植物灯把叶子照得亮亮的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，as ___ = 也，4 个字母，首字母 W。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['3÷11=0.2727…。循环节连起来是 27。','I like dancing as _____. (也) → WELL','两关都对，挑战成功。'],
 solution:[['code','desk','27'],['code','box','WELL']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#14182e');
  for(var i=0;i<8;i++)s+=R(i*50,0,48,300,'#fff',0,' opacity=".08"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*50)+'H400','none',' stroke="#fff" stroke-width="2" opacity=".25"');
  s+=R(0,220,400,80,'#1c1a30');
  s+=T(40,190,20,'🌿')+T(80,200,18,'🌵')+T(250,188,18,'🌸');
  s+=g('window',R(16,18,96,78,'#e9fff2',6,' stroke="#9ad7b2" stroke-width="4"')+T(64,56,20,'🪴')+T(64,108,11,'玻璃',' fill="#f7f1e4"'));
  s+=g('board',R(124,14,160,90,'#f4fff4',6,' stroke="#3d9a62" stroke-width="5"')+T(204,44,14,'💧')+T(204,70,12,'浇水时间',' fill="#1e5a32"')+T(204,90,10,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(22,154,132,50,'#cfe3c4',6,SK)+R(34,164,70,26,f.desk_open?'#fff':'#b7d3a8',4)+(f.desk_open?'':C(90,178,4,'#3d6b4a'))+T(88,218,11,'育苗台',' fill="#f7f1e4"')+T(138,172,14,'🌱'));
  s+=g('box',R(184,160,76,50,'#e7b15a',6,SK)+(f.box_open?R(192,168,60,34,'#fff3d0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'花盆箱',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,22,100,130,'#8fbf8a',6,SK)+T(336,60,16,'🌿')+T(336,98,16,'🌺')+T(336,136,14,'🧴'));
  s+=g('door',R(304,148,72,128,'#d8f3e4',6,' stroke="#3d9a62" stroke-width="4"')+P('M340 148v128','none',' stroke="#3d9a62" stroke-width="3"')+C(358,214,5,'#f2c14a',SK)+T(340,252,11,'温室门',' fill="#f7f1e4"'));
  return s;}
};
var r99={id:'r99',title:'夜雨街头',emoji:'🌙',sub:'数学 · 通行证',
 story:['「夜雨街头」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r99',take:['combo_r99'],win:true,text:'嘀——通过！「夜雨街头」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'候车椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'候车椅锁着：',note:'【算一算】小数四则：6.25 − 4.5 = ?',lock:{kind:'num',len:4,dot:true,answer:'1.75',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r99'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'报摊',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'报摊上有一枚徽章。',take:{give:['tool_r99'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'雨天牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'邮筒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'路灯在雨里晕开一圈光。'}
  ]}
 ],
 combos:[{a:'scrap_r99',b:'tool_r99',give:['combo_r99'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开候车椅。','算题，注意多步运算。','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看报摊。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['6.25 − 4.5 = 1.75。小数点对齐，位数少的补 0。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','1.75'],['take','desk'],['take','shelf'],['combine','scrap_r99','tool_r99'],['use','door','combo_r99']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#1b2144')+R(0,200,400,100,'#152015');
  for(var i=0;i<28;i++)s+=P('M'+((i*47)%400)+' '+((i*29)%180)+' l-6 16','none',' stroke="#d5e6f5" stroke-width="2" opacity=".7"');
  s+=P('M40 250c30-16 50-8 70 0s40 8 60-4','none',' stroke="#9ec4de" stroke-width="6" opacity=".45"');
  s+=R(300,120,8,90,'#5d6d7e')+C(304,112,10,'#ffe08a')+C(304,112,20,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,20,96,74,'#c5d8e8',6,SK)+T(64,56,20,'☂️')+T(64,106,11,'橱窗',' fill="#f7f1e4"'));
  s+=g('board',R(124,16,156,84,'#fffdf8',6,' stroke="#7f8c9d" stroke-width="5"')+T(202,46,14,'☔')+T(202,72,12,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(24,156,126,42,'#b7c4ce',6,SK)+R(36,164,64,22,f.desk_open?'#eef5f8':'#8fa0ae',4)+(f.desk_open?'':C(86,176,4,'#fff'))+T(86,214,11,'候车椅',' fill="#f7f1e4"'));
  s+=g('box',R(184,160,74,50,'#e74c3c',6,SK)+(f.box_open?R(192,168,58,34,'#f5b7b1',3):R(202,174,34,18,'#ffcf4d',3))+T(220,224,11,'邮筒',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,28,96,112,'#5d6d7e',6,SK)+T(334,70,16,'📰')+T(334,112,16,'☂️'));
  s+=g('door',R(300,148,74,120,'#f2d16b',6,SK)+P('M294 148h86l-10 16H304z','#e67e22')+R(316,176,42,40,'#fff6d8',3)+T(336,250,11,'小店',' fill="#f7f1e4"'));
  s+=T(40,270,18,'🐸');
  return s;}
};
var r100={id:'r100',title:'灯笼菜场',emoji:'🌙',sub:'语文 · 古诗',
 story:['古诗转盘挑战「灯笼菜场」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「灯笼菜场」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'菜价牌',box:[130,20,150,90],views:[
    {text:'墙上写着《游园不值》（宋·叶绍翁），少了一个字：',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'秤台',box:[30,150,120,50],views:[
    {text:'秤台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'菜场口',box:[310,160,70,120],views:[
    {text:'菜场口开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'货摊',box:[290,40,90,120],views:[
    {text:'货摊上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'摊位',box:[24,24,90,70],views:[
    {text:'灯笼亮了，摊主开始收摊。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《游园不值》，宋·叶绍翁。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《游园不值》：春色满园关不住，一枝红杏出墙来。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2744')+R(0,214,400,86,'#1c1a30');
  for(var i=0;i<8;i++)s+=R(i*50,0,50,46,i%2?'#e74c3c':'#f5d76e');
  s+=R(0,46,400,10,'#f7f1e4');
  s+=g('window',R(16,64,96,70,'#fff8e8',6,SK)+T(64,98,20,'🥬')+T(64,146,11,'摊位',' fill="#f7f1e4"'));
  s+=g('board',R(124,62,160,84,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(204,92,13,'今日菜价',' fill="#c0392b"')+T(204,116,11,'青菜 3.5',' fill="#5b4636"')+T(204,134,11,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(22,156,130,50,'#e8d3b0',6,SK)+R(40,148,40,16,'#f7f1e4',3)+R(34,166,70,26,f.desk_open?'#fff':'#d9c4a4',4)+(f.desk_open?'':C(88,180,4,'#5b4636'))+T(88,220,11,'秤台',' fill="#f7f1e4"'));
  s+=g('box',R(184,160,76,50,'#c98b52',4,SK)+(f.box_open?R(192,168,60,34,'#f3ddb8',3):R(202,174,38,18,'#e2b56a',3))+T(222,224,11,'菜筐',' fill="#f7f1e4"'));
  s+=g('shelf',R(286,64,100,120,'#b9793f',6,SK)+T(336,100,18,'🐟')+T(336,140,18,'🍎')+T(336,172,14,'🧄'));
  s+=g('door',R(308,150,72,124,'#27ae60',6,SK)+T(344,200,20,'🚪')+T(344,248,11,'菜场口',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🥕');
  return s;}
};
var EXTRA=[r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72,r73,r74,r75,r76,r77,r78,r79,r80,r81,r82,r83,r84,r85,r86,r87,r88,r89,r90,r91,r92,r93,r94,r95,r96,r97,r98,r99,r100];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/