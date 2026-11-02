/*ROOMS-EXTRA-START*/
(function(G){
'use strict';
var R=G._R,T=G._T,P=G._P,C=G._C,SK=G._SK,g=G._g;
var m1={
  id:"m1",
  title:"暴雨门厅",
  emoji:"🌧️",
  sub:"序章 · 台风夜被锁",
  story:["台风“海棠”登陆的夜里，你回学校拿忘在教室的雨衣。","刚进旧教学楼门厅，“咔哒”——电动门锁上了！外面风雨交加。","告示栏上贴着湿边纸条：“别慌。顺着线索走，天亮前你能安全离开。——关心你的人”","谁留下了这些线索？先在门厅里找找看。"],
  objects:[
    {
      id:"window",
      name:"雨窗",
      box:[20,30,100,100],
      views:[
        {
          text:"玻璃上雨水噼啪作响。远处路灯一闪一闪。现在出不去。"
        }
      ]
    },
    {
      id:"board",
      name:"台风告示栏",
      box:[140,24,130,80],
      views:[
        {
          text:"学校台风应急提示，有几处被雨水晕开。右下角荧光笔字：",
          note:"台风夜请：关好门窗、关闭电器、留在室内。\n\n【英语题】Nikki: A typhoon is coming! Please _____ the windows.\nYafei: OK!\n（线索：关窗，5 字母）\n——这题像是后面房间的伏笔，门厅门锁不需要它。"
        }
      ]
    },
    {
      id:"desk",
      name:"前台抽屉",
      box:[40,150,120,70],
      views:[
        {
          if:["!desk_open"],
          text:"前台抽屉上着密码锁。缝里夹着被雨打湿的收据：",
          note:"【算一算】12.5 × 0.8 = ?\n（文具店台风夜账单：手电筒原价 12.5 元，打八折后多少元？）",
          lock:{
            kind:"num",
            len:3,
            dot:true,
            answer:"10",
            prompt:"输入账单金额",
            ok:{
              set:["desk_open"],
              text:"咔哒！抽屉开了，里面有一个没电的手电筒。"
            },
            bad:"打八折就是乘 0.8。"
          }
        },
        {
          if:["desk_open","!took_torch"],
          text:"抽屉里有一个手电筒。",
          take:{
            give:["torch"],
            set:["took_torch"],
            text:"你拿起手电筒，按了按——不亮，没有电池。"
          }
        },
        {
          text:"抽屉已经空了。"
        }
      ]
    },
    {
      id:"mat",
      name:"门口地垫",
      box:[160,230,120,40],
      views:[
        {
          if:["!took_bat"],
          text:"地垫一角卷起来，下面鼓鼓的。",
          take:{
            give:["battery"],
            set:["took_bat"],
            text:"地垫下藏着两节电池！"
          }
        },
        {
          text:"地垫下什么也没有了。"
        }
      ]
    },
    {
      id:"shelf",
      name:"昏暗置物架",
      box:[280,40,90,150],
      views:[
        {
          if:["!shelf_lit"],
          text:"置物架最下层黑乎乎的。",
          use:[
            {
              item:"torch_on",
              set:["shelf_lit"],
              text:"手电筒一照——角落里有一个蓝色小铁盒！"
            }
          ],
          wrong:"太黑了，得先有亮光。"
        },
        {
          if:["shelf_lit","!box_open"],
          text:"蓝色小铁盒上有汉字转盘。盒盖内侧贴着词语表残页：",
          note:"【成语填空】兄 ___ 弟 恭\n（想一想这个成语缺哪个字）",
          lock:{
            kind:"dial",
            opts:[["兄","弟","恭","天","了","友"]],
            answer:"友",
            prompt:"转到缺的那个字",
            ok:{
              set:["box_open"],
              give:["key_m1"],
              text:"“友”！盒子打开，里面是通往教室的钥匙，字条写着：“下一站：五年级教室。——L”"
            },
            bad:"再想想这个成语。"
          }
        },
        {
          text:"小铁盒已经空了。"
        }
      ]
    },
    {
      id:"door",
      name:"通往教室的门",
      box:[300,170,80,120],
      views:[
        {
          text:"门锁着。钥匙孔旁便签：“钥匙在蓝色小铁盒。”",
          use:[
            {
              item:"key_m1",
              win:true,
              text:"钥匙一转——门开了！走廊尽头，五年级教室还亮着一点光……"
            }
          ],
          wrong:"得先找到钥匙。"
        }
      ]
    }
  ],
  combos:[
    {
      a:"torch",
      b:"battery",
      give:["torch_on"],
      set:["made_torch"],
      text:"电池装进手电筒——亮了！"
    }
  ],
  hints:[
    {
      until:"desk_open",
      obj:"desk",
      tiers:["先看前台抽屉和收据。","12.5 × 0.8。","答案是 10。"]
    },
    {
      until:"took_torch",
      obj:"desk",
      tiers:["抽屉里有手电筒。","点前台拿起。","拿起来。"]
    },
    {
      until:"took_bat",
      obj:"mat",
      tiers:["手电筒没电，找电池。","地垫一角卷着。","点地垫拿起电池。"]
    },
    {
      until:"made_torch",
      tiers:["手电筒和电池可组合。","物品栏先后点两样。","先点手电筒再点电池。"]
    },
    {
      until:"shelf_lit",
      obj:"shelf",
      tiers:["置物架很暗。","用亮着手电筒点置物架。","选中再点。"]
    },
    {
      until:"box_open",
      obj:"shelf",
      tiers:["成语：兄 ___ 弟 恭。","兄弟友爱、恭敬。","缺「友」。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["用钥匙开门。","选中钥匙再点门。","开门。"]
    }
  ],
  explain:["账单 12.5 × 0.8 = 10，打开前台拿到手电筒。","地垫下电池；组合点亮手电筒。","成语「兄友弟恭」缺「友」，拿到教室钥匙。","告示栏英语 CLOSE 是后面的伏笔。"],
  solution:[["code","desk","10"],["take","desk"],["take","mat"],["combine","torch","battery"],["use","shelf","torch_on"],["code","shelf","友"],["use","door","key_m1"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#1a2744')+R(0,210,400,90,'#2a3348');
  for(var i=0;i<8;i++)s+=C(40+i*45,40+(i%3)*12,1.5,'#fff',' opacity=".7"');
  s+=P('M0 80 Q100 120 200 70 T400 90','none',' stroke="#4a6fa5" stroke-width="18" opacity=".35"');
  s+=g('window',R(20,30,100,90,'#0d1a30',4,SK)+R(28,38,38,34,'#3d6ea8',2)+R(72,38,38,34,'#3d6ea8',2)+T(70,136,11,'雨窗',' fill="#cde"'));
  s+=g('board',R(140,24,130,70,'#f5f0e0',4,' stroke="#8a7040" stroke-width="4"')+T(205,48,12,'台风告示',' fill="#5b4636"')+T(205,68,9,'CLOSE…',' fill="#a04040"'));
  s+=g('desk',R(40,150,120,16,'#8a5a32',4,SK)+R(50,166,100,50,'#6e4524',4,SK)+R(70,172,50,20,f.desk_open?'#fff1d0':'#a07040',3)+T(100,230,11,'前台',' fill="#eee"'));
  s+=g('mat',P('M160 250c0-16 120-16 120 0s-120 16-120 0z','#6b3a3a',SK)+(f.took_bat?'':T(220,248,14,'🔋')));
  s+=g('shelf',R(280,40,90,150,'#4a3a2a',4,SK)+(f.shelf_lit?(f.box_open?R(300,150,50,30,'#5b8cff',3):R(300,150,50,30,'#3d6adf',3)+T(325,165,12,'📦')):T(325,160,12,'···',' fill="#888"')));
  s+=g('door',R(300,170,80,120,'#5a4030',6,SK)+C(366,230,5,'#ffd34d',SK)+T(340,280,11,'通往教室',' fill="#eee"'));
  return s;}
};
var m2={
  id:"m2",
  title:"五年级教室",
  emoji:"🏫",
  sub:"第一章 · 湿透的听写本",
  story:["教室里只亮着应急灯。黑板上留着没写完的词语听写。","窗户关得很紧——有人按台风要求关过窗。","门再次锁上。你得拼出通往语文阅读角的通行证。"],
  objects:[
    {
      id:"board",
      name:"黑板",
      box:[30,20,200,90],
      views:[
        {
          text:"词语听写有一个字被雨水冲掉：",
          note:"【词语填空】桂 ___\n（秋天开的香香的花）\n旁边小字：柜子转盘要这个字。"
        }
      ]
    },
    {
      id:"window",
      name:"窗户",
      box:[300,20,80,70],
      views:[
        {
          text:"窗户关紧。窗台刻着 CLOSE——和门厅英语题对上了。"
        }
      ]
    },
    {
      id:"desk",
      name:"课桌抽屉",
      box:[40,140,140,70],
      views:[
        {
          if:["!desk_open"],
          text:"三位数密码锁。小纸条：",
          note:"【算一算】3.6 × 2.5 = ?\n（班费彩纸账）",
          lock:{
            kind:"num",
            len:3,
            dot:true,
            answer:"9",
            prompt:"输入得数",
            ok:{
              set:["desk_open"],
              text:"抽屉开了！"
            },
            bad:"再算 3.6 × 2.5。"
          }
        },
        {
          if:["desk_open","!took_half"],
          text:"抽屉里有半张通行证。",
          take:{
            give:["pass_half"],
            set:["took_half"],
            text:"你拿到半张通行证。还缺另一半。"
          }
        },
        {
          text:"抽屉空了。"
        }
      ]
    },
    {
      id:"cabinet",
      name:"教室柜子",
      box:[200,120,80,100],
      views:[
        {
          if:["!cab_open"],
          text:"柜门汉字转盘。看黑板词语：",
          note:"【词语填空】桂 ___",
          lock:{
            kind:"dial",
            opts:[["桂","秋","叶","香","树","花"]],
            answer:"花",
            prompt:"转到正确的字",
            ok:{
              set:["cab_open"],
              text:"“花”！柜门开了。"
            },
            bad:"秋天香香的花。"
          }
        },
        {
          if:["cab_open","!took_half2"],
          text:"柜子里有另一半通行证。",
          take:{
            give:["pass_half2"],
            set:["took_half2"],
            text:"你拿到另一半通行证。"
          }
        },
        {
          text:"柜子空了。"
        }
      ]
    },
    {
      id:"bag",
      name:"讲台旁书包",
      box:[290,160,70,50],
      views:[
        {
          if:["!read_bag"],
          text:"书包拉链开着，露出英语练习纸。",
          set:["read_bag"],
          note:"【英语题】【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.\n（线索：关灯，6 字母）\n纸角：这题留给广播室。"
        },
        {
          text:"练习纸提示关掉 lights，留给广播室。"
        }
      ]
    },
    {
      id:"door",
      name:"通往语文角的门",
      box:[320,140,70,140],
      views:[
        {
          text:"刷卡器亮着红灯：“请出示完整通行证。”",
          use:[
            {
              item:"pass_full",
              win:true,
              text:"嘀——绿灯！你推开通往语文阅读角的门。"
            }
          ],
          wrong:"需要把两半通行证拼起来。"
        }
      ]
    }
  ],
  combos:[
    {
      a:"pass_half",
      b:"pass_half2",
      give:["pass_full"],
      set:["made_pass"],
      text:"两半拼成完整通行证，背面画着笑脸。"
    }
  ],
  hints:[
    {
      until:"desk_open",
      obj:"desk",
      tiers:["先开课桌。","3.6 × 2.5。","得数是 9。"]
    },
    {
      until:"took_half",
      obj:"desk",
      tiers:["拿半张通行证。","点课桌拿起。","拿起来。"]
    },
    {
      until:"cab_open",
      obj:"board",
      tiers:["柜子和黑板词语有关。","桂 ___。","花。"]
    },
    {
      until:"took_half2",
      obj:"cabinet",
      tiers:["拿另一半。","点柜子。","拿起来。"]
    },
    {
      until:"made_pass",
      tiers:["组合两半通行证。","物品栏先后点。","拼起来。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["用完整通行证刷门。","选中再点门。","刷卡。"]
    }
  ],
  explain:["3.6 × 2.5 = 9，拿到半张通行证。","「桂花」缺「花」，打开柜子拿另一半。","拼成完整卡，刷进语文角。","书包 lights 题是广播室伏笔。"],
  solution:[["code","desk","9"],["take","desk"],["code","cabinet","花"],["take","cabinet"],["combine","pass_half","pass_half2"],["use","door","pass_full"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#e8f4ff')+R(0,220,400,80,'#d4c4a8');
  s+=g('board',R(30,20,200,90,'#2f6b4f',6,' stroke="#a86b38" stroke-width="6"')+T(130,50,13,'词语听写',' fill="#fff"')+T(130,75,11,'桂 ___',' fill="#d7f5e6"'));
  s+=g('desk',R(40,140,140,20,'#c98b52',4,SK)+R(50,160,120,50,'#b9793f',4,SK)+R(80,168,50,18,f.desk_open?'#fff6e0':'#d9a26c',3)+T(110,228,11,'课桌',' fill="#5b4636"'));
  s+=g('cabinet',R(200,120,80,100,'#e8b86d',4,SK)+(f.cab_open?R(205,130,30,80,'#fff1d6',3):'')+T(240,240,11,'柜子',' fill="#5b4636"'));
  s+=g('bag',R(290,160,70,50,'#4a7cff',10,SK)+T(325,185,14,'🎒')+T(325,230,11,'书包',' fill="#5b4636"'));
  s+=g('window',R(300,20,80,70,'#bfe8ff',4,SK)+T(340,105,11,'窗外风雨',' fill="#5b4636"'));
  s+=g('door',R(320,140,70,140,'#8fb6e8',6,SK)+C(375,210,5,'#ffd34d')+T(355,270,11,'通往语文角',' fill="#5b4636"'));
  return s;}
};
var m3={
  id:"m3",
  title:"语文阅读角",
  emoji:"📖",
  sub:"第一章 · 成语残页",
  story:["阅读角落地灯还亮着。沙发上摊着五上词语表复印件。","字条：“家家户户都知道的那个成语，能打开粉色盒子。——L”","「父慈子孝」也被圈了——会不会是干扰？"],
  objects:[
    {
      id:"poster",
      name:"成语墙",
      box:[20,20,110,100],
      views:[
        {
          text:"墙上成语练习，红笔圈了几处：",
          note:"①【成语填空】兄 ___ 弟 恭（门厅做过）\n②【成语填空】家 喻 户 ___\n（家家户户都知道，形容很有名）\n③【成语填空】父 慈 ___ 孝\n——③旁写着：干扰项，别被骗。"
        }
      ]
    },
    {
      id:"desk",
      name:"阅读桌抽屉",
      box:[150,140,120,70],
      views:[
        {
          if:["!desk_open"],
          text:"抽屉数字锁。桌垫下便签：",
          note:"【算一算】0.75 × 16 = ?\n（借书押金：每本 0.75 元，借 16 本）",
          lock:{
            kind:"num",
            len:3,
            dot:true,
            answer:"12",
            prompt:"输入押金总额",
            ok:{
              set:["desk_open"],
              text:"抽屉开了。"
            },
            bad:"0.75 × 16 = ？"
          }
        },
        {
          if:["desk_open","!took_note"],
          text:"里面有夹灯电池和纸条。",
          take:{
            give:["bat2"],
            set:["took_note"],
            text:"你拿走电池。纸条：“粉色百宝盒要成语②。”"
          }
        },
        {
          text:"抽屉空了。"
        }
      ]
    },
    {
      id:"box",
      name:"粉色百宝盒",
      box:[40,160,70,50],
      views:[
        {
          if:["!box_open"],
          text:"汉字转盘：",
          note:"【成语填空】家 喻 户 ___",
          lock:{
            kind:"dial",
            opts:[["家","喻","户","了","天","晓"]],
            answer:"晓",
            prompt:"转到缺字",
            ok:{
              set:["box_open"],
              give:["lib_card"],
              text:"“晓”！借阅卡，卡面写着：故乡的桂花。——L"
            },
            bad:"家家户户都知道……"
          }
        },
        {
          text:"百宝盒空了。"
        }
      ]
    },
    {
      id:"shelf",
      name:"书架",
      box:[280,20,100,180],
      views:[
        {
          if:["!side_lit"],
          text:"最高层夹着纸，看不清。旁有小夹灯。",
          use:[
            {
              item:"bat2",
              set:["side_lit"],
              take:["bat2"],
              text:"电池塞进夹灯——亮了！纸条：下一站图书室，密码提示与故乡有关。"
            }
          ],
          wrong:"小夹灯需要电池。"
        },
        {
          if:["side_lit"],
          text:"夹灯照着：下一站图书室。与「故乡」有关。"
        }
      ]
    },
    {
      id:"lamp",
      name:"落地灯",
      box:[195,100,40,50],
      views:[
        {
          text:"灯罩内侧小字：父慈子孝是干扰项。别急。"
        }
      ]
    },
    {
      id:"door",
      name:"通往图书室的门",
      box:[310,150,70,130],
      views:[
        {
          text:"门禁要刷借阅卡。",
          use:[
            {
              item:"lib_card",
              win:true,
              text:"嘀——图书室门开了。里面很暗，但借阅台亮着一盏灯。"
            }
          ],
          wrong:"需要粉色盒子里的借阅卡。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"desk_open",
      obj:"desk",
      tiers:["先开阅读桌。","0.75 × 16。","等于 12。"]
    },
    {
      until:"took_note",
      obj:"desk",
      tiers:["拿电池。","点抽屉。","拿起来。"]
    },
    {
      until:"box_open",
      obj:"poster",
      tiers:["盒子要成语②。","家喻户___。","晓。"]
    },
    {
      until:"side_lit",
      obj:"shelf",
      tiers:["电池给夹灯。","选中电池点书架。","装上。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["刷借阅卡。","选中卡点门。","刷卡。"]
    }
  ],
  explain:["0.75 × 16 = 12，拿到夹灯电池。","「家喻户晓」缺「晓」，得到借阅卡。","父慈子孝是干扰；夹灯确认下一站。","刷卡进图书室。"],
  solution:[["code","desk","12"],["take","desk"],["code","box","晓"],["use","shelf","bat2"],["use","door","lib_card"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#fff8e8')+R(0,220,400,80,'#e8d4b0');
  s+=g('poster',R(20,20,110,100,'#ffe0e8',4,SK)+T(75,55,12,'成语墙',' fill="#a04060"')+T(75,80,10,'家喻户___',' fill="#5b4636"'));
  s+=g('desk',R(150,140,120,18,'#a86b38',4,SK)+R(160,158,100,50,'#8a5428',4)+R(180,165,50,18,f.desk_open?'#fff1d0':'#c48a52',3)+T(210,230,11,'阅读桌',' fill="#5b4636"'));
  s+=g('box',R(40,160,70,50,'#ff9fc6',8,SK)+(f.box_open?R(48,168,54,34,'#fff',4):T(75,185,16,'🎀'))+T(75,230,11,'百宝盒',' fill="#5b4636"'));
  s+=g('shelf',R(280,20,100,180,'#b9793f',4,SK)+T(330,100,14,'📚')+T(330,210,11,'书架',' fill="#5b4636"'));
  s+=g('lamp',P('M200 140h30l-6-10h-18z','#7a5a3a')+R(210,100,10,40,'#7a5a3a')+P('M195 105l12-24h20l12 24z',f.side_lit?'#ffe08a':'#ff9fc6',SK));
  s+=g('door',R(310,150,70,130,'#c98b52',6,SK)+C(365,220,5,'#ffd34d')+T(345,270,11,'通往图书室',' fill="#5b4636"'));
  return s;}
};
var m4={
  id:"m4",
  title:"图书室暗角",
  emoji:"📚",
  sub:"第二章 · 逾期单与故乡",
  story:["图书室只亮着借阅台台灯。雷声滚过。","逾期单钉在公告板上。暗架需要光。","《故乡》书签里夹着字条：“带上保险柜里的证，去广播室。——L”"],
  objects:[
    {
      id:"board",
      name:"逾期公告板",
      box:[160,20,120,70],
      views:[
        {
          text:"逾期单被人改成算术条：",
          note:"【算一算】3.5 × 4 = ?\n（每天 3.5 角，逾期 4 天，一共多少角？）\n旁注：得数是借阅台密码。"
        }
      ]
    },
    {
      id:"desk",
      name:"借阅台",
      box:[160,150,120,70],
      views:[
        {
          if:["!desk_open"],
          text:"抽屉锁着。旁放《故乡》，书签露出空：",
          note:"【词语填空】___ 乡\n（自己出生或长大的地方）\n另附：【算一算】3.5 × 4 = ?",
          lock:{
            kind:"num",
            len:2,
            answer:"14",
            prompt:"输入逾期罚金（角）",
            ok:{
              set:["desk_open"],
              text:"抽屉开了，里面是亮着手电筒！"
            },
            bad:"看公告板 3.5 × 4。"
          }
        },
        {
          if:["desk_open","!took_torch"],
          text:"亮着手电筒。",
          take:{
            give:["torch_on"],
            set:["took_torch"],
            text:"你拿起亮着手电筒。"
          }
        },
        {
          text:"抽屉空了。书签上的字是「故」。"
        }
      ]
    },
    {
      id:"shelf",
      name:"暗架",
      box:[20,20,120,180],
      views:[
        {
          if:["!shelf_lit"],
          text:"书架深处一片黑。",
          use:[
            {
              item:"torch_on",
              set:["shelf_lit"],
              text:"光照进去：词语卡片提示保险柜转盘。"
            }
          ],
          wrong:"太暗了。"
        },
        {
          if:["shelf_lit"],
          text:"暗架卡片：",
          note:"【词语填空】___ 乡\n（自己出生或长大的地方）"
        }
      ]
    },
    {
      id:"safe",
      name:"小保险柜",
      box:[300,120,70,60],
      views:[
        {
          if:["!safe_open"],
          text:"汉字转盘（一字）：",
          note:"【词语填空】___ 乡",
          lock:{
            kind:"dial",
            opts:[["乡","家","土","园","里","故"]],
            answer:"故",
            prompt:"转到缺字",
            ok:{
              set:["safe_open"],
              give:["radio_pass"],
              text:"“故”！广播室通行证，背面写着 LIGHTS。"
            },
            bad:"故乡的「故」。"
          }
        },
        {
          text:"保险柜空了。"
        }
      ]
    },
    {
      id:"door",
      name:"通往广播室的门",
      box:[310,190,70,100],
      views:[
        {
          text:"需要广播室通行证。",
          use:[
            {
              item:"radio_pass",
              win:true,
              text:"通行证一刷。广播室里传来预录的台风英语广播……"
            }
          ],
          wrong:"需要小保险柜里的证。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"desk_open",
      obj:"board",
      tiers:["看逾期单或借阅台。","3.5 × 4。","14。"]
    },
    {
      until:"took_torch",
      obj:"desk",
      tiers:["拿手电筒。","点借阅台。","拿起来。"]
    },
    {
      until:"shelf_lit",
      obj:"shelf",
      tiers:["用手电照暗架。","选中再点暗架。","照亮。"]
    },
    {
      until:"safe_open",
      obj:"shelf",
      tiers:["___ 乡。","故乡。","故。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["刷广播室证。","选中点门。","刷卡。"]
    }
  ],
  explain:["3.5 × 4 = 14，拿到手电筒。","照亮暗架，确认「故乡」缺「故」。","保险柜得广播室通行证。","刷卡进入广播室。"],
  solution:[["code","desk","14"],["take","desk"],["use","shelf","torch_on"],["code","safe","故"],["use","door","radio_pass"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2030')+R(0,210,400,90,'#3a2a28');
  s+=g('shelf',R(20,20,120,180,'#5a4030',4,SK)+(f.shelf_lit?T(80,100,16,'📗'):T(80,100,12,'···',' fill="#666"'))+T(80,210,11,'暗架',' fill="#ccc"'));
  s+=g('desk',R(160,150,120,16,'#8a5a32',4)+R(170,166,100,50,'#6e4524',4)+R(190,172,50,18,f.desk_open?'#fff1d0':'#a07040',3)+T(220,235,11,'借阅台',' fill="#ccc"'));
  s+=g('board',R(160,20,120,70,'#f5f0e0',4,' stroke="#8a7040" stroke-width="3"')+T(220,45,11,'逾期单',' fill="#5b4636"')+T(220,65,10,'3.5×4',' fill="#a04040"'));
  s+=g('safe',R(300,120,70,60,'#555',6,SK)+(f.safe_open?R(320,140,30,20,'#222'):C(335,150,4,'#ffd34d'))+T(335,200,11,'小保险柜',' fill="#ccc"'));
  s+=g('door',R(310,190,70,100,'#6a5040',6,SK)+C(365,240,5,'#ffd34d')+T(345,280,11,'通往广播室',' fill="#ccc"'));
  return s;}
};
var m5={
  id:"m5",
  title:"英语广播室",
  emoji:"🎙️",
  sub:"第二章 · 台风广播稿",
  story:["扬声器循环播放教科版台风安全听力稿。","有人把录音停在关键句。调音台和磁带柜都锁着。","字条：“听清楚：关掉什么？雨衣比什么更好？——L”"],
  objects:[
    {
      id:"mic",
      name:"话筒",
      box:[50,80,60,100],
      views:[
        {
          text:"话筒开着。底座：Don't worry. Keep safe!"
        }
      ]
    },
    {
      id:"script",
      name:"广播稿",
      box:[140,40,140,90],
      views:[
        {
          text:"打印稿有挖空，铅笔注：",
          note:"【英语题】【听力·广播】Good morning! Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don't run. Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：Typhoon Haitang is coming on _____ afternoon.\n（线索：星期六）\n\n另：调音台要 6 字母——请关掉的东西。"
        }
      ]
    },
    {
      id:"panel",
      name:"调音台锁",
      box:[140,150,140,50],
      views:[
        {
          if:["!panel_open"],
          text:"字母锁。广播稿：请关掉的东西。",
          note:"【英语题】【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.\n（线索：关灯）",
          lock:{
            kind:"alpha",
            len:6,
            answer:"LIGHTS",
            prompt:"输入 6 个大写字母",
            ok:{
              set:["panel_open"],
              text:"LIGHTS！调音台弹出小钥匙。"
            },
            bad:"离开前请关掉 _____。"
          }
        },
        {
          if:["panel_open","!took_key"],
          text:"托盘里有小钥匙。",
          take:{
            give:["cab_key"],
            set:["took_key"],
            text:"你拿到磁带柜钥匙。"
          }
        },
        {
          text:"调音台已打开过。"
        }
      ]
    },
    {
      id:"cabinet",
      name:"磁带柜",
      box:[300,40,70,100],
      views:[
        {
          if:["!cab_open"],
          text:"上着锁。",
          use:[
            {
              item:"cab_key",
              set:["cab_open"],
              take:["cab_key"],
              text:"钥匙一转，柜门开了。"
            }
          ],
          wrong:"需要调音台里的钥匙。"
        },
        {
          if:["cab_open","!took_tape"],
          text:"EXIT 磁带，盒内侧有单词。",
          take:{
            give:["tape"],
            set:["took_tape"],
            text:"内侧：A raincoat is better than an _____。"
          }
        },
        {
          if:["cab_open","took_tape"],
          text:"盒上写着：",
          note:"【英语题】A raincoat is better than an _____.\n（线索：雨衣比雨伞更好，8 字母）"
        }
      ]
    },
    {
      id:"door",
      name:"通往储物间的门",
      box:[300,170,80,120],
      views:[
        {
          text:"字母锁。雨衣比什么更好？",
          note:"【英语题】A raincoat is better than an _____.\n（线索：雨衣比雨伞更好，8 字母）",
          lock:{
            kind:"alpha",
            len:8,
            answer:"UMBRELLA",
            prompt:"输入 8 个字母",
            ok:{
              win:true,
              text:"UMBRELLA！你进入文具储物间，空气里有纸板和胶水味。"
            },
            bad:"雨衣比 ___ 更好。"
          }
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"panel_open",
      obj:"script",
      tiers:["看广播稿/调音台。","关掉的东西，6 字母 L 开头。","LIGHTS。"]
    },
    {
      until:"took_key",
      obj:"panel",
      tiers:["拿小钥匙。","点调音台。","拿起来。"]
    },
    {
      until:"cab_open",
      obj:"cabinet",
      tiers:["钥匙开磁带柜。","选中钥匙点柜子。","开锁。"]
    },
    {
      until:"took_tape",
      obj:"cabinet",
      tiers:["拿磁带看提示。","点柜子拿起。","拿起来。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["门禁 umbrella。","8 字母。","UMBRELLA。"]
    }
  ],
  explain:["turn off the LIGHTS，打开调音台拿钥匙。","磁带提示 UMBRELLA。","门禁输入 UMBRELLA 进入储物间。","Saturday 是干扰信息。"],
  solution:[["code","panel","LIGHTS"],["take","panel"],["use","cabinet","cab_key"],["take","cabinet"],["code","door","UMBRELLA"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#1a2a3a')+R(0,210,400,90,'#2a3a4a');
  s+=g('mic',C(80,100,28,'#333',SK)+R(70,128,20,50,'#555')+T(80,200,11,'话筒',' fill="#dde"'));
  s+=g('script',R(140,40,140,90,'#fff8e0',4,SK)+T(210,70,11,'台风广播稿',' fill="#5b4636"')+T(210,95,9,'turn off…',' fill="#a04040"'));
  s+=g('panel',R(140,150,140,50,'#2a4a6a',6,SK)+R(160,160,30,30,f.panel_open?'#1a3a5a':'#3a5a7a',4)+T(210,220,11,'调音台',' fill="#dde"'));
  s+=g('cabinet',R(300,40,70,100,'#4a6070',4,SK)+(f.cab_open?R(308,50,54,80,'#3a5060',3):'')+T(335,160,11,'磁带柜',' fill="#dde"'));
  s+=g('door',R(300,170,80,120,'#3a5060',6,SK)+C(366,230,5,'#ffd34d')+T(340,280,11,'通往储物间',' fill="#dde"'));
  return s;}
};
var m6={
  id:"m6",
  title:"文具储物间",
  emoji:"📦",
  sub:"第二章 · 账单与拼图",
  story:["纸箱堆叠。墙上钉着台风夜采购账单。","木箱有锁。地上有胶水，货架有撕破的校园地图。","字条：“算清账单，拼好地图。——L”"],
  objects:[
    {
      id:"receipt",
      name:"采购账单",
      box:[140,40,120,80],
      views:[
        {
          text:"账单只剩一道算式清楚：",
          note:"【算一算】6.4 ÷ 0.8 = ?\n（胶带总价 6.4 元，每卷 0.8 元，买了几卷？）"
        }
      ]
    },
    {
      id:"shelf",
      name:"货架",
      box:[20,30,100,160],
      views:[
        {
          if:["!took_piece"],
          text:"撕成两半的地图，你只能先拿到左半。",
          take:{
            give:["map_a"],
            set:["took_piece"],
            text:"你拿到地图左半边。"
          }
        },
        {
          text:"货架上还有空纸箱。"
        }
      ]
    },
    {
      id:"box",
      name:"木箱",
      box:[140,150,100,50],
      views:[
        {
          if:["!box_open"],
          text:"密码锁。看账单：",
          note:"【算一算】6.4 ÷ 0.8 = ?",
          lock:{
            kind:"num",
            len:2,
            answer:"8",
            prompt:"输入卷数",
            ok:{
              set:["box_open"],
              text:"木箱开了！"
            },
            bad:"6.4 ÷ 0.8 = ？"
          }
        },
        {
          if:["box_open","!took_b"],
          text:"地图右半边，还有词语卡。",
          take:{
            give:["map_b"],
            set:["took_b"],
            text:"你拿到地图右半。卡片：【词语填空】欣 ___"
          }
        },
        {
          text:"木箱空了。"
        }
      ]
    },
    {
      id:"glue",
      name:"胶水",
      box:[270,160,40,50],
      views:[
        {
          if:["!took_glue"],
          text:"固体胶。",
          take:{
            give:["glue"],
            set:["took_glue"],
            text:"你拿起胶水。"
          }
        },
        {
          text:"胶水已拿走。"
        }
      ]
    },
    {
      id:"door",
      name:"通往实验室的门",
      box:[310,140,70,150],
      views:[
        {
          if:["!dial_ok"],
          text:"门上汉字转盘，旁贴「请出示完整地图」。转盘是欣赏缺字：",
          note:"【词语填空】欣 ___",
          lock:{
            kind:"dial",
            opts:[["欣","看","爱","悦","目","赏"]],
            answer:"赏",
            prompt:"转到缺字",
            ok:{
              set:["dial_ok"],
              text:"“赏”对了。还要把完整地图贴上门框。"
            },
            bad:"欣赏的第二个字。"
          }
        },
        {
          if:["dial_ok"],
          text:"转盘已对。把完整地图贴上门框。",
          use:[
            {
              item:"map_full",
              win:true,
              text:"地图贴上——实验室路线亮起。你推门进入科学实验室。"
            }
          ],
          wrong:"先把两半地图用胶水拼成完整地图。"
        }
      ]
    }
  ],
  combos:[
    {
      a:"map_a",
      b:"map_b",
      give:["map_ab"],
      set:["maps_joined"],
      text:"两半对上了，还缺胶水粘牢。"
    },
    {
      a:"map_ab",
      b:"glue",
      give:["map_full"],
      set:["map_glued"],
      text:"粘牢！完整校园地图，实验室用红圈标出。"
    }
  ],
  hints:[
    {
      until:"took_piece",
      obj:"shelf",
      tiers:["拿地图左半。","点货架。","拿起来。"]
    },
    {
      until:"box_open",
      obj:"receipt",
      tiers:["账单算木箱密码。","6.4 ÷ 0.8。","8。"]
    },
    {
      until:"took_b",
      obj:"box",
      tiers:["拿地图右半。","点木箱。","拿起来。"]
    },
    {
      until:"took_glue",
      obj:"glue",
      tiers:["拿胶水。","点胶水。","拿起来。"]
    },
    {
      until:"maps_joined",
      tiers:["组合两半地图。","物品栏点两半。","拼。"]
    },
    {
      until:"map_glued",
      tiers:["地图再和胶水组合。","点未粘牢地图再点胶水。","粘牢。"]
    },
    {
      until:"dial_ok",
      obj:"door",
      tiers:["转盘欣 ___。","欣赏。","赏。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["用完整地图点门。","选中地图点门。","贴上。"]
    }
  ],
  explain:["6.4 ÷ 0.8 = 8，打开木箱。","两半地图 + 胶水 = 完整地图。","「欣赏」缺「赏」；贴地图进实验室。"],
  solution:[["take","shelf"],["code","box","8"],["take","box"],["take","glue"],["combine","map_a","map_b"],["combine","map_ab","glue"],["code","door","赏"],["use","door","map_full"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#3a3428')+R(0,210,400,90,'#2a2418');
  s+=g('shelf',R(20,30,100,160,'#6a5a40',4,SK)+T(70,100,16,'📦')+T(70,210,11,'货架',' fill="#eee"'));
  s+=g('receipt',R(140,40,120,80,'#fffaf0',4,SK)+T(200,70,11,'文具账单',' fill="#5b4636"')+T(200,95,10,'6.4÷0.8',' fill="#a04040"'));
  s+=g('box',R(140,150,100,50,'#c48a52',6,SK)+(f.box_open?R(150,158,80,34,'#e8c898',3):'')+T(190,220,11,'木箱',' fill="#eee"'));
  s+=g('glue',R(270,160,40,50,'#fff',4,SK)+T(290,185,14,'🧴')+T(290,230,11,'胶水',' fill="#eee"'));
  s+=g('door',R(310,140,70,150,'#5a4a30',6,SK)+C(365,210,5,'#ffd34d')+T(345,280,11,'通往实验室',' fill="#eee"'));
  return s;}
};
var m7={
  id:"m7",
  title:"科学实验室",
  emoji:"🔬",
  sub:"第三章 · 试剂柜",
  story:["玻璃器皿反着应急灯光。实验记录本翻开着。","试剂柜要密码。字条：“算完浓度，记得成语——倾盆大雨今晚应验了。——L”"],
  objects:[
    {
      id:"beaker",
      name:"烧杯",
      box:[80,80,40,60],
      views:[
        {
          text:"烧杯壁上用油性笔写：干扰数据 9.9×9.9，别用这个。"
        }
      ]
    },
    {
      id:"note",
      name:"实验记录",
      box:[220,210,80,40],
      views:[
        {
          text:"记录本：",
          note:"【算一算】2.5 × 4.8 = ?\n（试剂：每瓶 2.5 毫升，取 4.8 瓶的量，一共多少毫升？）\n得数是试剂柜密码。\n另见：【成语填空】___ 盆 大 雨"
        }
      ]
    },
    {
      id:"table",
      name:"实验台抽屉",
      box:[40,140,160,70],
      views:[
        {
          if:["!table_open"],
          text:"抽屉锁。看实验记录：",
          note:"【算一算】2.5 × 4.8 = ?",
          lock:{
            kind:"num",
            len:3,
            dot:true,
            answer:"12",
            prompt:"输入毫升数",
            ok:{
              set:["table_open"],
              text:"抽屉开了，里面有一张写着「倾」字的提示卡。"
            },
            bad:"2.5 × 4.8 = ？"
          }
        },
        {
          if:["table_open","!read_tip"],
          text:"提示卡：试剂柜转盘要「倾盆大雨」的缺字。",
          set:["read_tip"],
          note:"【成语填空】___ 盆 大 雨\n（雨像盆里的水倒下来一样大）"
        },
        {
          text:"抽屉空了。提示是「倾盆大雨」。"
        }
      ]
    },
    {
      id:"locker",
      name:"试剂柜",
      box:[220,40,80,140],
      views:[
        {
          if:["!locker_open"],
          text:"汉字转盘：",
          note:"【成语填空】___ 盆 大 雨",
          lock:{
            kind:"dial",
            opts:[["盆","大","雨","下","暴","倾"]],
            answer:"倾",
            prompt:"转到缺字",
            ok:{
              set:["locker_open"],
              text:"“倾”！柜门开了。"
            },
            bad:"雨像盆倒下来。"
          }
        },
        {
          if:["locker_open","!took_chip"],
          text:"里面有门禁芯片。",
          take:{
            give:["chip"],
            set:["took_chip"],
            text:"你拿到旧楼走廊门禁芯片。"
          }
        },
        {
          text:"试剂柜空了。"
        }
      ]
    },
    {
      id:"door",
      name:"通往走廊的门",
      box:[320,120,70,160],
      views:[
        {
          text:"门禁刷芯片。",
          use:[
            {
              item:"chip",
              win:true,
              text:"嘀——你进入旧教学楼走廊。应急灯忽明忽暗。"
            }
          ],
          wrong:"需要试剂柜里的芯片。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"table_open",
      obj:"note",
      tiers:["看实验记录算抽屉密码。","2.5 × 4.8。","12。"]
    },
    {
      until:"read_tip",
      obj:"table",
      tiers:["看看抽屉里的提示。","点实验台。","读提示卡。"]
    },
    {
      until:"locker_open",
      obj:"note",
      tiers:["___ 盆 大 雨。","倾盆大雨。","倾。"]
    },
    {
      until:"took_chip",
      obj:"locker",
      tiers:["拿芯片。","点试剂柜。","拿起来。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["刷芯片出门。","选中芯片点门。","刷卡。"]
    }
  ],
  explain:["2.5 × 4.8 = 12，打开实验台。","「倾盆大雨」缺「倾」，拿到门禁芯片。","烧杯上的 9.9×9.9 是干扰。","刷芯片进入走廊。"],
  solution:[["code","table","12"],["look","table"],["code","locker","倾"],["take","locker"],["use","door","chip"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#e8f8f0')+R(0,210,400,90,'#c8e0d0');
  s+=g('table',R(40,140,160,20,'#8a9a9a',4,SK)+R(50,160,140,50,'#6a7a7a',4)+T(120,230,11,'实验台',' fill="#5b4636"'));
  s+=g('beaker',R(80,80,40,50,'#a8e0ff',4,' stroke="#4a8aaa" stroke-width="3"')+T(100,150,11,'烧杯',' fill="#5b4636"'));
  s+=g('locker',R(220,40,80,140,'#6a8aaa',4,SK)+(f.locker_open?R(228,50,64,120,'#8ab0c8',3):'')+T(260,200,11,'试剂柜',' fill="#5b4636"'));
  s+=g('note',R(220,210,80,40,'#fff8e0',4,SK)+T(260,230,10,'实验记录',' fill="#5b4636"'));
  s+=g('door',R(320,120,70,160,'#5a8a6a',6,SK)+C(375,200,5,'#ffd34d')+T(355,270,11,'通往走廊',' fill="#5b4636"'));
  return s;}
};
var m8={
  id:"m8",
  title:"旧楼走廊",
  emoji:"🚪",
  sub:"第三章 · 电闸与疏散",
  story:["走廊应急灯快灭了。电闸箱报警灯闪烁。","储物柜锁着。疏散图被撕掉一角。","字条：“先恢复照明。保险丝在柜里。校长室见。——L”"],
  objects:[
    {
      id:"sign",
      name:"疏散图",
      box:[270,40,100,60],
      views:[
        {
          text:"疏散图缺一角，残页写着算术：",
          note:"【算一算】15 ÷ 0.5 = ?\n（走廊 15 米，每 0.5 米一个应急灯位，共几个灯位？）\n——得数是储物柜密码。"
        }
      ]
    },
    {
      id:"light",
      name:"应急灯",
      box:[180,20,40,80],
      views:[
        {
          if:["!power"],
          text:"应急灯不亮。旁边接线：需要先合闸。"
        },
        {
          if:["power"],
          text:"应急灯亮了，照出储物柜密码提示你已经用过。"
        }
      ]
    },
    {
      id:"locker",
      name:"储物柜",
      box:[160,120,90,80],
      views:[
        {
          if:["!locker_open"],
          text:"数字锁。看疏散图残页：",
          note:"【算一算】15 ÷ 0.5 = ?",
          lock:{
            kind:"num",
            len:2,
            answer:"30",
            prompt:"输入灯位数",
            ok:{
              set:["locker_open"],
              text:"柜门开了！"
            },
            bad:"15 ÷ 0.5 = ？"
          }
        },
        {
          if:["locker_open","!took_fuse"],
          text:"里面有保险丝，还有英语便签。",
          take:{
            give:["fuse"],
            set:["took_fuse"],
            text:"你拿到保险丝。便签：【英语题】Stay away from _____! (trees)"
          }
        },
        {
          text:"储物柜空了。"
        }
      ]
    },
    {
      id:"panel",
      name:"电闸箱",
      box:[40,120,80,70],
      views:[
        {
          if:["!panel_ok"],
          text:"电闸缺保险丝。箱盖内侧：",
          note:"【英语题】Stay away from _____! (trees)\n（线索：树，5 字母）\n——合闸后才显示校长室门锁提示。",
          use:[
            {
              item:"fuse",
              set:["panel_ok","power"],
              take:["fuse"],
              text:"装上保险丝，一拨——走廊亮了！箱内液晶屏显示：校长室钥匙在「TREES」锁里……不对，是字母锁答案 TREES？屏上写：DOOR CODE = TREES"
            }
          ],
          wrong:"需要保险丝。"
        },
        {
          if:["panel_ok"],
          text:"电闸已合。屏上：DOOR CODE = TREES",
          note:"【英语题】Stay away from _____! (trees)"
        }
      ]
    },
    {
      id:"door",
      name:"通往校长室的门",
      box:[300,140,80,140],
      views:[
        {
          if:["!power"],
          text:"门锁着，门禁屏黑着。先恢复走廊照明。",
          wrong:"先让电闸工作。"
        },
        {
          if:["power","!door_code"],
          text:"字母锁亮起。电闸屏提示：",
          note:"【英语题】Stay away from _____! (trees)",
          lock:{
            kind:"alpha",
            len:5,
            answer:"TREES",
            prompt:"输入 5 字母",
            ok:{
              set:["door_code"],
              give:["office_key"],
              text:"TREES！锁盒弹出校长室钥匙。"
            },
            bad:"台风时远离什么？"
          }
        },
        {
          if:["door_code"],
          text:"用钥匙开门。",
          use:[
            {
              item:"office_key",
              win:true,
              text:"校长室门开了。桌上台灯亮着，像有人刚离开。"
            }
          ],
          wrong:"用刚拿到的钥匙。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"locker_open",
      obj:"sign",
      tiers:["看疏散图算式。","15 ÷ 0.5。","30。"]
    },
    {
      until:"took_fuse",
      obj:"locker",
      tiers:["拿保险丝。","点储物柜。","拿起来。"]
    },
    {
      until:"panel_ok",
      obj:"panel",
      tiers:["保险丝装进电闸。","选中保险丝点电闸箱。","合闸。"]
    },
    {
      until:"door_code",
      obj:"door",
      tiers:["门禁 TREES。","远离树木。","TREES。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["用校长室钥匙。","选中钥匙点门。","开门。"]
    }
  ],
  explain:["15 ÷ 0.5 = 30，打开储物柜拿保险丝。","合闸恢复照明，得知门码 TREES。","Stay away from TREES，拿到校长室钥匙并进入。"],
  solution:[["code","locker","30"],["take","locker"],["use","panel","fuse"],["code","door","TREES"],["use","door","office_key"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#2a2a3a')+R(0,200,400,100,'#3a3a4a');
  s+=g('light',C(200,40,20,f.power?'#ffe08a':'#555')+R(195,60,10,30,'#666')+T(200,110,11,'应急灯',' fill="#ccc"'));
  s+=g('panel',R(40,120,80,70,'#444',4,SK)+R(55,135,50,40,f.panel_ok?'#2a5a2a':'#5a2a2a',3)+T(80,210,11,'电闸箱',' fill="#ccc"'));
  s+=g('locker',R(160,120,90,80,'#5a5a6a',4,SK)+(f.locker_open?R(170,130,70,60,'#3a3a4a',3):'')+T(205,220,11,'储物柜',' fill="#ccc"'));
  s+=g('sign',R(270,40,100,60,'#f5f0e0',4,SK)+T(320,70,11,'疏散图',' fill="#5b4636"'));
  s+=g('door',R(300,140,80,140,'#4a4a5a',6,SK)+C(366,210,5,'#ffd34d')+T(340,270,11,'通往校长室',' fill="#ccc"'));
  return s;}
};
var m9={
  id:"m9",
  title:"校长室谜匣",
  emoji:"🗝️",
  sub:"第三章 · 真相信件",
  story:["校长室台灯亮着。相框里是去年运动会合影——值日老师林老师笑着比耶。","桌上有封未拆的信，写着你的名字。保险柜在角落低鸣。","是时候揭开“L”是谁了。"],
  objects:[
    {
      id:"photo",
      name:"合影相框",
      box:[80,30,100,80],
      views:[
        {
          text:"合影背面用铅笔写：L = 林。台风安全演练版密室，是我设计的。别怕，校门密码在信里。"
        }
      ]
    },
    {
      id:"letter",
      name:"信封",
      box:[200,40,80,50],
      views:[
        {
          if:["!read_letter"],
          text:"信封未拆。",
          set:["read_letter"],
          note:"亲爱的同学：\n如果你读到这里，说明你又冷静又聪明。\n校门四位密码 = 下面这道题的答案。\n【算一算】7.5 × 1.2 = ?\n保险柜转盘：【成语填空】惊 ___ 失 措（今晚你没有这样，真棒）\n——林老师"
        },
        {
          text:"林老师的信：校门密码是 7.5 × 1.2 的得数；保险柜要「惊慌失措」缺字。"
        }
      ]
    },
    {
      id:"desk",
      name:"办公桌抽屉",
      box:[60,140,180,70],
      views:[
        {
          if:["!desk_open"],
          text:"抽屉锁，旁贴信里的算式：",
          note:"【算一算】7.5 × 1.2 = ?",
          lock:{
            kind:"num",
            len:2,
            answer:"9",
            prompt:"输入得数",
            ok:{
              set:["desk_open"],
              text:"抽屉开了。"
            },
            bad:"7.5 × 1.2 = ？"
          }
        },
        {
          if:["desk_open","!took_slip"],
          text:"里面有出门密码条（先空着）和真相说明复印件。",
          take:{
            give:["truth_note"],
            set:["took_slip"],
            text:"你拿走真相信复印件。密码条写着：先打开保险柜。"
          }
        },
        {
          text:"抽屉空了。"
        }
      ]
    },
    {
      id:"safe",
      name:"保险柜",
      box:[260,100,80,70],
      views:[
        {
          if:["!safe_open"],
          text:"汉字转盘：",
          note:"【成语填空】惊 ___ 失 措",
          lock:{
            kind:"dial",
            opts:[["惊","失","措","慌","恐","怕"]],
            answer:"慌",
            prompt:"转到缺字",
            ok:{
              set:["safe_open"],
              give:["master_key","code_slip"],
              text:"“慌”！柜里是校门钥匙，和写着「9」的密码条（7.5×1.2）。"
            },
            bad:"惊慌失措。"
          }
        },
        {
          text:"保险柜空了。"
        }
      ]
    },
    {
      id:"door",
      name:"通往校门的门",
      box:[310,150,70,130],
      views:[
        {
          text:"需要校门钥匙。",
          use:[
            {
              item:"master_key",
              win:true,
              text:"你握紧钥匙和密码条，冲向风雨中的校门……"
            }
          ],
          wrong:"先打开保险柜拿到钥匙。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"read_letter",
      obj:"letter",
      tiers:["先读桌上的信。","点信封。","读完。"]
    },
    {
      until:"desk_open",
      obj:"letter",
      tiers:["抽屉密码在信里。","7.5 × 1.2。","9。"]
    },
    {
      until:"took_slip",
      obj:"desk",
      tiers:["拿抽屉里的信。","点办公桌。","拿起来。"]
    },
    {
      until:"safe_open",
      obj:"letter",
      tiers:["惊 ___ 失 措。","惊慌失措。","慌。"]
    },
    {
      until:"escaped",
      obj:"door",
      tiers:["用校门钥匙。","选中钥匙点门。","去校门。"]
    }
  ],
  explain:["相框与信件揭晓：L 是林老师，这是台风安全演练密室。","7.5 × 1.2 = 9。","「惊慌失措」缺「慌」，拿到校门钥匙与密码条。","冲向校门做最后逃脱。"],
  solution:[["look","letter"],["code","desk","9"],["take","desk"],["code","safe","慌"],["use","door","master_key"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#3a2a20')+R(0,210,400,90,'#2a1a10');
  s+=g('desk',R(60,140,180,20,'#8a5a32',4,SK)+R(70,160,160,50,'#6e4524',4)+R(120,168,60,20,f.desk_open?'#fff1d0':'#a07040',3)+T(150,230,11,'办公桌',' fill="#eee"'));
  s+=g('photo',R(80,30,100,70,'#fff',4,SK)+T(130,65,12,'合影',' fill="#5b4636"')+T(130,115,11,'相框',' fill="#eee"'));
  s+=g('safe',R(260,100,80,70,'#555',6,SK)+(f.safe_open?R(270,110,60,50,'#333',3):C(300,135,5,'#ffd34d'))+T(300,190,11,'保险柜',' fill="#eee"'));
  s+=g('letter',R(200,40,80,50,'#fff8e0',4,SK)+T(240,65,11,'信封',' fill="#5b4636"'));
  s+=g('door',R(310,150,70,130,'#5a4030',6,SK)+C(365,215,5,'#ffd34d')+T(345,270,11,'通往校门',' fill="#eee"'));
  return s;}
};
var m10={
  id:"m10",
  title:"风雨校门",
  emoji:"🏫",
  sub:"终章 · 天亮前逃出",
  story:["雨小了些。铁门仍锁着。工具箱在墙角。","密码锁要四位数——林老师信里那道题的答案。","钥匙孔也在。两道关卡，你都能过。"],
  objects:[
    {
      id:"board",
      name:"出门码告示",
      box:[300,40,80,70],
      views:[
        {
          text:"防水告示：",
          note:"【算一算】7.5 × 1.2 = ?\n（与校长室相同：出门四位？其实得数是 9，但锁是 2 位）\n另附干扰：【算一算】1.5 × 1.5 = ? 别用这个。"
        }
      ]
    },
    {
      id:"lamp",
      name:"路灯",
      box:[320,140,40,60],
      views:[
        {
          text:"路灯在风雨里摇晃。底座刻着：1.5×1.5 是干扰。"
        }
      ]
    },
    {
      id:"box",
      name:"工具箱",
      box:[30,160,70,50],
      views:[
        {
          if:["!box_open"],
          text:"工具箱转盘锁——最后一个词语：",
          note:"【词语填空】播 ___\n（把种子撒进地里）",
          lock:{
            kind:"dial",
            opts:[["播","撒","收","植","芽","种"]],
            answer:"种",
            prompt:"转到缺字",
            ok:{
              set:["box_open"],
              text:"“种”！里面有路灯电池。"
            },
            bad:"播种的第二个字。"
          }
        },
        {
          if:["box_open","!took_bat"],
          text:"路灯电池。",
          take:{
            give:["battery"],
            set:["took_bat"],
            text:"你拿起电池。"
          }
        },
        {
          text:"工具箱空了。"
        }
      ]
    },
    {
      id:"keypad",
      name:"密码锁",
      box:[300,210,80,50],
      views:[
        {
          if:["!pad_ok"],
          text:"两位数密码锁：",
          note:"【算一算】7.5 × 1.2 = ?",
          lock:{
            kind:"num",
            len:2,
            answer:"9",
            prompt:"输入得数",
            ok:{
              set:["pad_ok"],
              give:["master_key"],
              text:"9！密码锁开了，钥匙孔旁弹出校门钥匙（林老师又藏了一把）。"
            },
            bad:"7.5 × 1.2 = ？"
          }
        },
        {
          if:["pad_ok"],
          text:"密码锁已开。用钥匙拧铁门。"
        }
      ]
    },
    {
      id:"gate",
      name:"铁门",
      box:[120,80,160,160],
      views:[
        {
          if:["!pad_ok"],
          text:"铁门沉重。先解开旁边密码锁。",
          wrong:"先解密码锁。"
        },
        {
          if:["pad_ok"],
          text:"密码锁已开，钥匙孔露出来。",
          use:[
            {
              item:"master_key",
              win:true,
              text:"钥匙一转——铁门开了！雨夜里，林老师撑着雨衣在门外笑：“演练完成！你是今晚最棒的逃生员。天亮了，回家吧。”天边，真的微微发白。"
            }
          ],
          wrong:"用校长室拿到的校门钥匙。"
        }
      ]
    }
  ],
  combos:[],
  hints:[
    {
      until:"box_open",
      obj:"box",
      tiers:["工具箱词语锁。","播 ___。","种。"]
    },
    {
      until:"took_bat",
      obj:"box",
      tiers:["拿电池（可选）。","点工具箱。","拿起来。"]
    },
    {
      until:"pad_ok",
      obj:"board",
      tiers:["看告示算密码锁。","7.5 × 1.2。","9。"]
    },
    {
      until:"escaped",
      obj:"gate",
      tiers:["用弹出的校门钥匙开铁门。","选中钥匙点铁门。","打开！"]
    }
  ],
  explain:["「播种」缺「种」，打开工具箱（电池是气氛道具）。","7.5 × 1.2 = 9，解开密码锁。","校门钥匙打开铁门，林老师揭晓演练真相，你安全逃出。"],
  solution:[["code","box","种"],["take","box"],["code","keypad","9"],["use","gate","master_key"]]
,
  art:function(f){var s='';
  s+=R(0,0,400,300,'#0d1a28')+R(0,200,400,100,'#1a2a20');
  s+=P('M0 100 Q200 140 400 80','none',' stroke="#3a5a80" stroke-width="20" opacity=".4"');
  s+=g('gate',R(120,80,160,160,'#4a5a4a',4,SK)+R(140,100,50,120,'#2a3a2a',3)+R(210,100,50,120,'#2a3a2a',3)+C(200,160,8,f.escaped?'#2a8a4a':'#8a2a2a')+T(200,260,11,'铁门',' fill="#cde"'));
  s+=g('box',R(30,160,70,50,'#6a5040',6,SK)+(f.box_open?R(38,168,54,34,'#8a7060',3):'')+T(65,230,11,'工具箱',' fill="#cde"'));
  s+=g('board',R(300,40,80,70,'#f5f0e0',4,SK)+T(340,75,11,'出门码',' fill="#5b4636"'));
  s+=g('lamp',C(340,160,16,f.lit?'#ffe08a':'#444')+T(340,200,11,'路灯',' fill="#cde"'));
  s+=g('keypad',R(300,210,80,50,'#333',6,SK)+T(340,235,11,'密码锁',' fill="#aaa"'));
  return s;}
};

var EXTRA=[m1,m2,m3,m4,m5,m6,m7,m8,m9,m10];
G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-EXTRA-END*/
