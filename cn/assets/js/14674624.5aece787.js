(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,p=b["".concat(c,".").concat(f)]||b[f]||m[f]||o;return r?a.a.createElement(p,l(l({ref:t},s),{},{components:r})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},118:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},124:function(e,t,r){"use strict";var n=r(0),a=r(125);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},130:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(124),c=r(118),l=r(57),i=r.n(l);var s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,b=e.values,m=e.groupId,f=e.className,p=Object(o.a)(),d=p.tabGroupChoices,v=p.setTabGroupChoices,w=Object(n.useState)(l),y=w[0],O=w[1],h=n.Children.toArray(e.children),g=[];if(null!=m){var j=d[m];null!=j&&j!==y&&b.some((function(e){return e.value===j}))&&O(j)}var E=function(e){var t=e.target,r=g.indexOf(t),n=h[r].props.value;O(n),null!=m&&(v(m,n),setTimeout((function(){var e,r,n,a,o,c,l,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,c=window,l=c.innerHeight,s=c.innerWidth,r>=0&&o<=s&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((function(){return t.classList.remove(i.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=g.indexOf(e.target)+1;r=g[n]||g[0];break;case s:var a=g.indexOf(e.target)-1;r=g[a]||g[g.length-1]}null===(t=r)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},f)},b.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},131:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},132:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(58),c=r.n(o);t.a=function(e){var t=e.children,r=e.minHeight,n=e.url;return a.a.createElement("div",{className:c.a.browserWindow,style:{minHeight:r}},a.a.createElement("div",{className:c.a.browserWindowHeader},a.a.createElement("div",{className:c.a.buttons},a.a.createElement("span",{className:c.a.dot,style:{background:"#f25f58"}}),a.a.createElement("span",{className:c.a.dot,style:{background:"#fbbe3c"}}),a.a.createElement("span",{className:c.a.dot,style:{background:"#58cb42"}})),a.a.createElement("div",{className:c.a.browserWindowAddressBar},n),a.a.createElement("div",{className:c.a.browserWindowMenuIcon},a.a.createElement("div",null,a.a.createElement("span",{className:c.a.bar}),a.a.createElement("span",{className:c.a.bar}),a.a.createElement("span",{className:c.a.bar})))),a.a.createElement("div",{className:c.a.browserWindowBody},t))}},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return f}));var n=r(3),a=r(7),o=(r(0),r(117)),c=r(130),l=r(131),i=r(132),s={title:"FeSwap Borrowing",hdie_table_of_contents:!0},u={type:"mdx",permalink:"/cn/borrow",source:"@site/src/pages/borrow.md"},b=[],m={toc:b};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{color:"#00A4B8"}},Object(o.b)("h1",null," FeSwap collateralized Borrow ")),Object(o.b)("hr",null),Object(o.b)("p",null,"Borrow with FeSwap liquidity token as the collateral is still under construction, please waiting!"),Object(o.b)(i.a,{url:"https://www.feswap.io/borrow",mdxType:"BrowserWindow"},Object(o.b)(c.a,{defaultValue:"borrow",values:[{label:"Borrow",value:"borrow"},{label:"Return",value:"return"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"borrow",mdxType:"TabItem"},"You can borrow stable coins such as USDT, USDC here with your liquidty token as the collateral. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Your personal borrow profiles are shown here for monitoring. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"),Object(o.b)(l.a,{value:"return",mdxType:"TabItem"},"You can repay the loan here by connecting your wallet. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"Please waiting, we are coming soon.  \ud83c\udfc3 \ud83d\ude1a \ud83d\ude4f"))))}f.isMDXComponent=!0}}]);