(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={item:"ContactsList_item__10r8T",deleteBtn:"ContactsList_deleteBtn__CwrcL"}},20:function(t,e,n){t.exports={label:"Filter_label__3LPFl",input:"Filter_input__2noY3",title:"Filter_title__1BSLq"}},21:function(t,e,n){t.exports={container:"App_container__2Ia5D",title:"App_title__2Df6N"}},34:function(t,e,n){t.exports={container:"Section_container__1evxG"}},36:function(t,e,n){t.exports={loader:"Loader_loader__3Hcmx"}},8:function(t,e,n){t.exports={form__container:"Form_form__container__1tUDQ",label:"Form_label__2aVfU",input:"Form_input__2Zj2H",add__btn:"Form_add__btn__g-DiH",name__input:"Form_name__input__3lx5w"}},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),i=n.n(r),o=n(5),s=n(24),u=n(10),l=n.n(u),b=n(18),j=n(6),d=n(9),f=n.n(d);f.a.defaults.baseURL="https://619c06d668ebaa001753c73c.mockapi.io";var p=function(t){return f.a.post("/contacts",t).then((function(t){return t.data}))},O=function(t){return f.a.delete("/contacts/".concat(t))};f.a.defaults.baseURL="https://619c06d668ebaa001753c73c.mockapi.io";var m=Object(j.c)("contacts/fetchContacts",Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("/contacts").then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),_=Object(j.c)("contacts/addContact",function(){var t=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),h=Object(j.c)("contacts/deleteContact",function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return n=t.sent,a=n.data.id,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x=function(t){return t.contacts.items},v=function(t){var e=t.contacts.filter.toLocaleLowerCase();return t.contacts.items.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))},N=n(8),w=n.n(N),g=n(1);function C(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],l=i[1],b=Object(o.b)(),j=Object(o.c)(x),d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"phone":l(a);break;default:return}},f=function(){c(""),l("")},p=function(t){j.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):b(_(t))};return Object(g.jsxs)("form",{className:w.a.form__container,onSubmit:function(t){t.preventDefault(),p({name:n,phone:u}),f()},children:[Object(g.jsxs)("label",{className:w.a.label,children:[Object(g.jsx)("span",{className:w.a.name__input,children:"Name"}),Object(g.jsx)("input",{className:w.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:d})]}),Object(g.jsxs)("label",{className:w.a.label,children:[Object(g.jsx)("span",{className:w.a.name__input,children:"Number"}),Object(g.jsx)("input",{className:w.a.input,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:d})]}),Object(g.jsx)("button",{type:"submit",className:w.a.add__btn,children:"Add contact"})]})}var k=n(34),y=n.n(k);function L(t){var e=t.title,n=t.children;return Object(g.jsxs)("div",{className:y.a.container,children:[e&&Object(g.jsx)("h2",{className:"title",children:e}),n]})}var F=n(19),A=n.n(F);function D(){var t=Object(o.b)(),e=Object(o.c)(v);return Object(g.jsx)("ul",{className:A.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.phone;return Object(g.jsxs)("li",{className:A.a.item,children:[a,": ",c,Object(g.jsx)("button",{className:A.a.deleteBtn,onClick:function(){return t(h(n))},children:"Delete"})]},n)}))})}var S=function(t){return t.contacts.filter},z=Object(j.b)("contacts/changeFilter"),B=n(20),q=n.n(B);function T(){var t=Object(o.b)(),e=Object(o.c)(S);return Object(g.jsxs)("label",{className:q.a.label,children:[Object(g.jsx)("span",{className:q.a.title,children:"Find contacts by name"}),Object(g.jsx)("input",{className:q.a.input,type:"text",value:e,onChange:function(e){var n=e.target;return t(z(n.value))}})]})}var U=n(35),Z=n.n(U),H=(n(84),n(36)),J=n.n(H);function M(){return Object(g.jsx)("div",{className:J.a.loader,children:Object(g.jsx)(Z.a,{type:"ThreeDots",color:"#5a7ffa",height:80,width:80,timeout:2e3})})}var P=n(21),R=n.n(P);function E(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.contacts.loading}));return Object(a.useEffect)((function(){t(m())}),[t]),Object(g.jsxs)("div",{className:R.a.container,children:[Object(g.jsx)("h1",{className:R.a.title,children:"Phonebook"}),Object(g.jsx)(L,{children:Object(g.jsx)(C,{})}),Object(g.jsx)("h2",{className:R.a.title_contacts,children:"Contacts"}),Object(g.jsxs)(L,{children:[Object(g.jsx)(T,{}),e&&Object(g.jsx)(M,{}),Object(g.jsx)(D,{})]})]})}var G,I,Q=n(17),V=n(4),Y=n(11),$=n(3),K=Object(j.d)([],(G={},Object($.a)(G,m.fulfilled,(function(t,e){return e.payload})),Object($.a)(G,_.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object($.a)(G,h.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),G)),W=Object(j.d)(!1,(I={},Object($.a)(I,m.pending,(function(){return!0})),Object($.a)(I,m.fulfilled,(function(){return!1})),Object($.a)(I,m.rejected,(function(){return!1})),Object($.a)(I,_.pending,(function(){return!0})),Object($.a)(I,_.fulfilled,(function(){return!1})),Object($.a)(I,_.rejected,(function(){return!1})),Object($.a)(I,h.pending,(function(){return!0})),Object($.a)(I,h.fulfilled,(function(){return!1})),Object($.a)(I,h.rejected,(function(){return!1})),I)),X=Object(j.d)("",Object($.a)({},z,(function(t,e){return e.payload}))),tt=Object(Q.a)(Object(j.e)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),et=Object(V.b)({items:K,filter:X,loading:W}),nt=Object(j.a)({reducer:{contacts:et},middleware:tt,devTools:!1});n(85);i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{store:nt,children:Object(g.jsx)(E,{})})}),document.querySelector("#root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.523dd3b8.chunk.js.map