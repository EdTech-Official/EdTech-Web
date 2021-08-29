(this.webpackJsonpedtech=this.webpackJsonpedtech||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(20),r=n.n(s),i=n(4),o=(n(50),n(9)),l=n(3),u=n.n(l),j=n(8),b=n(17),d=n(7),p=n(11),h=n.n(p),m=n(5),x=n(22),O=n(33),f=n(10),v="LOGIN_SUCCESS",g="LOGIN_FAIL",y="SIGNUP_SUCCESS",N="SIGNUP_FAIL",k="ACTIVATION_SUCCESS",_="ACTIVATION_FAIL",w="USER_LOADED_SUCCESS",S="USER_LOADED_FAIL",C="AUTHENTICATION_SUCCESS",A="AUTHENTICATION_FAIL",I="PASSWORD_RESET_SUCCESS",E="PASSWORD_RESET_FAIL",T="PASSWORD_RESET_CONFIRM_SUCCESS",L="PASSWORD_RESET_CONFIRM_FAIL",R="GOOGLE_AUTH_SUCCESS",U="GOOGLE_AUTH_FAIL",P="NEW_REFRESH_TOKEN_FETCHED",D="USER_ACTIVATED_SUCCESS",F="USER_ACTIVATED_FAIL",z="LOGOUT",B=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,h.a.get("".concat("https://edtech1.herokuapp.com","/auth/profile/me/"),n);case 5:null===(a=e.sent).data.college||null===a.data.college||null===a.data.college?t({type:F}):t({type:D}),t({type:w,payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:S});case 13:e.next=16;break;case 15:t({type:S});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,s,r,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=16;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},s={state:e,code:t},r=Object.keys(s).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])})).join("&"),n.prev=4,n.next=7,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/o/google-oauth2/?").concat(r),c);case 7:i=n.sent,console.log(i),a({type:R,payload:i.data}),a(B()),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),a({type:U});case 16:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(e){return n.apply(this,arguments)}}()},J=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=25;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code&&t({type:C}),e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(3),c=JSON.stringify({refresh:localStorage.getItem("refresh")}),e.prev=13,e.next=16,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/refresh/"),c,n);case 16:s=e.sent,t({type:P,payload:s.data}),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),t({type:A});case 23:e.next=26;break;case 25:t({type:A});case 26:case"end":return e.stop()}}),e,null,[[3,10],[13,20]])})));return function(t){return e.apply(this,arguments)}}()},G=n(1),q=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/jwt/create/"),s,c);case 5:r=n.sent,a({type:v,payload:r.data}),a(B()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:g});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},signup:function(e,t,n,a){return function(){var c=Object(j.a)(u.a.mark((function c(s){var r,i,o;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,email:t,password:n,re_password:a}),c.prev=2,c.next=5,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/"),i,r);case 5:o=c.sent,s({type:y,payload:o.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),s({type:N});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.signup,c=e.isAuthenticated,s=Object(a.useState)(!1),r=Object(d.a)(s,2),l=r[0],p=r[1],f=Object.freeze({email:"",password:""}),v=Object.freeze({first_name:"",email:"",password:"",re_password:""}),g=Object(a.useState)(f),y=Object(d.a)(g,2),N=y[0],k=y[1],_=Object(a.useState)(v),w=Object(d.a)(_,2),S=w[0],C=w[1],A=function(e){k(Object(i.a)(Object(i.a)({},N),{},Object(b.a)({},e.target.name,e.target.value.trim())))},I=function(e){C(Object(i.a)(Object(i.a)({},S),{},Object(b.a)({},e.target.name,e.target.value.trim())))},E=function(){var e=Object(j.a)(u.a.mark((function e(a,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),e.t0=c,e.next=5===e.t0?4:6===e.t0?6:9;break;case 4:return document.getElementById("sign-up-form")["password-input"].value===document.getElementById("sign-up-form")["re_password-input"].value&&(n(S.first_name,S.email,S.password,S.re_password),p(!0),document.getElementById("sign-up-form").reset()),e.abrupt("break",10);case 6:return t(N.email,N.password),document.getElementById("sign-in-form").reset(),e.abrupt("break",10);case 9:return e.abrupt("break",10);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=1===e.t0?3:2===e.t0?4:3===e.t0?5:4===e.t0?17:18;break;case 3:case 4:return e.abrupt("break",19);case 5:return e.prev=5,e.next=8,h.a.get("".concat("https://edtech1.herokuapp.com","/auth/o/google-oauth2/?redirect_uri=").concat("https://edtech1.herokuapp.com"));case 8:n=e.sent,console.log(n),window.location.replace(n.data.authorization_url),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(5),console.log(e.t1);case 16:case 17:case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return c?Object(G.jsx)(o.a,{to:"/timetable"}):l?Object(G.jsx)(o.a,{to:"/check-email"}):Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("div",{className:"container",id:"container",children:[Object(G.jsx)("div",{className:"forms-container",children:Object(G.jsxs)("div",{className:"signin-signup",children:[Object(G.jsxs)("form",{onSubmit:function(e){return E(e,6)},className:"sign-in-form",id:"sign-in-form",children:[Object(G.jsx)("h2",{className:"title",children:"Sign in"}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-user"}),Object(G.jsx)("input",{type:"email",placeholder:"Email",id:"email-signin",name:"email",required:!0,onChange:function(e){return A(e)}})]}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-lock-alt"}),Object(G.jsx)("input",{type:"password",placeholder:"Password",id:"password-signin",name:"password",minLength:"6",required:!0,onChange:A})]}),Object(G.jsx)("button",{type:"submit",className:"btn",children:"Login"}),Object(G.jsxs)("p",{className:"social-text",children:["Forgot Your Password? ",Object(G.jsx)(m.b,{to:"/reset-password",children:"Reset Passwrod"})]}),Object(G.jsx)("p",{className:"social-text",children:"Or Sign In with Social Platforms"}),Object(G.jsxs)("div",{className:"social-media",children:[Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(1)},children:Object(G.jsx)(x.a,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(2)},children:Object(G.jsx)(O.a,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(3)},children:Object(G.jsx)(x.c,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(4)},children:Object(G.jsx)(x.b,{})})]})]}),Object(G.jsxs)("form",{onSubmit:function(e){return E(e,5)},className:"sign-up-form",id:"sign-up-form",children:[Object(G.jsx)("h2",{className:"title",children:"Sign up"}),Object(G.jsxs)("div",{className:"input-field ",children:[Object(G.jsx)("i",{className:"bx bxs-user"}),Object(G.jsx)("input",{type:"name",placeholder:"Name",id:"name-input",name:"first_name",required:!0,onChange:I})]}),Object(G.jsxs)("div",{className:"input-field ",children:[Object(G.jsx)("i",{className:"bx bxs-envelope"}),Object(G.jsx)("input",{type:"email",placeholder:"Email",id:"email-input",name:"email",required:!0,onChange:I})]}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-lock-alt"}),Object(G.jsx)("input",{type:"password",placeholder:"Password",id:"password-input",name:"password",required:!0,onChange:I})]}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-lock-alt"}),Object(G.jsx)("input",{type:"password",placeholder:"Confirm Password",id:"re_password-input",name:"re_password",required:!0,onChange:I})]}),Object(G.jsx)("input",{type:"submit",className:"btn",value:"Sign up"}),Object(G.jsx)("p",{className:"social-text",children:"Or Sign Up with Social Platforms"}),Object(G.jsxs)("div",{className:"social-media",children:[Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(1)},children:Object(G.jsx)(x.a,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(2)},children:Object(G.jsx)(O.a,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(3)},children:Object(G.jsx)(x.c,{})}),Object(G.jsx)("div",{className:"social-icon",onClick:function(){return T(4)},children:Object(G.jsx)(x.b,{})})]})]})]})}),Object(G.jsxs)("div",{className:"panels-container",children:[Object(G.jsx)("div",{className:"panel left-panel",children:Object(G.jsxs)("div",{className:"content",children:[Object(G.jsx)("h3",{children:"New here ?"}),Object(G.jsx)("p",{children:"Register now to get access to Notes, Textbooks, Timebable and Many More.."}),Object(G.jsx)("button",{className:"btn transparent sign-up-btn",id:"sign-up-btn",onClick:function(){document.getElementById("container").classList.add("sign-up-mode")},children:"Sign up"})]})}),Object(G.jsx)("div",{className:"panel right-panel",children:Object(G.jsxs)("div",{className:"content",children:[Object(G.jsx)("h3",{children:"One of us ?"}),Object(G.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}),Object(G.jsx)("button",{className:"btn transparent sign-in-btn",id:"sign-in-btn",onClick:function(){document.getElementById("container").classList.remove("sign-up-mode")},children:"Sign in"})]})})]})]})})})),W=Object(f.b)(null,{reset_password:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/reset_password/"),c,a);case 5:t.sent,n({type:I}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:E});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,n=Object(a.useState)(!1),c=Object(d.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)({email:""}),u=Object(d.a)(l,2),j=u[0],p=u[1],h=j.email;return s?Object(G.jsx)(o.a,{to:"/check-email"}):Object(G.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"Request Password Reset:"}),Object(G.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(h),r(!0)}(e)},style:{marginTop:"20px"},children:[Object(G.jsxs)("div",{className:"input-field",style:{width:"20rem"},children:[Object(G.jsx)("i",{className:"bx bxs-envelope"}),Object(G.jsx)("input",{type:"email",placeholder:"Email",name:"email",id:"re_password-input",value:h,onChange:function(e){return function(e){return p(Object(i.a)(Object(i.a)({},j),{},Object(b.a)({},e.target.name,e.target.value)))}(e)},required:!0})]}),Object(G.jsx)("button",{style:{marginTop:"15px",width:"15rem"},className:"btn",type:"submit",children:"Reset Password"})]}),Object(G.jsxs)(m.b,{to:"/",style:{textDecoration:"none",color:"black",lineHeight:"3rem"},children:[Object(G.jsx)("i",{className:"bx bx-arrow-back"})," Back"]})]})})})),M=Object(f.b)(null,{reset_password_confirm:function(e,t,n,a){return function(){var c=Object(j.a)(u.a.mark((function c(s){var r,i;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),c.prev=2,c.next=5,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/reset_password_confirm/"),i,r);case 5:c.sent,s({type:T}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),s({type:L});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,n=e.reset_password_confirm,c=Object(a.useState)(!1),s=Object(d.a)(c,2),r=s[0],l=s[1],u=Object(a.useState)({new_password:"",re_new_password:""}),j=Object(d.a)(u,2),p=j[0],h=j[1],m=p.new_password,x=p.re_new_password,O=function(e){return h(Object(i.a)(Object(i.a)({},p),{},Object(b.a)({},e.target.name,e.target.value)))};return r?Object(G.jsx)(o.a,{to:"/"}):Object(G.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:Object(G.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),m===x){var a=t.params.uid,c=t.params.token;n(a,c,m,x),l(!0)}}(e)},children:[Object(G.jsx)("div",{style:{width:"25rem"}}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-lock-alt"}),Object(G.jsx)("input",{type:"password",placeholder:"New Password",value:m,id:"new_password",name:"new_password",required:!0,minLength:"6",onChange:function(e){return O(e)}})]}),Object(G.jsxs)("div",{className:"input-field",children:[Object(G.jsx)("i",{className:"bx bxs-lock-alt"}),Object(G.jsx)("input",{type:"password",placeholder:"Confirm New Password",value:x,id:"new_password",name:"re_new_password",required:!0,minLength:"6",onChange:function(e){return O(e)}})]}),Object(G.jsx)("button",{className:"btn",type:"submit",children:"Reset Password"})]})})})),V=Object(f.b)(null,{verify:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,h.a.post("".concat("https://edtech1.herokuapp.com","/auth/users/activation/"),s,c);case 5:a({type:k}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),a({type:_});case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.verify,n=e.match,c=Object(a.useState)(!1),s=Object(d.a)(c,2),r=s[0],i=s[1];return r?Object(G.jsx)(o.a,{to:"/"}):Object(G.jsx)("div",{style:{display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"},children:Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"Verify your Account:"}),Object(G.jsx)("button",{onClick:function(e){var a=n.params.uid,c=n.params.token;t(a,c),i(!0)},style:{marginTop:"50px",textAlign:"center",width:"100%"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),Y=n(24),K=h.a.create({baseURL:"https://edtech1.herokuapp.com",headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}}),Q=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/college/",{params:{fields:"value,label"}}).then((function(e){t=e.data.results}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/college/".concat(t,"/")).then((function(e){n=e.data}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/college/".concat(t,"/")).then((function(e){n=e.data}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.put("/auth/profile/me/",t).then(window.location.href="/timetable");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.c)((function(e){return e.auth})).user,t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),l=Object(d.a)(r,2),b=l[0],p=l[1],h=Object(a.useState)([]),m=Object(d.a)(h,2),x=m[0],O=m[1],v=Object(a.useState)(e?{id:e.id,user_email:e.user_email,user:e.user,college:null,branch:null,year:null}:{}),g=Object(d.a)(v,2),y=g[0],N=g[1];function k(){return(k=Object(j.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N({id:e.id,user_email:e.user_email,user:e.user,college:n.value,branch:null,year:null}),p([]),t.next=4,X(n.value);case 4:a=t.sent,p(a.branches);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=Object(j.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N((function(t){return Object(i.a)(Object(i.a)({id:e.id,user_email:e.user_email,user:e.user},t),{},{branch:n.value,year:null})})),t.next=3,Z(y.college);case 3:a=t.sent,O(a.years);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==y.college||null==y.branch||null==y.year){e.next=6;break}return e.next=3,$(y);case 3:window.location.reload(),e.next=7;break;case 6:alert("Please fill in all details");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[]),(null===e||void 0===e?void 0:e.id)?null!==(null===e||void 0===e?void 0:e.college)?Object(G.jsx)(o.a,{to:"/timetable"}):Object(G.jsx)("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.1)"},children:Object(G.jsxs)("div",{style:{display:"grid",height:"45vh",width:"50vw",alignItems:"center",justifyContent:"unset",gridTemplateRows:"1fr 1fr 1fr 1fr"},children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your College"}),Object(G.jsx)(Y.a,{onChange:function(e){return k.apply(this,arguments)},options:c})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your Branch"}),Object(G.jsx)(Y.a,{onChange:function(e){return _.apply(this,arguments)},options:b})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("h3",{style:{color:"rgba(0,0,100,1)"},children:"Select Your Year"}),Object(G.jsx)(Y.a,{onChange:function(t){N((function(n){return Object(i.a)(Object(i.a)({id:e.id,user_email:e.user_email,user:e.user},n),{},{year:t.value})}))},options:x})]}),Object(G.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},onClick:function(){return w.apply(this,arguments)},children:Object(G.jsx)("button",{style:{border:"none",color:"rgba(0,0,100,1)",background:"white",padding:"10px 40px",fontSize:"18px",borderRadius:"25px"},children:"Submit"})})]})}):Object(G.jsx)(o.a,{to:"/"})},te=function(){return Object(G.jsx)("div",{style:{textAlign:"center",height:"100vh",alignItems:"center",justifyContent:"center",display:"flex"},children:Object(G.jsxs)("h3",{children:["Link has been sent to your ",Object(G.jsx)("a",{href:"http://gmail.com/",children:" Mail "})]})})},ne=n(18),ae=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.isAuthenticated,n=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch({method:"GET",headers:{Authorization:"JWT ".concat(t)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=localStorage.getItem("access"),c=Object(ne.a)(["".concat("https://edtech1.herokuapp.com","/api/college-detail/"),a],n),s=c.data,r=c.error,i=Object(ne.a)(["".concat("https://edtech1.herokuapp.com","/api/college-detail/"),a],n);return console.log(i),r?Object(G.jsx)("div",{className:"main_content_body",children:"Error while Fetching..."}):s?t?Object(G.jsx)("div",{className:"main_content_body",style:{marginTop:"5px"},children:Object(G.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(G.jsx)("img",{alt:"College Logo",src:null===s||void 0===s?void 0:s.link_image}),Object(G.jsx)("div",{style:{marginTop:"10px",fontSize:"x-large",textAlign:"center"},children:null===s||void 0===s?void 0:s.name}),Object(G.jsxs)("h5",{children:["EST. ",null===s||void 0===s?void 0:s.established]}),Object(G.jsx)("div",{style:{marginTop:"5px"},children:null===s||void 0===s?void 0:s.location}),Object(G.jsxs)("div",{style:{marginTop:"20px"},children:[Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.website_link,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bx-link",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=".concat(null===s||void 0===s?void 0:s.email),target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bx-mail-send",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bxl-linkedin",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bxl-instagram",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bxl-facebook",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bxl-twitter",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})}),Object(G.jsx)("a",{href:null===s||void 0===s?void 0:s.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("i",{className:"bx bxl-youtube",style:{color:"black",fontSize:"1.5rem",padding:"0 10px"}})})]}),Object(G.jsx)("div",{style:{width:"100%",height:"50vh",marginTop:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(G.jsx)("iframe",{title:"Google map link for college",src:null===s||void 0===s?void 0:s.static_map_src,style:{width:"85%",height:"85%",border:"0",loading:"lazy"}})})]})}):Object(G.jsx)(o.a,{to:"/"}):Object(G.jsx)("div",{className:"main_content_body",style:{marginTop:"5px"},children:"Loading"})})),ce=function(){return Object(G.jsx)("div",{children:"Hi"})},se=(n(11),function(){return Object(G.jsx)("div",{children:"Hi"})}),re=function(){return Object(G.jsx)("h1",{style:{marginLeft:"100px"},children:"hi"})},ie=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=(t[0],t[1],Object(a.useState)(!0)),c=Object(d.a)(n,2),s=(c[0],c[1],Object(o.i)()),r=(s.path,s.url,Object(a.useState)("DEFAULT")),i=Object(d.a)(r,2);i[0],i[1];return Object(G.jsx)("div",{children:"Hi"})},oe=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=(t[0],t[1],Object(a.useState)(!0)),c=Object(d.a)(n,2),s=(c[0],c[1],Object(o.i)().url,Object(a.useState)("DEFAULT")),r=Object(d.a)(s,2);r[0],r[1];return Object(G.jsx)("div",{children:"Hi"})},le=function(){return Object(G.jsx)("div",{className:"main_content_body",style:{display:"flex",justifyContent:"center"}})},ue=function(){return Object(G.jsx)("div",{children:"Hi"})},je=function(){Object(o.g)();var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=function(){return c(!n)};return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"top-navbar",children:Object(G.jsx)("i",{className:"bx bx-menu",style:{color:"var(--first-color)",fontSize:"40px",marginLeft:"11px",cursor:"pointer"},onClick:s})}),Object(G.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(G.jsxs)("ul",{className:"nav-menu-items",onClick:s,style:{overflow:"scroll"},children:[Object(G.jsx)("li",{className:"navbar-toggle",children:Object(G.jsx)("div",{to:"#",className:"menu-bars bx bx-x"})}),Object(G.jsxs)("ul",{className:"news_category_list",children:[Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-table"}),Object(G.jsx)("span",{className:"nav_name",children:"Timetable"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/portion",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-list-check"}),Object(G.jsx)("span",{className:"nav_name",children:"Portion"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/textbook",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bxs-book"}),Object(G.jsx)("span",{className:"nav_name",children:"TextBook"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/notes",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-book-open"}),Object(G.jsx)("span",{className:"nav_name",children:"Notes"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/recommendation",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-library"}),Object(G.jsx)("span",{className:"nav_name",children:"Recommendation"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/faculty",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-user"}),Object(G.jsx)("span",{className:"nav_name",children:"People"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/about",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bxs-school"}),Object(G.jsx)("span",{className:"nav_name",children:"About"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)(m.b,{to:"/user",className:"nav_link",children:[Object(G.jsx)("i",{className:"bx bx-user"}),Object(G.jsx)("span",{className:"nav_name",children:"User"})]})}),Object(G.jsx)("li",{className:"category-list-item",children:Object(G.jsxs)("div",{style:{},className:"nav_link log-out-btn nav_list",onClick:function(){},children:[Object(G.jsx)("i",{className:"bx bx-log-out ",style:{color:"white"}}),Object(G.jsx)("span",{className:"nav_name",children:"Log Out"})]})})]})]})})]})},be=n.p+"static/media/whitelogo.602f62f5.png",de=Object(o.j)(Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:z})}}})((function(e){var t=e.logout,n=Object(o.g)();function a(e){Array.from(document.getElementsByClassName("nav_link")).forEach((function(e){e.classList.remove("active")})),e.nativeEvent.target.parentNode.className="nav_link active"}return Object(G.jsxs)("div",{className:"l_navbar",id:"navbar",children:[Object(G.jsxs)("div",{className:"logo_content",children:[Object(G.jsxs)("div",{className:"logo",as:m.b,to:"/creator",children:[Object(G.jsx)("i",{className:"bx bxs-backpack",as:m.b,to:"/creator"}),Object(G.jsx)("img",{alt:"Logo",src:be,style:{height:"30px",paddingLeft:"10px"},className:"logo_name"})]}),Object(G.jsx)("i",{className:"bx bx-menu",id:"btn",onClick:function(){document.getElementById("navbar").classList.toggle("show"),document.getElementById("btn").classList.contains("bx-menu")?document.getElementById("btn").classList.replace("bx-menu","bx-x"):document.getElementById("btn").classList.replace("bx-x","bx-menu")}})]}),Object(G.jsxs)("ul",{className:"nav_list",children:[Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/",className:"nav_link active",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-table"}),Object(G.jsx)("span",{className:"nav_name",children:"Timetable"})]}),Object(G.jsx)("span",{className:"tooltip",children:"Timetable"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/portion",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-list-check"}),Object(G.jsx)("span",{className:"nav_name",children:"Portion"})]}),Object(G.jsx)("span",{className:"tooltip",children:"Portion"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/textbook",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bxs-book"}),Object(G.jsx)("span",{className:"nav_name",children:"TextBook"})]}),Object(G.jsx)("span",{className:"tooltip",children:"TextBook"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/notes",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-book-open"}),Object(G.jsx)("span",{className:"nav_name",children:"Notes"})]}),Object(G.jsx)("span",{className:"tooltip",children:"Notes"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/recommendation",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-library"}),Object(G.jsx)("span",{className:"nav_name",children:"Recommendation"})]}),Object(G.jsx)("span",{className:"tooltip",children:"Recommendation"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/faculty",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-group"}),Object(G.jsx)("span",{className:"nav_name",children:"People"})]}),Object(G.jsx)("span",{className:"tooltip",children:"People"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/about",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bxs-school"}),Object(G.jsx)("span",{className:"nav_name",children:"About"})]}),Object(G.jsx)("span",{className:"tooltip",children:"About"})]}),Object(G.jsxs)("li",{children:[Object(G.jsxs)(m.b,{to:"/user",className:"nav_link",onClick:a,children:[Object(G.jsx)("i",{className:"bx bx-user"}),Object(G.jsx)("span",{className:"nav_name",children:"User"})]}),Object(G.jsx)("span",{className:"tooltip",children:"User"})]})]}),Object(G.jsxs)("div",{className:"nav_link log-out-btn nav_list",onClick:function(){n.push("/"),t()},children:[Object(G.jsx)("i",{className:"bx bx-log-out ",style:{color:"white"}}),Object(G.jsx)("span",{className:"nav_name",children:"Log Out"})]}),Object(G.jsx)("span",{className:"tooltip",children:"Log Out"})]})}))),pe=n(26),he=n.n(pe),me=[{path:"/",component:q,title:"Auth"},{path:"/selectPreferences",component:ee,title:"EdTech"},{path:"/reset-password",component:W,title:"ResetPassword"},{path:"/password/reset/confirm/:uid/:token",component:M,title:"ResetPasswordConfirm"},{path:"/activate/:uid/:token",component:V,title:"Activate"},{path:"/check-email",component:te,title:"Activate"},{path:"/select-preferences",component:ee,title:"Select"},{path:"/:protectedRoutes",component:Object(o.j)(Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isActivated:e.auth.isActivated}}),{check_authenticated:J,load_user:B,googleAuthenticate:H})((function(e){var t=Object(o.h)();return Object(a.useEffect)((function(){var n=he.a.parse(t.search),a=n.state?n.state:null,c=n.code?n.code:null;a&&c?e.googleAuthenticate(a,c):(e.check_authenticated(),e.load_user())}),[t]),e.isAuthenticated?e.isActivated?Object(G.jsxs)("div",{children:[Object(G.jsx)(de,{}),Object(G.jsx)(je,{}),Object(G.jsxs)(o.d,{children:[Object(G.jsx)(o.b,{path:"/timetable",component:le}),Object(G.jsx)(o.b,{path:"/portion",component:re}),Object(G.jsx)(o.b,{path:"/textbook",component:oe}),Object(G.jsx)(o.b,{path:"/notes",component:se}),Object(G.jsx)(o.b,{path:"/recommendation",component:ie}),Object(G.jsx)(o.b,{path:"/faculty",component:ce}),Object(G.jsx)(o.b,{path:"/about",component:ae}),Object(G.jsx)(o.b,{path:"/user",component:ue})]})]}):Object(G.jsx)(o.a,{to:"/select-preferences"}):Object(G.jsx)(o.a,{to:"/"})}))),title:"protected"}],xe=Object(f.b)(null,{check_authenticated:J,load_user:B,googleAuthenticate:H})((function(e){var t=Object(o.h)();return Object(a.useEffect)((function(){var n=he.a.parse(t.search),a=n.state?n.state:null,c=n.code?n.code:null;a&&c?e.googleAuthenticate(a,c):(e.check_authenticated(),e.load_user())}),[t]),Object(G.jsx)("div",{children:e.children})})),Oe=function(){return Object(G.jsx)("div",{children:Object(G.jsx)(xe,{children:Object(G.jsx)(o.d,{children:me.map((function(e,t){return Object(G.jsx)(o.b,{path:e.path,exact:!0,render:function(t){return Object(G.jsx)(e.component,Object(i.a)({},t))}},t)}))})})})},fe=n(23),ve=n(44),ge=n(45),ye={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,isActivated:null,user:null},Ne=Object(fe.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0});case P:return localStorage.setItem("access",a.access),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0});case v:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case y:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case w:return Object(i.a)(Object(i.a)({},e),{},{user:a});case D:return Object(i.a)(Object(i.a)({},e),{},{isActivated:!0});case F:return Object(i.a)(Object(i.a)({},e),{},{isActivated:!1});case A:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1});case S:return Object(i.a)(Object(i.a)({},e),{},{user:null});case R:return localStorage.setItem("access",a.access),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case U:case g:case N:case z:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(i.a)(Object(i.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case I:case E:case T:case L:case k:case _:return Object(i.a)({},e);default:return e}}}),ke=[ge.a],_e=Object(fe.createStore)(Ne,{},Object(ve.composeWithDevTools)(fe.applyMiddleware.apply(void 0,ke)));r.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(m.a,{children:Object(G.jsx)(f.a,{store:_e,children:Object(G.jsx)(Oe,{})})})}),document.getElementById("root"))},50:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.2e1f577f.chunk.js.map