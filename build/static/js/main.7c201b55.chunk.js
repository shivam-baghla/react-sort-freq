(this["webpackJsonpreact-sort-freq"]=this["webpackJsonpreact-sort-freq"]||[]).push([[0],{13:function(e,r,t){e.exports={App:"App_App__1l2HM"}},19:function(e,r,t){},21:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),c=t(11),s=t.n(c),p=(t(19),t(14)),l=t(12),i=t(8),o=t(13),u=t.n(o),b=t(4),j=t.n(b),d=t(0);var _=function(e){var r=e.data,t=e.label;return Object(d.jsxs)("div",{className:j.a.Wrapper,children:[Object(d.jsx)("label",{className:j.a.Label,children:t}),Object(d.jsx)("div",{className:j.a.ListWrapper,children:r.map((function(e,r){return Object(d.jsx)("span",{className:j.a.ArrayElement,children:e},r)}))})]})},m=t(9),O=t.n(m);var f=function(e){var r=e.submitHandler,t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(d.jsxs)("div",{className:O.a.FormWrapper,children:[Object(d.jsx)("input",{className:O.a.Input,type:"number",value:c,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("button",{className:O.a.Button,onClick:function(){r(parseInt(c)),s(0)},children:"Add Number"})]})};var x=function(){var e=Object(a.useState)([]),r=Object(i.a)(e,2),t=r[0],n=r[1];return Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)(f,{submitHandler:function(e){n([].concat(Object(p.a)(t),[e]))}}),t.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{label:"Input Array",data:t}),Object(d.jsx)("br",{}),Object(d.jsx)(_,{label:"Sorted Array",data:function(e){var r=Object(l.a)(e).slice(0),t={};return r.sort(),r.forEach((function(e){t.hasOwnProperty(e)?t[e]++:t[e]=1})),r.sort((function(e,r){return t[r]-t[e]}))}(t)})]}):null]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},4:function(e,r,t){e.exports={Wrapper:"DisplayArray_Wrapper__4Q2rz",ListWrapper:"DisplayArray_ListWrapper__gpc_d",Label:"DisplayArray_Label__N2gvG",ArrayElement:"DisplayArray_ArrayElement__2_7A4"}},9:function(e,r,t){e.exports={FormWrapper:"Form_FormWrapper__3CXkE",Input:"Form_Input__2FscZ",Button:"Form_Button__1OUZN"}}},[[21,1,2]]]);
//# sourceMappingURL=main.7c201b55.chunk.js.map