/*ROOMS-START*/
(function(G){
'use strict';
function R(x,y,w,h,f,rx,ex){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"'+(rx?' rx="'+rx+'"':'')+(ex||'')+'/>';}
function T(x,y,s,ch,ex){return '<text x="'+x+'" y="'+y+'" font-size="'+s+'" text-anchor="middle" dominant-baseline="central"'+(ex||'')+'>'+ch+'</text>';}
function P(d,f,ex){return '<path d="'+d+'" fill="'+f+'"'+(ex||'')+'/>';}
function C(x,y,r,f,ex){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(ex||'')+'/>';}
var SK=' stroke="#5b4636" stroke-width="2.5" stroke-linejoin="round"';
function g(id,inner){return '<g class="obj" data-obj="'+id+'">'+inner+'</g>';}
var ITEMS={
  torch:{name:'手电筒',icon:'🔦',desc:'一个手电筒，可是没有电池，按了不亮。'},
  battery:{name:'电池',icon:'🔋',desc:'两节电池，可以给东西供电。'},
  torch_on:{name:'亮着的手电筒',icon:'🔦',glow:1,desc:'装好电池的手电筒，能照亮黑乎乎的地方。'},
  doorkey:{name:'门钥匙',icon:'🗝️',desc:'书房门的钥匙。'},
  brush:{name:'毛笔',icon:'🖌️',desc:'一支干干的毛笔，要蘸墨才能用。'},
  ink:{name:'墨汁',icon:'🫙',desc:'一瓶黑黑的墨汁。'},
  brush_ink:{name:'蘸了墨的毛笔',icon:'🖌️',glow:1,desc:'蘸饱了墨，可以画画写字啦。'},
  egg:{name:'鸡蛋',icon:'🥚',desc:'新鲜的鸡蛋，做蛋糕要用。'},
  milk:{name:'牛奶',icon:'🥛',desc:'一盒牛奶，英文叫 milk。'},
  flour:{name:'面粉',icon:'🌾',desc:'一袋面粉，做蛋糕的主要材料。'},
  batter:{name:'蛋糕糊',icon:'🥣',desc:'搅好的蛋糕糊，放进烤箱烤一烤就是蛋糕。'},
  cake:{name:'蛋糕',icon:'🎂',desc:'香喷喷的蛋糕！机器人小厨一定很喜欢。'},
  lens:{name:'望远镜镜片',icon:'🔍',desc:'一块圆圆的玻璃镜片，好像是望远镜上的。'},
  key:{name:'铜钥匙',icon:'🔑',desc:'一把铜钥匙。'},
  shovel:{name:'小铲子',icon:'🪏',desc:'一把小铲子，可以挖土。'},
  can:{name:'空水壶',icon:'🫖',desc:'一个空空的浇花水壶。'},
  can_full:{name:'装满水的水壶',icon:'🫖',glow:1,desc:'装满了水，可以浇花了。'},
  seed:{name:'魔法种子',icon:'🌰',desc:'一颗亮晶晶的种子。'},
  goldkey:{name:'金钥匙',icon:'🔑',glow:1,desc:'一把闪闪发光的金钥匙。'}
};
/* ---------------- 第 1 间：外婆家的书房 ---------------- */
var r1={id:'r1',title:'外婆家的书房',emoji:'📚',sub:'面积 · 英语 · 组合物品',
 story:['周末，你在外婆家玩捉迷藏，躲进了书房。','“咔哒”一声，门被风吹上，还自动锁住了！','外婆在门外笑着说：“钥匙就藏在蓝色小盒子里，盒子上有英语单词题哦。动动脑筋，自己打开门吧！”'],
 objects:[
  {id:'door',name:'书房门',box:[300,52,78,160],views:[{text:'门锁得紧紧的，要用钥匙才能打开。',use:[{item:'doorkey',win:true,text:'钥匙一转，“咔哒”——门开了！外婆笑眯眯地说：“真聪明！”'}]}]},
  {id:'desk',name:'书桌',box:[20,128,120,84],views:[
    {if:['!drawer_open'],text:'书桌的抽屉上挂着一把三位数的密码锁。桌上压着外婆写的纸条：',note:'抽屉密码：\n外婆的菜园是一个长方形，长 12.5 米，宽 8 米。\n菜园的面积是多少平方米？',
     lock:{kind:'num',len:3,answer:'100',prompt:'输入三位数密码',ok:{set:['drawer_open'],text:'咔哒！抽屉打开了，里面有一个手电筒。'},bad:'密码不对哦。想一想：长方形的面积 = 长 × 宽。'}},
    {if:['drawer_open','!took_torch'],text:'抽屉里躺着一个手电筒。',take:{give:['torch'],set:['took_torch'],text:'你拿起了手电筒。按一按开关——不亮，里面没有电池。'}},
    {text:'抽屉已经空了。'}]},
  {id:'rug',name:'地毯',box:[120,228,170,62],views:[
    {if:['!took_battery'],text:'地毯的一角翘了起来，下面好像压着什么东西。',take:{give:['battery'],set:['took_battery'],text:'你在地毯下面找到了两节电池！'}},
    {text:'地毯下面什么也没有了。'}]},
  {id:'shelf',name:'书架',box:[150,30,120,184],views:[
    {if:['!shelf_lit'],text:'书架上摆满了书。最下面一层黑乎乎的，什么也看不清。要是有光就好了。',use:[{item:'torch_on',set:['shelf_lit'],text:'手电筒一照，书架最下层藏着一个蓝色的小盒子！'}],wrong:'书架下面太黑了，这个东西帮不上忙。'},
    {if:['shelf_lit','!box_open'],text:'蓝色小盒子上有一把字母密码锁，一共 5 格。盒子上贴着 Unit 1 单词卡：',note:'_____ = 担心\n（教科版五年级上册 Unit 1 单词，用英文大写填写）',
     lock:{kind:'alpha',len:5,answer:'WORRY',prompt:'输入 5 个英文字母',ok:{set:['box_open'],give:['doorkey'],text:'W-O-R-R-Y！盒子打开了，里面是一把亮闪闪的门钥匙！'},bad:'不对哦。Unit 1 里“担心”的英文怎么拼？'}},
    {text:'蓝色小盒子已经空了。书架上有一本《十万个为什么》。'}]},
  {id:'lamp',name:'台灯',box:[88,78,46,52],views:[{text:'一盏小台灯，灯泡坏了，按开关也不亮。'}]},
  {id:'window',name:'窗户',box:[34,24,92,78],views:[{text:'窗外是外婆的菜园，绿油油的，正好是一个长方形。'}]}
 ],
 combos:[{a:'torch',b:'battery',give:['torch_on'],set:['made_torch'],text:'把电池装进手电筒——亮了！'}],
 hints:[
  {until:'drawer_open',obj:'desk',tiers:['先看看书桌：抽屉上有一把密码锁，纸条上有一道题。','长方形的面积 = 长 × 宽，算一算 12.5 × 8。','12.5 × 8 = 100，密码是 100。']},
  {until:'took_torch',obj:'desk',tiers:['抽屉打开啦，里面有东西。','点书桌，再点「拿起」。','把手电筒拿起来就好。']},
  {until:'took_battery',obj:'rug',tiers:['手电筒没有电。房间里哪里藏着电池呢？','地上的地毯，有一角翘起来了。','点地毯，把电池拿起来。']},
  {until:'made_torch',tiers:['手电筒和电池，能不能放在一起？','在下面的物品栏里，先点手电筒，再点电池，就能组合。','先点 🔦，再点 🔋。']},
  {until:'shelf_lit',obj:'shelf',tiers:['房间里哪里黑乎乎的看不清？','书架最下面一层很黑。','先在物品栏点亮着的手电筒，再点书架。']},
  {until:'box_open',obj:'shelf',tiers:['盒子上的单词卡：_____ = 担心。','Unit 1，5 个字母，首字母 W；意思是心里不安、怕出事。','想想发音：wor-ry，中间辅音双写。']},
  {until:'escaped',obj:'door',tiers:['你已经拿到门钥匙了！','选中门钥匙，再点门。','先点物品栏里的 🗝️，再点右边的门。']}
 ],
 explain:['长方形面积 = 长 × 宽：12.5 × 8 = 100（平方米），所以抽屉密码是 100。','手电筒没有电，要先在地毯下找到电池，把两样东西组合起来。','用亮着的手电筒照黑乎乎的书架，发现蓝色小盒子。','Unit 1：worry = 担心，蓝色小盒子打开，拿到门钥匙。'],
 solution:[['code','desk','100'],['take','desk'],['take','rug'],['combine','torch','battery'],['use','shelf','torch_on'],['code','shelf','WORRY'],['use','door','doorkey']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#ffe9c7')+R(0,214,400,86,'#e7b98a')+P('M0 214H400','none',' stroke="#c9945f" stroke-width="3"');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="10" opacity=".5"');
  s+=g('window',R(36,26,88,72,'#bfe8ff',8,SK)+P('M80 26v72M36 62h88','none',SK)+R(44,70,28,22,'#7ccf6c',3)+R(86,74,30,18,'#7ccf6c',3)+C(108,44,9,'#fff2a8'));
  s+=g('shelf',R(152,32,116,180,'#b9793f',6,SK)+[60,100,140].map(function(y){return R(158,y,104,8,'#8a5428',2);}).join('')+
    R(162,40,10,24,'#ff8a8a')+R(174,38,10,26,'#7fb2ff')+R(186,42,8,22,'#ffd166')+R(196,40,12,24,'#8ee0b5')+R(222,44,30,18,'#ff9fc6',3)+
    R(162,80,14,24,'#a68bff')+R(178,82,10,22,'#ffb36b')+R(190,78,12,26,'#7fd3ff')+R(226,84,10,20,'#ff8a8a')+R(238,80,12,24,'#ffd166')+
    R(162,118,40,26,'#f6e0c4',3)+T(182,131,16,'📖')+R(210,118,12,26,'#7fb2ff')+R(224,120,10,24,'#8ee0b5')+
    R(158,150,104,56,f.shelf_lit?'#fff3c4':'#3b2a22',4)+(f.shelf_lit?(f.box_open?R(192,170,36,28,'#5b8cff',4,SK)+P('M192 170l18-12 18 12','#7fa6ff',SK):R(192,170,36,28,'#4d7dff',4,SK)+R(204,180,12,10,'#ffd34d',2)):T(210,178,12,'· · ·',' fill="#7a6250"')));
  s+=g('desk',R(22,140,116,14,'#a86b38',4,SK)+R(30,154,14,58,'#8a5428')+R(116,154,14,58,'#8a5428')+R(50,156,60,26,f.drawer_open?'#d9a26c':'#c48a52',4,SK)+
    (f.drawer_open?R(54,160,52,8,'#5b3a1f',2):C(80,169,4,'#5b4636'))+(f.drawer_open?'':R(72,172,16,14,'#ffcf4d',3,' stroke="#a07a10" stroke-width="2"'))+R(46,128,34,14,'#fffaf0',2,' transform="rotate(-6 63 135)"'));
  s+=g('lamp',P('M98 128h28l-6-8h-16z','#7a5a3a')+R(109,96,6,26,'#7a5a3a')+P('M92 100l10-22h20l10 22z','#ff9fc6',SK));
  s+=g('rug',P('M128 262c0-20 154-20 154 0s-154 20-154 0z','#ff9fc6',SK)+P('M150 262c0-10 110-10 110 0s-110 10-110 0z','#ffd0e3')+(f.took_battery?'':P('M262 252l18-6 4 12z','#ffb3d0',SK)));
  s+=g('door',R(302,54,74,158,'#c98b52',6,SK)+R(312,66,54,60,'#d9a26c',4)+R(312,136,54,64,'#d9a26c',4)+C(364,140,5,'#ffcf4d',SK)+R(360,146,8,10,'#5b4636',2));
  s+=T(350,236,22,'🧸');
  return s;}
};
/* ---------------- 第 2 间：美术教室 ---------------- */
var r2={id:'r2',title:'美术教室',emoji:'🎨',sub:'古诗 · 成语 · 字谜',
 story:['放学后，你回美术教室拿忘带的画本。','可是值日生不知道你在里面，把门锁上了！门上有一把会转的“汉字锁”。','美术老师最喜欢出谜题，线索一定就藏在教室里。'],
 objects:[
  {id:'door',name:'教室门',box:[326,62,66,150],views:[
    {if:['!riddle_seen'],text:'门上有一把汉字转盘锁，只有一个格子。要转到哪个字呢？先在教室里找找线索吧。',lock:{kind:'dial',opts:[['牛','吃','告','咬','舌','午']],answer:'告',prompt:'转到正确的字',ok:{win:true,text:'“告”！锁“咔哒”一声开了，你走出了美术教室！'},bad:'不对哦，先去找找线索吧。'}},
    {text:'门上的汉字转盘锁。你还记得画框后面的字谜：',note:'一口咬掉牛尾巴（打一个字）',lock:{kind:'dial',opts:[['牛','吃','告','咬','舌','午']],answer:'告',prompt:'转到正确的字',ok:{win:true,text:'“告”！锁“咔哒”一声开了，你走出了美术教室！'},bad:'不对哦。把“牛”字的尾巴去掉，再加一个“口”……'}}]},
  {id:'desk',name:'讲台',box:[30,150,140,62],views:[
    {if:['!took_brush'],text:'讲台上放着一支毛笔，笔尖干干的。',take:{give:['brush'],set:['took_brush'],text:'你拿起了毛笔。笔尖是干的，要蘸点墨才能用。'}},
    {text:'讲台上整整齐齐的，什么也没有了。'}]},
  {id:'board',name:'黑板',box:[16,18,182,104],views:[{text:'黑板上写着一首诗，有两个字被擦掉了：',note:'《山居秋暝》（节选）　唐·王维\n空山新雨后，天气晚来秋。\n明月 ___ 间照，清泉 ___ 上流。\n\n柜子密码：把擦掉的两个字按顺序转出来。'}]},
  {id:'cabinet',name:'柜子',box:[226,118,86,96],views:[
    {if:['!cab_open'],text:'柜门上有一把汉字转盘锁，一共两格。',lock:{kind:'dial',opts:[['花','竹','松','柳'],['山','沙','水','石']],answer:'松石',prompt:'把两个字转对',ok:{set:['cab_open'],text:'咔哒！柜门开了，里面有一瓶墨汁。'},bad:'不对哦，再读一读黑板上的诗。'}},
    {if:['cab_open','!took_ink'],text:'柜子里有一瓶墨汁。',take:{give:['ink'],set:['took_ink'],text:'你拿到了一瓶墨汁。'}},
    {text:'柜子里只剩下几盒彩笔。'}]},
  {id:'dragon',name:'龙的画',box:[208,20,108,82],views:[
    {if:['!dragon_done'],text:'墙上挂着一幅龙的画，威风极了，可是龙没有眼睛！画框下面写着：“这条龙还差最重要的一笔。”',use:[{item:'brush_ink',set:['dragon_done','riddle_seen'],text:'你用蘸了墨的毛笔给龙点上眼睛——画龙点睛！画框“吱呀”一声转开，后面贴着一张纸条：“出门暗号：一口咬掉牛尾巴（打一个字）”。'}],wrong:'龙好像还缺点什么，这个东西帮不上忙。'},
    {text:'龙有了眼睛，好像要飞起来一样！画框后面的纸条上写着：',note:'出门暗号：一口咬掉牛尾巴（打一个字）'}]},
  {id:'palette',name:'颜料盘',box:[178,224,92,50],views:[{text:'颜料盘里有红、黄、蓝三种颜色。红色和黄色混在一起，就变成了橙色。'}]}
 ],
 combos:[{a:'brush',b:'ink',give:['brush_ink'],set:['made_brush'],text:'毛笔蘸饱了墨汁，可以画画写字了！'}],
 hints:[
  {until:'cab_open',obj:'board',tiers:['黑板上的诗少了两个字，柜子的锁也正好有两个格子。','这是王维的名句：“明月□间照，清泉□上流。”月光照在什么树中间？清泉从什么上面流过？','“明月松间照，清泉石上流。”把柜子锁转成「松」「石」。']},
  {until:'took_ink',obj:'cabinet',tiers:['柜子打开了，里面有东西。','点柜子，把墨汁拿起来。','拿起墨汁就好。']},
  {until:'took_brush',obj:'desk',tiers:['墨汁要配什么一起用呢？','讲台上有一支毛笔。','点讲台，拿起毛笔。']},
  {until:'made_brush',tiers:['干毛笔和墨汁，可以组合起来。','在物品栏里先点毛笔，再点墨汁。','先点 🖌️，再点 🫙。']},
  {until:'dragon_done',obj:'dragon',tiers:['墙上的龙少了什么？有一个成语叫“画龙点睛”。','用蘸了墨的毛笔给龙点上眼睛。','选中蘸了墨的毛笔，再点龙的画。']},
  {until:'escaped',obj:'door',tiers:['字谜：“一口咬掉牛尾巴”。把“牛”字下面的尾巴去掉，再加上一个“口”。','“牛”去掉尾巴，下面加个“口”，是“告诉”的哪个字？','是「告」字。到门上把转盘转到“告”。']}
 ],
 explain:['王维《山居秋暝》：“明月松间照，清泉石上流。”月光照在松树中间，清泉在石头上流淌，所以柜子密码是“松石”。','干毛笔 + 墨汁 = 蘸了墨的毛笔。','画龙点睛：传说画家给画上的龙点上眼睛，龙就飞走了。后来比喻在关键的地方加上一笔，让整体更生动。','字谜“一口咬掉牛尾巴”：“牛”字去掉下面的尾巴，再加上“口”，就是“告”。'],
 solution:[['code','cabinet','松石'],['take','cabinet'],['take','desk'],['combine','brush','ink'],['use','dragon','brush_ink'],['code','door','告']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#e3f4ff')+R(0,214,400,86,'#cfe0c3')+P('M0 214H400','none',' stroke="#a9c29a" stroke-width="3"');
  s+=g('board',R(18,20,178,100,'#2f6b4f',6,' stroke="#a86b38" stroke-width="6"')+T(107,44,11,'明月 □ 间照',' fill="#fff"')+T(107,64,11,'清泉 □ 上流',' fill="#fff"')+T(107,90,10,'空山新雨后',' fill="#d7f5e6" opacity=".7"')+R(30,112,22,6,'#fff',2));
  s+=g('dragon',R(210,22,104,78,'#fff5dc',4,' stroke="#c98b52" stroke-width="6"')+P('M224 78c14-30 30 6 44-20s24-14 30-2','none',' stroke="#2fa36b" stroke-width="7" stroke-linecap="round"')+C(296,58,9,'#2fa36b')+
    (f.dragon_done?C(299,55,2.6,'#111'):C(299,55,2.6,'#fff',' stroke="#2fa36b"'))+P('M286 50l-4-8M292 48l2-9','none',' stroke="#e05a5a" stroke-width="2"')+(f.dragon_done?T(258,34,10,'✨'):''));
  s+=g('cabinet',R(228,120,82,94,'#ffcf8a',6,SK)+P('M269 120v94','none',SK)+(f.cab_open?R(232,124,34,86,'#fff1d6',3)+(f.took_ink?'':T(249,190,18,'🫙')):'')+R(258,156,22,18,'#fff',3,SK)+T(269,165,10,'汉',' fill="#5b4636"'));
  s+=g('desk',R(32,152,136,16,'#c98b52',4,SK)+R(42,168,116,44,'#b9793f',4,SK)+(f.took_brush?'':P('M60 148l46-8','none',' stroke="#7a4a20" stroke-width="5" stroke-linecap="round"')+P('M106 140l10-2','none',' stroke="#eee" stroke-width="6" stroke-linecap="round"')));
  s+=g('palette',P('M184 252c0-22 80-26 84-2s-14 22-30 18-24 6-40 2-14-6-14-18z','#f6e0c4',SK)+C(204,246,7,'#ff5b5b')+C(224,240,7,'#ffd23f')+C(244,246,7,'#4d8bff')+C(226,258,6,'#ff9a3c'));
  s+=g('door',R(328,64,62,148,'#8fb6e8',6,SK)+R(338,76,42,44,'#cfe6ff',4)+R(350,140,22,20,'#fff',4,SK)+T(361,150,11,'？',' fill="#5b4636"'));
  s+=T(90,248,22,'🖍️')+T(320,248,22,'🎨');
  return s;}
};
/* ---------------- 第 3 间：机器人小厨的厨房 ---------------- */
var r3={id:'r3',title:'机器人厨房',emoji:'🤖',sub:'英语 · 小数 · 方程',
 story:['你走进了机器人小厨的厨房。','小厨“嘀嘀”两声，把门锁上了：“Hello! I want a cake! 给我做一个蛋糕，我就开门！”','可是做蛋糕的材料都被锁起来了……'],
 objects:[
  {id:'robot',name:'机器人小厨',box:[288,104,84,110],views:[
    {text:'机器人小厨眨着眼睛：“I want a cake! 我想要一个蛋糕！”',use:[{item:'cake',take:['cake'],win:true,text:'小厨开心地转圈：“Thank you! Yummy! 谢谢你，真好吃！”门“嘀”的一声打开了。'}],wrong:'小厨摇摇头：“No, no! I want a cake!”'}]},
  {id:'fridge',name:'冰箱',box:[18,36,76,178],views:[
    {if:['!fridge_open'],text:'冰箱门上有一把三位数的密码锁，旁边贴着一张英文菜谱：',note:'Cooking Club Cake Recipe\n（小厨的烹饪社团菜谱）\n· three eggs\n· two cups of milk\n· five spoons of sugar\n\n冰箱密码：按 eggs、milk、sugar 的顺序，把三个数量连起来。',
     lock:{kind:'num',len:3,answer:'325',prompt:'输入三位数密码',ok:{set:['fridge_open'],text:'冰箱“嘀”地开了！里面有鸡蛋和牛奶。'},bad:'不对哦。three、two、five 分别是几？按顺序连起来。'}},
    {if:['fridge_open','!took_fridge'],text:'冰箱里有鸡蛋和牛奶。',take:{give:['egg','milk'],set:['took_fridge'],text:'你拿到了鸡蛋和牛奶。'}},
    {text:'冰箱里只剩一瓶橙汁了。'}]},
  {id:'cupboard',name:'橱柜',box:[106,26,128,64],views:[
    {if:['!cup_open'],text:'橱柜上有一把密码锁，可以输入小数点。锁旁边贴着一张购物小票：',note:'购物小票\n面粉　2 袋　每袋 4.5 元\n黄油　1 块　6.8 元\n一共多少元？\n（橱柜密码就是总价）',
     lock:{kind:'num',len:4,dot:true,answer:'15.8',prompt:'输入总价（可以用小数点）',ok:{set:['cup_open'],text:'橱柜打开了，里面有一袋面粉。'},bad:'不对哦。先算 2 袋面粉多少钱，再加上黄油的钱。'}},
    {if:['cup_open','!took_flour'],text:'橱柜里有一袋面粉。',take:{give:['flour'],set:['took_flour'],text:'你拿到了面粉。'}},
    {text:'橱柜里只有几个盘子。'}]},
  {id:'bowl',name:'大碗',box:[180,104,72,40],views:[
    {if:['bowl_egg','bowl_milk','bowl_flour','!took_batter'],text:'鸡蛋、牛奶、面粉都放进去了，搅一搅——蛋糕糊做好啦！',take:{give:['batter'],set:['took_batter'],text:'你拿起了一碗蛋糕糊。'}},
    {if:['!took_batter'],text:'一个大碗。做蛋糕糊要放三样东西：鸡蛋、牛奶和面粉。',use:[{item:'egg',take:['egg'],set:['bowl_egg'],text:'鸡蛋放进碗里了。'},{item:'milk',take:['milk'],set:['bowl_milk'],text:'牛奶倒进碗里了。'},{item:'flour',take:['flour'],set:['bowl_flour'],text:'面粉倒进碗里了。'}],wrong:'这个不是做蛋糕糊的材料哦。'},
    {text:'碗已经空了。'}]},
  {id:'oven',name:'烤箱',box:[106,136,72,78],views:[
    {if:['!oven_set'],text:'烤箱的温度还没有设好。烤箱上贴着一张纸条：',note:'烤蛋糕的温度是 x 摄氏度。\n2x − 60 = 300\n解出 x，就是要设的温度。',
     lock:{kind:'num',len:3,answer:'180',prompt:'输入温度',ok:{set:['oven_set'],text:'温度设好了：180℃。烤箱“嗡嗡”地热起来了。'},bad:'不对哦。先把 60 移到右边：2x = 300 + 60，再算 x。'},wrong:'先把烤箱的温度设好吧。'},
    {if:['oven_set','!baked'],text:'烤箱已经热好了，把蛋糕糊放进去吧。',use:[{item:'batter',take:['batter'],give:['cake'],set:['baked'],text:'叮！香喷喷的蛋糕烤好了！'}],wrong:'烤箱里只能放蛋糕糊。'},
    {text:'烤箱里暖暖的，蛋糕已经拿出来了。'}]},
  {id:'clock',name:'挂钟',box:[246,14,44,44],views:[{text:'挂钟显示 3:30。小厨说：“Teatime! 下午茶时间到了！”'}]},
  {id:'door',name:'厨房门',box:[312,24,72,72],views:[{text:'门被小厨锁住了。小厨说：“Cake, please! 先给我做蛋糕！”'}]}
 ],
 combos:[],
 hints:[
  {until:'fridge_open',obj:'fridge',tiers:['看看冰箱上的英文菜谱，密码就藏在数量词里。','three、two、five 分别对应哪个数字？按 eggs→milk→sugar 的顺序。','把三个数字按顺序连成三位数（先别偷看答案）。']},
  {until:'took_fridge',obj:'fridge',tiers:['冰箱开了，里面有做蛋糕的材料。','点冰箱，把东西拿起来。','拿起鸡蛋和牛奶。']},
  {until:'cup_open',obj:'cupboard',tiers:['上面的橱柜也有一把锁，旁边有一张购物小票。','2 袋面粉：4.5 × 2 = 9（元），再加上黄油 6.8 元。','9 + 6.8 = 15.8，输入 15.8。']},
  {until:'took_flour',obj:'cupboard',tiers:['橱柜里有面粉。','点橱柜，拿起面粉。','拿起面粉就好。']},
  {until:'took_batter',obj:'bowl',tiers:['做蛋糕糊要把材料放进大碗里。','选中鸡蛋点大碗，再选牛奶点大碗，再选面粉点大碗。三样都放好，再点大碗拿起蛋糕糊。','一样一样放：🥚 → 碗，🥛 → 碗，🌾 → 碗，然后点碗拿起蛋糕糊。']},
  {until:'oven_set',obj:'oven',tiers:['烤箱的温度要先设好，纸条上有一个方程。','2x − 60 = 300，两边同时加 60：2x = 360。','x = 360 ÷ 2 = 180，输入 180。']},
  {until:'baked',obj:'oven',tiers:['烤箱热好了。','选中蛋糕糊，再点烤箱。','把 🥣 放进烤箱。']},
  {until:'escaped',obj:'robot',tiers:['小厨想要什么？','把蛋糕送给小厨。','选中 🎂，再点机器人小厨。']}
 ],
 explain:['英文菜谱：three eggs（3 个鸡蛋）、two cups of milk（2 杯牛奶）、five spoons of sugar（5 勺糖），密码是 325。','小数乘加：4.5 × 2 = 9（元），9 + 6.8 = 15.8（元）。','解方程：2x − 60 = 300 → 2x = 360 → x = 180，烤箱设成 180℃。','把鸡蛋、牛奶、面粉放进大碗做成蛋糕糊，放进烤箱烤成蛋糕，送给小厨。'],
 solution:[['code','fridge','325'],['take','fridge'],['code','cupboard','15.8'],['take','cupboard'],['use','bowl','egg'],['use','bowl','milk'],['use','bowl','flour'],['take','bowl'],['code','oven','180'],['use','oven','batter'],['use','robot','cake']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#fff4e0')+R(0,214,400,86,'#cfe8f0');for(var i=0;i<8;i++)for(var j=0;j<2;j++)s+=R(i*50+(j%2)*25,214+j*43,25,43,'#b6dbe6',0,' opacity=".6"');
  s+=R(176,140,124,74,'#f2c9a0',4,SK)+R(176,134,124,10,'#e0b080',3,SK);
  s+=g('door',R(314,26,68,70,'#ffd6a5',4,SK)+R(324,34,48,30,'#fff',3)+T(348,80,10,'EXIT',' fill="#5b4636" font-weight="700"'));
  s+=g('fridge',R(20,38,72,174,'#e8f4ff',8,SK)+P('M20 104h72','none',SK)+R(80,58,5,30,'#9fb3c8',2)+R(80,116,5,40,'#9fb3c8',2)+R(30,118,40,46,'#fffbe8',2,' transform="rotate(-4 50 140)"')+T(50,128,7,'Recipe',' fill="#c0392b"')+T(50,142,6,'3 · 2 · 5 ?',' fill="#888" opacity="0"')+
    (f.fridge_open?'':R(42,70,26,18,'#ffcf4d',3,' stroke="#a07a10" stroke-width="2"')));
  s+=g('cupboard',R(108,28,124,60,'#ffb58a',6,SK)+P('M170 28v60','none',SK)+C(162,62,3,'#5b4636')+C(178,62,3,'#5b4636')+(f.cup_open?R(112,32,54,52,'#fff1d6',3)+(f.took_flour?'':T(139,58,22,'🌾')):'')+R(186,40,32,22,'#fffbe8',2)+T(202,51,7,'小票',' fill="#5b4636"'));
  s+=g('oven',R(108,138,68,74,'#5d6d7e',6,SK)+R(116,156,52,40,'#2c3e50',4)+(f.oven_set?R(118,158,48,36,'#ff9a3c',3,' opacity=".75"'):'')+C(124,146,3.5,'#ffcf4d')+C(136,146,3.5,'#ffcf4d')+R(146,142,24,8,'#111',2)+T(158,146,6,f.oven_set?'180℃':'---',' fill="#7CFC00"'));
  s+=g('bowl',P('M184 116h64c0 22-14 28-32 28s-32-6-32-28z','#ffffff',SK)+(f.bowl_egg||f.bowl_milk||f.bowl_flour?P('M190 120h52c-2 8-10 12-26 12s-24-4-26-12z','#ffe7a8'):'')+P('M232 100l14 22','none',' stroke="#c98b52" stroke-width="4" stroke-linecap="round"'));
  s+=g('clock',C(268,36,20,'#fff',SK)+P('M268 36v-12M268 36l0 12','none',' stroke="#5b4636" stroke-width="2.5"')+C(268,36,2,'#5b4636'));
  s+=g('robot',R(304,108,52,44,'#c8d6e5',12,SK)+C(320,128,7,'#fff',SK)+C(340,128,7,'#fff',SK)+C(320,128,3,'#2c3e50')+C(340,128,3,'#2c3e50')+P('M322 142q8 6 16 0','none',' stroke="#5b4636" stroke-width="2.5"')+P('M330 108v-10','none',SK)+C(330,95,5,'#ff6b6b',SK)+
    R(298,154,64,50,'#dfe6ee',10,SK)+R(316,164,28,20,'#fff',4)+T(330,174,12,'🍰')+R(310,204,12,10,'#8395a7',3)+R(338,204,12,10,'#8395a7',3)+R(296,90,68,18,'#fff',8,SK)+T(330,99,8,'小厨',' fill="#5b4636" font-weight="700"'));
  s+=T(220,180,20,'🍓')+T(260,184,20,'🧁');
  return s;}
};
/* ---------------- 第 4 间：星星天文台 ---------------- */
var r4={id:'r4',title:'星星天文台',emoji:'🔭',sub:'数字成语 · 英语 · 梯形面积',
 story:['晚上，你跟着天文社参观天文台，一不小心走进了观星室。','身后的门“砰”地关上了！这扇门是梯形的，上面有一把密码锁，还有一个钥匙孔。','今晚的星星特别亮，好像在给你指路……'],
 objects:[
  {id:'door',name:'梯形门',box:[8,52,72,162],views:[
    {if:['!door_code'],text:'这扇门是梯形的，门上刻着一道题：',note:'这扇门是一个梯形：\n上底 6 分米，下底 10 分米，高 5 分米。\n门的面积是多少平方分米？\n（答案就是门锁的密码）',
     lock:{kind:'num',len:2,answer:'40',prompt:'输入两位数密码',ok:{set:['door_code'],text:'密码正确！门上还有一个钥匙孔，还要一把钥匙。'},bad:'不对哦。梯形面积 =（上底 + 下底）× 高 ÷ 2。'},wrong:'先把门上的密码锁打开吧。'},
    {text:'密码锁已经开了，还差一把钥匙。',use:[{item:'key',win:true,text:'铜钥匙一转，梯形门打开了！星星好像在为你鼓掌。'}],wrong:'这个打不开门锁，要用钥匙。'}]},
  {id:'desk',name:'书桌上的卷轴',box:[140,148,128,66],views:[{text:'书桌上摊着一张卷轴，上面写着：',note:'四个成语，每个都少了一个数字。\n按顺序把数字连起来，就是保险箱的密码。\n\n___ 颜六色　　七上 ___ 下\n___ 牛一毛　　三心 ___ 意'}]},
  {id:'safe',name:'保险箱',box:[282,160,76,56],views:[
    {if:['!safe_open'],text:'一个小保险箱，要输入四位数密码。',lock:{kind:'num',len:4,answer:'5892',prompt:'输入四位数密码',ok:{set:['safe_open'],text:'保险箱打开了，里面有一块圆圆的镜片。'},bad:'不对哦。再看看书桌上的卷轴，四个成语各少了哪个数字？'}},
    {if:['safe_open','!took_lens'],text:'保险箱里有一块圆圆的镜片。',take:{give:['lens'],set:['took_lens'],text:'你拿到了望远镜镜片。'}},
    {text:'保险箱已经空了。'}]},
  {id:'telescope',name:'望远镜',box:[84,92,74,122],views:[
    {if:['!lens_in'],text:'一架大望远镜，可是前面少了一块镜片，什么也看不见。',use:[{item:'lens',take:['lens'],set:['lens_in'],text:'装上镜片，你从望远镜里看到：月亮上有一行发光的英文——The key is in the green box.'}],wrong:'望远镜少的是一块镜片。'},
    {text:'望远镜里，月亮上有一行发光的英文：',note:'The key is in the green box.'}]},
  {id:'boxes',name:'彩色盒子',box:[272,62,120,74],views:[
    {if:['!box_got'],text:'架子上有四个彩色的盒子。它们都连着机关：打开错的那个，所有盒子会一起合上。要打开哪一个呢？',lock:{kind:'choice',prompt:'选一个盒子打开',opts:[{v:'red',c:'#ff6b6b'},{v:'green',c:'#3cc47c'},{v:'blue',c:'#4d8bff'},{v:'yellow',c:'#ffd23f'}],answer:'green',ok:{set:['box_got'],give:['key'],text:'绿色盒子打开了，里面有一把铜钥匙！'},bad:'盒子里只有一张纸条：“Not me!（不是我！）”盒子又合上了。'}},
    {text:'绿色盒子已经空了。'}]},
  {id:'window',name:'圆窗',box:[150,12,110,96],views:[{text:'窗外有好多星星。北斗七星像一把大勺子挂在天上。'}]},
  {id:'globe',name:'地球仪',box:[238,108,40,40],views:[{text:'地球仪转呀转。我们的地球是一个大大的球体。'}]}
 ],
 combos:[],
 hints:[
  {until:'safe_open',obj:'desk',tiers:['书桌上的卷轴写着四个成语，每个少一个数字。','五颜六色、七上八下、九牛一毛、三心二意。','按顺序：5、8、9、2，保险箱密码是 5892。']},
  {until:'took_lens',obj:'safe',tiers:['保险箱开了，里面有东西。','点保险箱，拿起镜片。','拿起镜片就好。']},
  {until:'lens_in',obj:'telescope',tiers:['这块镜片是哪里的？','望远镜前面少了一块镜片。','选中镜片，再点望远镜。']},
  {until:'box_got',obj:'boxes',tiers:['望远镜里看到的英文说钥匙在哪里？','找到句子里的颜色词 green——想想红绿灯里“可以走”的那盏。','对照四个盒子的颜色，打开对应的那一个。']},
  {until:'door_code',obj:'door',tiers:['门是梯形的，门上有一道面积题。','梯形面积 =（上底 + 下底）× 高 ÷ 2。','（6 + 10）× 5 ÷ 2 = 40，输入 40。']},
  {until:'escaped',obj:'door',tiers:['密码锁开了，还要用钥匙。','选中铜钥匙，再点梯形门。','先点 🔑，再点左边的门。']}
 ],
 explain:['数字成语：五颜六色、七上八下、九牛一毛、三心二意，缺的数字是 5、8、9、2，保险箱密码是 5892。','把镜片装进望远镜，看到英文：The key is in the green box.（钥匙在绿色的盒子里。）','green 是绿色，打开绿色盒子拿到铜钥匙。','梯形面积 =（上底 + 下底）× 高 ÷ 2 =（6 + 10）× 5 ÷ 2 = 40（平方分米）。'],
 solution:[['code','safe','5892'],['take','safe'],['use','telescope','lens'],['code','boxes','green'],['code','door','40'],['use','door','key']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#2b2a5c')+R(0,214,400,86,'#3f3a7a');
  for(var i=0;i<26;i++){var x=(i*67)%400,y=(i*37)%200;s+=C(x,y,i%3?1.2:1.8,'#fff',' opacity=".55"');}
  s+=g('window',C(205,60,46,'#14143a',' stroke="#a8a2ff" stroke-width="6"')+C(222,44,12,'#fff6c2')+C(226,40,10,'#14143a')+[[180,40],[190,70],[205,52],[218,80],[232,66],[244,72],[238,50]].map(function(p){return C(p[0],p[1],2.2,'#ffe96b');}).join(''));
  s+=g('door',P('M10 212L22 54h36l12 158z','#8e7cc3',SK)+P('M28 68h24l6 128h-36z','#a99ad8')+R(40,120,22,16,'#ffd34d',3,SK)+T(51,128,8,f.door_code?'✔':'##',' fill="#5b4636"')+C(54,150,4,'#ffd34d',SK));
  s+=g('telescope',P('M98 214l22-60 22 60','none',' stroke="#c8c4ff" stroke-width="5"')+P('M90 130l60-30 8 16-60 30z','#e6e2ff',SK)+(f.lens_in?C(155,107,8,'#9fe7ff',SK):C(155,107,8,'#2b2a5c',' stroke="#c8c4ff" stroke-width="2.5" stroke-dasharray="3 3"'))+C(120,150,5,'#c8c4ff'));
  s+=g('desk',R(142,160,124,12,'#b98bff',4,SK)+R(152,172,10,42,'#8e6bd8')+R(246,172,10,42,'#8e6bd8')+R(160,146,72,16,'#fff6dc',3,SK)+C(160,154,6,'#d9b98a')+C(232,154,6,'#d9b98a'));
  s+=g('globe',C(258,128,15,'#6ec6ff',SK)+P('M248 122q10 6 18-2M250 134q8-4 16 2','none',' stroke="#3cc47c" stroke-width="3"')+P('M258 143v6h-8h16','none',SK));
  var bc=['#ff6b6b','#3cc47c','#4d8bff','#ffd23f'];
  s+=g('boxes',R(274,124,116,8,'#b98bff',3,SK)+bc.map(function(c,i){var x=278+i*28;var open=f.box_got&&i===1;return R(x,96,24,28,c,4,SK)+(open?P('M'+x+' 96l12-10 12 10','#a0f0c0',SK):R(x,92,24,6,c,2,SK));}).join(''));
  s+=g('safe',R(284,162,72,52,'#9aa5b8',6,SK)+C(306,188,11,'#dfe6ee',SK)+P('M306 180v8','none',SK)+R(326,176,22,24,'#2c3e50',3)+(f.safe_open?R(288,166,64,44,'#3d4656',4)+(f.took_lens?'':C(320,188,8,'#9fe7ff',SK)):''));
  s+=P('M120 262c0-18 160-18 160 0s-160 18-160 0z','#5a4fa0')+T(200,262,13,'⭐ 🪐 ⭐')+T(352,256,24,'🚀')+T(60,262,18,'🌙');
  return s;}
};
/* ---------------- 第 5 间：秘密花园 ---------------- */
var r5={id:'r5',title:'秘密花园',emoji:'🌷',sub:'植树问题 · 英语 · 古诗',
 story:['你推开一扇小木门，来到了一座秘密花园。','身后的门“砰”地关上了！花园里有一扇金色的大门，门上刻着一句古诗。','传说，只要让魔法花开放，就能找到出去的钥匙……'],
 objects:[
  {id:'gate',name:'金色大门',box:[152,26,96,124],views:[
    {if:['!poem_ok'],text:'大门上刻着一句古诗，少了两个字，旁边有两个汉字转盘：',note:'《游园不值》（节选）　宋·叶绍翁\n春色满园关不 ___，\n一枝红 ___ 出墙来。',
     lock:{kind:'dial',opts:[['开','住','了','走'],['花','桃','杏','梅']],answer:'住杏',prompt:'把两个字转对',ok:{set:['poem_ok'],text:'诗句锁打开了！门上露出一个金色的钥匙孔。'},bad:'不对哦。满园的春色“关不住”，一枝红色的什么花伸出了墙外？'},wrong:'先把门上的诗句锁打开吧。'},
    {text:'诗句锁已经开了，还差一把金钥匙。',use:[{item:'goldkey',win:true,text:'金钥匙一转，大门缓缓打开——你成功走出了秘密花园！'}],wrong:'要用金色的钥匙才行。'}]},
  {id:'mailbox',name:'信箱',box:[328,140,40,62],views:[{text:'信箱里有一封信：',note:'Dear friend,\nMy favourite fruit is the apple.\nLook under the apple tree!\n—— Garden Fairy（花园仙子）'}]},
  {id:'apple',name:'苹果树',box:[8,30,74,112],views:[
    {if:['!took_shovel'],text:'一棵结满红苹果的树。树下的草丛里好像有东西在发光。',take:{give:['shovel'],set:['took_shovel'],text:'你在苹果树下找到了一把小铲子！'}},
    {text:'苹果树沙沙地响，好像在说：“加油！”'}]},
  {id:'pear',name:'梨树',box:[82,50,62,92],views:[{text:'一棵梨树，树下只有几片落叶。'}]},
  {id:'orange',name:'橘子树',box:[254,44,66,96],views:[{text:'一棵橘子树，树下只有一只小蜗牛。'}]},
  {id:'shed',name:'小木屋',box:[322,44,74,92],views:[
    {if:['!took_can'],text:'小木屋门口放着一个空水壶。',take:{give:['can'],set:['took_can'],text:'你拿起了空水壶。'}},
    {text:'小木屋的门锁着，窗台上有一盆小仙人掌。'}]},
  {id:'tap',name:'水龙头',box:[280,160,40,52],views:[{text:'一个水龙头，拧开就有水。',use:[{item:'can',take:['can'],give:['can_full'],set:['filled'],text:'哗啦啦——水壶装满了水。'}],wrong:'接水要用水壶哦。'}]},
  {id:'sign',name:'小路木牌',box:[14,162,50,58],views:[{text:'小路旁边立着一块木牌：',note:'这条小路长 45 米。\n从头到尾，每隔 5 米种一棵树（两头都要种）。\n一共要种多少棵树？'}]},
  {id:'bed',name:'花坛',box:[66,214,128,52],views:[
    {if:['!dug'],text:'花坛里的土松松软软的，好像埋着什么东西。用手挖不动。',use:[{item:'shovel',set:['dug'],text:'你用小铲子挖呀挖，挖出了一个小铁盒！'}],wrong:'用这个挖不动土。'},
    {if:['dug','!tin_open'],text:'小铁盒上有一把两位数的密码锁，盒盖上画着一排小树。',lock:{kind:'num',len:2,answer:'10',prompt:'输入两位数密码',ok:{set:['tin_open'],give:['seed'],text:'铁盒打开了，里面有一颗亮晶晶的魔法种子！'},bad:'不对哦。去看看小路旁的木牌：45 米里有几个 5 米？两头都要种哦。'}},
    {text:'花坛里有一个空铁盒。'}]},
  {id:'pot',name:'魔法花盆',box:[212,210,58,58],views:[
    {if:['!planted'],text:'一个空花盆，上面写着：“种下种子，浇上水，魔法花就会开。”',use:[{item:'seed',take:['seed'],set:['planted'],text:'你把魔法种子种进了花盆。'}],wrong:'花盆里要种的是种子。'},
    {if:['planted','!bloom'],text:'种子已经种下了，可是土干干的。',use:[{item:'can_full',take:['can_full'],give:['goldkey'],set:['bloom'],text:'浇上水，一朵大大的魔法花开了！花心里有一把金钥匙！'}],wrong:'种子需要的是水。'},
    {text:'魔法花在阳光下闪闪发光。'}]}
 ],
 combos:[],
 hints:[
  {until:'took_shovel',obj:'mailbox',tiers:['先看看信箱里的信。','信上说：Look under the apple tree!（看看苹果树下面！）','点苹果树，拿起小铲子。']},
  {until:'dug',obj:'bed',tiers:['哪里的土软软的，可以挖？','花坛里好像埋着东西。','选中小铲子，再点花坛。']},
  {until:'tin_open',obj:'sign',tiers:['铁盒上画着一排小树，小路旁的木牌上有一道植树题。','45 ÷ 5 = 9，有 9 段；两头都种，树比段数多 1。','9 + 1 = 10，输入 10。']},
  {until:'took_can',obj:'shed',tiers:['种子要浇水，先找个水壶。','小木屋门口有一个水壶。','点小木屋，拿起空水壶。']},
  {until:'filled',obj:'tap',tiers:['空水壶要装水。','右边有一个水龙头。','选中空水壶，再点水龙头。']},
  {until:'planted',obj:'pot',tiers:['魔法种子种在哪里？','花园里有一个空花盆。','选中种子，再点花盆。']},
  {until:'bloom',obj:'pot',tiers:['种子种好了，还需要什么？','给花盆浇水。','选中装满水的水壶，再点花盆。']},
  {until:'poem_ok',obj:'gate',tiers:['大门上的古诗少了两个字。','这是叶绍翁的《游园不值》：满园春色“关不□”，“一枝红□出墙来”。','“春色满园关不住，一枝红杏出墙来。”转成「住」「杏」。']},
  {until:'escaped',obj:'gate',tiers:['诗句锁开了，还要一把钥匙。','魔法花里的金钥匙！','选中金钥匙，再点大门。']}
 ],
 explain:['英文信：Look under the apple tree!（看看苹果树下面！）所以小铲子在苹果树下。','植树问题（两头都种）：段数 = 45 ÷ 5 = 9，棵数 = 段数 + 1 = 10。','种下种子、用水壶装水浇花，魔法花开放，拿到金钥匙。','叶绍翁《游园不值》：“春色满园关不住，一枝红杏出墙来。”所以转盘是“住”“杏”。'],
 solution:[['take','apple'],['use','bed','shovel'],['code','bed','10'],['take','shed'],['use','tap','can'],['use','pot','seed'],['use','pot','can_full'],['code','gate','住杏'],['use','gate','goldkey']],
 art:function(f){var s='';
  s+=R(0,0,400,300,'#c9f0ff')+R(0,150,400,150,'#9ee07a')+P('M200 150c-20 60-60 100-70 150h140c-10-50-50-90-70-150z','#f3e3b8');
  s+=C(60,24,14,'#fff6a8');
  function tree(x,y,fruit,fc){return R(x+30,y+60,12,52,'#a0703c',3)+C(x+36,y+40,32,'#5cc46a',SK)+[[-14,-8],[10,-14],[16,8],[-8,14],[2,0]].map(function(d){return T(x+36+d[0],y+40+d[1],11,fruit);}).join('');}
  s+=g('apple',tree(8,30,'🍎'));s+=g('pear',R(108,100,10,42,'#a0703c',3)+C(113,82,26,'#7bd16a',SK)+T(103,78,10,'🍐')+T(121,90,10,'🍐')+T(114,70,10,'🍐'));
  s+=g('orange',R(282,96,10,44,'#a0703c',3)+C(287,76,28,'#58b85e',SK)+T(276,70,10,'🍊')+T(296,76,10,'🍊')+T(284,88,10,'🍊'));
  s+=g('gate',R(154,30,92,118,'#ffd34d',8,SK)+P('M200 30v118','none',SK)+R(162,40,30,46,'#ffe58a',4)+R(208,40,30,46,'#ffe58a',4)+R(186,98,28,18,'#fff6d0',3,SK)+T(200,107,8,f.poem_ok?'🔓':'□□')+C(200,128,4,'#a07a10'));
  s+=g('shed',P('M324 76l36-30 36 30z','#d35d4e',SK)+R(330,76,60,58,'#e9b77c',3,SK)+R(352,98,18,36,'#a0703c',2)+R(334,86,14,12,'#c9f0ff',2,SK)+(f.took_can?'':T(380,124,16,'🫖')));
  s+=g('mailbox',R(344,168,6,34,'#a0703c')+R(330,144,36,26,'#ff7a7a',8,SK)+R(338,152,20,6,'#5b4636',2)+P('M362 150v-8h6','none',' stroke="#ffd34d" stroke-width="3"'));
  s+=g('tap',R(288,168,8,44,'#9aa5b8',2)+R(288,168,26,8,'#9aa5b8',3)+R(308,174,6,8,'#7f8c9d')+C(292,166,5,'#ff6b6b'));
  s+=g('sign',R(36,190,6,30,'#a0703c')+R(16,164,46,30,'#e9b77c',4,SK)+T(39,174,7,'45 米',' fill="#5b4636"')+T(39,185,8,'🌳🌳🌳'));
  s+=g('bed',P('M70 240c0-26 120-26 120 0s-120 26-120 0z','#9a6a3c',SK)+T(96,232,12,'🌼')+T(170,234,12,'🌸')+(f.dug?(f.tin_open?R(118,234,24,14,'#c0c8d2',3,SK):R(118,232,24,16,'#c0c8d2',3,SK)+R(126,236,8,6,'#ffd34d',1)):P('M120 244q10-8 20 0','none',' stroke="#6b4423" stroke-width="3"')));
  s+=g('pot',P('M218 230h46l-6 36h-34z','#e07a4e',SK)+R(214,224,54,10,'#f08a5e',3,SK)+(f.bloom?P('M241 224v-20','none',' stroke="#3c9c46" stroke-width="4"')+T(241,198,26,'🌺'):f.planted?T(241,218,12,'🌱'):''));
  s+=T(372,262,20,'🦋')+T(28,268,18,'🐞');
  return s;}
};
G.PZ_ITEMS=ITEMS;G.PZ_ROOMS=[r1,r2,r3,r4,r5];
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-END*/
