(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vod/apVod"],{"2ec8":function(t,n,o){"use strict";(function(t){o("d7fc");e(o("66fd"));var n=e(o("d948"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"41cc":function(t,n,o){"use strict";var e=o("ca65"),c=o.n(e);c.a},"41f4":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var c=function(){var t=this,n=t.$createElement;t._self._c},u=[]},5740:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{videoSrc:"",isShow:!1}},onLoad:function(t){this.videoSrc=t.source},methods:{downloadVideo:function(n){var o=t.downloadFile({url:n,success:function(t){200===t.statusCode&&console.log("下载成功")}});o.onProgressUpdate((function(t){console.log("下载进度"+t.progress),console.log("已经下载的数据长度"+t.totalBytesWritten),console.log("预期需要下载的数据总长度"+t.totalBytesExpectedToWrite),t.progress>50&&o.abort()}))}}};n.default=o}).call(this,o("543d")["default"])},b851:function(t,n,o){"use strict";o.r(n);var e=o("5740"),c=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=c.a},ca65:function(t,n,o){},d948:function(t,n,o){"use strict";o.r(n);var e=o("41f4"),c=o("b851");for(var u in c)"default"!==u&&function(t){o.d(n,t,(function(){return c[t]}))}(u);o("41cc");var r,a=o("f0c5"),i=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=i.exports}},[["2ec8","common/runtime","common/vendor"]]]);