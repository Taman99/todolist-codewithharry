(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),r=n.n(s),i=(n(25),n(19)),o=n(20),l=(n.p,n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)(l.b,{classNameName:"navbar-brand",to:"/",children:[" ",e.title]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}function j(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.todo.name}),Object(d.jsx)("p",{children:e.todo.description}),Object(d.jsx)("button",{className:"btn-primary btn-sm",onClick:function(){e.onDelete(e.todo.id)},children:"Delete"})]})}b.defaultProps={title:"Your Title here"};var u=function(e){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{className:"text-center my-3",children:"Todo List"}),e.todos.length>0?e.todos.map((function(t){return Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.id)," ",Object(d.jsx)("hr",{})," "]})})):"No todo to display"]})},h=function(e){var t=e.addTodo,n="",c="";return Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&c?t(n,c):alert("Title or desc missing")},children:[Object(d.jsx)("h4",{children:"Add new Todo"}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"name",class:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return n=e.target.value},class:"form-control",id:"name","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{for:"desc",class:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return c=e.target.value},class:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Add Todo"})]})})},m=(n(33),function(){return Object(d.jsx)("div",{children:Object(d.jsx)("footer",{children:"Footer"})})});function f(){return Object(d.jsx)("div",{className:"my-3",children:"About Component"})}var x=n(2);var O=function(){var e=Object(c.useState)([{id:1,name:"TOdo1",description:"fgfdghghfgfgdf"},{id:2,name:"TOdo2",description:"fgfdghghfgfgdf"},{id:3,name:"TOdo3",description:"fgfdghghfgfgdf"}]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{title:"My Todo list"}),Object(d.jsxs)(x.c,{children:[Object(d.jsxs)(x.a,{exact:!0,path:"/",children:[Object(d.jsx)(h,{addTodo:function(e,t){var c={name:e,description:t,id:0};0!==n.length&&(c.id=n[n.length-1].id+1),a([].concat(Object(i.a)(n),[c]))}}),Object(d.jsx)(u,{todos:n,onDelete:function(e){a((function(){return n.filter((function(t){return t.id!==e}))}))}})]}),Object(d.jsx)(x.a,{path:"/about",render:function(){return Object(d.jsx)(f,{})}})]}),Object(d.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.1991e66c.chunk.js.map