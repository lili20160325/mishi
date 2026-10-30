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
var r21={id:'r21',title:'月亮书房',emoji:'📚',sub:'英语 · 小作文',
 story:['英语小作文站「月亮书房」！（把安全 tip / 通知补完整）','书桌上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'书桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'书桌小盒上有字母锁，旁边是英文卡片：',note:'【英语题】【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.\n（线索：通知信安全 tip，复数，6 个字母，首字母 L；离校前关掉。）',lock:{kind:'alpha',len:6,answer:'LIGHTS',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「月亮书房」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','通知信安全 tip，复数，6 个字母，首字母 L；离校前关掉。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.','正确答案是 LIGHTS。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','LIGHTS']],
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
    {if:['!desk_open'],text:'讲台上有密码锁，旁边贴着纸条：',note:'【算一算】6.4 升油平均倒进 4 个瓶子，每个瓶子多少升？',lock:{kind:'num',len:3,dot:true,answer:'1.6',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看讲台上的纸条。','纸条上有一道数学题，算出答案就是密码。','总数÷瓶数，就是每个瓶子分到的量。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点讲台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点教室门。','先点钥匙，再点目标。']}
 ],
 explain:['6.4 ÷ 4 = 1.6','打开抽屉拿到钥匙。','用钥匙打开教室门，挑战成功。'],
 solution:[['code','desk','1.6'],['take','desk'],['use','door','key_r22']],
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
    {if:['!desk_open'],text:'桌子上的挑战题：',note:'【算一算】循环小数：下面哪个算式的商是循环小数？① 1÷2 ② 3÷4 ③ 1÷3 ④ 2÷5。填序号。',lock:{kind:'num',len:1,answer:'3',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「甜甜厨房」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开桌子上的题。','仔细看【算一算】，多步时先算哪一步？','约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。']}
 ],
 explain:['① 1÷2=0.5 有限小数，② 3÷4=0.75 有限小数，③ 1÷3=0.3333… 循环小数，④ 2÷5=0.4 有限小数。所以填 3。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','3']],
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
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】小数四则：6.3 ÷ 0.3 = ?',lock:{kind:'num',len:2,answer:'21',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['6.3 ÷ 0.3 = 21。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','21'],['take','desk'],['use','door','gift_r24']],
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
    {if:['!desk_open'],text:'石凳锁着：',note:'【算一算】一桶油重 18.6 千克，用去 5.8 千克后又倒入 3.5 千克。现在桶里有多少千克？',lock:{kind:'num',len:4,dot:true,answer:'16.3',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开石凳。','算纸条上的题。','先减去用去的，再加上倒入的。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['18.6 − 5.8 + 3.5 = 16.3','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','16.3'],['take','desk'],['take','shelf'],['combine','partA_r25','partB_r25'],['use','door','combo_r25']],
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
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】一共有 4.8 米绳子，每份 1.2 米。可以分成多少份？',lock:{kind:'num',len:1,answer:'4',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'还书箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'还书箱上还有第二关：',note:'【英语题】You\'ll need to turn off the _____.\n（线索：Typhoon 单元 Spotlight，复数名词，6 个字母，首字母 L；屋里的灯。）',lock:{kind:'alpha',len:6,answer:'LIGHTS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「书香角」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','小数除以小数：先把除数变成整数（两边同乘 10 或 100），再除。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Typhoon 单元 Spotlight，复数名词，6 个字母，首字母 L；屋里的灯。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['4.8 ÷ 1.2 = 4','You\'ll need to turn off the _____. → LIGHTS','两关都对，挑战成功。'],
 solution:[['code','desk','4'],['code','box','LIGHTS']],
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
    {if:['!desk_open'],text:'观测台锁着：',note:'【算一算】循环小数：0.1818…（循环节是 18）化成最简分数，分子是多少？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开观测台。','算题，注意多步运算。','先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看星图架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['0.1818… 写成 18/99，约分得 2/11，分子是 2。','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','2'],['take','desk'],['take','shelf'],['combine','scrap_r27','tool_r27'],['use','door','combo_r27']],
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
var r28={id:'r28',title:'气泡实验室',emoji:'🔬',sub:'语文 · 词语',
 story:['词语转盘挑战「气泡实验室」！','黑板上的词语少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'词语匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'匣子上有一个汉字转盘。',note:'【词语填空】桂 ___\n（写出正确的字，组成词语）',lock:{kind:'dial',opts:[['桂','天','了','的','一','花']],answer:'花',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「气泡实验室」词语挑战成功！'},bad:'不对哦，再想想。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'公式板',box:[130,20,150,90],views:[
    {text:'黑板上写着一个词语，少了一个字：',note:'【词语填空】桂 ___\n（写出正确的字，组成词语）'}
  ]},
  {id:'desk',name:'实验台',box:[30,150,120,50],views:[
    {text:'实验台上有语文课本，翻开正好是词语表。'}
  ]},
  {id:'door',name:'实验室门',box:[310,160,70,120],views:[
    {text:'实验室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'器材架',box:[290,40,90,120],views:[
    {text:'器材架上有《成语词典》。'}
  ]},
  {id:'window',name:'窗户',box:[24,24,90,70],views:[
    {text:'试管里冒着小泡泡。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['这是词语表里的双字词。','看看空着的是第几个字。','秋天开的香香的花']}
 ],
 explain:['词语「桂花」','缺的字是「花」。秋天开的香香的花','转对转盘，挑战成功。'],
 solution:[['code','box','花']],
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
var r29={id:'r29',title:'果果超市',emoji:'🛒',sub:'英语 · 听力',
 story:['英语听力站「果果超市」！（读一读广播文字再答题）','柜台上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'柜台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'柜台小盒上有字母锁，旁边是英文卡片：',note:'【英语题】【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____.\n（线索：听广播找安全地点，7 个字母，首字母 I；待在屋里。）',lock:{kind:'alpha',len:7,answer:'INDOORS',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「果果超市」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','听广播找安全地点，7 个字母，首字母 I；待在屋里。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____.','正确答案是 INDOORS。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','INDOORS']],
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
    {if:['!desk_open'],text:'茶几上有密码锁，旁边贴着纸条：',note:'【算一算】小数四则：12.6 + 0.45 − 3.05 = ?',lock:{kind:'num',len:2,answer:'10',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看茶几上的纸条。','纸条上有一道数学题，算出答案就是密码。','看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点茶几，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点房门。','先点钥匙，再点目标。']}
 ],
 explain:['12.6 + 0.45 − 3.05 = 10。先加再减。','打开抽屉拿到钥匙。','用钥匙打开房门，挑战成功。'],
 solution:[['code','desk','10'],['take','desk'],['use','door','key_r30']],
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
var r31={id:'r31',title:'月亮卧室',emoji:'🛏️',sub:'数学 · 闯关',
 story:['欢迎来到「月亮卧室」挑战站！','床头柜上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜上的挑战题：',note:'【算一算】梯形：上底 6.5 分米，下底 9.5 分米，高 4 分米。面积是多少平方分米？',lock:{kind:'num',len:2,answer:'32',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「月亮卧室」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开床头柜上的题。','仔细看【算一算】，多步时先算哪一步？','梯形面积 =（上底+下底）×高÷2。']}
 ],
 explain:['（6.5+9.5）×4÷2 = 32','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','32']],
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
var r32={id:'r32',title:'林荫公园',emoji:'🌳',sub:'数学 · 助人',
 story:['你走进林荫公园，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开长椅上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r32',take:['gift_r32'],win:true,text:'小花猫开心地收下了！「林荫公园」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'长椅抽屉锁着，纸条上有题：',note:'【算一算】循环小数：计算 1÷6，从小数点后第几位开始循环？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开长椅的密码。','看纸条上的题，可能要算两步。','看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点长椅拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['1÷6=0.1666…，从小数点后第 2 位开始循环。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','2'],['take','desk'],['use','door','gift_r32']],
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
var r33={id:'r33',title:'彩虹花园',emoji:'🌷',sub:'数学 · 益智',
 story:['「彩虹花园」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r33',take:['combo_r33'],win:true,text:'放上去——成功！「彩虹花园」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'花坛沿',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'花坛沿锁着：',note:'【算一算】一块三角形彩纸底 8 厘米、高 6 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？',lock:{kind:'num',len:2,answer:'48',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开花坛沿。','算纸条上的题。','先求一块三角形面积，再乘 2。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看花架。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['一块 = 8×6÷2 = 24，两块 = 48','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','48'],['take','desk'],['take','shelf'],['combine','partA_r33','partB_r33'],['use','door','combo_r33']],
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
var r34={id:'r34',title:'石头过河',emoji:'🛶',sub:'数学 · 语文',
 story:['双锁挑战站「石头过河」！','小黄说：“两道题都做对，就过关！”','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'岸边石桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】循环小数：最简分数 2/11 写成小数，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'木箱',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'木箱上还有第二关：',note:'【成语填空】家 喻 户 ___\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['家','喻','户','天','了','晓']],answer:'晓',prompt:'转字',ok:{set:['box_open'],win:true,text:'两关都过啦！「石头过河」挑战成功！'},bad:'再读读诗。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','这是一个四字成语，看空格前后想想。','结合上下字的搭配来猜。']}
 ],
 explain:['2/11=0.1818…，循环节连起来是 18。','成语「家喻户晓」缺「晓」。家家户户都知道，形容很有名','两关都对，挑战成功。'],
 solution:[['code','desk','18'],['code','box','晓']],
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
var r35={id:'r35',title:'石拱桥头',emoji:'🌉',sub:'数学 · 通行证',
 story:['「石拱桥头」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r35',take:['combo_r35'],win:true,text:'嘀——通过！「石拱桥头」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'桥头石凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'桥头石凳锁着：',note:'【算一算】小路长 48 米。从头到尾，每隔 6 米种一棵树（两头都要种）。一共要种多少棵树？',lock:{kind:'num',len:1,answer:'9',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开桥头石凳。','算题，注意多步运算。','段数 = 全长÷间隔，两头都种则棵数比段数多 1。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看灯笼架。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['段数=48÷6=8，棵数=段数+1=9','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','9'],['take','desk'],['take','shelf'],['combine','scrap_r35','tool_r35'],['use','door','combo_r35']],
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
var r36={id:'r36',title:'阳光教室',emoji:'🏫',sub:'语文 · 古诗',
 story:['古诗转盘挑战「阳光教室」！','墙上的诗少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'古诗匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'匣子上有一个汉字转盘。',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n（想一想课文里完整的一句）',lock:{kind:'dial',opts:[['天','了','的','一','中','光']],answer:'光',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「阳光教室」古诗挑战成功！'},bad:'不对哦，再想想。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'黑板',box:[130,20,150,90],views:[
    {text:'墙上写着《静夜思》（唐·李白），少了一个字：',note:'《静夜思》　唐·李白\n床前明月 ___，疑是地上霜。\n（想一想课文里完整的一句）'}
  ]},
  {id:'desk',name:'讲台',box:[30,150,120,50],views:[
    {text:'讲台上有语文课本，翻开正好是词语表。'}
  ]},
  {id:'door',name:'教室门',box:[310,160,70,120],views:[
    {text:'教室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'书架',box:[290,40,90,120],views:[
    {text:'书架上有《成语词典》。'}
  ]},
  {id:'window',name:'窗',box:[24,24,90,70],views:[
    {text:'黑板上还有没擦掉的算式，粉笔灰轻轻飘。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['看看墙上的古诗，少了哪个字？','这是《静夜思》，唐·李白。','读空格前后的字，回忆课文原句，不要直接翻答案。']}
 ],
 explain:['《静夜思》：床前明月光，疑是地上霜。','缺的字是「光」。','转对转盘，挑战成功。'],
 solution:[['code','box','光']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#fffaf2');
  s+=R(0,236,400,64,'#f0e2c4');
  s+=P('M40 250 L120 236 L200 268 L80 286z','#ffe9a8',' opacity=".45"');
  for(var i=0;i<4;i++)s+=R(18+i*92,248,78,28,'#f6e6c8',2,' stroke="#e2d0ae" stroke-width="2"')+R(48+i*92,244,6,32,'#c9a06a');
  s+=g('window',R(16,18,92,86,'#f7f4ea',2,' stroke="#f7f1e4" stroke-width="6"')+P('M62 18v86M16 60h92','none',' stroke="#fff" stroke-width="3"')+T(62,118,11,'窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(122,14,176,108,'#14753a',2,' stroke="#8a5a32" stroke-width="7"')+R(130,108,160,8,'#c9a06a')+T(210,48,16,'今天的课',' fill="#fff"')+T(210,74,13,'认真审题',' fill="#d8ffe6"')+T(210,98,12,'先读再算',' fill="#b6f0cc"'));
  s+=g('desk',R(22,156,120,48,'#d7b07a',3,' stroke="#a67c52" stroke-width="2"')+R(34,166,64,22,f.desk_open?'#fff3d8':'#b8894a',2)+(f.desk_open?'':C(100,176,4,'#fff'))+T(80,220,11,'讲台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,168,58,36,'#f0c14a',3)+(f.box_open?R(174,174,46,22,'#fff6d0',2):R(180,178,28,12,'#e2a820',2))+T(196,220,11,'作业盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,20,92,140,'#f7f1e4',2,' stroke="#d7c4a4" stroke-width="3"')+R(300,36,10,28,'#e25b4a')+R(312,40,8,24,'#3d8bfd')+R(322,34,12,30,'#f2c14a')+R(336,42,8,22,'#3ecf8e')+R(300,90,10,28,'#9b59b6')+R(312,86,14,32,'#e67e22')+T(336,150,11,'书架',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(308,140,66,140,'#dfeaf6',2,' stroke="#9bb7d4" stroke-width="4"')+R(322,154,38,36,'#fffaf2',2)+C(358,214,4,'#c9a06a')+T(340,292,11,'教室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r37={id:'r37',title:'校园走廊',emoji:'🏫',sub:'英语 · 小作文',
 story:['英语小作文站「校园走廊」！（把安全 tip / 通知补完整）','休息椅上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'休息椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'休息椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】【小作文·校长通知】Make sure you wear a _____ on your way home.\n（线索：通知信穿戴，8 个字母，首字母 R；彩色的更好。）',lock:{kind:'alpha',len:8,answer:'RAINCOAT',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「校园走廊」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','通知信穿戴，8 个字母，首字母 R；彩色的更好。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：【小作文·校长通知】Make sure you wear a _____ on your way home.','正确答案是 RAINCOAT。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','RAINCOAT']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="hwW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f4ea"/><stop offset="1" stop-color="#e7edf4"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#hwW)');
  s+=P('M0 210 L160 150 H240 L400 210 V300 H0z','#d5dbe4');
  for(var i=0;i<7;i++)s+=P('M'+(40+i*46)+' 300 L'+(170+i*8)+' 160','none',' stroke="#fff" stroke-width="2" opacity=".35"');
  s+=R(0,150,70,160,'#d5dbe4')+R(330,150,70,160,'#d5dbe4');
  s+=g('window',R(8,28,70,70,'#f7f4ea',2,' stroke="#fff" stroke-width="4"')+P('M43 28v70M8 62h70','none',' stroke="#d5e6f5" stroke-width="3"')+T(43,114,11,'走廊窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,36,150,70,'#f7f4ea',2,' stroke="#c5b89a" stroke-width="3"')+T(192,62,13,'失物招领',' fill="#5b4636"')+T(192,84,11,'红围巾 · 水壶',' fill="#888"'));
  s+=g('desk',R(24,176,110,16,'#c9d0da',6)+R(30,192,10,28,'#9aa3b0')+R(112,192,10,28,'#9aa3b0')+(f.desk_open?R(50,170,30,10,'#fff',2):'')+T(78,236,11,'休息椅',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,176,56,40,'#e39b4a',4)+(f.box_open?R(174,182,44,24,'#ffe6c2',2):'')+T(196,232,11,'失物箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,40,88,130,'#4e6a92',4)+R(300,52,22,36,'#eef3f8',2)+R(326,52,22,36,'#eef3f8',2)+R(352,52,22,36,'#eef3f8',2)+T(336,120,12,'🎒'));
  s+=g('door',R(300,150,64,120,'#e07a32',3)+R(312,164,40,28,'#f8e2c0',2)+T(332,250,11,'楼梯口',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r38={id:'r38',title:'森林小路',emoji:'🌲',sub:'数学 · 挑战',
 story:['你来到了森林小路。','树桩上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开小木屋，挑战就成功啦！'],
 objects:[
  {id:'door',name:'小木屋',box:[310,160,70,120],views:[
    {text:'小木屋锁着，需要钥匙。',use:[{item:'key_r38',win:true,text:'钥匙一转，小木屋开了！「森林小路」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'树桩',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树桩上有密码锁，旁边贴着纸条：',note:'【算一算】一辆车平均每小时行 60 千米，行了 2.5 小时。一共行了多少千米？',lock:{kind:'num',len:3,answer:'150',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看树桩上的纸条。','纸条上有一道数学题，算出答案就是密码。','路程 = 速度 × 时间。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点树桩，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点小木屋。','先点钥匙，再点目标。']}
 ],
 explain:['路程 = 速度 × 时间 = 60 × 2.5 = 150','打开抽屉拿到钥匙。','用钥匙打开小木屋，挑战成功。'],
 solution:[['code','desk','150'],['take','desk'],['use','door','key_r38']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="foS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e4d32"/><stop offset="1" stop-color="#cfe8c4"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#foS)');
  s+=R(0,0,400,90,'#0e3320',' opacity=".45"');
  s+=P('M120 40 L150 120 L90 120z','#ffe9a8',' opacity=".18"')+P('M200 20 L250 140 L150 140z','#fff6c8',' opacity=".12"');
  s+=R(0,214,400,86,'#2f6a38');
  s+=P('M150 300 C190 200 200 160 210 120 C230 180 260 230 300 300z','#b08960');
  s+=R(6,20,22,230,'#3e2a1c')+R(48,40,16,200,'#4a3424')+R(360,10,26,240,'#2c2118')+C(16,24,30,'#143d24')+C(56,36,22,'#1c5a32')+C(374,16,36,'#102e1c');
  s+=C(36,250,6,'#e25b4a')+C(70,262,5,'#f2c14a')+C(250,258,5,'#f7f1e4')+C(280,246,6,'#c46b4a');
  s+=g('window',C(78,120,24,'#102e1c')+C(78,120,10,'#0a1a12')+T(78,160,11,'树洞',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(130,36,8,80,'#5a3a22')+R(138,48,100,46,'#e7d3a4',2,' stroke="#3e2a1c" stroke-width="3"')+T(188,72,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',el(86,186,36,16,'#8a5a32')+el(86,180,22,8,f.desk_open?'#e7c8a0':'#6b4423')+T(86,214,11,'树桩',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(176,168,60,40,'#a67c52',3)+(f.box_open?R(182,174,48,24,'#f0ddb4',2):'')+T(206,224,11,'小木箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,70,10,90,'#4a3424')+R(322,50,12,110,'#3e2a1c')+R(346,80,10,80,'#5a3a22')+C(328,150,7,'#e25b4a')+T(330,180,11,'木柴',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(300,156,68,110,'#c49a62',3)+P('M300 156 l34-26 34 26','#8d4a3a')+R(320,178,28,22,'#f6e2a8',2)+T(334,250,11,'小木屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r39={id:'r39',title:'贝壳沙滩',emoji:'🏖️',sub:'数学 · 闯关',
 story:['欢迎来到「贝壳沙滩」挑战站！','沙桌上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'沙桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'沙桌上的挑战题：',note:'【算一算】一件原价 80 元的外套打 8 折。应付多少元？',lock:{kind:'num',len:2,answer:'64',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「贝壳沙滩」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开沙桌上的题。','仔细看【算一算】，多步时先算哪一步？','打 8 折就是用原价乘 0.8。']}
 ],
 explain:['80 × 0.8 = 64','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','64']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="bcS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ecbff"/><stop offset="1" stop-color="#fff6d8"/></linearGradient></defs><defs><linearGradient id="bcW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f8fd0"/><stop offset="1" stop-color="#b7e6ff"/></linearGradient></defs>';
  s+=R(0,0,400,168,'url(#bcS)');
  s+=C(300,70,28,'#ffe56a')+C(300,70,46,'#ffe56a',' opacity=".3"');
  s+=R(0,150,400,46,'url(#bcW)');
  for(var i=0;i<5;i++)s+=P('M0 '+(162+i*6)+' q40 6 80 0 t80 0 t80 0 t80 0 t80 0','none',' stroke="#fff" stroke-width="2" opacity=".45"');
  s+=R(0,190,400,110,'#f6e2b0');
  s+=el(40,230,10,4,'#fff')+el(90,250,8,3,'#f7c6c6')+el(160,236,9,3,'#ffe08a')+P('M250 150 C270 90 300 100 310 160','#2f8a40')+R(276,150,8,40,'#c98b52');
  s+=P('M330 200 l28-36 28 36z','#ff7a7a',' opacity=".85"')+R(356,200,4,24,'#e7c99a');
  s+=g('window',P('M20 160 C40 40 90 50 100 160','#2f8a40')+T(60,150,11,'椰树',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,28,130,36,'#fff',18,' stroke="#e07a4a" stroke-width="3"')+T(182,46,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',el(86,186,50,12,'#f3ddb0')+(f.desk_open?el(70,180,16,6,'#fff6e0'):'')+T(86,210,11,'沙桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(176,166,58,36,'#3aa0d8',6)+(f.box_open?R(182,172,46,22,'#e7f6ff',3):'')+T(204,218,11,'冷藏箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',C(320,90,22,'#f2c14a',' stroke="#e07a32" stroke-width="6"')+R(316,90,8,50,'#e07a32')+T(320,160,11,'救生圈',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(308,168,70,70,'#f6e2b8',4)+P('M308 168 l35-22 35 22','#e07a4a')+T(342,230,11,'沙滩屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r40={id:'r40',title:'田野农庄',emoji:'🚜',sub:'数学 · 助人',
 story:['你走进田野农庄，遇见了小花猫。','小花猫说：“帮我拿到礼物，任务就完成啦！”','先解开木桌上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r40',take:['gift_r40'],win:true,text:'小花猫开心地收下了！「田野农庄」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'木桌',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木桌抽屉锁着，纸条上有题：',note:'【算一算】笔记本每本 6.5 元，买 2 本；橡皮每块 3.2 元，买 3 块。一共多少元？',lock:{kind:'num',len:4,dot:true,answer:'22.6',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开木桌的密码。','看纸条上的题，可能要算两步。','先算笔记本总价，再加橡皮总价。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点木桌拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['6.5×2+3.2×3=22.6','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','22.6'],['take','desk'],['use','door','gift_r40']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="fmS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd4ff"/><stop offset="1" stop-color="#fff4c8"/></linearGradient></defs>';
  s+=R(0,0,400,150,'url(#fmS)');
  s+=C(60,40,16,'#ffe56a');
  for(var i=0;i<7;i++)s+=R(0,150+i*22,400,22,i%2?'#7cb342':'#c6d84a');
  s+=R(210,78,6,78,'#5a3a22')+C(213,74,8,'#f2c14a')+R(196,96,40,5,'#5a3a22')+R(186,108,54,4,'#5a3a22');
  s+=g('window',R(16,28,70,50,'#e7f6c8',4,' stroke="#7cb342" stroke-width="3"')+T(50,90,11,'田边',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(100,24,120,40,'#fff8dc',2,' stroke="#c98b52" stroke-width="4"')+T(160,44,12,'丰收告示',' fill="#5b3a1e"'));
  s+=g('desk',R(20,168,110,28,'#e7c48a',3,' stroke="#a67c52" stroke-width="2"')+R(30,174,40,14,f.desk_open?'#fff6e0':'#c98b52',2)+T(74,212,11,'木桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(150,172,60,36,'#d7a05a',3)+(f.box_open?R(156,178,48,22,'#f8e2c0',2):'')+T(180,224,11,'菜筐',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,150,50,70,'#8fbf4a',3)+C(244,166,6,'#e25b4a')+C(262,180,6,'#f2c14a')+C(248,196,6,'#ff8a3a')+T(255,236,11,'蔬果',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(304,120,84,150,'#c0392b')+P('M304 120 l42-36 42 36','#922b21')+R(332,170,28,60,'#f6e2b0',2)+T(344,290,11,'谷仓',' fill="#fff"'));
  s+=T(30,270,14,'🐔');
  return s;}
};
var r41={id:'r41',title:'荷花池塘',emoji:'🪷',sub:'数学 · 益智',
 story:['「荷花池塘」要动手做一件东西！','小黄东找西找：“两样材料在哪里？”','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r41',take:['combo_r41'],win:true,text:'放上去——成功！「荷花池塘」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'木码头',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'木码头锁着：',note:'【算一算】循环小数：计算 2÷11，商的循环节有几位数字？',lock:{kind:'num',len:1,answer:'2',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开木码头。','算纸条上的题。','用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看水榭。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['2÷11=0.1818…，循环节是 18，有 2 位。','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','2'],['take','desk'],['take','shelf'],['combine','partA_r41','partB_r41'],['use','door','combo_r41']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="ltS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9f2ff"/><stop offset="1" stop-color="#e7fff6"/></linearGradient></defs><defs><linearGradient id="ltW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1478a8"/><stop offset="1" stop-color="#7ec8ea"/></linearGradient></defs>';
  s+=R(0,0,400,90,'url(#ltS)');
  s+=P('M0 78 Q80 60 160 84 T320 70 T400 88 V100 H0z','#9ecf8a',' opacity=".7"');
  s+=R(0,88,400,212,'url(#ltW)');
  s+=el(60,180,34,14,'#1c6b40')+el(120,230,28,12,'#145c38')+el(200,160,26,12,'#1f7a48')+el(70,260,22,10,'#145c38');
  s+=C(60,168,8,'#ffd0e4')+C(200,148,9,'#ff8fb8')+C(120,218,6,'#fff');
  s+=R(16,150,120,10,'#c9a06a',4);
  s+=g('window',P('M20 70 Q50 40 90 72','none',' stroke="#7d9a6a" stroke-width="6"')+T(54,96,11,'远山',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,18,120,36,'#f4ffe8',16,' stroke="#2f8f4a" stroke-width="3"')+T(180,36,12,'荷塘',' fill="#145c32"'));
  s+=g('desk',R(16,156,130,12,'#d7b07a',4)+(f.desk_open?R(40,150,28,8,'#fff6e0',2):'')+T(80,186,11,'木码头',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',el(210,176,26,14,'#e7c07a')+(f.box_open?el(210,176,16,8,'#fff3d2'):'')+T(210,204,11,'竹篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',P('M300 40 h70 l-12 14 h-46z','#c0392b')+R(312,54,48,50,'#f7efe0',3)+T(336,120,11,'水榭',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',el(334,200,36,48,'#f6e2b8')+el(334,200,22,32,'#1478a8')+T(334,262,11,'月洞门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r42={id:'r42',title:'星空露营',emoji:'⛺',sub:'数学 · 英语',
 story:['双锁挑战站「星空露营」！','先过木头凳，再过冷藏盒。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'木头凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】小数四则：0.8 + 1.25 = ?',lock:{kind:'num',len:4,dot:true,answer:'2.05',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'冷藏盒',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'冷藏盒上还有第二关：',note:'【英语题】You\'ll want to close the _____.\n（线索：Typhoon 单元 Spotlight，复数名词，7 个字母，首字母 W；墙上的窗。）',lock:{kind:'alpha',len:7,answer:'WINDOWS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「星空露营」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','小数点对齐再相加。位数不一样时，空着的位可以看成 0。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','Typhoon 单元 Spotlight，复数名词，7 个字母，首字母 W；墙上的窗。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['0.8 + 1.25 = 2.05。小数点对齐再相加。','You\'ll want to close the _____. → WINDOWS','两关都对，挑战成功。'],
 solution:[['code','desk','2.05'],['code','box','WINDOWS']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="cpS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121a33"/><stop offset="1" stop-color="#24344e"/></linearGradient></defs><defs><radialGradient id="cpF" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#ffb15a"/><stop offset="1" stop-color="#ff7a2a" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#cpS)');
  for(var i=0;i<18;i++)s+=C((i*53+12)%390,(i*17+8)%120,i%4?1:1.8,'#fff8dc',' opacity=".9"');
  s+=R(0,176,400,124,'#1c3324');
  s+=P('M8 176 L28 70 L48 176z','#102818')+P('M340 176 L372 40 L400 176z','#0e2416');
  s+=C(110,230,46,'url(#cpF)')+P('M100 236 l10-28 12 20 8-16 10 24z','#ffcf70')+R(108,236,6,16,'#4a3424');
  s+=g('window',P('M24 150 L48 70 L72 150z','#143222')+T(48,168,11,'远林',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(130,40,120,36,'#f6e7c8',2,' stroke="#4a3424" stroke-width="3"')+T(190,58,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(20,186,120,10,'#6b4428',3)+R(16,178,128,8,'#8a5a32',2)+(f.desk_open?R(60,174,24,6,'#e7c8a0',1):'')+T(80,214,11,'木头凳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,170,58,36,'#3d5a68',4)+(f.box_open?R(174,176,46,22,'#d5e6ee',2):'')+T(196,222,11,'冷藏盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,80,8,70,'#3e2a1c')+R(292,78,40,28,'#6b4428',3)+T(312,130,11,'背包',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M304 272 L340 150 L376 272z','#f0a0a0')+P('M340 180 V260','none',' stroke="#5a3030" stroke-width="2"')+T(340,248,11,'帐篷',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r43={id:'r43',title:'大树屋',emoji:'🌳',sub:'数学 · 通行证',
 story:['「大树屋」要刷通行证才能完成任务。','先拿卡片和徽章，拼成通行证，再去刷卡机。','刷卡机不是门——刷对了就算成功！'],
 objects:[
  {id:'door',name:'刷卡机',box:[310,160,70,120],views:[
    {text:'一台刷卡机，嘀嘀作响。',use:[{item:'combo_r43',take:['combo_r43'],win:true,text:'嘀——通过！「大树屋」刷卡成功！'}],wrong:'要先做好通行证再刷。'}
  ]},
  {id:'desk',name:'树枝台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'树枝台锁着：',note:'【算一算】长方形花坛长 10 米、宽 6 米。四周铺宽 1 米的小路，小路面积是多少平方米？',lock:{kind:'num',len:2,answer:'36',prompt:'输入密码',ok:{set:['desk_open'],text:'开了，里面有一张卡片。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开树枝台。','算题，注意多步运算。','先算“花坛+小路”的大长方形，再减去花坛本身。']},
  {until:'took_scrap',obj:'desk',tiers:['拿卡片。','点开拿起。','拿起来。']},
  {until:'took_tool',obj:'shelf',tiers:['还要徽章。','看松鼠洞。','拿起徽章。']},
  {until:'made_combo',tiers:['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']},
  {until:'escaped',obj:'door',tiers:['去刷卡机。','选中通行证点刷卡机。','刷卡过关。']}
 ],
 explain:['外围 (10+2)×(6+2) 减去花坛 10×6 = 36','拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'],
 solution:[['code','desk','36'],['take','desk'],['take','shelf'],['combine','scrap_r43','tool_r43'],['use','door','combo_r43']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="thS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#79c8f0"/><stop offset="1" stop-color="#d7f6e4"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#thS)');
  s+=C(40,40,40,'#1f8a3c')+C(110,24,48,'#146b30')+C(190,36,36,'#2f9a48')+C(300,20,50,'#0f5a28')+C(370,48,32,'#1f7a38');
  s+=R(0,250,400,50,'#6aaa4a');
  s+=R(48,70,42,220,'#7a4e2c');
  s+=R(90,150,250,14,'#d7b07a');
  s+=P('M160 164 q60 30 30 90','none',' stroke="#c9a06a" stroke-width="4"');
  s+=g('window',R(150,96,64,40,'#fff3c4',4,' stroke="#7a4e2c" stroke-width="4"')+T(182,150,11,'树窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(230,70,110,32,'#f6e7c4',2,' stroke="#5a3a22" stroke-width="3"')+T(284,86,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(100,156,90,20,'#e2c48a',3)+(f.desk_open?R(120,150,30,10,'#fff6e0',2):'')+T(144,196,11,'树枝台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(210,164,52,32,'#c98b52',3)+(f.box_open?R(216,170,40,18,'#f3ddb8',2):'')+T(236,212,11,'宝箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',C(330,120,22,'#3aaa4a')+C(330,120,8,'#6b4428')+T(330,160,11,'松鼠洞',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(300,128,64,70,'#f0d7a8',4)+P('M300 128 l32-20 32 20','#c0392b')+R(318,146,28,22,'#cfe8ff',2)+T(332,220,11,'树屋门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r44={id:'r44',title:'玻璃温室',emoji:'🪴',sub:'语文 · 成语',
 story:['成语转盘挑战「玻璃温室」！','匣子上的成语少了一个字。','转到正确的字，就算挑战成功——不用找门！'],
 objects:[
  {id:'box',name:'成语匣转盘',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'匣子上有一个汉字转盘。',note:'【成语填空】心 浮 ___ 躁\n（想一想这个成语缺哪个字）',lock:{kind:'dial',opts:[['心','浮','躁','天','了','气']],answer:'气',prompt:'转到正确的字',ok:{set:['box_open'],win:true,text:'转对了！「玻璃温室」成语挑战成功！'},bad:'不对哦，再想想。'}},
    {text:'转盘已经转对啦。'}
  ]},
  {id:'board',name:'浇水牌',box:[130,20,150,90],views:[
    {text:'黑板上写着一个成语，少了一个字：',note:'【成语填空】心 浮 ___ 躁\n（想一想这个成语缺哪个字）'}
  ]},
  {id:'desk',name:'育苗台',box:[30,150,120,50],views:[
    {text:'育苗台上有语文课本，翻开正好是词语表。'}
  ]},
  {id:'door',name:'温室门',box:[310,160,70,120],views:[
    {text:'温室门开着，这关靠转盘通关。'}
  ]},
  {id:'shelf',name:'绿植架',box:[290,40,90,120],views:[
    {text:'绿植架上有《成语词典》。'}
  ]},
  {id:'window',name:'玻璃',box:[24,24,90,70],views:[
    {text:'玻璃上有小水珠，空气暖暖香香的。'}
  ]}
 ],
 combos:[],
 hints:[
  {until:'escaped',obj:'board',tiers:['这是词语表里的四字成语，看空格。','结合前后字想想常见搭配。','心里不踏实、容易着急']}
 ],
 explain:['成语「心浮气躁」','缺的字是「气」。心里不踏实、容易着急','转对转盘，挑战成功。'],
 solution:[['code','box','气']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="ghS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8ffe8"/><stop offset="1" stop-color="#c6efd0"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#ghS)');
  for(var i=0;i<9;i++)s+=P('M'+(i*48)+' 0 V300','none',' stroke="#fff" stroke-width="2" opacity=".35"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*52)+' H400','none',' stroke="#fff" stroke-width="2" opacity=".28"');
  s+=P('M40 300 C80 160 140 120 200 300','#b7e39a',' opacity=".55"')+P('M180 300 C240 140 320 160 360 300','#8fce7a',' opacity=".5"');
  s+=g('window',R(16,20,80,70,'#f4fff8',4,' stroke="#9ad7b2" stroke-width="4"')+T(56,108,11,'玻璃',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,22,150,64,'#f7fff6',4,' stroke="#3d9a62" stroke-width="4"')+T(194,46,13,'浇水时间',' fill="#145c32"')+T(194,68,11,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(20,160,120,40,'#d5ead0',4,' stroke="#7dae8a" stroke-width="2"')+R(30,168,50,18,f.desk_open?'#fff':'#b7d7b0',2)+C(130,172,8,'#3aaa4a')+T(78,216,11,'育苗台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,166,56,36,'#e7b15a',4)+(f.box_open?R(174,172,44,22,'#fff3d0',2):'')+T(196,218,11,'花盆箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(250,40,40,140,'#7dba78',6)+C(270,60,10,'#2f8a40')+C(270,90,12,'#ff8fb8')+C(270,124,9,'#3aaa4a')+T(270,196,11,'绿植',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(308,140,68,130,'#e7fff2',2,' stroke="#3d9a62" stroke-width="4"')+P('M342 140 V270','none',' stroke="#3d9a62" stroke-width="3"')+T(342,250,11,'温室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r45={id:'r45',title:'雨中街道',emoji:'🌧️',sub:'英语 · 听力',
 story:['英语听力站「雨中街道」！（读一读广播文字再答题）','候车椅上的英文卡片写着一道题。','拼对就算挑战成功，不用找钥匙开门。'],
 objects:[
  {id:'desk',name:'候车椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'候车椅小盒上有字母锁，旁边是英文卡片：',note:'【英语题】【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____.\n（线索：听广播比一比，8 个字母，首字母 U；挡雨的伞。）',lock:{kind:'alpha',len:8,answer:'UMBRELLA',prompt:'输入英文大写',ok:{set:['desk_open'],win:true,text:'Correct! 「雨中街道」英语挑战成功！'},bad:'不对哦，再想想英文怎么说。'}},
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
  {until:'escaped',obj:'desk',tiers:['看看英文卡片上的问题，用大写字母拼。','听广播比一比，8 个字母，首字母 U；挡雨的伞。','结合词性、首字母和中文意思方向来猜，不要直接写答案。']}
 ],
 explain:['英文题：【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____.','正确答案是 UMBRELLA。（通关后讲解）','拼对通关。'],
 solution:[['code','desk','UMBRELLA']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="rnS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8aa0b4"/><stop offset="1" stop-color="#c5d0dc"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#rnS)');
  s+=R(0,200,400,100,'#6d7c8a');
  s+=el(80,250,50,10,'#7ea4c0',' opacity=".55"')+el(200,270,36,8,'#9ec4de',' opacity=".4"');
  for(var i=0;i<36;i++)s+=P('M'+((i*29)%410)+' '+((i*17)%200)+' l-8 18','none',' stroke="#e7f2fb" stroke-width="1.6" opacity=".75"');
  s+=R(250,70,6,120,'#4a5968')+C(253,64,12,'#ffe08a')+C(253,64,28,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,24,84,64,'#d5e4f0',4,' stroke="#9aafc0" stroke-width="4"')+T(58,108,11,'橱窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,28,140,48,'#f7f4ea',2,' stroke="#7f8c9d" stroke-width="4"')+T(190,52,13,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(20,176,110,18,'#9aafc0',6)+R(28,194,8,24,'#6d7c8a')+R(110,194,8,24,'#6d7c8a')+(f.desk_open?R(50,170,28,8,'#fff',2):'')+T(74,234,11,'候车椅',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(160,168,40,70,'#d64545',8)+R(168,188,24,8,'#f7f1e4')+T(180,252,11,'邮筒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,50,70,100,'#3e4c5a',3)+T(264,90,14,'📰')+T(264,130,14,'☂️'));
  s+=g('door',R(300,150,70,110,'#f2d16b',3)+P('M292 150 h86 l-8 14 H300z','#e67e22')+T(334,240,11,'小店',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r46={id:'r46',title:'清晨菜场',emoji:'🥬',sub:'数学 · 挑战',
 story:['你来到了清晨菜场。','秤台上锁着一个小抽屉，旁边有道题。','解开密码拿到钥匙，打开菜场口，挑战就成功啦！'],
 objects:[
  {id:'door',name:'菜场口',box:[310,160,70,120],views:[
    {text:'菜场口锁着，需要钥匙。',use:[{item:'key_r46',win:true,text:'钥匙一转，菜场口开了！「清晨菜场」挑战成功！'}],wrong:'要用钥匙才能开门。'}
  ]},
  {id:'desk',name:'秤台',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'秤台上有密码锁，旁边贴着纸条：',note:'【算一算】每本练习本 3.6 元，买 5 本。一共多少元？',lock:{kind:'num',len:2,answer:'18',prompt:'输入密码',ok:{set:['desk_open'],text:'打开了！里面有一把钥匙。'},bad:'密码不对哦，再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先看看秤台上的纸条。','纸条上有一道数学题，算出答案就是密码。','小数乘整数：按整数相乘，再数小数点后有几位。']},
  {until:'took_key',obj:'desk',tiers:['抽屉开了。','点秤台，拿起钥匙。','把钥匙拿起来。']},
  {until:'escaped',obj:'door',tiers:['你有钥匙了！','选中钥匙，再点菜场口。','先点钥匙，再点目标。']}
 ],
 explain:['3.6 × 5 = 18','打开抽屉拿到钥匙。','用钥匙打开菜场口，挑战成功。'],
 solution:[['code','desk','18'],['take','desk'],['use','door','key_r46']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#fffaf2');
  s+=R(0,210,400,90,'#e7d3b0');
  for(var i=0;i<10;i++)s+=R(i*40,0,40,58,i%2?'#e23b3b':'#f5d76e');
  s+=R(0,58,400,8,'#fff6e0');
  s+=C(40,160,16,'#3aaa4a')+C(78,168,14,'#e25b4a')+C(112,156,12,'#f2c14a')+C(150,170,13,'#ff8a3a');
  s+=g('window',R(16,78,80,60,'#fff8e6',3,' stroke="#e23b3b" stroke-width="4"')+T(56,156,11,'摊位',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,78,150,70,'#fff',2,' stroke="#e23b3b" stroke-width="5"')+T(194,100,14,'今日菜价',' fill="#c0392b"')+T(194,122,12,'青菜 3.5',' fill="#5b4636"')+T(194,140,12,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(18,168,120,36,'#f7f1e4',3,' stroke="#c9b89a" stroke-width="2"')+R(28,176,36,16,f.desk_open?'#fff':'#e7d3b0',2)+T(78,220,11,'秤台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(160,172,56,34,'#c98b52',2)+(f.box_open?R(166,178,44,20,'#f3ddb8',2):'')+T(188,222,11,'菜筐',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,80,70,110,'#a86b38',3)+C(248,100,8,'#e25b4a')+C(270,118,8,'#f2c14a')+C(252,140,8,'#3aaa4a')+T(264,176,11,'货摊',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(300,140,66,130,'#1f8a4c')+T(332,250,11,'菜场口',' fill="#f7fff4"'));
  return s;}
};
var r47={id:'r47',title:'雪地木屋',emoji:'❄️',sub:'数学 · 闯关',
 story:['欢迎来到「雪地木屋」挑战站！','雪凳上有一道题，做对就通关。','不一定要出门——答对就是胜利！'],
 objects:[
  {id:'desk',name:'雪凳',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'雪凳上的挑战题：',note:'【算一算】循环小数：计算 2÷11，把循环节按顺序连起来是多少？',lock:{kind:'num',len:2,answer:'18',prompt:'输入答案',ok:{set:['desk_open'],win:true,text:'答对啦！「雪地木屋」挑战成功！'},bad:'再算一算。'}},
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
  {until:'escaped',obj:'desk',tiers:['点开雪凳上的题。','仔细看【算一算】，多步时先算哪一步？','先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。']}
 ],
 explain:['2÷11=0.1818…。循环节连起来是 18。','在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'],
 solution:[['code','desk','18']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="snS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecff"/><stop offset="1" stop-color="#f7fbff"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#snS)');
  s+=R(0,170,400,130,'#f4f8fc');
  s+=P('M0 190 Q40 160 80 190 T160 188 T240 176 T320 190 T400 170 V300 H0z','#fff');
  for(var i=0;i<20;i++)s+=C((i*61)%400,(i*29)%160,i%3?1.3:2.2,'#fff',' opacity=".9"');
  s+=P('M16 170 L36 90 L56 170z','#d7e6dc')+R(32,150,8,40,'#6e8f7a')+P('M48 180 L70 110 L92 180z','#e7f2ea');
  s+=C(250,150,22,'#fff')+C(292,156,18,'#fff')+C(262,142,3,'#3e5670')+C(278,142,3,'#3e5670')+P('M266 156 q8 6 16 0','none',' stroke="#e07a7a" stroke-width="2"');
  s+=g('window',R(100,28,60,48,'#d6ecff',8,' stroke="#fff" stroke-width="4"')+T(130,92,11,'雪窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(170,36,120,36,'#fff',4,' stroke="#b7c9dc" stroke-width="3"')+T(230,54,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',el(70,190,46,12,'#fff')+el(70,186,20,6,f.desk_open?'#fff6e0':'#e4eef8')+T(70,214,11,'雪凳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',P('M160 200 L210 168 L250 200z','#e25b4a')+R(188,198,28,8,'#f7f1e4',2)+T(200,222,11,'雪橇',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,120,8,50,'#8a5a32')+R(318,100,8,70,'#6b4428')+R(336,128,8,42,'#a67c52')+T(324,188,11,'木柴',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(308,130,70,110,'#f7efe4',3)+P('M308 130 l35-28 35 28','#c0392b')+R(330,160,26,22,'#ffe08a',2)+T(342,260,11,'木屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r48={id:'r48',title:'傍晚客厅',emoji:'🌇',sub:'数学 · 助人',
 story:['你走进傍晚客厅，遇见了小花猫。','小黄说：“帮小花猫拿到礼物吧！”','先解开茶几上的题，再把礼物交给小花猫。'],
 objects:[
  {id:'door',name:'小花猫',box:[310,150,70,120],views:[
    {text:'小花猫眨眨眼：“我想要礼物！”',use:[{item:'gift_r48',take:['gift_r48'],win:true,text:'小花猫开心地收下了！「傍晚客厅」任务完成！'}],wrong:'小花猫摇摇头：“我要的是礼物哦。”'}
  ]},
  {id:'desk',name:'茶几',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'茶几抽屉锁着，纸条上有题：',note:'【算一算】小数四则：5 − 0.25 = ?',lock:{kind:'num',len:4,dot:true,answer:'4.75',prompt:'输入密码',ok:{set:['desk_open'],text:'抽屉开了，里面有一份礼物！'},bad:'再算算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先解开茶几的密码。','看纸条上的题，可能要算两步。','小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。']},
  {until:'took_gift',obj:'desk',tiers:['把礼物拿起来。','点茶几拿起。','拿起来。']},
  {until:'escaped',obj:'door',tiers:['把礼物交给小花猫。','选中礼物，再点小花猫。','先点物品，再点对方。']}
 ],
 explain:['5 − 0.25 = 4.75。小数点对齐，位数少的补 0。','拿到礼物。','交给小花猫，任务完成。'],
 solution:[['code','desk','4.75'],['take','desk'],['use','door','gift_r48']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="lvW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0b48a"/><stop offset="1" stop-color="#c98a62"/></linearGradient></defs><defs><radialGradient id="lvL" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#ffe7a3"/><stop offset="1" stop-color="#ffe7a3" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#lvW)');
  s+=R(0,228,400,72,'#c49a78');
  for(var i=0;i<6;i++)s+=P('M0 '+(236+i*10)+'H400','none',' stroke="#e7c89a" stroke-width="1" opacity=".45"');
  s+=C(268,176,78,'url(#lvL)');
  s+=R(248,150,8,78,'#8a5a32')+C(252,142,7,'#fff1c2')+C(252,142,16,'#ffe08a',' opacity=".55"');
  s+=el(200,268,150,22,'#e7b7c4');
  s+=R(78,236,210,28,'#f7d7cc',18,' stroke="#e7b8aa" stroke-width="2"')+R(92,222,150,22,'#ffe8df',14);
  s+=g('window',R(22,28,78,64,'#c98a62',4,' stroke="#f3d5c4" stroke-width="6"')+R(22,28,16,64,'#f8c9d4')+R(84,28,16,64,'#f8c9d4')+T(61,108,11,'窗帘',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(132,36,118,70,'#fffaf3',2,' stroke="#e7c4a4" stroke-width="3"')+el(168,62,16,18,'#f3c2b0')+el(196,62,16,18,'#f3c2b0')+C(168,60,3,'#5b4636')+C(196,60,3,'#5b4636')+T(190,92,11,'全家福',' fill="#8a5a48"'));
  s+=g('desk',el(92,172,58,16,'#e7c7a2')+R(40,164,70,14,f.desk_open?'#fff6e0':'#d7b48a',4)+(f.desk_open?'':C(78,170,3,'#8a5a32'))+T(92,198,11,'茶几',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(196,168,62,40,'#e39b6a',10,' stroke="#c47c48" stroke-width="2"')+(f.box_open?R(204,174,46,26,'#ffe6c8',4):R(210,180,28,14,'#f2c14a',3))+T(226,222,11,'玩具箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,78,78,52,'#1c2430',6)+R(308,86,62,28,'#7eb6d6',2)+R(286,128,100,8,'#cbb89a',2)+T(336,156,12,'🪴'));
  s+=g('door',R(304,150,64,128,'#f0d7b8',4,' stroke="#e0c2a0" stroke-width="3"')+C(352,214,4,'#e7b84a')+T(336,292,11,'房门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r49={id:'r49',title:'夕阳卧室',emoji:'🌇',sub:'数学 · 益智',
 story:['「夕阳卧室」要动手做一件东西！','先解开密码拿到材料，再拼起来。','做好以后放到组装台上，就算完成任务。'],
 objects:[
  {id:'door',name:'组装台',box:[310,160,70,120],views:[
    {text:'组装台等着成品。',use:[{item:'combo_r49',take:['combo_r49'],win:true,text:'放上去——成功！「夕阳卧室」做好啦！'}],wrong:'要把两样材料拼好再放上来。'}
  ]},
  {id:'desk',name:'床头柜',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'床头柜锁着：',note:'【算一算】长方形桌面长 2.5 米、宽 1.2 米。面积是多少平方分米？（1 米 = 10 分米）',lock:{kind:'num',len:3,answer:'300',prompt:'输入密码',ok:{set:['desk_open'],text:'开了！里面有材料 A。'},bad:'再算一算。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先开床头柜。','算纸条上的题。','先把米换成分米，再相乘。']},
  {until:'took_a',obj:'desk',tiers:['拿起材料 A。','点开拿起。','拿起来。']},
  {until:'took_b',obj:'shelf',tiers:['看看衣柜。','拿起材料 B。','点架子拿。']},
  {until:'made_combo',tiers:['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']},
  {until:'escaped',obj:'door',tiers:['把成品放到组装台。','选中成品再点目标。','放上去就过关。']}
 ],
 explain:['先换成 25 分米 × 12 分米 = 300 平方分米','拿到材料 A 和 B。','组合成成品，放到组装台。'],
 solution:[['code','desk','300'],['take','desk'],['take','shelf'],['combine','partA_r49','partB_r49'],['use','door','combo_r49']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="bdW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c46a4a"/><stop offset="1" stop-color="#6a3a58"/></linearGradient></defs><defs><radialGradient id="bdM" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#fff6c8"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></radialGradient></defs>';
  s+=R(0,0,400,300,'url(#bdW)');
  s+=C(86,48,36,'url(#bdM)')+C(96,44,22,'#c46a4a');
  for(var i=0;i<12;i++)s+=C((i*67+20)%380,(i*23+16)%90,i%3?1:1.6,'#fff',' opacity=".8"');
  s+=R(0,214,400,86,'#4a3048');
  s+=R(60,200,230,78,'#efe4ff',16,' stroke="#d5c4ee" stroke-width="2"')+R(78,188,120,24,'#fff',10)+R(210,190,50,20,'#ffd6e8',8);
  s+=g('window',R(200,22,70,58,'#6a3a58',20,' stroke="#cbb6e8" stroke-width="4"')+T(235,96,11,'小窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(124,118,130,36,'#2a2444',8)+T(188,136,12,'梦的清单',' fill="#f7e6ff"'));
  s+=g('desk',R(24,160,78,46,'#d9c4ea',8,' stroke="#b89ad4" stroke-width="2"')+R(32,168,40,20,f.desk_open?'#fff':'#cbb0e0',4)+(f.desk_open?'':C(58,178,3,'#6a4e88'))+T(62,220,11,'床头柜',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',el(230,176,28,16,'#f2b7cc')+(f.box_open?el(230,176,18,10,'#fff0f6'):'')+T(230,204,11,'收纳篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,36,78,150,'#3a3158',6)+R(310,70,58,6,'#6a5a90')+R(310,110,58,6,'#6a5a90')+T(338,92,14,'👕')+T(338,136,12,'📚'));
  s+=g('door',R(300,148,60,130,'#4a3d68',6)+C(346,214,4,'#ffe08a')+T(330,292,11,'卧室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  return s;}
};
var r50={id:'r50',title:'黄昏公园',emoji:'🌆',sub:'数学 · 英语',
 story:['双锁挑战站「黄昏公园」！','先过长椅，再过野餐篮。','两关都对，不用找门——直接挑战成功！'],
 objects:[
  {id:'desk',name:'长椅',box:[30,150,120,50],views:[
    {if:['!desk_open'],text:'第一关（数学）：',note:'【算一算】水果每千克 2.5 元，买 1.2 千克。一共多少元？',lock:{kind:'num',len:1,answer:'3',prompt:'输入密码',ok:{set:['desk_open'],text:'第一关过了！去看第二关吧。'},bad:'再算算。'}},
    {text:'第一关已经打开了。'}
  ]},
  {id:'box',name:'野餐篮',box:[200,160,70,50],views:[
    {if:['!box_open'],text:'野餐篮上还有第二关：',note:'【英语题】【小作文·安全 tip】You\'ll need to close the _____ when a typhoon is landing.\n（线索：作文句型 You\'ll need to…，7 个字母，首字母 W。）',lock:{kind:'alpha',len:7,answer:'WINDOWS',prompt:'输入英文',ok:{set:['box_open'],win:true,text:'两关都过啦！「黄昏公园」挑战成功！'},bad:'再想想。'}},
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
  {until:'desk_open',obj:'desk',tiers:['先过第一关数学题。','仔细看【算一算】，可能不止一步。','小数乘小数：先当整数乘，再看两个因数一共有几位小数。']},
  {until:'escaped',obj:'box',tiers:['去开第二关。','作文句型 You\'ll need to…，7 个字母，首字母 W。','根据词性、首字母和课本单元想想，不要偷看答案哦。']}
 ],
 explain:['2.5 × 1.2 = 3','【小作文·安全 tip】You\'ll need to close the _____ when a typhoon is landing. → WINDOWS','两关都对，挑战成功。'],
 solution:[['code','desk','3'],['code','box','WINDOWS']],
 art:function(f){var s='';
  s+='<defs><linearGradient id="pkS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a060"/><stop offset="1" stop-color="#6a8a4a"/></linearGradient></defs>';
  s+=R(0,0,400,300,'url(#pkS)');
  s+=R(0,168,400,132,'#2f6a32');
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
var EXTRA=[r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/