'use strict';
/** Later-room scenes for gen-rooms-extra.js. Each art key is a different place, not a recolor. */

function pack(body){
  return `function(f){var s='';${body}\n  return s;}`;
}
function doorX(mode){const accent=(mode*37)%7;return 300+(accent%3)*4;}
function skyDecor(scene){
  const sky=scene.sky;
  if(scene.deco==='star') return `
  for(var i=0;i<16;i++)s+=C((i*61+8)%386,(i*13+6)%96,i%3?1.15:2,'#fff8dc',' opacity=".9"');
  s+=C(56,42,13,'#fff6c8')+C(64,36,11,'${sky}');`;
  if(scene.deco==='moon') return `
  s+=C(312,42,16,'#fff6c8')+C(322,36,13,'${sky}');
  s+=C(70,34,12,'#fff',' opacity=".8"')+C(86,38,9,'#fff',' opacity=".8"');`;
  if(scene.deco==='mist') return `
  s+=C(48,40,16,'#fff',' opacity=".72"')+C(66,44,11,'#fff',' opacity=".72"')+C(188,28,20,'#fff',' opacity=".5"')+C(210,34,13,'#fff',' opacity=".5"');
  s+=C(330,46,13,'#fff6c2',' opacity=".8"');`;
  return `
  s+=C(322,40,16,'#ffe27a')+C(322,40,26,'#ffe27a',' opacity=".28"');
  s+=C(58,34,13,'#fff')+C(74,38,10,'#fff')+C(44,40,8,'#fff');`;
}

function ink(scene){return scene.ink||'#3e3428';}

const ARTS={
  living(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}')+R(0,214,400,86,'${scene.floor}');
  s+=P('M40 286c40-36 120-36 160 0s120 28 160 0v14H40z','#e7a0a8',' opacity=".9"');
  s+=R(118,232,150,28,'#f4c7b8',16,SK)+R(126,220,134,22,'#ffe1d6',12,SK);
  s+=R(250,196,16,70,'#c98b52',4)+C(258,188,10,'#ffe08a',' opacity=".9"')+C(258,188,22,'#ffe08a',' opacity=".25"');
  s+=g('window',R(22,24,96,74,'${scene.sky}',6,SK)+R(22,24,18,74,'#f7d0d8')+R(100,24,18,74,'#f7d0d8')+P('M70 24v74M22 60h96','none',' stroke="#fff" stroke-width="2" opacity=".7"')+T(70,108,11,'窗帘',' fill="${c}"'));
  s+=g('board',R(132,18,150,86,'#fffaf2',6,' stroke="#d9a07a" stroke-width="5"')+R(148,32,52,40,'#f6d2b8',4)+C(166,48,8,'#f3b6a0')+C(184,50,8,'#f3b6a0')+T(206,86,12,'全家福',' fill="#5b4636"'));
  s+=g('desk',R(28,150,128,36,'#e7c39a',8,SK)+R(40,158,64,16,f.desk_open?'#fff6e0':'#d7b088',4)+(f.desk_open?T(72,168,12,'🍪'):C(96,166,4,'#5b4636'))+T(92,202,11,'茶几',' fill="${c}"')+T(140,168,14,'🍵'));
  s+=g('box',R(188,162,76,50,'#f0a06a',8,SK)+(f.box_open?R(196,170,60,34,'#ffe6c8',3):R(206,176,40,20,'#ffcf4d',3))+T(226,226,11,'玩具箱',' fill="${c}"'));
  s+=g('shelf',R(286,28,100,118,'#d7c2a4',6,SK)+R(296,78,80,46,'#243044',4)+R(302,84,68,28,'#7ec8ff',2)+T(336,70,16,'📺')+T(336,132,14,'🪴'));
  s+=g('door',R(${x},156,72,124,'#e7c9a2',6,SK)+C(${x+54},214,5,'#ffcf4d',SK)+R(${x+18},170,36,28,'#c9e7ff',3)+T(${x+36},250,11,'房门',' fill="${c}"'));
  s+=T(36,270,20,'${scene.emoji}');`);
  },
  bedroom(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}')+R(0,200,400,100,'${scene.floor}');
  s+=R(70,214,210,64,'#f7f1ff',10,SK)+R(78,206,150,22,'#ffe9f3',8,SK)+R(86,198,36,16,'#fff',6)+R(130,198,36,16,'#fff',6);
  s+=R(250,168,10,90,'#c9b8a0')+C(255,160,9,'#ffe08a')+C(255,160,18,'#ffe08a',' opacity=".3"');
  s+=g('window',R(22,22,96,74,'${scene.sky}',8,SK)+C(78,52,12,'#fff6c8')+C(84,48,9,'${scene.sky}')+T(70,108,11,'小窗',' fill="${c}"'));
  s+=g('board',R(132,16,148,88,'#fff5fb',6,' stroke="#e7b6d4" stroke-width="5"')+T(206,48,16,'🌙')+T(206,76,12,'梦的清单',' fill="#7a4e6a"'));
  s+=g('desk',R(28,150,120,46,'#e6d3ef',6,SK)+R(40,158,52,24,f.desk_open?'#fff':'#d7c0ea',4)+(f.desk_open?'':C(78,170,4,'#5b4636'))+T(88,210,11,'床头柜',' fill="${c}"')+T(128,168,14,'🧸'));
  s+=g('box',R(188,160,74,50,'#f2b5c8',6,SK)+(f.box_open?R(196,168,58,34,'#ffe4ee',3):R(206,176,36,18,'#ffcf4d',3))+T(224,224,11,'收纳篮',' fill="${c}"'));
  s+=g('shelf',R(286,24,100,126,'#cbb6e6',6,SK)+R(296,48,80,8,'#a88bc4',2)+R(296,88,80,8,'#a88bc4',2)+T(336,70,16,'👕')+T(336,112,16,'📚'));
  s+=g('door',R(${x},156,72,124,'#d7c4ef',6,SK)+C(${x+54},216,5,'#ffd34d',SK)+T(${x+36},118,14,'⭐')+T(${x+36},248,11,'卧室门',' fill="${c}"'));
  s+=T(40,276,18,'${scene.emoji}')+T(200,276,16,'🧦');`);
  },
  park(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,168,'${scene.sky}')+R(0,168,400,132,'${scene.floor}');
  ${skyDecor(scene)}
  s+=P('M-10 250C80 210 140 250 210 220S320 250 410 214V300H-10z','#c9e7b0',' opacity=".55"');
  s+=P('M150 300C170 230 190 210 210 168C230 214 250 236 270 300z','#e7d7b0');
  s+=C(46,150,28,'#3e9a4a')+R(40,168,12,48,'#8a5a32')+C(340,120,26,'#2f8a40')+R(334,140,12,40,'#8a5a32');
  s+=T(24,196,16,'🌸')+T(250,188,14,'🌼')+T(120,250,14,'🐦');
  s+=g('window',R(18,78,90,70,'#b7e39a',8,SK)+T(63,112,22,'🌳')+T(63,156,11,'大树',' fill="${c}"'));
  s+=g('board',R(130,18,156,84,'#f4fbe8',6,' stroke="#5f8f3a" stroke-width="5"')+T(208,48,16,'🗺️')+T(208,76,12,'游园地图',' fill="#2d5a1e"'));
  s+=g('desk',R(28,168,124,28,'#a67c52',6,SK)+R(24,160,132,14,'#c49a62',6,SK)+(f.desk_open?R(70,172,40,16,'#e7c99a',3):C(90,182,4,'#5b4636'))+T(90,214,11,'长椅',' fill="${c}"'));
  s+=g('box',R(188,164,76,48,'#e7b15a',6,SK)+(f.box_open?R(196,172,60,32,'#fff1cc',3):R(206,178,36,18,'#ffcf4d',3))+T(226,226,11,'野餐篮',' fill="${c}"'));
  s+=g('shelf',R(292,36,92,110,'#f0d78c',6,SK)+P('M292 36h92l-10-16h-72z','#e25b4a')+T(338,90,18,'🍦')+T(338,124,14,'🎈'));
  s+=g('door',R(${x},150,74,128,'#8d6a3f',6,SK)+R(${x+8},162,26,100,'#6aaa3a',4)+R(${x+40},162,26,100,'#6aaa3a',4)+C(${x+54},214,5,'#ffcf4d',SK)+T(${x+36},292,11,'园门',' fill="${c}"'));
  s+=T(40,276,20,'${scene.emoji}');`);
  },
  flower(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,150,'${scene.sky}')+R(0,150,400,150,'${scene.floor}');
  ${skyDecor(scene)}
  for(var i=0;i<5;i++)s+=R(18+i*36,232,30,42,'#6b3e28',4);
  s+=T(30,228,16,'🌷')+T(70,224,16,'🌻')+T(110,230,16,'🌹')+T(150,222,16,'🌼')+T(190,228,14,'🌺');
  s+=C(250,210,16,'#8fd4f2',' stroke="#5b4636" stroke-width="2"')+R(246,226,8,20,'#9aa7b2');
  s+=g('window',R(20,22,92,72,'#d9f5c8',8,SK)+T(66,58,22,'🐝')+T(66,104,11,'花窗',' fill="${c}"'));
  s+=g('board',R(128,16,158,86,'#fffdf4',6,' stroke="#7dae52" stroke-width="5"')+T(206,46,14,'🏷️')+T(206,74,12,'今日花名',' fill="#2d5a1e"'));
  s+=g('desk',R(28,156,126,40,'#c48b62',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#a96b42',4)+(f.desk_open?'':C(92,174,4,'#fff'))+T(90,212,11,'花坛沿',' fill="${c}"'));
  s+=g('box',R(186,160,78,50,'#f0d36a',6,SK)+(f.box_open?R(194,168,62,34,'#fff6d0',3):R(204,174,40,18,'#e7b84a',3))+T(224,224,11,'种子盒',' fill="${c}"'));
  s+=g('shelf',R(286,30,98,116,'#8fbf62',6,SK)+T(336,70,18,'🌷')+T(336,108,18,'🪴')+T(336,140,14,'🎀'));
  s+=g('door',P('M${x} 168 Q${x+36} 120 ${x+72} 168V280H${x}z','#f2a3c0',SK)+R(${x+30},200,12,40,'#fff',0,' opacity=".45"')+T(${x+36},250,11,'花拱门',' fill="${c}"'));
  s+=T(360,270,18,'🦋');`);
  },
  river(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,118,'${scene.sky}')+R(0,118,400,28,'#7dce6a')+R(0,146,400,78,'${scene.water||'#3d9ad6'}')+R(0,220,400,80,'${scene.floor}');
  ${skyDecor(scene)}
  for(var i=0;i<7;i++)s+=P('M'+(i*58)+' 168 q16 8 32 0 t32 0','none',' stroke="#e9f7ff" stroke-width="2" opacity=".7"');
  s+=C(78,176,12,'#e4d8c4',SK)+C(124,196,14,'#d9cdb8',SK)+C(172,174,11,'#efe4d2',SK)+C(220,198,13,'#d5c8b0',SK);
  s+=T(28,132,18,'🌿')+T(250,128,16,'🌿')+T(36,268,16,'🦆');
  s+=g('window',R(18,28,90,70,'#9ed98a',8,SK)+P('M36 96 C50 30 90 30 96 90','#2f8f45')+T(64,108,11,'河柳',' fill="${c}"'));
  s+=g('board',R(128,16,156,80,'#f6e7c4',6,' stroke="#8a5a2b" stroke-width="5"')+T(206,44,16,'🛶')+T(206,72,12,'小心过河',' fill="#5b4636"'));
  s+=g('desk',R(26,168,124,36,'#cfc6b6',10,SK)+R(40,176,60,18,f.desk_open?'#fff6e0':'#b7b0a2',4)+(f.desk_open?'':C(86,186,4,'#5b4636'))+T(88,220,11,'岸边石桌',' fill="${c}"'));
  s+=g('box',R(186,164,76,48,'#c98b52',4,SK)+(f.box_open?R(194,172,60,32,'#f0d2a4',3):R(204,178,36,16,'#e2b56a',3))+T(224,226,11,'木箱',' fill="${c}"'));
  s+=g('shelf',R(292,30,92,108,'#6aaa3a',3)+R(304,40,8,90,'#d7b07a')+R(330,34,8,98,'#d7b07a')+R(356,44,8,82,'#d7b07a')+T(334,78,16,'🎋'));
  s+=g('door',P('M${x+6} 250 Q${x+36} 200 ${x+70} 250','#e8d7b0')+R(${x+8},188,60,62,'#f4e2c0',8,SK)+T(${x+38},214,20,'⛵')+T(${x+38},258,11,'渡船',' fill="${c}"'));
  s+=T(360,276,16,'🐟');`);
  },
  bridge(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,150,'${scene.sky}')+R(0,168,400,50,'${scene.water||'#3d9ad6'}')+R(0,214,400,86,'${scene.floor}');
  ${skyDecor(scene)}
  s+=P('M20 214 Q120 120 200 214 Q280 120 390 214','#d7d0c4')+P('M20 214 Q120 150 200 214 Q280 150 390 214V250H20z','#c3b8a4',SK);
  s+=R(30,150,10,64,'#8d6b45')+R(360,150,10,64,'#8d6b45')+C(35,146,6,'#ffb84a')+C(365,146,6,'#ffb84a');
  for(var i=0;i<6;i++)s+=R(70+i*42,158,4,28,'#efe6d4');
  s+=g('window',R(18,22,88,64,'#bfe6c8',8,SK)+T(62,54,20,'🌿')+T(62,98,11,'桥柳',' fill="${c}"'));
  s+=g('board',R(128,14,150,78,'#fff8e4',6,' stroke="#8a5a2b" stroke-width="5"')+T(203,42,14,'🌉')+T(203,68,12,'石拱桥',' fill="#5b4636"'));
  s+=g('desk',R(28,156,120,36,'#d2c6b2',8,SK)+R(40,164,56,16,f.desk_open?'#fff6e0':'#b7aa96',4)+(f.desk_open?'':C(84,172,4,'#5b4636'))+T(88,208,11,'桥头石凳',' fill="${c}"'));
  s+=g('box',R(186,160,74,48,'#c98b52',4,SK)+(f.box_open?R(194,168,58,32,'#f3ddb8',3):R(204,174,34,16,'#e2b56a',3))+T(222,222,11,'竹篮',' fill="${c}"'));
  s+=g('shelf',R(292,28,90,100,'#e7d7b8',6,SK)+T(336,70,18,'🏮')+T(336,110,16,'🎐'));
  s+=g('door',R(${x},156,72,120,'#b08968',6,SK)+P('M${x} 156l36-22 36 22','#8d6a43')+C(${x+54},214,5,'#ffcf4d',SK)+T(${x+36},250,11,'桥门',' fill="${c}"'));`);
  },
  classroom(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}')+R(0,214,400,86,'${scene.floor}');
  for(var i=0;i<7;i++)s+=R(i*58,250,48,28,'#f4e2c4',4,' stroke="#d7c09a" stroke-width="1"');
  s+=R(18,214,364,8,'#e7d3a8');
  s+=g('window',R(16,18,100,78,'${scene.sky}',6,SK)+P('M66 18v78M16 56h100','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'窗',' fill="${c}"'));
  s+=g('board',R(126,12,168,104,'#1e8449',4,' stroke="#a86b38" stroke-width="6"')+T(210,42,13,'今天的课',' fill="#fff"')+T(210,66,12,'认真审题',' fill="#d5f5e3"')+T(210,90,11,'1.2 × 0.5',' fill="#abebc6"'));
  s+=g('desk',R(24,150,132,52,'#c98b52',6,SK)+R(36,160,78,28,f.desk_open?'#f6e0c0':'#a86b38',4)+(f.desk_open?T(74,176,12,'📘'):C(100,174,4,'#fff'))+T(90,216,11,'讲台',' fill="${c}"')+T(140,166,14,'✏️'));
  s+=g('box',R(186,160,76,50,'#f5c16a',6,SK)+(f.box_open?R(194,168,60,34,'#fff3d6',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'作业盒',' fill="${c}"'));
  s+=g('shelf',R(286,22,100,132,'#b9793f',6,SK)+R(296,52,80,8,'#8a5428',2)+R(296,92,80,8,'#8a5428',2)+T(336,74,14,'📕')+T(336,114,14,'🌍'));
  s+=g('door',R(${x},150,72,126,'#8fb6e8',6,SK)+R(${x+10},162,52,36,'#d6ebff',4)+C(${x+54},220,5,'#ffcf4d',SK)+T(${x+36},252,11,'教室门',' fill="${c}"'));
  s+=T(48,276,18,'${scene.emoji}');`);
  },
  hallway(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}');
  for(var i=0;i<8;i++)s+=R(0,214+i*11,400,11,i%2?'${scene.floor}':'#e7dcc8');
  s+=P('M120 214 L200 120 L280 214','none',' stroke="#fff" stroke-width="8" opacity=".25"');
  s+=g('window',R(18,20,96,74,'${scene.sky}',6,SK)+P('M66 20v74M18 56h96','none',' stroke="#fff" stroke-width="3"')+T(66,108,11,'走廊窗',' fill="${c}"'));
  s+=g('board',R(126,16,160,96,'#fffdf6',4,' stroke="#c98b52" stroke-width="6"')+T(206,46,14,'📌')+T(206,72,12,'失物招领',' fill="#5b4636"')+T(206,94,10,'看看告示',' fill="#888"'));
  s+=g('desk',R(28,156,128,40,'#d8c4a4',6,SK)+R(40,164,70,20,f.desk_open?'#fff6e0':'#c8b090',4)+(f.desk_open?'':C(96,174,4,'#5b4636'))+T(92,212,11,'休息椅',' fill="${c}"'));
  s+=g('box',R(186,160,76,50,'#e39b4a',6,SK)+(f.box_open?R(194,168,60,34,'#ffe6c2',3):R(204,174,38,18,'#ffcf4d',3))+T(224,224,11,'失物箱',' fill="${c}"'));
  s+=g('shelf',R(286,24,100,124,'#6f8fbe',6,SK)+R(296,40,24,48,'#f4f7fb',3)+R(324,40,24,48,'#f4f7fb',3)+R(352,40,24,48,'#f4f7fb',3)+T(336,112,16,'🎒'));
  s+=g('door',R(${x},150,72,126,'#d98a3a',6,SK)+R(${x+12},164,48,40,'#f8e2c0',4)+C(${x+54},220,5,'#5b4636',SK)+T(${x+36},252,11,'楼梯口',' fill="${c}"'));
  s+=T(40,276,18,'🪴');`);
  },
  forest(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}')+R(0,0,400,70,'#1e4d32',0,' opacity=".35"');
  s+=R(0,210,400,90,'${scene.floor}');
  s+=P('M180 300 C200 200 210 160 220 120 C230 170 250 220 270 300z','#c8ad84');
  ${scene.deco==='star'?"for(var i=0;i<10;i++)s+=C(30+(i*37)%340,40+(i*19)%80,2,'#d6ff9a',' opacity=\".8\"');":skyDecor(scene)}
  s+=R(8,40,18,180,'#6b442c')+R(360,30,22,190,'#6b442c')+C(18,36,26,'#1f6b3a')+C(372,28,30,'#1f6b3a');
  s+=C(40,248,8,'#e25b4a')+C(70,260,6,'#f0d36a')+C(250,252,7,'#e8e0d0');
  s+=g('window',R(24,70,80,70,'#2f8f45',8,SK)+T(64,104,20,'🌲')+T(64,150,11,'树洞',' fill="${c}"'));
  s+=g('board',R(128,20,150,82,'#e7d3a4',6,' stroke="#6b442c" stroke-width="5"')+T(203,50,14,'🪵')+T(203,76,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',C(90,176,34,'#a67c52',SK)+R(40,168,50,22,f.desk_open?'#e7c8a0':'#8a5a32',4)+(f.desk_open?'':C(78,178,4,'#fff'))+T(90,214,11,'树桩',' fill="${c}"'));
  s+=g('box',R(186,160,74,50,'#b8894a',6,SK)+(f.box_open?R(194,168,58,34,'#f0ddb4',3):R(204,174,36,18,'#e2b56a',3))+T(222,224,11,'小木箱',' fill="${c}"'));
  s+=g('shelf',R(292,36,90,110,'#8a5a32',4,SK)+R(300,50,16,80,'#6b442c')+R(330,44,16,90,'#6b442c')+R(356,56,16,74,'#6b442c')+T(336,100,14,'🍄'));
  s+=g('door',R(${x},150,74,126,'#c49a62',6,SK)+P('M${x} 150l37-28 37 28','#8d4a3a')+R(${x+22},176,30,28,'#f6e2a8',3)+C(${x+54},220,5,'#ffcf4d',SK)+T(${x+36},252,11,'小木屋',' fill="${c}"'));`);
  },
  beach(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,132,'${scene.sky}')+R(0,132,400,52,'${scene.water||'#3aa0d8'}')+R(0,184,400,116,'${scene.floor}');
  ${skyDecor(scene)}
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 150 q20 10 40 0 t40 0','none',' stroke="#e7f7ff" stroke-width="3" opacity=".75"');
  s+=C(40,230,4,'#fff')+C(90,250,3,'#ffe08a')+C(150,236,4,'#f7c6c6')+C(240,258,3,'#fff')+T(48,268,14,'🐚');
  s+=P('M300 210 l30-40 30 40z','#ff8f8f',' opacity=".9"')+R(328,210,4,30,'#c98b52');
  s+=g('window',R(16,24,88,70,'#ffe08a',8,' opacity=".3"')+T(60,58,22,'🌴')+T(60,104,11,'椰树',' fill="${c}"'));
  s+=g('board',R(124,16,156,80,'#fff8e6',6,' stroke="#e07a4a" stroke-width="5"')+T(202,46,14,'⛱️')+T(202,72,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',R(28,168,120,28,'#e7c99a',10,SK)+(f.desk_open?R(50,172,40,16,'#fff6e0',3):C(88,182,4,'#c98b52'))+T(88,214,11,'沙桌',' fill="${c}"'));
  s+=g('box',R(186,160,74,48,'#5dade2',6,SK)+(f.box_open?R(194,168,58,32,'#eaf6ff',3):R(204,174,36,16,'#ffcf4d',3))+T(222,222,11,'冷藏箱',' fill="${c}"'));
  s+=g('shelf',R(300,40,78,100,'#f2c14a',6,SK)+R(312,36,8,70,'#c98b52')+T(338,78,18,'🛟')+T(338,118,14,'🩱'));
  s+=g('door',R(${x},156,72,100,'#f6e2b8',6,SK)+P('M${x} 156l36-20 36 20','#e07a4a')+T(${x+36},200,18,'🏠')+T(${x+36},246,11,'沙滩屋',' fill="${c}"'));
  s+=T(250,120,16,'🕊️');`);
  },
  farm(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,150,'${scene.sky}')+R(0,150,400,150,'${scene.floor}');
  ${skyDecor(scene)}
  for(var i=0;i<8;i++)s+=R(0,168+i*16,400,8,i%2?'#8fbf4a':'#7aaa3a',0,' opacity=".55"');
  s+=R(250,120,8,70,'#6b442c')+C(254,112,10,'#f2c14a')+R(236,128,36,8,'#6b442c')+T(254,108,12,'🌾');
  s+=g('window',R(16,22,90,70,'#d9f2b0',8,SK)+T(61,56,20,'🚜')+T(61,102,11,'田边',' fill="${c}"'));
  s+=g('board',R(124,16,156,80,'#fff8e0',6,' stroke="#8a5a2b" stroke-width="5"')+T(202,46,14,'🌽')+T(202,72,12,'丰收告示',' fill="#5b4636"'));
  s+=g('desk',R(24,156,126,42,'#c98b52',6,SK)+R(36,164,70,22,f.desk_open?'#fff1d0':'#a86b38',4)+(f.desk_open?'':C(90,176,4,'#fff'))+T(86,214,11,'木桌',' fill="${c}"')+T(132,170,14,'🥛'));
  s+=g('box',R(184,160,76,50,'#e0a15a',6,SK)+(f.box_open?R(192,168,60,34,'#f8e2c0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'菜筐',' fill="${c}"'));
  s+=g('shelf',R(286,28,96,118,'#b7d47a',4,' stroke="#5f8f3a" stroke-width="3"')+T(334,70,18,'🥕')+T(334,108,18,'🍅')+T(334,140,14,'🥚'));
  s+=g('door',R(${x},148,78,128,'#c0392b',6,SK)+P('M${x} 148l39-26 39 26','#922b21')+R(${x+26},190,26,50,'#f6e2b0',3)+C(${x+54},214,5,'#ffcf4d',SK)+T(${x+38},252,11,'谷仓',' fill="${c}"'));
  s+=T(40,276,16,'🐔');`);
  },
  lotus(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,110,'${scene.sky}')+R(0,110,400,190,'${scene.water||'#2f8fbf'}');
  ${skyDecor(scene)}
  s+=C(50,200,22,'#1f7a4a')+C(90,230,18,'#1f7a4a')+C(150,190,16,'#248a55')+C(40,250,14,'#1b6b40');
  s+=T(50,196,16,'🪷')+T(150,186,16,'🌸')+T(90,226,12,'🐸');
  s+=R(20,168,150,14,'#c9a06a',4,SK);
  s+=g('window',R(18,22,88,64,'#d7f6ff',8,SK)+T(62,52,18,'🐉')+T(62,98,11,'远山',' fill="${c}"'));
  s+=g('board',R(124,14,156,78,'#f4ffe8',6,' stroke="#2f8f4a" stroke-width="5"')+T(202,42,14,'🪷')+T(202,68,12,'荷塘',' fill="#1e5a32"'));
  s+=g('desk',R(24,160,130,28,'#d7b07a',6,SK)+R(36,166,50,14,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(78,174,3,'#5b4636'))+T(88,206,11,'木码头',' fill="${c}"'));
  s+=g('box',R(186,158,74,48,'#e7c07a',6,SK)+(f.box_open?R(194,166,58,32,'#fff3d2',3):R(204,172,34,16,'#ffcf4d',3))+T(222,220,11,'竹篮',' fill="${c}"'));
  s+=g('shelf',R(292,24,92,110,'#f3e2c4',6,SK)+P('M292 24h92l-16-16h-60z','#c0392b')+T(338,78,18,'🏮')+T(338,116,16,'🍵'));
  s+=g('door',C(${x+36},210,40,'#f6e2b8',SK)+C(${x+36},210,26,'${scene.water||'#2f8fbf'}')+T(${x+36},250,11,'月洞门',' fill="${c}"'));
  s+=T(250,140,16,'🪁');`);
  },
  camp(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,168,'${scene.sky}')+R(0,168,400,132,'${scene.floor}');
  ${skyDecor(scene)}
  s+=R(8,90,16,100,'#2c4a32')+C(16,80,24,'#1e4d32')+R(360,70,18,120,'#2c4a32')+C(370,64,28,'#1e4d32');
  s+=C(120,230,16,'#ff9a3c')+C(120,226,8,'#ffe08a')+R(116,230,8,16,'#6b442c')+T(150,236,14,'🔥');
  s+=g('window',R(20,24,86,64,'#1b3a4a',8,SK)+T(63,54,18,'🏕️')+T(63,100,11,'远林',' fill="${c}"'));
  s+=g('board',R(124,16,156,80,'#f6e7c8',6,' stroke="#6b442c" stroke-width="5"')+T(202,46,14,'📌')+T(202,72,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(24,170,130,18,'#8a5a32',4,SK)+R(20,162,138,12,'#a67c52',4,SK)+(f.desk_open?R(70,166,30,10,'#e7c8a0',2):C(90,176,3,'#fff'))+T(88,204,11,'木头凳',' fill="${c}"'));
  s+=g('box',R(184,158,76,50,'#5d7a8a',6,SK)+(f.box_open?R(192,166,60,34,'#d5e6ee',3):R(202,172,38,18,'#ffcf4d',3))+T(222,222,11,'冷藏盒',' fill="${c}"'));
  s+=g('shelf',R(292,36,90,108,'#6b442c',4,SK)+T(336,78,18,'🎒')+T(336,118,16,'🥾'));
  s+=g('door',P('M${x+8} 270 L${x+38} 168 L${x+68} 270z','#f2a3a0',SK)+P('M${x+38} 190 v70','none',' stroke="#6b442c" stroke-width="2"')+T(${x+38},248,11,'帐篷',' fill="${c}"'));`);
  },
  treehouse(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.sky}');
  ${skyDecor(scene)}
  s+=R(0,230,400,70,'${scene.floor}');
  s+=R(70,120,36,180,'#8a5a32',6)+C(40,70,28,'#3aaa4a')+C(120,50,36,'#2f9a40')+C(180,80,24,'#46b85a')+C(20,110,18,'#2f8a40');
  s+=R(150,150,200,16,'#c9a06a',3,SK);
  s+=P('M200 166 q40 20 20 70','none',' stroke="#d7b07a" stroke-width="4"');
  s+=g('window',R(168,96,70,48,'#fff6d0',6,SK)+T(203,120,16,'🪟')+T(203,154,11,'树窗',' fill="${c}"'));
  s+=g('board',R(126,16,150,70,'#f6e7c4',6,' stroke="#6b442c" stroke-width="5"')+T(201,42,14,'🌳')+T(201,64,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(24,168,110,36,'#d7b07a',6,SK)+R(36,176,48,16,f.desk_open?'#fff6e0':'#b8894a',3)+(f.desk_open?'':C(70,184,3,'#5b4636'))+T(78,218,11,'树枝台',' fill="${c}"'));
  s+=g('box',R(186,164,70,46,'#c98b52',4,SK)+(f.box_open?R(194,170,54,32,'#f3ddb8',3):R(202,176,34,16,'#e2b56a',3))+T(220,224,11,'宝箱',' fill="${c}"'));
  s+=g('shelf',R(286,40,70,90,'#6aaa3a',6,SK)+T(320,80,18,'🐿️')+T(320,116,14,'🍃'));
  s+=g('door',R(${x},148,70,78,'#e7c48a',6,SK)+P('M${x} 148l35-22 35 22','#c0392b')+R(${x+22},166,26,24,'#c9e7ff',3)+C(${x+54},200,4,'#ffcf4d',SK)+T(${x+34},242,11,'树屋门',' fill="${c}"'));
  s+=T(40,270,18,'🐦');`);
  },
  greenhouse(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.sky}');
  for(var i=0;i<8;i++)s+=R(i*50,0,48,300,'#fff',0,' opacity=".08"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*50)+'H400','none',' stroke="#fff" stroke-width="2" opacity=".25"');
  s+=R(0,220,400,80,'${scene.floor}');
  s+=T(40,190,20,'🌿')+T(80,200,18,'🌵')+T(250,188,18,'🌸');
  s+=g('window',R(16,18,96,78,'#e9fff2',6,' stroke="#9ad7b2" stroke-width="4"')+T(64,56,20,'🪴')+T(64,108,11,'玻璃',' fill="${c}"'));
  s+=g('board',R(124,14,160,90,'#f4fff4',6,' stroke="#3d9a62" stroke-width="5"')+T(204,44,14,'💧')+T(204,70,12,'浇水时间',' fill="#1e5a32"')+T(204,90,10,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(22,154,132,50,'#cfe3c4',6,SK)+R(34,164,70,26,f.desk_open?'#fff':'#b7d3a8',4)+(f.desk_open?'':C(90,178,4,'#3d6b4a'))+T(88,218,11,'育苗台',' fill="${c}"')+T(138,172,14,'🌱'));
  s+=g('box',R(184,160,76,50,'#e7b15a',6,SK)+(f.box_open?R(192,168,60,34,'#fff3d0',3):R(202,174,38,18,'#ffcf4d',3))+T(222,224,11,'花盆箱',' fill="${c}"'));
  s+=g('shelf',R(286,22,100,130,'#8fbf8a',6,SK)+T(336,60,16,'🌿')+T(336,98,16,'🌺')+T(336,136,14,'🧴'));
  s+=g('door',R(${x},148,72,128,'#d8f3e4',6,' stroke="#3d9a62" stroke-width="4"')+P('M${x+36} 148v128','none',' stroke="#3d9a62" stroke-width="3"')+C(${x+54},214,5,'#f2c14a',SK)+T(${x+36},252,11,'温室门',' fill="${c}"'));`);
  },
  rain(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.sky}')+R(0,200,400,100,'${scene.floor}');
  for(var i=0;i<28;i++)s+=P('M'+((i*47)%400)+' '+((i*29)%180)+' l-6 16','none',' stroke="#d5e6f5" stroke-width="2" opacity=".7"');
  s+=P('M40 250c30-16 50-8 70 0s40 8 60-4','none',' stroke="#9ec4de" stroke-width="6" opacity=".45"');
  s+=R(300,120,8,90,'#5d6d7e')+C(304,112,10,'#ffe08a')+C(304,112,20,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,20,96,74,'#c5d8e8',6,SK)+T(64,56,20,'☂️')+T(64,106,11,'橱窗',' fill="${c}"'));
  s+=g('board',R(124,16,156,84,'#fffdf8',6,' stroke="#7f8c9d" stroke-width="5"')+T(202,46,14,'☔')+T(202,72,12,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(24,156,126,42,'#b7c4ce',6,SK)+R(36,164,64,22,f.desk_open?'#eef5f8':'#8fa0ae',4)+(f.desk_open?'':C(86,176,4,'#fff'))+T(86,214,11,'候车椅',' fill="${c}"'));
  s+=g('box',R(184,160,74,50,'#e74c3c',6,SK)+(f.box_open?R(192,168,58,34,'#f5b7b1',3):R(202,174,34,18,'#ffcf4d',3))+T(220,224,11,'邮筒',' fill="${c}"'));
  s+=g('shelf',R(286,28,96,112,'#5d6d7e',6,SK)+T(334,70,16,'📰')+T(334,112,16,'☂️'));
  s+=g('door',R(${x},148,74,120,'#f2d16b',6,SK)+P('M${x-6} 148h86l-10 16H${x+4}z','#e67e22')+R(${x+16},176,42,40,'#fff6d8',3)+T(${x+36},250,11,'小店',' fill="${c}"'));
  s+=T(40,270,18,'🐸');`);
  },
  market(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}')+R(0,214,400,86,'${scene.floor}');
  for(var i=0;i<8;i++)s+=R(i*50,0,50,46,i%2?'#e74c3c':'#f5d76e');
  s+=R(0,46,400,10,'#f7f1e4');
  s+=g('window',R(16,64,96,70,'#fff8e8',6,SK)+T(64,98,20,'🥬')+T(64,146,11,'摊位',' fill="${c}"'));
  s+=g('board',R(124,62,160,84,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(204,92,13,'今日菜价',' fill="#c0392b"')+T(204,116,11,'青菜 3.5',' fill="#5b4636"')+T(204,134,11,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(22,156,130,50,'#e8d3b0',6,SK)+R(40,148,40,16,'#f7f1e4',3)+R(34,166,70,26,f.desk_open?'#fff':'#d9c4a4',4)+(f.desk_open?'':C(88,180,4,'#5b4636'))+T(88,220,11,'秤台',' fill="${c}"'));
  s+=g('box',R(184,160,76,50,'#c98b52',4,SK)+(f.box_open?R(192,168,60,34,'#f3ddb8',3):R(202,174,38,18,'#e2b56a',3))+T(222,224,11,'菜筐',' fill="${c}"'));
  s+=g('shelf',R(286,64,100,120,'#b9793f',6,SK)+T(336,100,18,'🐟')+T(336,140,18,'🍎')+T(336,172,14,'🧄'));
  s+=g('door',R(${x},150,72,124,'#27ae60',6,SK)+T(${x+36},200,20,'🚪')+T(${x+36},248,11,'菜场口',' fill="#f7f1e4"'));
  s+=T(40,276,16,'🥕');`);
  },
  snow(scene, mode){
    const x=doorX(mode), c=ink(scene);
    return pack(`
  s+=R(0,0,400,168,'${scene.sky}')+R(0,168,400,132,'${scene.floor}');
  ${skyDecor(scene)}
  for(var i=0;i<18;i++)s+=C((i*73)%400,(i*41)%150,i%3?1.4:2.2,'#fff',' opacity=".85"');
  s+=R(250,150,70,70,'#f7fbff',8,SK)+C(268,168,6,'#5b4636')+C(292,168,6,'#5b4636')+P('M272 188 q10 8 20 0','none',' stroke="#e07a7a" stroke-width="2"')+R(282,188,4,22,'#f0a0a0');
  s+=R(20,120,14,70,'#2f6b4a')+P('M8 120 l20-28 20 28z','#eef8f2')+R(40,100,12,90,'#2f6b4a')+P('M28 100 l18-24 18 24z','#eef8f2');
  s+=g('window',R(18,22,86,64,'#d6ecff',8,SK)+T(61,52,18,'❄️')+T(61,98,11,'雪窗',' fill="${c}"'));
  s+=g('board',R(120,16,150,78,'#fff',6,' stroke="#9ec4de" stroke-width="5"')+T(195,44,14,'☃️')+T(195,70,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',R(24,160,120,36,'#f7fbff',8,' stroke="#9ec4de" stroke-width="3"')+R(40,168,50,16,f.desk_open?'#fff6e0':'#e4eef6',4)+(f.desk_open?'':C(80,176,4,'#7f8c9d'))+T(84,212,11,'雪凳',' fill="${c}"'));
  s+=g('box',R(184,158,74,48,'#e74c3c',6,SK)+(f.box_open?R(192,166,58,32,'#f5d0cc',3):R(202,172,34,16,'#ffcf4d',3))+T(220,220,11,'雪橇',' fill="${c}"'));
  s+=g('shelf',R(292,36,88,100,'#8a5a32',4,SK)+R(300,48,14,70,'#6b442c')+R(326,42,14,78,'#6b442c')+R(352,52,14,64,'#6b442c')+T(334,90,12,'🪵'));
  s+=g('door',R(${x},148,74,120,'#f2e2c8',6,SK)+P('M${x} 148l37-26 37 26','#c0392b')+R(${x+22},176,30,28,'#ffe08a',3)+C(${x+54},220,5,'#ffcf4d',SK)+T(${x+36},248,11,'木屋',' fill="${c}"'));`);
  }
};

const OUT_VAR=[
  null,
  {sky:'#3d4d7a',bg:'#2c3a66',floor:'#1e4630',water:'#1d4e7a',deco:'moon',ink:'#f4efe4'},
  {sky:'#e7f6ff',bg:'#e8f6ff',floor:'#d7efc8',water:'#b7dff5',deco:'mist',ink:'#3e3428'},
  {sky:'#1b2144',bg:'#16192f',floor:'#152015',water:'#14243f',deco:'star',ink:'#f7f1e4'}
];
const IN_VAR=[
  null,
  {sky:'#ffc98a',bg:'#f0d0b0',floor:'#c9a078',deco:'moon',ink:'#3e3428'},
  {sky:'#d9ecff',bg:'#f7f3ea',floor:'#e6d8c4',deco:'mist',ink:'#3e3428'},
  {sky:'#14182e',bg:'#2a2744',floor:'#1c1a30',deco:'star',ink:'#f7f1e4'}
];

function props(desk, board, box, shelf, door, window, decorNote, nightNote){
  return {desk, board, box, shelf, door, window, decorNote, nightNote};
}

const LATER=[
  {art:'living', outdoor:false, emoji:'🛋️', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#ffe6c9', floor:'#e4c49a', sky:'#cfe9ff', ink:'#3e3428', deco:'sun',
    titles:['温馨客厅','傍晚客厅','清晨小房间','夜灯小房间'],
    props:props('茶几','全家福','玩具箱','电视柜','房门','窗帘','沙发软软的，台灯亮着暖光。','夜里只剩一盏小灯，窗帘拉上了。')},
  {art:'bedroom', outdoor:false, emoji:'🛏️', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#f6e9ff', floor:'#e7d4f2', sky:'#d9e6ff', ink:'#3e3428', deco:'sun',
    titles:['月亮卧室','夕阳卧室','薄雾卧室','星空卧室'],
    props:props('床头柜','梦的清单','收纳篮','衣柜','卧室门','小窗','枕头鼓鼓的，故事书摊在床上。','星星从窗户探进来。')},
  {art:'park', outdoor:true, emoji:'🌳', emojiDusk:'🌆', emojiNight:'🌃',
    bg:'#dff7e8', floor:'#8fd99a', sky:'#c9f2ff', water:'#8fd4f2', ink:'#243024', deco:'sun',
    titles:['林荫公园','黄昏公园','清晨公园','星空公园'],
    props:props('长椅','游园地图','野餐篮','售货亭','园门','大树','鸽子在小路边散步，风吹得树叶沙沙响。','路灯亮了，长椅上有一点湿。')},
  {art:'flower', outdoor:true, emoji:'🌷', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#e8ffe8', floor:'#b7e39a', sky:'#e7f8ff', ink:'#243024', deco:'sun',
    titles:['彩虹花园','暮色花园','晨露花园','夜香花园'],
    props:props('花坛沿','花名牌','种子盒','花架','花拱门','花窗','蜜蜂在花心里嗡嗡，花瓣上还有露水。','夜来香轻轻地香。')},
  {art:'river', outdoor:true, emoji:'🛶', emojiDusk:'🌅', emojiNight:'🌌',
    bg:'#c9f2ff', floor:'#8fd36a', sky:'#b9e6ff', water:'#3d9ad6', ink:'#1e3a32', deco:'sun',
    titles:['石头过河','暮色过河','晨雾过河','星夜过河'],
    props:props('岸边石桌','渡口牌','木箱','竹排','渡船','河柳','河水哗哗响，石头一颗颗露在水面上。','月亮掉进河里，渡船轻轻晃。')},
  {art:'bridge', outdoor:true, emoji:'🌉', emojiDusk:'🌇', emojiNight:'🌃',
    bg:'#e7f4ff', floor:'#d5e6c8', sky:'#cfeaff', water:'#4aa3e0', ink:'#243044', deco:'sun',
    titles:['石拱桥头','晚霞石桥','薄雾石桥','灯火石桥'],
    props:props('桥头石凳','桥名牌','竹篮','灯笼架','桥门','桥柳','桥洞下面水声轻轻的，栏杆摸上去凉凉的。','桥灯一盏盏亮起来。')},
  {art:'classroom', outdoor:false, emoji:'🏫', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#e7f4ff', floor:'#f0e2c4', sky:'#cfe9ff', ink:'#3e3428', deco:'sun',
    titles:['阳光教室','放学教室','早读教室','夜自习教室'],
    props:props('讲台','黑板','作业盒','书架','教室门','窗','黑板上还有没擦掉的算式，粉笔灰轻轻飘。','只有一排灯还亮着。')},
  {art:'hallway', outdoor:false, emoji:'🏫', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#f4f0e6', floor:'#e7dcc8', sky:'#d5e8f8', ink:'#3e3428', deco:'sun',
    titles:['校园走廊','放学走廊','清晨走廊','夜灯走廊'],
    props:props('休息椅','布告栏','失物箱','储物柜','楼梯口','走廊窗','地砖被踩得发亮，布告栏上别满了纸条。','走廊灯一格一格亮着。')},
  {art:'forest', outdoor:true, emoji:'🌲', emojiDusk:'🌇', emojiNight:'✨',
    bg:'#cfe8c8', floor:'#6aaa4a', sky:'#d7f0e4', ink:'#1e2e1e', deco:'sun',
    titles:['森林小路','黄昏林间','晨雾森林','萤火森林'],
    props:props('树桩','指路牌','小木箱','木柴堆','小木屋','树洞','阳光从叶子缝里漏下来，蘑菇一圈一圈。','萤火虫提着小灯笼。')},
  {art:'beach', outdoor:true, emoji:'🏖️', emojiDusk:'🌅', emojiNight:'🌙',
    bg:'#fff4d6', floor:'#f6e2b0', sky:'#c9f2ff', water:'#3aa0d8', ink:'#5a4630', deco:'sun',
    titles:['贝壳沙滩','晚霞沙滩','晨光沙滩','月夜沙滩'],
    props:props('沙桌','沙滩牌','冷藏箱','救生圈架','沙滩屋','椰树','浪花一排排走上来，沙子里藏着小贝壳。','月亮把海面铺成一条银路。')},
  {art:'farm', outdoor:true, emoji:'🚜', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#fff8dc', floor:'#c6e08a', sky:'#d7f3ff', ink:'#3e3420', deco:'sun',
    titles:['田野农庄','傍晚农庄','清晨农田','星夜谷仓'],
    props:props('木桌','丰收牌','菜筐','蔬果架','谷仓','田边','田垄绿绿的，稻草人举着手。','谷仓里有干草的味道。')},
  {art:'lotus', outdoor:true, emoji:'🪷', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#e7fff6', floor:'#1f7a8a', sky:'#d7f6ff', water:'#2f8fbf', ink:'#f7f1e4', deco:'sun',
    titles:['荷花池塘','暮色荷塘','晨雾荷塘','月下荷塘'],
    props:props('木码头','荷塘牌','竹篮','水榭','月洞门','远山','荷叶圆圆的，蜻蜓停在尖角上。','月洞门里倒映着灯。')},
  {art:'camp', outdoor:true, emoji:'⛺', emojiDusk:'🔥', emojiNight:'🌌',
    bg:'#2a3a55', floor:'#3e5a38', sky:'#24344e', ink:'#f7f1e4', deco:'star',
    titles:['星空露营','黄昏营地','晨雾营地','深夜营火'],
    props:props('木头凳','露营牌','冷藏盒','背包架','帐篷','远林','松树黑黑的，营火噼啪响。','火星轻轻往天上飘。')},
  {art:'treehouse', outdoor:true, emoji:'🌳', emojiDusk:'🌇', emojiNight:'🌙',
    bg:'#d7f3e4', floor:'#7dba62', sky:'#c9f0ff', ink:'#243024', deco:'sun',
    titles:['大树屋','晚霞树屋','晨光树屋','星夜树屋'],
    props:props('树枝台','树屋牌','宝箱','松鼠洞','树屋门','树窗','叶子沙沙响，绳子梯子晃一晃。','树屋里的小灯像一颗星。')},
  {art:'greenhouse', outdoor:false, emoji:'🪴', emojiDusk:'🌇', emojiNight:'✨',
    bg:'#e7fff2', floor:'#cfe8c4', sky:'#e9fff6', ink:'#1e3a2a', deco:'sun',
    titles:['玻璃温室','黄昏温室','晨露温室','灯下温室'],
    props:props('育苗台','浇水牌','花盆箱','绿植架','温室门','玻璃','玻璃上有小水珠，空气暖暖香香的。','植物灯把叶子照得亮亮的。')},
  {art:'rain', outdoor:true, emoji:'🌧️', emojiDusk:'🌃', emojiNight:'🌙',
    bg:'#d5e0ea', floor:'#9aa8b5', sky:'#c5d0dc', water:'#9ec4de', ink:'#f7f1e4', deco:'mist',
    titles:['雨中街道','傍晚小雨','清晨细雨','夜雨街头'],
    props:props('候车椅','雨天牌','邮筒','报摊','小店','橱窗','雨丝斜斜的，水洼里倒映着屋檐。','路灯在雨里晕开一圈光。')},
  {art:'market', outdoor:false, emoji:'🥬', emojiDusk:'🏮', emojiNight:'🌙',
    bg:'#fff6e8', floor:'#e7d3b0', sky:'#fff1d6', ink:'#3e3428', deco:'sun',
    titles:['清晨菜场','黄昏菜场','雾中菜场','灯笼菜场'],
    props:props('秤台','菜价牌','菜筐','货摊','菜场口','摊位','吆喝声热热闹闹，青菜上还带着水珠。','灯笼亮了，摊主开始收摊。')},
  {art:'snow', outdoor:true, emoji:'❄️', emojiDusk:'🌅', emojiNight:'🌙',
    bg:'#eef6ff', floor:'#f7fbff', sky:'#e7f2ff', ink:'#3e5670', deco:'sun',
    titles:['雪地木屋','晚霞雪屋','晨雪小路','星夜雪屋'],
    props:props('雪凳','雪地牌','雪橇','木柴堆','木屋','雪窗','雪软软的，脚印一串串通向木屋。','窗里的光把雪照成金色。')}
];

function applyVariant(base, v){
  const s=Object.assign({}, base);
  const pal=(base.outdoor?OUT_VAR:IN_VAR)[v]||null;
  if(pal) Object.assign(s, pal);
  s.variant=v;
  s.deco=(pal&&pal.deco)||base.deco||'sun';
  s.ink=s.ink||base.ink||'#3e3428';
  const title=base.titles[Math.min(v, base.titles.length-1)];
  s.name=title;
  s.titlePick=title;
  s.emoji=(v===3&&base.emojiNight)||(v===1&&base.emojiDusk)||base.emoji;
  if(v===3&&base.props.nightNote) s.props=Object.assign({}, base.props, {decorNote:base.props.nightNote});
  return s;
}

function drawArt(scene, mode){
  if(!scene.art||!ARTS[scene.art]) return null;
  return ARTS[scene.art](scene, mode);
}

module.exports={LATER, applyVariant, drawArt};
