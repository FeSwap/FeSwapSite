(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[3781],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return k}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||o;return n?i.createElement(m,a(a({ref:e},c),{},{components:n})):i.createElement(m,a({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(9756),r=n(7294),o=n(3727),a=n(2263),l=n(3919),u=n(412),s=(0,r.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780);var d=function(t){var e,n,d=t.isNavLink,k=t.to,m=t.href,f=t.activeClassName,g=t.isActive,v=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,b=void 0===h||h,w=(0,i.Z)(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,a.Z)().siteConfig,N=y.trailingSlash,M=y.baseUrl,S=(0,c.C)().withBaseUrl,O=(0,r.useContext)(s),E=k||m,T=(0,l.Z)(E),W=null==E?void 0:E.replace("pathname://",""),_=void 0!==W?(n=W,b&&function(t){return t.startsWith("/")}(n)?S(n):n):void 0;_&&T&&(_=(0,p.applyTrailingSlash)(_,{trailingSlash:N,baseUrl:M}));var x,C=(0,r.useRef)(!1),q=d?o.OL:o.rU,F=u.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!F&&T&&null!=_&&window.docusaurus.prefetch(_),function(){F&&x&&x.disconnect()}}),[_,F,T]);var G=null!==(e=null==_?void 0:_.startsWith("#"))&&void 0!==e&&e,H=!_||!T||G;return _&&T&&!G&&!v&&O.collectLink(_),H?r.createElement("a",Object.assign({href:_},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(q,Object.assign({},w,{onMouseEnter:function(){C.current||null==_||(window.docusaurus.preload(_),C.current=!0)},innerRef:function(t){var e,n;F&&t&&T&&(e=t,n=function(){null!=_&&window.docusaurus.prefetch(_)},(x=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(x.unobserve(e),x.disconnect(),n())}))}))).observe(e))},to:_||""},d&&{isActive:g,activeClassName:f}))}},3919:function(t,e,n){"use strict";function i(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!i(t)}n.d(e,{b:function(){return i},Z:function(){return r}})},4996:function(t,e,n){"use strict";n.d(e,{C:function(){return o},Z:function(){return a}});var i=n(2263),r=n(3919);function o(){var t=(0,i.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,l=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+c:c}(o,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},8802:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e.trailingSlash,i=e.baseUrl;if(t.startsWith("#"))return t;if(void 0===n)return t;var r,o=t.split(/[#?]/)[0],a="/"===o||o===i?o:(r=o,n?function(t){return t.endsWith("/")?t:t+"/"}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));return t.replace(o,a)}},8780:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var o=n(9964);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return i(o).default}})},9964:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},9084:function(t,e,n){"use strict";n.d(e,{Q:function(){return l}});var i=n(7294),r="buttonsJump_Eb8L",o=n(6742),a=n(4996);function l(t){var e=t.url,n=t.link;return i.createElement("div",{align:"center",style:{paddingBottom:"25px",verticalAlign:"middle"}},i.createElement(o.Z,{className:r,to:(0,a.Z)(""+e)},i.createElement("text",{style:{textalign:"center"}},null!=n?n:"Jump")))}},6326:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(7294),r={GuidanceWindowWrappper:"GuidanceWindowWrappper_QY6l",row:"row_PgF1",buttons:"buttons_2e51",right:"right_3SLG",dot:"dot_1lvV",bar:"bar_1nFw",GuidanceInfoBody:"GuidanceInfoBody_2jY9",IconBody:"IconBody_IMnT"},o=n(4996);var a=function(t){var e=t.children,n=t.imageUrl,a=(0,o.Z)(n);return i.createElement("div",{className:r.GuidanceWindowWrappper},a?i.createElement("div",{className:"text--center"},i.createElement("img",{className:r.featureImage,src:a})):i.createElement("div",null),i.createElement("div",{className:r.GuidanceInfoBody},e))}},6522:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=n(9084),l=n(6326),u={id:"mining",title:"FeSwap Mining",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to mine FESW"},s=void 0,c={unversionedId:"How/mining",id:"How/mining",isDocsHomePage:!1,title:"FeSwap Mining",description:"FeSwap Mining",source:"@site/docs/How/Mining.md",sourceDirName:"How",slug:"/How/mining",permalink:"/docs/How/mining",editUrl:"https://github.com/feswap/docs/How/Mining.md",version:"current",frontMatter:{id:"mining",title:"FeSwap Mining",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to mine FESW"},sidebar:"FeSwapSidebar",previous:{title:"How to add liquidity",permalink:"/docs/How/liquidity"},next:{title:"How to bid FeSwap NFT",permalink:"/docs/How/nft"}},p=[{value:'<span className="title"> Guidance to Mining FESW </span>',id:"guidance-to-mining-fesw",children:[]}],d={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{color:"#00A4B8"}},(0,o.kt)("h1",null," FeSwap Mining ")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"FESW is the governance token of FeSwap community. With FESW token, you are able to submit FeSwap governance proposals and vote on all these proposals. ",(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"By depositing your liquidity tokens, you are able to harvest some amount of FESW token, which is propotional to your liquidity token amount and depositing duration. ",(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"ETH\ud83d\udd17WBTC, ETH\ud83d\udd17USDT, ETH\ud83d\udd17FESW are the 3 token pair pools available to mining FESW in this phase. Later on new pools could be activated based on community proposals."),(0,o.kt)(a.Q,{url:"https://app.feswap.io/#/fesw",link:"Start to Mining FESW \u2197",mdxType:"LinkButton"}),(0,o.kt)("div",{style:{height:"60px"}}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"guidance-to-mining-fesw"},(0,o.kt)("span",{className:"title"}," Guidance to Mining FESW ")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"** In following guidance, assuming you are using MetaMask wallet. ")),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining01.png",mdxType:"GuidanceWindow"},(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 1:")," Connect Metamask wallet. ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Step 2:")," Click ",(0,o.kt)("strong",null,'"Mining"')," Menu.",(0,o.kt)("br",null),"Now the mining pools are displayed as the left window.  ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Step 3:")," Click the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Mine"'))," in each pool to start mining FESW.")),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining02.png",mdxType:"GuidanceWindow"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"In this window, the mining pool overall information are given, including the total deposited liquidity, and the mining output per day."),(0,o.kt)("li",{parentName:"ul"},"Your liquidity amounts available to deposit and the liquidity amounts already deposited for mining are displayed here."),(0,o.kt)("li",{parentName:"ul"},"The liquidity tokens of two sub-pools are separate and could be a little bit different in value, but they are counted same for liquidity mining. ")))),(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 4:")," Click the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Deposit FesSwap Liquidity Tokens"')),".",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining03.png",mdxType:"GuidanceWindow"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"In this ",(0,o.kt)("strong",null,'"Deposit"')," window, you need to input the liquidity amount to deposit for mining. Your available liquidity is displayed above the sub-pool icons."))))),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining04.png",mdxType:"GuidanceWindow"},(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 5:")," Input the amount of the two liquidity tokens you want to deposit for mining. ",(0,o.kt)("br",null)),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You could click ",(0,o.kt)("inlineCode",{parentName:"li"},"MAX")," button to auto-fill all your liquidity to the input area. ",(0,o.kt)("br",null)))),(0,o.kt)("span",null,(0,o.kt)("br",null),(0,o.kt)("strong",null,"Step 6:")," Click the two buttons ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Approve ..."'))," to apppove the mining contract to transfer your liquidity tokens."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"There are two kinds of approving: ",(0,o.kt)("strong",null,'"Overall Approve"')," and ",(0,o.kt)("strong",null,'"Transaction Approve"'),". ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",null,'"Overall Approve":')," Once approved, all next mining deposits are approved.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",null,'"Transaction Approve":')," Just approve to transfer the amount of current transaction, the approve signature is sent together with the mining transaction itself.")))),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining05.png",mdxType:"GuidanceWindow"},(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Once you get the approve signature from your wallet, the ",(0,o.kt)("strong",null,'"Deposit"')," window loosk like the left one, in which the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Deposit"'))," is clickable now."))),(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 7:")," Click the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Deposit"'))," to start your mining.")),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining06.png",mdxType:"GuidanceWindow"},(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 8:")," In Metamask wallet, check the transaction content, sign and broadcast the tranaction.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Step 9:")," Waiting the transaction to be confirmed in the ETH network.",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining07.png",mdxType:"GuidanceWindow"},(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},'You could toggle the approve mode by changing the "Overall Approve" setting. ',(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},'If "Overall Approve" is on, you need to approve your liquidity token tranfer on ETH network before starting mining.',(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},'The window looks like the left while "Overall Approve" is on.',(0,o.kt)("br",null)))),(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 6A:")," Click the two buttons ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Approve ..."'))," to apppove your liquidity token transfer on ETH network. ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{paddingLeft:"1em"}}," \u25cf This step takes some longer time as it is interacting with the ETH blockchain."))),(0,o.kt)("hr",null),(0,o.kt)(l.Z,{imageUrl:"img/Guidance/Mining/Mining08.png",mdxType:"GuidanceWindow"},(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Once you have approved the transfer, the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Deposit"'))," is clickable now."))),(0,o.kt)("span",null,(0,o.kt)("strong",null,"Step 7A:")," Click the button ",(0,o.kt)("span",{style:{color:"#ff007a"}},(0,o.kt)("strong",null,'"Deposit"'))," to start your mining.",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("hr",null))}k.isMDXComponent=!0}}]);