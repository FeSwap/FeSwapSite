(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[3533],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(9756),i=n(7294),o=n(3727),a=n(2263),u=n(3919),l=n(412),c=(0,i.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780);var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,a.Z)().siteConfig,O=k.trailingSlash,x=k.baseUrl,T=(0,s.C)().withBaseUrl,j=(0,i.useContext)(c),_=d||m,E=(0,u.Z)(_),L=null==_?void 0:_.replace("pathname://",""),S=void 0!==L?(n=L,h&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0;S&&E&&(S=(0,f.applyTrailingSlash)(S,{trailingSlash:O,baseUrl:x}));var P,C=(0,i.useRef)(!1),U=p?o.OL:o.rU,B=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!B&&E&&null!=S&&window.docusaurus.prefetch(S),function(){B&&P&&P.disconnect()}}),[S,B,E]);var N=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,Z=!S||!E||N;return S&&E&&!N&&!g&&j.collectLink(S),Z?i.createElement("a",Object.assign({href:S},_&&!E&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(U,Object.assign({},w,{onMouseEnter:function(){C.current||null==S||(window.docusaurus.preload(S),C.current=!0)},innerRef:function(e){var t,n;B&&e&&E&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:S||""},p&&{isActive:b,activeClassName:v}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9084:function(e,t,n){"use strict";n.d(t,{Q:function(){return u}});var r=n(7294),i="buttonsJump_Eb8L",o=n(6742),a=n(4996);function u(e){var t=e.url,n=e.link;return r.createElement("div",{align:"center",style:{paddingBottom:"25px",verticalAlign:"middle"}},r.createElement(o.Z,{className:i,to:(0,a.Z)(""+t)},r.createElement("text",{style:{textalign:"center"}},null!=n?n:"Jump")))}},8736:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(9084),u={slug:"21-08-05",title:"User Guidance Available",hide_table_of_contents:!1,author:"Derik Lu",author_title:"ldru@163.com",author_url:"https://github.com/FeSwap",tags:["Feswap","Swap","Liquidity","NFT","Liquidity Ming","Guidance"]},l=void 0,c={permalink:"/cn/blog/21-08-05",editUrl:"https://github.com/feswap/blog/2021-08-05_guidance_available.mdx",source:"@site/blog/2021-08-05_guidance_available.mdx",title:"User Guidance Available",description:"Decentralized exchange is some complicated from the user experience standpoint.",date:"2021-08-05T00:00:00.000Z",formattedDate:"August 5, 2021",tags:[{label:"Feswap",permalink:"/cn/blog/tags/feswap"},{label:"Swap",permalink:"/cn/blog/tags/swap"},{label:"Liquidity",permalink:"/cn/blog/tags/liquidity"},{label:"NFT",permalink:"/cn/blog/tags/nft"},{label:"Liquidity Ming",permalink:"/cn/blog/tags/liquidity-ming"},{label:"Guidance",permalink:"/cn/blog/tags/guidance"}],readingTime:.44,truncated:!1,nextItem:{title:"FeSwap Released for Test",permalink:"/cn/blog/21-08-01"}},s=[],f={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Decentralized exchange is some complicated from the user experience standpoint. "),(0,o.kt)("p",null,"Now FeSwap has prepared some step-by-step guidance to help users get familiar with Feswap application. "),(0,o.kt)("p",null,"While you get confused and need some help, please refer to the guidance following:   "),(0,o.kt)(a.Q,{url:"Swap",link:"How to swap tokens \ud83d\udc48",mdxType:"LinkButton"}),(0,o.kt)(a.Q,{url:"Liquidity",link:"How to provide liquidity \ud83d\udc48",mdxType:"LinkButton"}),(0,o.kt)(a.Q,{url:"Mining",link:"How to mine FESW tokens \ud83d\udc48",mdxType:"LinkButton"}),(0,o.kt)(a.Q,{url:"NFT",link:"How to bid token pair NFT \ud83d\udc48",mdxType:"LinkButton"}),(0,o.kt)(a.Q,{url:"Sponsor",link:"How to sponsor FeSwap \ud83d\udc48",mdxType:"LinkButton"}))}p.isMDXComponent=!0}}]);