"use strict";(self.webpackChunkproject_5_frontend=self.webpackChunkproject_5_frontend||[]).push([[10],{5991:function(){},4925:function(r,e,t){function n(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}t.d(e,{Z:function(){return n}})},2857:function(r,e,t){t.d(e,{iG:function(){return Cr}});var n=t(4925),o=t(7762),a=t(1413),i=t(9439),c=t(184),s=t(2791),u=["itemShapes","itemStrokeWidth","boxBorderWidth"],l=function(r){},f="undefined"==typeof window?s.useEffect:s.useLayoutEffect,d=function(r){return"number"==typeof r&&r>0},h=function(r){return d(r)?r:0},v=function(r){return Math.round(100*r)/100},m=function(r){return Math.round(2*r)/2},p=function(r){return 0===r?0:-1*v(r)},g={},y="rr--focus-reset",b="rr--on",x="rr--off",Z="rr--fx-zoom",S="rr--fx-position",w="rr--fx-opacity",C="rr--fx-colors",k="rr--rx-sm",j="rr--rx-md",B="rr--rx-lg",A="rr--rx-full",R="rr--gap-sm",O="rr--gap-md",N="rr--gap-lg",M="rr--space-sm",W="rr--space-md",I="rr--space-lg",L="--rr--fill-on-color",F="--rr--box-on-color",D="--rr--border-on-color",E="--rr--stroke-on-color",V="--rr--fill-off-color",H="--rr--box-off-color",P="--rr--border-off-color",_="--rr--stroke-off-color",z="horizontal",T="vertical",q="svg",G="none",J="small",K="medium",U="large",X="full",Y="none",Q="zoom",$="position",rr="opacity",er="colors",tr="activeFillColor",nr="activeBoxColor",or="activeBoxBorderColor",ar="activeStrokeColor",ir="inactiveFillColor",cr="inactiveBoxColor",sr="inactiveBoxBorderColor",ur="inactiveStrokeColor";function lr(r){var e=r.itemShapes,t=r.testId,n=r.itemStrokeWidth,o=void 0===n?0:n,u=r.orientation,l=void 0===u?z:u,d=r.hasHF,h=void 0!==d&&d,m=o>0?-o/2:0,g=o>0?"".concat(m," ").concat(m):"0 0",y=(0,s.useRef)(null),b=(0,s.useId)(),x=(0,s.useState)(null),Z=(0,i.Z)(x,2),S=Z[0],w=Z[1];return f((function(){if(y.current){var r=y.current.getBBox(),e=r.width,t=r.height,n=r.x,a=r.y;if(function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.every((function(r){return"number"==typeof r}))}(e,t,n,a)){var i="".concat(g," ").concat(v(e+o)," ").concat(v(t+o)),c="".concat(p(n)," ").concat(p(a));w({viewBox:i,translateData:c})}}}),[e,o,h]),(0,c.jsxs)("svg",(0,a.Z)((0,a.Z)((0,a.Z)({"aria-hidden":"true",className:"rr--svg",xmlns:"http://www.w3.org/2000/svg",viewBox:S?S.viewBox:"0 0 0 0",preserveAspectRatio:"xMidYMid meet"},o>0?{strokeWidth:o}:{}),t),{},{children:[h&&(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",(0,a.Z)((0,a.Z)({id:b},l===T?{gradientTransform:"rotate(90)"}:{}),{},{children:[(0,c.jsx)("stop",{className:"rr--svg-stop-1",offset:"50%"}),(0,c.jsx)("stop",{className:"rr--svg-stop-2",offset:"50%"})]}))}),(0,c.jsx)("g",(0,a.Z)((0,a.Z)((0,a.Z)({ref:y,shapeRendering:"geometricPrecision"},function(){if(S){var r="translate(".concat(null==S?void 0:S.translateData,")");return"translate(0 0)"===r?{}:{transform:r}}return{transform:void 0}}()),h?{fill:"url('#".concat(b,"')")}:{}),{},{children:e}))]}))}function fr(r,e,t){switch(e){case tr:return r[L]=t,!0;case nr:return r[F]=t,!0;case or:return r[D]=t,!0;case ar:return r[E]=t,!0}return!1}function dr(r,e,t){if(!fr(r,e,t))switch(e){case ir:r[V]=t;break;case cr:r[H]=t;break;case sr:r[P]=t;break;case ur:r[_]=t}}function hr(r,e,t){for(var n,o={},a=0,c=Object.entries(r);a<c.length;a++){var s=(0,i.Z)(c[a],2);fr(o,s[0],s[1][e])}return t?(n=Array(e).fill({})).push(o):n=Array(e+1).fill(o),n}var vr=function(r){return"".concat(r," ").concat(C)};function mr(r,e,t){return Array.from({length:e},(function(e,n){return r?n===t?b:x:n<=t?b:x}))}function pr(r,e,t){var n=Math.floor(m(r));return Array.from({length:e},(function(r,e){return"box"===t?e>n?"rr--hf-box-off":e===n?"rr--hf-box-int":"rr--hf-box-on":e>n?"rr--hf-svg-off":"rr--hf-svg-on"}))}function gr(r,e){var t={};d(e)&&(t["--rr--border-width"]="".concat(e,"px"));var n=Object.entries(r);if(n.length>0){var a,c=(0,o.Z)(n);try{for(c.s();!(a=c.n()).done;){var s=(0,i.Z)(a.value,2);dr(t,s[0],s[1])}}catch(u){c.e(u)}finally{c.f()}}return t}var yr=[tr,nr,ar,or];function br(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Array.from({length:r},(function(n,o){return t&&e<0?o===r-1?0:-1:e<=0?0===o?0:-1:e>0?o===e?0:-1:void 0}))}function xr(r,e){return r.shouldRender=!1,r.reason=function(r){return"[".concat("@smastrom/react-rating","] - Nothing's returned from rendering. Reason: ").concat(r,".")}(e),r}var Zr="itemShapes is not a valid JSX element",Sr=(0,c.jsx)("polygon",{points:"25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02"}),wr=((0,c.jsx)("path",{d:"M12.5,18.16l-7.73,5.61,2.95-9.08L0,9.07H9.55S12.5,0,12.5,0l2.95,9.07h9.55l-7.73,5.62,2.95,9.08-7.73-5.61Z"}),(0,c.jsx)("path",{d:"M112.46,57.88c-.23-.72-.88-1.22-1.63-1.27l-6.63-.46-2.45-6.19c-.27-.7-.95-1.16-1.7-1.16h0c-.75,0-1.42,.46-1.7,1.16l-2.5,6.23-6.58,.42c-.75,.05-1.4,.55-1.63,1.27-.24,.73,0,1.53,.58,2.02l5.07,4.28-1.51,5.92c-.21,.82,.1,1.69,.78,2.19,.66,.48,1.55,.5,2.24,.07l5.23-3.31h.02l5.63,3.56c.29,.19,.63,.29,.97,.29,1.02,0,1.83-.84,1.83-1.86,0-.16-.02-.31-.06-.47l-1.6-6.48,5.04-4.2c.59-.49,.82-1.29,.58-2.02Z"}),(0,c.jsx)("path",{d:"M22.72,8.24h-6.68L13.97,1.88c-.81-2.51-2.13-2.51-2.95,0l-2.07,6.36H2.28c-2.63,0-3.04,1.25-.91,2.8l5.41,3.93-2.06,6.36c-.81,2.51,.25,3.28,2.39,1.73l5.41-3.93,5.41,3.93c2.13,1.55,3.2,.77,2.39-1.73l-2.07-6.36,5.41-3.93c2.13-1.55,1.72-2.8-.91-2.8Z"}),(0,c.jsx)("path",{d:"M11.58,.77c.51-1.02,1.33-1.02,1.84,0l2.34,4.73c.5,1.02,1.84,2,2.98,2.16l5.22,.76c1.13,.17,1.39,.95,.57,1.75l-3.78,3.68c-.82,.8-1.33,2.37-1.14,3.5l.89,5.2c.19,1.13-.48,1.61-1.49,1.08l-4.67-2.45c-1.01-.53-2.67-.53-3.68,0l-4.67,2.46c-1.01,.53-1.68,.05-1.49-1.08l.89-5.2c.19-1.13-.32-2.7-1.14-3.5L.48,10.17c-.82-.8-.56-1.58,.57-1.75l5.22-.76c1.13-.16,2.47-1.14,2.98-2.16L11.58,.77h0Z"}),(0,c.jsx)("path",{d:"M19.29,1.61c-2.15-2.15-5.63-2.15-7.78,0,0,0,0,0,0,0l-1.06,1.06-1.06-1.06C7.24-.54,3.76-.54,1.61,1.61-.54,3.76-.54,7.24,1.61,9.39l1.06,1.06,7.78,7.78,7.78-7.78,1.06-1.06c2.15-2.15,2.15-5.63,0-7.78,0,0,0,0,0,0Z"}),{itemShapes:Sr,itemStrokeWidth:2,activeFillColor:"#ffb23f",inactiveFillColor:"#fff7ed",activeStrokeColor:"#e17b21",inactiveStrokeColor:"#eda76a"}),Cr=(0,s.forwardRef)((function(r,e){var t,d=r.value,v=r.items,p=void 0===v?5:v,b=r.readOnly,x=void 0!==b&&b,L=r.onChange,F=void 0===L?l:L,D=r.onHoverChange,E=void 0===D?l:D,V=r.onFocus,H=void 0===V?l:V,P=r.onBlur,_=void 0===P?l:P,tr=r.isDisabled,nr=void 0!==tr&&tr,or=r.highlightOnlySelected,ar=void 0!==or&&or,ir=r.orientation,cr=void 0===ir?z:ir,sr=r.spaceBetween,ur=void 0===sr?G:sr,fr=r.spaceInside,dr=void 0===fr?J:fr,Sr=r.radius,Cr=void 0===Sr?G:Sr,kr=r.transition,jr=void 0===kr?er:kr,Br=r.itemStyles,Ar=void 0===Br?wr:Br,Rr=r.isRequired,Or=void 0!==Rr&&Rr,Nr=r.halfFillMode,Mr=void 0===Nr?q:Nr,Wr=r.visibleLabelId,Ir=r.visibleItemLabelIds,Lr=r.invisibleItemLabels,Fr=r.invisibleLabel,Dr=void 0===Fr?x?d>0?"Rated ".concat(d," on ").concat(p):"Not rated":"Rating Selection":Fr,Er=r.resetLabel,Vr=void 0===Er?"Reset rating":Er,Hr=r.id,Pr=r.className,_r=r.style,zr=Array.from({length:p},(function(r,e){return e+1})),Tr=x&&!Number.isInteger(d),qr=Tr&&!ar,Gr=Tr&&ar?Math.round(d):d,Jr=!x&&!nr,Kr=Gr>=.25,Ur="string"==typeof Pr?Pr:"",Xr="box"===Mr?"box":q,Yr=qr&&(t=Gr,!Number.isInteger(m(t))),Qr=!Or&&!x,$r=Or?p:p+1,re=qr?function(r,e){var t=m(e);return Number.isInteger(t)?r.indexOf(t):Math.floor(t)}(zr,Gr):zr.indexOf(Gr),ee=(0,s.useMemo)((function(){var r=Ar.itemShapes,e=Ar.itemStrokeWidth,t=Ar.boxBorderWidth,c=function(r){var e=(0,a.Z)({},r),t={},n=Object.entries(e);if(n.length>0){var c,s=(0,o.Z)(n);try{for(s.s();!(c=s.n()).done;){var u=(0,i.Z)(c.value,2),l=u[0],f=u[1];if(Array.isArray(f)||"string"==typeof f){if(Array.isArray(f)){var d,h=(0,o.Z)(yr);try{for(h.s();!(d=h.n()).done;){if(d.value===l){var v=f.filter((function(r){return"string"==typeof r}));v.length>0&&(t[l]=v,delete e[l])}else delete e[l]}}catch(m){h.e(m)}finally{h.f()}}}else delete e[l]}}catch(m){s.e(m)}finally{s.f()}}return{arrayColors:t,staticColors:e}}((0,n.Z)(Ar,u));return(0,a.Z)({itemShapes:r,absoluteStrokeWidth:h(e),absoluteBoxBorderWidth:h(t)},c)}),[Ar]),te=ee.staticColors,ne=ee.arrayColors,oe=ee.itemShapes,ae=ee.absoluteStrokeWidth,ie=ee.absoluteBoxBorderWidth,ce=Object.keys(ne).length>0,se=(0,s.useCallback)((function(r,e){return{dynamicClassNames:Yr?pr(Gr,p,Xr):mr(ar,p,r),dynamicCssVars:e&&ce?hr(ne,r,ar):[]}}),[ne,ce,ar,Xr,Yr,p,Gr]),ue=(0,s.useCallback)((function(){return Se(br($r,re,!Or))}),[re,$r,Or]),le=(0,s.useRef)(!0),fe=(0,s.useRef)(!0),de=(0,s.useRef)(null),he=(0,s.useRef)([]),ve=(0,s.useRef)(!1),me=(0,s.useState)((0,a.Z)({staticCssVars:gr(te,ie)},se(re,Kr))),pe=(0,i.Z)(me,2),ge=pe[0],ye=pe[1],be=(0,s.useState)((function(){return Jr?br($r,re,!Or):[]})),xe=(0,i.Z)(be,2),Ze=xe[0],Se=xe[1];f((function(){Jr&&he.current&&(ve.current=function(r){return!!r&&"rtl"===getComputedStyle(r).getPropertyValue("direction")}(he.current[0]))}),[Jr]),(0,s.useEffect)((function(){if(!le.current)return ye((0,a.Z)({staticCssVars:gr(te,ie)},se(re,Kr)));le.current=!1}),[te,se,ie,re,Kr]),(0,s.useEffect)((function(){if(!fe.current&&Jr)return ue();fe.current=!1}),[Jr,ue]);var we=function(r){var e=r.items,t=r.itemShapes,n={shouldRender:!0,reason:""};if("number"!=typeof e||e<1||e>10)return xr(n,"items is invalid");if(!t)return xr(n,"itemStyles needs at least the property itemShapes set");if(!Array.isArray(t)&&!(0,s.isValidElement)(t))return xr(n,Zr);if(Array.isArray(t)){if(t.length!==e)return xr(n,"itemShapes length mismatch");if(!t.every((function(r){return(0,s.isValidElement)(r)})))return xr(n,Zr)}return n}({items:p,itemShapes:oe}),Ce=we.shouldRender,ke=we.reason;if(!Ce)return console.error(ke),null;function je(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};he.current.some((function(e){return e===r.relatedTarget}))?t():e()}function Be(){E(0),ue()}function Ae(r){je(r,(function(){Be()})),ye((0,a.Z)((0,a.Z)({},ge),se(re,Kr)))}function Re(r){je(r,(function(){Be(),_()}))}function Oe(r,e){var t=Or||e!==zr.length?e+1:0;je(r,(function(){H(),E(t)}),(function(){E(t)}))}function Ne(r){Se(br($r,r,!Or)),he.current[r].focus()}var Me=function(r){var e=r.className,t=r.radius,n=r.readOnly,o=r.isDisabled,a=r.isDynamic,i=r.transition,c=r.orientation,s=r.absoluteBoxBorderWidth,u=r.absoluteStrokeWidth,l=r.spaceBetween,f=r.spaceInside,d=a?"rr--pointer":"",h=function(r){switch(r){case J:return R;case K:return O;case U:return N;default:return""}}(l),v=function(r){switch(r){case J:return M;case K:return W;case U:return I;default:return""}}(f),m=!n&&o?"rr--disabled":"",p=a&&i!==Y?function(r){switch(r){case Q:return vr(Z);case $:return vr(S);case rr:return vr(w);case er:return C;default:return""}}(i):"",g=c===T?"rr--dir-y":"rr--dir-x",y=function(r){switch(r){case J:return k;case K:return j;case U:return B;case X:return A;default:return""}}(t);return"".concat("rr--group"," ").concat(g," ").concat(u>0?"rr--has-stroke":""," ").concat(s>0?"rr--has-border":"","\n").concat(p," ").concat(y," ").concat(d," ").concat(m," ").concat(h,"\n").concat(v," ").concat(e).replace(/  +/g," ").trimEnd()}({className:Ur,radius:Cr,readOnly:x,isDisabled:nr,isDynamic:Jr,transition:jr,orientation:cr,absoluteBoxBorderWidth:ie,absoluteStrokeWidth:ae,spaceBetween:ur,spaceInside:dr});function We(r){return{ref:function(e){return he.current[r]=e}}}function Ie(r){return{tabIndex:Ze[r],onKeyDown:function(e){return function(r,e){var t=Or?zr.length-1:zr.length,n=e-1,o=e+1,a=!Or&&e===zr.length,i=0===e?t:n,c=t===e?0:o;switch(r.code){case"Shift":case"Tab":return!0;case"ArrowDown":case"ArrowRight":return Ne(ve.current?i:c);case"ArrowUp":case"ArrowLeft":return Ne(ve.current?c:i);case"Enter":case"Space":return r.preventDefault(),F(a?0:e+1)}r.preventDefault(),r.stopPropagation()}(e,r)}}}function Le(r){return{onClick:function(e){return t=r,e.stopPropagation(),void F(Or||re!==t?t+1:0);var t},onMouseEnter:function(){return E((e=r)+1),void ye((0,a.Z)((0,a.Z)({},ge),se(e,!0)));var e},onMouseLeave:Ae}}function Fe(r){if(x)return{};var e={};if(Array.isArray(Ir))e["aria-labelledby"]=Ir[r];else{var t=Array.isArray(Lr)?Lr:zr.map((function(r,e){return"Rate ".concat(e+1)}));e["aria-label"]=t[r]}return nr&&(e["aria-disabled"]="true"),(0,a.Z)({role:"radio","aria-checked":r+1===Gr},e)}function De(r){var e={itemShapes:Array.isArray(oe)?oe[r]:oe,itemStrokeWidth:ae,orientation:cr,hasHF:!1,testId:{}};return Yr&&Xr===q&&(e.hasHF=r===re),e}return(0,c.jsx)("div",(0,a.Z)((0,a.Z)((0,a.Z)({id:Hr,className:Me,style:(0,a.Z)((0,a.Z)({},_r),ge.staticCssVars),ref:function(r){Jr&&!Or&&(de.current=r),e&&(e.current=r)}},function(){if(!x){var r=Or&&!nr,e={role:"radiogroup","aria-required":r};return r&&(e["aria-invalid"]=Gr<=0),"string"==typeof Wr&&Wr.length>0?e["aria-labelledby"]=Wr:e["aria-label"]=Dr,e}return{role:"img","aria-label":Dr}}()),g),{},{children:zr.map((function(r,e){return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("div",(0,a.Z)((0,a.Z)((0,a.Z)({className:"".concat("rr--box"," ").concat(ge.dynamicClassNames[e]),style:ge.dynamicCssVars[e]},Fe(e)),(n=e,Jr?(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},We(n)),Ie(n)),Le(n)),{},{onFocus:function(r){return Oe(r,n)},onBlur:function(r){return Re(r)}}):{})),{},{children:(0,c.jsx)(lr,(0,a.Z)({},De(e)))})),Qr&&e===zr.length-1&&(0,c.jsx)("div",(0,a.Z)({},(t=e+1,(0,a.Z)((0,a.Z)((0,a.Z)({className:"rr--reset",role:"radio","aria-label":Vr,"aria-checked":0===Gr,onClick:function(){return F(0)},onFocus:function(r){var e;Oe(r,t),null==(e=de.current)||e.classList.add(y)},onBlur:function(r){var e;Re(r),null==(e=de.current)||e.classList.remove(y)}},Ie(t)),We(t)),nr?{"aria-disabled":"true"}:{}))))]},r);var t,n}))}))}));Cr.displayName="Rating"}}]);
//# sourceMappingURL=10.a8234ebf.chunk.js.map