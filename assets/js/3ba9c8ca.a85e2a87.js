"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5299],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49975:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},c="RevertReasonParser",l={unversionedId:"limit-order-protocol/smart-contract/libraries/RevertReasonParser",id:"limit-order-protocol/smart-contract/libraries/RevertReasonParser",isDocsHomePage:!1,title:"RevertReasonParser",description:"Library that allows to parse unsuccessful arbitrary calls revert reasons.",source:"@site/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser.md",sourceDirName:"limit-order-protocol/smart-contract/libraries",slug:"/limit-order-protocol/smart-contract/libraries/RevertReasonParser",permalink:"/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/smart-contract/libraries/RevertReasonParser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"libraries",permalink:"/docs/limit-order-protocol/smart-contract/libraries/README"},next:{title:"AggregatorMock",permalink:"/docs/limit-order-protocol/smart-contract/mocks/AggregatorMock"}},p=[{value:"Functions",id:"functions",children:[{value:"parse",id:"parse",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revertreasonparser"},"RevertReasonParser"),(0,o.kt)("p",null,"Library that allows to parse unsuccessful arbitrary calls revert reasons.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/control-structures.html#revert"},"https://solidity.readthedocs.io/en/latest/control-structures.html#revert")," for details.\nNote that we assume revert reason being abi-encoded as Error(string) so it may fail to parse reason\nif structured reverts appear in the future."),(0,o.kt)("p",null,"All unsuccessful parsings get encoded as Unknown(data) string"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"parse"},"parse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function parse(\n  bytes data,\n  string prefix\n) internal returns (string)\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"prefix")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0}}]);