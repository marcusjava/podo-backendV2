(this["webpackJsonpfront-antd"]=this["webpackJsonpfront-antd"]||[]).push([[13,6],{1064:function(e,t,n){"use strict";var a=n(3),r=n(13),c=n(2),o=n(0),l=n(40),u=n(6),i=n.n(u),s=n(43),f=n(16),d=n(7);function m(e){var t,n=e.prefixCls,a=e.value,r=e.current,c=e.offset,l=void 0===c?0:c;return l&&(t={position:"absolute",top:"".concat(l,"00%"),left:0}),o.createElement("p",{style:t,className:i()("".concat(n,"-only-unit"),{current:r})},a)}function p(e,t,n){for(var a=e,r=0;(a+10)%10!==t;)a+=n,r+=n;return r}function v(e){var t,n,a=e.prefixCls,r=e.count,l=e.value,u=Number(l),i=Math.abs(r),s=o.useState(u),f=Object(d.a)(s,2),v=f[0],b=f[1],g=o.useState(i),h=Object(d.a)(g,2),y=h[0],O=h[1],E=function(){b(u),O(i)};if(o.useEffect((function(){var e=setTimeout((function(){E()}),1e3);return function(){clearTimeout(e)}}),[u]),v===u||Number.isNaN(u)||Number.isNaN(v))t=[o.createElement(m,Object(c.a)({},e,{key:u,current:!0}))],n={transition:"none"};else{t=[];for(var j=u+10,x=[],C=u;C<=j;C+=1)x.push(C);var N=x.findIndex((function(e){return e%10===v}));t=x.map((function(t,n){var a=t%10;return o.createElement(m,Object(c.a)({},e,{key:t,value:a,offset:n-N,current:n===N}))})),n={transform:"translateY(".concat(-p(v,u,y<i?1:-1),"00%)")}}return o.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:E},t)}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e){var t=e.prefixCls,n=e.count,a=e.className,r=e.motionClassName,l=e.style,u=e.title,d=e.show,m=e.component,p=void 0===m?"sup":m,g=e.children,h=b(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),y=(0,o.useContext(s.b).getPrefixCls)("scroll-number",t),O=Object(c.a)(Object(c.a)({},h),{"data-show":d,style:l,className:i()(y,a,r),title:u}),E=n;if(n&&Number(n)%1===0){var j=String(n).split("");E=j.map((function(e,t){return o.createElement(v,{prefixCls:y,count:Number(n),value:e,key:j.length-t})}))}return l&&l.borderColor&&(O.style=Object(c.a)(Object(c.a)({},l),{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),g?Object(f.a)(g,(function(e){return{className:i()("".concat(y,"-custom-component"),null===e||void 0===e?void 0:e.className,r)}})):o.createElement(p,O,E)},h=n(178);function y(e){return-1!==h.a.indexOf(e)}var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e){var t,n,u=e.prefixCls,d=e.scrollNumberPrefixCls,m=e.children,p=e.status,v=e.text,b=e.color,h=e.count,E=void 0===h?null:h,j=e.overflowCount,x=void 0===j?99:j,C=e.dot,N=void 0!==C&&C,w=e.size,M=void 0===w?"default":w,Y=e.title,R=e.offset,k=e.style,z=e.className,S=e.showZero,D=void 0!==S&&S,P=O(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=o.useContext(s.b),_=L.getPrefixCls,I=L.direction,B=_("badge",u),H=E>x?"".concat(x,"+"):E,T=null!==p&&void 0!==p||null!==b&&void 0!==b,A="0"===H||0===H,F=N&&!A||T,V=F?"":H,W=Object(o.useMemo)((function(){return(null===V||void 0===V||""===V||A&&!D)&&!F}),[V,A,D,F]),$=Object(o.useRef)(E);W||($.current=E);var J=$.current,K=Object(o.useRef)(V);W||(K.current=V);var U=K.current,Z=Object(o.useRef)(F);W||(Z.current=F);var q=Object(o.useMemo)((function(){if(!R)return Object(c.a)({},k);var e={marginTop:R[1]};return"rtl"===I?e.left=parseInt(R[0],10):e.right=-parseInt(R[0],10),Object(c.a)(Object(c.a)({},e),k)}),[I,R,k]),G=null!==Y&&void 0!==Y?Y:"string"===typeof J||"number"===typeof J?J:void 0,Q=W||!v?null:o.createElement("span",{className:"".concat(B,"-status-text")},v),X=J&&"object"===Object(r.a)(J)?Object(f.a)(J,(function(e){return{style:Object(c.a)(Object(c.a)({},q),e.style)}})):void 0,ee=i()((t={},Object(a.a)(t,"".concat(B,"-status-dot"),T),Object(a.a)(t,"".concat(B,"-status-").concat(p),!!p),Object(a.a)(t,"".concat(B,"-status-").concat(b),y(b)),t)),te={};b&&!y(b)&&(te.background=b);var ne=i()(B,(n={},Object(a.a)(n,"".concat(B,"-status"),T),Object(a.a)(n,"".concat(B,"-not-a-wrapper"),!m),Object(a.a)(n,"".concat(B,"-rtl"),"rtl"===I),n),z);if(!m&&T){var ae=q.color;return o.createElement("span",Object(c.a)({},P,{className:ne,style:q}),o.createElement("span",{className:ee,style:te}),o.createElement("span",{style:{color:ae},className:"".concat(B,"-status-text")},v))}return o.createElement("span",Object(c.a)({},P,{className:ne}),m,o.createElement(l.b,{visible:!W,motionName:"".concat(B,"-zoom"),motionAppear:!1},(function(e){var t,n=e.className,r=_("scroll-number",d),l=Z.current,u=i()((t={},Object(a.a)(t,"".concat(B,"-dot"),l),Object(a.a)(t,"".concat(B,"-count"),!l),Object(a.a)(t,"".concat(B,"-count-sm"),"small"===M),Object(a.a)(t,"".concat(B,"-multiple-words"),!l&&U&&(null===U||void 0===U?void 0:U.toString().length)>1),Object(a.a)(t,"".concat(B,"-status-").concat(p),!!p),Object(a.a)(t,"".concat(B,"-status-").concat(b),y(b)),t)),s=Object(c.a)({},q);return b&&!y(b)&&((s=s||{}).background=b),o.createElement(g,{prefixCls:r,show:!W,motionClassName:n,className:u,count:U,title:G,style:s,key:"scrollNumber"},X)})),Q)};E.Ribbon=function(e){var t,n=e.className,r=e.prefixCls,l=e.style,u=e.color,f=e.children,d=e.text,m=e.placement,p=void 0===m?"end":m,v=o.useContext(s.b),b=v.getPrefixCls,g=v.direction,h=b("ribbon",r),O=y(u),E=i()(h,"".concat(h,"-placement-").concat(p),(t={},Object(a.a)(t,"".concat(h,"-rtl"),"rtl"===g),Object(a.a)(t,"".concat(h,"-color-").concat(u),O),t),n),j={},x={};return u&&!O&&(j.background=u,x.color=u),o.createElement("div",{className:"".concat(h,"-wrapper")},f,o.createElement("div",{className:E,style:Object(c.a)(Object(c.a)({},j),l)},o.createElement("span",{className:"".concat(h,"-text")},d),o.createElement("div",{className:"".concat(h,"-corner"),style:x})))};t.a=E},1081:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(359),o=n(360),l=n(82),u=(n(539),n(30)),i=n(53),s=n(1064),f=n(619),d=n(3),m=n(2),p=n(7),v=n(166),b=n(6),g=n.n(b),h=n(791),y=n.n(h),O=n(601),E=n(80),j=n(210),x=n(43),C=n(603),N=n(476),w=n(475);function M(e){var t=e.fullscreen,n=e.validRange,r=e.generateConfig,c=e.locale,o=e.prefixCls,l=e.value,u=e.onChange,i=e.divRef,s=r.getYear(l),f=s-10,d=f+20;n&&(f=r.getYear(n[0]),d=r.getYear(n[1])+1);for(var m=c&&"\u5e74"===c.year?"\u5e74":"",v=[],b=f;b<d;b++)v.push({label:"".concat(b).concat(m),value:b});return a.createElement(C.a,{size:t?void 0:"small",options:v,value:s,className:"".concat(o,"-year-select"),onChange:function(e){var t=r.setYear(l,e);if(n){var a=Object(p.a)(n,2),c=a[0],o=a[1],i=r.getYear(t),s=r.getMonth(t);i===r.getYear(o)&&s>r.getMonth(o)&&(t=r.setMonth(t,r.getMonth(o))),i===r.getYear(c)&&s<r.getMonth(c)&&(t=r.setMonth(t,r.getMonth(c)))}u(t)},getPopupContainer:function(){return i.current}})}function Y(e){var t=e.prefixCls,n=e.fullscreen,r=e.validRange,c=e.value,o=e.generateConfig,l=e.locale,u=e.onChange,i=e.divRef,s=o.getMonth(c),f=0,d=11;if(r){var m=Object(p.a)(r,2),v=m[0],b=m[1],g=o.getYear(c);o.getYear(b)===g&&(d=o.getMonth(b)),o.getYear(v)===g&&(f=o.getMonth(v))}for(var h=l.shortMonths||o.locale.getShortMonths(l.locale),y=[],O=f;O<=d;O+=1)y.push({label:h[O],value:O});return a.createElement(C.a,{size:n?void 0:"small",className:"".concat(t,"-month-select"),value:s,options:y,onChange:function(e){u(o.setMonth(c,e))},getPopupContainer:function(){return i.current}})}function R(e){var t=e.prefixCls,n=e.locale,r=e.mode,c=e.fullscreen,o=e.onModeChange;return a.createElement(N.a,{onChange:function(e){var t=e.target.value;o(t)},value:r,size:c?void 0:"small",className:"".concat(t,"-mode-switch")},a.createElement(w.a,{value:"month"},n.month),a.createElement(w.a,{value:"year"},n.year))}var k=function(e){var t=e.prefixCls,n=e.fullscreen,r=e.mode,c=e.onChange,o=e.onModeChange,l=a.useRef(null),u=Object(m.a)(Object(m.a)({},e),{onChange:c,fullscreen:n,divRef:l});return a.createElement("div",{className:"".concat(t,"-header"),ref:l},a.createElement(M,u),"month"===r&&a.createElement(Y,u),a.createElement(R,Object(m.a)({},u,{onModeChange:o})))};var z=function(e){function t(t,n){return t&&n&&e.getYear(t)===e.getYear(n)}function n(n,a){return t(n,a)&&e.getMonth(n)===e.getMonth(a)}function r(t,a){return n(t,a)&&e.getDate(t)===e.getDate(a)}return function(c){var o=c.prefixCls,l=c.className,u=c.style,i=c.dateFullCellRender,s=c.dateCellRender,f=c.monthFullCellRender,b=c.monthCellRender,h=c.headerRender,C=c.value,N=c.defaultValue,w=c.disabledDate,M=c.mode,Y=c.validRange,R=c.fullscreen,z=void 0===R||R,S=c.onChange,D=c.onPanelChange,P=c.onSelect,L=a.useContext(x.b),_=L.getPrefixCls,I=L.direction,B=_("picker",o),H="".concat(B,"-calendar"),T=e.getNow(),A=Object(v.a)((function(){return C||e.getNow()}),{defaultValue:N,value:C}),F=Object(p.a)(A,2),V=F[0],W=F[1],$=Object(v.a)("month",{value:M}),J=Object(p.a)($,2),K=J[0],U=J[1],Z=a.useMemo((function(){return"year"===K?"month":"date"}),[K]),q=a.useCallback((function(t){return!!Y&&(e.isAfter(Y[0],t)||e.isAfter(t,Y[1]))||!!(null===w||void 0===w?void 0:w(t))}),[w,Y]),G=function(e,t){null===D||void 0===D||D(e,t)},Q=function(e){U(e),G(V,e)},X=function(e){!function(e){W(e),r(e,V)||(("date"===Z&&!n(e,V)||"month"===Z&&!t(e,V))&&G(e,K),null===S||void 0===S||S(e))}(e),null===P||void 0===P||P(e)},ee=a.useCallback((function(t){return i?i(t):a.createElement("div",{className:g()("".concat(B,"-cell-inner"),"".concat(H,"-date"),Object(d.a)({},"".concat(H,"-date-today"),r(T,t)))},a.createElement("div",{className:"".concat(H,"-date-value")},y()(String(e.getDate(t)),2,"0")),a.createElement("div",{className:"".concat(H,"-date-content")},s&&s(t)))}),[i,s]),te=a.useCallback((function(t,r){if(f)return f(t);var c=r.shortMonths||e.locale.getShortMonths(r.locale);return a.createElement("div",{className:g()("".concat(B,"-cell-inner"),"".concat(H,"-date"),Object(d.a)({},"".concat(H,"-date-today"),n(T,t)))},a.createElement("div",{className:"".concat(H,"-date-value")},c[e.getMonth(t)]),a.createElement("div",{className:"".concat(H,"-date-content")},b&&b(t)))}),[f,b]);return a.createElement(E.a,{componentName:"Calendar",defaultLocale:function(){var e=c.locale,t=Object(m.a)(Object(m.a)({},j.a),e);return t.lang=Object(m.a)(Object(m.a)({},t.lang),(e||{}).lang),t}},(function(t){var n;return a.createElement("div",{className:g()(H,(n={},Object(d.a)(n,"".concat(H,"-full"),z),Object(d.a)(n,"".concat(H,"-mini"),!z),Object(d.a)(n,"".concat(H,"-rtl"),"rtl"===I),n),l),style:u},h?h({value:V,type:K,onChange:X,onTypeChange:Q}):a.createElement(k,{prefixCls:H,value:V,generateConfig:e,mode:K,fullscreen:z,locale:t.lang,validRange:Y,onChange:X,onModeChange:Q}),a.createElement(O.a,{value:V,prefixCls:B,locale:t.lang,generateConfig:e,dateRender:ee,monthCellRender:function(e){return te(e,t.lang)},onSelect:X,mode:Z,picker:Z,disabledDate:q,hideHeader:!0}))}))}}(f.a),S=n(44),D=n(419),P=n(102),L=n.n(P);n(790);function _(){var e=Object(S.useSelector)((function(e){return e.consult.consults})).items,t=Object(S.useDispatch)();Object(a.useEffect)((function(){t(Object(D.a)())}),[t]);return r.a.createElement(o.a,{span:24},r.a.createElement(z,{dateCellRender:function(t){var n=function(t){var n=L()(t).format("YYYY-MM-DD");return e&&e.filter((function(e){return L()(e.date).format("YYYY-MM-DD")===n}))}(t);return r.a.createElement("ul",{className:"events"},n.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(u.b,{to:"/home/consulta/".concat(e._id,"/anamnese"),style:{fontSize:12,fontWeight:"bold"}},r.a.createElement(s.a,{dot:!0}," ",L()(e.date).format("HH:mm")," -",e.client.name.slice(0,11)," - ",e.status)))})))},onPanelChange:function(e){var n={start:L()(e).startOf("month").format("YYYY-MM-DD"),end:L()(e).endOf("month").format("YYYY-MM-DD")};t(Object(D.a)(n))}}))}t.default=function(){return r.a.createElement("div",{className:"consult"},r.a.createElement(c.a,{justify:"center",align:"middle"}),r.a.createElement(c.a,null,r.a.createElement(o.a,{span:24},r.a.createElement(u.b,{to:"/home/consultas/adicionar"},r.a.createElement(l.a,{type:"primary",icon:r.a.createElement(i.f,{size:18})},"Novo")))),r.a.createElement(c.a,{justify:"center",style:{marginTop:"30px"}},r.a.createElement(o.a,{span:24},r.a.createElement(_,null))))}},419:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(8),r=n(34),c=n.n(r),o=function(e){return function(t){return t({type:a.p}),c.a.post("/consults",e).then((function(e){t({type:a.q,payload:e.data})})).catch((function(e){t({type:a.o,payload:e.response.data})}))}},l=function(e){return function(t){return t({type:a.p}),c.a.put("/consults/".concat(e._id),e).then((function(e){t({type:a.R,payload:e.data})})).catch((function(e){t({type:a.o,payload:e.response.data})}))}},u=function(e){return function(t){return t({type:a.m}),c.a.get("/consults",{params:e}).then((function(e){t({type:a.n,payload:e.data})})).catch((function(e){t({type:a.l,payload:e.response.data})}))}}},421:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(1);function r(e){return Object(a.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}}]})(e)}function c(e){return Object(a.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}}]})(e)}function o(e){return Object(a.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}}]})(e)}function l(e){return Object(a.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(e)}},464:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},480:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},500:function(e,t,n){var a=n(150),r=n(464),c=n(148),o=n(431),l=a?a.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(c(t))return r(t,e)+"";if(o(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},501:function(e,t,n){var a=n(550),r=n(480),c=n(551);e.exports=function(e){return r(e)?c(e):a(e)}},502:function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},503:function(e,t,n){var a=n(452);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},504:function(e,t,n){var a=n(500);e.exports=function(e){return null==e?"":a(e)}},539:function(e,t,n){"use strict";var a=n(4),r=n(81),c=n.n(r),o=n(112),l=n(64),u=n(0),i=n.n(u),s=n(1080),f=n(357),d=n(82),m=n(363),p=n(236),v=n(775),b=n(85),g=n(1060),h=n(44),y=n(419),O=n(30),E=n(183),j=n(421),x=n(53),C=n(102),N=n.n(C),w=n(34),M=n.n(w),Y=s.a.RangePicker,R={Marcada:"processing",Realizada:"green",Cancelada:"red",Remarcada:"magenta"};t.a=function(){var e=Object(u.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(u.useState)(""),C=Object(l.a)(s,2),w=(C[0],C[1]),k=Object(u.useState)([]),z=Object(l.a)(k,2),S=z[0],D=z[1],P=Object(u.useState)(""),L=Object(l.a)(P,2),_=(L[0],L[1]),I=Object(u.useState)(!0),B=Object(l.a)(I,2),H=(B[0],B[1],Object(h.useDispatch)()),T=Object(h.useSelector)((function(e){return e.consult.consults})),A=T.items,F=T.loading;Object(u.useEffect)((function(){A&&r(A.map((function(e){return{key:e._id,date:e.date,client:e.client,procedures:e.procedures,price:e.price,type_consult:e.type_consult,status:e.status}})))}),[A]);var V=null;Object(u.useEffect)((function(){H(Object(y.a)())}),[]);var W=function(e,t,n){t(),w(e[0]),_(n)},$=function(e,t){var n=new Blob([e],{type:"application/pdf"}),a=document.createElement("a");a.href=window.URL.createObjectURL(n),a.download="".concat(t,".pdf"),a.click()},J=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("/pdf?url=http://localhost:3001/api/consults/reports/consults/".concat(t),{responseType:"arraybuffer",headers:{Accept:"application/pdf"}});case 2:n=e.sent,$(n.data,"consults");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){return{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,r=t.confirm,c=t.clearFilters;return i.a.createElement("div",{style:{padding:8}},i.a.createElement(f.a,{ref:function(e){V=e},placeholder:"Buscar",value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return W(a,r,e)},style:{width:188,marginBottom:8,display:"block"}}),i.a.createElement(d.a,{type:"primary",onClick:function(){return W(a,r,e)},icon:i.a.createElement(E.a,null),size:"small",style:{width:90,marginRight:8}},"Buscar"),i.a.createElement(d.a,{onClick:function(){return function(e){e(),w("")}(c)},size:"small",style:{width:90}},"Limpar"))},filterIcon:function(e){return i.a.createElement(E.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return"client"===e?n[e].name.toString().toLowerCase().includes(t.toLowerCase()):"procedures"===e?n[e].find((function(e){return e.name.toString().toLowerCase().includes(t.toLowerCase())})):n[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return V.select()}))}}},U=[{key:"date",title:"Data/Hora",dataIndex:"date",render:function(e){return i.a.createElement("strong",null,i.a.createElement("h3",null,N()(e).format("DD/MM/YYYY HH:mm")))},sorter:function(e,t){return N()(e.date).unix()-N()(t.date).unix()},filterDropdown:function(){return i.a.createElement("div",{style:{padding:8,display:"flex",flexDirection:"column"}},i.a.createElement(Y,{ref:function(e){V=e},value:S,format:"DD/MM/YYYY",onChange:function(e){return D(e)},style:{marginBottom:8},size:"small"}),i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement(d.a,{type:"primary",disabled:S.length<2,onClick:function(){return function(){var e=S[0].format("YYYY-MM-DD"),t=S[1].format("YYYY-MM-DD");H(Object(y.a)({start:e,end:t}))}()},icon:i.a.createElement(E.a,null),size:"small",style:{width:90,marginRight:8}},"Buscar"),i.a.createElement(d.a,{onClick:function(){return D([]),void H(Object(y.a)())},size:"small",style:{width:90}},"Limpar")))},filterIcon:function(e){return i.a.createElement(E.a,{style:{color:e?"#1890ff":void 0}})}},Object(a.a)({key:"client",title:"Cliente",dataIndex:"client",render:function(e){var t=i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement(m.a,{src:e.avatar_url,style:{width:"125px",height:"125px",alignSelf:"center"}}),i.a.createElement("p",null,"Nome - ",e.name),i.a.createElement("p",{style:{fontWeight:"bold"}},"Contato - ",e.contact));return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"5px"}},i.a.createElement(p.a,{title:"Dados cliente",content:t},i.a.createElement(m.a,{src:e.avatar_url,style:{width:"50px",height:"50px",marginRight:5}}),e.name))}},K("client")),Object(a.a)({key:"procedures",title:"Procedimentos",dataIndex:"procedures",render:function(e){return e.map((function(e){var t=i.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap"}},i.a.createElement("p",null,"Nome - ",e.name," - R$ ",e.price));return i.a.createElement("div",{key:e._id,style:{display:"flex",flexDirection:"column",marginBottom:"5px",flexWrap:"wrap"}},i.a.createElement(p.a,{title:"Dados tecnicos",content:t},e.name," - R$ ",e.price))}))}},K("procedures")),{key:"price",title:"Total",dataIndex:"price",render:function(e){return i.a.createElement("strong",null,"R$ ",e)}},{key:"type_consult",title:"Tipo",dataIndex:"type_consult",render:function(e){return i.a.createElement("strong",null,e)}},{key:"status",title:"Status",dataIndex:"status",filters:[{text:"Marcada",value:"Marcada"},{text:"Realizada",value:"Realizada"},{text:"Remarcada",value:"Remarcada"},{text:"Cancelada",value:"Cancelada"}],onFilter:function(e,t){return 0===t.status.indexOf(e)},render:function(e){return i.a.createElement(v.a,{color:R[e]},e)}},{title:"A\xe7oes",render:function(e){return i.a.createElement("div",null,i.a.createElement(b.a,{title:"Cancelar Consulta"},i.a.createElement(d.a,{disabled:"Cancelada"===e.status||"Realizada"===e.status,style:{border:"none",fontSize:18,backgroundColor:"transparent",margin:5,padding:0},onClick:function(){return function(e){var t={_id:e.key,date:e.date,client:e.client._id,procedures:e.procedures.map((function(e){return e._id})),status:"Cancelada",type_consult:e.type_consult};!0===window.confirm("Deseja realmente cancelar a consulta?")&&H(Object(y.c)(t))}(e)}},i.a.createElement(x.d,{size:24}))),i.a.createElement(b.a,{title:"Editar Consulta"},i.a.createElement(O.b,{to:"/home/consulta/".concat(e.key,"/editar")},i.a.createElement(d.a,{disabled:"Cancelada"===e.status||"Realizada"===e.status,style:{border:"none",fontSize:25,backgroundColor:"transparent",margin:5,padding:0}},i.a.createElement(j.c,{size:24})))),i.a.createElement(b.a,{title:"Realizar Consulta"},i.a.createElement(O.b,{to:"/home/consulta/".concat(e.key,"/anamnese")},i.a.createElement(d.a,{style:{border:"none",fontSize:25,backgroundColor:"transparent",margin:5,padding:0}},i.a.createElement(x.a,{size:24})))),i.a.createElement(b.a,{title:"Imprimir Ficha"},i.a.createElement(d.a,{disabled:"Realizada"!==e.status,onClick:function(){return J(e.key)},style:{border:"none",fontSize:25,backgroundColor:"transparent",margin:5,padding:0}},i.a.createElement(x.h,{size:24}))))}}];return i.a.createElement(g.a,{dataSource:n,columns:U,loading:F,footer:function(e){return"Total: ".concat(e.length)}})}},550:function(e,t,n){var a=n(502)("length");e.exports=a},551:function(e,t){var n="[\\ud800-\\udfff]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+a+"|"+r+")"+"?",i="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[c,o,l].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),s="(?:"+[c+a+"?",a,o,l,n].join("|")+")",f=RegExp(r+"(?="+r+")|"+s+i,"g");e.exports=function(e){for(var t=f.lastIndex=0;f.test(e);)++t;return t}},552:function(e,t,n){var a=n(503);e.exports=function(e){var t=a(e),n=t%1;return t===t?n?t-n:t:0}},790:function(e,t,n){},791:function(e,t,n){var a=n(792),r=n(501),c=n(552),o=n(504);e.exports=function(e,t,n){e=o(e);var l=(t=c(t))?r(e):0;return t&&l<t?a(t-l,n)+e:e}},792:function(e,t,n){var a=n(793),r=n(500),c=n(794),o=n(480),l=n(501),u=n(796),i=Math.ceil;e.exports=function(e,t){var n=(t=void 0===t?" ":r(t)).length;if(n<2)return n?a(t,e):t;var s=a(t,i(e/l(t)));return o(t)?c(u(s),0,e).join(""):s.slice(0,e)}},793:function(e,t){var n=Math.floor;e.exports=function(e,t){var a="";if(!e||t<1||t>9007199254740991)return a;do{t%2&&(a+=e),(t=n(t/2))&&(e+=e)}while(t);return a}},794:function(e,t,n){var a=n(795);e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:a(e,t,n)}},795:function(e,t){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var c=Array(r);++a<r;)c[a]=e[a+t];return c}},796:function(e,t,n){var a=n(797),r=n(480),c=n(798);e.exports=function(e){return r(e)?c(e):a(e)}},797:function(e,t){e.exports=function(e){return e.split("")}},798:function(e,t){var n="[\\ud800-\\udfff]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+a+"|"+r+")"+"?",i="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[c,o,l].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),s="(?:"+[c+a+"?",a,o,l,n].join("|")+")",f=RegExp(r+"(?="+r+")|"+s+i,"g");e.exports=function(e){return e.match(f)||[]}}}]);
//# sourceMappingURL=13.8bfcab34.chunk.js.map