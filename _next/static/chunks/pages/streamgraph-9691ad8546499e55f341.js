_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"/B0Q":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t("W1cA");const a=Symbol("implicit");function i(){var e=new Map,n=[],t=[],c=a;function s(r){var i=r+"",s=e.get(i);if(!s){if(c!==a)return c;e.set(i,s=n.push(r))}return t[(s-1)%t.length]}return s.domain=function(t){if(!arguments.length)return n.slice();n=[],e=new Map;for(const r of t){const t=r+"";e.has(t)||e.set(t,n.push(r))}return s},s.range=function(e){return arguments.length?(t=Array.from(e),s):t.slice()},s.unknown=function(e){return arguments.length?(c=e,s):c},s.copy=function(){return i(n,t).unknown(c)},r.b.apply(s,arguments),s}},"0yDh":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i),s=t("O94r"),o=t.n(s),u=t("VFFr");function l(e){var n=e.id,t=e.width,r=e.height,a=e.path,i=e.fill,s=void 0===i?"transparent":i,l=e.stroke,d=e.strokeWidth,f=e.strokeDasharray,h=e.strokeLinecap,p=void 0===h?"square":h,m=e.shapeRendering,g=void 0===m?"auto":m,b=e.background,v=e.className;return c.a.createElement(u.a,{id:n,width:t,height:r},!!b&&c.a.createElement("rect",{width:t,height:r,fill:b}),c.a.createElement("path",{className:o()("visx-pattern-path",v),d:a,fill:s,stroke:l,strokeWidth:d,strokeDasharray:f,strokeLinecap:p,shapeRendering:g}))}function d(e){var n=e.id,t=e.width,r=e.height,a=e.fill,i=e.stroke,s=e.strokeWidth,u=e.strokeDasharray,d=e.strokeLinecap,f=e.shapeRendering,h=e.background,p=e.className;return c.a.createElement(l,{className:o()("visx-pattern-wave",p),path:"M 0 "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+-r/2+" "+r/2+"\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+r+" "+r/2+"\n             c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0",id:n,width:t,height:r,fill:a,stroke:i,strokeWidth:s,strokeDasharray:u,strokeLinecap:d,shapeRendering:f,background:h})}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,path:a.a.string,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])},d.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])}},"1Wmu":function(e,n,t){"use strict";function r(e,n){e(n)}t.d(n,"a",(function(){return r}))},"201w":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("J4UP");function a(e){return Object(r.a)(e)}},"67po":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("uKU/"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(e){return i(Object(r.a)(),e)}},"D+es":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("/B0Q"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","unknown");function c(e){return i(Object(r.a)(),e)}},"E+ue":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),a=t.n(r),i=t("O94r"),c=t.n(i),s=t("JmwF"),o=t("dGDr"),u=["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"];function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e){var n=e.className,t=e.top,r=e.left,i=e.keys,d=e.data,f=e.curve,h=e.defined,p=e.x,m=e.x0,g=e.x1,b=e.y0,v=e.y1,y=e.value,k=e.order,O=e.offset,x=e.color,j=e.children,w=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,u),S=Object(o.f)({keys:i,value:y,order:k,offset:O}),R=Object(o.b)({x:p,x0:m,x1:g,y0:b,y1:v,curve:f,defined:h}),E=S(d);return j?a.a.createElement(a.a.Fragment,null,j({stacks:E,path:R,stack:S})):a.a.createElement(s.a,{top:t,left:r},E.map((function(e,t){return a.a.createElement("path",l({className:c()("visx-stack",n),key:"stack-"+t+"-"+(e.key||""),d:R(e)||"",fill:null==x?void 0:x(e.key,t)},w))})))}},J4UP:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));const r=1/4294967296;function a(e=Math.random()){let n=0|(0<=e&&e<1?e/r:Math.abs(e));return()=>(n=1664525*n+1013904223|0,r*(n>>>0))}},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i),s=t("O94r"),o=t.n(s),u=["top","left","transform","className","children","innerRef"];function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e){var n=e.top,t=void 0===n?0:n,r=e.left,a=void 0===r?0:r,i=e.transform,s=e.className,d=e.children,f=e.innerRef,h=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,u);return c.a.createElement("g",l({ref:f,className:o()("visx-group",s),transform:i||"translate("+a+", "+t+")"},h),d)}d.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},"RD/X":function(e,n,t){"use strict";t.r(n);var r=t("jg1C"),a=(t("ERkP"),t("6wy5")),i=t("W0xs"),c=t("dkc1");n.default=function(){return Object(r.jsx)(a.a,{component:i.b,title:"Streamgraph",codeSandboxDirectoryName:"visx-streamgraph",packageJson:c,children:"/* eslint-disable react-hooks/rules-of-hooks */\n/**\n * Inspired by Mike Bostock's Streamgraph & Lee Byron\u2019s test data generator:\n * https://bl.ocks.org/mbostock/4060954\n */\nimport React from 'react';\nimport { Stack } from '@visx/shape';\nimport { PatternCircles, PatternWaves } from '@visx/pattern';\nimport { scaleLinear, scaleOrdinal } from '@visx/scale';\nimport { transpose } from 'd3-array';\nimport { animated, useSpring } from 'react-spring';\n\nimport useForceUpdate from './useForceUpdate';\nimport generateData from './generateData';\n\n// constants\nconst NUM_LAYERS = 20;\nconst SAMPLES_PER_LAYER = 200;\nconst BUMPS_PER_LAYER = 10;\nexport const BACKGROUND = '#ffdede';\n\n// utils\nconst range = (n: number) => Array.from(new Array(n), (_, i) => i);\n\nconst keys = range(NUM_LAYERS);\n\n// scales\nconst xScale = scaleLinear<number>({\n  domain: [0, SAMPLES_PER_LAYER - 1],\n});\nconst yScale = scaleLinear<number>({\n  domain: [-30, 50],\n});\nconst colorScale = scaleOrdinal<number, string>({\n  domain: keys,\n  range: ['#ffc409', '#f14702', '#262d97', 'white', '#036ecd', '#9ecadd', '#51666e'],\n});\nconst patternScale = scaleOrdinal<number, string>({\n  domain: keys,\n  range: ['mustard', 'cherry', 'navy', 'circles', 'circles', 'circles', 'circles'],\n});\n\n// accessors\ntype Datum = number[];\nconst getY0 = (d: Datum) => yScale(d[0]) ?? 0;\nconst getY1 = (d: Datum) => yScale(d[1]) ?? 0;\n\nexport type StreamGraphProps = {\n  width: number;\n  height: number;\n  animate?: boolean;\n};\n\nexport default function Streamgraph({ width, height, animate = true }: StreamGraphProps) {\n  const forceUpdate = useForceUpdate();\n  const handlePress = () => forceUpdate();\n\n  if (width < 10) return null;\n\n  xScale.range([0, width]);\n  yScale.range([height, 0]);\n\n  // generate layers in render to update on touch\n  const layers = transpose<number>(\n    keys.map(() => generateData(SAMPLES_PER_LAYER, BUMPS_PER_LAYER)),\n  );\n\n  return (\n    <svg width={width} height={height}>\n      <PatternCircles id=\"mustard\" height={40} width={40} radius={5} fill=\"#036ecf\" complement />\n      <PatternWaves\n        id=\"cherry\"\n        height={12}\n        width={12}\n        fill=\"transparent\"\n        stroke=\"#232493\"\n        strokeWidth={1}\n      />\n      <PatternCircles id=\"navy\" height={60} width={60} radius={10} fill=\"white\" complement />\n      <PatternCircles\n        complement\n        id=\"circles\"\n        height={60}\n        width={60}\n        radius={10}\n        fill=\"transparent\"\n      />\n\n      <g onClick={handlePress} onTouchStart={handlePress}>\n        <rect x={0} y={0} width={width} height={height} fill={BACKGROUND} rx={14} />\n        <Stack<number[], number>\n          data={layers}\n          keys={keys}\n          offset=\"wiggle\"\n          color={colorScale}\n          x={(_, i) => xScale(i) ?? 0}\n          y0={getY0}\n          y1={getY1}\n        >\n          {({ stacks, path }) =>\n            stacks.map((stack) => {\n              // Alternatively use renderprops <Spring to={{ d }}>{tweened => ...}</Spring>\n              const pathString = path(stack) || '';\n              const tweened = animate ? useSpring({ pathString }) : { pathString };\n              const color = colorScale(stack.key);\n              const pattern = patternScale(stack.key);\n              return (\n                <g key={`series-${stack.key}`}>\n                  <animated.path d={tweened.pathString} fill={color} />\n                  <animated.path d={tweened.pathString} fill={`url(#${pattern})`} />\n                </g>\n              );\n            })\n          }\n        </Stack>\n      </g>\n    </svg>\n  );\n}\n"})}},VFFr:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i);function s(e){var n=e.id,t=e.width,r=e.height,a=e.children;return c.a.createElement("defs",null,c.a.createElement("pattern",{id:n,width:t,height:r,patternUnits:"userSpaceOnUse"},a))}s.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,children:a.a.node.isRequired}},Vi0D:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return l}));var r=t("+Y26"),a=t("M3gT"),i=t("Ddjo"),c=t("Xyxy"),s=t("Q4nK"),o={expand:r.a,diverging:a.a,none:i.a,silhouette:c.a,wiggle:s.a},u=Object.keys(o);function l(e){return e&&o[e]||o.none}},W0xs:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return S}));var r=t("jg1C"),a=t("ERkP"),i=t("E+ue"),c=t("dKJj"),s=t("0yDh"),o=t("67po"),u=t("D+es"),l=t("ue4z"),d=t("0yf5");var f,h=t("201w"),p=Object(h.a)(.65),m=function(e,n){for(var t=1/(.1+p()),r=2*p()-.5,a=10/(.1+p()),i=0;i<n;i+=1){var c=(i/n-r)*a;e[i]+=t*Math.exp(-c*c)}},g=function(e,n){var t,r=[];for(t=0;t<e;t+=1)r[t]=0;for(t=0;t<n;t+=1)m(r,e);return r},b="#ffdede",v=(f=20,Array.from(new Array(f),(function(e,n){return n}))),y=Object(o.a)({domain:[0,199]}),k=Object(o.a)({domain:[-30,50]}),O=Object(u.a)({domain:v,range:["#ffc409","#f14702","#262d97","white","#036ecd","#9ecadd","#51666e"]}),x=Object(u.a)({domain:v,range:["mustard","cherry","navy","circles","circles","circles","circles"]}),j=function(e){var n;return null!==(n=k(e[0]))&&void 0!==n?n:0},w=function(e){var n;return null!==(n=k(e[1]))&&void 0!==n?n:0};function S(e){var n=e.width,t=e.height,o=e.animate,u=void 0===o||o,f=function(){var e=Object(a.useState)(0)[1];return function(){return e((function(e){return e+1}))}}(),h=function(){return f()};if(n<10)return null;y.range([0,n]),k.range([t,0]);var p=Object(l.f)(v.map((function(){return g(200,10)})));return Object(r.jsxs)("svg",{width:n,height:t,children:[Object(r.jsx)(c.a,{id:"mustard",height:40,width:40,radius:5,fill:"#036ecf",complement:!0}),Object(r.jsx)(s.a,{id:"cherry",height:12,width:12,fill:"transparent",stroke:"#232493",strokeWidth:1}),Object(r.jsx)(c.a,{id:"navy",height:60,width:60,radius:10,fill:"white",complement:!0}),Object(r.jsx)(c.a,{complement:!0,id:"circles",height:60,width:60,radius:10,fill:"transparent"}),Object(r.jsxs)("g",{onClick:h,onTouchStart:h,children:[Object(r.jsx)("rect",{x:0,y:0,width:n,height:t,fill:b,rx:14}),Object(r.jsx)(i.a,{data:p,keys:v,offset:"wiggle",color:O,x:function(e,n){var t;return null!==(t=y(n))&&void 0!==t?t:0},y0:j,y1:w,children:function(e){var n=e.stacks,t=e.path;return n.map((function(e){var n=t(e)||"",a=u?Object(d.useSpring)({pathString:n}):{pathString:n},i=O(e.key),c=x(e.key);return Object(r.jsxs)("g",{children:[Object(r.jsx)(d.animated.path,{d:a.pathString,fill:i}),Object(r.jsx)(d.animated.path,{d:a.pathString,fill:"url(#".concat(c,")")})]},"series-".concat(e.key))}))}})]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-streamgraph/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-streamgraph/Example.tsx#Example"})}catch(R){}},Zbhd:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("PB0s"),a=t("XAd9"),i=t("Cyas"),c=t("VBI3");function s(e,n,t,s){var o,u=Object(r.c)(e,n,t);switch((s=Object(a.a)(null==s?",f":s)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(n));return null!=s.precision||isNaN(o=function(e,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(e)))}(u,l))||(s.precision=o),Object(c.b)(s,l);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(o=function(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Object(i.a)(n)-Object(i.a)(e))+1}(u,Math.max(Math.abs(e),Math.abs(n))))||(s.precision=o-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(o=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(u))||(s.precision=o-2*("%"===s.type))}return Object(c.a)(s)}},dGDr:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return m})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return b}));var r=t("mBAT"),a=t("KdQ8"),i=t("+pY8"),c=t("lg8u"),s=t("FVKn"),o=t("uvDt"),u=t("1Wmu"),l=t("oWfS"),d=t("Vi0D");function f(e){var n=void 0===e?{}:e,t=n.innerRadius,a=n.outerRadius,i=n.cornerRadius,c=n.startAngle,s=n.endAngle,o=n.padAngle,l=n.padRadius,d=Object(r.a)();return null!=t&&Object(u.a)(d.innerRadius,t),null!=a&&Object(u.a)(d.outerRadius,a),null!=i&&Object(u.a)(d.cornerRadius,i),null!=c&&Object(u.a)(d.startAngle,c),null!=s&&Object(u.a)(d.endAngle,s),null!=o&&Object(u.a)(d.padAngle,o),null!=l&&Object(u.a)(d.padRadius,l),d}function h(e){var n=void 0===e?{}:e,t=n.x,r=n.x0,i=n.x1,c=n.y,s=n.y0,o=n.y1,l=n.defined,d=n.curve,f=Object(a.a)();return t&&Object(u.a)(f.x,t),r&&Object(u.a)(f.x0,r),i&&Object(u.a)(f.x1,i),c&&Object(u.a)(f.y,c),s&&Object(u.a)(f.y0,s),o&&Object(u.a)(f.y1,o),l&&f.defined(l),d&&f.curve(d),f}function p(e){var n=void 0===e?{}:e,t=n.x,r=n.y,a=n.defined,c=n.curve,s=Object(i.a)();return t&&Object(u.a)(s.x,t),r&&Object(u.a)(s.y,r),a&&s.defined(a),c&&s.curve(c),s}function m(e){var n=void 0===e?{}:e,t=n.startAngle,r=n.endAngle,a=n.padAngle,i=n.value,s=n.sort,o=n.sortValues,l=Object(c.a)();return(null===s||null!=s)&&l.sort(s),(null===o||null!=o)&&l.sortValues(o),null!=i&&l.value(i),null!=a&&Object(u.a)(l.padAngle,a),null!=t&&Object(u.a)(l.startAngle,t),null!=r&&Object(u.a)(l.endAngle,r),l}function g(e){var n=void 0===e?{}:e,t=n.angle,r=n.radius,a=n.defined,i=n.curve,c=Object(s.a)();return t&&Object(u.a)(c.angle,t),r&&Object(u.a)(c.radius,r),a&&c.defined(a),i&&c.curve(i),c}function b(e){var n=e.keys,t=e.value,r=e.order,a=e.offset,i=Object(o.a)();return n&&i.keys(n),t&&Object(u.a)(i.value,t),r&&i.order(Object(l.c)(r)),a&&i.offset(Object(d.c)(a)),i}},dKJj:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),c=t.n(i),s=t("O94r"),o=t.n(s),u=t("VFFr");function l(e){var n,t,r=e.id,a=e.width,i=e.height,s=e.radius,l=void 0===s?2:s,d=e.fill,f=e.stroke,h=e.strokeWidth,p=e.strokeDasharray,m=e.background,g=e.complement,b=void 0!==g&&g,v=e.className;return b&&(t=[[0,0],[0,i],[a,0],[a,i]]),c.a.createElement(u.a,{id:r,width:a,height:i},!!m&&c.a.createElement("rect",{width:a,height:i,fill:m}),c.a.createElement("circle",{className:o()("visx-pattern-circle",v),cx:a/2,cy:i/2,r:l,fill:d,stroke:f,strokeWidth:h,strokeDasharray:p}),null==(n=t)?void 0:n.map((function(e){var n=e[0],t=e[1];return c.a.createElement("circle",{key:r+"-complement-"+n+"-"+t,className:o()("visx-pattern-circle visx-pattern-circle-complement",v),cx:n,cy:t,r:l,fill:d,stroke:f,strokeWidth:h,strokeDasharray:p})})))}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,radius:a.a.number,fill:a.a.string,className:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.number,a.a.string]),complement:a.a.bool,background:a.a.string}},dkc1:function(e){e.exports=JSON.parse('{"name":"@visx/demo-streamgraph","description":"Standalone visx streamgraph demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-array":"^2.0.0","@types/react":"^17","@types/react-dom":"^17","@visx/mock-data":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","react-spring":"^9.2.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","streamgraph","react-spring"]}')},oWfS:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return l}));var r=t("Zx3a"),a=t("c6zU"),i=t("yU24"),c=t("V+6I"),s=t("NKRu"),o={ascending:r.a,descending:a.a,insideout:i.a,none:c.a,reverse:s.a},u=Object.keys(o);function l(e){return e&&o[e]||o.none}},rt8E:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamgraph",function(){return t("RD/X")}])},"uKU/":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return o}));var r=t("PB0s"),a=t("2+fR"),i=t("W1cA"),c=t("Zbhd");function s(e){var n=e.domain;return e.ticks=function(e){var t=n();return Object(r.a)(t[0],t[t.length-1],null==e?10:e)},e.tickFormat=function(e,t){var r=n();return Object(c.a)(r[0],r[r.length-1],null==e?10:e,t)},e.nice=function(t){null==t&&(t=10);var a,i,c=n(),s=0,o=c.length-1,u=c[s],l=c[o],d=10;for(l<u&&(i=u,u=l,l=i,i=s,s=o,o=i);d-- >0;){if((i=Object(r.b)(u,l,t))===a)return c[s]=u,c[o]=l,n(c);if(i>0)u=Math.floor(u/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,l=Math.floor(l*i)/i}a=i}return e},e}function o(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,o())},i.b.apply(e,arguments),s(e)}},ue4z:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"e",(function(){return o})),t.d(n,"f",(function(){return d}));var r=function(e,n){return e<n?-1:e>n?1:e>=n?0:NaN},a=function(e){var n;return 1===e.length&&(n=e,e=function(e,t){return r(n(e),t)}),{left:function(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;e(n[i],t)<0?r=i+1:a=i}return r},right:function(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;e(n[i],t)>0?a=i:r=i+1}return r}}};var i=a(r);i.right,i.left;var c=function(e,n){var t,r,a,i=e.length,c=-1;if(null==n){for(;++c<i;)if(null!=(t=e[c])&&t>=t)for(r=a=t;++c<i;)null!=(t=e[c])&&(r>t&&(r=t),a<t&&(a=t))}else for(;++c<i;)if(null!=(t=n(e[c],c,e))&&t>=t)for(r=a=t;++c<i;)null!=(t=n(e[c],c,e))&&(r>t&&(r=t),a<t&&(a=t));return[r,a]},s=Array.prototype,o=(s.slice,s.map,function(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=0|Math.max(0,Math.ceil((n-e)/t)),i=new Array(a);++r<a;)i[r]=e+r*t;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var u=function(e,n){var t,r,a=e.length,i=-1;if(null==n){for(;++i<a;)if(null!=(t=e[i])&&t>=t)for(r=t;++i<a;)null!=(t=e[i])&&t>r&&(r=t)}else for(;++i<a;)if(null!=(t=n(e[i],i,e))&&t>=t)for(r=t;++i<a;)null!=(t=n(e[i],i,e))&&t>r&&(r=t);return r},l=function(e){for(var n,t,r,a=e.length,i=-1,c=0;++i<a;)c+=e[i].length;for(t=new Array(c);--a>=0;)for(n=(r=e[a]).length;--n>=0;)t[--c]=r[n];return t},d=function(e){if(!(a=e.length))return[];for(var n=-1,t=function(e,n){var t,r,a=e.length,i=-1;if(null==n){for(;++i<a;)if(null!=(t=e[i])&&t>=t)for(r=t;++i<a;)null!=(t=e[i])&&r>t&&(r=t)}else for(;++i<a;)if(null!=(t=n(e[i],i,e))&&t>=t)for(r=t;++i<a;)null!=(t=n(e[i],i,e))&&r>t&&(r=t);return r}(e,f),r=new Array(t);++n<t;)for(var a,i=-1,c=r[n]=new Array(a);++i<a;)c[i]=e[i][n];return r};function f(e){return e.length}}},[["rt8E",0,2,1,3,4,5,6,7,14]]]);