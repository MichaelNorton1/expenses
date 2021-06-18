(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),u=n(9),o=(n(15),n(0)),d=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})},j=(n(17),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(d,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),b=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(u.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(j,{dataPoints:n})};n(18),n(19);var x=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{month:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__day",children:n}),Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsxs)("div",{className:"expense-date__year",children:[a," "]})]})};n(20);var v=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},h=function(e){return Object(o.jsxs)(v,{className:"expense-item",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsxs)("div",{className:" expense-item__description",children:[Object(o.jsxs)("h2",{children:[" ",e.title]}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},O=(n(21),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(22);var m=function(e){var t=Object(a.useState)("2020"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(v,{className:"expenses",children:[Object(o.jsx)(O,{selected:c,onChangeFilter:function(e){l(e),console.log(e)}}),Object(o.jsx)(b,{expenses:s}),0===s.length&&Object(o.jsx)("p",{className:"none",children:"No expenses found"}),s.map((function(e){return Object(o.jsx)(h,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})})},p=n(7),f=(n(23),n(24),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],d=i[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),x=b[0],v=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),v(""),l(""),d("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"amount"}),Object(o.jsx)("input",{value:u,onChange:function(e){d(e.target.value)},type:"number",min:"0.01",step:"0.01"})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"date"}),Object(o.jsx)("input",{name:"mydate",placeholder:"mm/dd/yyyy",value:x,onChange:function(e){v(e.target.value)},type:"date",min:"2019-01-01",max:"2022-12-31"})]})]}),Object(o.jsxs)("div",{className:" new-expense__actions",children:[" ",Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),g=function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},N=(n(25),[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}]);var _=function(){var e=Object(a.useState)(N),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(o.jsx)(m,{items:n})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.a6f99def.chunk.js.map