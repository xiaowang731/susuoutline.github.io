import{j as e,O as t}from"./index-_JusRMll.js";import{h as n}from"./headerView-ByIH2EPA.js";const l=[{id:"0001",icon:"",title:"组件",subtitle:[{id:"1001",title:"1",icon:""},{id:"1002",title:"2",icon:""}]},{id:"0002",icon:"",title:"组件2",subtitle:[{id:"2001",title:"1",icon:""},{id:"2002",title:"2",icon:""},{id:"2003",title:"3",icon:""}]}],a=()=>e.jsx(e.Fragment,{children:l.map(s=>e.jsxs("div",{className:"nav-panel",children:[e.jsxs("div",{className:"nav-title",children:[e.jsx("i",{}),e.jsx("span",{children:s.title})]}),s.subtitle.map(i=>e.jsxs("div",{className:"nav-header",children:[e.jsx("i",{}),e.jsx("span",{children:i.title})]}))]},s.id))}),r=()=>e.jsxs("div",{className:"contents",children:[e.jsx("div",{className:"view-header",children:e.jsx(n,{})}),e.jsxs("div",{className:"panel-contents",children:[e.jsx("div",{className:"panel-menu",children:e.jsx(a,{})}),e.jsx("div",{className:"panel-show",children:e.jsx(t,{})})]})]});export{r as default};