(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[514,608],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var n=a(7294),i=a(3905),o=a(2263),r=a(6291),l=a(3575),c=a(2122),s=a(9756),d=a(6010),u=a(9306),m=a(1839),b=a(3783),p=a(7898),h=a(6742),f=a(3919),v=a(5537),E=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},C=a(4478),g=a(8617),k=a(4973),_="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",M="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",y="collapseSidebarButtonIcon_3E-R",A="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",x=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},L=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,["items"]);return t.map((function(e,t){return n.createElement(P,(0,c.Z)({key:t,item:e},a))}))}));function P(e){switch(e.item.type){case"category":return n.createElement(B,e);case"link":default:return n.createElement(D,e)}}function B(e){var t,a=e.item,i=e.onItemClick,o=e.collapsible,r=e.activePath,l=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),m=a.items,b=a.label,p=x(a,r),h=(0,u.D9)(p),f=(0,n.useState)((function(){return!!o&&(!p&&a.collapsed)})),v=f[0],E=f[1],C=(0,n.useRef)(null),g=(0,n.useState)(void 0),k=g[0],_=g[1],N=function(e){var t;void 0===e&&(e=!0),_(e?(null==(t=C.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){p&&!h&&v&&E(!1)}),[p,h,v]);var Z=(0,n.useCallback)((function(e){e.preventDefault(),k||N(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},n.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&p},t[M]=!o,t)),onClick:o?Z:void 0,href:o?"#":void 0},l),b),n.createElement("ul",{className:"menu__list",ref:C,style:{height:k},onTransitionEnd:function(){v||N(!1)}},n.createElement(L,{items:m,tabIndex:v?"-1":"0",onItemClick:i,collapsible:o,activePath:r})))}function D(e){var t=e.item,a=e.onItemClick,i=e.activePath,o=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),r=t.href,l=t.label,u=x(t,i);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(h.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:r},(0,f.Z)(r)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,f.Z)(r)?l:n.createElement("span",null,l,n.createElement(g.Z,null))))}function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(E,{className:y}))}function W(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(A,R)},"\xd7"):n.createElement(C.Z,{className:A,height:24,width:24}))}var F=function(e){var t,a,i=e.path,o=e.sidebar,r=e.sidebarCollapsible,l=void 0===r||r,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,p.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),f=(0,u.LU)(),E=f.navbar.hideOnScroll,C=f.hideableSidebar,g=(0,u.nT)().isClosed,M=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,m.Z)(t);var i=(0,b.Z)();return(0,n.useEffect)((function(){i===b.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),w=M.showResponsiveSidebar,y=M.closeResponsiveSidebar,A=M.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(_,(t={},t[N]=E,t[Z]=s,t))},E&&n.createElement(v.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":w},a[T]=!g&&h,a)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(W,{responsiveSidebarOpened:w,onClick:A}),n.createElement("ul",{className:"menu__list"},n.createElement(L,{items:o,onItemClick:y,collapsible:l,activePath:i}))),C&&n.createElement(H,{onClick:c}))},O=a(1729),K=a(4608),z=a(5977),J={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function U(e){var t,a,r,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,o.Z)(),f=h.siteConfig,v=h.isClient,C=b.pluginId,g=b.version,_=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,i=a.permalinkToSidebar,o=a.docsSidebars,r=i[n.path]||i[(t=n.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:o[r],sidebarName:r}}({versionMetadata:b,currentDocRoute:m}),N=_.sidebarName,Z=_.sidebar,S=(0,n.useState)(!1),I=S[0],M=S[1],T=(0,n.useState)(!1),w=T[0],y=T[1],A=(0,n.useCallback)((function(){w&&y(!1),M(!I)}),[w]);return n.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:g,tag:(0,u.os)(C,g)}},n.createElement("div",{className:J.docPage},Z&&n.createElement("aside",{className:(0,d.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=I,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&I&&y(!0)}},n.createElement(F,{key:N,sidebar:Z,path:m.path,sidebarCollapsible:null==(a=null==(r=f.themeConfig)?void 0:r.sidebarCollapsible)||a,onCollapse:A,isHidden:w}),w&&n.createElement("div",{className:J.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},n.createElement(E,{className:J.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,d.Z)(J.docMainContainer,(c={},c[J.docMainContainerEnhanced]=I||!Z,c))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(s={},s[J.docItemWrapperEnhanced]=I,s))},n.createElement(i.Zo,{components:O.Z},p)))))}var Y=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,z.LX)(i.pathname,e)}));return o?n.createElement(U,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a})):n.createElement(K.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(3575),o=a(4973);t.default=function(){return n.createElement(i.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);