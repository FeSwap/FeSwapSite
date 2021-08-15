(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[9599],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6581:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={slug:"21-08-01",title:"FeSwap Released for Test",hide_table_of_contents:!0,author:"Derik Lu",author_title:"ldru@163.com",author_url:"https://github.com/FeSwap",tags:["Feswap","Swap","Liquidity","NFT","Liquidity Farming","Free Exchange"]},l=void 0,p={permalink:"/cn/blog/21-08-01",source:"@site/blog/2021-08-01-test_release .md",title:"FeSwap Released for Test",description:"After 4 months developing, now FeSwap is ready to be launched! \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"Feswap",permalink:"/cn/blog/tags/feswap"},{label:"Swap",permalink:"/cn/blog/tags/swap"},{label:"Liquidity",permalink:"/cn/blog/tags/liquidity"},{label:"NFT",permalink:"/cn/blog/tags/nft"},{label:"Liquidity Farming",permalink:"/cn/blog/tags/liquidity-farming"},{label:"Free Exchange",permalink:"/cn/blog/tags/free-exchange"}],readingTime:.99,truncated:!1,prevItem:{title:"User Guidance Available",permalink:"/cn/blog/21-08-05"},nextItem:{title:"Welcome",permalink:"/cn/blog/welcome"}},c=[],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After 4 months developing, now FeSwap is ready to be launched! \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"),(0,i.kt)("p",null,"There are so many DEXs in the booming Defi space. But almost all AMM DEX are forked from Uniswap, including SushiSwap, PancakeSwap, QuickSwap, HoneySwap. These X-swap are nearly just the re-deployment of Uniswap contract on various EVM compatible blockchains. "),(0,i.kt)("p",null,"FeSwap is also forked from Uniswap. But FeSwap makes several fundemental changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FeSwap creats two sub liquidity pool for each token pair."),(0,i.kt)("li",{parentName:"ul"},"FeSwap charge ZERO exchange fee for all swap transactions."),(0,i.kt)("li",{parentName:"ul"},"Each token pair is minted as an NFT, the owner of which could share the profit of the token pair."),(0,i.kt)("li",{parentName:"ul"},"FeSwap implements an internal exchange mechanism, which could make competitive profits for its liquidity providers.")),(0,i.kt)("p",null,"All these changes impact almost all aspects of FeSwap implementation, including token swap related contracts and their testing, the low level SDK to support token swap, liquidity mining mechanism and its implementation, and almost all swap releted user interface, such as adding liquidity, removing liquidity, token swapping, NFT bidding, liquidity mining, and so on."),(0,i.kt)("p",null,"In theory, FeSwap proves that decentralized exchange could be free, but profitable. "),(0,i.kt)("p",null,"Now waiting everybody to prove it in reality!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.feswap.io"},"www.feswap.io")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.feswap.io"},"app.feswap.io")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ipfs.feswap.io"},"ipfs.feswap.io")))}u.isMDXComponent=!0}}]);