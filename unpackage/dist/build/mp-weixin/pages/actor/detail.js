(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/actor/detail"],{"0866":function(t,n,e){"use strict";e.r(n);var a=e("7433"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},"2c84":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},6235:function(t,n,e){},"6b1a":function(t,n,e){"use strict";(function(t){e("d7fc");a(e("66fd"));var n=a(e("e49b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},7433:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("41e4"));function u(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{actorDetailData:{}}},onLoad:function(t){this.getActorDetailList(t.id)},methods:{getActorDetailList:function(t){var n=this,e={ac:"detail",pg:1,ids:t};a.default.actorList(e).then((function(t){if(1==t.code){var e=t.list;n.actorDetailData=e[0]}})).catch((function(t){console.log(t)}))},turnRandom:function(){t.navigateTo({url:"../random/random"})}}};n.default=c}).call(this,e("543d")["default"])},e49b:function(t,n,e){"use strict";e.r(n);var a=e("2c84"),u=e("0866");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("e73f");var o,r=e("f0c5"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=i.exports},e73f:function(t,n,e){"use strict";var a=e("6235"),u=e.n(a);u.a}},[["6b1a","common/runtime","common/vendor"]]]);