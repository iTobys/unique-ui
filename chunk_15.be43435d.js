(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(t,o,i){var n=i(134);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(3)(n,s);n.locals&&(t.exports=n.locals)},133:function(t,o,i){"use strict";var n=i(108);i.n(n).a},134:function(t,o,i){(t.exports=i(2)(!1)).push([t.i,".demo-toast .wrapper {\n  padding: 0 1em; }\n",""])},37:function(t,o,i){"use strict";i.r(o);var n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"demo-toast"},[i("demo-block",{attrs:{title:"简单用法"}},[i("div",{staticClass:"wrapper"},[i("i-button",{on:{click:t.onClick1}},[t._v("Show Toast")])],1)]),t._v(" "),i("demo-block",{attrs:{title:"设置位置"}},[i("div",{staticClass:"wrapper"},[i("i-button",{on:{click:function(o){t.onClick2("top")}}},[t._v("Top")]),t._v(" "),i("i-button",{on:{click:function(o){t.onClick2("center")}}},[t._v("Center")]),t._v(" "),i("i-button",{on:{click:function(o){t.onClick2("bottom")}}},[t._v("Bottom")])],1)]),t._v(" "),i("demo-block",{attrs:{title:"设置时长"}},[i("div",{staticClass:"wrapper"},[i("i-button",{on:{click:t.onClick3}},[t._v("显示 5 秒")])],1)])],1)};n._withStripped=!0;var s={data:function(){return{msg:"参数有误"}},methods:{onClick1:function(){this.$toast(this.msg)},onClick2:function(t){this.$toast(this.msg,{position:t})},onClick3:function(){this.$toast(this.msg,{duration:5e3})},onClick4:function(){}}},c=(i(133),i(0)),e=Object(c.a)(s,n,[],!1,null,"0e6b3c5c",null);e.options.__file="packages/toast/demo/index.vue";o.default=e.exports}}]);