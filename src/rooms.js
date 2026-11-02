/*ROOMS-START*/
(function(G){
'use strict';
function R(x,y,w,h,f,rx,ex){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"'+(rx?' rx="'+rx+'"':'')+(ex||'')+'/>';}
function T(x,y,s,ch,ex){return '<text x="'+x+'" y="'+y+'" font-size="'+s+'" text-anchor="middle" dominant-baseline="central"'+(ex||'')+'>'+ch+'</text>';}
function P(d,f,ex){return '<path d="'+d+'" fill="'+f+'"'+(ex||'')+'/>';}
function C(x,y,r,f,ex){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(ex||'')+'/>';}
var SK=' stroke="#5b4636" stroke-width="2.5" stroke-linejoin="round"';
function g(id,inner){return '<g class="obj" data-obj="'+id+'">'+inner+'</g>';}
G._R=R;G._T=T;G._P=P;G._C=C;G._SK=SK;G._g=g;
var ITEMS={
  torch:{name:'手电筒',icon:'🔦',desc:'没电的手电筒。'},
  battery:{name:'电池',icon:'🔋',desc:'两节电池。'},
  torch_on:{name:'亮着手电筒',icon:'🔦',glow:1,desc:'能照亮黑暗的地方。'},
  key_m1:{name:'教室钥匙',icon:'🗝️',desc:'通往五年级教室。'},
  pass_half:{name:'半张通行证',icon:'🎫',desc:'通行证的左半边。'},
  pass_half2:{name:'半张通行证',icon:'🎟️',desc:'通行证的右半边。'},
  pass_full:{name:'完整通行证',icon:'🛂',glow:1,desc:'通往语文阅读角。'},
  bat2:{name:'夹灯电池',icon:'🔋',desc:'可以给小夹灯供电。'},
  lib_card:{name:'借阅卡',icon:'💳',glow:1,desc:'图书室借阅卡。'},
  radio_pass:{name:'广播室证',icon:'📻',glow:1,desc:'通往英语广播室。'},
  cab_key:{name:'小钥匙',icon:'🔑',desc:'磁带柜钥匙。'},
  tape:{name:'EXIT磁带',icon:'📼',desc:'内侧写着门禁提示。'},
  map_a:{name:'地图左半',icon:'🗺️',desc:'校园地图左半边。'},
  map_b:{name:'地图右半',icon:'🗾',desc:'校园地图右半边。'},
  map_ab:{name:'未粘牢地图',icon:'🧾',desc:'对上了但还没粘牢。'},
  glue:{name:'固体胶',icon:'🧴',desc:'可以把纸粘在一起。'},
  map_full:{name:'完整地图',icon:'🗺️',glow:1,desc:'标出实验室位置的校园地图。'},
  chip:{name:'门禁芯片',icon:'💳',glow:1,desc:'旧楼走廊门禁芯片。'},
  fuse:{name:'保险丝',icon:'🔌',desc:'电闸箱用的保险丝。'},
  office_key:{name:'校长室钥匙',icon:'🗝️',glow:1,desc:'通往校长室。'},
  truth_note:{name:'真相信',icon:'✉️',desc:'林老师留下的信。'},
  master_key:{name:'校门钥匙',icon:'🔑',glow:1,desc:'最终的校门钥匙。'},
  code_slip:{name:'出门密码条',icon:'📝',desc:'上面写着四位数。'}
};
G.PZ_ITEMS=ITEMS;G.PZ_ROOMS=[];
})(typeof window!=='undefined'?window:globalThis);
/*ROOMS-END*/
