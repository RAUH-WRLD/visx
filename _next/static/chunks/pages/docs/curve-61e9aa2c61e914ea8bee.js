_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"3sHr":function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/curve",function(){return n("plCX")}])},"67po":function(e,r,n){"use strict";n.d(r,"a",(function(){return u}));var t=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function u(e){return i(Object(t.a)(),e)}},"91Pn":function(e,r,n){"use strict";r.a=Math.random},"G/4L":function(e,r,n){"use strict";n.r(r),n.d(r,"randomUniform",(function(){return a})),n.d(r,"randomInt",(function(){return i})),n.d(r,"randomNormal",(function(){return u.a})),n.d(r,"randomLogNormal",(function(){return o})),n.d(r,"randomBates",(function(){return l})),n.d(r,"randomIrwinHall",(function(){return c})),n.d(r,"randomExponential",(function(){return s})),n.d(r,"randomPareto",(function(){return f})),n.d(r,"randomBernoulli",(function(){return d})),n.d(r,"randomGeometric",(function(){return p})),n.d(r,"randomBinomial",(function(){return m})),n.d(r,"randomGamma",(function(){return h})),n.d(r,"randomBeta",(function(){return v})),n.d(r,"randomWeibull",(function(){return b})),n.d(r,"randomCauchy",(function(){return g})),n.d(r,"randomLogistic",(function(){return x})),n.d(r,"randomPoisson",(function(){return j})),n.d(r,"randomLcg",(function(){return y.a}));var t=n("91Pn"),a=function e(r){function n(e,n){return e=null==e?0:+e,n=null==n?1:+n,1===arguments.length?(n=e,e=0):n-=e,function(){return r()*n+e}}return n.source=e,n}(t.a),i=function e(r){function n(e,n){return arguments.length<2&&(n=e,e=0),e=Math.floor(e),n=Math.floor(n)-e,function(){return Math.floor(r()*n+e)}}return n.source=e,n}(t.a),u=n("VEyW"),o=function e(r){var n=u.a.source(r);function t(){var e=n.apply(this,arguments);return function(){return Math.exp(e())}}return t.source=e,t}(t.a),c=function e(r){function n(e){return(e=+e)<=0?()=>0:function(){for(var n=0,t=e;t>1;--t)n+=r();return n+t*r()}}return n.source=e,n}(t.a),l=function e(r){var n=c.source(r);function t(e){if(0===(e=+e))return r;var t=n(e);return function(){return t()/e}}return t.source=e,t}(t.a),s=function e(r){function n(e){return function(){return-Math.log1p(-r())/e}}return n.source=e,n}(t.a),f=function e(r){function n(e){if((e=+e)<0)throw new RangeError("invalid alpha");return e=1/-e,function(){return Math.pow(1-r(),e)}}return n.source=e,n}(t.a),d=function e(r){function n(e){if((e=+e)<0||e>1)throw new RangeError("invalid p");return function(){return Math.floor(r()+e)}}return n.source=e,n}(t.a),p=function e(r){function n(e){if((e=+e)<0||e>1)throw new RangeError("invalid p");return 0===e?()=>1/0:1===e?()=>1:(e=Math.log1p(-e),function(){return 1+Math.floor(Math.log1p(-r())/e)})}return n.source=e,n}(t.a),h=function e(r){var n=u.a.source(r)();function t(e,t){if((e=+e)<0)throw new RangeError("invalid k");if(0===e)return()=>0;if(t=null==t?1:+t,1===e)return()=>-Math.log1p(-r())*t;var a=(e<1?e+1:e)-1/3,i=1/(3*Math.sqrt(a)),u=e<1?()=>Math.pow(r(),1/e):()=>1;return function(){do{do{var e=n(),o=1+i*e}while(o<=0);o*=o*o;var c=1-r()}while(c>=1-.0331*e*e*e*e&&Math.log(c)>=.5*e*e+a*(1-o+Math.log(o)));return a*o*u()*t}}return t.source=e,t}(t.a),v=function e(r){var n=h.source(r);function t(e,r){var t=n(e),a=n(r);return function(){var e=t();return 0===e?0:e/(e+a())}}return t.source=e,t}(t.a),m=function e(r){var n=p.source(r),t=v.source(r);function a(e,r){return e=+e,(r=+r)>=1?()=>e:r<=0?()=>0:function(){for(var a=0,i=e,u=r;i*u>16&&i*(1-u)>16;){var o=Math.floor((i+1)*u),c=t(o,i-o+1)();c<=u?(a+=o,i-=o,u=(u-c)/(1-c)):(i=o-1,u/=c)}for(var l=u<.5,s=n(l?u:1-u),f=s(),d=0;f<=i;++d)f+=s();return a+(l?d:i-d)}}return a.source=e,a}(t.a),b=function e(r){function n(e,n,t){var a;return 0===(e=+e)?a=e=>-Math.log(e):(e=1/e,a=r=>Math.pow(r,e)),n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*a(-Math.log1p(-r()))}}return n.source=e,n}(t.a),g=function e(r){function n(e,n){return e=null==e?0:+e,n=null==n?1:+n,function(){return e+n*Math.tan(Math.PI*r())}}return n.source=e,n}(t.a),x=function e(r){function n(e,n){return e=null==e?0:+e,n=null==n?1:+n,function(){var t=r();return e+n*Math.log(t/(1-t))}}return n.source=e,n}(t.a),j=function e(r){var n=h.source(r),t=m.source(r);function a(e){return function(){for(var a=0,i=e;i>16;){var u=Math.floor(.875*i),o=n(u)();if(o>i)return a+t(u-1,i/o)();a+=u,i-=o}for(var c=-Math.log1p(-r()),l=0;c<=i;++l)c-=Math.log1p(-r());return a+l}}return a.source=e,a}(t.a),y=n("J4UP")},Hoty:function(e,r,n){"use strict";n.r(r);var t=n("m+Ft");n.d(r,"curveBasis",(function(){return t.b}));var a=n("Q97m");n.d(r,"curveBasisClosed",(function(){return a.a}));var i=n("t4/P");n.d(r,"curveBasisOpen",(function(){return i.a}));var u=n("vHTF");n.d(r,"curveStep",(function(){return u.a})),n.d(r,"curveStepAfter",(function(){return u.b})),n.d(r,"curveStepBefore",(function(){return u.c}));var o=n("KDFE");n.d(r,"curveBundle",(function(){return o.a}));var c=n("mGPF");n.d(r,"curveLinear",(function(){return c.a}));var l=n("8iLE");n.d(r,"curveLinearClosed",(function(){return l.a}));var s=n("JkM6");n.d(r,"curveCardinal",(function(){return s.b}));var f=n("/kCm");n.d(r,"curveCardinalClosed",(function(){return f.b}));var d=n("BEsX");n.d(r,"curveCardinalOpen",(function(){return d.b}));var p=n("/Vk/");n.d(r,"curveCatmullRom",(function(){return p.a}));var h=n("S4k1");n.d(r,"curveCatmullRomClosed",(function(){return h.a}));var v=n("KrvH");n.d(r,"curveCatmullRomOpen",(function(){return v.a}));var m=n("EbDF");n.d(r,"curveMonotoneX",(function(){return m.a})),n.d(r,"curveMonotoneY",(function(){return m.b}));var b=n("w5BF");n.d(r,"curveNatural",(function(){return b.a}))},J4UP:function(e,r,n){"use strict";n.d(r,"a",(function(){return a}));const t=1/4294967296;function a(e=Math.random()){let r=0|(0<=e&&e<1?e/t:Math.abs(e));return()=>(r=1664525*r+1013904223|0,t*(r>>>0))}},JmwF:function(e,r,n){"use strict";n.d(r,"a",(function(){return f}));var t=n("aWzz"),a=n.n(t),i=n("ERkP"),u=n.n(i),o=n("O94r"),c=n.n(o),l=["top","left","transform","className","children","innerRef"];function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e){var r=e.top,n=void 0===r?0:r,t=e.left,a=void 0===t?0:t,i=e.transform,o=e.className,f=e.children,d=e.innerRef,p=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);return u.a.createElement("g",s({ref:d,className:c()("visx-group",o),transform:i||"translate("+a+", "+n+")"},p),f)}f.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},U8e0:function(e,r,n){"use strict";r.__esModule=!0,r.default=function(e){return(0,t.randomLcg)(e)};var t=n("G/4L")},VEyW:function(e,r,n){"use strict";var t=n("91Pn");r.a=function e(r){function n(e,n){var t,a;return e=null==e?0:+e,n=null==n?1:+n,function(){var i;if(null!=t)i=t,t=null;else do{t=2*r()-1,i=2*r()-1,a=t*t+i*i}while(!a||a>1);return e+n*i*Math.sqrt(-2*Math.log(a)/a)}}return n.source=e,n}(t.a)},Zbhd:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n("PB0s"),a=n("XAd9"),i=n("Cyas"),u=n("VBI3");function o(e,r,n,o){var c,l=Object(t.c)(e,r,n);switch((o=Object(a.a)(null==o?",f":o)).type){case"s":var s=Math.max(Math.abs(e),Math.abs(r));return null!=o.precision||isNaN(c=function(e,r){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(r)/3)))-Object(i.a)(Math.abs(e)))}(l,s))||(o.precision=c),Object(u.b)(o,s);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(c=function(e,r){return e=Math.abs(e),r=Math.abs(r)-e,Math.max(0,Object(i.a)(r)-Object(i.a)(e))+1}(l,Math.max(Math.abs(e),Math.abs(r))))||(o.precision=c-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(c=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(l))||(o.precision=c-2*("%"===o.type))}return Object(u.a)(o)}},eiPp:function(e,r,n){"use strict";n.d(r,"a",(function(){return D}));var t=n("jg1C"),a=n("yFcC"),i=n.n(a),u=n("ERkP"),o=n.n(u),c=n("ue4z"),l=n("Hoty"),s=n("JmwF"),f=n("geX1"),d=n("cjvV"),p=n("67po"),h=n("aWzz"),v=n.n(h),m=["id","markerWidth","markerHeight","markerUnits","children"];function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function g(e){var r=e.id,n=e.markerWidth,t=void 0===n?3:n,a=e.markerHeight,i=void 0===a?3:a,u=e.markerUnits,c=void 0===u?"userSpaceOnUse":u,l=e.children,s=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,m);return o.a.createElement("defs",null,o.a.createElement("marker",b({id:r,markerWidth:t,markerHeight:i,markerUnits:c},s),l))}g.propTypes={id:v.a.string.isRequired,size:v.a.number,markerWidth:v.a.oneOfType([v.a.string,v.a.number]),markerHeight:v.a.oneOfType([v.a.string,v.a.number]),markerUnits:v.a.string,refX:v.a.oneOfType([v.a.string,v.a.number]),refY:v.a.oneOfType([v.a.string,v.a.number]),strokeWidth:v.a.number,children:v.a.node.isRequired};var x=["id","size","strokeWidth"];function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function y(e){var r=e.id,n=e.size,t=void 0===n?9:n,a=e.strokeWidth,i=void 0===a?1:a,u=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,x),c=t+i,l=t/2,s="0 "+l+", "+l+" "+l+", "+l+" 0, "+l+" "+t+", "+l+" "+l+", "+t+" "+l;return o.a.createElement(g,j({id:r,markerWidth:c,markerHeight:c,refX:l,refY:l,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:i},u),o.a.createElement("polyline",{points:s}))}function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function k(e){return o.a.createElement(y,O({orient:45},e))}var w=["id","size","strokeWidth"];function C(){return(C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function M(e){var r=e.id,n=e.size,t=void 0===n?9:n,a=e.strokeWidth,i=void 0===a?1:a,u=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,w),c=2*t+i,l=c/2;return o.a.createElement(g,C({id:r,markerWidth:c,markerHeight:c,refX:0,refY:l,orient:"auto-start-reverse",markerUnits:"strokeWidth",strokeWidth:i},u),o.a.createElement("circle",{r:t,cx:l,cy:l}))}var E=["id","size","strokeWidth"];function P(){return(P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function S(e){var r=e.id,n=e.size,t=void 0===n?9:n,a=e.strokeWidth,i=void 0===a?1:a,u=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,E),c=t+2*i,l=t,s=c/2,f="0 0, "+t+" "+t/2+", 0 "+t;return o.a.createElement(g,P({id:r,markerWidth:c,markerHeight:c,refX:l,refY:s,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:i},u),o.a.createElement("g",{transform:"translate("+i+", "+i+")"},o.a.createElement("polyline",{points:f})))}var N=["id","size","fill","stroke","strokeWidth"];function R(){return(R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function _(e){var r=e.id,n=e.size,t=void 0===n?9:n,a=e.fill,i=e.stroke,u=e.strokeWidth,c=void 0===u?1:u,l=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,N),s=Math.max(t,2*c),f=s/2,d=t/2;return o.a.createElement(g,R({id:r,markerWidth:s,markerHeight:t,refX:f,refY:d,orient:"auto",markerUnits:"strokeWidth",fill:a||i,stroke:"none"},l),o.a.createElement("rect",{width:c,height:t,x:f}))}var W=n("jCJf"),T=n.n(W),z=Object.keys(l),B=new Array(5).fill(null).map((function(e,r){return T()(25,r/72).sort((function(e,r){return e.date.getTime()-r.date.getTime()}))})),A=B.reduce((function(e,r){return e.concat(r)}),[]),L=function(e){return e.date},U=function(e){return e.value},q=Object(d.a)({domain:Object(c.b)(A,L)}),F=Object(p.a)({domain:[0,Object(c.c)(A,U)]});function D(e){var r=e.width,n=e.height,a=e.showControls,o=void 0===a||a,c=Object(u.useState)("curveNatural"),d=c[0],p=c[1],h=Object(u.useState)(!0),v=h[0],m=h[1],b=o?n-40:n,g=b/5;return q.range([0,r-50]),F.range([g-2,0]),Object(t.jsxs)("div",{className:"jsx-1571817224 visx-curves-demo",children:[o&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("label",{className:"jsx-1571817224",children:["Curve type \xa0",Object(t.jsx)("select",{onChange:function(e){return p(e.target.value)},value:d,className:"jsx-1571817224",children:z.map((function(e){return Object(t.jsx)("option",{value:e,className:"jsx-1571817224",children:e},e)}))})]}),"\xa0",Object(t.jsxs)("label",{className:"jsx-1571817224",children:["Show points\xa0",Object(t.jsx)("input",{type:"checkbox",checked:v,onChange:function(){return m(!v)},className:"jsx-1571817224"})]}),Object(t.jsx)("br",{className:"jsx-1571817224"})]}),Object(t.jsxs)("svg",{width:r,height:b,className:"jsx-1571817224",children:[Object(t.jsx)(k,{id:"marker-x",stroke:"#333",size:22,strokeWidth:4,markerUnits:"userSpaceOnUse"}),Object(t.jsx)(y,{id:"marker-cross",stroke:"#333",size:22,strokeWidth:4,strokeOpacity:.6,markerUnits:"userSpaceOnUse"}),Object(t.jsx)(M,{id:"marker-circle",fill:"#333",size:2,refX:2}),Object(t.jsx)(S,{id:"marker-arrow-odd",stroke:"#333",size:8,strokeWidth:1}),Object(t.jsx)(_,{id:"marker-line",fill:"#333",size:16,strokeWidth:1}),Object(t.jsx)(S,{id:"marker-arrow",fill:"#333",refX:2,size:6}),Object(t.jsx)("rect",{width:r,height:b,fill:"#efefef",rx:14,ry:14,className:"jsx-1571817224"}),r>8&&B.map((function(e,r){var n=r%2===0,a=n?"url(#marker-cross)":"url(#marker-x)";1===r&&(a="url(#marker-line)");var i=n?"url(#marker-arrow)":"url(#marker-arrow-odd)";return Object(t.jsxs)(s.a,{top:r*g,left:13,children:[v&&e.map((function(e,n){return Object(t.jsx)("circle",{r:3,cx:q(L(e)),cy:F(U(e)),stroke:"rgba(33,33,33,0.5)",fill:"transparent",className:"jsx-1571817224"},r+n)})),Object(t.jsx)(f.a,{curve:l[d],data:e,x:function(e){var r;return null!==(r=q(L(e)))&&void 0!==r?r:0},y:function(e){var r;return null!==(r=F(U(e)))&&void 0!==r?r:0},stroke:"#333",strokeWidth:n?2:1,strokeOpacity:n?.6:1,shapeRendering:"geometricPrecision",markerMid:"url(#marker-circle)",markerStart:a,markerEnd:i})]},"lines-".concat(r))}))]}),Object(t.jsx)(i.a,{id:"1571817224",children:[".visx-curves-demo.jsx-1571817224 label.jsx-1571817224{font-size:12px;}"]})]})}try{D.displayName="Example",D.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-curve/Example.tsx#Example"]={docgenInfo:D.__docgenInfo,name:"Example",path:"src/sandboxes/visx-curve/Example.tsx#Example"})}catch(H){}},geX1:function(e,r,n){"use strict";n.d(r,"a",(function(){return s}));var t=n("ERkP"),a=n.n(t),i=n("O94r"),u=n.n(i),o=n("dGDr"),c=["children","data","x","y","fill","className","curve","innerRef","defined"];function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function s(e){var r=e.children,n=e.data,t=void 0===n?[]:n,i=e.x,s=e.y,f=e.fill,d=void 0===f?"transparent":f,p=e.className,h=e.curve,v=e.innerRef,m=e.defined,b=void 0===m?function(){return!0}:m,g=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c),x=Object(o.c)({x:i,y:s,defined:b,curve:h});return r?a.a.createElement(a.a.Fragment,null,r({path:x})):a.a.createElement("path",l({ref:v,className:u()("visx-linepath",p),d:x(t)||"",fill:d,strokeLinecap:"round"},g))}},i6Tx:function(e,r,n){"use strict";r.__esModule=!0,r.default=d;var t=l(n("aWzz")),a=l(n("FGHv")),i=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(r);if(n&&n.has(e))return n.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(t,i,u):t[i]=e[i]}t.default=e,n&&n.set(e,t);return t}(n("ERkP")),u=n("Br7l"),o=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function c(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:r})(e)}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=[];function d(e){var r=e.className,n=e.children,t=e.debounceTime,c=void 0===t?300:t,l=e.ignoreDimensions,d=void 0===l?f:l,p=e.parentSizeStyles,h=void 0===p?{width:"100%",height:"100%"}:p,v=e.enableDebounceLeadingCall,m=void 0===v||v,b=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o),g=(0,i.useRef)(null),x=(0,i.useRef)(0),j=(0,i.useState)({width:0,height:0,top:0,left:0}),y=j[0],O=j[1],k=(0,i.useMemo)((function(){var e=Array.isArray(d)?d:[d];return(0,a.default)((function(r){O((function(n){return Object.keys(n).filter((function(e){return n[e]!==r[e]})).every((function(r){return e.includes(r)}))?n:r}))}),c,{leading:m})}),[c,m,d]);return(0,i.useEffect)((function(){var e=new u.ResizeObserver((function(e){void 0===e&&(e=[]),e.forEach((function(e){var r=e.contentRect,n=r.left,t=r.top,a=r.width,i=r.height;x.current=window.requestAnimationFrame((function(){k({width:a,height:i,top:t,left:n})}))}))}));return g.current&&e.observe(g.current),function(){window.cancelAnimationFrame(x.current),e.disconnect(),null!=k&&k.cancel&&k.cancel()}}),[k]),i.default.createElement("div",s({style:h,ref:g,className:r},b),n(s({},y,{ref:g.current,resize:k})))}d.propTypes={className:t.default.string,debounceTime:t.default.number,enableDebounceLeadingCall:t.default.bool,ignoreDimensions:t.default.oneOfType([t.default.any,t.default.arrayOf(t.default.any)]),children:t.default.func.isRequired}},i9k6:function(e,r,n){"use strict";n.d(r,"a",(function(){return h}));var t=n("zjfJ"),a=n("jg1C"),i=n("yFcC"),u=n.n(i),o=n("ERkP"),c=n.n(o),l=n("jvFD"),s=n.n(l),f=n("i6Tx"),d=n.n(f);function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){var r,n,i=e.description,o=e.detailsHeight,l=void 0===o?76:o,f=e.detailsStyles,h=e.exampleProps,v=e.exampleRenderer,m=e.exampleUrl,b=e.tileStyles,g=e.title;return Object(a.jsxs)(a.Fragment,{children:[(r=m,n=Object(a.jsxs)("div",{style:b,className:"jsx-713312509 gallery-tile",children:[Object(a.jsx)("div",{className:"jsx-713312509 image",children:Object(a.jsx)(d.a,{children:function(e){var r=e.width,n=e.height;return c.a.createElement(v,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){Object(t.a)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({width:r,height:n+(g||i?l:0)},h))}})}),(g||i)&&Object(a.jsxs)("div",{style:f,className:"jsx-713312509 details",children:[g&&Object(a.jsx)("div",{className:"jsx-713312509 title",children:g}),i&&Object(a.jsx)("div",{className:"jsx-713312509 description",children:Object(a.jsx)("pre",{className:"jsx-713312509",children:i})})]})]}),r?Object(a.jsx)(s.a,{href:r,children:n}):n),Object(a.jsx)(u.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{h.displayName="GalleryTile",h.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:h.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(v){}},jCJf:function(e,r,n){"use strict";r.__esModule=!0,r.default=function(e,r,n){var t=null==r?Math.random:(0,a.default)(r),i=null==n?Date.now():new Date(n).valueOf();return new Array(e).fill(1).map((function(e,r){return{date:new Date(i-36e5*r),value:3e3*t()|0}}))};var t,a=(t=n("U8e0"))&&t.__esModule?t:{default:t}},plCX:function(e,r,n){"use strict";n.r(r);var t=n("jg1C"),a=(n("ERkP"),n("QnPE")),i=[n("xiZr").default];r.default=function(){return Object(t.jsx)(a.a,{readme:'# @visx/curve\n\n<a title="@visx/curve npm downloads" href="https://www.npmjs.com/package/@visx/curve">\n  <img src="https://img.shields.io/npm/dm/@visx/curve.svg?style=flat-square" />\n</a>\n\n## Installation\n\n```\nnpm install --save @visx/curve\n```\n\n## Overview\n\nThe `@visx/curve` package is a wrapper of the [d3-shape](https://github.com/d3/d3-shape) curve\nfunctions. A `curve` is a function that can be passed into other `visx` objects that draw lines or\npaths, such as a `LinePath`, to change the way the line between points is drawn. Click on the\nexample below for an interactive way to explore curve aesthetics.\n\nAny function with the prefix `curve` in `d3` can be used through `visx` like so:\n\n```javascript\nimport { curveCatmullRomOpen } from \'@visx/curve\';\nlet line = (<Shape.LinePath curve={curveCatmullRomOpen} />)\n\n// or if you want namespace all Curves under the `Curve`\nimport * as Curve from `@visx/curve`;\nlet line = (<Shape.LinePath curve={Curve.curveCatmullRomOpen} />)\n```\n\n## Functions\n\n| visx                  | d3                                                                            |\n| --------------------- | ----------------------------------------------------------------------------- |\n| curveBasis            | [curveBasis](https://github.com/d3/d3-shape#curveBasis)                       |\n| curveBasisClose       | [curveBasisClosed](https://github.com/d3/d3-shape#curveBasisClosed)           |\n| curveBasisOpen        | [curveBasisOpen](https://github.com/d3/d3-shape#curveBasisOpen)               |\n| curveStep             | [curveStep](https://github.com/d3/d3-shape#curveStep)                         |\n| curveStepAfter        | [curveStepAfter](https://github.com/d3/d3-shape#curveStepAfter)               |\n| curveStepBefore       | [curveStepbefore](https://github.com/d3/d3-shape#curveStepBefore)             |\n| curveBundle           | [curveBundle](https://github.com/d3/d3-shape#curveBundle)                     |\n| curveLinear           | [curveLinear](https://github.com/d3/d3-shape#curveLinear)                     |\n| curveLinearClosed     | [curveLinearClosed](https://github.com/d3/d3-shape#curveLinearClosed)         |\n| curveMonotoneX        | [curveMonotoneX](https://github.com/d3/d3-shape#curveMonotoneX)               |\n| curveMonotoneY        | [curveMonotoneY](https://github.com/d3/d3-shape#curveMonotoneY)               |\n| curveCardinal         | [curveCardinal](https://github.com/d3/d3-shape#curveCardinal)                 |\n| curveCardinalClosed   | [curveCardinalClosed](https://github.com/d3/d3-shape#curveCardinalClosed)     |\n| curveCardinalOpen     | [curveCardinalOpen](https://github.com/d3/d3-shape#curveCardinalOpen)         |\n| curveCatmullRom       | [curveCatmullRom](https://github.com/d3/d3-shape#curveCatmullRom)             |\n| curveCatmullRomClosed | [curveCatmullRomClosed](https://github.com/d3/d3-shape#curveCatmullRomClosed) |\n| curveCatmullRomOpen   | [curveCatmullRomOpen](https://github.com/d3/d3-shape#curveCatmullRomOpen)     |\n| curveNatural          | [curveNatural](https://github.com/d3/d3-shape#curveNatural)                   |\n',examples:i,visxPackage:"curve"})}},"uKU/":function(e,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return c}));var t=n("PB0s"),a=n("2+fR"),i=n("W1cA"),u=n("Zbhd");function o(e){var r=e.domain;return e.ticks=function(e){var n=r();return Object(t.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var t=r();return Object(u.a)(t[0],t[t.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,i,u=r(),o=0,c=u.length-1,l=u[o],s=u[c],f=10;for(s<l&&(i=l,l=s,s=i,i=o,o=c,c=i);f-- >0;){if((i=Object(t.b)(l,s,n))===a)return u[o]=l,u[c]=s,r(u);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}a=i}return e},e}function c(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,c())},i.b.apply(e,arguments),o(e)}},ue4z:function(e,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"b",(function(){return u})),n.d(r,"c",(function(){return l})),n.d(r,"d",(function(){return s})),n.d(r,"e",(function(){return c})),n.d(r,"f",(function(){return f}));var t=function(e,r){return e<r?-1:e>r?1:e>=r?0:NaN},a=function(e){var r;return 1===e.length&&(r=e,e=function(e,n){return t(r(e),n)}),{left:function(r,n,t,a){for(null==t&&(t=0),null==a&&(a=r.length);t<a;){var i=t+a>>>1;e(r[i],n)<0?t=i+1:a=i}return t},right:function(r,n,t,a){for(null==t&&(t=0),null==a&&(a=r.length);t<a;){var i=t+a>>>1;e(r[i],n)>0?a=i:t=i+1}return t}}};var i=a(t);i.right,i.left;var u=function(e,r){var n,t,a,i=e.length,u=-1;if(null==r){for(;++u<i;)if(null!=(n=e[u])&&n>=n)for(t=a=n;++u<i;)null!=(n=e[u])&&(t>n&&(t=n),a<n&&(a=n))}else for(;++u<i;)if(null!=(n=r(e[u],u,e))&&n>=n)for(t=a=n;++u<i;)null!=(n=r(e[u],u,e))&&(t>n&&(t=n),a<n&&(a=n));return[t,a]},o=Array.prototype,c=(o.slice,o.map,function(e,r,n){e=+e,r=+r,n=(a=arguments.length)<2?(r=e,e=0,1):a<3?1:+n;for(var t=-1,a=0|Math.max(0,Math.ceil((r-e)/n)),i=new Array(a);++t<a;)i[t]=e+t*n;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=function(e,r){var n,t,a=e.length,i=-1;if(null==r){for(;++i<a;)if(null!=(n=e[i])&&n>=n)for(t=n;++i<a;)null!=(n=e[i])&&n>t&&(t=n)}else for(;++i<a;)if(null!=(n=r(e[i],i,e))&&n>=n)for(t=n;++i<a;)null!=(n=r(e[i],i,e))&&n>t&&(t=n);return t},s=function(e){for(var r,n,t,a=e.length,i=-1,u=0;++i<a;)u+=e[i].length;for(n=new Array(u);--a>=0;)for(r=(t=e[a]).length;--r>=0;)n[--u]=t[r];return n},f=function(e){if(!(a=e.length))return[];for(var r=-1,n=function(e,r){var n,t,a=e.length,i=-1;if(null==r){for(;++i<a;)if(null!=(n=e[i])&&n>=n)for(t=n;++i<a;)null!=(n=e[i])&&t>n&&(t=n)}else for(;++i<a;)if(null!=(n=r(e[i],i,e))&&n>=n)for(t=n;++i<a;)null!=(n=r(e[i],i,e))&&t>n&&(t=n);return t}(e,d),t=new Array(n);++r<n;)for(var a,i=-1,u=t[r]=new Array(a);++i<a;)u[i]=e[i][r];return t};function d(e){return e.length}},xiZr:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n("jg1C"),a=(n("ERkP"),n("eiPp")),i=n("i9k6"),u=n("yeGK");n.d(r,"packageJson",(function(){return u}));var o={border:"1px solid lightgray"},c={color:"#222"},l={showControls:!1};function s(){return Object(t.jsx)(i.a,{title:"Curves",description:"<Curve.* /> <Shape.Line />",exampleProps:l,exampleRenderer:a.a,exampleUrl:"/curves",tileStyles:o,detailsStyles:c})}},yeGK:function(e){e.exports=JSON.parse('{"name":"@visx/demo-curve","description":"Standalone visx curve demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/marker":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","curve","interpolate"]}')},zjfJ:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,"a",(function(){return t}))}},[["3sHr",0,2,1,3,4,5,7,8,9,10,11,15]]]);