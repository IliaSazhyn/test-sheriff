(this["webpackJsonptest-sheriff"]=this["webpackJsonptest-sheriff"]||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s}));var c="GET_NEWS",r="NEWS_ERROR",a="USER_LOGIN",i="USER_LOGOUT",s="USER_ERROR"},43:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),s=(n(43),n(23)),u=n(6),o=n(56),j=n(19),l=n(55),b=n(53),d=n(57),h=n(58),O=n(3),f=function(){var e=Object(j.c)((function(e){return e.user})),t=Object(u.f)();return Object(O.jsx)(l.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(O.jsxs)(h.a,{className:"mr-auto",children:[Object(O.jsx)(h.a.Link,{href:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(O.jsx)(h.a.Link,{href:"/news",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(O.jsx)(h.a.Link,{onClick:function(){e.isAuthenticate?t.push("/profile"):t.push("/login")},children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})]})})})})},p=(n(51),Object(c.lazy)((function(){return n.e(7).then(n.bind(null,94))}))),x=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,95))})),m=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(6)]).then(n.bind(null,96))})),v=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,97))})),y=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,100))}));var g=function(){return Object(O.jsxs)(s.a,{basename:"/test-sheriff",children:[Object(O.jsx)(f,{}),Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(o.a,{animation:"border"}),children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/login",component:m}),Object(O.jsx)(u.a,{path:"/profile",component:v}),Object(O.jsx)(u.a,{path:"/news",component:y}),Object(O.jsx)(u.a,{path:"/",exact:!0,component:p}),Object(O.jsx)(u.a,{component:x})]})})]})},w=n(16),R=n(34),k=n(35),E=n(14),S=n(17),z={news:[],loading:!0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a:return Object(E.a)(Object(E.a)({},e),{},{news:t.payload,loading:!1});default:return e}},_={user:[],isAuthenticate:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.d:return Object(E.a)(Object(E.a)({},e),{},{user:t.payload,isAuthenticate:!0});case S.e:return Object(E.a)(Object(E.a)({},e),{},{user:[],isAuthenticate:!1});default:return e}},N=Object(w.combineReducers)({news:L,user:A}),U=[R.a],G=Object(w.createStore)(N,{},Object(k.composeWithDevTools)(w.applyMiddleware.apply(void 0,U)));i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(j.a,{store:G,children:Object(O.jsx)(g,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f0cc598f.chunk.js.map