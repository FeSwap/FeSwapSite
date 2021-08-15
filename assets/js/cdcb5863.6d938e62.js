(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[7133],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),o=n(7294),i=n(3727),a=n(2263),l=n(3919),s=n(412),u=(0,o.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780);var d=function(e){var t,n,d=e.isNavLink,m=e.to,f=e.href,h=e.activeClassName,v=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,b=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,a.Z)().siteConfig,S=y.trailingSlash,N=y.baseUrl,O=(0,c.C)().withBaseUrl,E=(0,o.useContext)(u),T=m||f,x=(0,l.Z)(T),C=null==T?void 0:T.replace("pathname://",""),F=void 0!==C?(n=C,w&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;F&&x&&(F=(0,p.applyTrailingSlash)(F,{trailingSlash:S,baseUrl:N}));var W,j=(0,o.useRef)(!1),_=d?i.OL:i.rU,B=s.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!B&&x&&null!=F&&window.docusaurus.prefetch(F),function(){B&&W&&W.disconnect()}}),[F,B,x]);var H=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,P=!F||!x||H;return F&&x&&!H&&!k&&E.collectLink(F),P?o.createElement("a",Object.assign({href:F},T&&!x&&{target:"_blank",rel:"noopener noreferrer"},b)):o.createElement(_,Object.assign({},b,{onMouseEnter:function(){j.current||null==F||(window.docusaurus.preload(F),j.current=!0)},innerRef:function(e){var t,n;B&&e&&x&&(t=e,n=function(){null!=F&&window.docusaurus.prefetch(F)},(W=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(W.unobserve(t),W.disconnect(),n())}))}))).observe(t))},to:F||""},d&&{isActive:v,activeClassName:h}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9084:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(7294),o="buttonsJump_Eb8L",i=n(6742),a=n(4996);function l(e){var t=e.url,n=e.link;return r.createElement("div",{align:"center",style:{paddingBottom:"25px",verticalAlign:"middle"}},r.createElement(i.Z,{className:o,to:(0,a.Z)(""+t)},r.createElement("text",{style:{textalign:"center"}},null!=n?n:"Jump")))}},6326:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o={GuidanceWindowWrappper:"GuidanceWindowWrappper_QY6l",row:"row_PgF1",buttons:"buttons_2e51",right:"right_3SLG",dot:"dot_1lvV",bar:"bar_1nFw",GuidanceInfoBody:"GuidanceInfoBody_2jY9",IconBody:"IconBody_IMnT"},i=n(4996);var a=function(e){var t=e.children,n=e.imageUrl,a=(0,i.Z)(n);return r.createElement("div",{className:o.GuidanceWindowWrappper},a?r.createElement("div",{className:"text--center"},r.createElement("img",{className:o.featureImage,src:a})):r.createElement("div",null),r.createElement("div",{className:o.GuidanceInfoBody},t))}},7251:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(9084),l=n(6326),s=n(4160),u={id:"sponsor",title:"FeSwap Sponsor",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to sponsor FeSwap"},c=void 0,p={unversionedId:"How/sponsor",id:"How/sponsor",isDocsHomePage:!1,title:"FeSwap Sponsor",description:"FeSwap Sponsor",source:"@site/docs/How/Sponsor.md",sourceDirName:"How",slug:"/How/sponsor",permalink:"/docs/How/sponsor",version:"current",frontMatter:{id:"sponsor",title:"FeSwap Sponsor",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to sponsor FeSwap"},sidebar:"FeSwapSidebar",previous:{title:"How to bid FeSwap NFT",permalink:"/docs/How/nft"},next:{title:"FESW DAO",permalink:"/docs/Contracts/fesw"}},d=[{value:'<span className="title"> Basics of Sponsoring </span>',id:"basics-of-sponsoring",children:[]},{value:'<span className="title"> Guidance to Sponsor FeSwap </span>',id:"guidance-to-sponsor-feswap",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{color:"#00A4B8"}},(0,i.kt)("h1",null," FeSwap Sponsor ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Sponsoring FeSwap is one of the ways to join in FeSwap community governance. ",(0,i.kt)("br",null)," "),(0,i.kt)("p",null,"By sponsoring FeSwap some amount of ETH, you could receive some propotional of FESW tokens. ",(0,i.kt)("br",null)," "),(0,i.kt)("p",null,"With these FESW tokens, you are able to submit FeSwap governance proposals and vote on all proposals submitted by community members."),(0,i.kt)(a.Q,{url:"https://app.feswap.io/#/sponsor",link:"Start to Sponsor FeSwap \u2197",mdxType:"LinkButton"}),(0,i.kt)("div",{style:{height:"60px"}}),(0,i.kt)("h2",{id:"basics-of-sponsoring"},(0,i.kt)("span",{className:"title"}," Basics of Sponsoring ")),(0,i.kt)("p",null,"The initial reward rate is 100,000 FESW/ETH, and the reward rate decreases linearly on the rate of 20 FESW per totally received ETH."),(0,i.kt)("p",null,"The total sponsor cap is 1000 ETH, maximum cap is 1001 ETH. Totally 100,000,000 FESW are filled into ",(0,i.kt)("inlineCode",{parentName:"p"},"FeswSponsor")," contract. If the sponsor cap is reached, all the left FESW will be burned, otherwise left FESW will be claimed back."),(0,i.kt)("p",null,"The total duration receiving sponsor is 30 days, starting from the time specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"FeswSponsor")," contract while it is deployed.  "),(0,i.kt)(a.Q,{url:"docs/Contracts/sponsor",link:"Learn more about FeSwap Sponsor \ud83d\udc48",mdxType:"LinkButton"}),(0,i.kt)("div",{style:{height:"60px"}}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"guidance-to-sponsor-feswap"},(0,i.kt)("span",{className:"title"}," Guidance to Sponsor FeSwap ")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"** In following guidance, assuming you are using MetaMask wallet. ")),(0,i.kt)(l.Z,{imageUrl:"img/Guidance/Sponsor/Sponsor01.png",mdxType:"GuidanceWindow"},(0,i.kt)("span",null,(0,i.kt)("strong",null,"Step 1:")," Connect Metamask wallet. ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 2:")," Click ",(0,i.kt)("strong",null,'"Sponsor ',(0,i.kt)("span",{style:{color:"red"}},"\u2764"),'"')," Menu.",(0,i.kt)("br",null),"Now ",(0,i.kt)("strong",null,'"Sponsor Reminding"')," window is displayed.  ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Please read the remindings in detail."),(0,i.kt)("li",{parentName:"ul"},"If you do not understand the remindings very well, and not very sure that you want to sponsor FeSwap,\nplease select ",(0,i.kt)("strong",{style:{color:"Brown"}},'"NOT Sponsor"'),", which is the default selection."),(0,i.kt)("li",{parentName:"ul"},"This windows is displayed each time you enter ",(0,i.kt)("strong",null,'"Sponsor"')," page. ")))))),(0,i.kt)("hr",null),(0,i.kt)(l.Z,{imageUrl:"img/Guidance/Sponsor/Sponsor02A.png",mdxType:"GuidanceWindow"},(0,i.kt)("span",null,(0,i.kt)("strong",null,"Step 3A:")," If ",(0,i.kt)("strong",null,'"NOT Sponsor"')," is selected, the left window is shown, in which the button ",(0,i.kt)("strong",null,'"NOT Sponsor"')," is not clickable, but the user can still input sponsor amount to have a look at the giveaway FESW amount and rate. ",(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("hr",null),(0,i.kt)(l.Z,{imageUrl:"img/Guidance/Sponsor/Sponsor02B.png",mdxType:"GuidanceWindow"},(0,i.kt)("span",null,(0,i.kt)("strong",null,"Step 3:")," Select the button ",(0,i.kt)("strong",null,'"I will Sponsor"'),", the ",(0,i.kt)("strong",null,'"Sponsor"')," window is displayed. ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 4:")," Input the amount you desire to sponsor.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 5:")," Click the button ",(0,i.kt)("strong",null,'"Sponsor"'),".",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tips")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If input the amount of FESW you desire to get, the corresponding ETH amount could be given."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)(s.Z,{size:"18",style:{width:"2em",color:"Tomato",backgroundColor:"LightGray",borderRadius:"2px"},mdxType:"RefreshCcw"}),"\nto toggle the sponsor giveaway rate."))))),(0,i.kt)("hr",null),(0,i.kt)(l.Z,{imageUrl:"img/Guidance/Sponsor/Sponsor03.png",mdxType:"GuidanceWindow"},(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Sponsor")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If your sponsor amount is more than 5ETH, special reminding window will be displayed as the left."))))),(0,i.kt)("hr",null),(0,i.kt)(l.Z,{imageUrl:"img/Guidance/Sponsor/Sponsor04.png",mdxType:"GuidanceWindow"},(0,i.kt)("span",null,(0,i.kt)("strong",null,"Step 6:")," In the confirm window, the sponsored ETH amount and the FESW giveway amount are prompted. Check these information, and then click ",(0,i.kt)("strong",null,'"Confirm Sponsor"')," to connect wallet and sign the transaction.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 7:")," In Metamask wallet, check the transaction content, sign and broadcast the tranaction.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 8:")," Waiting the transaction to be confirmed in the ETH network.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Step 9:")," Check your sponsor transaction and the received FESW amount within ETH network explorer.",(0,i.kt)("br",null))),(0,i.kt)("hr",null))}f.isMDXComponent=!0},4160:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,s=void 0===i?24:i,u=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"1 4 1 10 7 10"}),r.createElement("polyline",{points:"23 20 23 14 17 14"}),r.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="RefreshCcw",t.Z=s}}]);