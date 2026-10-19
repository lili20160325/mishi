'use strict';
/** Later-room scenes. Each place keeps its own light, palette, and silhouette. */

function pack(body){
  return `function(f){var s='';${body}\n  return s;}`;
}
function doorX(mode){const accent=(mode*37)%7;return 300+(accent%3)*4;}
function lin(id,a,b){
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>`;
}
function rad(id,a,b){
  return `<defs><radialGradient id="${id}" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}" stop-opacity="0"/></radialGradient></defs>`;
}
function el(cx,cy,rx,ry,f,ex){
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${f}"${ex||''}/>`;
}
const ARTS={
  living(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('lvW', scene.sky, scene.bg)}${rad('lvL', '#ffe7a3', '#ffe7a3')}';
  s+=R(0,0,400,300,'url(#lvW)');
  s+=R(0,228,400,72,'${scene.floor}');
  for(var i=0;i<6;i++)s+=P('M0 '+(236+i*10)+'H400','none',' stroke="#e7c89a" stroke-width="1" opacity=".45"');
  s+=C(268,176,78,'url(#lvL)');
  s+=R(248,150,8,78,'#8a5a32')+C(252,142,7,'#fff1c2')+C(252,142,16,'#ffe08a',' opacity=".55"');
  s+=el(200,268,150,22,'#e7b7c4');
  s+=R(78,236,210,28,'#f7d7cc',18,' stroke="#e7b8aa" stroke-width="2"')+R(92,222,150,22,'#ffe8df',14);
  s+=g('window',R(22,28,78,64,'${scene.sky2||scene.sky}',4,' stroke="#f3d5c4" stroke-width="6"')+R(22,28,16,64,'#f8c9d4')+R(84,28,16,64,'#f8c9d4')+T(61,108,11,'窗帘',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(132,36,118,70,'#fffaf3',2,' stroke="#e7c4a4" stroke-width="3"')+el(168,62,16,18,'#f3c2b0')+el(196,62,16,18,'#f3c2b0')+C(168,60,3,'#5b4636')+C(196,60,3,'#5b4636')+T(190,92,11,'全家福',' fill="#8a5a48"'));
  s+=g('desk',el(92,172,58,16,'#e7c7a2')+R(40,164,70,14,f.desk_open?'#fff6e0':'#d7b48a',4)+(f.desk_open?'':C(78,170,3,'#8a5a32'))+T(92,198,11,'茶几',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(196,168,62,40,'#e39b6a',10,' stroke="#c47c48" stroke-width="2"')+(f.box_open?R(204,174,46,26,'#ffe6c8',4):R(210,180,28,14,'#f2c14a',3))+T(226,222,11,'玩具箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,78,78,52,'#1c2430',6)+R(308,86,62,28,'#7eb6d6',2)+R(286,128,100,8,'#cbb89a',2)+T(336,156,12,'🪴'));
  s+=g('door',R(${x},150,64,128,'#f0d7b8',4,' stroke="#e0c2a0" stroke-width="3"')+C(${x+48},214,4,'#e7b84a')+T(${x+32},292,11,'房门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  bedroom(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('bdW', scene.sky, scene.bg)}${rad('bdM', '#fff6c8', '#fff6c8')}';
  s+=R(0,0,400,300,'url(#bdW)');
  s+=C(86,48,36,'url(#bdM)')+C(96,44,22,'${scene.sky}');
  for(var i=0;i<12;i++)s+=C((i*67+20)%380,(i*23+16)%90,i%3?1:1.6,'#fff',' opacity=".8"');
  s+=R(0,214,400,86,'${scene.floor}');
  s+=R(60,200,230,78,'#efe4ff',16,' stroke="#d5c4ee" stroke-width="2"')+R(78,188,120,24,'#fff',10)+R(210,190,50,20,'#ffd6e8',8);
  s+=g('window',R(200,22,70,58,'${scene.sky2||'#1a2448'}',20,' stroke="#cbb6e8" stroke-width="4"')+T(235,96,11,'小窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(124,118,130,36,'#2a2444',8)+T(188,136,12,'梦的清单',' fill="#f7e6ff"'));
  s+=g('desk',R(24,160,78,46,'#d9c4ea',8,' stroke="#b89ad4" stroke-width="2"')+R(32,168,40,20,f.desk_open?'#fff':'#cbb0e0',4)+(f.desk_open?'':C(58,178,3,'#6a4e88'))+T(62,220,11,'床头柜',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',el(230,176,28,16,'#f2b7cc')+(f.box_open?el(230,176,18,10,'#fff0f6'):'')+T(230,204,11,'收纳篮',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,36,78,150,'#3a3158',6)+R(310,70,58,6,'#6a5a90')+R(310,110,58,6,'#6a5a90')+T(338,92,14,'👕')+T(338,136,12,'📚'));
  s+=g('door',R(${x},148,60,130,'#4a3d68',6)+C(${x+46},214,4,'#ffe08a')+T(${x+30},292,11,'卧室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  park(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('pkS', scene.sky, scene.sky2)}';
  s+=R(0,0,400,300,'url(#pkS)');
  s+=R(0,168,400,132,'${scene.floor}');
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
  s+=g('door',R(${x+8},150,8,120,'#6b4428')+R(${x+58},150,8,120,'#6b4428')+P('M${x+8} 156 Q${x+36} 118 ${x+66} 156','none',' stroke="#2f8a40" stroke-width="8"')+T(${x+36},250,11,'园门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  flower(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('flS', scene.sky, scene.sky2)}${rad('flG', '#fff', '#fff')}';
  s+=R(0,0,400,300,'url(#flS)');
  s+=C(200,40,70,'url(#flG)',' opacity=".55"');
  s+=R(0,150,400,150,'${scene.floor}');
  s+=el(90,230,70,28,'#c98462');
  s+=el(200,250,80,26,'#b87455');
  s+=el(310,228,60,24,'#d09070');
  var cols=['#ff6fa5','#ffd23f','#fff','#ff8a5b','#e86bff','#ff4d6d'];
  for(var i=0;i<22;i++)s+=C(40+(i*37)%250,210+(i*19)%70,i%3?5:7,cols[i%6]);
  for(var k=0;k<8;k++)s+=C(250+(k*16)%120,200+(k*23)%60,4,cols[(k+2)%6]);
  s+=P('M${x-8} 280 Q${x+30} 90 ${x+78} 280','none',' stroke="#f2a0c0" stroke-width="10"');
  s+=P('M${x+6} 270 Q${x+30} 120 ${x+62} 270','none',' stroke="#7dce6a" stroke-width="3"');
  s+=C(250,196,14,'#b9e6f5',' stroke="#fff" stroke-width="3"');
  s+=g('window',C(62,78,22,'#ffe08a')+C(62,78,8,'#fff')+T(62,118,11,'花窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,28,130,40,'#fff',20,' stroke="#f2a0c4" stroke-width="3"')+T(182,48,12,'今日花名',' fill="#a14d72"'));
  s+=g('desk',R(24,168,100,16,'#d7a07a',8)+(f.desk_open?R(40,160,36,12,'#fff6e0',3):C(70,176,4,'#fff'))+T(74,200,11,'花坛沿',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,164,52,36,'#f6d56a',6,' stroke="#e0b040" stroke-width="2"')+(f.box_open?R(174,170,40,22,'#fff8d8',3):'')+T(194,214,11,'种子盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(250,70,36,90,'#8fbf62',4)+C(268,78,8,'#ff6fa5')+C(268,100,8,'#ffd23f')+C(268,122,8,'#fff')+T(268,168,11,'花架',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M${x} 200 Q${x+34} 130 ${x+68} 200 V280 H${x}z','#ffd0e4',' opacity=".35"')+T(${x+34},250,11,'花拱门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=T(40,140,14,'🦋');`);
  },
  river(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('rvS', scene.sky, scene.sky2)}${lin('rvW', scene.water, scene.water2||scene.sky2)}';
  s+=R(0,0,400,128,'url(#rvS)');
  s+=P('M0 118 Q80 96 160 114 T320 104 T400 120 V136 H0z','#3e8f46');
  s+=R(0,124,400,112,'url(#rvW)');
  s+=el(200,200,180,16,'#fff',' opacity=".18"');
  for(var i=0;i<6;i++)s+=P('M'+(i*70)+' 160 q20 8 40 0','none',' stroke="#e7f7ff" stroke-width="2" opacity=".55"');
  s+=el(86,156,16,8,'#efe6d4')+el(138,184,18,9,'#d9d0bc')+el(196,158,14,7,'#f7f1e4')+el(250,190,17,8,'#e4d8c4');
  s+=R(0,228,400,72,'${scene.floor}');
  for(var k=0;k<7;k++)s+=R(8+k*14,108,3,28,'#1f6b32');
  for(var n=0;n<5;n++)s+=R(300+n*12,112,3,26,'#14532a');
  s+=P('M18 150 C40 40 70 50 78 150','none',' stroke="#1f6b32" stroke-width="3"')+P('M30 150 C48 70 66 74 70 150','none',' stroke="#2f8a40" stroke-width="2"');
  s+=C(48,46,10,'#fff6c2')+el(70,168,18,4,'#fff6c2',' opacity=".35"');
  s+=g('window',P('M40 150 C55 60 90 70 96 148','#246b38')+T(70,168,11,'河柳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(132,24,8,70,'#6b4428')+R(140,30,108,40,'#f6e2b0',2,' stroke="#6b3e1e" stroke-width="3"')+T(194,50,12,'小心过河',' fill="#5b3a1e"'));
  s+=g('desk',el(90,186,52,14,'#d5cbb8')+R(48,178,36,10,f.desk_open?'#fff6e0':'#b7aa96',3)+T(90,214,11,'岸边石桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',P('M196 168 h60 l8 40 h-76z','#c98b52')+(f.box_open?P('M204 176 h44 l4 20 h-52z','#f0d2a4'):'')+T(226,224,11,'木箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,40,6,100,'#d7b07a')+R(324,28,6,112,'#c9a06a')+R(348,48,6,92,'#e2c48a')+T(326,150,11,'竹排',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M${x} 250 Q${x+36} 210 ${x+74} 250 L${x+66} 272 H${x+8}z','#f4e2c0')+P('M${x+36} 188 v28','none',' stroke="#8a5a32" stroke-width="3"')+P('M${x+16} 188 h40','none',' stroke="#f7f1e4" stroke-width="3"')+T(${x+36},236,11,'渡船',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=T(40,250,14,'🦆');`);
  },
  bridge(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('brS', scene.sky, scene.sky2)}${lin('brW', scene.water, scene.water2||'#7eb6d4')}';
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
  s+=g('door',R(${x},156,70,90,'#8d7b68',4)+P('M${x} 156 l35-24 35 24','#5c5148')+T(${x+34},230,11,'桥门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  classroom(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}');
  s+=R(0,236,400,64,'${scene.floor}');
  s+=P('M40 250 L120 236 L200 268 L80 286z','#ffe9a8',' opacity=".45"');
  for(var i=0;i<4;i++)s+=R(18+i*92,248,78,28,'#f6e6c8',2,' stroke="#e2d0ae" stroke-width="2"')+R(48+i*92,244,6,32,'#c9a06a');
  s+=g('window',R(16,18,92,86,'${scene.sky}',2,' stroke="#f7f1e4" stroke-width="6"')+P('M62 18v86M16 60h92','none',' stroke="#fff" stroke-width="3"')+T(62,118,11,'窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(122,14,176,108,'#14753a',2,' stroke="#8a5a32" stroke-width="7"')+R(130,108,160,8,'#c9a06a')+T(210,48,16,'今天的课',' fill="#fff"')+T(210,74,13,'认真审题',' fill="#d8ffe6"')+T(210,98,12,'先读再算',' fill="#b6f0cc"'));
  s+=g('desk',R(22,156,120,48,'#d7b07a',3,' stroke="#a67c52" stroke-width="2"')+R(34,166,64,22,f.desk_open?'#fff3d8':'#b8894a',2)+(f.desk_open?'':C(100,176,4,'#fff'))+T(80,220,11,'讲台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,168,58,36,'#f0c14a',3)+(f.box_open?R(174,174,46,22,'#fff6d0',2):R(180,178,28,12,'#e2a820',2))+T(196,220,11,'作业盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,20,92,140,'#f7f1e4',2,' stroke="#d7c4a4" stroke-width="3"')+R(300,36,10,28,'#e25b4a')+R(312,40,8,24,'#3d8bfd')+R(322,34,12,30,'#f2c14a')+R(336,42,8,22,'#3ecf8e')+R(300,90,10,28,'#9b59b6')+R(312,86,14,32,'#e67e22')+T(336,150,11,'书架',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},140,66,140,'#dfeaf6',2,' stroke="#9bb7d4" stroke-width="4"')+R(${x+14},154,38,36,'${scene.sky2||scene.sky}',2)+C(${x+50},214,4,'#c9a06a')+T(${x+32},292,11,'教室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  hallway(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('hwW', scene.bg, scene.sky)}';
  s+=R(0,0,400,300,'url(#hwW)');
  s+=P('M0 210 L160 150 H240 L400 210 V300 H0z','${scene.floor}');
  for(var i=0;i<7;i++)s+=P('M'+(40+i*46)+' 300 L'+(170+i*8)+' 160','none',' stroke="#fff" stroke-width="2" opacity=".35"');
  s+=R(0,150,70,160,'#d5dbe4')+R(330,150,70,160,'#d5dbe4');
  s+=g('window',R(8,28,70,70,'${scene.sky2||scene.sky}',2,' stroke="#fff" stroke-width="4"')+P('M43 28v70M8 62h70','none',' stroke="#d5e6f5" stroke-width="3"')+T(43,114,11,'走廊窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,36,150,70,'#f7f4ea',2,' stroke="#c5b89a" stroke-width="3"')+T(192,62,13,'失物招领',' fill="#5b4636"')+T(192,84,11,'红围巾 · 水壶',' fill="#888"'));
  s+=g('desk',R(24,176,110,16,'#c9d0da',6)+R(30,192,10,28,'#9aa3b0')+R(112,192,10,28,'#9aa3b0')+(f.desk_open?R(50,170,30,10,'#fff',2):'')+T(78,236,11,'休息椅',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,176,56,40,'#e39b4a',4)+(f.box_open?R(174,182,44,24,'#ffe6c2',2):'')+T(196,232,11,'失物箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,40,88,130,'#4e6a92',4)+R(300,52,22,36,'#eef3f8',2)+R(326,52,22,36,'#eef3f8',2)+R(352,52,22,36,'#eef3f8',2)+T(336,120,12,'🎒'));
  s+=g('door',R(${x},150,64,120,'#e07a32',3)+R(${x+12},164,40,28,'#f8e2c0',2)+T(${x+32},250,11,'楼梯口',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  forest(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('foS', scene.sky, scene.bg)}';
  s+=R(0,0,400,300,'url(#foS)');
  s+=R(0,0,400,90,'#0e3320',' opacity=".45"');
  s+=P('M120 40 L150 120 L90 120z','#ffe9a8',' opacity=".18"')+P('M200 20 L250 140 L150 140z','#fff6c8',' opacity=".12"');
  s+=R(0,214,400,86,'${scene.floor}');
  s+=P('M150 300 C190 200 200 160 210 120 C230 180 260 230 300 300z','#b08960');
  s+=R(6,20,22,230,'#3e2a1c')+R(48,40,16,200,'#4a3424')+R(360,10,26,240,'#2c2118')+C(16,24,30,'#143d24')+C(56,36,22,'#1c5a32')+C(374,16,36,'#102e1c');
  s+=C(36,250,6,'#e25b4a')+C(70,262,5,'#f2c14a')+C(250,258,5,'#f7f1e4')+C(280,246,6,'#c46b4a');
  s+=g('window',C(78,120,24,'#102e1c')+C(78,120,10,'#0a1a12')+T(78,160,11,'树洞',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(130,36,8,80,'#5a3a22')+R(138,48,100,46,'#e7d3a4',2,' stroke="#3e2a1c" stroke-width="3"')+T(188,72,12,'林中小路',' fill="#3e2a1c"'));
  s+=g('desk',el(86,186,36,16,'#8a5a32')+el(86,180,22,8,f.desk_open?'#e7c8a0':'#6b4423')+T(86,214,11,'树桩',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(176,168,60,40,'#a67c52',3)+(f.box_open?R(182,174,48,24,'#f0ddb4',2):'')+T(206,224,11,'小木箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,70,10,90,'#4a3424')+R(322,50,12,110,'#3e2a1c')+R(346,80,10,80,'#5a3a22')+C(328,150,7,'#e25b4a')+T(330,180,11,'木柴',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},156,68,110,'#c49a62',3)+P('M${x} 156 l34-26 34 26','#8d4a3a')+R(${x+20},178,28,22,'#f6e2a8',2)+T(${x+34},250,11,'小木屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  beach(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('bcS', scene.sky, scene.sky2)}${lin('bcW', scene.water, scene.water2||'#b7e6f5')}';
  s+=R(0,0,400,168,'url(#bcS)');
  s+=C(300,70,28,'#ffe56a')+C(300,70,46,'#ffe56a',' opacity=".3"');
  s+=R(0,150,400,46,'url(#bcW)');
  for(var i=0;i<5;i++)s+=P('M0 '+(162+i*6)+' q40 6 80 0 t80 0 t80 0 t80 0 t80 0','none',' stroke="#fff" stroke-width="2" opacity=".45"');
  s+=R(0,190,400,110,'${scene.floor}');
  s+=el(40,230,10,4,'#fff')+el(90,250,8,3,'#f7c6c6')+el(160,236,9,3,'#ffe08a')+P('M250 150 C270 90 300 100 310 160','#2f8a40')+R(276,150,8,40,'#c98b52');
  s+=P('M330 200 l28-36 28 36z','#ff7a7a',' opacity=".85"')+R(356,200,4,24,'#e7c99a');
  s+=g('window',P('M20 160 C40 40 90 50 100 160','#2f8a40')+T(60,150,11,'椰树',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(118,28,130,36,'#fff',18,' stroke="#e07a4a" stroke-width="3"')+T(182,46,12,'沙滩须知',' fill="#8a3e16"'));
  s+=g('desk',el(86,186,50,12,'#f3ddb0')+(f.desk_open?el(70,180,16,6,'#fff6e0'):'')+T(86,210,11,'沙桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(176,166,58,36,'#3aa0d8',6)+(f.box_open?R(182,172,46,22,'#e7f6ff',3):'')+T(204,218,11,'冷藏箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',C(320,90,22,'#f2c14a',' stroke="#e07a32" stroke-width="6"')+R(316,90,8,50,'#e07a32')+T(320,160,11,'救生圈',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},168,70,70,'#f6e2b8',4)+P('M${x} 168 l35-22 35 22','#e07a4a')+T(${x+34},230,11,'沙滩屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  farm(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('fmS', scene.sky, scene.sky2)}';
  s+=R(0,0,400,150,'url(#fmS)');
  s+=C(60,40,16,'#ffe56a');
  for(var i=0;i<7;i++)s+=R(0,150+i*22,400,22,i%2?'#7cb342':'#c6d84a');
  s+=R(210,78,6,78,'#5a3a22')+C(213,74,8,'#f2c14a')+R(196,96,40,5,'#5a3a22')+R(186,108,54,4,'#5a3a22');
  s+=g('window',R(16,28,70,50,'#e7f6c8',4,' stroke="#7cb342" stroke-width="3"')+T(50,90,11,'田边',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(100,24,120,40,'#fff8dc',2,' stroke="#c98b52" stroke-width="4"')+T(160,44,12,'丰收告示',' fill="#5b3a1e"'));
  s+=g('desk',R(20,168,110,28,'#e7c48a',3,' stroke="#a67c52" stroke-width="2"')+R(30,174,40,14,f.desk_open?'#fff6e0':'#c98b52',2)+T(74,212,11,'木桌',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(150,172,60,36,'#d7a05a',3)+(f.box_open?R(156,178,48,22,'#f8e2c0',2):'')+T(180,224,11,'菜筐',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,150,50,70,'#8fbf4a',3)+C(244,166,6,'#e25b4a')+C(262,180,6,'#f2c14a')+C(248,196,6,'#ff8a3a')+T(255,236,11,'蔬果',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},120,84,150,'#c0392b')+P('M${x} 120 l42-36 42 36','#922b21')+R(${x+28},170,28,60,'#f6e2b0',2)+T(${x+40},290,11,'谷仓',' fill="#fff"'));
  s+=T(30,270,14,'🐔');`);
  },
  lotus(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('ltS', scene.sky, scene.sky2)}${lin('ltW', scene.water, scene.water2||'#7ec8ea')}';
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
  s+=g('door',el(${x+34},200,36,48,'#f6e2b8')+el(${x+34},200,22,32,'${scene.water}')+T(${x+34},262,11,'月洞门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  camp(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('cpS', scene.sky, scene.sky2)}${rad('cpF', '#ffb15a', '#ff7a2a')}';
  s+=R(0,0,400,300,'url(#cpS)');
  for(var i=0;i<18;i++)s+=C((i*53+12)%390,(i*17+8)%120,i%4?1:1.8,'#fff8dc',' opacity=".9"');
  s+=R(0,176,400,124,'${scene.floor}');
  s+=P('M8 176 L28 70 L48 176z','#102818')+P('M340 176 L372 40 L400 176z','#0e2416');
  s+=C(110,230,46,'url(#cpF)')+P('M100 236 l10-28 12 20 8-16 10 24z','#ffcf70')+R(108,236,6,16,'#4a3424');
  s+=g('window',P('M24 150 L48 70 L72 150z','#143222')+T(48,168,11,'远林',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(130,40,120,36,'#f6e7c8',2,' stroke="#4a3424" stroke-width="3"')+T(190,58,12,'露营约定',' fill="#3e2a1c"'));
  s+=g('desk',R(20,186,120,10,'#6b4428',3)+R(16,178,128,8,'#8a5a32',2)+(f.desk_open?R(60,174,24,6,'#e7c8a0',1):'')+T(80,214,11,'木头凳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,170,58,36,'#3d5a68',4)+(f.box_open?R(174,176,46,22,'#d5e6ee',2):'')+T(196,222,11,'冷藏盒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(292,80,8,70,'#3e2a1c')+R(292,78,40,28,'#6b4428',3)+T(312,130,11,'背包',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',P('M${x} 272 L${x+36} 150 L${x+72} 272z','#f0a0a0')+P('M${x+36} 180 V260','none',' stroke="#5a3030" stroke-width="2"')+T(${x+36},248,11,'帐篷',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  treehouse(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('thS', scene.sky, scene.sky2)}';
  s+=R(0,0,400,300,'url(#thS)');
  s+=C(40,40,40,'#1f8a3c')+C(110,24,48,'#146b30')+C(190,36,36,'#2f9a48')+C(300,20,50,'#0f5a28')+C(370,48,32,'#1f7a38');
  s+=R(0,250,400,50,'${scene.floor}');
  s+=R(48,70,42,220,'#7a4e2c');
  s+=R(90,150,250,14,'#d7b07a');
  s+=P('M160 164 q60 30 30 90','none',' stroke="#c9a06a" stroke-width="4"');
  s+=g('window',R(150,96,64,40,'#fff3c4',4,' stroke="#7a4e2c" stroke-width="4"')+T(182,150,11,'树窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(230,70,110,32,'#f6e7c4',2,' stroke="#5a3a22" stroke-width="3"')+T(284,86,12,'大树屋',' fill="#3e2a1c"'));
  s+=g('desk',R(100,156,90,20,'#e2c48a',3)+(f.desk_open?R(120,150,30,10,'#fff6e0',2):'')+T(144,196,11,'树枝台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(210,164,52,32,'#c98b52',3)+(f.box_open?R(216,170,40,18,'#f3ddb8',2):'')+T(236,212,11,'宝箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',C(330,120,22,'#3aaa4a')+C(330,120,8,'#6b4428')+T(330,160,11,'松鼠洞',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},128,64,70,'#f0d7a8',4)+P('M${x} 128 l32-20 32 20','#c0392b')+R(${x+18},146,28,22,'#cfe8ff',2)+T(${x+32},220,11,'树屋门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  greenhouse(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('ghS', scene.sky, scene.floor)}';
  s+=R(0,0,400,300,'url(#ghS)');
  for(var i=0;i<9;i++)s+=P('M'+(i*48)+' 0 V300','none',' stroke="#fff" stroke-width="2" opacity=".35"');
  for(var j=0;j<6;j++)s+=P('M0 '+(j*52)+' H400','none',' stroke="#fff" stroke-width="2" opacity=".28"');
  s+=P('M40 300 C80 160 140 120 200 300','#b7e39a',' opacity=".55"')+P('M180 300 C240 140 320 160 360 300','#8fce7a',' opacity=".5"');
  s+=g('window',R(16,20,80,70,'#f4fff8',4,' stroke="#9ad7b2" stroke-width="4"')+T(56,108,11,'玻璃',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,22,150,64,'#f7fff6',4,' stroke="#3d9a62" stroke-width="4"')+T(194,46,13,'浇水时间',' fill="#145c32"')+T(194,68,11,'周一 · 周四',' fill="#3d9a62"'));
  s+=g('desk',R(20,160,120,40,'#d5ead0',4,' stroke="#7dae8a" stroke-width="2"')+R(30,168,50,18,f.desk_open?'#fff':'#b7d7b0',2)+C(130,172,8,'#3aaa4a')+T(78,216,11,'育苗台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(168,166,56,36,'#e7b15a',4)+(f.box_open?R(174,172,44,22,'#fff3d0',2):'')+T(196,218,11,'花盆箱',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(250,40,40,140,'#7dba78',6)+C(270,60,10,'#2f8a40')+C(270,90,12,'#ff8fb8')+C(270,124,9,'#3aaa4a')+T(270,196,11,'绿植',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},140,68,130,'#e7fff2',2,' stroke="#3d9a62" stroke-width="4"')+P('M${x+34} 140 V270','none',' stroke="#3d9a62" stroke-width="3"')+T(${x+34},250,11,'温室门',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  rain(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('rnS', scene.sky, scene.bg)}';
  s+=R(0,0,400,300,'url(#rnS)');
  s+=R(0,200,400,100,'${scene.floor}');
  s+=el(80,250,50,10,'#7ea4c0',' opacity=".55"')+el(200,270,36,8,'#9ec4de',' opacity=".4"');
  for(var i=0;i<36;i++)s+=P('M'+((i*29)%410)+' '+((i*17)%200)+' l-8 18','none',' stroke="#e7f2fb" stroke-width="1.6" opacity=".75"');
  s+=R(250,70,6,120,'#4a5968')+C(253,64,12,'#ffe08a')+C(253,64,28,'#ffe08a',' opacity=".25"');
  s+=g('window',R(16,24,84,64,'#d5e4f0',4,' stroke="#9aafc0" stroke-width="4"')+T(58,108,11,'橱窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,28,140,48,'#f7f4ea',2,' stroke="#7f8c9d" stroke-width="4"')+T(190,52,13,'雨天慢行',' fill="#2c3e50"'));
  s+=g('desk',R(20,176,110,18,'#9aafc0',6)+R(28,194,8,24,'#6d7c8a')+R(110,194,8,24,'#6d7c8a')+(f.desk_open?R(50,170,28,8,'#fff',2):'')+T(74,234,11,'候车椅',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(160,168,40,70,'#d64545',8)+R(168,188,24,8,'#f7f1e4')+T(180,252,11,'邮筒',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,50,70,100,'#3e4c5a',3)+T(264,90,14,'📰')+T(264,130,14,'☂️'));
  s+=g('door',R(${x},150,70,110,'#f2d16b',3)+P('M${x-8} 150 h86 l-8 14 H${x}z','#e67e22')+T(${x+34},240,11,'小店',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  },
  market(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+=R(0,0,400,300,'${scene.bg}');
  s+=R(0,210,400,90,'${scene.floor}');
  for(var i=0;i<10;i++)s+=R(i*40,0,40,58,i%2?'#e23b3b':'#f5d76e');
  s+=R(0,58,400,8,'#fff6e0');
  s+=C(40,160,16,'#3aaa4a')+C(78,168,14,'#e25b4a')+C(112,156,12,'#f2c14a')+C(150,170,13,'#ff8a3a');
  s+=g('window',R(16,78,80,60,'#fff8e6',3,' stroke="#e23b3b" stroke-width="4"')+T(56,156,11,'摊位',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(120,78,150,70,'#fff',2,' stroke="#e23b3b" stroke-width="5"')+T(194,100,14,'今日菜价',' fill="#c0392b"')+T(194,122,12,'青菜 3.5',' fill="#5b4636"')+T(194,140,12,'苹果 6.8',' fill="#5b4636"'));
  s+=g('desk',R(18,168,120,36,'#f7f1e4',3,' stroke="#c9b89a" stroke-width="2"')+R(28,176,36,16,f.desk_open?'#fff':'#e7d3b0',2)+T(78,220,11,'秤台',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',R(160,172,56,34,'#c98b52',2)+(f.box_open?R(166,178,44,20,'#f3ddb8',2):'')+T(188,222,11,'菜筐',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(230,80,70,110,'#a86b38',3)+C(248,100,8,'#e25b4a')+C(270,118,8,'#f2c14a')+C(252,140,8,'#3aaa4a')+T(264,176,11,'货摊',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},140,66,130,'#1f8a4c')+T(${x+32},250,11,'菜场口',' fill="#f7fff4"'));`);
  },
  snow(scene, mode){
    const x=doorX(mode);
    return pack(`
  s+='${lin('snS', scene.sky, scene.sky2)}';
  s+=R(0,0,400,300,'url(#snS)');
  s+=R(0,170,400,130,'${scene.floor}');
  s+=P('M0 190 Q40 160 80 190 T160 188 T240 176 T320 190 T400 170 V300 H0z','#fff');
  for(var i=0;i<20;i++)s+=C((i*61)%400,(i*29)%160,i%3?1.3:2.2,'#fff',' opacity=".9"');
  s+=P('M16 170 L36 90 L56 170z','#d7e6dc')+R(32,150,8,40,'#6e8f7a')+P('M48 180 L70 110 L92 180z','#e7f2ea');
  s+=C(250,150,22,'#fff')+C(292,156,18,'#fff')+C(262,142,3,'#3e5670')+C(278,142,3,'#3e5670')+P('M266 156 q8 6 16 0','none',' stroke="#e07a7a" stroke-width="2"');
  s+=g('window',R(100,28,60,48,'#d6ecff',8,' stroke="#fff" stroke-width="4"')+T(130,92,11,'雪窗',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('board',R(170,36,120,36,'#fff',4,' stroke="#b7c9dc" stroke-width="3"')+T(230,54,12,'雪地小路',' fill="#3e5670"'));
  s+=g('desk',el(70,190,46,12,'#fff')+el(70,186,20,6,f.desk_open?'#fff6e0':'#e4eef8')+T(70,214,11,'雪凳',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('box',P('M160 200 L210 168 L250 200z','#e25b4a')+R(188,198,28,8,'#f7f1e4',2)+T(200,222,11,'雪橇',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('shelf',R(300,120,8,50,'#8a5a32')+R(318,100,8,70,'#6b4428')+R(336,128,8,42,'#a67c52')+T(324,188,11,'木柴',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));
  s+=g('door',R(${x},130,70,110,'#f7efe4',3)+P('M${x} 130 l35-28 35 28','#c0392b')+R(${x+22},160,26,22,'#ffe08a',2)+T(${x+34},260,11,'木屋',' fill="#3a2e24" stroke="#fff" stroke-width="3" paint-order="stroke"'));`);
  }
};

function props(desk, board, box, shelf, door, window, decorNote, nightNote){
  return {desk, board, box, shelf, door, window, decorNote, nightNote};
}
function L(sky, sky2, floor, water, ink, water2, deco){
  return {sky, sky2, floor, water, water2:water2||water, ink, deco:deco||'sun'};
}

const LATER=[
  {art:'living', outdoor:false, emoji:'🛋️', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['温馨客厅','傍晚客厅','清晨小房间','夜灯小房间'],
    looks:[
      L('#fff1df','#ffe0c2','#e7c49a','#ffe0c2','#6a4632'),
      L('#f0b48a','#c98a62','#c49a78','#f0b48a','#4a3024','#f0b48a','moon'),
      L('#f7f3ea','#e7f0f8','#eadcc8','#e7f0f8','#5b4636','#e7f0f8','mist'),
      L('#2a2438','#3a3048','#241e30','#2a2438','#f7efe4','#2a2438','star')
    ],
    props:props('茶几','全家福','玩具箱','电视柜','房门','窗帘','沙发软软的，台灯亮着暖光。','夜里只剩一盏小灯，窗帘拉上了。')},
  {art:'bedroom', outdoor:false, emoji:'🛏️', emojiDusk:'🌇', emojiNight:'🌙', deco:'star',
    titles:['月亮卧室','夕阳卧室','薄雾卧室','星空卧室'],
    looks:[
      L('#1c2448','#3a2a58','#2a2444','#1c2448','#f4eaff'),
      L('#c46a4a','#6a3a58','#4a3048','#c46a4a','#fff1e4','#c46a4a','moon'),
      L('#d7e4f4','#efe6f8','#e4d8ee','#d7e4f4','#4a3a58','#d7e4f4','mist'),
      L('#0e1430','#1a1840','#16122c','#0e1430','#f7f1ff','#0e1430','star')
    ],
    props:props('床头柜','梦的清单','收纳篮','衣柜','卧室门','小窗','枕头鼓鼓的，故事书摊在床上。','星星从窗户探进来。')},
  {art:'park', outdoor:true, emoji:'🌳', emojiDusk:'🌆', emojiNight:'🌃', deco:'sun',
    titles:['林荫公园','黄昏公园','清晨公园','星空公园'],
    looks:[
      L('#7ecbff','#e7f8c8','#3aaa4a','#7ec8f0','#143018'),
      L('#f0a060','#6a8a4a','#2f6a32','#c47a4a','#f7f1e4','#c47a4a','moon'),
      L('#e7f6ff','#f4ffe8','#b7e39a','#d5eef8','#1e3a24','#d5eef8','mist'),
      L('#102033','#163024','#143222','#102033','#e8ffe8','#102033','star')
    ],
    props:props('长椅','游园地图','野餐篮','售货亭','园门','大树','鸽子在小路边散步，风吹得树叶沙沙响。','路灯亮了，长椅上有一点湿。')},
  {art:'flower', outdoor:true, emoji:'🌷', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['彩虹花园','暮色花园','晨露花园','夜香花园'],
    looks:[
      L('#ffd0e4','#fff6ea','#f3d7c4','#ffd6ea','#7a3a4a'),
      L('#e07aa0','#c46a88','#c9a090','#e07aa0','#fff0f4','#e07aa0','moon'),
      L('#fff0f6','#f7fff4','#efe2d0','#fff0f6','#6a4050','#fff0f6','mist'),
      L('#3a2040','#5a3058','#3a2838','#3a2040','#ffe6f2','#3a2040','star')
    ],
    props:props('花坛沿','花名牌','种子盒','花架','花拱门','花窗','蜜蜂在花心里嗡嗡，花瓣上还有露水。','夜来香轻轻地香。')},
  {art:'river', outdoor:true, emoji:'🛶', emojiDusk:'🌅', emojiNight:'🌌', deco:'sun',
    titles:['石头过河','暮色过河','晨雾过河','星夜过河'],
    looks:[
      L('#3d8fd4','#d7f1ff','#2f8a44','#0e5f98','#e8f6ff','#7ec8ea'),
      L('#e07a3a','#6a4a78','#245c38','#163e5c','#f7f1e4','#c46a3a','moon'),
      L('#d5e4ee','#f4f8fb','#b7d4b0','#c5dce8','#1e3a44','#e7f2f8','mist'),
      L('#071428','#12304e','#0e3328','#071e36','#d7f1ff','#1a4a72','star')
    ],
    props:props('岸边石桌','渡口牌','木箱','竹排','渡船','河柳','河水哗哗响，石头一颗颗露在水面上。','月亮掉进河里，渡船轻轻晃。')},
  {art:'bridge', outdoor:true, emoji:'🌉', emojiDusk:'🌇', emojiNight:'🌃', deco:'sun',
    titles:['石拱桥头','晚霞石桥','薄雾石桥','灯火石桥'],
    looks:[
      L('#9ec7ea','#e7eef4','#d9d3c8','#3d88b8','#2c3338','#8ec4de'),
      L('#e08a55','#6a5a78','#b7b1a6','#2a4a68','#f7f1e4','#c47a55','moon'),
      L('#e7eef2','#f7f4ea','#e4e0d8','#c5d5e0','#3a4044','#e7eef2','mist'),
      L('#141820','#2a3038','#1c2228','#0e2436','#f4efe6','#1a3a55','star')
    ],
    props:props('桥头石凳','桥名牌','竹篮','灯笼架','桥门','桥柳','桥洞下面水声轻轻的，栏杆摸上去凉凉的。','桥灯一盏盏亮起来。')},
  {art:'classroom', outdoor:false, emoji:'🏫', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['阳光教室','放学教室','早读教室','夜自习教室'],
    looks:[
      L('#f7f4ea','#fffaf2','#f0e2c4','#cfe6ff','#4a3a28','#fff'),
      L('#f0d2b0','#fff1df','#e2c8a4','#ffd0a8','#4a3a28','#ffd0a8','moon'),
      L('#f4f7f2','#f7fbff','#efe6d4','#d7e8f8','#3e4a3a','#d7e8f8','mist'),
      L('#243044','#1c2838','#2a241c','#1a2838','#f7f1e4','#1a2838','star')
    ],
    props:props('讲台','黑板','作业盒','书架','教室门','窗','黑板上还有没擦掉的算式，粉笔灰轻轻飘。','只有一排灯还亮着。')},
  {art:'hallway', outdoor:false, emoji:'🏫', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['校园走廊','放学走廊','清晨走廊','夜灯走廊'],
    looks:[
      L('#e7edf4','#f7f4ea','#d5dbe4','#d5e6f5','#2c3e50'),
      L('#f0c8a8','#e7d8c8','#c9c2b4','#ffd0a8','#3a3028','#ffd0a8','moon'),
      L('#eef3f6','#f7fbff','#e4e8ee','#e7f2f8','#3a4450','#e7f2f8','mist'),
      L('#1c2430','#2a3340','#1a222c','#141c28','#f4f7fb','#141c28','star')
    ],
    props:props('休息椅','布告栏','失物箱','储物柜','楼梯口','走廊窗','地砖被踩得发亮，布告栏上别满了纸条。','走廊灯一格一格亮着。')},
  {art:'forest', outdoor:true, emoji:'🌲', emojiDusk:'🌇', emojiNight:'✨', deco:'sun',
    titles:['森林小路','黄昏林间','晨雾森林','萤火森林'],
    looks:[
      L('#1e4d32','#cfe8c4','#2f6a38','#1e4d32','#e8ffe4'),
      L('#6a3a28','#c47a3a','#3a4a28','#6a3a28','#ffe8c8','#6a3a28','moon'),
      L('#d5e4d8','#eef6ea','#b7cfc0','#d5e4d8','#243028','#d5e4d8','mist'),
      L('#07140e','#10281c','#0c1c12','#07140e','#d6ffb0','#07140e','star')
    ],
    props:props('树桩','指路牌','小木箱','木柴堆','小木屋','树洞','阳光从叶子缝里漏下来，蘑菇一圈一圈。','萤火虫提着小灯笼。')},
  {art:'beach', outdoor:true, emoji:'🏖️', emojiDusk:'🌅', emojiNight:'🌙', deco:'sun',
    titles:['贝壳沙滩','晚霞沙滩','晨光沙滩','月夜沙滩'],
    looks:[
      L('#7ecbff','#fff6d8','#f6e2b0','#1f8fd0','#5a4630','#b7e6ff'),
      L('#ff8a5b','#ffd0a0','#e7c49a','#c45a3a','#fff6e8','#ffb080','moon'),
      L('#e7f6ff','#fffaf0','#f7edd4','#c5e4f2','#5a5040','#e7f6ff','mist'),
      L('#0e1c38','#1a3058','#1c2438','#0a2748','#f7f1e4','#16385c','star')
    ],
    props:props('沙桌','沙滩牌','冷藏箱','救生圈架','沙滩屋','椰树','浪花一排排走上来，沙子里藏着小贝壳。','月亮把海面铺成一条银路。')},
  {art:'farm', outdoor:true, emoji:'🚜', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['田野农庄','傍晚农庄','清晨农田','星夜谷仓'],
    looks:[
      L('#8fd4ff','#fff4c8','#8fbf4a','#8fd4ff','#3e3418'),
      L('#e07a3a','#f0c080','#6a8a32','#e07a3a','#fff6e0','#e07a3a','moon'),
      L('#e7f4ea','#f7fff0','#d5e8a8','#e7f4ea','#3e4428','#e7f4ea','mist'),
      L('#121c28','#1c2830','#1a2810','#121c28','#f7f1c8','#121c28','star')
    ],
    props:props('木桌','丰收牌','菜筐','蔬果架','谷仓','田边','田垄绿绿的，稻草人举着手。','谷仓里有干草的味道。')},
  {art:'lotus', outdoor:true, emoji:'🪷', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['荷花池塘','暮色荷塘','晨雾荷塘','月下荷塘'],
    looks:[
      L('#c9f2ff','#e7fff6','#1f7a8a','#1478a8','#f7fff8','#7ec8ea'),
      L('#e09070','#6a5078','#163e55','#1a4060','#fff0e8','#c46a55','moon'),
      L('#e7f6f8','#f4fffc','#d5eee8','#c5e4ea','#1e4a44','#e7f6f8','mist'),
      L('#0c1c30','#163048','#0e2430','#0a3050','#e8fff6','#123048','star')
    ],
    props:props('木码头','荷塘牌','竹篮','水榭','月洞门','远山','荷叶圆圆的，蜻蜓停在尖角上。','月洞门里倒映着灯。')},
  {art:'camp', outdoor:true, emoji:'⛺', emojiDusk:'🔥', emojiNight:'🌌', deco:'star',
    titles:['星空露营','黄昏营地','晨雾营地','深夜营火'],
    looks:[
      L('#121a33','#24344e','#1c3324','#121a33','#f7f1e4'),
      L('#e07a3a','#4a3058','#3a4030','#e07a3a','#fff1e0','#e07a3a','moon'),
      L('#c5d5c8','#e7eee4','#8aa888','#c5d5c8','#1e2e22','#c5d5c8','mist'),
      L('#070b18','#12182c','#10180f','#070b18','#ffe7c2','#070b18','star')
    ],
    props:props('木头凳','露营牌','冷藏盒','背包架','帐篷','远林','松树黑黑的，营火噼啪响。','火星轻轻往天上飘。')},
  {art:'treehouse', outdoor:true, emoji:'🌳', emojiDusk:'🌇', emojiNight:'🌙', deco:'sun',
    titles:['大树屋','晚霞树屋','晨光树屋','星夜树屋'],
    looks:[
      L('#79c8f0','#d7f6e4','#6aaa4a','#79c8f0','#143018'),
      L('#e09058','#8a6048','#4a6a32','#e09058','#fff1e0','#e09058','moon'),
      L('#e7f6ff','#f4fff4','#c6e4b8','#e7f6ff','#244028','#e7f6ff','mist'),
      L('#102033','#163028','#102818','#102033','#e8ffe4','#102033','star')
    ],
    props:props('树枝台','树屋牌','宝箱','松鼠洞','树屋门','树窗','叶子沙沙响，绳子梯子晃一晃。','树屋里的小灯像一颗星。')},
  {art:'greenhouse', outdoor:false, emoji:'🪴', emojiDusk:'🌇', emojiNight:'✨', deco:'sun',
    titles:['玻璃温室','黄昏温室','晨露温室','灯下温室'],
    looks:[
      L('#d8ffe8','#f4fff6','#c6efd0','#d8ffe8','#145c32'),
      L('#f0c090','#e7f0c8','#d7c8a0','#f0c090','#3a4a28','#f0c090','moon'),
      L('#f4fff8','#ffffff','#e7f6ea','#f4fff8','#245c3a','#f4fff8','mist'),
      L('#10281c','#163828','#102018','#10281c','#d8ffe8','#10281c','star')
    ],
    props:props('育苗台','浇水牌','花盆箱','绿植架','温室门','玻璃','玻璃上有小水珠，空气暖暖香香的。','植物灯把叶子照得亮亮的。')},
  {art:'rain', outdoor:true, emoji:'🌧️', emojiDusk:'🌃', emojiNight:'🌙', deco:'mist',
    titles:['雨中街道','傍晚小雨','清晨细雨','夜雨街头'],
    looks:[
      L('#8aa0b4','#c5d0dc','#6d7c8a','#8aa0b4','#f4f7fb'),
      L('#6a5a68','#a08078','#4a5560','#6a5a68','#f7f1e4','#6a5a68','moon'),
      L('#d5e0e8','#eef3f6','#b7c4ce','#d5e0e8','#2c3e50','#d5e0e8','mist'),
      L('#121820','#1c2834','#151c24','#121820','#e7f2fb','#121820','star')
    ],
    props:props('候车椅','雨天牌','邮筒','报摊','小店','橱窗','雨丝斜斜的，水洼里倒映着屋檐。','路灯在雨里晕开一圈光。')},
  {art:'market', outdoor:false, emoji:'🥬', emojiDusk:'🏮', emojiNight:'🌙', deco:'sun',
    titles:['清晨菜场','黄昏菜场','雾中菜场','灯笼菜场'],
    looks:[
      L('#fff6e4','#fffaf2','#e7d3b0','#fff6e4','#5b3a1e'),
      L('#f0b080','#fff0d8','#d7b898','#f0b080','#4a3018','#f0b080','moon'),
      L('#f4f7f2','#f7f4ea','#e4d8c4','#f4f7f2','#3e3a28','#f4f7f2','mist'),
      L('#2a2018','#3a2820','#241c14','#2a2018','#fff6e0','#2a2018','star')
    ],
    props:props('秤台','菜价牌','菜筐','货摊','菜场口','摊位','吆喝声热热闹闹，青菜上还带着水珠。','灯笼亮了，摊主开始收摊。')},
  {art:'snow', outdoor:true, emoji:'❄️', emojiDusk:'🌅', emojiNight:'🌙', deco:'sun',
    titles:['雪地木屋','晚霞雪屋','晨雪小路','星夜雪屋'],
    looks:[
      L('#d6ecff','#f7fbff','#f4f8fc','#d6ecff','#3e5670'),
      L('#f0b8c8','#ffe8dc','#f7e6ea','#f0b8c8','#5a4050','#f0b8c8','moon'),
      L('#eef6fb','#ffffff','#f7fbff','#eef6fb','#4a6070','#eef6fb','mist'),
      L('#1a2740','#24344e','#e8eef6','#1a2740','#2a3a52','#1a2740','star')
    ],
    props:props('雪凳','雪地牌','雪橇','木柴堆','木屋','雪窗','雪软软的，脚印一串串通向木屋。','窗里的光把雪照成金色。')}
];

function applyVariant(base, v){
  const look=(base.looks&&base.looks[Math.min(v, base.looks.length-1)])||{};
  const s=Object.assign({}, base, look, {variant:v});
  const title=base.titles[Math.min(v, base.titles.length-1)];
  s.name=title;
  s.titlePick=title;
  s.emoji=(v===3&&base.emojiNight)||(v===1&&base.emojiDusk)||base.emoji;
  s.deco=look.deco||base.deco||'sun';
  s.bg=look.sky2||look.sky;
  if(v===3&&base.props.nightNote) s.props=Object.assign({}, base.props, {decorNote:base.props.nightNote});
  return s;
}

function drawArt(scene, mode){
  if(!scene.art||!ARTS[scene.art]) return null;
  return ARTS[scene.art](scene, mode);
}

module.exports={LATER, applyVariant, drawArt};
