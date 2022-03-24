(this["webpackJsonpip5-admin-ui"]=this["webpackJsonpip5-admin-ui"]||[]).push([[0],{307:function(e,t,c){"use strict";(function(e){var r=c(99),a=c(78),n={login:function(t){var c=t.username,n=t.password,s=new Headers;s.append("Authorization","Basic "+e.from(c+":"+n).toString("base64")),s.append("Content-Type","application/json");var j=new Request(a.b,{method:"GET",headers:s});return fetch(j).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);var t=e.headers.get("Authorization");r.a.setToken(t)}))},logout:function(){return r.a.ereaseToken(),Promise.resolve()},checkAuth:function(){return r.a.getToken()?Promise.resolve():Promise.reject()},checkError:function(e){var t=e.status;return 401===t||403===t?(r.a.ereaseToken(),Promise.reject()):Promise.resolve()},getPermissions:function(){return r.a.getToken()?Promise.resolve():Promise.reject()}};t.a=n}).call(this,c(257).Buffer)},393:function(e,t,c){},394:function(e,t,c){},534:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(18),s=c.n(n),j=(c(393),c(394),c(620)),o=c(619),i=c(101),u=c(306),l=c(99),b=c(78),O=function(e,t){t||(t={}),t.headers||(t.headers=new Headers({Accept:"application/json"}));var c=l.a.getToken();return c&&t.headers.set("Authorization","Bearer ".concat(c)),i.a.fetchJson(e,t)},d={getList:function(e,t){var c="".concat(b.a,"/").concat(e);return O(c).then((function(e){e.headers;var t=e.json;return{data:t,total:t.length}}))},getMany:function(e,t){var c={filter:JSON.stringify({id:t.ids})},r="".concat(b.a,"/").concat(e,"?").concat(Object(u.stringify)(c));return O(r).then((function(e){return{data:e.json}}))},getOne:function(e,t){var c="".concat(b.a,"/").concat(e,"/").concat(t.id);return O(c).then((function(e){return{data:e.json}}))},update:function(e,t){return O("".concat(b.a,"/").concat(e),{method:"PUT",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},create:function(e,t){return O("".concat(b.a,"/").concat(e),{method:"POST",body:JSON.stringify(t.data)}).then((function(e){return{data:e.json}}))},delete:function(e,t){return O("".concat(b.a,"/").concat(e,"/").concat(t.id),{method:"DELETE"}).then((function(e){e.json;return{data:t.previousData}}))},deleteMany:function(e,t){return O("".concat(b.a,"/").concat(e,"/many/").concat(t.ids),{method:"DELETE"}).then((function(e){e.json;return{data:[]}}))}},x=c(307),h=c(16),f=c(621),p=c(622),m=c(609),T=c(610),y=c(624),g=c(623),v=c(333),D=c(612),E=c(625),S=c(626),N=[{id:"ROLE_ADMIN",name:"Admin"},{id:"ROLE_USER",name:"User"}],P=[{id:"SENDER",name:"Sender"},{id:"NOTIFICATION_TYPE",name:"Notification Type"}],k=c(4),I=function(e){return Object(k.jsx)(f.a,Object(h.a)(Object(h.a)({},e),{},{sort:{field:"userName",order:"DESC"},children:Object(k.jsxs)(p.a,{rowClick:"edit",children:[Object(k.jsx)(m.a,{label:"User Name",source:"userName"}),Object(k.jsx)(T.a,{source:"role",choices:N})]})}))},C=function(e){return Object(k.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"userName"}),Object(k.jsx)(D.a,{source:"password"}),Object(k.jsx)(E.a,{source:"role",choices:N})]})}))},w=function(e){return Object(k.jsx)(S.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"userName"}),Object(k.jsx)(D.a,{source:"password"}),Object(k.jsx)(E.a,{source:"role",choices:N})]})}))},F=c(634),R=c(627),A=c(613),L=function(e){return Object(k.jsx)(f.a,Object(h.a)(Object(h.a)({},e),{},{sort:{field:"name",order:"DESC"},children:Object(k.jsxs)(p.a,{rowClick:"edit",children:[Object(k.jsx)(m.a,{source:"name"}),Object(k.jsx)(F.a,{source:"userId",reference:"users",children:Object(k.jsx)(m.a,{source:"userName"})})]})}))},J=function(e){return Object(k.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"name"}),Object(k.jsx)(R.a,{source:"userId",reference:"users",children:Object(k.jsx)(A.a,{optionText:"userName"})})]})}))},_=function(e){return Object(k.jsx)(S.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"name"}),Object(k.jsx)(R.a,{source:"userId",reference:"users",children:Object(k.jsx)(A.a,{optionText:"userName"})})]})}))},B=c(614),V=c(628),M=function(e){return Object(k.jsx)(f.a,Object(h.a)(Object(h.a)({},e),{},{sort:{field:"title",order:"DESC"},children:Object(k.jsxs)(p.a,{rowClick:"edit",children:[Object(k.jsx)(m.a,{source:"displayText"}),Object(k.jsx)(m.a,{source:"title"}),Object(k.jsx)(m.a,{source:"body"}),Object(k.jsx)(m.a,{source:"description"}),Object(k.jsx)(B.a,{source:"textToSpeech"})]})}))},U=function(e){return Object(k.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{label:"Display Text",source:"displayText"}),Object(k.jsx)(v.a,{source:"title"}),Object(k.jsx)(v.a,{multiline:!0,source:"body"}),Object(k.jsx)(v.a,{source:"description"}),Object(k.jsx)(V.a,{source:"textToSpeech"})]})}))},z=function(e){return Object(k.jsx)(S.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"displayText"}),Object(k.jsx)(v.a,{source:"title"}),Object(k.jsx)(v.a,{multiline:!0,source:"body"}),Object(k.jsx)(v.a,{source:"description"}),Object(k.jsx)(V.a,{source:"textToSpeech"})]})}))},Y=c(142),H=c(615),q=c(616),G=c(631),K=c(617),Q=c(632),W=c(633),X=c(629),Z=c(618),$=["formData","scopedFormData","getSource"],ee=["formData","scopedFormData","getSource"],te=["formData","scopedFormData","getSource"],ce=["formData","scopedFormData","getSource"],re=function(e){return Object(k.jsx)(f.a,Object(h.a)(Object(h.a)({},e),{},{sort:{field:"name",order:"DESC"},children:Object(k.jsxs)(p.a,{rowClick:"edit",children:[Object(k.jsx)(F.a,{source:"clientId",reference:"clients",children:Object(k.jsx)(m.a,{source:"name"})}),Object(k.jsx)(m.a,{source:"name"}),Object(k.jsx)(H.a,{label:"Rule Parameters",source:"ruleParameters",children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(m.a,{label:"Rule Type",source:"ruleType"}),Object(k.jsx)(q.a,{label:"Value",render:function(e){var t=e.ruleType;e._;return"SENDER"===t&&Object(k.jsx)(F.a,{source:"value",reference:"clients",children:Object(k.jsx)(m.a,{source:"name"})})||Object(k.jsx)(F.a,{source:"value",reference:"notificationtypes",children:Object(k.jsx)(m.a,{source:"displayText"})})}})]})}),Object(k.jsx)(G.a,{label:"Notification Types",source:"notificationTypes",reference:"notificationtypes",children:Object(k.jsx)(K.a,{children:Object(k.jsx)(Q.a,{source:"title"})})}),Object(k.jsx)(G.a,{label:"Call Types",source:"callTypes",reference:"calltypes",children:Object(k.jsx)(K.a,{children:Object(k.jsx)(Q.a,{source:"displayText"})})})]})}))},ae=function(e){return Object(k.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(R.a,{source:"clientId",reference:"clients",children:Object(k.jsx)(A.a,{optionText:"name"})}),Object(k.jsx)(v.a,{source:"name"}),Object(k.jsx)(W.a,{source:"ruleParameters",children:Object(k.jsxs)(X.a,{children:[Object(k.jsx)(E.a,{label:"Rule Type",source:"ruleType",choices:P}),Object(k.jsx)(Z.a,{children:function(e){e.formData;var t=e.scopedFormData,c=e.getSource,r=Object(Y.a)(e,$);return t&&"SENDER"===t.ruleType&&Object(k.jsx)(R.a,Object(h.a)(Object(h.a)({label:"Value",source:c("value"),reference:"clients"},r),{},{children:Object(k.jsx)(A.a,{optionText:"name"})}))}}),Object(k.jsx)(Z.a,{children:function(e){e.formData;var t=e.scopedFormData,c=e.getSource,r=Object(Y.a)(e,ee);return t&&"NOTIFICATION_TYPE"===t.ruleType&&Object(k.jsx)(R.a,Object(h.a)(Object(h.a)({label:"Value",source:c("value"),reference:"notificationtypes"},r),{},{children:Object(k.jsx)(A.a,{optionText:"title"})}))}})]})}),Object(k.jsx)(W.a,{source:"notificationTypes",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"notificationtypes",children:Object(k.jsx)(A.a,{optionText:"title"})})})}),Object(k.jsx)(W.a,{source:"callTypes",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"calltypes",children:Object(k.jsx)(A.a,{optionText:"displayText"})})})})]})}))},ne=function(e){return Object(k.jsx)(S.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(R.a,{source:"clientId",reference:"clients",children:Object(k.jsx)(A.a,{optionText:"name"})}),Object(k.jsx)(v.a,{source:"name"}),Object(k.jsx)(W.a,{source:"ruleParameters",children:Object(k.jsxs)(X.a,{children:[Object(k.jsx)(E.a,{label:"Rule Type",source:"ruleType",choices:P}),Object(k.jsx)(Z.a,{children:function(e){e.formData;var t=e.scopedFormData,c=e.getSource,r=Object(Y.a)(e,te);return t&&"SENDER"===t.ruleType&&Object(k.jsx)(R.a,Object(h.a)(Object(h.a)({label:"Value",source:c("value"),reference:"clients"},r),{},{children:Object(k.jsx)(A.a,{optionText:"name"})}))}}),Object(k.jsx)(Z.a,{children:function(e){e.formData;var t=e.scopedFormData,c=e.getSource,r=Object(Y.a)(e,ce);return t&&"NOTIFICATION_TYPE"===t.ruleType&&Object(k.jsx)(R.a,Object(h.a)(Object(h.a)({label:"Value",source:c("value"),reference:"notificationtypes"},r),{},{children:Object(k.jsx)(A.a,{optionText:"title"})}))}})]})}),Object(k.jsx)(W.a,{source:"notificationTypes",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"notificationtypes",children:Object(k.jsx)(A.a,{optionText:"title"})})})}),Object(k.jsx)(W.a,{source:"callTypes",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"calltypes",children:Object(k.jsx)(A.a,{optionText:"displayText"})})})})]})}))},se=function(e){return Object(k.jsx)(f.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(p.a,{rowClick:"edit",children:[Object(k.jsx)(m.a,{source:"displayText"}),Object(k.jsx)(G.a,{source:"participants",reference:"clients",children:Object(k.jsx)(K.a,{children:Object(k.jsx)(Q.a,{source:"name"})})})]})}))},je=function(e){return Object(k.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"displayText"}),Object(k.jsx)(W.a,{source:"participants",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"clients",children:Object(k.jsx)(A.a,{optionText:"name"})})})})]})}))},oe=function(e){return Object(k.jsx)(S.a,Object(h.a)(Object(h.a)({},e),{},{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{source:"displayText"}),Object(k.jsx)(W.a,{source:"participants",children:Object(k.jsx)(X.a,{children:Object(k.jsx)(R.a,{reference:"clients",children:Object(k.jsx)(A.a,{optionText:"name"})})})})]})}))};var ie=function(){return Object(k.jsxs)(j.a,{dataProvider:d,authProvider:x.a,children:[Object(k.jsx)(o.a,{name:"users",list:I,edit:C,create:w}),Object(k.jsx)(o.a,{name:"clients",list:L,edit:J,create:_}),Object(k.jsx)(o.a,{name:"notificationtypes",list:M,edit:U,create:z,options:{label:"Notification Types"}}),Object(k.jsx)(o.a,{name:"configurations",list:re,edit:ae,create:ne}),Object(k.jsx)(o.a,{name:"calltypes",list:se,edit:je,create:oe})]})},ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,636)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ie,{})}),document.getElementById("root")),ue()},78:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return a}));var r="".concat("http://localhost:5000","/api"),a="".concat(r,"/users/login")},99:function(e,t,c){"use strict";t.a=function(){var e=null;return{ereaseToken:function(){return e=null,!0},getToken:function(){return e},setToken:function(t){return e=t,!0}}}()}},[[534,1,2]]]);
//# sourceMappingURL=main.e911b416.chunk.js.map