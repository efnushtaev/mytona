(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),c=(a(42),a(43),a(2)),l=a(36),i=a(3),u=a(5),m={LOGIN:"demouser",PASSWORD:"demouser"},p={email:"",password:"",isAuthorized:!1,isValid:!0},d=function(e){return{type:"auth/UPDATE_AUTHORZATION",payload:e}},h=function(e){var t=e.props,a=t.email,n=t.password,o=t.isValid,s=t.onUserEmailChange,c=t.onUserPasswordChange,l=e.onHandleSubmit;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-md-6"},r.a.createElement("form",{className:"m-5",onSubmit:l},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"mt-3",for:"login"},"\u041b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{className:"form-control"+(o?"":" is-invalid"),defaultValue:a,id:"login",name:"email",type:"text",onChange:function(e){return s(e.target.value)}}),r.a.createElement("small",{className:o?"form-text text-muted":"invalid-feedback"},"\u041b\u043e\u0433\u0438\u043d: ",r.a.createElement("b",null,"demouser")),r.a.createElement("label",{className:"mt-3",for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{className:"form-control"+(o?"":" is-invalid"),defaultValue:n,id:"password",name:"user",type:"text",onChange:function(e){return c(e.target.value)}}),r.a.createElement("small",{className:o?"form-text text-muted":"invalid-feedback"},"\u041f\u0430\u0440\u043e\u043b\u044c: ",r.a.createElement("b",null,"demouser")),r.a.createElement("input",{className:"form-control btn btn-primary mt-5 block-d",type:"submit",value:"\u0412\u043e\u0439\u0442\u0438",id:"submit"})))))},E=Object(i.b)((function(e){return{email:e.auth.email,password:e.auth.password,isAuthorized:e.auth.isAuthorized,isValid:e.auth.isValid}}),{onUserEmailChange:function(e){return{type:"auth/SET_USER_EMAIL",payload:e}},onUserPasswordChange:function(e){return{type:"auth/SET_USER_PASSWORD",payload:e}},onUserDataCheck:function(e,t){return function(a){var n;(n=m).LOGIN===e&&n.PASSWORD===t?a(d(!0)):a(d(!1))}}})((function(e){var t=e.isAuthorized,a=e.onUserDataCheck,n=e.email,o=e.password,s=Object(l.a)(e,["isAuthorized","onUserDataCheck","email","password"]);return t?r.a.createElement(c.a,{from:"/login",to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(h,{onHandleSubmit:function(e){e.preventDefault(),a(n,o)},props:s}))})),f=function(e){return{isAuthorized:e.auth.isAuthorized}},g=function(e){return Object(i.b)(f)((function(t){return t.isAuthorized?r.a.createElement(e,t):r.a.createElement(c.a,{to:"/login"})}))},b=a(9),v=Object(b.d)(g)((function(){return r.a.createElement("h1",{className:"display-1 text-black-50 text-center mt-5"},"MYTONA TEST")})),S=a(13),N=a.n(S),y=a(17),O=a(33).create({baseURL:"https://jsonplaceholder.typicode.com/",withCredentials:!0}),P=function(){return O.get("posts").then((function(e){return e}))},C=function(){return O.get("photos").then((function(e){return e}))},A="photos/SET_USER_EMAIL",_="photos/SET_USER_PASSWORD",j={photos:[],isFetching:"",pagesSize:100,pageCount:"",currentPage:1},w=function(e){return{type:_,payload:e}},T=function(e){return{type:"photos/SET_PAGES_COUNT",payload:e}},U=a(35),z=function(e){e.currentPage;for(var t=e.onPageChanged,a=e.pagesSize,o=e.totalItemsCount,s=Object(n.useState)(1),c=Object(U.a)(s,2),l=c[0],i=c[1],u=[],m=Math.ceil(o.length/a),p=1;p<=m;p++)u.push(p);var d=Math.ceil(m/5),h=5*(l-1)+1,E=5*l;return Object(n.useEffect)((function(){}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{class:"pagination"},l>1&&r.a.createElement("li",{className:"page-item",onClick:function(){i(l-1)}},r.a.createElement("a",{className:"page-link"},"\xab")),u.filter((function(e){return e>=h&&e<=E})).map((function(e){return r.a.createElement("li",{className:"page-item",onClick:function(){t(e)}},r.a.createElement("a",{className:"page-link"},e))})),d>l&&r.a.createElement("li",{className:"page-item",onClick:function(){i(l+1)}},r.a.createElement("a",{className:"page-link"},"\xbb"))))},k=function(){return r.a.createElement("div",{class:"spinner-border",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))},R=function(e){return e.photosList.map((function(e){return r.a.createElement("img",{className:"img-thumbnail",style:{width:"10%"},src:e.thumbnailUrl})}))},D=Object(b.d)(Object(i.b)((function(e){return{isFetching:e.photos.isFetching,photos:e.photos.photos,pagesSize:e.photos.pagesSize,currentPage:e.photos.currentPage}}),{loadingPhotos:function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,C();case 3:a=e.sent,t(T),200===a.status?(t(w(!1)),t((n=a.data,{type:A,payload:n}))):console.error("status: "+a.status);case 6:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},updateFetchingStatus:w,onCurrentPageChanged:function(e){return{type:"photos/ON_CURRENT_PAGE_CHANGED",payload:e}}}),g)((function(e){var t=e.photos,a=e.currentPage,o=e.pagesSize,s=t.slice((a-1)*o,(a-1)*o+o);return Object(n.useEffect)((function(){e.loadingPhotos()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Photos"),e.isFetching&&r.a.createElement(k,null),r.a.createElement(z,{currentPage:e.currentPage,onPageChanged:e.onCurrentPageChanged,pagesSize:e.pagesSize,totalItemsCount:e.photos}),r.a.createElement(R,{photosList:s}))})),x="posts/SET_USER_EMAIL",F={posts:[],isFetching:"",pagesSize:10,pageCount:"",currentPage:1},G=function(e){return{type:"posts/SET_USER_PASSWORD",payload:e}},L=function(e){return{type:"posts/SET_PAGES_COUNT",payload:e}},I=function(e){var t=e.postsList;return r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),r.a.createElement("th",{scope:"col"},"\u041f\u043e\u0441\u0442"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.body))}))))},M=Object(b.d)(Object(i.b)((function(e){return{isFetching:e.posts.isFetching,posts:e.posts.posts,pagesSize:e.posts.pagesSize,currentPage:e.posts.currentPage}}),{loadingPosts:function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0)),e.next=3,P();case 3:a=e.sent,t(L),200===a.status?(t(G(!1)),t((n=a.data,{type:x,payload:n}))):console.error("status: "+a.status);case 7:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},updateFetchingStatus:G,onCurrentPageChanged:function(e){return{type:"posts/ON_CURRENT_PAGE_CHANGED",payload:e}}}),g)((function(e){var t=e.posts,a=e.currentPage,o=e.pagesSize,s=t.slice((a-1)*o,(a-1)*o+o);return Object(n.useEffect)((function(){e.loadingPosts()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Posts"),e.isFetching&&r.a.createElement(k,null),r.a.createElement(z,{currentPage:e.currentPage,onPageChanged:e.onCurrentPageChanged,pagesSize:e.pagesSize,totalItemsCount:e.posts}),r.a.createElement(I,{postsList:s}))})),W=a(11),H=Object(i.b)((function(e){return{isAuthorized:e.auth.isAuthorized}}),{updateAuthorization:d})((function(e){var t=e.isAuthorized,a=e.updateAuthorization;return r.a.createElement("div",null,r.a.createElement("h4",{className:"text-info"},"Efim Nushtaev"),r.a.createElement("ul",{className:"nav justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.b,{activeClassName:"active",className:"nav-link",to:"/"},"Main")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.b,{activeClassName:"active",className:"nav-link",to:"/posts"},"Posts")),r.a.createElement("li",null,r.a.createElement(W.b,{activeClassName:"active",className:"nav-link",to:"/photos"},"Photos")),r.a.createElement("li",null,t?r.a.createElement("button",{className:"btn btn-link nav-link border-left text-dark",onClick:function(){return a(!1)}},"Logout"):r.a.createElement(W.b,{activeClassName:"active",className:"nav-link border-left",to:"/login"},"Login"))))})),V=Object(i.b)((function(e){return{isAuthorized:e.auth.isAuthorized}}),{})((function(){return r.a.createElement("div",{className:"container-fluid mt-3"},r.a.createElement("div",null,r.a.createElement(H,null)),r.a.createElement("div",null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/login",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(c.b,{path:"/posts",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(c.b,{path:"/photos",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(c.b,{path:"*",render:function(){return r.a.createElement("h1",null,"404")}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(34),J=Object(b.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_EMAIL":return Object(u.a)({},e,{email:t.payload});case"auth/SET_USER_PASSWORD":return Object(u.a)({},e,{password:t.payload});case"auth/UPDATE_AUTHORZATION":return Object(u.a)({},e,{isAuthorized:t.payload,isValid:t.payload});default:return e}},photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(u.a)({},e,{photos:t.payload});case _:return Object(u.a)({},e,{isFetching:t.payload});case"photos/ON_CURRENT_PAGE_CHANGED":return Object(u.a)({},e,{currentPage:t.payload});case"photos/SET_PAGES_COUNT":return Object(u.a)({},e,{pagesCount:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)({},e,{posts:t.payload});case"posts/SET_USER_PASSWORD":return Object(u.a)({},e,{isFetching:t.payload});case"posts/ON_CURRENT_PAGE_CHANGED":return Object(u.a)({},e,{currentPage:t.payload});case"posts/SET_PAGES_COUNT":return Object(u.a)({},e,{pagesCount:t.payload});default:return e}}}),Z=Object(b.e)(J,Object(b.a)(B.a));window.store=Z;var Y=Z;s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,null,r.a.createElement(i.a,{store:Y},r.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4f0cf124.chunk.js.map