(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=a,p=b["".concat(c,".").concat(f)]||b[f]||m[f]||o;return n?r.a.createElement(p,i(i({ref:t},s),{},{components:n})):r.a.createElement(p,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},124:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},130:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(124),c=n(118),i=n(57),l=n.n(i);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,b=e.values,m=e.groupId,f=e.className,p=Object(o.a)(),d=p.tabGroupChoices,v=p.setTabGroupChoices,y=Object(a.useState)(i),w=y[0],O=y[1],h=a.Children.toArray(e.children),g=[];if(null!=m){var j=d[m];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&O(j)}var T=function(e){var t=e.target,n=g.indexOf(t),a=h[n].props.value;O(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,o,c,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,n>=0&&o<=s&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case s:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},131:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},132:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(58),c=n.n(o);t.a=function(e){var t=e.children,n=e.minHeight,a=e.url;return r.a.createElement("div",{className:c.a.browserWindow,style:{minHeight:n}},r.a.createElement("div",{className:c.a.browserWindowHeader},r.a.createElement("div",{className:c.a.buttons},r.a.createElement("span",{className:c.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:c.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:c.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:c.a.browserWindowAddressBar},a),r.a.createElement("div",{className:c.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:c.a.bar}),r.a.createElement("span",{className:c.a.bar}),r.a.createElement("span",{className:c.a.bar})))),r.a.createElement("div",{className:c.a.browserWindowBody},t))}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(7),o=(n(0),n(117)),c=n(130),i=n(131),l=n(132),s={title:"FeSwap Token Pair NFT",hdie_table_of_contents:!0},u={type:"mdx",permalink:"/NFT",source:"@site/src/pages/NFT.md"},b=[],m={toc:b};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{color:"#00A4B8"}},Object(o.b)("h1",null," FeSwap Token-Pair NFT ")),Object(o.b)("hr",null),Object(o.b)("p",null,"FeSwap NFT bidding will be ready very soon, please keep in focus!"),Object(o.b)(l.a,{url:"https://www.feswap.io/NFT",mdxType:"BrowserWindow"},Object(o.b)(c.a,{defaultValue:"bid",values:[{label:"NFT Bid",value:"bid"},{label:"NFT Buy/Sell",value:"buy-sell"},{label:"NFT Management",value:"management"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"bid",mdxType:"TabItem"},"You can create any Token-Pair NFT with the price of 0.2 ETH. Within two weeks if there is no one else bids with higher price, you will be the owner of this NFT. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"),Object(o.b)(i.a,{value:"buy-sell",mdxType:"TabItem"},"You can sell your NFTs, or buy someone else's NFTs. We list here all the NFTs for sale.  ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"),Object(o.b)(i.a,{value:"management",mdxType:"TabItem"},"You can create the specified token pair with your NFT. You can also retrieve the exchange profits of your shares. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Please waiting, We are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"))))}f.isMDXComponent=!0}}]);