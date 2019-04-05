webpackJsonp([4],{CmjS:function(t,e){},KwhX:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("mtWM"),a=r.n(s),o=(r("zL8q"),a.a.create({baseURL:"http://localhost:3000",timeout:5e3})),l={data:function(){var t=this;return{termVisible:!1,privacyVisible:!1,marketingVisible:!1,registering:!1,form:{usermail:"",password:"",password2:"",terms:[]},rule:{usermail:[{required:!0,message:"이메일 주소를 입력하세요.",trigger:"blur"},{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"입력하신 이메일 주소로는 회원가입이 불가합니다.",trigger:"blur"}],password:[{required:!0,message:"비밀번호를 입력하세요.",trigger:"blur"},{required:!0,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,message:"영문, 숫자, 특수문자 포함 8~16자리로 입력하세요.",trigger:"blur"}],password2:[{validator:function(e,r,s){""===r?s(new Error("비밀번호 확인을 입력해주세요.")):r!==t.form.password?s(new Error("비밀번호가 일치하지 않습니다.")):s()},trigger:["change","blur"]}],terms:[{type:"enum",required:!0,message:"이용약관 동의 후 회원가입이 가능합니다.",transform:function(t){return t.toString()},trigger:"change"}]}}},methods:{registerClicked:function(){var t=this;console.log("==== 회원가입 ===="),this.$refs.form.validate(function(e){var r;e?(console.log("벨류데이션 통과"),t.registration=!0,(r={form:t.form},o.post("/registration",r)).then(function(e){console.log("===== res ====="),console.log(e),console.log("===== res ====="),t.$alert(e.data.body+"님 가입을 축하드립니다."),t.$router.push("/")}).catch(function(t){return console.log(t)}).finally(function(e){return t.registration=!1})):console.log("벨류데이션 미통과")})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",{staticClass:"EtcVue Registration"},[r("div",{staticClass:"mypage_cont input-form"},[r("h3",{staticClass:"title"},[t._v("\n\t\t\t회원가입\n\t\t\t"),r("span",{staticClass:"mypage-info"},[t._v("외국인, 법인,  만 19세 미만 개인은 가입이 불가합니다.")])]),t._v(" "),r("el-form",{ref:"form",staticClass:"registration-form",attrs:{model:t.form,rules:t.rule,"label-width":"0px"}},[r("h4",{staticClass:"subtitle"},[t._v("1. 아이디/비밀번호 입력")]),t._v(" "),r("el-form-item",{attrs:{prop:"usermail",size:"small",label:"아이디 (이메일주소)"}},[r("el-input",{attrs:{type:"email",placeholder:"이메일주소","auto-complete":"off",maxlength:"60"},model:{value:t.form.usermail,callback:function(e){t.$set(t.form,"usermail",e)},expression:"form.usermail"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"password",size:"small",label:"비밀번호"}},[r("el-input",{attrs:{type:"password",placeholder:"영문/숫자/특수문자 조합 8~16자리","auto-complete":"new-password",maxlength:"16"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"password2",size:"small",label:"비밀번호 확인"}},[r("el-input",{attrs:{type:"password",placeholder:"영문/숫자/특수문자 조합 8~16자리","auto-complete":"new-password",maxlength:"16"},model:{value:t.form.password2,callback:function(e){t.$set(t.form,"password2",e)},expression:"form.password2"}}),t._v(" "),r("span",{staticClass:"caution"},[t._v("비밀번호는 영문 대소문자를 구분함")])],1),t._v(" "),r("h4",{staticClass:"subtitle"},[t._v("2. 이용 동의")]),t._v(" "),r("el-form-item",{staticClass:"term-agree",attrs:{prop:"terms",size:"mini"}},[r("el-checkbox",{model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}},[t._v("이용약관 동의 "),r("span",{staticClass:"caution"},[t._v("(필수)")])]),t._v(" "),r("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){t.termVisible=!0}}},[t._v("보기")]),t._v(" "),r("el-dialog",{staticClass:"terms-pop",attrs:{title:"이용약관",visible:t.termVisible,width:"860px"},on:{"update:visible":function(e){t.termVisible=e}}},[r("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper",native:!1}},[r("div",{staticClass:"terms-content"},[t._v("\n\t\t\t\t\t\t\t이용약관 본문이 나옵니다."),r("br"),t._v("\n\t\t\t\t\t\t\t이용약관 본문이 나옵니다."),r("br"),t._v("\n\t\t\t\t\t\t\t이용약관 본문이 나옵니다."),r("br")])])],1)],1),t._v(" "),r("el-form-item",{staticClass:"unregistration-btn"},[r("el-button",{attrs:{type:"primary",loading:t.registering},nativeOn:{click:function(e){return e.preventDefault(),t.registerClicked(e)}}},[t._v("회원가입")])],1)],1)],1)])},staticRenderFns:[]};var n=r("VU/8")(l,i,!1,function(t){r("CmjS")},null,null);e.default=n.exports}});
//# sourceMappingURL=4.153e135075c76d446efb.js.map