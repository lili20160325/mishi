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
    {if:['!desk_open'],text:'书桌上有密码锁，旁边贴着纸条：',note:'【算一算】长方形：长 8 米，宽 6 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看书桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 48。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点书桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点门。','先点钥匙，再点目标。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 8 × 6 = 48','打开抽屉拿到钥匙。','用钥匙打开门，挑战成功。'],
 solution:[['code','desk','48'],['take','desk'],['use','door','key_r6']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r7={id:'r7',title:'快乐教室',emoji:'🏫',sub:'数学 · 闯关',
 story:['欢迎来到「快乐教室」挑战站！','讲台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上的挑战题：',note:'【算一算】长方形：长 12 米，宽 5 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'60',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「快乐教室」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开讲台上的题。','仔细看【算一算】。','答案是 60。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 12 × 5 = 60','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','60']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r8={id:'r8',title:'香香厨房',emoji:'🍳',sub:'数学 · 助人',
 story:['你走进厨房，遇见了机器人小厨。','机器人小厨说：“帮我拿到点心，任务就完成啦！”','先解开桌子上的题，再把点心交给机器人小厨。'],
 objects:[
  {id:'door',name:'机器人小厨',box:[310,150,70,120],views:[
    {text:'机器人小厨眨眨眼：“我想要点心！”',use:[{item:'gift_r8',take:['gift_r8'],win:true,text:'机器人小厨开心地收下了！「香香厨房」任务完成！'}],wrong:'机器人小厨摇摇头：“我要的是点心哦。”'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子抽屉锁着，纸条上有题：',note:'【算一算】长方形：长 9 米，宽 4 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份点心！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开桌子的密码。','看纸条上的题。','答案是 36。']},
  {until:'took_gift',obj:'desk',tiers:['把点心拿起来。','点桌子拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把点心交给机器人小厨。','选中点心，再点机器人小厨。','先点物品，再点对方。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 9 × 4 = 36','拿到点心。','交给机器人小厨，任务完成。'],
 solution:[['code','desk','36'],['take','desk'],['use','door','gift_r8']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r9={id:'r9',title:'绿茵操场',emoji:'⚽',sub:'数学 · 益智',
 story:['「绿茵操场」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r9',take:['combo_r9'],win:true,text:'放上去——成功！「绿茵操场」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】长方形：长 7.5 米，宽 4 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','答案 30。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看球架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 7.5 × 4 = 30','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','30'],['take','desk'],['take','shelf'],['combine','partA_r9','partB_r9'],['use','door','combo_r9']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r10={id:'r10',title:'蝴蝶公园',emoji:'🎠',sub:'数学 · 英语',
 story:['双锁挑战站「蝴蝶公园」！','先过石凳，再过花箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形：长 10 米，宽 8 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'80',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花箱上还有第二关：',note:'【英语题】How do you learn new words? I like to learn words in _____.\n（Unit 1：用语块学单词。chunks = 语块（复数））',lock:{kind:'alpha',len:6,answer:'CHUNKS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「蝴蝶公园」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 80。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1：用语块学单词。chunks = 语块（复数）','答案是 CHUNKS。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 10 × 8 = 80','How do you learn new words? I like to learn words in _____. → CHUNKS','两关都对，挑战成功。'],
 solution:[['code','desk','80'],['code','box','CHUNKS']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r11={id:'r11',title:'静静图书馆',emoji:'📖',sub:'数学 · 通行证',
 story:['「静静图书馆」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r11',take:['combo_r11'],win:true,text:'嘀——通过！「静静图书馆」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌锁着：',note:'【算一算】长方形：长 15 米，宽 6 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'90',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算题。','答案 90。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 15 × 6 = 90','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','90'],['take','desk'],['take','shelf'],['combine','scrap_r11','tool_r11'],['use','door','combo_r11']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r12={id:'r12',title:'星星屋',emoji:'🔭',sub:'语文 · 古诗',
 story:['古诗转盘挑战「星星屋」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《春晓》　唐·孟浩然\n春眠不 ___ 晓，处处闻啼鸟。\n\n【整句】春眠不觉晓，处处闻啼鸟。',lock:{kind:'dial',opts:[['天','了','的','一','中','觉']],answer:'觉',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「星星屋」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'星图',box:[130,20,150,90],views:[
    {text:'墙上写着《春晓》（唐·孟浩然），少了一个字：',note:'《春晓》　唐·孟浩然\n春眠不 ___ 晓，处处闻啼鸟。\n\n【整句】春眠不觉晓，处处闻啼鸟。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《春晓》。','整句是：春眠不觉晓，处处闻啼鸟。，缺的是「觉」。']}
 ],
 explain:['《春晓》：春眠不觉晓，处处闻啼鸟。','缺的字是「觉」。','转对转盘，挑战成功。'],
 solution:[['code','box','觉']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r13={id:'r13',title:'奇妙实验室',emoji:'🔬',sub:'英语 · 拼写',
 story:['英语拼写站「奇妙实验室」！','小黄看到英文卡片：“用大写字母拼出来！”','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】What is a _____? A group of words that go together. (语块)\n（Unit 1：chunk = 语块）',lock:{kind:'alpha',len:5,answer:'CHUNK',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「奇妙实验室」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：chunk = 语块','答案是 CHUNK。']}
 ],
 explain:['英文题：What is a _____? A group of words that go together. (语块)','Unit 1：chunk = 语块 → CHUNK','拼对通关。'],
 solution:[['code','desk','CHUNK']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r14={id:'r14',title:'糖果超市',emoji:'🛒',sub:'数学 · 挑战',
 story:['你来到了超市。','柜台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开出口，挑战就成功啦！'],
 objects:[
  {id:'door',name:'出口',box:[310,160,70,120],views:[
    {text:'出口锁着，需要钥匙。',use:[{item:'key_r14',win:true,text:'钥匙一转，出口开了！「糖果超市」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台上有密码锁，旁边贴着纸条：',note:'【算一算】长方形：长 6.5 米，宽 8 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'52',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看柜台上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 52。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点柜台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点出口。','先点钥匙，再点目标。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 6.5 × 8 = 52','打开抽屉拿到钥匙。','用钥匙打开出口，挑战成功。'],
 solution:[['code','desk','52'],['take','desk'],['use','door','key_r14']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r15={id:'r15',title:'小火车站',emoji:'🚂',sub:'数学 · 闯关',
 story:['欢迎来到「小火车站」挑战站！','检票台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台上的挑战题：',note:'【算一算】长方形：长 11 米，宽 3 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'33',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「小火车站」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开检票台上的题。','仔细看【算一算】。','答案是 33。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 11 × 3 = 33','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','33']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r16={id:'r16',title:'彩虹美术室',emoji:'🎨',sub:'数学 · 助人',
 story:['你走进美术室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开画桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r16',take:['gift_r16'],win:true,text:'小花猫开心地收下了！「彩虹美术室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌抽屉锁着，纸条上有题：',note:'【算一算】长方形：长 20 米，宽 5 米。面积是多少平方米？',lock:{kind:'num',len:3,answer:'100',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开画桌的密码。','看纸条上的题。','答案是 100。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点画桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 20 × 5 = 100','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','100'],['take','desk'],['use','door','gift_r16']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r17={id:'r17',title:'叮咚音乐室',emoji:'🎵',sub:'数学 · 益智',
 story:['「叮咚音乐室」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r17',take:['combo_r17'],win:true,text:'放上去——成功！「叮咚音乐室」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌锁着：',note:'【算一算】长方形：长 9.5 米，宽 2 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'19',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开琴凳旁小桌。','算纸条上的题。','答案 19。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看乐谱架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 9.5 × 2 = 19','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','19'],['take','desk'],['take','shelf'],['combine','partA_r17','partB_r17'],['use','door','combo_r17']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r18={id:'r18',title:'秘密小花园',emoji:'🌷',sub:'数学 · 英语',
 story:['双锁挑战站「秘密小花园」！','先过石凳，再过花箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】三角形：底 8 厘米，高 6 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'24',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'花箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'花箱上还有第二关：',note:'【英语题】_____ = 担心\n（Unit 1 单词：worry = 担心）',lock:{kind:'alpha',len:5,answer:'WORRY',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「秘密小花园」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 24。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1 单词：worry = 担心','答案是 WORRY。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 8 × 6 ÷ 2 = 24','_____ = 担心 → WORRY','两关都对，挑战成功。'],
 solution:[['code','desk','24'],['code','box','WORRY']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r19={id:'r19',title:'活力体育馆',emoji:'🏀',sub:'数学 · 通行证',
 story:['「活力体育馆」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r19',take:['combo_r19'],win:true,text:'嘀——通过！「活力体育馆」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】三角形：底 10 厘米，高 5 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'25',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算题。','答案 25。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看球架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 10 × 5 ÷ 2 = 25','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','25'],['take','desk'],['take','shelf'],['combine','scrap_r19','tool_r19'],['use','door','combo_r19']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r20={id:'r20',title:'智慧电脑室',emoji:'💻',sub:'语文 · 古诗',
 story:['古诗转盘挑战「智慧电脑室」！','小黄想起课文里读过《静夜思》。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n\n【整句】床前明月光，疑是地上霜。',lock:{kind:'dial',opts:[['天','了','的','一','中','光']],answer:'光',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「智慧电脑室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'屏幕墙',box:[130,20,150,90],views:[
    {text:'墙上写着《静夜思》（唐·李白），少了一个字：',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n\n【整句】床前明月光，疑是地上霜。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《静夜思》。','整句是：床前明月光，疑是地上霜。，缺的是「光」。']}
 ],
 explain:['《静夜思》：床前明月光，疑是地上霜。','缺的字是「光」。','转对转盘，挑战成功。'],
 solution:[['code','box','光']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r21={id:'r21',title:'月亮书房',emoji:'📚',sub:'英语 · 拼写',
 story:['英语拼写站「月亮书房」！','书桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Please _____ the sentences. (读)\n（Unit 1：read = 读）',lock:{kind:'alpha',len:4,answer:'READ',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「月亮书房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：read = 读','答案是 READ。']}
 ],
 explain:['英文题：Please _____ the sentences. (读)','Unit 1：read = 读 → READ','拼对通关。'],
 solution:[['code','desk','READ']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r22={id:'r22',title:'星星教室',emoji:'🏫',sub:'数学 · 挑战',
 story:['你来到了教室。','讲台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开教室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门锁着，需要钥匙。',use:[{item:'key_r22',win:true,text:'钥匙一转，教室门开了！「星星教室」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台上有密码锁，旁边贴着纸条：',note:'【算一算】三角形：底 12 厘米，高 4 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'24',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看讲台上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 24。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点讲台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点教室门。','先点钥匙，再点目标。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 12 × 4 ÷ 2 = 24','打开抽屉拿到钥匙。','用钥匙打开教室门，挑战成功。'],
 solution:[['code','desk','24'],['take','desk'],['use','door','key_r22']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r23={id:'r23',title:'甜甜厨房',emoji:'🍳',sub:'数学 · 闯关',
 story:['欢迎来到「甜甜厨房」挑战站！','桌子上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子上的挑战题：',note:'【算一算】三角形：底 9 厘米，高 8 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「甜甜厨房」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开桌子上的题。','仔细看【算一算】。','答案是 36。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 9 × 8 ÷ 2 = 36','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','36']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r24={id:'r24',title:'风筝操场',emoji:'⚽',sub:'数学 · 助人',
 story:['你走进操场，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r24',take:['gift_r24'],win:true,text:'小花猫开心地收下了！「风筝操场」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】三角形：底 7 厘米，高 6 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'21',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题。','答案是 21。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 7 × 6 ÷ 2 = 21','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','21'],['take','desk'],['use','door','gift_r24']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r25={id:'r25',title:'蜗牛公园',emoji:'🎠',sub:'数学 · 益智',
 story:['「蜗牛公园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r25',take:['combo_r25'],win:true,text:'放上去——成功！「蜗牛公园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】三角形：底 14 厘米，高 5 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'35',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','答案 35。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 14 × 5 ÷ 2 = 35','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','35'],['take','desk'],['take','shelf'],['combine','partA_r25','partB_r25'],['use','door','combo_r25']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r26={id:'r26',title:'书香角',emoji:'📖',sub:'数学 · 英语',
 story:['双锁挑战站「书香角」！','先过阅览桌，再过还书箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】三角形：底 6 厘米，高 10 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'还书箱上还有第二关：',note:'【英语题】Be careful! Don\'t let the book _____. (落下)\n（Unit 1：fall = 落下）',lock:{kind:'alpha',len:4,answer:'FALL',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「书香角」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 30。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1：fall = 落下','答案是 FALL。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 6 × 10 ÷ 2 = 30','Be careful! Don\'t let the book _____. (落下) → FALL','两关都对，挑战成功。'],
 solution:[['code','desk','30'],['code','box','FALL']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r27={id:'r27',title:'流星台',emoji:'🔭',sub:'数学 · 通行证',
 story:['「流星台」要刷通行证才能完成任务。','小黄：“卡片和徽章拼起来，去刷卡机刷一下！”','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r27',take:['combo_r27'],win:true,text:'嘀——通过！「流星台」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】三角形：底 15 厘米，高 4 厘米。面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算题。','答案 30。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看星图架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['三角形面积 = 底 × 高 ÷ 2 = 15 × 4 ÷ 2 = 30','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','30'],['take','desk'],['take','shelf'],['combine','scrap_r27','tool_r27'],['use','door','combo_r27']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r28={id:'r28',title:'气泡实验室',emoji:'🔬',sub:'语文 · 古诗',
 story:['古诗转盘挑战「气泡实验室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《登鹳雀楼》　唐·王之涣\n欲穷千里 ___，更上一层楼。\n\n【整句】欲穷千里目，更上一层楼。',lock:{kind:'dial',opts:[['天','了','的','一','中','目']],answer:'目',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「气泡实验室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'墙上写着《登鹳雀楼》（唐·王之涣），少了一个字：',note:'《登鹳雀楼》　唐·王之涣\n欲穷千里 ___，更上一层楼。\n\n【整句】欲穷千里目，更上一层楼。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《登鹳雀楼》。','整句是：欲穷千里目，更上一层楼。，缺的是「目」。']}
 ],
 explain:['《登鹳雀楼》：欲穷千里目，更上一层楼。','缺的字是「目」。','转对转盘，挑战成功。'],
 solution:[['code','box','目']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r29={id:'r29',title:'果果超市',emoji:'🛒',sub:'英语 · 拼写',
 story:['英语拼写站「果果超市」！','柜台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Don\'t speak too _____. (大声的)\n（Unit 1：loud = 大声的）',lock:{kind:'alpha',len:4,answer:'LOUD',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「果果超市」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：loud = 大声的','答案是 LOUD。']}
 ],
 explain:['英文题：Don\'t speak too _____. (大声的)','Unit 1：loud = 大声的 → LOUD','拼对通关。'],
 solution:[['code','desk','LOUD']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r30={id:'r30',title:'云朵车站',emoji:'🚂',sub:'数学 · 挑战',
 story:['你来到了火车站。','检票台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开站台门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'站台门',box:[310,160,70,120],views:[
    {text:'站台门锁着，需要钥匙。',use:[{item:'key_r30',win:true,text:'钥匙一转，站台门开了！「云朵车站」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台上有密码锁，旁边贴着纸条：',note:'【算一算】梯形：上底 6 分米，下底 10 分米，高 5 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'40',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看检票台上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 40。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点检票台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点站台门。','先点钥匙，再点目标。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（6+10）×5÷2 = 40','打开抽屉拿到钥匙。','用钥匙打开站台门，挑战成功。'],
 solution:[['code','desk','40'],['take','desk'],['use','door','key_r30']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r31={id:'r31',title:'蜡笔小屋',emoji:'🎨',sub:'数学 · 闯关',
 story:['欢迎来到「蜡笔小屋」挑战站！','画桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌上的挑战题：',note:'【算一算】梯形：上底 4 分米，下底 8 分米，高 6 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「蜡笔小屋」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开画桌上的题。','仔细看【算一算】。','答案是 36。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（4+8）×6÷2 = 36','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','36']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r32={id:'r32',title:'歌声房',emoji:'🎵',sub:'数学 · 助人',
 story:['你走进音乐室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开琴凳旁小桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r32',take:['gift_r32'],win:true,text:'小花猫开心地收下了！「歌声房」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌抽屉锁着，纸条上有题：',note:'【算一算】梯形：上底 5 分米，下底 9 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'28',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开琴凳旁小桌的密码。','看纸条上的题。','答案是 28。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点琴凳旁小桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（5+9）×4÷2 = 28','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','28'],['take','desk'],['use','door','gift_r32']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r33={id:'r33',title:'蒲公英花园',emoji:'🌷',sub:'数学 · 益智',
 story:['「蒲公英花园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r33',take:['combo_r33'],win:true,text:'放上去——成功！「蒲公英花园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】梯形：上底 3 分米，下底 7 分米，高 5 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'25',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','答案 25。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（3+7）×5÷2 = 25','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','25'],['take','desk'],['take','shelf'],['combine','partA_r33','partB_r33'],['use','door','combo_r33']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r34={id:'r34',title:'跳跳球馆',emoji:'🏀',sub:'数学 · 英语',
 story:['双锁挑战站「跳跳球馆」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】梯形：上底 8 分米，下底 12 分米，高 3 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'器材箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'器材箱上还有第二关：',note:'【英语题】Is there _____ in the box? (任何东西)\n（Unit 1：anything = 任何东西）',lock:{kind:'alpha',len:8,answer:'ANYTHING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「跳跳球馆」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 30。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1：anything = 任何东西','答案是 ANYTHING。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（8+12）×3÷2 = 30','Is there _____ in the box? (任何东西) → ANYTHING','两关都对，挑战成功。'],
 solution:[['code','desk','30'],['code','box','ANYTHING']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r35={id:'r35',title:'键盘小屋',emoji:'💻',sub:'数学 · 通行证',
 story:['「键盘小屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r35',take:['combo_r35'],win:true,text:'嘀——通过！「键盘小屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌锁着：',note:'【算一算】梯形：上底 2 分米，下底 10 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'24',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开电脑桌。','算题。','答案 24。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看主机架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（2+10）×4÷2 = 24','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','24'],['take','desk'],['take','shelf'],['combine','scrap_r35','tool_r35'],['use','door','combo_r35']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r36={id:'r36',title:'晨光书房',emoji:'📚',sub:'语文 · 古诗',
 story:['古诗转盘挑战「晨光书房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n\n【整句】谁知盘中餐，粒粒皆辛苦。',lock:{kind:'dial',opts:[['天','了','的','一','中','辛']],answer:'辛',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「晨光书房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《悯农》（唐·李绅），少了一个字：',note:'《悯农》　唐·李绅\n谁知盘中餐，粒粒皆 ___ 苦。\n\n【整句】谁知盘中餐，粒粒皆辛苦。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《悯农》。','整句是：谁知盘中餐，粒粒皆辛苦。，缺的是「辛」。']}
 ],
 explain:['《悯农》：谁知盘中餐，粒粒皆辛苦。','缺的字是「辛」。','转对转盘，挑战成功。'],
 solution:[['code','box','辛']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r37={id:'r37',title:'欢笑教室',emoji:'🏫',sub:'英语 · 拼写',
 story:['英语拼写站「欢笑教室」！','讲台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】There are a _____ new words on the card. (几个)\n（Unit 1：a few = 几个）',lock:{kind:'alpha',len:3,answer:'FEW',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「欢笑教室」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：a few = 几个','答案是 FEW。']}
 ],
 explain:['英文题：There are a _____ new words on the card. (几个)','Unit 1：a few = 几个 → FEW','拼对通关。'],
 solution:[['code','desk','FEW']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r38={id:'r38',title:'饼干厨房',emoji:'🍳',sub:'数学 · 挑战',
 story:['你来到了厨房。','桌子上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开厨房门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'厨房门',box:[310,160,70,120],views:[
    {text:'厨房门锁着，需要钥匙。',use:[{item:'key_r38',win:true,text:'钥匙一转，厨房门开了！「饼干厨房」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子上有密码锁，旁边贴着纸条：',note:'【算一算】梯形：上底 7 分米，下底 11 分米，高 2 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看桌子上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 18。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点桌子，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点厨房门。','先点钥匙，再点目标。']}
 ],
 explain:['梯形面积 =（上底+下底）×高÷2 =（7+11）×2÷2 = 18','打开抽屉拿到钥匙。','用钥匙打开厨房门，挑战成功。'],
 solution:[['code','desk','18'],['take','desk'],['use','door','key_r38']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r39={id:'r39',title:'跳绳操场',emoji:'⚽',sub:'数学 · 闯关',
 story:['欢迎来到「跳绳操场」挑战站！','长椅上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上的挑战题：',note:'【算一算】方程：2x − 60 = 300\n解出 x。',lock:{kind:'num',len:3,answer:'180',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「跳绳操场」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开长椅上的题。','仔细看【算一算】。','答案是 180。']}
 ],
 explain:['2x − 60 = 300 → 2x = 360 → x = 180','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','180']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r40={id:'r40',title:'鸭鸭公园',emoji:'🎠',sub:'数学 · 助人',
 story:['你走进公园，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开石凳上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r40',take:['gift_r40'],win:true,text:'小花猫开心地收下了！「鸭鸭公园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳抽屉锁着，纸条上有题：',note:'【算一算】方程：2x − 40 = 200\n解出 x。',lock:{kind:'num',len:3,answer:'120',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开石凳的密码。','看纸条上的题。','答案是 120。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点石凳拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['2x − 40 = 200 → 2x = 240 → x = 120','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','120'],['take','desk'],['use','door','gift_r40']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r41={id:'r41',title:'故事馆',emoji:'📖',sub:'数学 · 益智',
 story:['「故事馆」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r41',take:['combo_r41'],win:true,text:'放上去——成功！「故事馆」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌锁着：',note:'【算一算】方程：3x − 15 = 90\n解出 x。',lock:{kind:'num',len:2,answer:'35',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开阅览桌。','算纸条上的题。','答案 35。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['3x − 15 = 90 → 3x = 105 → x = 35','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','35'],['take','desk'],['take','shelf'],['combine','partA_r41','partB_r41'],['use','door','combo_r41']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r42={id:'r42',title:'银河台',emoji:'🔭',sub:'数学 · 英语',
 story:['双锁挑战站「银河台」！','先过观测台，再过星盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】方程：2x − 8 = 50\n解出 x。',lock:{kind:'num',len:2,answer:'29',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'星盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'星盒上还有第二关：',note:'【英语题】Can you write a _____? (句子)\n（Unit 1：sentence = 句子）',lock:{kind:'alpha',len:8,answer:'SENTENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「银河台」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 29。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1：sentence = 句子','答案是 SENTENCE。']}
 ],
 explain:['2x − 8 = 50 → 2x = 58 → x = 29','Can you write a _____? (句子) → SENTENCE','两关都对，挑战成功。'],
 solution:[['code','desk','29'],['code','box','SENTENCE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r43={id:'r43',title:'试管屋',emoji:'🔬',sub:'数学 · 通行证',
 story:['「试管屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r43',take:['combo_r43'],win:true,text:'嘀——通过！「试管屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台锁着：',note:'【算一算】方程：4x − 20 = 100\n解出 x。',lock:{kind:'num',len:2,answer:'30',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开实验台。','算题。','答案 30。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看器材架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['4x − 20 = 100 → 4x = 120 → x = 30','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','30'],['take','desk'],['take','shelf'],['combine','scrap_r43','tool_r43'],['use','door','combo_r43']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r44={id:'r44',title:'气球超市',emoji:'🛒',sub:'语文 · 古诗',
 story:['古诗转盘挑战「气球超市」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n\n【整句】白毛浮绿水，红掌拨清波。',lock:{kind:'dial',opts:[['天','了','的','一','中','波']],answer:'波',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「气球超市」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'促销牌',box:[130,20,150,90],views:[
    {text:'墙上写着《咏鹅》（唐·骆宾王），少了一个字：',note:'《咏鹅》　唐·骆宾王\n白毛浮绿水，红掌拨清 ___。\n\n【整句】白毛浮绿水，红掌拨清波。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《咏鹅》。','整句是：白毛浮绿水，红掌拨清波。，缺的是「波」。']}
 ],
 explain:['《咏鹅》：白毛浮绿水，红掌拨清波。','缺的字是「波」。','转对转盘，挑战成功。'],
 solution:[['code','box','波']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r45={id:'r45',title:'出发站',emoji:'🚂',sub:'英语 · 拼写',
 story:['英语拼写站「出发站」！','检票台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Look them up in the _____. (词典)\n（Unit 1：查词典 look up in the dictionary）',lock:{kind:'alpha',len:10,answer:'DICTIONARY',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「出发站」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：查词典 look up in the dictionary','答案是 DICTIONARY。']}
 ],
 explain:['英文题：Look them up in the _____. (词典)','Unit 1：查词典 look up in the dictionary → DICTIONARY','拼对通关。'],
 solution:[['code','desk','DICTIONARY']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r46={id:'r46',title:'调色盘屋',emoji:'🎨',sub:'数学 · 挑战',
 story:['你来到了美术室。','画桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开画室门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'画室门',box:[310,160,70,120],views:[
    {text:'画室门锁着，需要钥匙。',use:[{item:'key_r46',win:true,text:'钥匙一转，画室门开了！「调色盘屋」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌上有密码锁，旁边贴着纸条：',note:'【算一算】方程：2x − 30 = 160\n解出 x。',lock:{kind:'num',len:2,answer:'95',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看画桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 95。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点画桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点画室门。','先点钥匙，再点目标。']}
 ],
 explain:['2x − 30 = 160 → 2x = 190 → x = 95','打开抽屉拿到钥匙。','用钥匙打开画室门，挑战成功。'],
 solution:[['code','desk','95'],['take','desk'],['use','door','key_r46']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r47={id:'r47',title:'钢琴角',emoji:'🎵',sub:'数学 · 闯关',
 story:['欢迎来到「钢琴角」挑战站！','琴凳旁小桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌上的挑战题：',note:'【算一算】方程：5x − 10 = 60\n解出 x。',lock:{kind:'num',len:2,answer:'14',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「钢琴角」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开琴凳旁小桌上的题。','仔细看【算一算】。','答案是 14。']}
 ],
 explain:['5x − 10 = 60 → 5x = 70 → x = 14','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','14']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r48={id:'r48',title:'蜜蜂花园',emoji:'🌷',sub:'数学 · 助人',
 story:['你走进花园，遇见了小花猫。','小黄说：“帮小花猫拿到礼物吧！”','先解开石凳上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r48',take:['gift_r48'],win:true,text:'小花猫开心地收下了！「蜜蜂花园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳抽屉锁着，纸条上有题：',note:'【算一算】方程：3x − 21 = 75\n解出 x。',lock:{kind:'num',len:2,answer:'32',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开石凳的密码。','看纸条上的题。','答案是 32。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点石凳拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['3x − 21 = 75 → 3x = 96 → x = 32','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','32'],['take','desk'],['use','door','gift_r48']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r49={id:'r49',title:'接力馆',emoji:'🏀',sub:'数学 · 益智',
 story:['「接力馆」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r49',take:['combo_r49'],win:true,text:'放上去——成功！「接力馆」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】方程：2x + 10 = 50\n解出 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算纸条上的题。','答案 20。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看球架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['2x + 10 = 50 → 2x = 40 → x = 20','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','20'],['take','desk'],['take','shelf'],['combine','partA_r49','partB_r49'],['use','door','combo_r49']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r50={id:'r50',title:'鼠标屋',emoji:'💻',sub:'数学 · 英语',
 story:['双锁挑战站「鼠标屋」！','先过电脑桌，再过配件盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】方程：3x + 6 = 45\n解出 x。',lock:{kind:'num',len:2,answer:'13',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'配件盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'配件盒上还有第二关：',note:'【英语题】Make word _____ with pictures. (卡片)\n（Unit 1：make word cards = 做单词卡片）',lock:{kind:'alpha',len:5,answer:'CARDS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「鼠标屋」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 13。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 1：make word cards = 做单词卡片','答案是 CARDS。']}
 ],
 explain:['3x + 6 = 45 → 3x = 39 → x = 13','Make word _____ with pictures. (卡片) → CARDS','两关都对，挑战成功。'],
 solution:[['code','desk','13'],['code','box','CARDS']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r51={id:'r51',title:'午后书房',emoji:'📚',sub:'数学 · 通行证',
 story:['「午后书房」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r51',take:['combo_r51'],win:true,text:'嘀——通过！「午后书房」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌锁着：',note:'【算一算】方程：4x + 8 = 40\n解出 x。',lock:{kind:'num',len:1,answer:'8',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开书桌。','算题。','答案 8。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['4x + 8 = 40 → 4x = 32 → x = 8','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','8'],['take','desk'],['take','shelf'],['combine','scrap_r51','tool_r51'],['use','door','combo_r51']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r52={id:'r52',title:'智慧教室',emoji:'🏫',sub:'语文 · 古诗',
 story:['古诗转盘挑战「智慧教室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n\n【整句】孤舟蓑笠翁，独钓寒江雪。',lock:{kind:'dial',opts:[['天','了','的','一','中','雪']],answer:'雪',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「智慧教室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《江雪》（唐·柳宗元），少了一个字：',note:'《江雪》　唐·柳宗元\n孤舟蓑笠翁，独钓寒江 ___。\n\n【整句】孤舟蓑笠翁，独钓寒江雪。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《江雪》。','整句是：孤舟蓑笠翁，独钓寒江雪。，缺的是「雪」。']}
 ],
 explain:['《江雪》：孤舟蓑笠翁，独钓寒江雪。','缺的字是「雪」。','转对转盘，挑战成功。'],
 solution:[['code','box','雪']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r53={id:'r53',title:'果汁厨房',emoji:'🍳',sub:'英语 · 拼写',
 story:['英语拼写站「果汁厨房」！','桌子上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Keep the chunks in _____. (记在心里)\n（Unit 1：keep in mind = 记在心里）',lock:{kind:'alpha',len:4,answer:'MIND',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「果汁厨房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 1：keep in mind = 记在心里','答案是 MIND。']}
 ],
 explain:['英文题：Keep the chunks in _____. (记在心里)','Unit 1：keep in mind = 记在心里 → MIND','拼对通关。'],
 solution:[['code','desk','MIND']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r54={id:'r54',title:'跑道旁',emoji:'⚽',sub:'数学 · 挑战',
 story:['你来到了操场。','长椅上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开场馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门锁着，需要钥匙。',use:[{item:'key_r54',win:true,text:'钥匙一转，场馆门开了！「跑道旁」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上有密码锁，旁边贴着纸条：',note:'【算一算】方程：2x + 15 = 55\n解出 x。',lock:{kind:'num',len:2,answer:'20',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看长椅上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 20。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点场馆门。','先点钥匙，再点目标。']}
 ],
 explain:['2x + 15 = 55 → 2x = 40 → x = 20','打开抽屉拿到钥匙。','用钥匙打开场馆门，挑战成功。'],
 solution:[['code','desk','20'],['take','desk'],['use','door','key_r54']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r55={id:'r55',title:'蜻蜓公园',emoji:'🎠',sub:'数学 · 闯关',
 story:['欢迎来到「蜻蜓公园」挑战站！','小黄指着石凳：“把这道题做对，就算过关！”','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上的挑战题：',note:'【算一算】方程：5x + 5 = 40\n解出 x。',lock:{kind:'num',len:1,answer:'7',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「蜻蜓公园」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开石凳上的题。','仔细看【算一算】。','答案是 7。']}
 ],
 explain:['5x + 5 = 40 → 5x = 35 → x = 7','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','7']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r56={id:'r56',title:'阅读角',emoji:'📖',sub:'数学 · 助人',
 story:['你走进图书馆，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开阅览桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r56',take:['gift_r56'],win:true,text:'小花猫开心地收下了！「阅读角」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌抽屉锁着，纸条上有题：',note:'【算一算】4.5 × 2 = ?',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开阅览桌的密码。','看纸条上的题。','答案是 9。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点阅览桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['4.5 × 2 = 9','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','9'],['take','desk'],['use','door','gift_r56']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r57={id:'r57',title:'卫星台',emoji:'🔭',sub:'数学 · 益智',
 story:['「卫星台」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r57',take:['combo_r57'],win:true,text:'放上去——成功！「卫星台」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】3.2 × 5 = ?',lock:{kind:'num',len:2,answer:'16',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算纸条上的题。','答案 16。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看星图架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['3.2 × 5 = 16','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','16'],['take','desk'],['take','shelf'],['combine','partA_r57','partB_r57'],['use','door','combo_r57']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r58={id:'r58',title:'显微镜屋',emoji:'🔬',sub:'数学 · 英语',
 story:['双锁挑战站「显微镜屋」！','先过实验台，再过试剂箱。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】1.5 × 6 = ?',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'试剂箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'试剂箱上还有第二关：',note:'【英语题】I\'m _____ to join the science club. (be going to)\n（Unit 2：be going to 表示打算，这里填 going）',lock:{kind:'alpha',len:5,answer:'GOING',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「显微镜屋」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 9。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：be going to 表示打算，这里填 going','答案是 GOING。']}
 ],
 explain:['1.5 × 6 = 9','I\'m _____ to join the science club. (be going to) → GOING','两关都对，挑战成功。'],
 solution:[['code','desk','9'],['code','box','GOING']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r59={id:'r59',title:'草莓超市',emoji:'🛒',sub:'数学 · 通行证',
 story:['「草莓超市」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r59',take:['combo_r59'],win:true,text:'嘀——通过！「草莓超市」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台锁着：',note:'【算一算】2.5 × 4 = ?',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开柜台。','算题。','答案 10。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看货架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['2.5 × 4 = 10','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','10'],['take','desk'],['take','shelf'],['combine','scrap_r59','tool_r59'],['use','door','combo_r59']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r60={id:'r60',title:'候车室',emoji:'🚂',sub:'语文 · 古诗',
 story:['古诗转盘挑战「候车室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n\n【整句】野火烧不尽，春风吹又生。',lock:{kind:'dial',opts:[['天','了','的','一','中','尽']],answer:'尽',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「候车室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'时刻表',box:[130,20,150,90],views:[
    {text:'墙上写着《赋得古原草送别》（唐·白居易），少了一个字：',note:'《赋得古原草送别》　唐·白居易\n野火烧不 ___，春风吹又生。\n\n【整句】野火烧不尽，春风吹又生。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《赋得古原草送别》。','整句是：野火烧不尽，春风吹又生。，缺的是「尽」。']}
 ],
 explain:['《赋得古原草送别》：野火烧不尽，春风吹又生。','缺的字是「尽」。','转对转盘，挑战成功。'],
 solution:[['code','box','尽']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r61={id:'r61',title:'剪纸屋',emoji:'🎨',sub:'英语 · 拼写',
 story:['英语拼写站「剪纸屋」！','画桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Which _____ are you going to join? (社团)\n（Unit 2：club = 社团）',lock:{kind:'alpha',len:4,answer:'CLUB',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「剪纸屋」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 2：club = 社团','答案是 CLUB。']}
 ],
 explain:['英文题：Which _____ are you going to join? (社团)','Unit 2：club = 社团 → CLUB','拼对通关。'],
 solution:[['code','desk','CLUB']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r62={id:'r62',title:'鼓点房',emoji:'🎵',sub:'数学 · 挑战',
 story:['小黄走进了音乐室，门在身后轻轻关上。','琴凳旁小桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开琴房门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'琴房门',box:[310,160,70,120],views:[
    {text:'琴房门锁着，需要钥匙。',use:[{item:'key_r62',win:true,text:'钥匙一转，琴房门开了！「鼓点房」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌上有密码锁，旁边贴着纸条：',note:'【算一算】0.8 × 9 = ?',lock:{kind:'num',len:3,dot:true,answer:'7.2',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看琴凳旁小桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 7.2。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点琴凳旁小桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点琴房门。','先点钥匙，再点目标。']}
 ],
 explain:['0.8 × 9 = 7.2','打开抽屉拿到钥匙。','用钥匙打开琴房门，挑战成功。'],
 solution:[['code','desk','7.2'],['take','desk'],['use','door','key_r62']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r63={id:'r63',title:'玫瑰园',emoji:'🌷',sub:'数学 · 闯关',
 story:['欢迎来到「玫瑰园」挑战站！','石凳上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上的挑战题：',note:'【算一算】6.4 × 2 = ?',lock:{kind:'num',len:4,dot:true,answer:'12.8',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「玫瑰园」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开石凳上的题。','仔细看【算一算】。','答案是 12.8。']}
 ],
 explain:['6.4 × 2 = 12.8','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','12.8']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r64={id:'r64',title:'乒乓球室',emoji:'🏀',sub:'数学 · 助人',
 story:['你走进体育馆，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r64',take:['gift_r64'],win:true,text:'小花猫开心地收下了！「乒乓球室」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】1.25 × 8 = ?',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题。','答案是 10。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['1.25 × 8 = 10','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','10'],['take','desk'],['use','door','gift_r64']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r65={id:'r65',title:'屏幕屋',emoji:'💻',sub:'数学 · 益智',
 story:['「屏幕屋」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r65',take:['combo_r65'],win:true,text:'放上去——成功！「屏幕屋」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌锁着：',note:'【算一算】7.5 × 3 = ?',lock:{kind:'num',len:4,dot:true,answer:'22.5',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开电脑桌。','算纸条上的题。','答案 22.5。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看主机架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['7.5 × 3 = 22.5','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','22.5'],['take','desk'],['take','shelf'],['combine','partA_r65','partB_r65'],['use','door','combo_r65']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r66={id:'r66',title:'晚安书房',emoji:'📚',sub:'数学 · 英语',
 story:['双锁挑战站「晚安书房」！','先过书桌，再过小盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小路长 45 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'小盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'小盒上还有第二关：',note:'【英语题】I want to join the _____ club. (科学)\n（Unit 2：science club = 科学社团）',lock:{kind:'alpha',len:7,answer:'SCIENCE',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「晚安书房」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 10。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：science club = 科学社团','答案是 SCIENCE。']}
 ],
 explain:['段数 = 45÷5 = 9，两头都种：棵数 = 段数 + 1 = 10','I want to join the _____ club. (科学) → SCIENCE','两关都对，挑战成功。'],
 solution:[['code','desk','10'],['code','box','SCIENCE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r67={id:'r67',title:'加油教室',emoji:'🏫',sub:'数学 · 通行证',
 story:['「加油教室」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r67',take:['combo_r67'],win:true,text:'嘀——通过！「加油教室」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台锁着：',note:'【算一算】小路长 30 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'7',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开讲台。','算题。','答案 7。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看书架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['段数 = 30÷5 = 6，两头都种：棵数 = 段数 + 1 = 7','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','7'],['take','desk'],['take','shelf'],['combine','scrap_r67','tool_r67'],['use','door','combo_r67']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r68={id:'r68',title:'沙拉厨房',emoji:'🍳',sub:'语文 · 古诗',
 story:['古诗转盘挑战「沙拉厨房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n\n【整句】飞流直下三千尺，疑是银河落九天。',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「沙拉厨房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'菜谱板',box:[130,20,150,90],views:[
    {text:'墙上写着《望庐山瀑布》（唐·李白），少了一个字：',note:'《望庐山瀑布》　唐·李白\n飞流直下三千尺，疑是银河落九 ___。\n\n【整句】飞流直下三千尺，疑是银河落九天。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《望庐山瀑布》。','整句是：飞流直下三千尺，疑是银河落九天。，缺的是「天」。']}
 ],
 explain:['《望庐山瀑布》：飞流直下三千尺，疑是银河落九天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r69={id:'r69',title:'沙坑旁',emoji:'⚽',sub:'英语 · 拼写',
 story:['英语拼写站「沙坑旁」！','小黄看到英文卡片：“用大写字母拼出来！”','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Any _____? (有什么建议吗？)\n（Unit 2：advice = 建议）',lock:{kind:'alpha',len:6,answer:'ADVICE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「沙坑旁」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 2：advice = 建议','答案是 ADVICE。']}
 ],
 explain:['英文题：Any _____? (有什么建议吗？)','Unit 2：advice = 建议 → ADVICE','拼对通关。'],
 solution:[['code','desk','ADVICE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r70={id:'r70',title:'松鼠公园',emoji:'🎠',sub:'数学 · 挑战',
 story:['你来到了公园。','石凳上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开园门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门锁着，需要钥匙。',use:[{item:'key_r70',win:true,text:'钥匙一转，园门开了！「松鼠公园」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上有密码锁，旁边贴着纸条：',note:'【算一算】小路长 40 米。从头到尾，每隔 8 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'6',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看石凳上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 6。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点石凳，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点园门。','先点钥匙，再点目标。']}
 ],
 explain:['段数 = 40÷8 = 5，两头都种：棵数 = 段数 + 1 = 6','打开抽屉拿到钥匙。','用钥匙打开园门，挑战成功。'],
 solution:[['code','desk','6'],['take','desk'],['use','door','key_r70']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r71={id:'r71',title:'字典屋',emoji:'📖',sub:'数学 · 闯关',
 story:['欢迎来到「字典屋」挑战站！','阅览桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌上的挑战题：',note:'【算一算】小路长 60 米。从头到尾，每隔 10 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'7',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「字典屋」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开阅览桌上的题。','仔细看【算一算】。','答案是 7。']}
 ],
 explain:['段数 = 60÷10 = 6，两头都种：棵数 = 段数 + 1 = 7','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','7']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r72={id:'r72',title:'彗星台',emoji:'🔭',sub:'数学 · 助人',
 story:['你走进天文台，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开观测台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r72',take:['gift_r72'],win:true,text:'小花猫开心地收下了！「彗星台」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台抽屉锁着，纸条上有题：',note:'【算一算】小路长 24 米。从头到尾，每隔 4 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'7',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开观测台的密码。','看纸条上的题。','答案是 7。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点观测台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['段数 = 24÷4 = 6，两头都种：棵数 = 段数 + 1 = 7','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','7'],['take','desk'],['use','door','gift_r72']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r73={id:'r73',title:'烧杯角',emoji:'🔬',sub:'数学 · 益智',
 story:['「烧杯角」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到实验台机器上，就算完成任务。'],
 objects:[
  {id:'door',name:'实验台机器',box:[310,160,70,120],views:[
    {text:'实验台机器等着成品。',use:[{item:'combo_r73',take:['combo_r73'],win:true,text:'放上去——成功！「烧杯角」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台锁着：',note:'【算一算】小路长 36 米。从头到尾，每隔 6 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'7',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开实验台。','算纸条上的题。','答案 7。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看器材架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到实验台机器。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['段数 = 36÷6 = 6，两头都种：棵数 = 段数 + 1 = 7','拿到材料 A 和 B。','组合成成品，放到实验台机器。'],
 solution:[['code','desk','7'],['take','desk'],['take','shelf'],['combine','partA_r73','partB_r73'],['use','door','combo_r73']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r74={id:'r74',title:'牛奶超市',emoji:'🛒',sub:'数学 · 英语',
 story:['双锁挑战站「牛奶超市」！','先过柜台，再过购物篮。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小路长 50 米。从头到尾，每隔 5 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:2,answer:'11',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'购物篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'购物篮上还有第二关：',note:'【英语题】You can try new _____. (事物)\n（Unit 2：try new things = 尝试新事物）',lock:{kind:'alpha',len:6,answer:'THINGS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「牛奶超市」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 11。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：try new things = 尝试新事物','答案是 THINGS。']}
 ],
 explain:['段数 = 50÷5 = 10，两头都种：棵数 = 段数 + 1 = 11','You can try new _____. (事物) → THINGS','两关都对，挑战成功。'],
 solution:[['code','desk','11'],['code','box','THINGS']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r75={id:'r75',title:'月台边',emoji:'🚂',sub:'数学 · 通行证',
 story:['「月台边」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r75',take:['combo_r75'],win:true,text:'嘀——通过！「月台边」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'检票台锁着：',note:'【算一算】小路长 28 米。从头到尾，每隔 7 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'5',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开检票台。','算题。','答案 5。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看行李架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['段数 = 28÷7 = 4，两头都种：棵数 = 段数 + 1 = 5','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','5'],['take','desk'],['take','shelf'],['combine','scrap_r75','tool_r75'],['use','door','combo_r75']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r76={id:'r76',title:'油画室',emoji:'🎨',sub:'语文 · 古诗',
 story:['古诗转盘挑战「油画室」！','小黄想起课文里读过《早发白帝城》。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n\n【整句】两岸猿声啼不住，轻舟已过万重山。',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「油画室」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'画板',box:[130,20,150,90],views:[
    {text:'墙上写着《早发白帝城》（唐·李白），少了一个字：',note:'《早发白帝城》　唐·李白\n两岸猿声啼不 ___，轻舟已过万重山。\n\n【整句】两岸猿声啼不住，轻舟已过万重山。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《早发白帝城》。','整句是：两岸猿声啼不住，轻舟已过万重山。，缺的是「住」。']}
 ],
 explain:['《早发白帝城》：两岸猿声啼不住，轻舟已过万重山。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r77={id:'r77',title:'长笛房',emoji:'🎵',sub:'英语 · 拼写',
 story:['英语拼写站「长笛房」！','琴凳旁小桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'琴凳旁小桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'琴凳旁小桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】Join a club to make more _____. (朋友)\n（Unit 2：make more friends）',lock:{kind:'alpha',len:7,answer:'FRIENDS',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「长笛房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 2：make more friends','答案是 FRIENDS。']}
 ],
 explain:['英文题：Join a club to make more _____. (朋友)','Unit 2：make more friends → FRIENDS','拼对通关。'],
 solution:[['code','desk','FRIENDS']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r78={id:'r78',title:'向日葵园',emoji:'🌷',sub:'数学 · 挑战',
 story:['你来到了花园。','石凳上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开园门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'园门',box:[310,160,70,120],views:[
    {text:'园门锁着，需要钥匙。',use:[{item:'key_r78',win:true,text:'钥匙一转，园门开了！「向日葵园」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳上有密码锁，旁边贴着纸条：',note:'【算一算】3 千米 = ? 米',lock:{kind:'num',len:4,answer:'3000',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看石凳上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 3000。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点石凳，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点园门。','先点钥匙，再点目标。']}
 ],
 explain:['1 千米 = 1000 米，所以 3 千米 = 3000 米','打开抽屉拿到钥匙。','用钥匙打开园门，挑战成功。'],
 solution:[['code','desk','3000'],['take','desk'],['use','door','key_r78']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r79={id:'r79',title:'篮球角',emoji:'🏀',sub:'数学 · 闯关',
 story:['欢迎来到「篮球角」挑战站！','长椅上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上的挑战题：',note:'【算一算】5 千米 = ? 米',lock:{kind:'num',len:4,answer:'5000',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「篮球角」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开长椅上的题。','仔细看【算一算】。','答案是 5000。']}
 ],
 explain:['1 千米 = 1000 米，所以 5 千米 = 5000 米','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','5000']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r80={id:'r80',title:'U盘屋',emoji:'💻',sub:'数学 · 助人',
 story:['你走进电脑室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开电脑桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r80',take:['gift_r80'],win:true,text:'小花猫开心地收下了！「U盘屋」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌抽屉锁着，纸条上有题：',note:'【算一算】2 千米 = ? 米',lock:{kind:'num',len:4,answer:'2000',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开电脑桌的密码。','看纸条上的题。','答案是 2000。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点电脑桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['1 千米 = 1000 米，所以 2 千米 = 2000 米','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','2000'],['take','desk'],['use','door','gift_r80']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r81={id:'r81',title:'晨读角',emoji:'📚',sub:'数学 · 益智',
 story:['「晨读角」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r81',take:['combo_r81'],win:true,text:'放上去——成功！「晨读角」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌锁着：',note:'【算一算】8 千米 = ? 米',lock:{kind:'num',len:4,answer:'8000',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开书桌。','算纸条上的题。','答案 8000。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['1 千米 = 1000 米，所以 8 千米 = 8000 米','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','8000'],['take','desk'],['take','shelf'],['combine','partA_r81','partB_r81'],['use','door','combo_r81']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r82={id:'r82',title:'习题教室',emoji:'🏫',sub:'数学 · 英语',
 story:['双锁挑战站「习题教室」！','先过讲台，再过作业盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】1.5 千米 = ? 米',lock:{kind:'num',len:4,answer:'1500',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'作业盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'作业盒上还有第二关：',note:'【英语题】I can share my _____. (想法)\n（Unit 2：share my ideas）',lock:{kind:'alpha',len:5,answer:'IDEAS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「习题教室」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 1500。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：share my ideas','答案是 IDEAS。']}
 ],
 explain:['1 千米 = 1000 米，所以 1.5 千米 = 1500 米','I can share my _____. (想法) → IDEAS','两关都对，挑战成功。'],
 solution:[['code','desk','1500'],['code','box','IDEAS']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r83={id:'r83',title:'面条厨房',emoji:'🍳',sub:'数学 · 通行证',
 story:['「面条厨房」要刷通行证才能完成任务。','小黄：“卡片和徽章拼起来，去刷卡机刷一下！”','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r83',take:['combo_r83'],win:true,text:'嘀——通过！「面条厨房」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桌子锁着：',note:'【算一算】4 千米 = ? 米',lock:{kind:'num',len:4,answer:'4000',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开桌子。','算题。','答案 4000。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看碗架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['1 千米 = 1000 米，所以 4 千米 = 4000 米','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','4000'],['take','desk'],['take','shelf'],['combine','scrap_r83','tool_r83'],['use','door','combo_r83']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r84={id:'r84',title:'跳远区',emoji:'⚽',sub:'语文 · 古诗',
 story:['古诗转盘挑战「跳远区」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n\n【整句】两个黄鹂鸣翠柳，一行白鹭上青天。',lock:{kind:'dial',opts:[['了','的','一','中','天']],answer:'天',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「跳远区」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'记分板',box:[130,20,150,90],views:[
    {text:'墙上写着《绝句》（唐·杜甫），少了一个字：',note:'《绝句》　唐·杜甫\n两个黄鹂鸣翠柳，一行白鹭上青 ___。\n\n【整句】两个黄鹂鸣翠柳，一行白鹭上青天。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《绝句》。','整句是：两个黄鹂鸣翠柳，一行白鹭上青天。，缺的是「天」。']}
 ],
 explain:['《绝句》：两个黄鹂鸣翠柳，一行白鹭上青天。','缺的字是「天」。','转对转盘，挑战成功。'],
 solution:[['code','box','天']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r85={id:'r85',title:'小猫公园',emoji:'🎠',sub:'英语 · 拼写',
 story:['英语拼写站「小猫公园」！','石凳上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳小盒上有字母锁，旁边是英文卡片：',note:'【英语题】A _____ can help us at the fair. (机器人)\n（Unit 2：robot = 机器人）',lock:{kind:'alpha',len:5,answer:'ROBOT',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「小猫公园」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 2：robot = 机器人','答案是 ROBOT。']}
 ],
 explain:['英文题：A _____ can help us at the fair. (机器人)','Unit 2：robot = 机器人 → ROBOT','拼对通关。'],
 solution:[['code','desk','ROBOT']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var r86={id:'r86',title:'杂志架',emoji:'📖',sub:'数学 · 挑战',
 story:['你来到了图书馆。','阅览桌上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'馆门',box:[310,160,70,120],views:[
    {text:'馆门锁着，需要钥匙。',use:[{item:'key_r86',win:true,text:'钥匙一转，馆门开了！「杂志架」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'阅览桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'阅览桌上有密码锁，旁边贴着纸条：',note:'【算一算】6 千米 = ? 米',lock:{kind:'num',len:4,answer:'6000',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看阅览桌上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 6000。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点阅览桌，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点馆门。','先点钥匙，再点目标。']}
 ],
 explain:['1 千米 = 1000 米，所以 6 千米 = 6000 米','打开抽屉拿到钥匙。','用钥匙打开馆门，挑战成功。'],
 solution:[['code','desk','6000'],['take','desk'],['use','door','key_r86']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff0e0')+R(0,214,400,86,'#d4b896');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📖')+T(340,260,18,'✨');
  return s;}
};
var r87={id:'r87',title:'北斗台',emoji:'🔭',sub:'数学 · 闯关',
 story:['欢迎来到「北斗台」挑战站！','观测台上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'观测台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'观测台上的挑战题：',note:'【算一算】2.5 千米 = ? 米',lock:{kind:'num',len:4,answer:'2500',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「北斗台」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开观测台上的题。','仔细看【算一算】。','答案是 2500。']}
 ],
 explain:['1 千米 = 1000 米，所以 2.5 千米 = 2500 米','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','2500']],
 art:function(f){var s='';s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔭')+T(340,260,18,'✨');
  return s;}
};
var r88={id:'r88',title:'放大镜屋',emoji:'🔬',sub:'数学 · 助人',
 story:['你走进实验室，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开实验台上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r88',take:['gift_r88'],win:true,text:'小花猫开心地收下了！「放大镜屋」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'实验台抽屉锁着，纸条上有题：',note:'【算一算】一个袋子里有 3 个红球、2 个蓝球。一共有几个球？',lock:{kind:'num',len:1,answer:'5',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开实验台的密码。','看纸条上的题。','答案是 5。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点实验台拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['3 + 2 = 5 个球','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','5'],['take','desk'],['use','door','gift_r88']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8f4ff')+R(0,214,400,86,'#b8d4e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🔬')+T(340,260,18,'✨');
  return s;}
};
var r89={id:'r89',title:'面包超市',emoji:'🛒',sub:'数学 · 益智',
 story:['「面包超市」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r89',take:['combo_r89'],win:true,text:'放上去——成功！「面包超市」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台锁着：',note:'【算一算】班级有 20 人，分成 4 组，平均每组几人？',lock:{kind:'num',len:1,answer:'5',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开柜台。','算纸条上的题。','答案 5。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看货架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['20 ÷ 4 = 5','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','5'],['take','desk'],['take','shelf'],['combine','partA_r89','partB_r89'],['use','door','combo_r89']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff5f0')+R(0,214,400,86,'#f0d4c8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🛒')+T(340,260,18,'✨');
  return s;}
};
var r90={id:'r90',title:'检票口',emoji:'🚂',sub:'数学 · 英语',
 story:['双锁挑战站「检票口」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'检票台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形：长 8 米，宽 6 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'行李箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'行李箱上还有第二关：',note:'【英语题】Sports help me _____ taller and stronger. (成长/长高)\n（Unit 2：grow taller and stronger）',lock:{kind:'alpha',len:4,answer:'GROW',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「检票口」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 48。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：grow taller and stronger','答案是 GROW。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 8 × 6 = 48','Sports help me _____ taller and stronger. (成长/长高) → GROW','两关都对，挑战成功。'],
 solution:[['code','desk','48'],['code','box','GROW']],
 art:function(f){var s='';s+=R(0,0,400,300,'#eef2ff')+R(0,214,400,86,'#c8d0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff',6,' stroke="#4d8bff" stroke-width="5"')+T(205,65,11,'📢',' fill="#5b4636"'));
  s+=g('desk',R(30,150,120,50,'#e0d0c0',6,SK)+(f.desk_open?R(40,160,60,30,'#fff',4):C(80,175,5,'#5b4636'))+T(90,210,10,'柜台',' fill="#5b4636"'));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🚂')+T(340,260,18,'✨');
  return s;}
};
var r91={id:'r91',title:'折纸屋',emoji:'🎨',sub:'数学 · 通行证',
 story:['「折纸屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r91',take:['combo_r91'],win:true,text:'嘀——通过！「折纸屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'画桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'画桌锁着：',note:'【算一算】长方形：长 12 米，宽 5 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'60',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开画桌。','算题。','答案 60。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看画架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 12 × 5 = 60','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','60'],['take','desk'],['take','shelf'],['combine','scrap_r91','tool_r91'],['use','door','combo_r91']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe8f0')+R(0,214,400,86,'#e0c3d0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎨')+T(340,260,18,'✨');
  return s;}
};
var r92={id:'r92',title:'小提琴房',emoji:'🎵',sub:'语文 · 古诗',
 story:['古诗转盘挑战「小提琴房」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n\n【整句】姑苏城外寒山寺，夜半钟声到客船。',lock:{kind:'dial',opts:[['天','了','的','一','中','船']],answer:'船',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「小提琴房」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'乐谱板',box:[130,20,150,90],views:[
    {text:'墙上写着《枫桥夜泊》（唐·张继），少了一个字：',note:'《枫桥夜泊》　唐·张继\n姑苏城外寒山寺，夜半钟声到客 ___。\n\n【整句】姑苏城外寒山寺，夜半钟声到客船。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《枫桥夜泊》。','整句是：姑苏城外寒山寺，夜半钟声到客船。，缺的是「船」。']}
 ],
 explain:['《枫桥夜泊》：姑苏城外寒山寺，夜半钟声到客船。','缺的字是「船」。','转对转盘，挑战成功。'],
 solution:[['code','box','船']],
 art:function(f){var s='';s+=R(0,0,400,300,'#f0e8ff')+R(0,214,400,86,'#d0c0e8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎵')+T(340,260,18,'✨');
  return s;}
};
var r93={id:'r93',title:'薰衣草园',emoji:'🌷',sub:'英语 · 拼写',
 story:['英语拼写站「薰衣草园」！','石凳上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'石凳小盒上有字母锁，旁边是英文卡片：',note:'【英语题】It is a _____ to learn new skills. (机会)\n（Unit 2：a chance to… = 一个……的机会）',lock:{kind:'alpha',len:6,answer:'CHANCE',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「薰衣草园」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题。','Unit 2：a chance to… = 一个……的机会','答案是 CHANCE。']}
 ],
 explain:['英文题：It is a _____ to learn new skills. (机会)','Unit 2：a chance to… = 一个……的机会 → CHANCE','拼对通关。'],
 solution:[['code','desk','CHANCE']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e8ffe8')+R(0,214,400,86,'#90d080');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🌷')+T(340,260,18,'✨');
  return s;}
};
var r94={id:'r94',title:'游泳馆门',emoji:'🏀',sub:'数学 · 挑战',
 story:['你来到了体育馆。','长椅上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开场馆门，挑战就成功啦！'],
 objects:[
  {id:'door',name:'场馆门',box:[310,160,70,120],views:[
    {text:'场馆门锁着，需要钥匙。',use:[{item:'key_r94',win:true,text:'钥匙一转，场馆门开了！「游泳馆门」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅上有密码锁，旁边贴着纸条：',note:'【算一算】长方形：长 9 米，宽 4 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看长椅上的纸条。','纸条上有一道数学题，算出答案就是密码。','算一算，答案是 36。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点长椅，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点场馆门。','先点钥匙，再点目标。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 9 × 4 = 36','打开抽屉拿到钥匙。','用钥匙打开场馆门，挑战成功。'],
 solution:[['code','desk','36'],['take','desk'],['use','door','key_r94']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff8e0')+R(0,214,400,86,'#e8c878');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏀')+T(340,260,18,'✨');
  return s;}
};
var r95={id:'r95',title:'耳机屋',emoji:'💻',sub:'数学 · 闯关',
 story:['欢迎来到「耳机屋」挑战站！','电脑桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'电脑桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'电脑桌上的挑战题：',note:'【算一算】长方形：长 7.5 米，宽 4 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'30',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「耳机屋」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开电脑桌上的题。','仔细看【算一算】。','答案是 30。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 7.5 × 4 = 30','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','30']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e0f0ff')+R(0,214,400,86,'#a8c0d8');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'💻')+T(340,260,18,'✨');
  return s;}
};
var r96={id:'r96',title:'灯下书房',emoji:'📚',sub:'数学 · 助人',
 story:['你走进书房，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开书桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r96',take:['gift_r96'],win:true,text:'小花猫开心地收下了！「灯下书房」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌抽屉锁着，纸条上有题：',note:'【算一算】长方形：长 10 米，宽 8 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'80',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开书桌的密码。','看纸条上的题。','答案是 80。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点书桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 10 × 8 = 80','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','80'],['take','desk'],['use','door','gift_r96']],
 art:function(f){var s='';s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'📚')+T(340,260,18,'✨');
  return s;}
};
var r97={id:'r97',title:'黑板旁',emoji:'🏫',sub:'数学 · 益智',
 story:['「黑板旁」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r97',take:['combo_r97'],win:true,text:'放上去——成功！「黑板旁」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'讲台锁着：',note:'【算一算】长方形：长 15 米，宽 6 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'90',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开讲台。','算纸条上的题。','答案 90。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看书架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 15 × 6 = 90','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','90'],['take','desk'],['take','shelf'],['combine','partA_r97','partB_r97'],['use','door','combo_r97']],
 art:function(f){var s='';s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'📝',' fill="#fff'));
  s+=g('desk',R(30,150,120,50,'#c98b52',6,SK)+(f.desk_open?R(40,160,60,30,'#d9a26c',4):C(80,175,5,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#b9793f',6,SK)+R(298,70,74,8,'#8a5428',2)+R(298,110,74,8,'#8a5428',2));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🏫')+T(340,260,18,'✨');
  return s;}
};
var r98={id:'r98',title:'蒸笼厨房',emoji:'🍳',sub:'数学 · 英语',
 story:['双锁挑战站「蒸笼厨房」！','先过桌子，再过食材盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'桌子',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】长方形：长 6.5 米，宽 8 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'52',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'食材盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'食材盒上还有第二关：',note:'【英语题】I like dancing as _____. (也)\n（Unit 2：as well = 也）',lock:{kind:'alpha',len:4,answer:'WELL',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「蒸笼厨房」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】。','答案是 52。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Unit 2：as well = 也','答案是 WELL。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 6.5 × 8 = 52','I like dancing as _____. (也) → WELL','两关都对，挑战成功。'],
 solution:[['code','desk','52'],['code','box','WELL']],
 art:function(f){var s='';s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(205,55,11,'📋',' fill="#5b4636"')+T(205,78,10,'菜谱',' fill="#5b4636"'));
  s+=g('desk',R(30,150,130,54,'#e8c9a0',6,SK)+R(40,158,50,28,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(90,175,5,'#5b4636'))+T(95,210,10,'桌子',' fill="#5b4636"'));
  s+=g('box',R(180,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(190,168,50,34,'#ffe0b0',3):R(200,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,100,'#c98b52',6,SK)+R(288,55,84,8,'#8a5428',2)+R(288,85,84,8,'#8a5428',2)+T(330,120,16,'🥣'));
  s+=g('door',R(310,150,70,120,'#ffd6a5',6,SK)+C(365,210,5,'#ffcf4d',SK)+T(345,250,10,'灶台旁',' fill="#5b4636"'));
  s+=T(60,260,20,'🍳')+T(340,260,18,'🍳');
  return s;}
};
var r99={id:'r99',title:'终点线',emoji:'⚽',sub:'数学 · 通行证',
 story:['「终点线」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r99',take:['combo_r99'],win:true,text:'嘀——通过！「终点线」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅锁着：',note:'【算一算】长方形：长 11 米，宽 3 米。面积是多少平方米？',lock:{kind:'num',len:2,answer:'33',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开长椅。','算题。','答案 33。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看球架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['长方形面积 = 长 × 宽 = 11 × 3 = 33','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','33'],['take','desk'],['take','shelf'],['combine','scrap_r99','tool_r99'],['use','door','combo_r99']],
 art:function(f){var s='';s+=R(0,0,400,300,'#c9f0ff')+R(0,214,400,86,'#9ee07a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'⚽')+T(340,260,18,'✨');
  return s;}
};
var r100={id:'r100',title:'狐狸公园',emoji:'🎠',sub:'语文 · 古诗',
 story:['古诗转盘挑战「狐狸公园」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'诗匣上有一个汉字转盘。',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n\n【整句】春色满园关不住，一枝红杏出墙来。',lock:{kind:'dial',opts:[['天','了','的','一','中','住']],answer:'住',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「狐狸公园」古诗挑战成功！'},bad:'不对哦，再读一读这首诗。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'告示牌',box:[130,20,150,90],views:[
    {text:'墙上写着《游园不值》（宋·叶绍翁），少了一个字：',note:'《游园不值》　宋·叶绍翁\n春色满园关不 ___，一枝红杏出墙来。\n\n【整句】春色满园关不住，一枝红杏出墙来。'}
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
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《游园不值》。','整句是：春色满园关不住，一枝红杏出墙来。，缺的是「住」。']}
 ],
 explain:['《游园不值》：春色满园关不住，一枝红杏出墙来。','缺的字是「住」。','转对转盘，挑战成功。'],
 solution:[['code','box','住']],
 art:function(f){var s='';s+=R(0,0,400,300,'#dff7e8')+R(0,214,400,86,'#8fd99a');
  s+=g('window',R(24,24,90,70,'#bfe8ff',8,SK)+C(90,44,10,'#fff2a8'));
  s+=g('board',R(130,20,150,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,65,11,'🏁',' fill="#fff'));
  s+=g('desk',R(40,160,140,40,'#a86b38',6,SK)+R(50,150,120,14,'#c98b52',4,SK)+T(110,210,10,'长椅',' fill="#5b4636"')+(f.desk_open?R(70,168,40,20,'#d9a26c',3):C(100,180,4,'#5b4636')));
  s+=g('box',R(200,160,70,50,'#ffb36b',6,SK)+(f.box_open?R(210,168,50,34,'#ffe0b0',3):R(220,175,30,18,'#ffcf4d',3)));
  s+=g('shelf',R(290,40,90,120,'#90c070',6,SK)+T(335,100,22,'⚽'));
  s+=g('door',R(310,160,70,120,'#c98b52',6,SK)+C(365,220,5,'#ffcf4d',SK));
  s+=T(60,260,20,'🎠')+T(340,260,18,'✨');
  return s;}
};
var EXTRA=[r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72,r73,r74,r75,r76,r77,r78,r79,r80,r81,r82,r83,r84,r85,r86,r87,r88,r89,r90,r91,r92,r93,r94,r95,r96,r97,r98,r99,r100];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/