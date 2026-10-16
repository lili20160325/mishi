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
    {if:['!desk_open'],text:'讲台上的挑战题：',note:'【算一算】笔记本每本 6.5 元，买 2 本；橡皮每块 3.2 元，买 3 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'22.6',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「快乐教室」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开讲台上的题。','仔细看【算一算】，多步时先算哪一步？','先算笔记本总价，再加橡皮总价。']}
 ],
 explain:['6.5×2+3.2×3=22.6','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','22.6']],
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
    {if:['!desk_open'],text:'桌子抽屉锁着，纸条上有题：',note:'【算一算】笔记本每本 5.4 元，买 4 本；橡皮每块 1.5 元，买 6 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'30.6',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份点心！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开桌子的密码。','看纸条上的题，可能要算两步。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_gift',obj:'desk',tiers:['把点心拿起来。','点桌子拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把点心交给机器人小厨。','选中点心，再点机器人小厨。','先点物品，再点对方。']}
 ],
 explain:['5.4×4+1.5×6=30.6','拿到点心。','交给机器人小厨，任务完成。'],
 solution:[['code','desk','30.6'],['take','desk'],['use','door','gift_r8']],
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
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】笔记本每本 3.75 元，买 2 本；橡皮每块 2.5 元，买 4 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'17.5',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看球架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['3.75×2+2.5×4=17.5','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','17.5'],['take','desk'],['take','shelf'],['combine','partA_r9','partB_r9'],['use','door','combo_r9']],
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
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】笔记本每本 8.2 元，买 3 本；橡皮每块 1.6 元，买 5 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'32.6',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先算笔记本总价，再加橡皮总价。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，复数名词，6 个字母，首字母 C；指“成组的语块”。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['8.2×3+1.6×5=32.6','How do you learn new words? I like to learn words in _____. → CHUNKS','两关都对，挑战成功。'],
 solution:[['code','desk','32.6'],['code','box','CHUNKS']],
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
    {if:['!desk_open'],text:'阅览桌锁着：',note:'【算一算】笔记本每本 9.9 元，买 2 本；橡皮每块 4.5 元，买 2 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'28.8',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算题，注意多步运算。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['9.9×2+4.5×2=28.8','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','28.8'],['take','desk'],['take','shelf'],['combine','scrap_r11','tool_r11'],['use','door','combo_r11']],
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
    {if:['!desk_open'],text:'柜台上有密码锁，旁边贴着纸条：',note:'【算一算】笔记本每本 2.25 元，买 8 本；橡皮每块 3.5 元，买 2 块。一共多少元？',lock:{kind:'num',len:2,answer:'25',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看柜台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点柜台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点出口。','先点钥匙，再点目标。']}
 ],
 explain:['2.25×8+3.5×2=25','打开抽屉拿到钥匙。','用钥匙打开出口，挑战成功。'],
 solution:[['code','desk','25'],['take','desk'],['use','door','key_r14']],
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
    {if:['!desk_open'],text:'检票台上的挑战题：',note:'【算一算】笔记本每本 7.6 元，买 3 本；橡皮每块 0.8 元，买 10 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'30.8',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「小火车站」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开检票台上的题。','仔细看【算一算】，多步时先算哪一步？','先算笔记本总价，再加橡皮总价。']}
 ],
 explain:['7.6×3+0.8×10=30.8','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','30.8']],
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
    {if:['!desk_open'],text:'画桌抽屉锁着，纸条上有题：',note:'【算一算】长方形花坛长 12 米、宽 8 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'44',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开画桌的密码。','看纸条上的题，可能要算两步。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点画桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['外围 (12+2)×(8+2) 减去花坛 12×8 = 44','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','44'],['take','desk'],['use','door','gift_r16']],
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
    {if:['!desk_open'],text:'琴凳旁小桌锁着：',note:'【算一算】长方形花坛长 10 米、宽 6 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开琴凳旁小桌。','算纸条上的题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看乐谱架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['外围 (10+2)×(6+2) 减去花坛 10×6 = 36','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','36'],['take','desk'],['take','shelf'],['combine','partA_r17','partB_r17'],['use','door','combo_r17']],
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
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形花坛长 15 米、宽 9 米。四周铺宽 2 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:3,answer:'112',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，动词/名词，5 个字母，首字母 W；心里不安、怕出事。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['外围 (15+4)×(9+4) 减去花坛 15×9 = 112','_____ = 担心 → WORRY','两关都对，挑战成功。'],
 solution:[['code','desk','112'],['code','box','WORRY']],
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
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】长方形花坛长 8 米、宽 5 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算题，注意多步运算。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看球架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['外围 (8+2)×(5+2) 减去花坛 8×5 = 30','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','30'],['take','desk'],['take','shelf'],['combine','scrap_r19','tool_r19'],['use','door','combo_r19']],
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
    {if:['!desk_open'],text:'讲台上有密码锁，旁边贴着纸条：',note:'【算一算】长方形花坛长 14 米、宽 10 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'52',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看讲台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点讲台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点教室门。','先点钥匙，再点目标。']}
 ],
 explain:['外围 (14+2)×(10+2) 减去花坛 14×10 = 52','打开抽屉拿到钥匙。','用钥匙打开教室门，挑战成功。'],
 solution:[['code','desk','52'],['take','desk'],['use','door','key_r22']],
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
    {if:['!desk_open'],text:'桌子上的挑战题：',note:'【算一算】长方形花坛长 9 米、宽 7 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「甜甜厨房」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开桌子上的题。','仔细看【算一算】，多步时先算哪一步？','先算“花坛+小路”的大长方形，再减去花坛本身。']}
 ],
 explain:['外围 (9+2)×(7+2) 减去花坛 9×7 = 36','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','36']],
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
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】长方形花坛长 16 米、宽 8 米。四周铺宽 2 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:3,answer:'112',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['外围 (16+4)×(8+4) 减去花坛 16×8 = 112','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','112'],['take','desk'],['use','door','gift_r24']],
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
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】长方形花坛长 11 米、宽 5 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['外围 (11+2)×(5+2) 减去花坛 11×5 = 36','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','36'],['take','desk'],['take','shelf'],['combine','partA_r25','partB_r25'],['use','door','combo_r25']],
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
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形桌面长 1.2 米、宽 0.8 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:2,answer:'96',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先把米换成分米，再相乘。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，动词，4 个字母，首字母 F；从上往下掉。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['先换成 12 分米 × 8 分米 = 96 平方分米','Be careful! Don\'t let the book _____. (落下) → FALL','两关都对，挑战成功。'],
 solution:[['code','desk','96'],['code','box','FALL']],
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
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】长方形桌面长 2.5 米、宽 1.2 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'300',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算题，注意多步运算。','先把米换成分米，再相乘。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看星图架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['先换成 25 分米 × 12 分米 = 300 平方分米','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','300'],['take','desk'],['take','shelf'],['combine','scrap_r27','tool_r27'],['use','door','combo_r27']],
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
var r30={id:'r30',title:'云朵车站',emoji:'🚂',sub:'数学 · 挑战',
 story:['你来到了火车站。','检票台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开站台门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门锁着，需要钥匙。',use:[{item:'key_r30',win:true,text:'钥匙一转，站台门开了！「云朵车站」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台上有密码锁，旁边贴着纸条：',note:'【算一算】长方形桌面长 1.5 米、宽 1.5 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'225',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r30'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'时刻表上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'行李架上摆着一些小物件。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {text:'行李箱是空的。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看检票台上的纸条。','纸条上有一道数学题，算出答案就是密码。','先把米换成分米，再相乘。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点检票台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点站台门。','先点钥匙，再点目标。']}
 ],
 explain:['先换成 15 分米 × 15 分米 = 225 平方分米','打开抽屉拿到钥匙。','用钥匙打开站台门，挑战成功。'],
 solution:[['code','desk','225'],['take','desk'],['use','door','key_r30']],
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
var r31={id:'r31',title:'蜡笔小屋',emoji:'🎨',sub:'数学 · 闯关',
 story:['欢迎来到「蜡笔小屋」挑战站！','画桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌上的挑战题：',note:'【算一算】长方形桌面长 3 米、宽 0.6 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'180',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「蜡笔小屋」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {text:'画室门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'画板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'画架上有奖杯模型。'}
  ]},
  {id:'box',name:'颜料盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开画桌上的题。','仔细看【算一算】，多步时先算哪一步？','先把米换成分米，再相乘。']}
 ],
 explain:['先换成 30 分米 × 6 分米 = 180 平方分米','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','180']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(308,150,72,124,'#e8a87c',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r32={id:'r32',title:'歌声房',emoji:'🎵',sub:'数学 · 助人',
 story:['你走进音乐室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开琴凳旁小桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r32',take:['gift_r32'],win:true,text:'小花猫开心地收下了！「歌声房」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌抽屉锁着，纸条上有题：',note:'【算一算】长方形桌面长 1.8 米、宽 1 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'180',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r32'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'乐谱板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {text:'乐谱架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开琴凳旁小桌的密码。','看纸条上的题，可能要算两步。','先把米换成分米，再相乘。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点琴凳旁小桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['先换成 18 分米 × 10 分米 = 180 平方分米','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','180'],['take','desk'],['use','door','gift_r32']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(18,18,96,74,'#e8daef',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#2c3e50',6,' stroke="#9b59b6" stroke-width="5"')+T(208,40,12,'♪ ♫ ♪',' fill="#f1c40f"')+T(208,70,11,'今日曲目',' fill="#ecf0f1"')+T(208,92,9,'Do Re Mi',' fill="#aed6f1"'));
  s+=g('desk',R(28,150,136,56,'#af7ac5',6,SK)+(f.desk_open?R(40,160,70,34,'#d7bde2',4):C(88,180,5,'#5b4636'))+T(96,220,10,'琴旁桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#f39c12',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#7d3c98',6,SK)+T(330,70,22,'🎹')+T(330,115,20,'🎻')+T(330,150,16,'🥁'));
  s+=g('door',R(304,150,72,124,'#8e44ad',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎵')+T(350,275,20,'🎵');
  return s;}
};
var r33={id:'r33',title:'蒲公英花园',emoji:'🌷',sub:'数学 · 益智',
 story:['「蒲公英花园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r33',take:['combo_r33'],win:true,text:'放上去——成功！「蒲公英花园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】长方形桌面长 2 米、宽 1.4 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'280',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r33'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'花架上有材料 B。',take:{give:['partB_r33'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌：材料 A + 材料 B = 成品。顺便一题：十张口（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[{a:'partA_r33',b:'partB_r33',give:['combo_r33'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','先把米换成分米，再相乘。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['先换成 20 分米 × 14 分米 = 280 平方分米','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','280'],['take','desk'],['take','shelf'],['combine','partA_r33','partB_r33'],['use','door','combo_r33']],
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
var r34={id:'r34',title:'跳跳球馆',emoji:'🏀',sub:'数学 · 英语',
 story:['双锁挑战站「跳跳球馆」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形桌面长 0.9 米、宽 0.8 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:2,answer:'72',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'器材箱上还有第二关：',note:'【英语题】Is there _____ in the box? (任何东西)\n（线索：Unit 1，代词，8 个字母，首字母 A；疑问/否定句里表示“任何事物”。）',lock:{kind:'alpha',len:8,answer:'ANYTHING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「跳跳球馆」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上放着完成印章模型。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先把米换成分米，再相乘。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，代词，8 个字母，首字母 A；疑问/否定句里表示“任何事物”。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['先换成 9 分米 × 8 分米 = 72 平方分米','Is there _____ in the box? (任何东西) → ANYTHING','两关都对，挑战成功。'],
 solution:[['code','desk','72'],['code','box','ANYTHING']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,200,400,100,'#e8c878');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(304,155,72,120,'#c98b52',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏀')+T(350,275,20,'🏆');
  return s;}
};
var r35={id:'r35',title:'键盘小屋',emoji:'💻',sub:'数学 · 通行证',
 story:['「键盘小屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r35',take:['combo_r35'],win:true,text:'嘀——通过！「键盘小屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌锁着：',note:'【算一算】长方形桌面长 2.4 米、宽 1.5 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'360',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r35'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'主机架上有一枚徽章。',take:{give:['tool_r35'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[{a:'scrap_r35',b:'tool_r35',give:['combo_r35'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开电脑桌。','算题，注意多步运算。','先把米换成分米，再相乘。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看主机架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['先换成 24 分米 × 15 分米 = 360 平方分米','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','360'],['take','desk'],['take','shelf'],['combine','scrap_r35','tool_r35'],['use','door','combo_r35']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(18,18,96,74,'#d6eaf8',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#1c2833',6,' stroke="#3498db" stroke-width="5"')+T(208,45,14,'💻')+T(208,72,11,'CODE LAB',' fill="#58d68d"')+T(208,92,9,'hello()', ' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#5d6d7e',6,SK)+(f.desk_open?R(40,160,70,34,'#aeb6bf',4):C(88,180,5,'#58d68d'))+T(96,220,10,'电脑桌',' fill="#5b4636"')+R(100,155,50,28,'#2c3e50',3)+R(105,160,40,18,'#3498db',2));
  s+=g('box',R(180,158,76,54,'#3498db',6,SK)+(f.box_open?R(190,166,56,38,'#aed6f1',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#34495e',6,SK)+T(330,70,18,'⌨️')+T(330,110,18,'🖱️')+T(330,145,16,'💾'));
  s+=g('door',R(300,150,72,124,'#2c3e50',6,SK)+C(354,215,5,'#58d68d',SK));
  s+=T(48,275,22,'💻')+T(350,275,20,'🖥️');
  return s;}
};
var r36={id:'r36',title:'晨光书房',emoji:'📚',sub:'语文 · 古诗',
 story:['古诗转盘挑战「晨光书房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','辛']],answer:'辛',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「晨光书房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《悯农》（唐·李绅），少了一个字：',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {text:'书桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'门',box:[310,160,70,120],views:[
    {text:'门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《悯农》，唐·李绅。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《悯农》：谁知盘中餐，粒粒皆辛苦。','缺的字是「辛」。','转对转盘，挑战成功。'],
 solution:[['code','box','辛']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(308,150,72,124,'#c98b52',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📚')+T(350,275,20,'✨');
  return s;}
};
var r37={id:'r37',title:'欢笑教室',emoji:'🏫',sub:'英语 · 拼写',
 story:['英语拼写站「欢笑教室」！','讲台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】There are a _____ new words on the card. (几个)\n（线索：Unit 1，a ___ = 几个，3 个字母，首字母 F。）',lock:{kind:'alpha',len:3,answer:'FEW',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「欢笑教室」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有英语单词卡片。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，a ___ = 几个，3 个字母，首字母 F。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：There are a _____ new words on the card. (几个)','正确答案是 FEW。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','FEW']],
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
var r38={id:'r38',title:'饼干厨房',emoji:'🍳',sub:'数学 · 挑战',
 story:['你来到了厨房。','桌子上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开厨房门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门锁着，需要钥匙。',use:[{item:'key_r38',win:true,text:'钥匙一转，厨房门开了！「饼干厨房」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子上有密码锁，旁边贴着纸条：',note:'【算一算】解方程：3x − 24 = 2x + 18\n求 x。',lock:{kind:'num',len:2,answer:'42',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r38'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'菜谱板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上摆着一些小物件。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'食材盒是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看桌子上的纸条。','纸条上有一道数学题，算出答案就是密码。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点桌子，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点厨房门。','先点钥匙，再点目标。']}
 ],
 explain:['移项合并：(3-2)x = 24+18 → x = 42','打开抽屉拿到钥匙。','用钥匙打开厨房门，挑战成功。'],
 solution:[['code','desk','42'],['take','desk'],['use','door','key_r38']],
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
var r39={id:'r39',title:'跳绳操场',emoji:'⚽',sub:'数学 · 闯关',
 story:['欢迎来到「跳绳操场」挑战站！','长椅上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上的挑战题：',note:'【算一算】解方程：4x − 10 = 2x + 30\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「跳绳操场」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上有奖杯模型。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开长椅上的题。','仔细看【算一算】，多步时先算哪一步？','把含 x 的项移到一边，常数移到另一边。']}
 ],
 explain:['移项合并：(4-2)x = 10+30 → x = 20','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','20']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,200,400,100,'#9ee07a');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(308,155,72,120,'#c98b52',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'⚽')+T(350,275,20,'🏆');
  return s;}
};
var r40={id:'r40',title:'鸭鸭公园',emoji:'🎠',sub:'数学 · 助人',
 story:['你走进公园，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开石凳上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r40',take:['gift_r40'],win:true,text:'小花猫开心地收下了！「鸭鸭公园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳抽屉锁着，纸条上有题：',note:'【算一算】解方程：5x − 15 = 3x + 25\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r40'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开石凳的密码。','看纸条上的题，可能要算两步。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点石凳拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['移项合并：(5-3)x = 15+25 → x = 20','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','20'],['take','desk'],['use','door','gift_r40']],
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
var r41={id:'r41',title:'故事馆',emoji:'📖',sub:'数学 · 益智',
 story:['「故事馆」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r41',take:['combo_r41'],win:true,text:'放上去——成功！「故事馆」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌锁着：',note:'【算一算】解方程：2x − 40 = 1x + 16\n求 x。',lock:{kind:'num',len:2,answer:'56',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r41'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'书架上有材料 B。',take:{give:['partB_r41'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板：材料 A + 材料 B = 成品。顺便一题：一点一横长，一撇到南洋（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[{a:'partA_r41',b:'partB_r41',give:['combo_r41'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算纸条上的题。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['移项合并：(2-1)x = 40+16 → x = 56','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','56'],['take','desk'],['take','shelf'],['combine','partA_r41','partB_r41'],['use','door','combo_r41']],
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
var r42={id:'r42',title:'银河台',emoji:'🔭',sub:'数学 · 英语',
 story:['双锁挑战站「银河台」！','先过观测台，再过星盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】解方程：3x − 12 = 1x + 28\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'星盒上还有第二关：',note:'【英语题】Can you write a _____? (句子)\n（线索：Unit 1，名词，8 个字母，首字母 S；由单词组成、表达完整意思。）',lock:{kind:'alpha',len:8,answer:'SENTENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「银河台」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'观星门',box:[310,160,70,120],views:[
    {text:'观星门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'星图架上放着完成印章模型。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，名词，8 个字母，首字母 S；由单词组成、表达完整意思。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['移项合并：(3-1)x = 12+28 → x = 20','Can you write a _____? (句子) → SENTENCE','两关都对，挑战成功。'],
 solution:[['code','desk','20'],['code','box','SENTENCE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(304,150,72,124,'#8e7cc3',6,SK)+C(358,215,5,'#ffd34d',SK));
  s+=T(50,270,22,'🔭')+T(350,270,20,'🚀');
  return s;}
};
var r43={id:'r43',title:'试管屋',emoji:'🔬',sub:'数学 · 通行证',
 story:['「试管屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r43',take:['combo_r43'],win:true,text:'嘀——通过！「试管屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台锁着：',note:'【算一算】解方程：4x − 8 = 3x + 20\n求 x。',lock:{kind:'num',len:2,answer:'28',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r43'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'器材架上有一枚徽章。',take:{give:['tool_r43'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[{a:'scrap_r43',b:'tool_r43',give:['combo_r43'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开实验台。','算题，注意多步运算。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看器材架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['移项合并：(4-3)x = 8+20 → x = 28','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','28'],['take','desk'],['take','shelf'],['combine','scrap_r43','tool_r43'],['use','door','combo_r43']],
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
var r44={id:'r44',title:'气球超市',emoji:'🛒',sub:'语文 · 古诗',
 story:['古诗转盘挑战「气球超市」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','波']],answer:'波',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「气球超市」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'墙上写着《咏鹅》（唐·骆宾王），少了一个字：',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {text:'柜台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {text:'出口开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {text:'货架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《咏鹅》，唐·骆宾王。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《咏鹅》：白毛浮绿水，红掌拨清波。','缺的字是「波」。','转对转盘，挑战成功。'],
 solution:[['code','box','波']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  for(var i=0;i<5;i++)s+=R(20+i*74,230,60,50,'#f8e0d0',4,' opacity=".5"');
  s+=g('window',R(16,16,100,78,'#cce8ff',8,SK)+T(66,55,14,'OPEN',' fill="#e74c3c" font-weight="700"'));
  s+=g('board',R(130,14,160,92,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(210,45,14,'📢')+T(210,72,12,'特价区',' fill="#c0392b"')+T(210,92,10,'SALE',' fill="#e67e22"'));
  s+=g('desk',R(24,150,130,54,'#e0d0c0',6,SK)+(f.desk_open?R(36,160,70,32,'#fff',4):C(80,178,5,'#5b4636'))+T(90,218,10,'收银台',' fill="#5b4636"')+T(140,175,16,'🧾'));
  s+=g('box',R(175,158,80,54,'#ffb36b',6,SK)+(f.box_open?R(185,166,60,38,'#ffe0b0',3):R(198,174,34,20,'#ffcf4d',3))+T(215,226,10,'购物篮',' fill="#5b4636"'));
  s+=g('shelf',R(270,24,114,130,'#b9793f',6,SK)+R(280,55,94,8,'#8a5428',2)+R(280,95,94,8,'#8a5428',2)+T(327,75,16,'🍪')+T(327,115,16,'🧃'));
  s+=g('door',R(308,155,72,120,'#5dade2',6,SK)+R(316,165,56,50,'#aed6f1',4)+C(362,230,5,'#ffcf4d',SK)+T(338,255,9,'出口',' fill="#1a5276"'));
  s+=T(48,275,22,'🛒')+T(350,275,20,'🛒');
  return s;}
};
var r45={id:'r45',title:'出发站',emoji:'🚂',sub:'英语 · 拼写',
 story:['英语拼写站「出发站」！','检票台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Look them up in the _____. (词典)\n（线索：Unit 1，名词，10 个字母，首字母 D；查单词用的书。）',lock:{kind:'alpha',len:10,answer:'DICTIONARY',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「出发站」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'行李架上有英语单词卡片。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，名词，10 个字母，首字母 D；查单词用的书。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Look them up in the _____. (词典)','正确答案是 DICTIONARY。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','DICTIONARY']],
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
var r46={id:'r46',title:'调色盘屋',emoji:'🎨',sub:'数学 · 挑战',
 story:['你来到了美术室。','画桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开画室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {text:'画室门锁着，需要钥匙。',use:[{item:'key_r46',win:true,text:'钥匙一转，画室门开了！「调色盘屋」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌上有密码锁，旁边贴着纸条：',note:'【算一算】解方程：5x − 20 = 2x + 40\n求 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r46'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'画板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'画架上摆着一些小物件。'}
  ]},
  {id:'box',name:'颜料盒',box:[200,160,70,50],views:[
    {text:'颜料盒是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看画桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','把含 x 的项移到一边，常数移到另一边。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点画桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点画室门。','先点钥匙，再点目标。']}
 ],
 explain:['移项合并：(5-2)x = 20+40 → x = 20','打开抽屉拿到钥匙。','用钥匙打开画室门，挑战成功。'],
 solution:[['code','desk','20'],['take','desk'],['use','door','key_r46']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(300,150,72,124,'#e8a87c',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r47={id:'r47',title:'钢琴角',emoji:'🎵',sub:'数学 · 闯关',
 story:['欢迎来到「钢琴角」挑战站！','琴凳旁小桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌上的挑战题：',note:'【算一算】解方程：3x − 9 = 2x + 21\n求 x。',lock:{kind:'num',len:2,answer:'30',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「钢琴角」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {text:'琴房门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'乐谱板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {text:'乐谱架上有奖杯模型。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开琴凳旁小桌上的题。','仔细看【算一算】，多步时先算哪一步？','把含 x 的项移到一边，常数移到另一边。']}
 ],
 explain:['移项合并：(3-2)x = 9+21 → x = 30','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','30']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(18,18,96,74,'#e8daef',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#2c3e50',6,' stroke="#9b59b6" stroke-width="5"')+T(208,40,12,'♪ ♫ ♪',' fill="#f1c40f"')+T(208,70,11,'今日曲目',' fill="#ecf0f1"')+T(208,92,9,'Do Re Mi',' fill="#aed6f1"'));
  s+=g('desk',R(28,150,136,56,'#af7ac5',6,SK)+(f.desk_open?R(40,160,70,34,'#d7bde2',4):C(88,180,5,'#5b4636'))+T(96,220,10,'琴旁桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#f39c12',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#7d3c98',6,SK)+T(330,70,22,'🎹')+T(330,115,20,'🎻')+T(330,150,16,'🥁'));
  s+=g('door',R(308,150,72,124,'#8e44ad',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎵')+T(350,275,20,'🎵');
  return s;}
};
var r48={id:'r48',title:'蜜蜂花园',emoji:'🌷',sub:'数学 · 助人',
 story:['你走进花园，遇见了小花猫。','小黄说：“帮小花猫拿到礼物吧！”','先解开石凳上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r48',take:['gift_r48'],win:true,text:'小花猫开心地收下了！「蜜蜂花园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳抽屉锁着，纸条上有题：',note:'【算一算】一桶油重 18.6 千克，用去 5.8 千克后又倒入 3.5 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'16.3',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r48'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开石凳的密码。','看纸条上的题，可能要算两步。','先减去用去的，再加上倒入的。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点石凳拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['18.6 − 5.8 + 3.5 = 16.3','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','16.3'],['take','desk'],['use','door','gift_r48']],
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
var r49={id:'r49',title:'接力馆',emoji:'🏀',sub:'数学 · 益智',
 story:['「接力馆」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r49',take:['combo_r49'],win:true,text:'放上去——成功！「接力馆」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】一桶油重 25.4 千克，用去 8.7 千克后又倒入 4.2 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'20.9',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r49'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'球架上有材料 B。',take:{give:['partB_r49'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板：材料 A + 材料 B = 成品。顺便一题：上边雨，下边令（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[{a:'partA_r49',b:'partB_r49',give:['combo_r49'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','先减去用去的，再加上倒入的。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看球架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['25.4 − 8.7 + 4.2 = 20.9','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','20.9'],['take','desk'],['take','shelf'],['combine','partA_r49','partB_r49'],['use','door','combo_r49']],
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
var r50={id:'r50',title:'鼠标屋',emoji:'💻',sub:'数学 · 英语',
 story:['双锁挑战站「鼠标屋」！','先过电脑桌，再过配件盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一桶油重 30 千克，用去 12.5 千克后又倒入 6.8 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'24.3',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'配件盒上还有第二关：',note:'【英语题】Make word _____ with pictures. (卡片)\n（线索：Unit 1，复数名词，5 个字母，首字母 C；配图记单词用的纸片。）',lock:{kind:'alpha',len:5,answer:'CARDS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「鼠标屋」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'机房门',box:[310,160,70,120],views:[
    {text:'机房门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {text:'主机架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先减去用去的，再加上倒入的。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1，复数名词，5 个字母，首字母 C；配图记单词用的纸片。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['30 − 12.5 + 6.8 = 24.3','Make word _____ with pictures. (卡片) → CARDS','两关都对，挑战成功。'],
 solution:[['code','desk','24.3'],['code','box','CARDS']],
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
var r51={id:'r51',title:'午后书房',emoji:'📚',sub:'数学 · 通行证',
 story:['「午后书房」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r51',take:['combo_r51'],win:true,text:'嘀——通过！「午后书房」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌锁着：',note:'【算一算】一桶油重 16.8 千克，用去 4.5 千克后又倒入 2.7 千克。现在桶里有多少千克？',lock:{kind:'num',len:2,answer:'15',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r51'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'书架上有一枚徽章。',take:{give:['tool_r51'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[{a:'scrap_r51',b:'tool_r51',give:['combo_r51'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开书桌。','算题，注意多步运算。','先减去用去的，再加上倒入的。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['16.8 − 4.5 + 2.7 = 15','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','15'],['take','desk'],['take','shelf'],['combine','scrap_r51','tool_r51'],['use','door','combo_r51']],
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
var r52={id:'r52',title:'智慧教室',emoji:'🏫',sub:'语文 · 古诗',
 story:['古诗转盘挑战「智慧教室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','雪']],answer:'雪',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「智慧教室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《江雪》（唐·柳宗元），少了一个字：',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n（想一想课文里完整的一句）'}
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
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《江雪》，唐·柳宗元。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《江雪》：孤舟蓑笠翁，独钓寒江雪。','缺的字是「雪」。','转对转盘，挑战成功。'],
 solution:[['code','box','雪']],
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
var r53={id:'r53',title:'果汁厨房',emoji:'🍳',sub:'英语 · 拼写',
 story:['英语拼写站「果汁厨房」！','桌子上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Keep the chunks in _____. (记在心里)\n（线索：Unit 1，短语 keep in ____，4 个字母，首字母 M；指头脑、心里。）',lock:{kind:'alpha',len:4,answer:'MIND',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「果汁厨房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上有英语单词卡片。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 1，短语 keep in ____，4 个字母，首字母 M；指头脑、心里。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Keep the chunks in _____. (记在心里)','正确答案是 MIND。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','MIND']],
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
var r54={id:'r54',title:'跑道旁',emoji:'⚽',sub:'数学 · 挑战',
 story:['你来到了操场。','长椅上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开场馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门锁着，需要钥匙。',use:[{item:'key_r54',win:true,text:'钥匙一转，场馆门开了！「跑道旁」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上有密码锁，旁边贴着纸条：',note:'【算一算】一桶油重 22.2 千克，用去 7.6 千克后又倒入 5.4 千克。现在桶里有多少千克？',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r54'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上摆着一些小物件。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'器材箱是空的。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看长椅上的纸条。','纸条上有一道数学题，算出答案就是密码。','先减去用去的，再加上倒入的。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点场馆门。','先点钥匙，再点目标。']}
 ],
 explain:['22.2 − 7.6 + 5.4 = 20','打开抽屉拿到钥匙。','用钥匙打开场馆门，挑战成功。'],
 solution:[['code','desk','20'],['take','desk'],['use','door','key_r54']],
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
var r55={id:'r55',title:'蜻蜓公园',emoji:'🎠',sub:'数学 · 闯关',
 story:['欢迎来到「蜻蜓公园」挑战站！','小黄指着石凳：“把这道题做对，就算过关！”','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上的挑战题：',note:'【算一算】一桶油重 40.5 千克，用去 15.5 千克后又倒入 8 千克。现在桶里有多少千克？',lock:{kind:'num',len:2,answer:'33',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「蜻蜓公园」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有奖杯模型。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开石凳上的题。','仔细看【算一算】，多步时先算哪一步？','先减去用去的，再加上倒入的。']}
 ],
 explain:['40.5 − 15.5 + 8 = 33','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','33']],
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
var r56={id:'r56',title:'阅读角',emoji:'📖',sub:'数学 · 助人',
 story:['你走进图书馆，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开阅览桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r56',take:['gift_r56'],win:true,text:'小花猫开心地收下了！「阅读角」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌抽屉锁着，纸条上有题：',note:'【算一算】一桶油重 12.75 千克，用去 3.25 千克后又倒入 2.5 千克。现在桶里有多少千克？',lock:{kind:'num',len:2,answer:'12',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r56'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开阅览桌的密码。','看纸条上的题，可能要算两步。','先减去用去的，再加上倒入的。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点阅览桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['12.75 − 3.25 + 2.5 = 12','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','12'],['take','desk'],['use','door','gift_r56']],
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
var r57={id:'r57',title:'卫星台',emoji:'🔭',sub:'数学 · 益智',
 story:['「卫星台」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r57',take:['combo_r57'],win:true,text:'放上去——成功！「卫星台」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】一桶油重 28.8 千克，用去 9.9 千克后又倒入 4.4 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'23.3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r57'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'星图架上有材料 B。',take:{give:['partB_r57'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'星图：材料 A + 材料 B = 成品。顺便一题：一日一月（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[{a:'partA_r57',b:'partB_r57',give:['combo_r57'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算纸条上的题。','先减去用去的，再加上倒入的。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看星图架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['28.8 − 9.9 + 4.4 = 23.3','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','23.3'],['take','desk'],['take','shelf'],['combine','partA_r57','partB_r57'],['use','door','combo_r57']],
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
var r58={id:'r58',title:'显微镜屋',emoji:'🔬',sub:'数学 · 英语',
 story:['双锁挑战站「显微镜屋」！','先过实验台，再过试剂箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】梯形：上底 6.5 分米，下底 9.5 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'32',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'试剂箱上还有第二关：',note:'【英语题】I\'m _____ to join the science club. (be going to)\n（线索：Unit 2，be _____ to 表打算，5 个字母，首字母 G。）',lock:{kind:'alpha',len:5,answer:'GOING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「显微镜屋」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'实验室门',box:[310,160,70,120],views:[
    {text:'实验室门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'器材架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，be _____ to 表打算，5 个字母，首字母 G。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['（6.5+9.5）×4÷2 = 32','I\'m _____ to join the science club. (be going to) → GOING','两关都对，挑战成功。'],
 solution:[['code','desk','32'],['code','box','GOING']],
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
var r59={id:'r59',title:'草莓超市',emoji:'🛒',sub:'数学 · 通行证',
 story:['「草莓超市」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r59',take:['combo_r59'],win:true,text:'嘀——通过！「草莓超市」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台锁着：',note:'【算一算】梯形：上底 5 分米，下底 11 分米，高 6 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r59'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'货架上有一枚徽章。',take:{give:['tool_r59'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[{a:'scrap_r59',b:'tool_r59',give:['combo_r59'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开柜台。','算题，注意多步运算。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看货架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['（5+11）×6÷2 = 48','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','48'],['take','desk'],['take','shelf'],['combine','scrap_r59','tool_r59'],['use','door','combo_r59']],
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
var r60={id:'r60',title:'候车室',emoji:'🚂',sub:'语文 · 古诗',
 story:['古诗转盘挑战「候车室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','尽']],answer:'尽',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「候车室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'墙上写着《赋得古原草送别》（唐·白居易），少了一个字：',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {text:'检票台上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'行李架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《赋得古原草送别》，唐·白居易。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《赋得古原草送别》：野火烧不尽，春风吹又生。','缺的字是「尽」。','转对转盘，挑战成功。'],
 solution:[['code','box','尽']],
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
var r61={id:'r61',title:'剪纸屋',emoji:'🎨',sub:'英语 · 拼写',
 story:['英语拼写站「剪纸屋」！','画桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Which _____ are you going to join? (社团)\n（线索：Unit 2，名词，4 个字母，首字母 C；兴趣小组/社团。）',lock:{kind:'alpha',len:4,answer:'CLUB',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「剪纸屋」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {text:'画室门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'画架上有英语单词卡片。'}
  ]},
  {id:'box',name:'颜料盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，4 个字母，首字母 C；兴趣小组/社团。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Which _____ are you going to join? (社团)','正确答案是 CLUB。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','CLUB']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(300,150,72,124,'#e8a87c',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r62={id:'r62',title:'鼓点房',emoji:'🎵',sub:'数学 · 挑战',
 story:['小黄走进了音乐室，门在身后轻轻关上。','琴凳旁小桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开琴房门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {text:'琴房门锁着，需要钥匙。',use:[{item:'key_r62',win:true,text:'钥匙一转，琴房门开了！「鼓点房」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌上有密码锁，旁边贴着纸条：',note:'【算一算】梯形：上底 7 分米，下底 13 分米，高 5 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'50',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r62'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'乐谱板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {text:'乐谱架上摆着一些小物件。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'乐器盒是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看琴凳旁小桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点琴凳旁小桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点琴房门。','先点钥匙，再点目标。']}
 ],
 explain:['（7+13）×5÷2 = 50','打开抽屉拿到钥匙。','用钥匙打开琴房门，挑战成功。'],
 solution:[['code','desk','50'],['take','desk'],['use','door','key_r62']],
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
var r63={id:'r63',title:'玫瑰园',emoji:'🌷',sub:'数学 · 闯关',
 story:['欢迎来到「玫瑰园」挑战站！','石凳上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上的挑战题：',note:'【算一算】梯形：上底 4.5 分米，下底 8.5 分米，高 6 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'39',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「玫瑰园」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有奖杯模型。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开石凳上的题。','仔细看【算一算】，多步时先算哪一步？','梯形面积 =（上底+下底）×高÷2。']}
 ],
 explain:['（4.5+8.5）×6÷2 = 39','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','39']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,160,400,140,'#90d080');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(308,160,70,120,'#8b6914',6,SK)+P('M308 160l35-20 35 20','#6aaa5a',SK)+C(362,220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'🌷')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}
};
var r64={id:'r64',title:'乒乓球室',emoji:'🏀',sub:'数学 · 助人',
 story:['你走进体育馆，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r64',take:['gift_r64'],win:true,text:'小花猫开心地收下了！「乒乓球室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】梯形：上底 8 分米，下底 14 分米，高 3.5 分米。面积是多少平方分米？',lock:{kind:'num',len:4,dot:true,answer:'38.5',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r64'],set:['took_gift'],text:'你拿到了礼物。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['（8+14）×3.5÷2 = 38.5','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','38.5'],['take','desk'],['use','door','gift_r64']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,200,400,100,'#e8c878');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(304,155,72,120,'#c98b52',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🏀')+T(350,275,20,'🏆');
  return s;}
};
var r65={id:'r65',title:'屏幕屋',emoji:'💻',sub:'数学 · 益智',
 story:['「屏幕屋」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r65',take:['combo_r65'],win:true,text:'放上去——成功！「屏幕屋」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌锁着：',note:'【算一算】梯形：上底 3 分米，下底 9 分米，高 8 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r65'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'主机架上有材料 B。',take:{give:['partB_r65'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'屏幕墙：材料 A + 材料 B = 成品。顺便一题：禾字去了撇（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[{a:'partA_r65',b:'partB_r65',give:['combo_r65'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开电脑桌。','算纸条上的题。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看主机架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['（3+9）×8÷2 = 48','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','48'],['take','desk'],['take','shelf'],['combine','partA_r65','partB_r65'],['use','door','combo_r65']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(18,18,96,74,'#d6eaf8',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#1c2833',6,' stroke="#3498db" stroke-width="5"')+T(208,45,14,'💻')+T(208,72,11,'CODE LAB',' fill="#58d68d"')+T(208,92,9,'hello()', ' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#5d6d7e',6,SK)+(f.desk_open?R(40,160,70,34,'#aeb6bf',4):C(88,180,5,'#58d68d'))+T(96,220,10,'电脑桌',' fill="#5b4636"')+R(100,155,50,28,'#2c3e50',3)+R(105,160,40,18,'#3498db',2));
  s+=g('box',R(180,158,76,54,'#3498db',6,SK)+(f.box_open?R(190,166,56,38,'#aed6f1',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#34495e',6,SK)+T(330,70,18,'⌨️')+T(330,110,18,'🖱️')+T(330,145,16,'💾'));
  s+=g('door',R(300,150,72,124,'#2c3e50',6,SK)+C(354,215,5,'#58d68d',SK));
  s+=T(48,275,22,'💻')+T(350,275,20,'🖥️');
  return s;}
};
var r66={id:'r66',title:'晚安书房',emoji:'📚',sub:'数学 · 英语',
 story:['双锁挑战站「晚安书房」！','先过书桌，再过小盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】梯形：上底 6 分米，下底 12 分米，高 4.5 分米。面积是多少平方分米？',lock:{kind:'num',len:4,dot:true,answer:'40.5',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'小盒上还有第二关：',note:'【英语题】I want to join the _____ club. (科学)\n（线索：Unit 2，形容词性名词，7 个字母，首字母 S；研究自然的学科。）',lock:{kind:'alpha',len:7,answer:'SCIENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「晚安书房」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'门',box:[310,160,70,120],views:[
    {text:'门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，形容词性名词，7 个字母，首字母 S；研究自然的学科。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['（6+12）×4.5÷2 = 40.5','I want to join the _____ club. (科学) → SCIENCE','两关都对，挑战成功。'],
 solution:[['code','desk','40.5'],['code','box','SCIENCE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(304,150,72,124,'#c98b52',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📚')+T(350,275,20,'✨');
  return s;}
};
var r67={id:'r67',title:'加油教室',emoji:'🏫',sub:'数学 · 通行证',
 story:['「加油教室」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r67',take:['combo_r67'],win:true,text:'嘀——通过！「加油教室」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台锁着：',note:'【算一算】梯形：上底 5.5 分米，下底 10.5 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'32',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r67'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'书架上有一枚徽章。',take:{give:['tool_r67'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[{a:'scrap_r67',b:'tool_r67',give:['combo_r67'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开讲台。','算题，注意多步运算。','梯形面积 =（上底+下底）×高÷2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['（5.5+10.5）×4÷2 = 32','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','32'],['take','desk'],['take','shelf'],['combine','scrap_r67','tool_r67'],['use','door','combo_r67']],
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
var r68={id:'r68',title:'沙拉厨房',emoji:'🍳',sub:'语文 · 古诗',
 story:['古诗转盘挑战「沙拉厨房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「沙拉厨房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'墙上写着《望庐山瀑布》（唐·李白），少了一个字：',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {text:'桌子上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《望庐山瀑布》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《望庐山瀑布》：飞流直下三千尺，疑是银河落九天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
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
var r69={id:'r69',title:'沙坑旁',emoji:'⚽',sub:'英语 · 拼写',
 story:['英语拼写站「沙坑旁」！','小黄看到英文卡片：“用大写字母拼出来！”','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Any _____? (有什么建议吗？)\n（线索：Unit 2，不可数名词，6 个字母，首字母 A；别人给你的建议。）',lock:{kind:'alpha',len:6,answer:'ADVICE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「沙坑旁」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上有英语单词卡片。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，不可数名词，6 个字母，首字母 A；别人给你的建议。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Any _____? (有什么建议吗？)','正确答案是 ADVICE。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','ADVICE']],
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
var r70={id:'r70',title:'松鼠公园',emoji:'🎠',sub:'数学 · 挑战',
 story:['你来到了公园。','石凳上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开园门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门锁着，需要钥匙。',use:[{item:'key_r70',win:true,text:'钥匙一转，园门开了！「松鼠公园」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上有密码锁，旁边贴着纸条：',note:'【算一算】一块三角形彩纸底 8 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r70'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上摆着一些小物件。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'花箱是空的。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看石凳上的纸条。','纸条上有一道数学题，算出答案就是密码。','先求一块三角形面积，再乘 2。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点石凳，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点园门。','先点钥匙，再点目标。']}
 ],
 explain:['一块 = 8×6÷2 = 24，两块 = 48','打开抽屉拿到钥匙。','用钥匙打开园门，挑战成功。'],
 solution:[['code','desk','48'],['take','desk'],['use','door','key_r70']],
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
var r71={id:'r71',title:'字典屋',emoji:'📖',sub:'数学 · 闯关',
 story:['欢迎来到「字典屋」挑战站！','阅览桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌上的挑战题：',note:'【算一算】一块三角形彩纸底 10 厘米、高 7 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'70',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「字典屋」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'馆门',box:[310,160,70,120],views:[
    {text:'馆门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有奖杯模型。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开阅览桌上的题。','仔细看【算一算】，多步时先算哪一步？','先求一块三角形面积，再乘 2。']}
 ],
 explain:['一块 = 10×7÷2 = 35，两块 = 70','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','70']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fef9e7',6,' stroke="#b7950b" stroke-width="5"')+T(208,45,14,'📖')+T(208,72,11,'本周推荐',' fill="#7d6608"')+T(208,92,9,'静静阅读',' fill="#b7950b"'));
  s+=g('desk',R(28,150,136,56,'#d4b896',6,SK)+(f.desk_open?R(40,160,70,34,'#f5e6d3',4):C(88,180,5,'#5b4636'))+T(96,220,10,'阅览桌',' fill="#5b4636"')+T(145,170,16,'🔎'));
  s+=g('box',R(180,158,76,54,'#a0522d',6,SK)+(f.box_open?R(190,166,56,38,'#e8d5c4',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'还书箱',' fill="#5b4636"'));
  s+=g('shelf',R(270,16,118,160,'#8b6914',6,SK)+R(280,50,98,8,'#5d4e37',2)+R(280,90,98,8,'#5d4e37',2)+R(280,130,98,8,'#5d4e37',2)+T(329,70,12,'📘')+T(329,110,12,'📙')+T(329,150,12,'📔'));
  s+=g('door',R(308,150,72,124,'#a0522d',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📖')+T(350,275,20,'📚');
  return s;}
};
var r72={id:'r72',title:'彗星台',emoji:'🔭',sub:'数学 · 助人',
 story:['你走进天文台，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开观测台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r72',take:['gift_r72'],win:true,text:'小花猫开心地收下了！「彗星台」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台抽屉锁着，纸条上有题：',note:'【算一算】一块三角形彩纸底 12 厘米、高 5 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'60',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r72'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'星图上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'星图架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开观测台的密码。','看纸条上的题，可能要算两步。','先求一块三角形面积，再乘 2。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点观测台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['一块 = 12×5÷2 = 30，两块 = 60','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','60'],['take','desk'],['use','door','gift_r72']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(304,150,72,124,'#8e7cc3',6,SK)+C(358,215,5,'#ffd34d',SK));
  s+=T(50,270,22,'🔭')+T(350,270,20,'🚀');
  return s;}
};
var r73={id:'r73',title:'烧杯角',emoji:'🔬',sub:'数学 · 益智',
 story:['「烧杯角」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到实验台机器上，就算完成任务。'],
 objects:[
  {id:'door',name:'实验台机器',box:[310,160,70,120],views:[
    {text:'实验台机器等着成品。',use:[{item:'combo_r73',take:['combo_r73'],win:true,text:'放上去——成功！「烧杯角」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台锁着：',note:'【算一算】一块三角形彩纸底 9 厘米、高 8 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'72',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r73'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'器材架上有材料 B。',take:{give:['partB_r73'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'公式板：材料 A + 材料 B = 成品。顺便一题：一口咬掉牛尾巴（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[{a:'partA_r73',b:'partB_r73',give:['combo_r73'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开实验台。','算纸条上的题。','先求一块三角形面积，再乘 2。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看器材架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到实验台机器。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['一块 = 9×8÷2 = 36，两块 = 72','拿到材料 A 和 B。','组合成成品，放到实验台机器。'],
 solution:[['code','desk','72'],['take','desk'],['take','shelf'],['combine','partA_r73','partB_r73'],['use','door','combo_r73']],
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
var r74={id:'r74',title:'牛奶超市',emoji:'🛒',sub:'数学 · 英语',
 story:['双锁挑战站「牛奶超市」！','先过柜台，再过购物篮。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一块三角形彩纸底 14 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'84',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'购物篮上还有第二关：',note:'【英语题】You can try new _____. (事物)\n（线索：Unit 2，复数名词，6 个字母，首字母 T；各种新事物。）',lock:{kind:'alpha',len:6,answer:'THINGS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「牛奶超市」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {text:'出口只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {text:'货架上放着完成印章模型。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','先求一块三角形面积，再乘 2。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，复数名词，6 个字母，首字母 T；各种新事物。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['一块 = 14×6÷2 = 42，两块 = 84','You can try new _____. (事物) → THINGS','两关都对，挑战成功。'],
 solution:[['code','desk','84'],['code','box','THINGS']],
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
var r75={id:'r75',title:'月台边',emoji:'🚂',sub:'数学 · 通行证',
 story:['「月台边」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r75',take:['combo_r75'],win:true,text:'嘀——通过！「月台边」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台锁着：',note:'【算一算】一块三角形彩纸底 15 厘米、高 4 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'60',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r75'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'行李架上有一枚徽章。',take:{give:['tool_r75'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[{a:'scrap_r75',b:'tool_r75',give:['combo_r75'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开检票台。','算题，注意多步运算。','先求一块三角形面积，再乘 2。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看行李架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['一块 = 15×4÷2 = 30，两块 = 60','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','60'],['take','desk'],['take','shelf'],['combine','scrap_r75','tool_r75'],['use','door','combo_r75']],
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
var r76={id:'r76',title:'油画室',emoji:'🎨',sub:'语文 · 古诗',
 story:['古诗转盘挑战「油画室」！','小黄想起课文里读过《早发白帝城》。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「油画室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'墙上写着《早发白帝城》（唐·李白），少了一个字：',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {text:'画桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {text:'画室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {text:'画架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《早发白帝城》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《早发白帝城》：两岸猿声啼不住，轻舟已过万重山。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(308,150,72,124,'#e8a87c',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r77={id:'r77',title:'长笛房',emoji:'🎵',sub:'英语 · 拼写',
 story:['英语拼写站「长笛房」！','琴凳旁小桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Join a club to make more _____. (朋友)\n（线索：Unit 2，复数名词，7 个字母，首字母 F；和你要好的人。）',lock:{kind:'alpha',len:7,answer:'FRIENDS',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「长笛房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {text:'琴房门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {text:'乐谱架上有英语单词卡片。'}
  ]},
  {id:'box',name:'乐器盒',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，复数名词，7 个字母，首字母 F；和你要好的人。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：Join a club to make more _____. (朋友)','正确答案是 FRIENDS。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','FRIENDS']],
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
var r78={id:'r78',title:'向日葵园',emoji:'🌷',sub:'数学 · 挑战',
 story:['你来到了花园。','石凳上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开园门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门锁着，需要钥匙。',use:[{item:'key_r78',win:true,text:'钥匙一转，园门开了！「向日葵园」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上有密码锁，旁边贴着纸条：',note:'【算一算】一块三角形彩纸底 7 厘米、高 10 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'70',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r78'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'告示牌上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上摆着一些小物件。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'花箱是空的。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看石凳上的纸条。','纸条上有一道数学题，算出答案就是密码。','先求一块三角形面积，再乘 2。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点石凳，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点园门。','先点钥匙，再点目标。']}
 ],
 explain:['一块 = 7×10÷2 = 35，两块 = 70','打开抽屉拿到钥匙。','用钥匙打开园门，挑战成功。'],
 solution:[['code','desk','70'],['take','desk'],['use','door','key_r78']],
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
var r79={id:'r79',title:'篮球角',emoji:'🏀',sub:'数学 · 闯关',
 story:['欢迎来到「篮球角」挑战站！','长椅上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上的挑战题：',note:'【算一算】一块三角形彩纸底 11 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'66',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「篮球角」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上有奖杯模型。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开长椅上的题。','仔细看【算一算】，多步时先算哪一步？','先求一块三角形面积，再乘 2。']}
 ],
 explain:['一块 = 11×6÷2 = 33，两块 = 66','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','66']],
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
var r80={id:'r80',title:'U盘屋',emoji:'💻',sub:'数学 · 助人',
 story:['你走进电脑室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开电脑桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r80',take:['gift_r80'],win:true,text:'小花猫开心地收下了！「U盘屋」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌抽屉锁着，纸条上有题：',note:'【算一算】小路长 48 米。从头到尾，每隔 6 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r80'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'屏幕墙上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {text:'主机架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开电脑桌的密码。','看纸条上的题，可能要算两步。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点电脑桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['段数=48÷6=8，棵数=段数+1=9','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','9'],['take','desk'],['use','door','gift_r80']],
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
var r81={id:'r81',title:'晨读角',emoji:'📚',sub:'数学 · 益智',
 story:['「晨读角」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r81',take:['combo_r81'],win:true,text:'放上去——成功！「晨读角」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌锁着：',note:'【算一算】小路长 36 米。从头到尾，每隔 4 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r81'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'书架上有材料 B。',take:{give:['partB_r81'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板：材料 A + 材料 B = 成品。顺便一题：田里长草（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[{a:'partA_r81',b:'partB_r81',give:['combo_r81'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开书桌。','算纸条上的题。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['段数=36÷4=9，棵数=段数+1=10','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','10'],['take','desk'],['take','shelf'],['combine','partA_r81','partB_r81'],['use','door','combo_r81']],
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
var r82={id:'r82',title:'习题教室',emoji:'🏫',sub:'数学 · 英语',
 story:['双锁挑战站「习题教室」！','先过讲台，再过作业盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小路长 60 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'13',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'作业盒上还有第二关：',note:'【英语题】I can share my _____. (想法)\n（线索：Unit 2，复数名词，5 个字母，首字母 I；头脑里的想法。）',lock:{kind:'alpha',len:5,answer:'IDEAS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「习题教室」挑战成功！'},bad:'再想想。'}},
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
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，复数名词，5 个字母，首字母 I；头脑里的想法。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['段数=60÷5=12，棵数=段数+1=13','I can share my _____. (想法) → IDEAS','两关都对，挑战成功。'],
 solution:[['code','desk','13'],['code','box','IDEAS']],
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
var r83={id:'r83',title:'面条厨房',emoji:'🍳',sub:'数学 · 通行证',
 story:['「面条厨房」要刷通行证才能完成任务。','小黄：“卡片和徽章拼起来，去刷卡机刷一下！”','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r83',take:['combo_r83'],win:true,text:'嘀——通过！「面条厨房」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子锁着：',note:'【算一算】小路长 42 米。从头到尾，每隔 7 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'7',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r83'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'碗架上有一枚徽章。',take:{give:['tool_r83'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[{a:'scrap_r83',b:'tool_r83',give:['combo_r83'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开桌子。','算题，注意多步运算。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看碗架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['段数=42÷7=6，棵数=段数+1=7','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','7'],['take','desk'],['take','shelf'],['combine','scrap_r83','tool_r83'],['use','door','combo_r83']],
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
var r84={id:'r84',title:'跳远区',emoji:'⚽',sub:'语文 · 古诗',
 story:['古诗转盘挑战「跳远区」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「跳远区」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'墙上写着《绝句》（唐·杜甫），少了一个字：',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {text:'长椅上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《绝句》，唐·杜甫。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《绝句》：两个黄鹂鸣翠柳，一行白鹭上青天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,200,400,100,'#9ee07a');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(308,155,72,120,'#c98b52',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'⚽')+T(350,275,20,'🏆');
  return s;}
};
var r85={id:'r85',title:'小猫公园',emoji:'🎠',sub:'英语 · 拼写',
 story:['英语拼写站「小猫公园」！','石凳上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳小盒上有字母锁，旁边是英文卡片：',note:'【英语题】A _____ can help us at the fair. (机器人)\n（线索：Unit 2，名词，5 个字母，首字母 R；会按程序干活的机器。）',lock:{kind:'alpha',len:5,answer:'ROBOT',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「小猫公园」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有英语单词卡片。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，5 个字母，首字母 R；会按程序干活的机器。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：A _____ can help us at the fair. (机器人)','正确答案是 ROBOT。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','ROBOT']],
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
var r86={id:'r86',title:'杂志架',emoji:'📖',sub:'数学 · 挑战',
 story:['你来到了图书馆。','阅览桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'馆门',box:[310,160,70,120],views:[
    {text:'馆门锁着，需要钥匙。',use:[{item:'key_r86',win:true,text:'钥匙一转，馆门开了！「杂志架」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌上有密码锁，旁边贴着纸条：',note:'【算一算】小路长 55 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'12',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r86'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'推荐板',box:[130,20,150,90],views:[
    {text:'推荐板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着一些小物件。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {text:'还书箱是空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'安静得能听见翻书声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看阅览桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点阅览桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点馆门。','先点钥匙，再点目标。']}
 ],
 explain:['段数=55÷5=11，棵数=段数+1=12','打开抽屉拿到钥匙。','用钥匙打开馆门，挑战成功。'],
 solution:[['code','desk','12'],['take','desk'],['use','door','key_r86']],
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
var r87={id:'r87',title:'北斗台',emoji:'🔭',sub:'数学 · 闯关',
 story:['欢迎来到「北斗台」挑战站！','观测台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台上的挑战题：',note:'【算一算】小路长 72 米。从头到尾，每隔 8 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'10',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「北斗台」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'观星门',box:[310,160,70,120],views:[
    {text:'观星门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'星图上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'星图架',box:[290,40,90,120],views:[
    {text:'星图架上有奖杯模型。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'天窗',box:[24,24,90,70],views:[
    {text:'星星一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开观测台上的题。','仔细看【算一算】，多步时先算哪一步？','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']}
 ],
 explain:['段数=72÷8=9，棵数=段数+1=10','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','10']],
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
var r88={id:'r88',title:'放大镜屋',emoji:'🔬',sub:'数学 · 助人',
 story:['你走进实验室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开实验台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r88',take:['gift_r88'],win:true,text:'小花猫开心地收下了！「放大镜屋」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台抽屉锁着，纸条上有题：',note:'【算一算】小路长 40 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r88'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'公式板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'器材架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开实验台的密码。','看纸条上的题，可能要算两步。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点实验台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['段数=40÷5=8，棵数=段数+1=9','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','9'],['take','desk'],['use','door','gift_r88']],
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
var r89={id:'r89',title:'面包超市',emoji:'🛒',sub:'数学 · 益智',
 story:['「面包超市」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r89',take:['combo_r89'],win:true,text:'放上去——成功！「面包超市」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台锁着：',note:'【算一算】小路长 63 米。从头到尾，每隔 9 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'8',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r89'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'货架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'货架上有材料 B。',take:{give:['partB_r89'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'促销牌：材料 A + 材料 B = 成品。顺便一题：两人一起走（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'橱窗',box:[24,24,90,70],views:[
    {text:'货架上摆着五颜六色的零食。'}
  ]}
 ],
 combos:[{a:'partA_r89',b:'partB_r89',give:['combo_r89'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开柜台。','算纸条上的题。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看货架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['段数=63÷9=7，棵数=段数+1=8','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','8'],['take','desk'],['take','shelf'],['combine','partA_r89','partB_r89'],['use','door','combo_r89']],
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
var r90={id:'r90',title:'检票口',emoji:'🚂',sub:'数学 · 英语',
 story:['双锁挑战站「检票口」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一辆车平均每小时行 60 千米，行了 2.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'150',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'行李箱上还有第二关：',note:'【英语题】Sports help me _____ taller and stronger. (成长/长高)\n（线索：Unit 2，动词，4 个字母，首字母 G；慢慢变高变壮。）',lock:{kind:'alpha',len:4,answer:'GROW',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「检票口」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'行李架',box:[290,40,90,120],views:[
    {text:'行李架上放着完成印章模型。'}
  ]},
  {id:'window',name:'站台窗',box:[24,24,90,70],views:[
    {text:'广播说下一班列车马上进站。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','路程 = 速度 × 时间。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，动词，4 个字母，首字母 G；慢慢变高变壮。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['路程 = 速度 × 时间 = 60 × 2.5 = 150','Sports help me _____ taller and stronger. (成长/长高) → GROW','两关都对，挑战成功。'],
 solution:[['code','desk','150'],['code','box','GROW']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=R(0,250,400,8,'#555')+R(0,268,400,4,'#555');
  for(var i=0;i<12;i++)s+=R(10+i*33,250,16,8,'#fff',' opacity=".7"');
  s+=g('window',R(16,16,100,78,'#b0c4de',8,SK)+T(66,55,18,'🚂'));
  s+=g('board',R(128,12,170,96,'#1a1a2e',6,' stroke="#4d8bff" stroke-width="5"')+T(213,40,11,'时刻表',' fill="#7CFC00"')+T(213,62,9,'G123  09:30',' fill="#7CFC00"')+T(213,82,9,'D456  10:15',' fill="#7CFC00"'));
  s+=g('desk',R(28,148,128,54,'#c0c8d0',6,SK)+(f.desk_open?R(40,158,70,32,'#e8eef4',4):C(84,176,5,'#5b4636'))+T(92,216,10,'检票台',' fill="#5b4636"'));
  s+=g('box',R(175,158,78,54,'#8e44ad',6,SK)+(f.box_open?R(185,166,58,38,'#d7bde2',3):R(198,174,34,20,'#ffcf4d',3))+T(214,228,10,'行李箱',' fill="#5b4636"'));
  s+=g('shelf',R(275,28,108,120,'#7f8c9d',6,SK)+T(329,80,22,'🎒')+T(329,120,18,'🧳'));
  s+=g('door',R(304,150,72,124,'#34495e',6,SK)+R(314,162,52,40,'#5d6d7e',4)+C(358,220,5,'#ffcf4d',SK)+T(334,255,9,'站台',' fill="#ecf0f1"'));
  s+=T(48,285,22,'🚂')+T(350,285,20,'🎫');
  return s;}
};
var r91={id:'r91',title:'折纸屋',emoji:'🎨',sub:'数学 · 通行证',
 story:['「折纸屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r91',take:['combo_r91'],win:true,text:'嘀——通过！「折纸屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌锁着：',note:'【算一算】一辆车平均每小时行 48 千米，行了 1.5 小时。一共行了多少千米？',lock:{kind:'num',len:2,answer:'72',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r91'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'画架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'画架上有一枚徽章。',take:{give:['tool_r91'],set:['took_tool'],text:'你拿到了徽章。'}},
    {text:'没有了。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}
  ]},
  {id:'box',name:'颜料盒',box:[200,160,70,50],views:[
    {text:'空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'墙上挂着小朋友的画。'}
  ]}
 ],
 combos:[{a:'scrap_r91',b:'tool_r91',give:['combo_r91'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开画桌。','算题，注意多步运算。','路程 = 速度 × 时间。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看画架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['路程 = 速度 × 时间 = 48 × 1.5 = 72','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','72'],['take','desk'],['take','shelf'],['combine','scrap_r91','tool_r91'],['use','door','combo_r91']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(300,150,72,124,'#e8a87c',6,SK)+C(354,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎨')+T(350,275,20,'✨');
  return s;}
};
var r92={id:'r92',title:'小提琴房',emoji:'🎵',sub:'语文 · 古诗',
 story:['古诗转盘挑战「小提琴房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','船']],answer:'船',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「小提琴房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'墙上写着《枫桥夜泊》（唐·张继），少了一个字：',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {text:'琴凳旁小桌上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {text:'琴房门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'乐谱架',box:[290,40,90,120],views:[
    {text:'乐谱架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'空气里好像还有音符在跳。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《枫桥夜泊》，唐·张继。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《枫桥夜泊》：姑苏城外寒山寺，夜半钟声到客船。','缺的字是「船」。','转对转盘，挑战成功。'],
 solution:[['code','box','船']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(18,18,96,74,'#e8daef',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#2c3e50',6,' stroke="#9b59b6" stroke-width="5"')+T(208,40,12,'♪ ♫ ♪',' fill="#f1c40f"')+T(208,70,11,'今日曲目',' fill="#ecf0f1"')+T(208,92,9,'Do Re Mi',' fill="#aed6f1"'));
  s+=g('desk',R(28,150,136,56,'#af7ac5',6,SK)+(f.desk_open?R(40,160,70,34,'#d7bde2',4):C(88,180,5,'#5b4636'))+T(96,220,10,'琴旁桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#f39c12',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#7d3c98',6,SK)+T(330,70,22,'🎹')+T(330,115,20,'🎻')+T(330,150,16,'🥁'));
  s+=g('door',R(308,150,72,124,'#8e44ad',6,SK)+C(362,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'🎵')+T(350,275,20,'🎵');
  return s;}
};
var r93={id:'r93',title:'薰衣草园',emoji:'🌷',sub:'英语 · 拼写',
 story:['英语拼写站「薰衣草园」！','石凳上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳小盒上有字母锁，旁边是英文卡片：',note:'【英语题】It is a _____ to learn new skills. (机会)\n（线索：Unit 2，名词，6 个字母，首字母 C；难得的机会。）',lock:{kind:'alpha',len:6,answer:'CHANCE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「薰衣草园」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
    {text:'小盒已经打开啦。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'Spell it in CAPITAL letters! 拼对即通关。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，这关靠拼写通关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有英语单词卡片。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {text:'玩具箱里有一只小熊。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','Unit 2，名词，6 个字母，首字母 C；难得的机会。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：It is a _____ to learn new skills. (机会)','正确答案是 CHANCE。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','CHANCE']],
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
var r94={id:'r94',title:'游泳馆门',emoji:'🏀',sub:'数学 · 挑战',
 story:['你来到了体育馆。','长椅上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开场馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门锁着，需要钥匙。',use:[{item:'key_r94',win:true,text:'钥匙一转，场馆门开了！「游泳馆门」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上有密码锁，旁边贴着纸条：',note:'【算一算】一辆车平均每小时行 72 千米，行了 2 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'144',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
    {if:['desk_open','!took_key'],text:'里面有一把钥匙。',take:{give:['key_r94'],set:['took_key'],text:'你拿到了钥匙。'}},
    {text:'已经空了。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'记分板上写着：仔细审题，一步一步算。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {text:'球架上摆着一些小物件。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {text:'器材箱是空的。'}
  ]},
  {id:'window',name:'看台',box:[24,24,90,70],views:[
    {text:'外面传来啦啦队的加油声。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先看看长椅上的纸条。','纸条上有一道数学题，算出答案就是密码。','路程 = 速度 × 时间。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点场馆门。','先点钥匙，再点目标。']}
 ],
 explain:['路程 = 速度 × 时间 = 72 × 2 = 144','打开抽屉拿到钥匙。','用钥匙打开场馆门，挑战成功。'],
 solution:[['code','desk','144'],['take','desk'],['use','door','key_r94']],
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
var r95={id:'r95',title:'耳机屋',emoji:'💻',sub:'数学 · 闯关',
 story:['欢迎来到「耳机屋」挑战站！','电脑桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌上的挑战题：',note:'【算一算】一辆车平均每小时行 90 千米，行了 1.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'135',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「耳机屋」挑战成功！'},bad:'再算一算。'}},
    {text:'题目已经解开啦。'}
  ]},
  {id:'door',name:'机房门',box:[310,160,70,120],views:[
    {text:'机房门开着，不过这关不用出门——答对题就行。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'屏幕墙上写着：答对即通关！'}
  ]},
  {id:'shelf',name:'主机架',box:[290,40,90,120],views:[
    {text:'主机架上有奖杯模型。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {text:'盒子里有一张空白答题卡。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'键盘灯一闪一闪。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'desk',tiers:['点开电脑桌上的题。','仔细看【算一算】，多步时先算哪一步？','路程 = 速度 × 时间。']}
 ],
 explain:['路程 = 速度 × 时间 = 90 × 1.5 = 135','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','135']],
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
var r96={id:'r96',title:'灯下书房',emoji:'📚',sub:'数学 · 助人',
 story:['你走进书房，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开书桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r96',take:['gift_r96'],win:true,text:'小花猫开心地收下了！「灯下书房」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌抽屉锁着，纸条上有题：',note:'【算一算】一辆车平均每小时行 54 千米，行了 3 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'162',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
    {if:['desk_open','!took_gift'],text:'里面有一份礼物。',take:{give:['gift_r96'],set:['took_gift'],text:'你拿到了礼物。'}},
    {text:'抽屉空了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板上写着：送给小花猫就过关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上摆着🐱的照片。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {text:'空空的。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'窗外阳光暖暖的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先解开书桌的密码。','看纸条上的题，可能要算两步。','路程 = 速度 × 时间。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点书桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['路程 = 速度 × 时间 = 54 × 3 = 162','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','162'],['take','desk'],['use','door','gift_r96']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(304,150,72,124,'#c98b52',6,SK)+C(358,215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'📚')+T(350,275,20,'✨');
  return s;}
};
var r97={id:'r97',title:'黑板旁',emoji:'🏫',sub:'数学 · 益智',
 story:['「黑板旁」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r97',take:['combo_r97'],win:true,text:'放上去——成功！「黑板旁」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台锁着：',note:'【算一算】一辆车平均每小时行 80 千米，行了 2.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'200',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
    {if:['desk_open','!took_a'],text:'里面有材料 A。',take:{give:['partA_r97'],set:['took_a'],text:'你拿到了材料 A。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {if:['!took_b'],text:'书架上有材料 B。',take:{give:['partB_r97'],set:['took_b'],text:'你拿到了材料 B。'}},
    {text:'没有东西了。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'黑板：材料 A + 材料 B = 成品。顺便一题：十张口（打一字）',note:'温馨提示：在物品栏把两样材料点在一起组合。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {text:'空箱子。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'粉笔灰轻轻飘着。'}
  ]}
 ],
 combos:[{a:'partA_r97',b:'partB_r97',give:['combo_r97'],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开讲台。','算纸条上的题。','路程 = 速度 × 时间。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['路程 = 速度 × 时间 = 80 × 2.5 = 200','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','200'],['take','desk'],['take','shelf'],['combine','partA_r97','partB_r97'],['use','door','combo_r97']],
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
var r98={id:'r98',title:'蒸笼厨房',emoji:'🍳',sub:'数学 · 英语',
 story:['双锁挑战站「蒸笼厨房」！','先过桌子，再过食材盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一辆车平均每小时行 36 千米，行了 2 小时。一共行了多少千米？',lock:{kind:'num',len:2,answer:'72',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'食材盒上还有第二关：',note:'【英语题】I like dancing as _____. (也)\n（线索：Unit 2，as ___ = 也，4 个字母，首字母 W。）',lock:{kind:'alpha',len:4,answer:'WELL',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「蒸笼厨房」挑战成功！'},bad:'再想想。'}},
    {text:'第二关已经完成。'}
  ]},
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门只是装饰，这关不用出门。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'提示：先第一关，后第二关。两关都对就赢！'}
  ]},
  {id:'shelf',name:'碗架',box:[290,40,90,120],views:[
    {text:'碗架上放着完成印章模型。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'灶台暖暖的，锅铲挂在墙上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','路程 = 速度 × 时间。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2，as ___ = 也，4 个字母，首字母 W。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['路程 = 速度 × 时间 = 36 × 2 = 72','I like dancing as _____. (也) → WELL','两关都对，挑战成功。'],
 solution:[['code','desk','72'],['code','box','WELL']],
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
var r99={id:'r99',title:'终点线',emoji:'⚽',sub:'数学 · 通行证',
 story:['「终点线」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r99',take:['combo_r99'],win:true,text:'嘀——通过！「终点线」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】一辆车平均每小时行 100 千米，行了 1.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'150',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
    {if:['desk_open','!took_scrap'],text:'里面有一张卡片。',take:{give:['scrap_r99'],set:['took_scrap'],text:'你拿到了卡片。'}},
    {text:'空了。'}
  ]},
  {id:'shelf',name:'球架',box:[290,40,90,120],views:[
    {if:['!took_tool'],text:'球架上有一枚徽章。',take:{give:['tool_r99'],set:['took_tool'],text:'你拿到了徽章。'}},
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
 combos:[{a:'scrap_r99',b:'tool_r99',give:['combo_r99'],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}],
 hints:[
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算题，注意多步运算。','路程 = 速度 × 时间。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看球架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['路程 = 速度 × 时间 = 100 × 1.5 = 150','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','150'],['take','desk'],['take','shelf'],['combine','scrap_r99','tool_r99'],['use','door','combo_r99']],
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
var r100={id:'r100',title:'狐狸公园',emoji:'🎠',sub:'语文 · 古诗',
 story:['古诗转盘挑战「狐狸公园」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「狐狸公园」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'墙上写着《游园不值》（宋·叶绍翁），少了一个字：',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {text:'石凳上有一本诗集，翻开正好是这一页。'}
  ]},
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'花架',box:[290,40,90,120],views:[
    {text:'花架上有《唐诗三百首》。'}
  ]},
  {id:'window',name:'树荫',box:[24,24,90,70],views:[
    {text:'蝴蝶停在花瓣上。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《游园不值》，宋·叶绍翁。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《游园不值》：春色满园关不住，一枝红杏出墙来。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
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
var EXTRA=[r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72,r73,r74,r75,r76,r77,r78,r79,r80,r81,r82,r83,r84,r85,r86,r87,r88,r89,r90,r91,r92,r93,r94,r95,r96,r97,r98,r99,r100];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/