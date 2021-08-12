(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[7225],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=s(n),k=o,y=p["".concat(u,".").concat(k)]||p[k]||c[k]||r;return n?i.createElement(y,l(l({ref:e},d),{},{components:n})):i.createElement(y,l({ref:e},d))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=p;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(9756),o=n(7294),r=n(3727),l=n(2263),a=n(3919),u=n(412),s=(0,o.createContext)({collectLink:function(){}}),d=n(4996),c=n(8780);var p=function(t){var e,n,p=t.isNavLink,k=t.to,y=t.href,f=t.activeClassName,m=t.isActive,h=t["data-noBrokenLinkCheck"],b=t.autoAddBaseUrl,g=void 0===b||b,w=(0,i.Z)(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=(0,l.Z)().siteConfig,q=v.trailingSlash,S=v.baseUrl,N=(0,d.C)().withBaseUrl,O=(0,o.useContext)(s),L=k||y,C=(0,a.Z)(L),E=null==L?void 0:L.replace("pathname://",""),x=void 0!==E?(n=E,g&&function(t){return t.startsWith("/")}(n)?N(n):n):void 0;x&&C&&(x=(0,c.applyTrailingSlash)(x,{trailingSlash:q,baseUrl:S}));var T,j=(0,o.useRef)(!1),_=p?r.OL:r.rU,W=u.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!W&&C&&null!=x&&window.docusaurus.prefetch(x),function(){W&&T&&T.disconnect()}}),[x,W,C]);var F=null!==(e=null==x?void 0:x.startsWith("#"))&&void 0!==e&&e,P=!x||!C||F;return x&&C&&!F&&!h&&O.collectLink(x),P?o.createElement("a",Object.assign({href:x},L&&!C&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(_,Object.assign({},w,{onMouseEnter:function(){j.current||null==x||(window.docusaurus.preload(x),j.current=!0)},innerRef:function(t){var e,n;W&&t&&C&&(e=t,n=function(){null!=x&&window.docusaurus.prefetch(x)},(T=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(T.unobserve(e),T.disconnect(),n())}))}))).observe(e))},to:x||""},p&&{isActive:m,activeClassName:f}))}},3919:function(t,e,n){"use strict";function i(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!i(t)}n.d(e,{b:function(){return i},Z:function(){return o}})},4996:function(t,e,n){"use strict";n.d(e,{C:function(){return r},Z:function(){return l}});var i=n(2263),o=n(3919);function r(){var t=(0,i.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,i){var r=void 0===i?{}:i,l=r.forcePrependBaseUrl,a=void 0!==l&&l,u=r.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return e+n;var d=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+d:d}(r,n,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},8802:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e.trailingSlash,i=e.baseUrl;if(t.startsWith("#"))return t;if(void 0===n)return t;var o,r=t.split(/[#?]/)[0],l="/"===r||r===i?r:(o=r,n?function(t){return t.endsWith("/")?t:t+"/"}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));return t.replace(r,l)}},8780:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return i(o).default}});var r=n(9964);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return i(r).default}})},9964:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},9084:function(t,e,n){"use strict";n.d(e,{Q:function(){return a}});var i=n(7294),o="buttonsJump_Eb8L",r=n(6742),l=n(4996);function a(t){var e=t.url,n=t.link;return i.createElement("div",{align:"center",style:{paddingBottom:"25px",verticalAlign:"middle"}},i.createElement(r.Z,{className:o,to:(0,l.Z)(""+e)},i.createElement("text",{style:{textalign:"center"}},null!=n?n:"Jump")))}},6326:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(7294),o={GuidanceWindowWrappper:"GuidanceWindowWrappper_QY6l",row:"row_PgF1",buttons:"buttons_2e51",right:"right_3SLG",dot:"dot_1lvV",bar:"bar_1nFw",GuidanceInfoBody:"GuidanceInfoBody_2jY9",IconBody:"IconBody_IMnT"},r=n(4996);var l=function(t){var e=t.children,n=t.imageUrl,l=(0,r.Z)(n);return i.createElement("div",{className:o.GuidanceWindowWrappper},l?i.createElement("div",{className:"text--center"},i.createElement("img",{className:o.featureImage,src:l})):i.createElement("div",null),i.createElement("div",{className:o.GuidanceInfoBody},e))}},5715:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return y}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),l=n(9084),a=n(6326),u=n(7434),s={id:"liquidity",title:"FeSwap Liquidity",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to add liquidity"},d=void 0,c={unversionedId:"How/liquidity",id:"How/liquidity",isDocsHomePage:!1,title:"FeSwap Liquidity",description:"FeSwap Liquidity",source:"@site/docs/How/Liquidity.md",sourceDirName:"How",slug:"/How/liquidity",permalink:"/cn/docs/How/liquidity",editUrl:"https://github.com/feswap/docs/How/Liquidity.md",version:"current",frontMatter:{id:"liquidity",title:"FeSwap Liquidity",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"How to add liquidity"},sidebar:"FeSwapSidebar",previous:{title:"How to swap token",permalink:"/cn/docs/How/swap"},next:{title:"How to mine FESW",permalink:"/cn/docs/How/mining"}},p=[{value:'<span className="title"> Add/Remove Liquidity </span>',id:"addremove-liquidity",children:[]},{value:'<span className="title"> Liquidity Mining </span>',id:"liquidity-mining",children:[]},{value:'<span className="title"> Guidance to Add Liquidity </span>',id:"guidance-to-add-liquidity",children:[]},{value:'<span className="title" > Guidance to Remove Liquidity </span>',id:"guidance-to-remove-liquidity",children:[]}],k={toc:p};function y(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{color:"#00A4B8"}},(0,r.kt)("h1",null," FeSwap Liquidity ")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"By adding liquidity to the token pair liquidity pool, you could make profits from the token swap transactions."),(0,r.kt)("p",null,"FeSwap swap protocol charge no exchange fee to the swap tranactions, but FeSwap is still able to make competitive profits for its liquidity providers thanks to a creative internal arbitrage mechanism."),(0,r.kt)("p",null,"FeSwap token pairs are controlled somewhat by their corresponding owners, they can configure the setting of the token pair swapping, and could further influence the profit level of the token pair.   "),(0,r.kt)(l.Q,{url:"docs/FreeSwap/abstract",link:"Learn more about FeSwap Protocol \ud83d\udc48",mdxType:"LinkButton"}),(0,r.kt)("div",{style:{height:"60px"}}),(0,r.kt)("h2",{id:"addremove-liquidity"},(0,r.kt)("span",{className:"title"}," Add/Remove Liquidity ")),(0,r.kt)("p",null,"Adding and removing liquidity are a little bit complex. FeSwap application provides friendly interface to interact with the token pair liquidity pools running on various EVM compliant blockchains, and further help users to manage their liquidity."),(0,r.kt)(l.Q,{url:"https://app.feswap.io/#/liquidity",link:"Start to Add/Remove Liquidity \u2197",mdxType:"LinkButton"}),(0,r.kt)("div",{style:{height:"60px"}}),(0,r.kt)("h2",{id:"liquidity-mining"},(0,r.kt)("span",{className:"title"}," Liquidity Mining ")),(0,r.kt)("p",null,"You could deposit your liquidity tokens to specific contract to mine FESW tokens, which represent the governance right of FeSwap community.  "),(0,r.kt)("p",null,"Only a very few of token pair liquidity tokens support FESW mining. Periodically FeSwap community could vote on proposals to add new liquidty tokens to the list supporting FESW mining. "),(0,r.kt)("p",null,"Right now, 3 liquidty tokens can be deposited to mine FESW token, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ETH \ud83d\udd17 WBTC"),(0,r.kt)("li",{parentName:"ul"},"ETH \ud83d\udd17 USDT"),(0,r.kt)("li",{parentName:"ul"},"ETH \ud83d\udd17 FESW")),(0,r.kt)(l.Q,{url:"https://app.feswap.io/#/fesw",link:"Start to ming FESW \u2197",mdxType:"LinkButton"}),(0,r.kt)("div",{style:{height:"60px"}}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"guidance-to-add-liquidity"},(0,r.kt)("span",{className:"title"}," Guidance to Add Liquidity ")),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Liquidity/Liquidity01.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 1:")," Connect Metamask wallet. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 2:")," Click ",(0,r.kt)("strong",null,'"Liquidity"')," Menu.",(0,r.kt)("br",null),"Now come to your liquidity status window similar as displayed.  ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 3:")," Click ",(0,r.kt)("strong",null,'"Add Liquidity"')," button.",(0,r.kt)("br",null),"  ",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("hr",null),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Liquidity/Liquidity02.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 4:")," Select the two tokens of the token pair you want to add liquidity, which are named ",(0,r.kt)("strong",null,'"Token A"')," and ",(0,r.kt)("strong",null,'"Token B"'),". ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If the token pair of the two selected tokens have not been created, the button ",(0,r.kt)("inlineCode",{parentName:"li"},"Pair Not Created")," will be shown.",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FeSwap token swap pair cannot be created at the first time it is added liquidity, instead it can only be explicitly createdly by its owner. To be the owner of any token swap pair, you need to bid ",(0,r.kt)("a",{parentName:"li",href:"./NFT"},"token pair NFT \ud83d\udc48"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},"If the token pair is created, the current token prices and your pool share within the token pair\nwill be shown in the area ",(0,r.kt)("inlineCode",{parentName:"li"},"Prices and pool share"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"Read the information at the bottom.")))),(0,r.kt)("hr",null),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Liquidity/Liquidity03.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 4:")," Input the amount of the token you want to add."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If this token pair has already been fuelled liquidities, you only need to input one amount,\nthe other one is auto-filled. In this case, you need to carefully check the prices\nof the two tokens. If you are not happy with the prices, please quit to add liquidity."),(0,r.kt)("li",{parentName:"ul"},"If the token pair has no liquidity, and you are the first person to add liquidity to this token pair,\nyout need to input two amounts. In this case, please check the amounts very carefully\nas these two amounts will determine the token prices within the token pair. If they are not appropriate\nin proportion, your asset could be lost as someone else could change the token proportion by\nconducting token swapping."))),(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 5:")," Set the liquidity ratio between the two sub-pools."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"\ud83d\udd28")," to use the ratio proposed by the application if you are not sure how to set the ratio.     "),(0,r.kt)("li",{parentName:"ul"},"Normally it is more favorable to add more liquidity to the sub-pool with less liquidity. "),(0,r.kt)("li",{parentName:"ul"},"Adding all your liquidity to just one sub-pool is some gas-saving. If your liquidiy is less than\n0.2% of the token pair total liquidity, you could consider just adding all your liquidity to one sub-pool."))),(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 6:")," Click the button ",(0,r.kt)("strong",null,'"Supply"'),".",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("hr",null),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Liquidity/Liquidity04.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 7:")," Click ",(0,r.kt)("strong",null,'"Confirm Supply"')," to add your liquidity.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"In the upper part of confirm window, the two liquidity token amounts corresponding to the liquidity you are adding are displayed."),(0,r.kt)("li",{parentName:"ul"},"In the down  part of confirm window, some additional information are given, including token amounts you are adding, curent token price,\nand your liquidity share after your liquidity is added. "),(0,r.kt)("li",{parentName:"ul"},"Check all above information before you click the button ",(0,r.kt)("inlineCode",{parentName:"li"},"Confirm Supply"),".")))),(0,r.kt)("hr",null),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Liquidity/Liquidity05.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 8:")," In Metamask, check the transaction content, sign and broadcast the tranaction.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 9:")," Waiting the transaction to be confirmed in the ETH network.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("hr",null),(0,r.kt)("div",{style:{height:"60px"}}),(0,r.kt)("h2",{id:"guidance-to-remove-liquidity"},(0,r.kt)("span",{className:"title"}," Guidance to Remove Liquidity ")),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Remove/Remove01.png",mdxType:"GuidanceWindow"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After you have added some liquidity, your liquidity status might look like the left window.")),(0,r.kt)("span",null,(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 1:")," Click ",(0,r.kt)("span",{style:{color:"#ff007a"}},'"Manage ',(0,r.kt)(u.Z,{size:"16",style:{color:"#ff007a"},mdxType:"ChevronDown"}),'"')," ",(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Detailed liquidity status will be displayed, including liquidity token amounts, shares, and so on.")),(0,r.kt)("span",null,(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 2:")," ",(0,r.kt)("span",{style:{color:"#ff007a"}},(0,r.kt)("strong",null,'"Remove"'))," to remove liquidity."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Click the button ",(0,r.kt)("span",{style:{color:"#ff007a"}},(0,r.kt)("strong",null,'"Add"'))," if you want to add liquidity to this token pair."))),(0,r.kt)("hr",null),(0,r.kt)(a.Z,{imageUrl:"img/Guidance/Remove/Remove02.png",mdxType:"GuidanceWindow"},(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 3:")," Specify the liquidity ratio of the two sub-pools you want to remove, which could be 0-100%, inclusively.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("span",null,(0,r.kt)("strong",null,"Step 4:")," Appove the FeSwap application to transfer your two liquidity tokens."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If any one of the liquidty ratio to remove is specified as 0, you just need to approve the other one of the two liquidity tokens.")),(0,r.kt)("span",null,(0,r.kt)("br",null),(0,r.kt)("strong",null,"Step 5:")," Click ",(0,r.kt)("span",{style:{color:"#ff007a"}},(0,r.kt)("strong",null,'"Remove"'))," to remove liquidity.")),(0,r.kt)("hr",null))}y.isMDXComponent=!0},7434:function(t,e,n){"use strict";var i=n(7294),o=n(5697),r=n.n(o);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function a(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=(0,i.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,r=t.size,u=void 0===r?24:r,s=a(t,["color","size"]);return i.createElement("svg",l({ref:e,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.createElement("polyline",{points:"6 9 12 15 18 9"}))}));u.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},u.displayName="ChevronDown",e.Z=u}}]);