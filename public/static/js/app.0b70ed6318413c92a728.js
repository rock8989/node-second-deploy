webpackJsonp([9],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App",components:{}},a,!1,function(t){e("wNWZ")},null,null).exports,i=e("/ocq"),l=e("lbHh"),s=e.n(l),c={data:function(){return{isLogin:s.a.get("token")}},methods:{logout:function(){s.a.remove("token"),location.reload()}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[e("el-menu-item",{staticClass:"welcome-wrapper",attrs:{index:"1"}}),t._v(" "),e("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[e("div",{staticClass:"avatar-wrapper"},[e("i",{staticClass:"el-icon-setting"}),t._v(" "),e("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-link",{staticClass:"inlineBlock",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.isLogin?e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v("LogOut")])]):e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:function(n){t.$router.push("/login")}}},[t._v("Login")])])],1)],1)],1)},staticRenderFns:[]};var d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[e("el-menu",{attrs:{"show-timeout":200,"default-active":t.$route.path,mode:"vertical","background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#409EFF"}},[e("el-menu-item",{attrs:{index:"0"},on:{click:function(n){t.$router.push("/")}}},[t._v("HOME")]),t._v(" "),e("el-menu-item",{attrs:{index:"1"},on:{click:function(n){t.$router.push("/notice/list")}}},[t._v("NOTICE")]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[e("router-link",{attrs:{to:"/popup/register"}},[t._v("POPUP")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3"},on:{click:function(n){t.$router.push("/registration")}}},[t._v("JOIN")])],1)],1)},staticRenderFns:[]},p={components:{Navbar:e("VU/8")(c,u,!1,function(t){e("jA0G")},"data-v-77f2f160",null).exports,Sidebar:e("VU/8")({},d,!1,null,null,null).exports}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("Sidebar",{staticClass:"sidebar-container"}),this._v(" "),n("div",{staticClass:"main-container"},[n("Navbar"),this._v(" "),n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var h=e("VU/8")(p,m,!1,function(t){e("NYaU")},null,null).exports;o.default.use(i.a);var f=[{path:"/login",name:"Login",component:function(){return e.e(1).then(e.bind(null,"T+/8"))}},{path:"/",component:h,redirect:"/helloworld",name:"HelloWorld",children:[{path:"/helloworld",component:function(){return e.e(6).then(e.bind(null,"q/3a"))}}]},{path:"/",component:h,children:[{path:"registration",name:"Registration",component:function(){return e.e(4).then(e.bind(null,"KwhX"))}}]},{path:"/notice",component:h,children:[{path:"list",name:"NoticeList",component:function(){return e.e(7).then(e.bind(null,"gVpZ"))}},{path:"register",name:"NoticeRegister",component:function(){return e.e(3).then(e.bind(null,"gZMs"))}},{path:"detail",name:"NoticeDetail",component:function(){return e.e(2).then(e.bind(null,"uxEq"))}}]},{path:"/popup",component:h,children:[{path:"register",name:"PopupRegister",component:function(){return e.e(0).then(e.bind(null,"k3Lc"))}}]},{path:"*",component:h,children:[{path:"*",name:"NotFound",component:function(){return e.e(5).then(e.bind(null,"De3b"))}}]}],v=new i.a({routes:f}),g=e("zL8q"),_=e.n(g),w=(e("tvR6"),e("wUZ8")),b=e.n(w),k=(e("yh13"),e("NYxO")),N=e("mtWM"),x=e.n(N),C={state:{id:"",loading:!1},mutations:{SET_ID:function(t,n){n&&(t.id=n)},SET_LOADING:function(t,n){t.loading=n}},actions:{Login:function(t,n){var e=t.commit;x.a.post("http://localhost:3000/login",{data:n}).then(function(t){console.log("==========  res  =========="),console.log(t),console.log("==========  res  =========="),e("SET_ID",t.data.body),s.a.set("token",t.data.body,{expires:1})}).catch(function(t){console.log(t),alert(t.response.data.error)}).finally(function(t){e("SET_LOADING",!1)})}}};o.default.use(k.a);var E=new k.a.Store({modules:{user:C,modal:{state:{showModal:!1},mutations:{SET_MODAL:function(t,n){t.showModal=n}}}}});o.default.use(_.a,{locale:b.a}),new o.default({el:"#app",router:v,store:E,render:function(t){return t(r)}})},NYaU:function(t,n){},jA0G:function(t,n){},tvR6:function(t,n){},wNWZ:function(t,n){},yh13:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.0b70ed6318413c92a728.js.map