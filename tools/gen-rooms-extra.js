#!/usr/bin/env node
'use strict';
/** Generate rooms-extra.js: 30 rooms = old r21..r50 (skip early 20). Run: node tools/gen-rooms-extra.js */
const fs = require('fs');
const path = require('path');
const sceneBank = require('./scene-art');

// ---- puzzle banks (grade 5, original wording / public-domain poems) ----
const POEMS = [
  {title:'春晓', author:'唐·孟浩然', full:'春眠不觉晓，处处闻啼鸟。', blank:'春眠不 ___ 晓，处处闻啼鸟。', missing:'觉', pos:3},
  {title:'静夜思', author:'唐·李白', full:'床前明月光，疑是地上霜。', blank:'床前明月 ___，疑是地上霜。', missing:'光', pos:4},
  {title:'登鹳雀楼', author:'唐·王之涣', full:'欲穷千里目，更上一层楼。', blank:'欲穷千里 ___，更上一层楼。', missing:'目', pos:4},
  {title:'悯农', author:'唐·李绅', full:'谁知盘中餐，粒粒皆辛苦。', blank:'谁知盘中餐，粒粒皆 ___ 苦。', missing:'辛', pos:2},
  {title:'咏鹅', author:'唐·骆宾王', full:'白毛浮绿水，红掌拨清波。', blank:'白毛浮绿水，红掌拨清 ___。', missing:'波', pos:4},
  {title:'江雪', author:'唐·柳宗元', full:'孤舟蓑笠翁，独钓寒江雪。', blank:'孤舟蓑笠翁，独钓寒江 ___。', missing:'雪', pos:4},
  {title:'赋得古原草送别', author:'唐·白居易', full:'野火烧不尽，春风吹又生。', blank:'野火烧不 ___，春风吹又生。', missing:'尽', pos:4},
  {title:'望庐山瀑布', author:'唐·李白', full:'飞流直下三千尺，疑是银河落九天。', blank:'飞流直下三千尺，疑是银河落九 ___。', missing:'天', pos:4},
  {title:'早发白帝城', author:'唐·李白', full:'两岸猿声啼不住，轻舟已过万重山。', blank:'两岸猿声啼不 ___，轻舟已过万重山。', missing:'住', pos:4},
  {title:'绝句', author:'唐·杜甫', full:'两个黄鹂鸣翠柳，一行白鹭上青天。', blank:'两个黄鹂鸣翠柳，一行白鹭上青 ___。', missing:'天', pos:4},
  {title:'枫桥夜泊', author:'唐·张继', full:'姑苏城外寒山寺，夜半钟声到客船。', blank:'姑苏城外寒山寺，夜半钟声到客 ___。', missing:'船', pos:4},
  {title:'游园不值', author:'宋·叶绍翁', full:'春色满园关不住，一枝红杏出墙来。', blank:'春色满园关不 ___，一枝红杏出墙来。', missing:'住', pos:4},
  {title:'题西林壁', author:'宋·苏轼', full:'不识庐山真面目，只缘身在此山中。', blank:'不识庐山真面目，只缘身在此山 ___。', missing:'中', pos:4},
  {title:'惠崇春江晚景', author:'宋·苏轼', full:'竹外桃花三两枝，春江水暖鸭先知。', blank:'竹外桃花三两枝，春江水暖鸭先 ___。', missing:'知', pos:4},
  {title:'小池', author:'宋·杨万里', full:'小荷才露尖尖角，早有蜻蜓立上头。', blank:'小荷才露尖尖角，早有蜻蜓立上 ___。', missing:'头', pos:4},
  {title:'晓出净慈寺送林子方', author:'宋·杨万里', full:'接天莲叶无穷碧，映日荷花别样红。', blank:'接天莲叶无穷碧，映日荷花别样 ___。', missing:'红', pos:4},
  {title:'村居', author:'清·高鼎', full:'儿童散学归来早，忙趁东风放纸鸢。', blank:'儿童散学归来早，忙趁东风放纸 ___。', missing:'鸢', pos:4},
  {title:'所见', author:'清·袁枚', full:'牧童骑黄牛，歌声振林樾。', blank:'牧童骑黄牛，歌声振林 ___。', missing:'樾', pos:4},
  {title:'赠汪伦', author:'唐·李白', full:'桃花潭水深千尺，不及汪伦送我情。', blank:'桃花潭水深千尺，不及汪伦送我 ___。', missing:'情', pos:4},
  {title:'黄鹤楼送孟浩然之广陵', author:'唐·李白', full:'孤帆远影碧空尽，唯见长江天际流。', blank:'孤帆远影碧空尽，唯见长江天际 ___。', missing:'流', pos:4},
];

const EN_QA = [
  // ---- Typhoon Safety（教科版五上）对话 / 听力 / 小作文（三类交错，保证前 20 槽都用到）----
  {q:'Nikki: A typhoon is coming! Please _____ the windows.\nYafei: OK!', a:'CLOSE', hint:'Typhoon 单元对话，动词，5 个字母，首字母 C；把窗关上。', tag:'dialog'},
  {q:'【听力·广播】Good morning! Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run. Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：Typhoon Haitang is coming on _____ afternoon.', a:'SATURDAY', hint:'听广播找时间，8 个字母，首字母 S；一周里的星期六。', tag:'listen'},
  {q:'【小作文·校长通知】Dear students, there will be heavy rain. Please remember to turn off the _____ before you leave.', a:'LIGHTS', hint:'通知信安全 tip，复数，6 个字母，首字母 L；离校前关掉。', tag:'write'},
  {q:'You\'ll need to turn off the _____.', a:'LIGHTS', hint:'Typhoon 单元 Spotlight，复数名词，6 个字母，首字母 L；屋里的灯。', tag:'dialog'},
  {q:'【听力·广播】Typhoon Haitang is coming on Saturday afternoon. During a typhoon, try to stay indoors. Bring everything inside, and close your windows. Also, turn off your lights and TV. Stay away from trees! Wear a colourful raincoat. A raincoat is better than an umbrella.\n问：During a typhoon, try to stay _____.', a:'INDOORS', hint:'听广播找安全地点，7 个字母，首字母 I；待在屋里。', tag:'listen'},
  {q:'【小作文·校长通知】Make sure you wear a _____ on your way home.', a:'RAINCOAT', hint:'通知信穿戴，8 个字母，首字母 R；彩色的更好。', tag:'write'},
  {q:'You\'ll want to close the _____.', a:'WINDOWS', hint:'Typhoon 单元 Spotlight，复数名词，7 个字母，首字母 W；墙上的窗。', tag:'dialog'},
  {q:'【听力·广播】… Wear a colourful raincoat so others can see you. Remember, a raincoat is better than an umbrella. Keep safe!\n问：A raincoat is better than an _____.', a:'UMBRELLA', hint:'听广播比一比，8 个字母，首字母 U；挡雨的伞。', tag:'listen'},
  {q:'【小作文·安全 tip】You\'ll need to close the _____ when a typhoon is landing.', a:'WINDOWS', hint:'作文句型 You\'ll need to…，7 个字母，首字母 W。', tag:'write'},
  {q:'Yiming: What will we need to do?\nMulan: We will need to stay _____.', a:'INDOORS', hint:'Typhoon 单元，副词/场所，7 个字母，首字母 I；待在室内。', tag:'dialog'},
  {q:'【听力·广播】If you happen to be outside, get to a safe place quickly. Stay away from trees! Watch your step and don\'t run.\n问：Stay away from _____!', a:'TREES', hint:'听广播找危险物，5 个字母，首字母 T；大风时别靠近。', tag:'listen'},
  {q:'【小作文·安全 tip】Please remember to bring everything _____.', a:'INSIDE', hint:'作文句型 Please remember to…，6 个字母，首字母 I。', tag:'write'},
  {q:'If you happen to be outside, get to a safe place _____.', a:'QUICKLY', hint:'Typhoon 单元，副词，7 个字母，首字母 Q；赶快、迅速地。', tag:'dialog'},
  {q:'【听力·广播】Bring everything inside, and close your windows. Also, turn off your lights and TV.\n问：Please close your _____.', a:'WINDOWS', hint:'听广播找动作对象，7 个字母，首字母 W。', tag:'listen'},
  {q:'【小作文·安全 tip】… is better than … → A _____ is better than an umbrella.', a:'RAINCOAT', hint:'Spotlight 比较句，8 个字母，首字母 R。', tag:'write'},
  {q:'Stay away from _____! (trees)', a:'TREES', hint:'Typhoon 单元安全提示，复数名词，5 个字母，首字母 T；外面的大树。', tag:'dialog'},
  {q:'【听力·广播】Wear a colourful raincoat so others can see you.\n问：Wear a colourful _____.', a:'RAINCOAT', hint:'听广播找穿戴，8 个字母，首字母 R。', tag:'listen'},
  {q:'【Wonderland】What can you find in a first-aid kit? A _____ helps you see in the dark.', a:'FLASHLIGHT', hint:'急救箱拓展，10 个字母，首字母 F；手电筒。', tag:'write'},
  {q:'Bring everything _____. (把东西都收进来)', a:'INSIDE', hint:'Typhoon 单元，副词，6 个字母，首字母 I；往屋里收。', tag:'dialog'},
  {q:'【听力·广播】Also, turn off your lights and TV.\n问：Turn off your _____ and TV.', a:'LIGHTS', hint:'听广播找要关掉的东西，6 个字母，首字母 L。', tag:'listen'},
  {q:'【Wonderland】In a first-aid kit, a _____ can cover a small cut.', a:'BANDAGE', hint:'急救箱拓展，7 个字母，首字母 B；绷带/创可贴一类。', tag:'write'},
  {q:'Wear a colourful _____ so others can see you.', a:'RAINCOAT', hint:'Typhoon 单元，名词，8 个字母，首字母 R；彩色雨衣。', tag:'dialog'},
  {q:'A raincoat is better than an _____.', a:'UMBRELLA', hint:'Typhoon 单元比较句，名词，8 个字母，首字母 U；雨伞。', tag:'dialog'},
  {q:'A _____ will come on Friday. / A _____ is coming.', a:'TYPHOON', hint:'Typhoon 单元核心词，名词，7 个字母，首字母 T；强风暴雨天气。', tag:'dialog'},
  {q:'Girl A: You\'ll need to turn off the lights.\nGirl B: Good _____!', a:'IDEA', hint:'Typhoon 单元回应语，名词，4 个字母，首字母 I；好主意。', tag:'dialog'},
  {q:'Girl A: You\'ll want to close the windows.\nGirl B: You\'re _____!', a:'RIGHT', hint:'Typhoon 单元回应语，形容词，5 个字母，首字母 R；你说得对。', tag:'dialog'},
  {q:'Don\'t _____. We can keep safe.', a:'WORRY', hint:'Typhoon 单元安慰语，动词，5 个字母，首字母 W；别担心。', tag:'dialog'},
  {q:'Try to stay _____ during a typhoon. (opposite of outdoors)', a:'INDOORS', hint:'Typhoon 单元，7 个字母，首字母 I；室内；outdoors 的反义。', tag:'dialog'},
  {q:'Right, what about _____? If you happen to be outside…', a:'OUTDOORS', hint:'Typhoon 单元，8 个字母，首字母 O；室外、户外。', tag:'dialog'},
  {q:'【Wonderland】Blow a _____ if you need help and others cannot see you.', a:'WHISTLE', hint:'急救箱拓展，7 个字母，首字母 W；哨子。', tag:'write'},
  // Unit 1 — hints: unit/letter count/first letter/meaning direction ONLY (never spell the answer)
  {q:'How do you learn new words? I like to learn words in _____.', a:'CHUNKS', hint:'Unit 1，复数名词，6 个字母，首字母 C；指“成组的语块”。'},
  {q:'What is a _____? A group of words that go together. (语块)', a:'CHUNK', hint:'Unit 1，单数名词，5 个字母，首字母 C；“一小组常一起出现的词”。'},
  {q:'_____ = 担心', a:'WORRY', hint:'Unit 1，动词/名词，5 个字母，首字母 W；心里不安、怕出事。'},
  {q:'Please _____ the sentences. (读)', a:'READ', hint:'Unit 1，动词，4 个字母，首字母 R；用眼睛看文字出声或默读。'},
  {q:'Be careful! Don\'t let the book _____. (落下)', a:'FALL', hint:'Unit 1，动词，4 个字母，首字母 F；从上往下掉。'},
  {q:'Don\'t speak too _____. (大声的)', a:'LOUD', hint:'Unit 1，形容词，4 个字母，首字母 L；声音很大。'},
  {q:'Is there _____ in the box? (任何东西)', a:'ANYTHING', hint:'Unit 1，代词，8 个字母，首字母 A；疑问/否定句里表示“任何事物”。'},
  {q:'There are a _____ new words on the card. (几个)', a:'FEW', hint:'Unit 1，a ___ = 几个，3 个字母，首字母 F。'},
  {q:'Can you write a _____? (句子)', a:'SENTENCE', hint:'Unit 1，名词，8 个字母，首字母 S；由单词组成、表达完整意思。'},
  {q:'Look them up in the _____. (词典)', a:'DICTIONARY', hint:'Unit 1，名词，10 个字母，首字母 D；查单词用的书。'},
  {q:'Make word _____ with pictures. (卡片)', a:'CARDS', hint:'Unit 1，复数名词，5 个字母，首字母 C；配图记单词用的纸片。'},
  {q:'Keep the chunks in _____. (记在心里)', a:'MIND', hint:'Unit 1，短语 keep in ____，4 个字母，首字母 M；指头脑、心里。'},
  {q:'I\'m _____ to join the science club. (be going to)', a:'GOING', hint:'Unit 2，be _____ to 表打算，5 个字母，首字母 G。'},
  {q:'Which _____ are you going to join? (社团)', a:'CLUB', hint:'Unit 2，名词，4 个字母，首字母 C；兴趣小组/社团。'},
  {q:'I want to join the _____ club. (科学)', a:'SCIENCE', hint:'Unit 2，形容词性名词，7 个字母，首字母 S；研究自然的学科。'},
  {q:'Any _____? (有什么建议吗？)', a:'ADVICE', hint:'Unit 2，不可数名词，6 个字母，首字母 A；别人给你的建议。'},
  {q:'You can try new _____. (事物)', a:'THINGS', hint:'Unit 2，复数名词，6 个字母，首字母 T；各种新事物。'},
  {q:'Join a club to make more _____. (朋友)', a:'FRIENDS', hint:'Unit 2，复数名词，7 个字母，首字母 F；和你要好的人。'},
  {q:'I can share my _____. (想法)', a:'IDEAS', hint:'Unit 2，复数名词，5 个字母，首字母 I；头脑里的想法。'},
  {q:'A _____ can help us at the fair. (机器人)', a:'ROBOT', hint:'Unit 2，名词，5 个字母，首字母 R；会按程序干活的机器。'},
  {q:'Sports help me _____ taller and stronger. (成长/长高)', a:'GROW', hint:'Unit 2，动词，4 个字母，首字母 G；慢慢变高变壮。'},
  {q:'It is a _____ to learn new skills. (机会)', a:'CHANCE', hint:'Unit 2，名词，6 个字母，首字母 C；难得的机会。'},
  {q:'I like dancing as _____. (也)', a:'WELL', hint:'Unit 2，as ___ = 也，4 个字母，首字母 W。'},
  {q:'What _____ will you learn in the club? (技能)', a:'SKILL', hint:'Unit 2，名词，5 个字母，首字母 S；本领、技能。'},
  {q:'What\'s _____? (怎么了？)', a:'WRONG', hint:'Unit 3，固定问句 What\'s _____?，5 个字母，首字母 W。'},
  {q:'_____ for asking. (谢谢关心)', a:'THANKS', hint:'Unit 3，开头致谢，6 个字母，首字母 T。'},
  {q:'I feel _____. (难过的)', a:'SAD', hint:'Unit 3，形容词，3 个字母，首字母 S；心情不好、想哭。'},
  {q:'Sorry to _____ that. (听到……很难过)', a:'HEAR', hint:'Unit 3，动词，4 个字母，首字母 H；用耳朵接收声音。'},
  {q:'Don\'t _____ up! (放弃)', a:'GIVE', hint:'Unit 3，短语 ___ up = 放弃，4 个字母，首字母 G。'},
  {q:'We may _____ the game, but we tried. (输掉)', a:'LOSE', hint:'Unit 3，动词，4 个字母，首字母 L；比赛没赢。'},
  {q:'My best friend is _____. (生病的)', a:'ILL', hint:'Unit 3，形容词，3 个字母，首字母 I；身体不舒服。'},
  {q:'I _____ my hometown. (想念)', a:'MISS', hint:'Unit 3，动词，4 个字母，首字母 M；想见却见不到。'},
  {q:'That must be _____. (那一定很难)', a:'HARD', hint:'Unit 3，形容词，4 个字母，首字母 H；不容易。'},
  {q:'How are you _____ now?', a:'FEELING', hint:'Unit 3，现在进行：How are you _____ now?，7 个字母，首字母 F。'},
  {q:'I feel _____ now. (好多了)', a:'BETTER', hint:'Unit 3，比较级，6 个字母，首字母 B；比刚才好。'},
  {q:'Do you want to _____ about it?', a:'TALK', hint:'Unit 3，动词，4 个字母，首字母 T；说一说、聊一聊。'},
  {q:'I _____ how you feel.', a:'KNOW', hint:'Unit 3，动词，4 个字母，首字母 K；明白、了解。'},
  {q:'Is everything all _____?', a:'RIGHT', hint:'Unit 3，all _____ = 好吗/没事吧，5 个字母，首字母 R。'},
  {q:'I\'m _____ about you. (担心的)', a:'WORRIED', hint:'Unit 3，形容词 be _____ about，7 个字母，首字母 W。'},
  {q:'Let\'s _____ together. (一起学习)', a:'STUDY', hint:'Unit 3，动词，5 个字母，首字母 S；看书学习。'},
];

const IDIOMS = [
  // 部编/人教五上词语表成语（缺一字 dial）
  {full:'兄友弟恭', blank:'兄 ___ 弟 恭', missing:'友', hint:'兄弟友爱、恭敬，说家庭和睦'},
  {full:'父慈子孝', blank:'父 慈 ___ 孝', missing:'子', hint:'父母慈爱、子女孝顺'},
  {full:'家喻户晓', blank:'家 喻 户 ___', missing:'晓', hint:'家家户户都知道，形容很有名'},
  {full:'心浮气躁', blank:'心 浮 ___ 躁', missing:'气', hint:'心里不踏实、容易着急'},
  {full:'如泣如诉', blank:'如 ___ 如 诉', missing:'泣', hint:'像在哭泣、又像在诉说'},
  {full:'一张一弛', blank:'一 张 ___ 弛', missing:'一', hint:'有紧张有放松，劳逸结合'},
  {full:'不卑不亢', blank:'不 卑 不 ___', missing:'亢', hint:'既不低声下气，也不骄傲'},
  {full:'诗词歌赋', blank:'___ 词 歌 赋', missing:'诗', hint:'诗、词、歌、赋四类文学'},
  {full:'相提并论', blank:'相 提 ___ 论', missing:'并', hint:'把不同的事物放在一起比较、谈论'},
  {full:'忠于职守', blank:'忠 ___ 职 守', missing:'于', hint:'忠实于自己的工作岗位'},
  {full:'千真万确', blank:'千 真 万 ___', missing:'确', hint:'形容非常真实、确实'},
  {full:'倾盆大雨', blank:'___ 盆 大 雨', missing:'倾', hint:'雨像盆里的水倒下来一样大'},
  {full:'震天动地', blank:'震 ___ 动 地', missing:'天', hint:'声音或气势极大'},
  {full:'世世代代', blank:'世 世 ___ 代', missing:'代', hint:'一代又一代，形容时间久'},
  {full:'眉开眼笑', blank:'___ 开 眼 笑', missing:'眉', hint:'形容非常高兴的样子'},
  {full:'美中不足', blank:'美 中 不 ___', missing:'足', hint:'虽然很好，但还有一点点缺憾'},
  {full:'成家立业', blank:'成 家 ___ 业', missing:'立', hint:'结婚成家，成就事业'},
  {full:'相依为命', blank:'相 依 为 ___', missing:'命', hint:'互相依靠着生活'},
  {full:'不可估量', blank:'不 可 ___ 量', missing:'估', hint:'没法估计有多大'},
  {full:'举世闻名', blank:'___ 世 闻 名', missing:'举', hint:'全世界都知道名字'},
  {full:'众星拱月', blank:'众 ___ 拱 月', missing:'星', hint:'许多星星环绕月亮，比喻众人捧一人'},
  {full:'亭台楼阁', blank:'亭 台 楼 ___', missing:'阁', hint:'园林里的各种建筑'},
  {full:'诗情画意', blank:'___ 情 画 意', missing:'诗', hint:'像诗、像画一样的美好意境'},
  {full:'天南海北', blank:'天 南 ___ 北', missing:'海', hint:'形容距离很远，或四面八方'},
  {full:'奇珍异宝', blank:'奇 ___ 异 宝', missing:'珍', hint:'稀奇珍贵的宝物'},
  {full:'寸草不生', blank:'寸 草 不 ___', missing:'生', hint:'连小草都不长，形容荒凉'},
  {full:'叹为观止', blank:'___ 为 观 止', missing:'叹', hint:'赞叹看到的事物好到极点'},
  {full:'不计其数', blank:'不 计 ___ 数', missing:'其', hint:'数量多得数不过来'},
  {full:'想方设法', blank:'想 ___ 设 法', missing:'方', hint:'多方面想办法'},
  {full:'无穷无尽', blank:'无 穷 无 ___', missing:'尽', hint:'没有尽头，没有完'},
  {full:'无价之宝', blank:'___ 价 之 宝', missing:'无', hint:'无法用价钱衡量的宝物'},
  {full:'同心协力', blank:'同 心 ___ 力', missing:'协', hint:'齐心合力一起做'},
  {full:'小心翼翼', blank:'小 心 翼 ___', missing:'翼', hint:'谨慎小心，一点不敢大意'},
  {full:'惊恐万状', blank:'___ 恐 万 状', missing:'惊', hint:'非常惊慌害怕的样子'},
  {full:'势不可挡', blank:'势 不 ___ 挡', missing:'可', hint:'来势猛，没法抵挡'},
  {full:'惊慌失措', blank:'惊 ___ 失 措', missing:'慌', hint:'害怕得不知怎么办'},
  {full:'纹丝不动', blank:'___ 丝 不 动', missing:'纹', hint:'一点儿也不动'},
  {full:'津津有味', blank:'津 津 有 ___', missing:'味', hint:'吃或听得特别有兴趣'},
  {full:'一知半解', blank:'一 ___ 半 解', missing:'知', hint:'知道得不全面，理解不深'},
  {full:'兴亡盛衰', blank:'兴 亡 ___ 衰', missing:'盛', hint:'兴起、灭亡、强盛、衰落'},
  {full:'粉妆玉砌', blank:'粉 妆 玉 ___', missing:'砌', hint:'像用粉妆饰、用玉堆砌，多形容雪景'},
  {full:'五颜六色', blank:'___ 颜 六 色', missing:'五', hint:'颜色很多很鲜艳'},
  {full:'七上八下', blank:'七 上 ___ 下', missing:'八', hint:'心里不安、七上八下'},
  {full:'九牛一毛', blank:'___ 牛 一 毛', missing:'九', hint:'九头牛身上的一根毛，形容极少'},
  {full:'三心二意', blank:'三 心 ___ 意', missing:'二', hint:'心思不专一'},
  {full:'十全十美', blank:'___ 全 十 美', missing:'十', hint:'完美，没有缺点'},
  {full:'四面八方', blank:'四 面 ___ 方', missing:'八', hint:'周围各个方面'},
  {full:'三言两语', blank:'___ 言 两 语', missing:'三', hint:'很少的几句话'},
  {full:'一心一意', blank:'一 心 ___ 意', missing:'一', hint:'心思专一'},
];

const WORDS = [
  // 部编/人教五上词语表双字词（缺一字 dial）
  {full:'桂花', blank:'桂 ___', missing:'花', hint:'秋天开的香香的花'},
  {full:'故乡', blank:'___ 乡', missing:'故', hint:'自己出生或长大的地方'},
  {full:'欣赏', blank:'欣 ___', missing:'赏', hint:'带着喜爱去看、感受'},
  {full:'成熟', blank:'___ 熟', missing:'成', hint:'果实长够了，或人懂事了'},
  {full:'播种', blank:'播 ___', missing:'种', hint:'把种子撒进地里'},
  {full:'收获', blank:'___ 获', missing:'收', hint:'把成熟的庄稼收进来'},
  {full:'吩咐', blank:'吩 ___', missing:'咐', hint:'口头告诉别人去做'},
  {full:'可贵', blank:'___ 贵', missing:'可', hint:'值得珍惜、难得'},
  {full:'地道', blank:'地 ___', missing:'道', hint:'真正的、纯正的；也指地下通道'},
  {full:'平原', blank:'___ 原', missing:'平', hint:'平坦宽广的陆地'},
  {full:'封锁', blank:'封 ___', missing:'锁', hint:'用武力等隔断、控制'},
  {full:'粉碎', blank:'___ 碎', missing:'粉', hint:'打碎成粉末；彻底打垮'},
  {full:'广阔', blank:'广 ___', missing:'阔', hint:'面积或范围很大'},
  {full:'游击', blank:'___ 击', missing:'游', hint:'灵活机动的战斗方式'},
  {full:'转移', blank:'转 ___', missing:'移', hint:'改换位置或方向'},
  {full:'召集', blank:'___ 集', missing:'召', hint:'通知大家集合'},
  {full:'商议', blank:'商 ___', missing:'议', hint:'一起商量讨论'},
  {full:'允诺', blank:'___ 诺', missing:'允', hint:'答应别人的请求'},
  {full:'隆重', blank:'隆 ___', missing:'重', hint:'盛大而庄重'},
  {full:'典礼', blank:'___ 礼', missing:'典', hint:'郑重的仪式'},
  {full:'承诺', blank:'承 ___', missing:'诺', hint:'答应并保证做到'},
  {full:'拒绝', blank:'___ 绝', missing:'拒', hint:'不接受、不同意'},
  {full:'速度', blank:'速 ___', missing:'度', hint:'快慢的程度'},
  {full:'冠军', blank:'___ 军', missing:'冠', hint:'比赛中的第一名'},
  {full:'俯冲', blank:'俯 ___', missing:'冲', hint:'头朝下快速冲下去'},
  {full:'赤道', blank:'___ 道', missing:'赤', hint:'地球中间的那一圈'},
  {full:'弥漫', blank:'弥 ___', missing:'漫', hint:'烟、雾、气味等充满'},
  {full:'海峡', blank:'___ 峡', missing:'海', hint:'两块陆地之间的狭窄海面'},
  {full:'凌晨', blank:'凌 ___', missing:'晨', hint:'天快亮的时候'},
  {full:'威严', blank:'___ 严', missing:'威', hint:'有威力而严肃的样子'},
  {full:'岗位', blank:'岗 ___', missing:'位', hint:'工作的位置、职责'},
  {full:'侵入', blank:'___ 入', missing:'侵', hint:'强行进入别人的地方'},
  {full:'飘落', blank:'飘 ___', missing:'落', hint:'在空中飞着落下来'},
  {full:'彩虹', blank:'___ 虹', missing:'彩', hint:'雨后天空出现的七色彩带'},
  {full:'俗话', blank:'俗 ___', missing:'话', hint:'民间流传的通俗话'},
  {full:'瑞雪', blank:'___ 雪', missing:'瑞', hint:'对农作物有好处的及时雪'},
  {full:'供应', blank:'供 ___', missing:'应', hint:'提供所需的东西'},
  {full:'精巧', blank:'___ 巧', missing:'精', hint:'精细巧妙'},
  {full:'适宜', blank:'适 ___', missing:'宜', hint:'合适、恰当'},
  {full:'寻常', blank:'___ 常', missing:'寻', hint:'平常、普通'},
];

const RIDDLES = [
  {q:'一口咬掉牛尾巴（打一字）', a:'告', opts:['牛','吃','告','咬','舌','午']},
  {q:'田里长草（打一字）', a:'苗', opts:['田','草','苗','花','禾','木']},
  {q:'两人一起走（打一字）', a:'从', opts:['人','从','众','双','比','北']},
  {q:'十张口（打一字）', a:'古', opts:['口','古','叶','合','可','右']},
  {q:'一点一横长，一撇到南洋（打一字）', a:'厂', opts:['广','厂','厅','历','原','厚']},
  {q:'上边雨，下边令（打一字）', a:'零', opts:['雪','雷','零','雾','需','霍']},
  {q:'一日一月（打一字）', a:'明', opts:['白','明','朋','昌','早','晚']},
  {q:'禾字去了撇（打一字）', a:'木', opts:['禾','木','米','未','末','本']},
];

function mulDec(a,b){const s=(a*b).toFixed(10).replace(/\.?0+$/,'');return s;}
function areaTrap(a,b,h){return String((a+b)*h/2);}
function areaTri(b,h){return String(b*h/2);}
function round2(n){return String(Math.round(n*100)/100);}

const MATH = [];
// 小数 × 整数（五年级）
[[2.5,4,'瓶果汁'],[3.6,5,'本练习本'],[0.8,7,'支铅笔'],[1.25,8,'块橡皮'],[4.5,6,'袋牛奶']].forEach(([p,n,thing])=>{
  const ans=mulDec(p,n);
  const measure=thing[0]; // 瓶/本/支/块/袋
  const name=thing.slice(1);
  MATH.push({kind:'dec_mul_int', note:`【算一算】每${measure}${name} ${p} 元，买 ${n} ${measure}。一共多少元？`, answer:ans, explain:`${p} × ${n} = ${ans}`, hintStep:`小数乘整数：按整数相乘，再数小数点后有几位。`});
});
// 小数 × 小数
[[1.5,2.4,'米彩带'],[2.5,1.2,'千克水果'],[0.6,3.5,'升饮料'],[1.25,1.6,'米布料'],[3.2,1.5,'千克大米']].forEach(([p,n,thing])=>{
  const ans=mulDec(p,n);
  const measure=thing[0]==='米'?'米':(thing[0]==='千'?'千克':'升');
  const name=thing.replace(/^(米|千克|升)/,'');
  MATH.push({kind:'dec_mul_dec', note:`【算一算】${name}每${measure} ${p} 元，买 ${n} ${measure}。一共多少元？`, answer:ans, explain:`${p} × ${n} = ${ans}`, hintStep:`小数乘小数：先当整数乘，再看两个因数一共有几位小数。`});
});
// 小数 ÷ 整数
[[6.4,4,'升油','个瓶子'],[9.6,3,'米彩带','段'],[7.5,5,'千克糖果','袋'],[8.4,6,'升果汁','杯'],[12.6,9,'元钱','人平分']].forEach(([a,b,unit,how])=>{
  const ans=(a/b).toFixed(10).replace(/\.?0+$/,'');
  let note, hint;
  if(how==='个瓶子'){ note=`【算一算】${a} ${unit}平均倒进 ${b} 个瓶子，每个瓶子多少升？`; hint=`总数÷瓶数，就是每个瓶子分到的量。`; }
  else if(how==='段'){ note=`【算一算】${a} ${unit}平均剪成 ${b} 段，每段多少米？`; hint=`总长÷段数。`; }
  else if(how==='袋'){ note=`【算一算】${a} ${unit}平均装进 ${b} 袋，每袋多少千克？`; hint=`总重÷袋数。`; }
  else if(how==='杯'){ note=`【算一算】${a} ${unit}平均倒进 ${b} 杯，每杯多少升？`; hint=`总量÷杯数。`; }
  else { note=`【算一算】${a} ${unit}由 ${b} 人平分，每人多少元？`; hint=`总钱÷人数。`; }
  MATH.push({kind:'dec_div_int', note, answer:ans, explain:`${a} ÷ ${b} = ${ans}`, hintStep:hint});
});
// 小数 ÷ 小数
[[4.8,1.2,'米绳子'],[6.3,0.9,'千克面粉'],[2.4,0.8,'升牛奶'],[7.2,1.2,'米布'],[5.6,0.7,'千克糖'],[9.6,1.6,'升水']].forEach(([a,b,thing])=>{
  const ans=(a/b).toFixed(10).replace(/\.?0+$/,'');
  const measure=thing[0]==='米'?'米':(thing[0]==='千'?'千克':'升');
  const name=thing.replace(/^(米|千克|升)/,'');
  MATH.push({kind:'dec_div_dec', note:`【算一算】一共有 ${a} ${measure}${name}，每份 ${b} ${measure}。可以分成多少份？`, answer:ans, explain:`${a} ÷ ${b} = ${ans}`, hintStep:`小数除以小数：先把除数变成整数（两边同乘 10 或 100），再除。`});
});

// 多步购物（元）
[[4.5,3,2.8,2],[6.5,2,3.2,3],[5.4,4,1.5,6],[3.75,2,2.5,4],[8.2,3,1.6,5],[9.9,2,4.5,2]].forEach(([p1,n1,p2,n2])=>{
  const ans=round2(p1*n1+p2*n2);
  MATH.push({kind:'shop', note:`【算一算】笔记本每本 ${p1} 元，买 ${n1} 本；橡皮每块 ${p2} 元，买 ${n2} 块。一共多少元？`, answer:ans, explain:`${p1}×${n1}+${p2}×${n2}=${ans}`, hintStep:`先算笔记本总价，再加橡皮总价。`});
});
// 花坛外圈小路面积
[[12,8,1],[10,6,1],[15,9,2],[8,5,1],[14,10,1],[9,7,1]].forEach(([L,W,p])=>{
  const ans=String((L+2*p)*(W+2*p)-L*W);
  MATH.push({kind:'frame', note:`【算一算】长方形花坛长 ${L} 米、宽 ${W} 米。四周铺宽 ${p} 米的小路，小路面积是多少平方米？`, answer:ans, explain:`外围 (${L}+${2*p})×(${W}+${2*p}) 减去花坛 ${L}×${W} = ${ans}`, hintStep:`先算“花坛+小路”的大长方形，再减去花坛本身。`});
});
// 米→平方分米（单位换算+面积）
[[1.2,0.8],[2.5,1.2],[1.5,1.5],[3,0.6],[1.8,1],[2,1.4]].forEach(([l,w])=>{
  const ans=String(Math.round(l*10*w*10));
  MATH.push({kind:'rect_dm', note:`【算一算】长方形桌面长 ${l} 米、宽 ${w} 米。面积是多少平方分米？（1 米 = 10 分米）`, answer:ans, explain:`先换成 ${l*10} 分米 × ${w*10} 分米 = ${ans} 平方分米`, hintStep:`先把米换成分米，再相乘。`});
});
// 两步方程
[[3,24,2,18],[4,10,2,30],[5,15,3,25],[2,40,1,16],[3,12,1,28],[4,8,3,20]].forEach(([a,b,c,d])=>{
  // ax - b = cx + d  → (a-c)x = b+d
  const x=(b+d)/(a-c);
  MATH.push({kind:'eq2', note:`【算一算】解方程：${a}x − ${b} = ${c}x + ${d}\n求 x。`, answer:String(x), explain:`移项合并：(${a}-${c})x = ${b}+${d} → x = ${x}`, hintStep:`把含 x 的项移到一边，常数移到另一边。`});
});
// 连续加减（应用）
[[18.6,5.8,3.5],[25.4,8.7,4.2],[30,12.5,6.8],[16.8,4.5,2.7],[22.2,7.6,5.4],[40.5,15.5,8]].forEach(([a,b,c])=>{
  const ans=round2(a-b+c);
  MATH.push({kind:'remain', note:`【算一算】一桶油重 ${a} 千克，用去 ${b} 千克后又倒入 ${c} 千克。现在桶里有多少千克？`, answer:ans, explain:`${a} − ${b} + ${c} = ${ans}`, hintStep:`先减去用去的，再加上倒入的。`});
});
// 梯形面积（稍难数字）
[[6.5,9.5,4],[5,11,6],[7,13,5],[4.5,8.5,6],[8,14,3.5],[3,9,8]].forEach(([a,b,h])=>{
  const ans=round2((a+b)*h/2);
  MATH.push({kind:'trap', note:`【算一算】梯形：上底 ${a} 分米，下底 ${b} 分米，高 ${h} 分米。面积是多少平方分米？`, answer:ans, explain:`（${a}+${b}）×${h}÷2 = ${ans}`, hintStep:`梯形面积 =（上底+下底）×高÷2。`});
});
// 三角形 + 再求两倍（多步）
[[8,6],[10,7],[12,5],[9,8],[14,6],[15,4]].forEach(([b,h])=>{
  const one=b*h/2; const ans=String(one*2);
  MATH.push({kind:'tri2', note:`【算一算】一块三角形彩纸底 ${b} 厘米、高 ${h} 厘米。用同样的两块拼成一个图形，总面积是多少平方厘米？`, answer:ans, explain:`一块 = ${b}×${h}÷2 = ${one}，两块 = ${ans}`, hintStep:`先求一块三角形面积，再乘 2。`});
});
// 植树（两端都种）+ 变式
[[48,6],[36,4],[60,5],[42,7],[55,5],[72,8]].forEach(([L,G])=>{
  MATH.push({kind:'tree', note:`【算一算】小路长 ${L} 米。从头到尾，每隔 ${G} 米种一棵树（两头都要种）。一共要种多少棵树？`, answer:String(L/G+1), explain:`段数=${L}÷${G}=${L/G}，棵数=段数+1=${L/G+1}`, hintStep:`段数 = 全长÷间隔，两头都种则棵数比段数多 1。`});
});
// 速度路程时间（五年级常见）
[[60,2.5],[48,1.5],[72,2],[90,1.5],[54,3],[80,2.5]].forEach(([v,t])=>{
  const ans=round2(v*t);
  MATH.push({kind:'speed', note:`【算一算】一辆车平均每小时行 ${v} 千米，行了 ${t} 小时。一共行了多少千米？`, answer:ans, explain:`路程 = 速度 × 时间 = ${v} × ${t} = ${ans}`, hintStep:`路程 = 速度 × 时间。`});
});
// 分数/小数混合：打几折
[[80,0.8],[120,0.7],[60,0.9],[200,0.6],[90,0.5],[150,0.8]].forEach(([price,rate])=>{
  const ans=round2(price*rate);
  const zhe=Math.round(rate*10);
  MATH.push({kind:'discount', note:`【算一算】一件原价 ${price} 元的外套打 ${zhe} 折。应付多少元？`, answer:ans, explain:`${price} × ${rate} = ${ans}`, hintStep:`打 ${zhe} 折就是用原价乘 0.${zhe}。`});
});

// ---- 循环小数 & 小数四则（和上面的题交错出现） ----
const MINUS='\u2212';
function D(s){const [i,f='']=String(s).split('.');return {n:BigInt(i+f), d:10n**BigInt(f.length)};}
function addD(a,b){return {n:a.n*b.d+b.n*a.d, d:a.d*b.d};}
function subD(a,b){return {n:a.n*b.d-b.n*a.d, d:a.d*b.d};}
function mulD(a,b){return {n:a.n*b.n, d:a.d*b.d};}
function divD(a,b){return {n:a.n*b.d, d:a.d*b.n};}
function fmtD(a){
  let n=a.n,d=a.d;if(n%d===0n)return String(n/d);
  const scale=1000000n;const v=(n*scale)/d;let s=String(v);const neg=s[0]==='-';if(neg)s=s.slice(1);
  while(s.length<7)s='0'+s;
  const ip=s.slice(0,-6)||'0', fp=s.slice(-6).replace(/0+$/,'');
  return (neg?'-':'')+ip+(fp?'.'+fp:'');
}
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
function decShow(info){
  let shown=info.prefix||'';
  if(info.cycle){shown+=info.cycle; while(shown.length<4) shown+=info.cycle;}
  return '0.'+(shown||'0')+'…';
}
function addMath(kind, note, answer, explain, hintStep){
  const a=String(answer);
  if(!/^\d+(\.\d+)?$/.test(a)||/^0\d/.test(a)) throw new Error('bad answer '+a+' | '+note);
  MATH.push({kind, note, answer:a, explain, hintStep});
}
const H={
  rep_len:'用竖式除一除，余数重复就停。只数一直重复的那几位有几位，前面不循环的数字不要算进去。',
  rep_block:'先除到开始循环。循环节是重复的那一段，按顺序连成一个数，比如重复 1 和 8 就填 18。不循环的数字不要写。',
  rep_from:'看小数点后面，从第几位起才开始一直重复。如果第一位就不停地重复，答案就是 1。',
  rep_den:'纯循环小数：循环几位，分母就是几个 9。一位用 9，两位用 99，写好再约分，约完的分母才是答案。',
  rep_num:'先写成“循环节 / 几个 9”，再约分。约完以后的分子才是要填的数。',
  rep_which:'约分后分母只剩 2 和 5，商是有限小数；分母里还有 3、7、11 这类因数，商通常会循环。四个里只有一个。',
  rep_as_dec:'把分数除开，一直除到余数重复。只把重复的数字按顺序连起来。',
  dec_add:'小数点对齐再相加。位数不一样时，空着的位可以看成 0。',
  dec_sub:'小数点对齐再相减。位数少的一边补 0，不够减就向前一位借。',
  dec_mul:'先按整数相乘，再点小数点：两个因数一共有几位小数，积就有几位小数。',
  dec_div:'除数是小数时，先把除数变成整数，被除数的小数点也向右移同样的位数，再除。',
  dec_mix:'看清每一步在求什么，一步一步算。有加减又有乘，先乘再加减。'
};
[[1,3],[2,11],[1,7],[1,6],[4,11],[1,9],[5,6],[3,11]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  addMath('rep_len', `【算一算】循环小数：计算 ${a}÷${b}，商的循环节有几位数字？`, info.cycle.length,
    `${a}÷${b}=${decShow(info)}，循环节是 ${info.cycle}，有 ${info.cycle.length} 位。`, H.rep_len);
});
[[1,3],[2,11],[2,3],[3,11],[4,9],[5,11],[1,6],[8,9]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  if(/^0/.test(info.cycle)) throw new Error('leading zero cycle '+a+'/'+b);
  addMath('rep_block', `【算一算】循环小数：计算 ${a}÷${b}，把循环节按顺序连起来是多少？`, info.cycle,
    `${a}÷${b}=${decShow(info)}。${info.prefix?('前面的 '+info.prefix+' 不循环，'):''}循环节连起来是 ${info.cycle}。`, H.rep_block);
});
[[1,6],[5,6],[1,3],[2,11],[5,12],[7,12],[1,15],[7,15]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  addMath('rep_from', `【算一算】循环小数：计算 ${a}÷${b}，从小数点后第几位开始循环？`, info.prefix.length+1,
    `${a}÷${b}=${decShow(info)}，从小数点后第 ${info.prefix.length+1} 位开始循环。`, H.rep_from);
});
[[1,3],[2,11],[2,3],[4,9],[3,11],[6,11],[1,11],[8,9]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  if(info.prefix) throw new Error('not pure '+a+'/'+b);
  const fr=pureFrac(info.cycle);
  const show=decShow(info);
  addMath('rep_den', `【算一算】循环小数：${show}（循环节是 ${info.cycle}）化成最简分数，分母是多少？`, fr.d,
    `${show} 的循环节是 ${info.cycle}，写成 ${Number(info.cycle)}/${10**info.cycle.length-1}，约分得 ${fr.n}/${fr.d}，分母是 ${fr.d}。`, H.rep_den);
});
[[2,11],[1,3],[5,9],[3,11],[4,11],[2,9],[7,9],[9,11]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  if(info.prefix) throw new Error('not pure '+a+'/'+b);
  const fr=pureFrac(info.cycle);
  const show=decShow(info);
  addMath('rep_num', `【算一算】循环小数：${show}（循环节是 ${info.cycle}）化成最简分数，分子是多少？`, fr.n,
    `${show} 写成 ${Number(info.cycle)}/${10**info.cycle.length-1}，约分得 ${fr.n}/${fr.d}，分子是 ${fr.n}。`, H.rep_num);
});
[[[1,2],[3,4],[1,3],[2,5]],[[3,5],[7,2],[2,11],[8,5]],[[9,2],[1,4],[5,6],[7,5]],[[4,5],[3,8],[2,3],[15,4]],[[7,4],[1,8],[4,9],[9,5]],[[11,2],[3,6],[1,7],[16,5]],[[21,6],[2,9],[25,4],[14,5]],[[5,2],[8,4],[3,11],[9,3]]].forEach((opts)=>{
  const marks=opts.map(([a,b])=>!cycleInfo(a,b).finite);
  const hits=marks.map((v,i)=>v?i+1:0).filter(Boolean);
  if(hits.length!==1) throw new Error('which '+JSON.stringify(opts)+' '+hits);
  const bits=opts.map(([a,b],i)=>{
    const info=cycleInfo(a,b);
    const show=info.finite?('0.'+info.prefix).replace(/0\.$/,'0').replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'') : decShow(info);
    // finite display: if prefix is the terminating digits
    const finiteShow=info.finite?(Number(a)/Number(b)).toString():'';
    return `${'①②③④'[i]} ${a}÷${b}=${info.finite?finiteShow:decShow(info)}${info.finite?' 有限小数':' 循环小数'}`;
  });
  const body=opts.map(([a,b],i)=>`${'①②③④'[i]} ${a}÷${b}`).join(' ');
  addMath('rep_which', `【算一算】循环小数：下面哪个算式的商是循环小数？${body}。填序号。`, hits[0],
    bits.join('，')+`。所以填 ${hits[0]}。`, H.rep_which);
});
[[2,11],[1,3],[5,6],[4,11],[7,9],[1,6]].forEach(([a,b])=>{
  const info=cycleInfo(a,b);
  if(/^0/.test(info.cycle)) throw new Error('lead cycle frac '+a+'/'+b);
  const g=gcdN(a,b);
  addMath('rep_as_dec', `【算一算】循环小数：最简分数 ${a/g}/${b/g} 写成小数，把循环节按顺序连起来是多少？`, info.cycle,
    `${a/g}/${b/g}=${decShow(info)}，循环节连起来是 ${info.cycle}。`, H.rep_as_dec);
});
function bare(kind, expr, ans, explain){addMath(kind, `【算一算】小数四则：${expr} = ?`, ans, explain, H[kind]);}
[['3.75','0.6'],['0.8','1.25'],['12.5','0.08'],['6','0.75']].forEach(([a,b])=>{
  const ans=fmtD(addD(D(a),D(b)));
  bare('dec_add', `${a} + ${b}`, ans, `${a} + ${b} = ${ans}。小数点对齐再相加。`);
});
[['1.2','0.85'],['2.5','1.75'],['0.6','0.45'],['3.25','1.8']].forEach(([a,b])=>{
  const ans=fmtD(addD(D(a),D(b)));
  addMath('dec_add', `【算一算】小数应用：小黄早上跑了 ${a} 千米，晚上又跑了 ${b} 千米。一共跑了多少千米？`, ans,
    `${a} + ${b} = ${ans}（千米）。`, H.dec_add);
});
[['8.4','2.75'],['5','0.25'],['10.5','1.08'],['6.25','4.5']].forEach(([a,b])=>{
  const ans=fmtD(subD(D(a),D(b)));
  bare('dec_sub', `${a} ${MINUS} ${b}`, ans, `${a} ${MINUS} ${b} = ${ans}。小数点对齐，位数少的补 0。`);
});
[['2.4','1.85'],['5.6','3.25'],['8','2.75'],['3.5','0.8']].forEach(([a,b])=>{
  const ans=fmtD(subD(D(a),D(b)));
  addMath('dec_sub', `【算一算】小数应用：红绳长 ${a} 米，蓝绳长 ${b} 米。红绳比蓝绳长多少米？`, ans,
    `${a} ${MINUS} ${b} = ${ans}（米）。`, H.dec_sub);
});
[['2.5','0.75'],['1.8','0.35'],['3.6','1.25'],['4.2','1.05']].forEach(([a,b])=>{
  const ans=fmtD(subD(D(a),D(b)));
  addMath('dec_sub', `【算一算】小数应用：一盒牛奶有 ${a} 升，喝掉 ${b} 升。还剩多少升？`, ans,
    `${a} ${MINUS} ${b} = ${ans}（升）。`, H.dec_sub);
});
[['2.4','0.15'],['0.8','1.25'],['3.5','0.4'],['12.5','0.08']].forEach(([a,b])=>{
  const ans=fmtD(mulD(D(a),D(b)));
  bare('dec_mul', `${a} × ${b}`, ans, `${a} × ${b} = ${ans}。先按整数乘，再点上小数点。`);
});
[['1.25',6],['2.4',5],['0.75',8],['0.45',10]].forEach(([a,n])=>{
  const ans=fmtD(mulD(D(a),D(String(n))));
  addMath('dec_mul', `【算一算】小数应用：彩笔每支 ${a} 元，买了 ${n} 支。一共多少元？`, ans,
    `${a} × ${n} = ${ans}（元）。`, H.dec_mul);
});
[['0.4','3.5'],['0.25','6'],['1.2','2.5'],['0.6','2.5']].forEach(([a,b])=>{
  const ans=fmtD(mulD(D(a),D(b)));
  addMath('dec_mul', `【算一算】小数应用：操场一圈 ${a} 千米，跑了 ${b} 圈。一共跑了多少千米？`, ans,
    `${a} × ${b} = ${ans}（千米）。`, H.dec_mul);
});
[['6.3','0.3'],['7.2','0.16'],['4.5','0.75'],['0.96','0.3']].forEach(([a,b])=>{
  const ans=fmtD(divD(D(a),D(b)));
  bare('dec_div', `${a} ÷ ${b}`, ans, `${a} ÷ ${b} = ${ans}。`);
});
[['3.6',8],['4.8',6],['7.5',5],['1.2',8]].forEach(([a,n])=>{
  const ans=fmtD(divD(D(a),D(String(n))));
  addMath('dec_div', `【算一算】小数应用：${a} 升果汁平均分进 ${n} 个杯子。每个杯子多少升？`, ans,
    `${a} ÷ ${n} = ${ans}（升）。`, H.dec_div);
});
[['4.5','0.75'],['3.6','0.4'],['2.4','0.6'],['6.3','0.9']].forEach(([a,b])=>{
  const ans=fmtD(divD(D(a),D(b)));
  addMath('dec_div', `【算一算】小数应用：一根丝带长 ${a} 米，每段长 ${b} 米。可以剪成几段？`, ans,
    `${a} ÷ ${b} = ${ans}（段）。`, H.dec_div);
});
[[4,'18.8'],[5,'12.5'],[8,'6.4'],[2,'5.5']].forEach(([n,a])=>{
  const ans=fmtD(divD(D(a),D(String(n))));
  addMath('dec_div', `【算一算】小数应用：${n} 支钢笔一共 ${a} 元。每支多少元？`, ans,
    `${a} ÷ ${n} = ${ans}（元）。`, H.dec_div);
});
[['12.6','0.45','3.05'],['8.5','1.25','0.8'],['4','0.75','1.2'],['10.5','0.08','2.4']].forEach(([a,b,c])=>{
  const ans=fmtD(subD(addD(D(a),D(b)),D(c)));
  bare('dec_mix', `${a} + ${b} ${MINUS} ${c}`, ans, `${a} + ${b} ${MINUS} ${c} = ${ans}。先加再减。`);
});
[['6.5','2.35','1.8'],['8','3.25','2.4'],['5.6','1.75','0.9'],['7.25','2.5','1.5']].forEach(([a,b,c])=>{
  const ans=fmtD(subD(subD(D(a),D(b)),D(c)));
  addMath('dec_mix', `【算一算】小数应用：一块布长 ${a} 米，做裙子用去 ${b} 米，做裤子用去 ${c} 米。还剩多少米？`, ans,
    `${a} ${MINUS} ${b} ${MINUS} ${c} = ${ans}（米）。`, H.dec_mix);
});
[['3.75',2,'10'],['1.25',4,'10'],['2.4',3,'10'],['1.8',5,'10']].forEach(([a,n,p])=>{
  const ans=fmtD(subD(D(p), mulD(D(a),D(String(n)))));
  addMath('dec_mix', `【算一算】小数应用：面包每个 ${a} 元，买了 ${n} 个，付了 ${p} 元。应找回多少元？`, ans,
    `${a} × ${n} = ${fmtD(mulD(D(a),D(String(n))))}，${p} ${MINUS} 它 = ${ans}（元）。`, H.dec_mix);
});
[['12.8',2,'0.6',5],['8.5',3,'1.25',4],['6.4',2,'0.75',8],['4.25',4,'0.8',5]].forEach(([a,n1,b,n2])=>{
  const ans=fmtD(addD(mulD(D(a),D(String(n1))), mulD(D(b),D(String(n2)))));
  addMath('dec_mix', `【算一算】小数应用：故事书每本 ${a} 元，买 ${n1} 本；书签每张 ${b} 元，买 ${n2} 张。一共多少元？`, ans,
    `${a}×${n1} + ${b}×${n2} = ${ans}（元）。`, H.dec_mix);
});
[['5','1.25','0.8'],['8.5','2.75','1.2'],['3.6','0.85','2.4'],['6.4','2.15','1.5']].forEach(([a,b,c])=>{
  const ans=fmtD(addD(subD(D(a),D(b)),D(c)));
  addMath('dec_mix', `【算一算】小数应用：米袋里有 ${a} 千克，吃掉 ${b} 千克后又买来 ${c} 千克。现在有多少千克？`, ans,
    `${a} ${MINUS} ${b} + ${c} = ${ans}（千克）。`, H.dec_mix);
});
(function mixMath(){
  const buckets=new Map(), order=[];
  for(const it of MATH){
    if(!buckets.has(it.kind)){buckets.set(it.kind,[]); order.push(it.kind);}
    buckets.get(it.kind).push(it);
  }
  const prefer=['shop','rep_len','dec_add','frame','dec_mul_int','rep_block','dec_sub','rect_dm','dec_mul_dec','rep_den','dec_mul','eq2','dec_div_int','rep_which','dec_div','remain','dec_div_dec','rep_num','dec_mix','trap','rep_from','tri2','rep_as_dec','tree','speed','discount'];
  const keys=prefer.filter(k=>buckets.has(k));
  for(const k of order) if(!keys.includes(k)) keys.push(k);
  const max=Math.max(...keys.map(k=>buckets.get(k).length));
  const mixed=[];
  for(let i=0;i<max;i++) for(const k of keys){const b=buckets.get(k); if(b[i]) mixed.push(b[i]);}
  MATH.length=0; mixed.forEach(x=>MATH.push(x));
})();

const SCENES = [
  {name:'书房', emoji:'📚', bg:'#ffe9c7', floor:'#e7b98a', subjects:['语文','数学']},
  {name:'教室', emoji:'🏫', bg:'#e3f4ff', floor:'#cfe0c3', subjects:['语文','英语']},
  {name:'厨房', emoji:'🍳', bg:'#fff4e0', floor:'#cfe8f0', subjects:['数学','英语']},
  {name:'操场', emoji:'⚽', bg:'#c9f0ff', floor:'#9ee07a', subjects:['数学','英语']},
  {name:'公园', emoji:'🎠', bg:'#dff7e8', floor:'#8fd99a', subjects:['语文','数学']},
  {name:'图书馆', emoji:'📖', bg:'#fff0e0', floor:'#d4b896', subjects:['语文','英语']},
  {name:'天文台', emoji:'🔭', bg:'#2b2a5c', floor:'#3f3a7a', subjects:['数学','英语']},
  {name:'实验室', emoji:'🔬', bg:'#e8f4ff', floor:'#b8d4e8', subjects:['数学','英语']},
  {name:'超市', emoji:'🛒', bg:'#fff5f0', floor:'#f0d4c8', subjects:['数学','英语']},
  {name:'火车站', emoji:'🚂', bg:'#eef2ff', floor:'#c8d0e8', subjects:['语文','数学']},
  {name:'美术室', emoji:'🎨', bg:'#ffe8f0', floor:'#e0c3d0', subjects:['语文','英语']},
  {name:'音乐室', emoji:'🎵', bg:'#f0e8ff', floor:'#d0c0e8', subjects:['英语','语文']},
  {name:'花园', emoji:'🌷', bg:'#e8ffe8', floor:'#90d080', subjects:['语文','数学']},
  {name:'体育馆', emoji:'🏀', bg:'#fff8e0', floor:'#e8c878', subjects:['数学','英语']},
  {name:'电脑室', emoji:'💻', bg:'#e0f0ff', floor:'#a8c0d8', subjects:['英语','数学']},
];

const TITLES = [
  '阳光书房','快乐教室','香香厨房','绿茵操场','蝴蝶公园','静静图书馆','星星屋','奇妙实验室',
  '糖果超市','小火车站','彩虹美术室','叮咚音乐室','秘密小花园','活力体育馆','智慧电脑室',
  '月亮书房','星星教室','甜甜厨房','风筝操场','蜗牛公园','书香角','流星台','气泡实验室',
  '果果超市','云朵车站','蜡笔小屋','歌声房','蒲公英花园','跳跳球馆','键盘小屋',
  '晨光书房','欢笑教室','饼干厨房','跳绳操场','鸭鸭公园','故事馆','银河台','试管屋',
  '气球超市','出发站','调色盘屋','钢琴角','蜜蜂花园','接力馆','鼠标屋',
  '午后书房','智慧教室','果汁厨房','跑道旁','蜻蜓公园','阅读角','卫星台','显微镜屋',
  '草莓超市','候车室','剪纸屋','鼓点房','玫瑰园','乒乓球室','屏幕屋',
  '晚安书房','加油教室','沙拉厨房','沙坑旁','松鼠公园','字典屋','彗星台','烧杯角',
  '牛奶超市','月台边','油画室','长笛房','向日葵园','篮球角','U盘屋',
  '晨读角','习题教室','面条厨房','跳远区','小猫公园','杂志架','北斗台','放大镜屋',
  '面包超市','检票口','折纸屋','小提琴房','薰衣草园','游泳馆门','耳机屋',
  '灯下书房','黑板旁','蒸笼厨房','终点线','狐狸公园','书架顶','望远镜屋','量筒角',
];

function escJs(s){return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n');}

function sceneFor(idx){
  if(idx<24) return SCENES[idx % SCENES.length];
  const j=idx-24, bank=sceneBank.LATER;
  return sceneBank.applyVariant(bank[j % bank.length], Math.floor(j / bank.length));
}
function artFn(scene, mode){
  const custom=sceneBank.drawArt(scene, mode);
  if(custom) return custom;
  const bg=scene.bg, fl=scene.floor, em=scene.emoji, nm=scene.name;
  const accent = (mode*37)%7;
  const doorX = 300 + (accent%3)*4;
  if(nm==='厨房'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  for(var i=0;i<8;i++)for(var j=0;j<2;j++)s+=R(i*50+(j%2)*25,214+j*43,25,43,'#b6dbe6',0,' opacity=".45"');
  s+=g('window',R(18,18,100,78,'#bfe8ff',8,SK)+C(96,40,11,'#fff2a8')+R(28,70,36,20,'#ffd6a5',3));
  s+=g('board',R(130,16,160,96,'#fff8e8',6,' stroke="#a86b38" stroke-width="5"')+T(210,48,14,'📋')+T(210,78,11,'今日菜谱',' fill="#5b4636"')+T(210,96,9,'step by step',' fill="#888"'));
  s+=g('desk',R(24,148,140,58,'#e8c9a0',6,SK)+R(36,156,56,32,f.desk_open?'#fff1d6':'#d9a26c',4,SK)+(f.desk_open?'':C(88,174,5,'#5b4636'))+T(90,218,10,'操作台',' fill="#5b4636"')+T(150,170,16,'🔪'));
  s+=g('box',R(178,158,78,54,'#ff9f68',6,SK)+(f.box_open?R(188,166,58,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3))+T(216,220,10,'食材',' fill="#5b4636"'));
  s+=g('shelf',R(270,22,110,118,'#c98b52',6,SK)+R(280,50,90,8,'#8a5428',2)+R(280,86,90,8,'#8a5428',2)+T(325,70,18,'🥣')+T(325,110,18,'🧂'));
  s+=g('door',R(${doorX},148,72,128,'#ffd6a5',6,SK)+C(${doorX+54},210,5,'#ffcf4d',SK)+R(${doorX+10},160,40,36,'#fff',4)+T(${doorX+30},250,9,'灶台旁',' fill="#5b4636"'));
  s+=T(50,268,22,'${em}')+T(360,268,20,'🍳')+T(200,268,16,'🥖');
  return s;}`;
  }
  if(nm==='操场'||nm==='体育馆'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,200,400,100,'${fl}');
  s+=P('M20 250H380','none',' stroke="#fff" stroke-width="3" opacity=".5"')+C(200,250,36,'none',' stroke="#fff" stroke-width="3" opacity=".45"');
  s+=g('window',R(16,16,110,70,'#87ceeb',8,SK)+C(100,36,12,'#fff2a8')+T(70,70,10,'看台',' fill="#5b4636"'));
  s+=g('board',R(140,14,150,88,'#1a5c3a',6,' stroke="#a86b38" stroke-width="5"')+T(215,48,16,'🏁',' fill="#fff"')+T(215,78,12,'SCORE',' fill="#fff"'));
  s+=g('desk',R(36,150,150,44,'#a86b38',6,SK)+R(48,140,126,16,'#c98b52',4,SK)+(f.desk_open?R(70,158,50,24,'#d9a26c',3):C(100,174,4,'#5b4636'))+T(110,208,10,'长椅',' fill="#5b4636"'));
  s+=g('box',R(200,155,74,54,'#ffb36b',6,SK)+(f.box_open?R(210,163,54,36,'#ffe0b0',3):R(220,170,32,20,'#ffcf4d',3)));
  s+=g('shelf',R(288,36,96,130,'#6aaa5a',6,SK)+T(336,90,26,'⚽')+T(336,140,22,'🏀'));
  s+=g('door',R(${doorX},155,72,120,'#c98b52',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'🏆');
  return s;}`;
  }
  if(nm==='公园'||nm==='花园'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,160,400,140,'${fl}');
  s+=C(60,40,18,'#fff6a8')+C(320,30,12,'#fff',' opacity=".8"')+C(350,50,16,'#fff',' opacity=".7"');
  s+=P('M0 180Q100 140 200 180T400 170','#7ecf6a',' opacity=".35"');
  s+=g('window',R(20,20,90,70,'#bfe8ff',8,SK)+T(65,55,20,'🌳'));
  s+=g('board',R(130,16,150,90,'#e8f8d8',6,' stroke="#5a8a3a" stroke-width="5"')+T(205,50,14,'🪧')+T(205,78,11,'游园须知',' fill="#2d5a1e"'));
  s+=g('desk',R(40,175,130,40,'#8b6914',6,SK)+R(50,168,110,12,'#c4a35a',4,SK)+(f.desk_open?R(70,182,40,20,'#d9a26c',3):C(100,195,4,'#5b4636'))+T(105,228,10,'石凳',' fill="#5b4636"'));
  s+=g('box',R(190,178,72,50,'#ff9fc6',6,SK)+(f.box_open?R(200,186,52,34,'#ffe0f0',3):R(210,192,30,18,'#ffcf4d',3))+T(226,242,10,'花箱',' fill="#5b4636"'));
  s+=g('shelf',R(290,50,90,120,'#90c070',6,SK)+T(335,90,20,'🌷')+T(335,130,20,'🐝'));
  s+=g('door',R(${doorX},160,70,120,'#8b6914',6,SK)+P('M${doorX} 160l35-20 35 20','#6aaa5a',SK)+C(${doorX+54},220,5,'#ffcf4d',SK));
  s+=T(50,275,22,'${em}')+T(360,275,18,'🦋')+T(180,270,16,'🐞');
  return s;}`;
  }
  if(nm==='超市'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  for(var i=0;i<5;i++)s+=R(20+i*74,230,60,50,'#f8e0d0',4,' opacity=".5"');
  s+=g('window',R(16,16,100,78,'#cce8ff',8,SK)+T(66,55,14,'OPEN',' fill="#e74c3c" font-weight="700"'));
  s+=g('board',R(130,14,160,92,'#fff',6,' stroke="#e74c3c" stroke-width="5"')+T(210,45,14,'📢')+T(210,72,12,'特价区',' fill="#c0392b"')+T(210,92,10,'SALE',' fill="#e67e22"'));
  s+=g('desk',R(24,150,130,54,'#e0d0c0',6,SK)+(f.desk_open?R(36,160,70,32,'#fff',4):C(80,178,5,'#5b4636'))+T(90,218,10,'收银台',' fill="#5b4636"')+T(140,175,16,'🧾'));
  s+=g('box',R(175,158,80,54,'#ffb36b',6,SK)+(f.box_open?R(185,166,60,38,'#ffe0b0',3):R(198,174,34,20,'#ffcf4d',3))+T(215,226,10,'购物篮',' fill="#5b4636"'));
  s+=g('shelf',R(270,24,114,130,'#b9793f',6,SK)+R(280,55,94,8,'#8a5428',2)+R(280,95,94,8,'#8a5428',2)+T(327,75,16,'🍪')+T(327,115,16,'🧃'));
  s+=g('door',R(${doorX},155,72,120,'#5dade2',6,SK)+R(${doorX+8},165,56,50,'#aed6f1',4)+C(${doorX+54},230,5,'#ffcf4d',SK)+T(${doorX+30},255,9,'出口',' fill="#1a5276"'));
  s+=T(48,275,22,'${em}')+T(350,275,20,'🛒');
  return s;}`;
  }
  if(nm==='火车站'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=R(0,250,400,8,'#555')+R(0,268,400,4,'#555');
  for(var i=0;i<12;i++)s+=R(10+i*33,250,16,8,'#fff',' opacity=".7"');
  s+=g('window',R(16,16,100,78,'#b0c4de',8,SK)+T(66,55,18,'🚂'));
  s+=g('board',R(128,12,170,96,'#1a1a2e',6,' stroke="#4d8bff" stroke-width="5"')+T(213,40,11,'时刻表',' fill="#7CFC00"')+T(213,62,9,'G123  09:30',' fill="#7CFC00"')+T(213,82,9,'D456  10:15',' fill="#7CFC00"'));
  s+=g('desk',R(28,148,128,54,'#c0c8d0',6,SK)+(f.desk_open?R(40,158,70,32,'#e8eef4',4):C(84,176,5,'#5b4636'))+T(92,216,10,'检票台',' fill="#5b4636"'));
  s+=g('box',R(175,158,78,54,'#8e44ad',6,SK)+(f.box_open?R(185,166,58,38,'#d7bde2',3):R(198,174,34,20,'#ffcf4d',3))+T(214,228,10,'行李箱',' fill="#5b4636"'));
  s+=g('shelf',R(275,28,108,120,'#7f8c9d',6,SK)+T(329,80,22,'🎒')+T(329,120,18,'🧳'));
  s+=g('door',R(${doorX},150,72,124,'#34495e',6,SK)+R(${doorX+10},162,52,40,'#5d6d7e',4)+C(${doorX+54},220,5,'#ffcf4d',SK)+T(${doorX+30},255,9,'站台',' fill="#ecf0f1"'));
  s+=T(48,285,22,'${em}')+T(350,285,20,'🎫');
  return s;}`;
  }
  if(nm==='天文台'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  for(var i=0;i<22;i++){var x=(i*73)%400,y=(i*41)%190;s+=C(x,y,i%3?1.2:2,'#fff',' opacity=".55"');}
  s+=g('window',C(70,70,42,'#14143a',' stroke="#a8a2ff" stroke-width="5"')+C(82,58,10,'#fff6c2')+C(86,54,8,'#14143a'));
  s+=g('board',R(130,16,150,90,'#2a2550',6,' stroke="#a8a2ff" stroke-width="5"')+T(205,50,14,'🌌')+T(205,78,11,'星图',' fill="#c8c4ff"'));
  s+=g('desk',R(30,155,130,50,'#6c5ce7',6,SK)+(f.desk_open?R(42,164,60,30,'#a29bfe',4):C(84,180,5,'#ffeaa7'))+T(95,220,10,'观测台',' fill="#c8c4ff"'));
  s+=g('box',R(180,160,72,52,'#fd79a8',6,SK)+(f.box_open?R(190,168,52,36,'#fab1a0',3):R(200,174,32,18,'#ffcf4d',3)));
  s+=g('shelf',R(280,30,100,120,'#5a4fa0',6,SK)+T(330,80,22,'🔭')+T(330,120,18,'🪐'));
  s+=g('door',R(${doorX},150,72,124,'#8e7cc3',6,SK)+C(${doorX+54},215,5,'#ffd34d',SK));
  s+=T(50,270,22,'${em}')+T(350,270,20,'🚀');
  return s;}`;
  }
  if(nm==='实验室'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=R(10,220,380,10,'#a0b8c8',2);
  s+=g('window',R(18,18,96,74,'#d4f1f9',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,14,160,94,'#ecf5ff',6,' stroke="#2980b9" stroke-width="5"')+T(208,45,14,'⚗️')+T(208,72,11,'实验步骤',' fill="#1a5276"')+T(208,92,9,'H2O · O2',' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#aeb6bf',6,SK)+(f.desk_open?R(40,160,70,34,'#d5dbdb',4):C(88,180,5,'#5b4636'))+T(96,220,10,'实验台',' fill="#5b4636"')+T(150,175,16,'🔬'));
  s+=g('box',R(180,158,76,54,'#58d68d',6,SK)+(f.box_open?R(190,166,56,38,'#d5f5e3',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#85929e',6,SK)+T(330,70,18,'🧪')+T(330,110,18,'💊')+T(330,145,16,'🌡️'));
  s+=g('door',R(${doorX},150,72,124,'#5dade2',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'🧬');
  return s;}`;
  }
  if(nm==='美术室'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fff5dc',6,' stroke="#c98b52" stroke-width="6"')+T(208,45,16,'🖼️')+T(208,75,11,'素描练习',' fill="#5b4636"')+P('M160 90c20-20 40 10 60-15','none',' stroke="#e74c3c" stroke-width="3"'));
  s+=g('desk',R(28,150,136,56,'#e8c9a0',6,SK)+(f.desk_open?R(40,160,70,34,'#fff1d6',4):C(88,180,5,'#5b4636'))+T(96,220,10,'画桌',' fill="#5b4636"')+T(145,172,16,'🖌️'));
  s+=g('box',R(180,158,76,54,'#e74c3c',6,SK)+(f.box_open?R(190,166,56,38,'#f5b7b1',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'颜料',' fill="#5b4636"'));
  s+=g('shelf',R(275,24,110,130,'#d4a574',6,SK)+T(330,70,18,'🎨')+T(330,110,18,'🖍️')+T(330,145,16,'📐'));
  s+=g('door',R(${doorX},150,72,124,'#e8a87c',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'✨');
  return s;}`;
  }
  if(nm==='音乐室'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=g('window',R(18,18,96,74,'#e8daef',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#2c3e50',6,' stroke="#9b59b6" stroke-width="5"')+T(208,40,12,'♪ ♫ ♪',' fill="#f1c40f"')+T(208,70,11,'今日曲目',' fill="#ecf0f1"')+T(208,92,9,'Do Re Mi',' fill="#aed6f1"'));
  s+=g('desk',R(28,150,136,56,'#af7ac5',6,SK)+(f.desk_open?R(40,160,70,34,'#d7bde2',4):C(88,180,5,'#5b4636'))+T(96,220,10,'琴旁桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#f39c12',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#7d3c98',6,SK)+T(330,70,22,'🎹')+T(330,115,20,'🎻')+T(330,150,16,'🥁'));
  s+=g('door',R(${doorX},150,72,124,'#8e44ad',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'🎵');
  return s;}`;
  }
  if(nm==='电脑室'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=g('window',R(18,18,96,74,'#d6eaf8',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#1c2833',6,' stroke="#3498db" stroke-width="5"')+T(208,45,14,'💻')+T(208,72,11,'CODE LAB',' fill="#58d68d"')+T(208,92,9,'hello()', ' fill="#5dade2"'));
  s+=g('desk',R(28,150,136,56,'#5d6d7e',6,SK)+(f.desk_open?R(40,160,70,34,'#aeb6bf',4):C(88,180,5,'#58d68d'))+T(96,220,10,'电脑桌',' fill="#5b4636"')+R(100,155,50,28,'#2c3e50',3)+R(105,160,40,18,'#3498db',2));
  s+=g('box',R(180,158,76,54,'#3498db',6,SK)+(f.box_open?R(190,166,56,38,'#aed6f1',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#34495e',6,SK)+T(330,70,18,'⌨️')+T(330,110,18,'🖱️')+T(330,145,16,'💾'));
  s+=g('door',R(${doorX},150,72,124,'#2c3e50',6,SK)+C(${doorX+54},215,5,'#58d68d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'🖥️');
  return s;}`;
  }
  if(nm==='教室'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=g('window',R(18,18,96,74,'#bfe8ff',8,SK)+C(90,40,10,'#fff2a8')+R(28,60,30,24,'#7ccf6c',3));
  s+=g('board',R(128,12,170,100,'#1e8449',6,' stroke="#a86b38" stroke-width="6"')+T(213,45,12,'黑板',' fill="#fff"')+T(213,70,10,'认真审题',' fill="#d5f5e3"')+T(213,92,9,'1+1=?',' fill="#a9dfbf"'));
  s+=g('desk',R(28,150,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,160,70,34,'#d9a26c',4):C(88,180,5,'#5b4636'))+T(96,220,10,'讲台',' fill="#5b4636"')+T(145,168,14,'📚'));
  s+=g('box',R(180,158,76,54,'#f5b041',6,SK)+(f.box_open?R(190,166,56,38,'#fdebd0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,130,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗'));
  s+=g('door',R(${doorX},150,72,124,'#8fb6e8',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'✏️');
  return s;}`;
  }
  if(nm==='图书馆'){
    return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  s+=g('window',R(18,18,96,74,'#fdebd0',8,SK)+C(90,40,10,'#fff2a8'));
  s+=g('board',R(128,12,160,98,'#fef9e7',6,' stroke="#b7950b" stroke-width="5"')+T(208,45,14,'📖')+T(208,72,11,'本周推荐',' fill="#7d6608"')+T(208,92,9,'静静阅读',' fill="#b7950b"'));
  s+=g('desk',R(28,150,136,56,'#d4b896',6,SK)+(f.desk_open?R(40,160,70,34,'#f5e6d3',4):C(88,180,5,'#5b4636'))+T(96,220,10,'阅览桌',' fill="#5b4636"')+T(145,170,16,'🔎'));
  s+=g('box',R(180,158,76,54,'#a0522d',6,SK)+(f.box_open?R(190,166,56,38,'#e8d5c4',3):R(200,174,34,20,'#ffcf4d',3))+T(218,226,10,'还书箱',' fill="#5b4636"'));
  s+=g('shelf',R(270,16,118,160,'#8b6914',6,SK)+R(280,50,98,8,'#5d4e37',2)+R(280,90,98,8,'#5d4e37',2)+R(280,130,98,8,'#5d4e37',2)+T(329,70,12,'📘')+T(329,110,12,'📙')+T(329,150,12,'📔'));
  s+=g('door',R(${doorX},150,72,124,'#a0522d',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'📚');
  return s;}`;
  }
  // 书房 default + slight mode variation
  return `function(f){var s='';s+=R(0,0,400,300,'${bg}')+R(0,214,400,86,'${fl}');
  for(var i=0;i<8;i++)s+=P('M'+(i*50+10)+' 0v214','none',' stroke="#ffdcae" stroke-width="8" opacity=".35"');
  s+=g('window',R(20,20,96,76,'#bfe8ff',8,SK)+C(96,42,11,'#fff2a8')+R(30,68,32,22,'#7ccf6c',3));
  s+=g('board',R(130,16,150,92,'#2f6b4f',6,' stroke="#a86b38" stroke-width="5"')+T(205,50,14,'📝',' fill="#fff"')+T(205,78,11,'动动脑筋',' fill="#d5f5e3"'));
  s+=g('desk',R(28,148,136,56,'#c98b52',6,SK)+(f.desk_open?R(40,158,70,34,'#d9a26c',4):C(88,178,5,'#5b4636'))+R(50,138,40,14,'#fffaf0',2,' transform="rotate(-6 70 145)"')+T(96,218,10,'书桌',' fill="#5b4636"'));
  s+=g('box',R(180,158,76,54,'#ffb36b',6,SK)+(f.box_open?R(190,166,56,38,'#ffe0b0',3):R(200,174,34,20,'#ffcf4d',3)));
  s+=g('shelf',R(275,24,110,140,'#b9793f',6,SK)+R(285,55,90,8,'#8a5428',2)+R(285,95,90,8,'#8a5428',2)+R(285,135,90,8,'#8a5428',2)+T(330,75,14,'📕')+T(330,115,14,'📗')+T(330,155,14,'🧸'));
  s+=g('door',R(${doorX},150,72,124,'#c98b52',6,SK)+C(${doorX+54},215,5,'#ffcf4d',SK));
  s+=T(48,275,22,'${em}')+T(350,275,20,'✨');
  return s;}`;
}

/** Scene-fitting object display names (ids stay desk/board/box/shelf/door for engine) */
function propsFor(scene){
  if(scene.props) return scene.props;
  const n=scene.name;
  if(n==='厨房') return {desk:'桌子', board:'菜谱板', box:'食材盒', shelf:'碗架', door:'厨房门', window:'窗户', decorNote:'灶台暖暖的，锅铲挂在墙上。'};
  if(n==='操场'||n==='体育馆') return {desk:'长椅', board:'记分板', box:'器材箱', shelf:'球架', door:'场馆门', window:'看台', decorNote:'外面传来啦啦队的加油声。'};
  if(n==='公园'||n==='花园') return {desk:'石凳', board:'告示牌', box:'花箱', shelf:'花架', door:'园门', window:'树荫', decorNote:'蝴蝶停在花瓣上。'};
  if(n==='超市') return {desk:'柜台', board:'促销牌', box:'购物篮', shelf:'货架', door:'出口', window:'橱窗', decorNote:'货架上摆着五颜六色的零食。'};
  if(n==='火车站') return {desk:'检票台', board:'时刻表', box:'行李箱', shelf:'行李架', door:'站台门', window:'站台窗', decorNote:'广播说下一班列车马上进站。'};
  if(n==='实验室') return {desk:'实验台', board:'公式板', box:'试剂箱', shelf:'器材架', door:'实验室门', window:'窗户', decorNote:'试管里冒着小泡泡。'};
  if(n==='天文台') return {desk:'观测台', board:'星图', box:'星盒', shelf:'星图架', door:'观星门', window:'天窗', decorNote:'星星一闪一闪。'};
  if(n==='美术室') return {desk:'画桌', board:'画板', box:'颜料盒', shelf:'画架', door:'画室门', window:'窗户', decorNote:'墙上挂着小朋友的画。'};
  if(n==='音乐室') return {desk:'琴凳旁小桌', board:'乐谱板', box:'乐器盒', shelf:'乐谱架', door:'琴房门', window:'窗户', decorNote:'空气里好像还有音符在跳。'};
  if(n==='电脑室') return {desk:'电脑桌', board:'屏幕墙', box:'配件盒', shelf:'主机架', door:'机房门', window:'窗户', decorNote:'键盘灯一闪一闪。'};
  if(n==='教室') return {desk:'讲台', board:'黑板', box:'作业盒', shelf:'书架', door:'教室门', window:'窗户', decorNote:'粉笔灰轻轻飘着。'};
  if(n==='图书馆') return {desk:'阅览桌', board:'推荐板', box:'还书箱', shelf:'书架', door:'馆门', window:'窗户', decorNote:'安静得能听见翻书声。'};
  // 书房 default
  return {desk:'书桌', board:'黑板', box:'小盒', shelf:'书架', door:'门', window:'窗户', decorNote:'窗外阳光暖暖的。'};
}

function dialOptsFor(missing, extra){
  const base=['天','了','的','一','中','不','无','大','小','心','手','目'];
  const pool=(extra||[]).concat(base);
  const opts=[];
  const add=c=>{ if(c && !opts.includes(c)) opts.push(c); };
  add(missing);
  for(const c of pool){ add(c); if(opts.length>=6) break; }
  while(opts.length<6) add(base[opts.length%base.length]+''); // noop safety
  // 答案不能停在第一格（测试要求 dial 初始不是答案）
  while(opts[0]===missing) opts.push(opts.shift());
  return opts.slice(0,6);
}
function dialOptsFromFull(full, missing){
  return dialOptsFor(missing, [...full].filter(c=>c!==missing));
}

function makeRoom(idx){
  // idx 0 -> r6 ... 94 -> r100
  const idNum = idx+6;
  const id = 'r'+idNum;
  const scene = sceneFor(idx);
  const title = scene.titlePick || (TITLES[idx % TITLES.length] + (idx>=TITLES.length ? (Math.floor(idx/TITLES.length)+1) : ''));
  const mode = idx % 8; // 8 play patterns
  let mathKind='';
  function takeMath(){const m=nextMath(); mathKind=m.kind; return m;}
  const P = propsFor(scene);
  const keyItem = 'key_'+id;
  const scrapItem = 'scrap_'+id;
  const toolItem = 'tool_'+id;
  const comboItem = 'combo_'+id;
  const giftItem = 'gift_'+id;
  const partA = 'partA_'+id;
  const partB = 'partB_'+id;
  const mealItem = 'meal_'+id;

  let sub, story, objects, combos, hints, explain, solution, items;
  const mentionXiaohuang = idx%7===0;
  const hi = (until, obj, tiers)=>({until, ...(obj?{obj}:{}) , tiers});

  // shared decorative views
  const decorObjs = (extra=[]) => {
    const base = [
      {id:'window', name:P.window, box:[24,24,90,70], views:[{text:P.decorNote}]},
    ];
    return base.concat(extra);
  };

  if(mode===0){
    // Escape: math lock → key → door (keep ~1/8)
    const m = takeMath();
    sub = '数学 · 挑战';
    story = [
      mentionXiaohuang ? `小黄走进了${scene.name}，门在身后轻轻关上。` : `你来到了${scene.name}。`,
      `${P.desk}上锁着一个小抽屉，旁边有道题。`,
      `解开密码拿到钥匙，打开${P.door}，挑战就成功啦！`
    ];
    const hasDot = String(m.answer).includes('.');
    objects = [
      {id:'door', name:P.door, box:[310,160,70,120], views:[
        {text:`${P.door}锁着，需要钥匙。`, use:[{item:keyItem, win:true, text:`钥匙一转，${P.door}开了！「${title}」挑战成功！`}], wrong:'要用钥匙才能开门。'}
      ]},
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}上有密码锁，旁边贴着纸条：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入密码',
            ok:{set:['desk_open'], text:'打开了！里面有一把钥匙。'}, bad:'密码不对哦，再算一算。'}},
        {if:['desk_open','!took_key'], text:'里面有一把钥匙。', take:{give:[keyItem], set:['took_key'], text:'你拿到了钥匙。'}},
        {text:'已经空了。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:`${P.board}上写着：仔细审题，一步一步算。`}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上摆着一些小物件。`}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:`${P.box}是空的。`}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[
      hi('desk_open','desk',[`先看看${P.desk}上的纸条。`,'纸条上有一道数学题，算出答案就是密码。', m.hintStep || '一步一步算，注意单位换算和运算顺序。']),
      hi('took_key','desk',['抽屉开了。',`点${P.desk}，拿起钥匙。`,'把钥匙拿起来。']),
      hi('escaped','door',['你有钥匙了！',`选中钥匙，再点${P.door}。`,'先点钥匙，再点目标。'])
    ];
    explain=[m.explain,'打开抽屉拿到钥匙。',`用钥匙打开${P.door}，挑战成功。`];
    solution=[['code','desk',String(m.answer)],['take','desk'],['use','door',keyItem]];
    items={[keyItem]:{name:'小钥匙',icon:'🗝️',desc:'一把亮闪闪的小钥匙。'}};
  } else if(mode===1){
    // Quiz win: correct lock → win immediately (no key/door needed; door decorative)
    const m = takeMath();
    sub = '数学 · 闯关';
    story = [
      `欢迎来到「${title}」挑战站！`,
      mentionXiaohuang ? `小黄指着${P.desk}：“把这道题做对，就算过关！”` : `${P.desk}上有一道题，做对就通关。`,
      `不一定要出门——答对就是胜利！`
    ];
    const hasDot = String(m.answer).includes('.');
    objects = [
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}上的挑战题：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入答案',
            ok:{set:['desk_open'], win:true, text:`答对啦！「${title}」挑战成功！`}, bad:'再算一算。'}},
        {text:'题目已经解开啦。'}
      ]},
      {id:'door', name:P.door, box:[310,160,70,120], views:[{text:`${P.door}开着，不过这关不用出门——答对题就行。`}]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:`${P.board}上写着：答对即通关！`}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上有奖杯模型。`}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:'盒子里有一张空白答题卡。'}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[hi('escaped','desk',[`点开${P.desk}上的题。`,'仔细看【算一算】，多步时先算哪一步？', m.hintStep || '按公式一步步算，别漏单位。'])];
    explain=[m.explain,'在桌子/长椅等物件上输入答案。','答对题目，直接挑战成功。'];
    solution=[['code','desk',String(m.answer)]];
    items={};
  } else if(mode===2){
    // Give to NPC: unlock gift → use on npc
    const m = takeMath();
    const npcName = scene.name==='厨房' ? '机器人小厨' : (idx%2===0 ? '小花猫' : '小管家');
    const npcEmoji = scene.name==='厨房' ? '🤖' : (idx%2===0 ? '🐱' : '🧑‍🏫');
    const want = scene.name==='厨房' ? '点心' : '礼物';
    sub = '数学 · 助人';
    story = [
      `你走进${scene.name}，遇见了${npcName}。`,
      mentionXiaohuang ? `小黄说：“帮${npcName}拿到${want}吧！”` : `${npcName}说：“帮我拿到${want}，任务就完成啦！”`,
      `先解开${P.desk}上的题，再把${want}交给${npcName}。`
    ];
    const hasDot = String(m.answer).includes('.');
    objects = [
      {id:'door', name:npcName, box:[310,150,70,120], views:[
        {text:`${npcName}眨眨眼：“我想要${want}！”`, use:[{item:giftItem, take:[giftItem], win:true, text:`${npcName}开心地收下了！「${title}」任务完成！`}], wrong:`${npcName}摇摇头：“我要的是${want}哦。”`}
      ]},
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}抽屉锁着，纸条上有题：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入密码',
            ok:{set:['desk_open'], text:`抽屉开了，里面有一份${want}！`}, bad:'再算算。'}},
        {if:['desk_open','!took_gift'], text:`里面有一份${want}。`, take:{give:[giftItem], set:['took_gift'], text:`你拿到了${want}。`}},
        {text:'抽屉空了。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:`${P.board}上写着：送给${npcName}就过关。`}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上摆着${npcEmoji}的照片。`}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:'空空的。'}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[
      hi('desk_open','desk',[`先解开${P.desk}的密码。`,'看纸条上的题，可能要算两步。', m.hintStep || '先写出算式再计算。']),
      hi('took_gift','desk',[`把${want}拿起来。`,`点${P.desk}拿起。`,'拿起来。']),
      hi('escaped','door',[`把${want}交给${npcName}。`,`选中${want}，再点${npcName}。`,'先点物品，再点对方。'])
    ];
    explain=[m.explain,`拿到${want}。`,`交给${npcName}，任务完成。`];
    solution=[['code','desk',String(m.answer)],['take','desk'],['use','door',giftItem]];
    items={[giftItem]:{name:want,icon:scene.name==='厨房'?'🧁':'🎁',desc:`给${npcName}的${want}。`}};
  } else if(mode===3){
    // Cook/assemble: take A + take B → combine → use on oven/robot
    const m = takeMath();
    const rid = nextRid();
    sub = idx%2===0 ? '数学 · 动手' : '数学 · 益智';
    const targetName = scene.name==='厨房' ? '烤箱' : (scene.name==='实验室' ? '实验台机器' : '组装台');
    story = [
      `「${title}」要动手做一件东西！`,
      mentionXiaohuang ? `小黄东找西找：“两样材料在哪里？”` : `先解开密码拿到材料，再拼起来。`,
      `做好以后放到${targetName}上，就算完成任务。`
    ];
    const hasDot = String(m.answer).includes('.');
    objects = [
      {id:'door', name:targetName, box:[310,160,70,120], views:[
        {text:`${targetName}等着成品。`, use:[{item:comboItem, take:[comboItem], win:true, text:`放上去——成功！「${title}」做好啦！`}], wrong:'要把两样材料拼好再放上来。'}
      ]},
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}锁着：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入密码',
            ok:{set:['desk_open'], text:'开了！里面有材料 A。'}, bad:'再算一算。'}},
        {if:['desk_open','!took_a'], text:'里面有材料 A。', take:{give:[partA], set:['took_a'], text:'你拿到了材料 A。'}},
        {text:'空了。'}
      ]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[
        {if:['!took_b'], text:`${P.shelf}上有材料 B。`, take:{give:[partB], set:['took_b'], text:'你拿到了材料 B。'}},
        {text:'没有东西了。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:`${P.board}：材料 A + 材料 B = 成品。顺便一题：${rid.q}`, note:'温馨提示：在物品栏把两样材料点在一起组合。'}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:'空箱子。'}]},
      ...decorObjs()
    ];
    combos=[{a:partA,b:partB,give:[comboItem],set:['made_combo'],text:'两样材料拼在一起，成品做好了！'}];
    hints=[
      hi('desk_open','desk',[`先开${P.desk}。`,'算纸条上的题。', m.hintStep || '列出算式，仔细算。']),
      hi('took_a','desk',['拿起材料 A。','点开拿起。','拿起来。']),
      hi('took_b','shelf',[`看看${P.shelf}。`,'拿起材料 B。','点架子拿。']),
      hi('made_combo',null,['两样材料可以组合。','物品栏先点一个再点另一个。','拼成成品。']),
      hi('escaped','door',[`把成品放到${targetName}。`,'选中成品再点目标。','放上去就过关。'])
    ];
    explain=[m.explain,'拿到材料 A 和 B。',`组合成成品，放到${targetName}。`];
    solution=[['code','desk',String(m.answer)],['take','desk'],['take','shelf'],['combine',partA,partB],['use','door',comboItem]];
    items={
      [partA]:{name:'材料A',icon:'🧩',desc:'一块材料。'},
      [partB]:{name:'材料B',icon:'🔧',desc:'另一块材料。'},
      [comboItem]:{name:'成品',icon:'⭐',glow:1,desc:'拼好的成品。'}
    };
  } else if(mode===4){
    // Dual lock: both correct → second lock wins (stamp optional)
    const m = takeMath();
    const useEn = idx%3!==1; // 英语约 2/3，语文（成语/词语）约 1/3
    let lock2note, lock2ans, lock2kind, lock2explain, lock2hint, lock2len, lock2opts;
    if(useEn){
      const e = nextEn();
      lock2note = `【英语题】${e.q}\n（线索：${e.hint}）`;
      lock2ans = e.a; lock2kind='alpha'; lock2len=e.a.length;
      lock2explain = `${e.q} → ${e.a}`;
      lock2hint = [e.hint, '根据词性、首字母和课本单元想想，不要偷看答案哦。'];
      sub = '数学 · 英语';
    } else {
      // 语文：成语 / 词语交替（古诗留给 mode6）
      const useIdiom = idx%2===0;
      if(useIdiom){
        const idm = nextIdiom();
        const dialOpts = dialOptsFromFull(idm.full, idm.missing);
        lock2note = `【成语填空】${idm.blank}\n（想一想这个成语缺哪个字）`;
        lock2ans = idm.missing; lock2kind='dial'; lock2opts=[dialOpts];
        lock2explain = `成语「${idm.full}」缺「${idm.missing}」。${idm.hint}`;
        lock2hint = ['这是一个四字成语，看空格前后想想。', '结合上下字的搭配来猜。', idm.hint];
      } else {
        const w = nextWord();
        const dialOpts = dialOptsFromFull(w.full, w.missing);
        lock2note = `【词语填空】${w.blank}\n（写出正确的字，组成词语）`;
        lock2ans = w.missing; lock2kind='dial'; lock2opts=[dialOpts];
        lock2explain = `词语「${w.full}」缺「${w.missing}」。${w.hint}`;
        lock2hint = ['这是课表里的双字词，看空着的位置。', '想想常见搭配。', w.hint];
      }
      sub = '数学 · 语文';
    }
    story = [
      `双锁挑战站「${title}」！`,
      mentionXiaohuang ? `小黄说：“两道题都做对，就过关！”` : `先过${P.desk}，再过${P.box}。`,
      `两关都对，不用找门——直接挑战成功！`
    ];
    const hasDot = String(m.answer).includes('.');
    const boxViews = [
      {if:['!box_open'], text:`${P.box}上还有第二关：`, note:lock2note,
        lock: lock2kind==='alpha'
          ? {kind:'alpha', len:lock2len, answer:lock2ans, prompt:'输入英文', ok:{set:['box_open'], win:true, text:`两关都过啦！「${title}」挑战成功！`}, bad:'再想想。'}
          : {kind:'dial', opts:lock2opts, answer:lock2ans, prompt:'转字', ok:{set:['box_open'], win:true, text:`两关都过啦！「${title}」挑战成功！`}, bad:'再读读诗。'}},
      {text:'第二关已经完成。'}
    ];
    objects = [
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`第一关（数学）：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入密码',
            ok:{set:['desk_open'], text:'第一关过了！去看第二关吧。'}, bad:'再算算。'}},
        {text:'第一关已经打开了。'}
      ]},
      {id:'box', name:P.box, box:[200,160,70,50], views:boxViews},
      {id:'door', name:P.door, box:[310,160,70,120], views:[{text:`${P.door}只是装饰，这关不用出门。`}]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:'提示：先第一关，后第二关。两关都对就赢！'}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上放着完成印章模型。`}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[
      hi('desk_open','desk',['先过第一关数学题。','仔细看【算一算】，可能不止一步。', m.hintStep || '按题目要求列式计算。']),
      hi('escaped','box',['去开第二关。', lock2hint[0], lock2hint[1]])
    ];
    explain=[m.explain, lock2explain, '两关都对，挑战成功。'];
    solution=[['code','desk',String(m.answer)],['code','box',lock2ans]];
    items={};
  } else if(mode===5){
    // Pass badge: combine scrap+tool → swipe on reader (not door)
    const m = takeMath();
    sub = '数学 · 通行证';
    story = [
      `「${title}」要刷通行证才能完成任务。`,
      mentionXiaohuang ? `小黄：“卡片和徽章拼起来，去刷卡机刷一下！”` : `先拿卡片和徽章，拼成通行证，再去刷卡机。`,
      `刷卡机不是门——刷对了就算成功！`
    ];
    const hasDot = String(m.answer).includes('.');
    objects = [
      {id:'door', name:'刷卡机', box:[310,160,70,120], views:[
        {text:'一台刷卡机，嘀嘀作响。', use:[{item:comboItem, take:[comboItem], win:true, text:`嘀——通过！「${title}」刷卡成功！`}], wrong:'要先做好通行证再刷。'}
      ]},
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}锁着：`, note:m.note,
          lock:{kind:'num', len:String(m.answer).length, dot:hasDot, answer:String(m.answer), prompt:'输入密码',
            ok:{set:['desk_open'], text:'开了，里面有一张卡片。'}, bad:'再算一算。'}},
        {if:['desk_open','!took_scrap'], text:'里面有一张卡片。', take:{give:[scrapItem], set:['took_scrap'], text:'你拿到了卡片。'}},
        {text:'空了。'}
      ]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[
        {if:['!took_tool'], text:`${P.shelf}上有一枚徽章。`, take:{give:[toolItem], set:['took_tool'], text:'你拿到了徽章。'}},
        {text:'没有了。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:'卡片 + 徽章 = 通行证，然后去刷卡机。'}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:'空的。'}]},
      ...decorObjs()
    ];
    combos=[{a:scrapItem,b:toolItem,give:[comboItem],set:['made_combo'],text:'卡片和徽章拼成了通行证！'}];
    hints=[
      hi('desk_open','desk',[`先开${P.desk}。`,'算题，注意多步运算。', m.hintStep || '先分段算，再合并。']),
      hi('took_scrap','desk',['拿卡片。','点开拿起。','拿起来。']),
      hi('took_tool','shelf',['还要徽章。',`看${P.shelf}。`,'拿起徽章。']),
      hi('made_combo',null,['卡片和徽章可组合。','物品栏点两个拼。','拼成通行证。']),
      hi('escaped','door',['去刷卡机。','选中通行证点刷卡机。','刷卡过关。'])
    ];
    explain=[m.explain,'拿到卡片和徽章。','组合成通行证，刷卡机刷过关。'];
    solution=[['code','desk',String(m.answer)],['take','desk'],['take','shelf'],['combine',scrapItem,toolItem],['use','door',comboItem]];
    items={
      [scrapItem]:{name:'卡片',icon:'💳',desc:'一张小小的卡片。'},
      [toolItem]:{name:'徽章',icon:'🏅',desc:'一枚可爱的徽章。'},
      [comboItem]:{name:'通行证',icon:'🎫',glow:1,desc:'卡片和徽章拼成的通行证。'}
    };
  } else if(mode===6){
    // 语文转盘：古诗 / 成语 / 词语 轮换
    const langKind = Math.floor(idx/8) % 3; // 0 poem, 1 idiom, 2 word
    let note, ans, opts, explainLines, hintTiers, label, boardText;
    if(langKind===0){
      const p = nextPoem();
      note = `《${p.title}》　${p.author}\n${p.blank}\n（想一想课文里完整的一句）`;
      ans = p.missing; opts = dialOptsFor(p.missing);
      explainLines = [`《${p.title}》：${p.full}`, `缺的字是「${p.missing}」。`, '转对转盘，挑战成功。'];
      hintTiers = ['看看墙上的古诗，少了哪个字？', `这是《${p.title}》，${p.author}。`, '读空格前后的字，回忆课文原句，不要直接翻答案。'];
      label = '古诗'; boardText = `墙上写着《${p.title}》（${p.author}），少了一个字：`;
      sub = '语文 · 古诗';
      story = [
        `古诗转盘挑战「${title}」！`,
        mentionXiaohuang ? `小黄想起课文里读过《${p.title}》。` : `墙上的诗少了一个字。`,
        `转到正确的字，就算挑战成功——不用找门！`
      ];
    } else if(langKind===1){
      const idm = nextIdiom();
      note = `【成语填空】${idm.blank}\n（想一想这个成语缺哪个字）`;
      ans = idm.missing; opts = dialOptsFromFull(idm.full, idm.missing);
      explainLines = [`成语「${idm.full}」`, `缺的字是「${idm.missing}」。${idm.hint}`, '转对转盘，挑战成功。'];
      hintTiers = ['这是词语表里的四字成语，看空格。', '结合前后字想想常见搭配。', idm.hint];
      label = '成语'; boardText = '黑板上写着一个成语，少了一个字：';
      sub = '语文 · 成语';
      story = [
        `成语转盘挑战「${title}」！`,
        mentionXiaohuang ? `小黄说：“词语表里刚学过这个成语！”` : `匣子上的成语少了一个字。`,
        `转到正确的字，就算挑战成功——不用找门！`
      ];
    } else {
      const w = nextWord();
      note = `【词语填空】${w.blank}\n（写出正确的字，组成词语）`;
      ans = w.missing; opts = dialOptsFromFull(w.full, w.missing);
      explainLines = [`词语「${w.full}」`, `缺的字是「${w.missing}」。${w.hint}`, '转对转盘，挑战成功。'];
      hintTiers = ['这是词语表里的双字词。', '看看空着的是第几个字。', w.hint];
      label = '词语'; boardText = '黑板上写着一个词语，少了一个字：';
      sub = '语文 · 词语';
      story = [
        `词语转盘挑战「${title}」！`,
        mentionXiaohuang ? `小黄指着黑板：“把缺的字转出来！”` : `黑板上的词语少了一个字。`,
        `转到正确的字，就算挑战成功——不用找门！`
      ];
    }
    objects = [
      {id:'box', name: label+'匣转盘', box:[200,160,70,50], views:[
        {if:['!box_open'], text:'匣子上有一个汉字转盘。', note,
          lock:{kind:'dial', opts:[opts], answer:ans, prompt:'转到正确的字',
            ok:{set:['box_open'], win:true, text:`转对了！「${title}」${label}挑战成功！`}, bad:'不对哦，再想想。'}},
        {text:'转盘已经转对啦。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[
        {text:boardText, note}
      ]},
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[{text:`${P.desk}上有语文课本，翻开正好是词语表。`}]},
      {id:'door', name:P.door, box:[310,160,70,120], views:[{text:`${P.door}开着，这关靠转盘通关。`}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上有《成语词典》。`}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[hi('escaped','board', hintTiers)];
    explain=explainLines;
    solution=[['code','box',ans]];
    items={};
  } else {
    // mode 7: English spelling → win on correct
    const e = nextEn();
    const tagLabel = e.tag==='listen' ? '听力' : (e.tag==='write' ? '小作文' : (e.tag==='dialog' ? '对话' : '拼写'));
    sub = `英语 · ${tagLabel}`;
    story = [
      e.tag==='listen' ? `英语听力站「${title}」！（读一读广播文字再答题）` :
        e.tag==='write' ? `英语小作文站「${title}」！（把安全 tip / 通知补完整）` :
        `英语${tagLabel}站「${title}」！`,
      mentionXiaohuang ? `小黄看到英文卡片：“用大写字母拼出来！”` : `${P.desk}上的英文卡片写着一道题。`,
      `拼对就算挑战成功，不用找钥匙开门。`
    ];
    objects = [
      {id:'desk', name:P.desk, box:[30,150,120,50], views:[
        {if:['!desk_open'], text:`${P.desk}小盒上有字母锁，旁边是英文卡片：`, note:`【英语题】${e.q}\n（线索：${e.hint}）`,
          lock:{kind:'alpha', len:e.a.length, answer:e.a, prompt:'输入英文大写',
            ok:{set:['desk_open'], win:true, text:`Correct! 「${title}」英语挑战成功！`}, bad:'不对哦，再想想英文怎么说。'}},
        {text:'小盒已经打开啦。'}
      ]},
      {id:'board', name:P.board, box:[130,20,150,90], views:[{text:'Spell it in CAPITAL letters! 拼对即通关。'}]},
      {id:'door', name:P.door, box:[310,160,70,120], views:[{text:`${P.door}开着，这关靠拼写通关。`}]},
      {id:'shelf', name:P.shelf, box:[290,40,90,120], views:[{text:`${P.shelf}上有英语单词卡片。`}]},
      {id:'box', name:P.box, box:[200,160,70,50], views:[{text:'玩具箱里有一只小熊。'}]},
      ...decorObjs()
    ];
    combos=[];
    hints=[hi('escaped','desk',['看看英文卡片上的问题，用大写字母拼。', e.hint, '结合词性、首字母和中文意思方向来猜，不要直接写答案。'])];
    explain=[`英文题：${e.q}`, `正确答案是 ${e.a}。（通关后讲解）`, '拼对通关。'];
    solution=[['code','desk',e.a]];
    items={};
  }

  objects.forEach(o=>{
    o.views.forEach(v=>{
      if(v.lock && v.lock.kind==='num'){
        v.lock.len = Math.max(v.lock.len||1, String(v.lock.answer).length);
      }
    });
  });

  return {
    id, title, emoji: scene.emoji, sub, story, objects, combos, hints, explain, solution,
    scene, mode, mathKind, art: artFn(scene, mode), items
  };
}

const rooms = [];
let mathI=0, poemI=0, enI=0, ridI=0, idiomI=0, wordI=0;
function nextMath(){const m=MATH[mathI%MATH.length];mathI++;return m;}
function nextPoem(){const p=POEMS[poemI%POEMS.length];poemI++;return p;}
function nextEn(){const e=EN_QA[enI%EN_QA.length];enI++;return e;}
function nextRid(){const r=RIDDLES[ridI%RIDDLES.length];ridI++;return r;}
function nextIdiom(){const i=IDIOMS[idiomI%IDIOMS.length];idiomI++;return i;}
function nextWord(){const w=WORDS[wordI%WORDS.length];wordI++;return w;}

// 小黄已刷透前 20 关（手工 r1–r5 + 生成 r6–r20），本版只上线其后 30 关（原 r21–r50）
// 仍按 0..44 顺序 makeRoom，保证题库指针与旧版 r21–r50 一致，再 slice 掉前 15 个生成关
const SKIP_GEN = 15; // makeRoom idx 0..14 → 旧 r6..r20
const KEEP = 30;     // 旧 r21..r50
for(let i=0;i<SKIP_GEN+KEEP;i++) rooms.push(makeRoom(i));
rooms.splice(0, SKIP_GEN);

// Emit rooms-extra.js
let out = [];
out.push('/*ROOMS-EXTRA-START*/');
out.push('(function(G){');
out.push("'use strict';");
out.push('function R(x,y,w,h,f,rx,ex){return \'<rect x="\'+x+\'" y="\'+y+\'" width="\'+w+\'" height="\'+h+\'" fill="\'+f+\'"\'+(rx?\' rx="\'+rx+\'"\':\'\')+(ex||\'\')+\'/>\';}');
out.push('function T(x,y,s,ch,ex){return \'<text x="\'+x+\'" y="\'+y+\'" font-size="\'+s+\'" text-anchor="middle" dominant-baseline="central"\'+(ex||\'\')+\'>\'+ch+\'</text>\';}');
out.push('function P(d,f,ex){return \'<path d="\'+d+\'" fill="\'+f+\'"\'+(ex||\'\')+\'/>\';}');
out.push('function C(x,y,r,f,ex){return \'<circle cx="\'+x+\'" cy="\'+y+\'" r="\'+r+\'" fill="\'+f+\'"\'+(ex||\'\')+\'/>\';}');
out.push('function el(cx,cy,rx,ry,f,ex){return \'<ellipse cx="\'+cx+\'" cy="\'+cy+\'" rx="\'+rx+\'" ry="\'+ry+\'" fill="\'+f+\'"\'+(ex||\'\')+\'/>\';}');
out.push('var SK=\' stroke="#5b4636" stroke-width="2.5" stroke-linejoin="round"\';');
out.push('function g(id,inner){return \'<g class="obj" data-obj="\'+id+\'">\'+inner+\'</g>\';}');
out.push('var ITEMS=G.PZ_ITEMS;');

const allItems = {};
rooms.forEach(r=>{Object.assign(allItems, r.items);});
for(const [k,v] of Object.entries(allItems)){
  out.push(`ITEMS['${k}']={name:'${escJs(v.name)}',icon:'${v.icon}'${v.glow?',glow:1':''},desc:'${escJs(v.desc)}'};`);
}

function emitRoom(r){
  const lines = [];
  lines.push(`var ${r.id}={id:'${r.id}',title:'${escJs(r.title)}',emoji:'${r.emoji}',sub:'${escJs(r.sub)}',`);
  lines.push(` story:[${r.story.map(s=>`'${escJs(s)}'`).join(',')}],`);
  lines.push(' objects:[');
  r.objects.forEach((o,oi)=>{
    lines.push(`  {id:'${o.id}',name:'${escJs(o.name)}',box:[${o.box.join(',')}],views:[`);
    o.views.forEach((v,vi)=>{
      let s = '    {';
      if(v.if) s += `if:[${v.if.map(x=>`'${x}'`).join(',')}],`;
      s += `text:'${escJs(v.text)}',`;
      if(v.note) s += `note:'${escJs(v.note)}',`;
      if(v.lock){
        const L=v.lock;
        s += `lock:{kind:'${L.kind}',`;
        if(L.len!=null) s += `len:${L.len},`;
        if(L.dot) s += `dot:true,`;
        if(L.opts){
          if(L.kind==='dial') s += `opts:[${L.opts.map(row=>`[${row.map(c=>`'${escJs(c)}'`).join(',')}]`).join(',')}],`;
          else if(L.kind==='choice') s += `opts:[${L.opts.map(o=>`{v:'${o.v}',c:'${o.c}'}`).join(',')}],`;
        }
        s += `answer:'${escJs(L.answer)}',prompt:'${escJs(L.prompt)}',`;
        s += `ok:{${L.ok.set?`set:[${L.ok.set.map(x=>`'${x}'`).join(',')}],`:''}${L.ok.give?`give:[${L.ok.give.map(x=>`'${x}'`).join(',')}],`:''}${L.ok.win?'win:true,':''}text:'${escJs(L.ok.text)}'},`;
        s += `bad:'${escJs(L.bad)}'},`;
      }
      if(v.take){
        s += `take:{give:[${v.take.give.map(x=>`'${x}'`).join(',')}],set:[${v.take.set.map(x=>`'${x}'`).join(',')}],text:'${escJs(v.take.text)}'},`;
      }
      if(v.use){
        s += `use:[${v.use.map(u=>{
          let uu=`{item:'${u.item}',`;
          if(u.take) uu+=`take:[${u.take.map(x=>`'${x}'`).join(',')}],`;
          if(u.give) uu+=`give:[${u.give.map(x=>`'${x}'`).join(',')}],`;
          if(u.set) uu+=`set:[${u.set.map(x=>`'${x}'`).join(',')}],`;
          if(u.win) uu+='win:true,';
          uu+=`text:'${escJs(u.text)}'}`;
          return uu;
        }).join(',')}],`;
      }
      if(v.wrong) s += `wrong:'${escJs(v.wrong)}',`;
      s = s.replace(/,$/, '') + '}';
      lines.push(s + (vi<o.views.length-1?',':''));
    });
    lines.push('  ]}' + (oi<r.objects.length-1?',':''));
  });
  lines.push(' ],');
  if(r.combos.length){
    lines.push(` combos:[${r.combos.map(c=>`{a:'${c.a}',b:'${c.b}',give:[${c.give.map(x=>`'${x}'`).join(',')}],set:[${c.set.map(x=>`'${x}'`).join(',')}],text:'${escJs(c.text)}'}`).join(',')}],`);
  } else {
    lines.push(' combos:[],');
  }
  lines.push(' hints:[');
  r.hints.forEach((h,hi2)=>{
    lines.push(`  {until:'${h.until}',${h.obj?`obj:'${h.obj}',`:''}tiers:[${h.tiers.map(t=>`'${escJs(t)}'`).join(',')}]}${hi2<r.hints.length-1?',':''}`);
  });
  lines.push(' ],');
  lines.push(` explain:[${r.explain.map(e=>`'${escJs(e)}'`).join(',')}],`);
  lines.push(` solution:[${r.solution.map(a=>`[${a.map(x=>`'${escJs(x)}'`).join(',')}]`).join(',')}],`);
  lines.push(` art:${r.art}`);
  lines.push('};');
  return lines.join('\n');
}

rooms.forEach(r=>out.push(emitRoom(r)));

out.push('var EXTRA=[' + rooms.map(r=>r.id).join(',') + '];');
out.push('G.PZ_ROOMS=G.PZ_ROOMS.concat(EXTRA);');
out.push('})(typeof window!==\'undefined\'?window:globalThis);');
out.push('/*ROOMS-EXTRA-END*/');

const dest = path.join(__dirname, '../src/rooms-extra.js');
fs.writeFileSync(dest, out.join('\n'));
console.log('Wrote', dest, 'rooms', rooms.length, 'bytes', fs.statSync(dest).size);

const mix={语文:0,数学:0,英语:0};
rooms.forEach(r=>{
  if(/语文|古诗/.test(r.sub)) mix['语文']++;
  if(/数学/.test(r.sub)) mix['数学']++;
  if(/英语/.test(r.sub)) mix['英语']++;
});
const modeCount={};
rooms.forEach(r=>{modeCount[r.mode]=(modeCount[r.mode]||0)+1;});
console.log('subject tags', mix);
console.log('mode counts (0 escape..7 english)', modeCount);
const kc={}; rooms.forEach(r=>{if(r.mathKind)kc[r.mathKind]=(kc[r.mathKind]||0)+1;});
console.log('math kinds used', kc);
const sc={}; rooms.forEach(r=>{const k=(r.scene.art||r.scene.name)+(r.scene.variant!=null?('@'+r.scene.variant):''); sc[k]=(sc[k]||0)+1;});
console.log('scenes', sc);
console.log('first', rooms[0]&&rooms[0].id, rooms[0]&&rooms[0].title, 'last', rooms[rooms.length-1]&&rooms[rooms.length-1].id);
console.log('total rooms', rooms.length);
