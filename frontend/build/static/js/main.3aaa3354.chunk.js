(this.webpackJsonpedtech=this.webpackJsonpedtech||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(20),r=a.n(s),i=a(3),l=a(26),o=(a(51),a(10)),j=a(9),u=a(6),b=a(44),d=a.n(b),p=a(5),h=a.p+"static/media/whitelogo.602f62f5.png",x=a(4),m=a.n(x),O=a(8),f=a(11),v=a.n(f),g="LOGIN_SUCCESS",y="LOGIN_FAIL",N="SIGNUP_SUCCESS",k="SIGNUP_FAIL",_="ACTIVATION_SUCCESS",w="ACTIVATION_FAIL",S="USER_LOADED_SUCCESS",C="USER_LOADED_FAIL",A="AUTHENTICATION_SUCCESS",I="AUTHENTICATION_FAIL",E="PASSWORD_RESET_SUCCESS",T="PASSWORD_RESET_FAIL",L="PASSWORD_RESET_CONFIRM_SUCCESS",R="PASSWORD_RESET_CONFIRM_FAIL",U="GOOGLE_AUTH_SUCCESS",P="GOOGLE_AUTH_FAIL",D="NEW_REFRESH_TOKEN_FETCHED",F="USER_ACTIVATED_SUCCESS",z="USER_ACTIVATED_FAIL",B="LOGOUT",H=function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,v.a.get("".concat("https://edtech1.herokuapp.com","/auth/profile/me/"),a);case 5:null===(n=e.sent).data.college||null===n.data.college||null===n.data.college?t({type:z}):t({type:F}),t({type:S,payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:C});case 13:e.next=16;break;case 15:t({type:C});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},J=a(1),G=Object(o.j)(Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:B})}}})((function(e){var t=e.logout,a=Object(o.g)();function n(e){Array.from(document.getElementsByClassName("nav_link")).forEach((function(e){e.classList.remove("active")})),e.nativeEvent.target.parentNode.className="nav_link active"}return Object(J.jsxs)("div",{className:"l_navbar",id:"navbar",children:[Object(J.jsxs)("div",{className:"logo_content",children:[Object(J.jsxs)("div",{className:"logo",as:p.b,to:"/creator",children:[Object(J.jsx)("i",{className:"bx bxs-backpack",as:p.b,to:"/creator"}),Object(J.jsx)("img",{alt:"Logo",src:h,style:{height:"30px",paddingLeft:"10px"},className:"logo_name"})]}),Object(J.jsx)("i",{className:"bx bx-menu",id:"btn",onClick:function(){document.getElementById("navbar").classList.toggle("show"),document.getElementById("btn").classList.contains("bx-menu")?document.getElementById("btn").classList.replace("bx-menu","bx-x"):document.getElementById("btn").classList.replace("bx-x","bx-menu")}})]}),Object(J.jsxs)("ul",{className:"nav_list",children:[Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/",className:"nav_link active",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-table"}),Object(J.jsx)("span",{className:"nav_name",children:"Timetable"})]}),Object(J.jsx)("span",{className:"tooltip",children:"Timetable"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/portion",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-list-check"}),Object(J.jsx)("span",{className:"nav_name",children:"Portion"})]}),Object(J.jsx)("span",{className:"tooltip",children:"Portion"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/textbook",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bxs-book"}),Object(J.jsx)("span",{className:"nav_name",children:"TextBook"})]}),Object(J.jsx)("span",{className:"tooltip",children:"TextBook"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/notes",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-book-open"}),Object(J.jsx)("span",{className:"nav_name",children:"Notes"})]}),Object(J.jsx)("span",{className:"tooltip",children:"Notes"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/recommendation",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-library"}),Object(J.jsx)("span",{className:"nav_name",children:"Recommendation"})]}),Object(J.jsx)("span",{className:"tooltip",children:"Recommendation"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/faculty",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-group"}),Object(J.jsx)("span",{className:"nav_name",children:"People"})]}),Object(J.jsx)("span",{className:"tooltip",children:"People"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/about",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bxs-school"}),Object(J.jsx)("span",{className:"nav_name",children:"About"})]}),Object(J.jsx)("span",{className:"tooltip",children:"About"})]}),Object(J.jsxs)("li",{children:[Object(J.jsxs)(p.b,{to:"/user",className:"nav_link",onClick:n,children:[Object(J.jsx)("i",{className:"bx bx-user"}),Object(J.jsx)("span",{className:"nav_name",children:"User"})]}),Object(J.jsx)("span",{className:"tooltip",children:"User"})]})]}),Object(J.jsxs)("div",{className:"nav_link log-out-btn nav_list",onClick:function(){a.push("/"),t()},children:[Object(J.jsx)("i",{className:"bx bx-log-out ",style:{color:"white"}}),Object(J.jsx)("span",{className:"nav_name",children:"Log Out"})]}),Object(J.jsx)("span",{className:"tooltip",children:"Log Out"})]})}))),q=function(){Object(o.g)();var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=function(){return c(!a)};return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:"top-navbar",children:Object(J.jsx)("i",{className:"bx bx-menu",style:{color:"var(--first-color)",fontSize:"40px",marginLeft:"11px",cursor:"pointer"},onClick:s})}),Object(J.jsx)("nav",{className:a?"nav-menu active":"nav-menu",children:Object(J.jsxs)("ul",{className:"nav-menu-items",onClick:s,style:{overflow:"scroll"},children:[Object(J.jsx)("li",{className:"navbar-toggle",children:Object(J.jsx)("div",{to:"#",className:"menu-bars bx bx-x"})}),Object(J.jsxs)("ul",{className:"news_category_list",children:[Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-table"}),Object(J.jsx)("span",{className:"nav_name",children:"Timetable"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/portion",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-list-check"}),Object(J.jsx)("span",{className:"nav_name",children:"Portion"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/textbook",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bxs-book"}),Object(J.jsx)("span",{className:"nav_name",children:"TextBook"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/notes",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-book-open"}),Object(J.jsx)("span",{className:"nav_name",children:"Notes"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/recommendation",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-library"}),Object(J.jsx)("span",{className:"nav_name",children:"Recommendation"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/faculty",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-user"}),Object(J.jsx)("span",{className:"nav_name",children:"People"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/about",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bxs-school"}),Object(J.jsx)("span",{className:"nav_name",children:"About"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)(p.b,{to:"/user",className:"nav_link",children:[Object(J.jsx)("i",{className:"bx bx-user"}),Object(J.jsx)("span",{className:"nav_name",children:"User"})]})}),Object(J.jsx)("li",{className:"category-list-item",children:Object(J.jsxs)("div",{style:{},className:"nav_link log-out-btn nav_list",onClick:function(){},children:[Object(J.jsx)("i",{className:"bx bx-log-out ",style:{color:"white"}}),Object(J.jsx)("span",{className:"nav_name",children:"Log Out"})]})})]})]})})]})},W=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isActivated:e.auth.isActivated,user:e.auth.user}}),{check_authenticated:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=25;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!==e.sent.data.code&&t({type:A}),e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(3),c=JSON.stringify({refresh:localStorage.getItem("refresh")}),e.prev=13,e.next=16,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/refresh/"),c,a);case 16:s=e.sent,t({type:D,payload:s.data}),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),t({type:I});case 23:e.next=26;break;case 25:t({type:I});case 26:case"end":return e.stop()}}),e,null,[[3,10],[13,20]])})));return function(t){return e.apply(this,arguments)}}()},load_user:H,googleAuthenticate:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,s,r,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e||!t||localStorage.getItem("access")){a.next=16;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},s={state:e,code:t},r=Object.keys(s).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])})).join("&"),a.prev=4,a.next=7,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/o/google-oauth2/?").concat(r),c);case 7:i=a.sent,console.log(i),n({type:U,payload:i.data}),n(H()),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(4),n({type:P});case 16:case"end":return a.stop()}}),a,null,[[4,13]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(o.h)(),a=Object(n.useState)(!0),c=Object(u.a)(a,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){var a=setInterval((function(){var a=d.a.parse(t.search),n=a.state?a.state:null,c=a.code?a.code:null;n&&c?e.googleAuthenticate(n,c):(e.check_authenticated(),e.load_user()),r(!1)}),5e3);return function(){clearInterval(a),!1}}),[t,n.useState]),s?Object(J.jsx)("div",{children:"loading"}):Object(J.jsxs)("div",{children:[e.isActivated&&e.isAuthenticated&&Object(J.jsx)(G,{}),e.isActivated&&e.isAuthenticated&&Object(J.jsx)(q,{}),e.children]})})),M=a(17),V=a(22),Y=a(33),K=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isActivated:e.auth.isActivated,user:e.auth.user}}),{login:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,s,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/create/"),s,c);case 5:r=a.sent,n({type:g,payload:r.data}),n(H()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:y});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()},signup:function(e,t,a,n){return function(){var c=Object(O.a)(m.a.mark((function c(s){var r,i,l;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,email:t,password:a,re_password:n}),c.prev=2,c.next=5,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/"),i,r);case 5:l=c.sent,s({type:N,payload:l.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),s({type:k});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.signup,c=Object(n.useState)(!1),s=Object(u.a)(c,2),r=s[0],l=s[1],j=Object.freeze({email:"",password:""}),b=Object.freeze({first_name:"",email:"",password:"",re_password:""}),d=Object(n.useState)(j),h=Object(u.a)(d,2),x=h[0],f=h[1],g=Object(n.useState)(b),y=Object(u.a)(g,2),N=y[0],k=y[1],_=function(e){f(Object(i.a)(Object(i.a)({},x),{},Object(M.a)({},e.target.name,e.target.value.trim())))},w=function(e){k(Object(i.a)(Object(i.a)({},N),{},Object(M.a)({},e.target.name,e.target.value.trim())))},S=function(){var e=Object(O.a)(m.a.mark((function e(n,c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),e.t0=c,e.next=5===e.t0?4:6===e.t0?6:9;break;case 4:return document.getElementById("sign-up-form")["password-input"].value===document.getElementById("sign-up-form")["re_password-input"].value&&(a(N.first_name,N.email,N.password,N.re_password),l(!0),document.getElementById("sign-up-form").reset()),e.abrupt("break",10);case 6:return t(x.email,x.password),document.getElementById("sign-in-form").reset(),e.abrupt("break",10);case 9:return e.abrupt("break",10);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=1===e.t0?3:2===e.t0?4:3===e.t0?5:4===e.t0?17:18;break;case 3:case 4:return e.abrupt("break",19);case 5:return e.prev=5,e.next=8,v.a.get("".concat("https://edtech1.herokuapp.com","/auth/o/google-oauth2/?redirect_uri=").concat("https://edtech1.herokuapp.com"));case 8:a=e.sent,console.log(a),window.location.replace(a.data.authorization_url),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(5),console.log(e.t1);case 16:case 17:case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return r?Object(J.jsx)(o.a,{to:"/check-email"}):Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("div",{className:"container",id:"container",children:[Object(J.jsx)("div",{className:"forms-container",children:Object(J.jsxs)("div",{className:"signin-signup",children:[Object(J.jsxs)("form",{onSubmit:function(e){return S(e,6)},className:"sign-in-form",id:"sign-in-form",children:[Object(J.jsx)("h2",{className:"title",children:"Sign in"}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-user"}),Object(J.jsx)("input",{type:"email",placeholder:"Email",id:"email-signin",name:"email",required:!0,onChange:function(e){return _(e)}})]}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-lock-alt"}),Object(J.jsx)("input",{type:"password",placeholder:"Password",id:"password-signin",name:"password",minLength:"6",required:!0,onChange:_})]}),Object(J.jsx)("button",{type:"submit",className:"btn",children:"Login"}),Object(J.jsxs)("p",{className:"social-text",children:["Forgot Your Password? ",Object(J.jsx)(p.b,{to:"/reset-password",children:"Reset Passwrod"})]}),Object(J.jsx)("p",{className:"social-text",children:"Or Sign In with Social Platforms"}),Object(J.jsxs)("div",{className:"social-media",children:[Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(1)},children:Object(J.jsx)(V.a,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(2)},children:Object(J.jsx)(Y.a,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(3)},children:Object(J.jsx)(V.c,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(4)},children:Object(J.jsx)(V.b,{})})]})]}),Object(J.jsxs)("form",{onSubmit:function(e){return S(e,5)},className:"sign-up-form",id:"sign-up-form",children:[Object(J.jsx)("h2",{className:"title",children:"Sign up"}),Object(J.jsxs)("div",{className:"input-field ",children:[Object(J.jsx)("i",{className:"bx bxs-user"}),Object(J.jsx)("input",{type:"name",placeholder:"Name",id:"name-input",name:"first_name",required:!0,onChange:w})]}),Object(J.jsxs)("div",{className:"input-field ",children:[Object(J.jsx)("i",{className:"bx bxs-envelope"}),Object(J.jsx)("input",{type:"email",placeholder:"Email",id:"email-input",name:"email",required:!0,onChange:w})]}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-lock-alt"}),Object(J.jsx)("input",{type:"password",placeholder:"Password",id:"password-input",name:"password",required:!0,onChange:w})]}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-lock-alt"}),Object(J.jsx)("input",{type:"password",placeholder:"Confirm Password",id:"re_password-input",name:"re_password",required:!0,onChange:w})]}),Object(J.jsx)("input",{type:"submit",className:"btn",value:"Sign up"}),Object(J.jsx)("p",{className:"social-text",children:"Or Sign Up with Social Platforms"}),Object(J.jsxs)("div",{className:"social-media",children:[Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(1)},children:Object(J.jsx)(V.a,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(2)},children:Object(J.jsx)(Y.a,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(3)},children:Object(J.jsx)(V.c,{})}),Object(J.jsx)("div",{className:"social-icon",onClick:function(){return C(4)},children:Object(J.jsx)(V.b,{})})]})]})]})}),Object(J.jsxs)("div",{className:"panels-container",children:[Object(J.jsx)("div",{className:"panel left-panel",children:Object(J.jsxs)("div",{className:"content",children:[Object(J.jsx)("h3",{children:"New here ?"}),Object(J.jsx)("p",{children:"Register now to get access to Notes, Textbooks, Timebable and Many More.."}),Object(J.jsx)("button",{className:"btn transparent sign-up-btn",id:"sign-up-btn",onClick:function(){document.getElementById("container").classList.add("sign-up-mode")},children:"Sign up"})]})}),Object(J.jsx)("div",{className:"panel right-panel",children:Object(J.jsxs)("div",{className:"content",children:[Object(J.jsx)("h3",{children:"One of us ?"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}),Object(J.jsx)("button",{className:"btn transparent sign-in-btn",id:"sign-in-btn",onClick:function(){document.getElementById("container").classList.remove("sign-up-mode")},children:"Sign in"})]})})]})]})})})),Q=a(24),X=v.a.create({baseURL:"https://edtech1.herokuapp.com",headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}}),Z=function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/college/",{params:{fields:"value,label"}}).then((function(e){t=e.data.results}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/college/".concat(t,"/")).then((function(e){a=e.data}));case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/college/".concat(t,"/")).then((function(e){a=e.data}));case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.put("/auth/profile/me/",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(j.c)((function(e){return e.auth})).user,t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),l=Object(u.a)(r,2),o=l[0],b=l[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),h=p[0],x=p[1],f=Object(n.useState)(e?{id:e.id,user_email:e.user_email,user:e.user,college:null,branch:null,year:null}:{}),v=Object(u.a)(f,2),g=v[0],y=v[1];function N(){return(N=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y({id:e.id,user_email:e.user_email,user:e.user,college:a.value,branch:null,year:null}),b([]),t.next=4,$(a.value);case 4:n=t.sent,b(n.branches);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y((function(t){return Object(i.a)(Object(i.a)({id:e.id,user_email:e.user_email,user:e.user},t),{},{branch:a.value,year:null})})),t.next=3,ee(g.college);case 3:n=t.sent,x(n.years);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==g.college||null==g.branch||null==g.year){e.next=5;break}return e.next=3,te(g);case 3:e.next=6;break;case 5:alert("Please fill in all details");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[]),Object(J.jsx)("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.1)"},children:Object(J.jsxs)("div",{style:{display:"grid",height:"45vh",width:"50vw",alignItems:"center",justifyContent:"unset",gridTemplateRows:"1fr 1fr 1fr 1fr"},children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your College"}),Object(J.jsx)(Q.a,{onChange:function(e){return N.apply(this,arguments)},options:c})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your Branch"}),Object(J.jsx)(Q.a,{onChange:function(e){return k.apply(this,arguments)},options:o})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your Year"}),Object(J.jsx)(Q.a,{onChange:function(t){y((function(a){return Object(i.a)(Object(i.a)({id:e.id,user_email:e.user_email,user:e.user},a),{},{year:t.value})}))},options:h})]}),Object(J.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},onClick:function(){return _.apply(this,arguments)},children:Object(J.jsx)("button",{style:{border:"none",color:"rgba(0,0,100,1)",background:"white",padding:"10px 40px",fontSize:"18px",borderRadius:"25px"},children:"Submit"})})]})})},ne=Object(j.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/reset_password/"),c,n);case 5:t.sent,a({type:E}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:T});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(n.useState)(!1),c=Object(u.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)({email:""}),j=Object(u.a)(l,2),b=j[0],d=j[1],h=b.email;return s?Object(J.jsx)(o.a,{to:"/check-email"}):Object(J.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Request Password Reset:"}),Object(J.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(h),r(!0)}(e)},style:{marginTop:"20px"},children:[Object(J.jsxs)("div",{className:"input-field",style:{width:"20rem"},children:[Object(J.jsx)("i",{className:"bx bxs-envelope"}),Object(J.jsx)("input",{type:"email",placeholder:"Email",name:"email",id:"re_password-input",value:h,onChange:function(e){return function(e){return d(Object(i.a)(Object(i.a)({},b),{},Object(M.a)({},e.target.name,e.target.value)))}(e)},required:!0})]}),Object(J.jsx)("button",{style:{marginTop:"15px",width:"15rem"},className:"btn",type:"submit",children:"Reset Password"})]}),Object(J.jsxs)(p.b,{to:"/",style:{textDecoration:"none",color:"black",lineHeight:"3rem"},children:[Object(J.jsx)("i",{className:"bx bx-arrow-back"})," Back"]})]})})})),ce=Object(j.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(O.a)(m.a.mark((function c(s){var r,i;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/reset_password_confirm/"),i,r);case 5:c.sent,s({type:L}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),s({type:R});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,c=Object(n.useState)(!1),s=Object(u.a)(c,2),r=s[0],l=s[1],j=Object(n.useState)({new_password:"",re_new_password:""}),b=Object(u.a)(j,2),d=b[0],p=b[1],h=d.new_password,x=d.re_new_password,m=function(e){return p(Object(i.a)(Object(i.a)({},d),{},Object(M.a)({},e.target.name,e.target.value)))};return r?Object(J.jsx)(o.a,{to:"/"}):Object(J.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:Object(J.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),h===x){var n=t.params.uid,c=t.params.token;a(n,c,h,x),l(!0)}}(e)},children:[Object(J.jsx)("div",{style:{width:"25rem"}}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-lock-alt"}),Object(J.jsx)("input",{type:"password",placeholder:"New Password",value:h,id:"new_password",name:"new_password",required:!0,minLength:"6",onChange:function(e){return m(e)}})]}),Object(J.jsxs)("div",{className:"input-field",children:[Object(J.jsx)("i",{className:"bx bxs-lock-alt"}),Object(J.jsx)("input",{type:"password",placeholder:"Confirm New Password",value:x,id:"new_password",name:"re_new_password",required:!0,minLength:"6",onChange:function(e){return m(e)}})]}),Object(J.jsx)("button",{className:"btn",type:"submit",children:"Reset Password"})]})})})),se=Object(j.b)(null,{verify:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,v.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/activation/"),s,c);case 5:n({type:_}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),n({type:w});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,c=Object(n.useState)(!1),s=Object(u.a)(c,2),r=s[0],i=s[1];return r?Object(J.jsx)(o.a,{to:"/"}):Object(J.jsx)("div",{style:{display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"},children:Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Verify your Account:"}),Object(J.jsx)("button",{onClick:function(e){var n=a.params.uid,c=a.params.token;t(n,c),i(!0)},style:{marginTop:"50px",textAlign:"center",width:"100%"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),re=function(){return Object(J.jsx)("div",{style:{textAlign:"center",height:"100vh",alignItems:"center",justifyContent:"center",display:"flex"},children:Object(J.jsxs)("h3",{children:["Link has been sent to your ",Object(J.jsx)("a",{href:"http://gmail.com/",children:" Mail "})]})})},ie=a(18),le=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(){var e=function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch({method:"GET",headers:{Authorization:"JWT ".concat(t)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=localStorage.getItem("access"),a=Object(ie.a)(["".concat("https://edtech1.herokuapp.com","/api/college-detail/"),t],e),n=a.data,c=a.error,s=Object(ie.a)(["".concat("https://edtech1.herokuapp.com","/api/college-detail/"),t],e);return console.log(s),c?Object(J.jsx)("div",{className:"main_content_body",children:"Error while Fetching..."}):n?Object(J.jsx)("div",{className:"main_content_body",style:{marginTop:"5px"},children:Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(J.jsx)("img",{alt:"College Logo",src:null===n||void 0===n?void 0:n.link_image}),Object(J.jsx)("div",{style:{marginTop:"10px",fontSize:"x-large",textAlign:"center"},children:null===n||void 0===n?void 0:n.name}),Object(J.jsxs)("h5",{children:["EST. ",null===n||void 0===n?void 0:n.established]}),Object(J.jsx)("div",{style:{marginTop:"5px"},children:null===n||void 0===n?void 0:n.location}),Object(J.jsxs)("div",{style:{marginTop:"20px"},children:[Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.website_link,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bx-link",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=".concat(null===n||void 0===n?void 0:n.email),target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bx-mail-send",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bxl-linkedin",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bxl-instagram",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bxl-facebook",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bxl-twitter",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(J.jsx)("a",{href:null===n||void 0===n?void 0:n.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(J.jsx)("i",{className:"bx bxl-youtube",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})})]}),Object(J.jsx)("div",{style:{width:"100%",height:"50vh",marginTop:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(J.jsx)("iframe",{title:"Google map link for college",src:null===n||void 0===n?void 0:n.static_map_src,style:{width:"85%",height:"85%",border:"0",loading:"lazy"}})})]})}):Object(J.jsx)("div",{className:"main_content_body",style:{marginTop:"5px"},children:"Loading"})})),oe=function(){return Object(J.jsx)("div",{children:"Hi"})},je=(a(11),function(){return Object(J.jsx)("div",{children:"Hi"})}),ue=function(){return Object(J.jsx)("h1",{style:{marginLeft:"100px"},children:"hi"})},be=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)(!0)),c=Object(u.a)(a,2),s=(c[0],c[1],Object(o.i)()),r=(s.path,s.url,Object(n.useState)("DEFAULT")),i=Object(u.a)(r,2);i[0],i[1];return Object(J.jsx)("div",{children:"Hi"})},de=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)(!0)),c=Object(u.a)(a,2),s=(c[0],c[1],Object(o.i)().url,Object(n.useState)("DEFAULT")),r=Object(u.a)(s,2);r[0],r[1];return Object(J.jsx)("div",{children:"Hi"})},pe=function(){return Object(J.jsx)("div",{className:"main_content_body",style:{display:"flex",justifyContent:"center"}})},he=function(){return Object(J.jsx)("div",{children:"Hi"})},xe=function(e){var t=e.children,a=Object(l.a)(e,["children"]),n=Object(j.c)((function(e){return e.auth})).isAuthenticated;return Object(J.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){var a=e.location;return n?Object(J.jsx)(o.a,{to:{pathname:"/timetable",state:{from:a}}}):t}}))},me=function(e){var t=e.children,a=Object(l.a)(e,["children"]),n=Object(j.c)((function(e){return e.auth})),c=n.isAuthenticated,s=n.isActivated;return Object(J.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){var a=e.location;return c?c&&!s?t:Object(J.jsx)(o.a,{to:{pathname:"/timetable",state:{from:a}}}):Object(J.jsx)(o.a,{to:{pathname:"/",state:{from:a}}})}}))},Oe=function(e){var t=e.children,a=Object(l.a)(e,["children"]),n=Object(j.c)((function(e){return e.auth})),c=n.isAuthenticated,s=n.isActivated;return Object(J.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){var a=e.location;return c?c&&!s?Object(J.jsx)(o.a,{to:{pathname:"/select-preferences",state:{from:a}}}):t:Object(J.jsx)(o.a,{to:{pathname:"/",state:{from:a}}})}}))},fe=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(W,{children:Object(J.jsxs)(o.d,{children:[Object(J.jsx)(xe,{exact:!0,path:"/",children:Object(J.jsx)(K,{})}),Object(J.jsx)(me,{path:"/select-preferences",children:Object(J.jsx)(ae,{})}),Object(J.jsx)(xe,{path:"/reset-password",children:Object(J.jsx)(ne,{})}),Object(J.jsx)(xe,{path:"/password/reset/confirm/:uid/:token",children:Object(J.jsx)(ce,{})}),Object(J.jsx)(xe,{path:"/activate/:uid/:token",children:Object(J.jsx)(se,{})}),Object(J.jsx)(xe,{path:"/check-email",children:Object(J.jsx)(re,{})}),Object(J.jsx)(Oe,{path:"/timetable",children:Object(J.jsx)(pe,{})}),Object(J.jsx)(Oe,{path:"/portion",children:Object(J.jsx)(ue,{})}),Object(J.jsx)(Oe,{path:"/textbook",children:Object(J.jsx)(de,{})}),Object(J.jsx)(Oe,{path:"/notes",children:Object(J.jsx)(je,{})}),Object(J.jsx)(Oe,{path:"/recommendation",children:Object(J.jsx)(be,{})}),Object(J.jsx)(Oe,{path:"/faculty",children:Object(J.jsx)(oe,{})}),Object(J.jsx)(Oe,{path:"/about",children:Object(J.jsx)(le,{})}),Object(J.jsx)(Oe,{path:"/user",children:Object(J.jsx)(he,{})})]})})})},ve=a(23),ge=a(45),ye=a(46),Ne={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!1,isActivated:!1,user:null},ke=Object(ve.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0});case D:return localStorage.setItem("access",n.access),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0});case g:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case N:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case S:return Object(i.a)(Object(i.a)({},e),{},{user:n});case F:return Object(i.a)(Object(i.a)({},e),{},{isActivated:!0});case z:return Object(i.a)(Object(i.a)({},e),{},{isActivated:!1});case I:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case C:return Object(i.a)(Object(i.a)({},e),{},{user:null});case U:return localStorage.setItem("access",n.access),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case P:case y:case k:case B:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(i.a)(Object(i.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case E:case T:case L:case R:case _:case w:return Object(i.a)({},e);default:return e}}}),_e=[ye.a],we=Object(ve.createStore)(ke,{},Object(ge.composeWithDevTools)(ve.applyMiddleware.apply(void 0,_e)));r.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(p.a,{children:Object(J.jsx)(j.a,{store:we,children:Object(J.jsx)(fe,{})})})}),document.getElementById("root"))},51:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.3aaa3354.chunk.js.map