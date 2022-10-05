"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[2508],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(v,i(i({ref:t},u),{},{components:n})):o.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:8},l="Glossary",c={unversionedId:"governance/Glossary",id:"governance/Glossary",isDocsHomePage:!1,title:"Glossary",description:"1INCH",source:"@site/docs/governance/Glossary.mdx",sourceDirName:"governance",slug:"/governance/Glossary",permalink:"/docs/governance/Glossary",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/governance/Glossary.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"1IPs",permalink:"/docs/governance/1IPs"},next:{title:"How to implement the wallet auto-connect",permalink:"/docs/wallet-autoconnect/wallet-auto-connect"}},u=[{value:"1INCH",id:"1inch",children:[]},{value:"1IP",id:"1ip",children:[]},{value:"1RC",id:"1rc",children:[]},{value:"DAO",id:"dao",children:[]},{value:"Delegation",id:"delegation",children:[]},{value:"Docusaurus",id:"docusaurus",children:[]},{value:"Off-chain",id:"off-chain",children:[]},{value:"On-chain",id:"on-chain",children:[]},{value:"Quorum",id:"quorum",children:[]},{value:"Snapshot",id:"snapshot",children:[]},{value:"Staking contract",id:"staking-contract",children:[]},{value:"Swap Surplus",id:"swap-surplus",children:[]},{value:"Timelock",id:"timelock",children:[]},{value:"Voting",id:"voting",children:[]},{value:"Voting Period",id:"voting-period",children:[]}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("h3",{id:"1inch"},"1INCH"),(0,a.kt)("p",null,"An ERC-20 token that is used to participate in the 1inch DAO governance process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"st1INCH:")," An ERC-20 which represents 1INCH staked with the 1inch protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"v1INCH:")," An ERC-20 which represents 1INCH tokens that are currently locked in the vesting contract. These tokens are not yet fully-vested and have reduced voting weight (20%) compared to st1INCH.")),(0,a.kt)("h3",{id:"1ip"},"1IP"),(0,a.kt)("p",null,"1inch Improvement Proposal, 1IP, is the title given to proposals that have reached the Phase 4 Snapshot vote. "),(0,a.kt)("h3",{id:"1rc"},"1RC"),(0,a.kt)("p",null,"1inch Request for Comment, 1RC, is the title given to formalized proposals. "),(0,a.kt)("h3",{id:"dao"},"DAO"),(0,a.kt)("p",null,"A decentralized autonomous organization."),(0,a.kt)("h3",{id:"delegation"},"Delegation"),(0,a.kt)("p",null,"st1INCH and v1INCH holders can delegate their voting rights to any address. Delegation does not lock the tokens, and the delegator has the power to revoke this delegation at any time. Vote delegation is an on-chain event."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delegator:")," The governance token holder that has delegated their voting power to another address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delegatee:")," The address that has been delegated voting power from any number of delegators.")),(0,a.kt)("h3",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("p",null,"The tool used to build 1inch DAO\u2019s documentation site. Docusaurus is similar to GitBook, however Docusaurus has an unencumbered free-use MIT license."),(0,a.kt)("h3",{id:"off-chain"},"Off-chain"),(0,a.kt)("p",null,"An event that does not occur on the blockchain. Off-chain events are gasless. "),(0,a.kt)("h3",{id:"on-chain"},"On-chain"),(0,a.kt)("p",null,"An event that is recorded and verified by the blockchain. All on-chain transactions incur fees paid to miners/validators."),(0,a.kt)("h3",{id:"quorum"},"Quorum"),(0,a.kt)("p",null,"In order for a snapshot vote to pass, it must achieve a quorum of 10 million 1INCH votes. The purpose of the quorum is to ensure adequate voter participation for all proposals passed."),(0,a.kt)("h3",{id:"snapshot"},"Snapshot"),(0,a.kt)("p",null,"Snapshot is the protocol that allows users to vote on proposals in a gasless fashion."),(0,a.kt)("h3",{id:"staking-contract"},"Staking contract"),(0,a.kt)("p",null,"The smart-contract that governance participants use to stake their 1INCH."),(0,a.kt)("h3",{id:"swap-surplus"},"Swap Surplus"),(0,a.kt)("p",null,"The Swap Surplus is generated by swap transactions when the executed price is slightly better than the price quoted."),(0,a.kt)("h3",{id:"timelock"},"Timelock"),(0,a.kt)("p",null,"All governance actions passed with the voting process will have a time delay of 72 hours before they are incorporated. This applies to funds spent from the DAO Treasury, and any change to the 1inch Protocol\u2019s smart contracts. "),(0,a.kt)("h3",{id:"voting"},"Voting"),(0,a.kt)("p",null,"Voting is the formal process of passing or failing 1IPs. Voting is done through Snapshot \u2014 gasless off-chain voting using the on-chain balances of st1INCH and v1INCH."),(0,a.kt)("h3",{id:"voting-period"},"Voting Period"),(0,a.kt)("p",null,"All Snapshot votes will have a voting period of seven days for 1inch DAO members to cast their vote."))}d.isMDXComponent=!0}}]);