(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{10:function(e,t,n){e.exports={btn:"Button_btn__3a6AQ"}},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(5),c=n.n(r),u=(n(15),n(3)),i=n.n(u),l=n(1),o=function(e){return Object(l.jsx)("input",{className:e.className,type:"number",value:e.value,onChange:function(t){var n=t.currentTarget.valueAsNumber;e.onChange(n)}})},b=n(4),d=n(2),j={startValue:0,maxValue:1,disabledSet:!1},O=function(e){return{type:"SET-DISABLE-BTN-SET",disabled:e}},p=n(10),A=n.n(p),_=function(e){return Object(l.jsx)("button",{className:A.a.btn,disabled:e.disabled,onClick:function(){e.onClick()},children:Object(l.jsx)("span",{children:e.name})})},E={counter:0,disabledInc:!0,disabledReset:!0,messageItem:""},T=function(e,t){return{type:"SET-COUNTER",startValue:e,disabled:t}},m=function(e){return{type:"DISABLED-BUTTON-INC",disabled:e}},S=function(e){return{type:"DISABLED-BUTTON-RESET",disabled:e}},x=function(e){return{type:"SET-MESSAGE-ITEM",messageItem:e}},v=function(){var e=Object(b.c)((function(e){return e.settings})),t=e.startValue,n=e.maxValue,s=e.disabledSet,r=Object(b.b)();Object(a.useEffect)((function(){var e=localStorage.getItem("values");if(e){var t=JSON.parse(e);r({type:"GET-MAX-VALUE-FROM-LOCAL-STORAGE",value:t.maxValue}),r(function(e){return{type:"GET-START-VALUE-FROM-LOCAL-STORAGE",value:e}}(t.startValue))}}),[r]);var c=t<0||n<0||n<t||n===t,u=function(){r(O(!1)),r(m(!0)),r(S(!0)),c?(r(x("Error")),r(O(!0))):r(x("Setting"))},d=n===t?i.a.errorInput:i.a.input;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:i.a.setting,children:[Object(l.jsxs)("span",{children:[" ","max value: ",Object(l.jsx)(o,{className:d,value:n,onChange:function(e){r(function(e){return{type:"SET-MAX-VALUE",maxValue:e}}(e)),u()}})]}),Object(l.jsxs)("span",{children:[" ","start value: ",Object(l.jsx)(o,{className:d,value:t,onChange:function(e){r(function(e){return{type:"SET-START-VALUE",startValue:e}}(e)),u()}})]})]}),Object(l.jsx)("div",{className:i.a.buttonSet,children:Object(l.jsx)(_,{name:"SET",disabled:s,onClick:function(){var e={startValue:t,maxValue:n};localStorage.setItem("values",JSON.stringify(e)),r(x("Count")),r(T(t,!1)),r(O(!0)),r(S(!1))}})})]})},f=function(){var e=Object(b.c)((function(e){return e.counter})),t=e.counter,n=e.disabledInc,a=e.disabledReset,s=e.messageItem,r=Object(b.c)((function(e){return e.settings})),c=r.maxValue,u=r.startValue,o=Object(b.b)(),d=t===c?i.a.error:i.a.counter;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:i.a.display,children:Object(l.jsx)("div",{children:function(){switch(s){case"Setting":return Object(l.jsx)("div",{children:" enter values and press 'set' "});case"Error":return Object(l.jsx)("div",{className:i.a.errorMessage,children:"Incorrect value!"});case"Count":return Object(l.jsx)("div",{className:d,children:t});default:return Object(l.jsx)("div",{className:i.a.counter,children:t})}}()})}),Object(l.jsxs)("div",{className:i.a.buttons,children:[Object(l.jsx)(_,{name:"INC",disabled:n,onClick:function(){o(function(e,t){return{type:"INC-COUNTER",counter:e,maxValue:t}}(t,c)),t+1>=c&&(o(m(!0)),o(S(!1)))}}),Object(l.jsx)(_,{name:"RESET",disabled:a,onClick:function(){o(T(u,!1))}})]})]})};var g=function(){return Object(l.jsxs)("div",{className:i.a.App,children:[Object(l.jsx)("div",{className:i.a.setCounter,children:Object(l.jsx)(v,{})}),Object(l.jsx)("div",{className:i.a.setCounter,children:Object(l.jsx)(f,{})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},N=n(9),C=Object(N.a)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-START-VALUE":return Object(d.a)(Object(d.a)({},e),{},{startValue:t.startValue});case"SET-MAX-VALUE":return Object(d.a)(Object(d.a)({},e),{},{maxValue:t.maxValue});case"SET-DISABLE-BTN-SET":return Object(d.a)(Object(d.a)({},e),{},{disabledSet:t.disabled});case"GET-MAX-VALUE-FROM-LOCAL-STORAGE":return Object(d.a)(Object(d.a)({},e),{},{maxValue:t.value});case"GET-START-VALUE-FROM-LOCAL-STORAGE":return Object(d.a)(Object(d.a)({},e),{},{startValue:t.value});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-COUNTER":return Object(d.a)(Object(d.a)({},e),{},{counter:t.startValue,disabledInc:t.disabled});case"SET-MESSAGE-ITEM":return Object(d.a)(Object(d.a)({},e),{},{messageItem:t.messageItem});case"INC-COUNTER":return Object(d.a)(Object(d.a)({},e),{},{counter:t.counter+1});case"DISABLED-BUTTON-INC":return Object(d.a)(Object(d.a)({},e),{},{disabledInc:t.disabled});case"DISABLED-BUTTON-RESET":return Object(d.a)(Object(d.a)({},e),{},{disabledReset:t.disabled});default:return e}}}),I=Object(N.b)(C);window.store=I,c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b.a,{store:I,children:Object(l.jsx)(g,{})})}),document.getElementById("root")),h()},3:function(e,t,n){e.exports={App:"App_App__4Ym4t",setCounter:"App_setCounter__xyjWg",settings:"App_settings__32OA8",setting:"App_setting__2JETz App_settings__32OA8",display:"App_display__SiOv2 App_settings__32OA8",counter:"App_counter__2a0fC",input:"App_input__3egPB",button:"App_button__xTbwu",buttonSet:"App_buttonSet__1Xd-_ App_button__xTbwu",buttons:"App_buttons__2ok-K App_button__xTbwu",errorInput:"App_errorInput__hvz4q App_input__3egPB",errorMessage:"App_errorMessage__5t2Rl",error:"App_error__2xyex"}}},[[21,1,2]]]);
//# sourceMappingURL=main.f99ad994.chunk.js.map