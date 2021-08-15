(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[3257],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=n,g=u["".concat(s,".").concat(f)]||u[f]||l[f]||i;return t?a.createElement(g,o(o({ref:r},p),{},{components:t})):a.createElement(g,o({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8040:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var a=t(2122),n=t(9756),i=(t(7294),t(3905)),o={id:"factory",title:"Contract Factory",hide_title:!0,sidebar_label:"Factory",hide_table_of_contents:!0},c=void 0,s={unversionedId:"Contracts/factory",id:"Contracts/factory",isDocsHomePage:!1,title:"Contract Factory",description:"FeSwap Factory Contract",source:"@site/docs/Contracts/Factory.md",sourceDirName:"Contracts",slug:"/Contracts/factory",permalink:"/docs/Contracts/factory",version:"current",frontMatter:{id:"factory",title:"Contract Factory",hide_title:!0,sidebar_label:"Factory",hide_table_of_contents:!0},sidebar:"FeSwapSidebar",previous:{title:"FESW DAO",permalink:"/docs/Contracts/fesw"},next:{title:"Router",permalink:"/docs/Contracts/router"}},d=[{value:'<span className="title"> Factory Contract Address </span>',id:"factory-contract-address",children:[]},{value:'<span className="title"> FeSwapFactory Code </span>',id:"feswapfactory-code",children:[]}],p={toc:d};function l(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"title"},(0,i.kt)("h1",null," FeSwap Factory Contract ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"FeSwap ",(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," contract is the contract that manages all liquidity-pool contracts. ",(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," is responsible to create all the token-pair liquidity pools, and store the reference address to these pools. "),(0,i.kt)("p",null,"Only the NFT owner of the corresponding token-pair has the right to create the owned liquidity pool contract. Two linked sub-pools are created for each token pair. The owner can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," contract to config a few transaction parameters of the liquidity pool, mainly the arbitrage trigger rate, and the swapping profit receiver. "),(0,i.kt)("h3",{id:"factory-contract-address"},(0,i.kt)("span",{className:"title"}," Factory Contract Address ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"ETH NetWork"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Feswap Factory Contract Address"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Waiting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Ropsten"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://ropsten.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747"},"0x75f7b730c51610aba6f3d89deb4864f156c8e747"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Rinkeby"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://rinkeby.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747"},"0x75f7b730c51610aba6f3d89deb4864f156c8e747"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Goerli"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747"},"0x75f7b730c51610aba6f3d89deb4864f156c8e747"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Kovan"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://kovan.etherscan.io/address/0x75f7b730c51610aba6f3d89deb4864f156c8e747"},"0x75f7b730c51610aba6f3d89deb4864f156c8e747"))))),(0,i.kt)("h3",{id:"feswapfactory-code"},(0,i.kt)("span",{className:"title"}," FeSwapFactory Code ")),(0,i.kt)("p",null,"The open-source FeSwap ",(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," contact is stored at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeSwap/FeSwapCore/blob/master/contracts/FeSwapFactory.sol"},"Github FeSwapCore Project")," "),(0,i.kt)("p",null,"Following is the code deployed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="FeSwapFactory.sol"',title:'"FeSwapFactory.sol"'},"// SPDX-License-Identifier: GPL-3.0\npragma solidity =0.6.12;\n\nimport './interfaces/IFeSwapFactory.sol';\nimport './FeSwapPair.sol';\n\ncontract FeSwapFactory is IFeSwapFactory {\n    uint64 public constant RATE_TRIGGER_FACTORY         = 10;       //  price difference be 1%\n    uint64 public constant RATE_CAP_TRIGGER_ARBITRAGE   = 50;       //  price difference < 10%\n    uint64 public constant RATE_PROFIT_SHARE            = 11;        //  Feswap and Pair owner share 10% of the swap profit, 11 means 1/12\n\n    address public override factoryAdmin;\n    address public override feeTo;\n    address public override routerFeSwap;\n    uint64 public override rateTriggerFactory;\n    uint64 public override rateCapArbitrage;\n    uint64 public override rateProfitShare;                        // 1/X => rateProfitShare = (X-1)\n\n    mapping(address => mapping(address => address)) public override getPair;\n    address[] public override allPairs;\n\n    event PairCreated(address indexed tokenA, address indexed tokenB, address pairAAB, address pairABB, uint allPairsLength);\n    event PairOwnerChanged(address indexed pairAAB, address indexed pairABB, address oldOwner, address newOwner);\n\n    constructor(address _factoryAdmin) public {\n        factoryAdmin        = _factoryAdmin;\n        rateTriggerFactory  = RATE_TRIGGER_FACTORY;\n        rateCapArbitrage    = RATE_CAP_TRIGGER_ARBITRAGE;\n        rateProfitShare     = RATE_PROFIT_SHARE;\n     }\n\n    function allPairsLength() external view override returns (uint) {\n        return allPairs.length;\n    }\n\n    \n    function getFeeInfo() external view override returns (address _feeTo, uint256 _rateProfitShare) {\n        return (feeTo, rateProfitShare);\n    }\n\n    function createUpdatePair(address tokenA, address tokenB, address pairOwner, uint256 rateTrigger) external override returns (address pairAAB, address pairABB ) {\n        require(tokenA != tokenB, 'FeSwap: IDENTICAL_ADDRESSES');\n        // pairOwner allowed to zero to discard the profit\n        require(tokenA != address(0) && tokenB != address(0) && routerFeSwap != address(0) , 'FeSwap: ZERO_ADDRESS');\n        require((msg.sender == factoryAdmin) || (msg.sender == routerFeSwap) , 'FeSwap: FORBIDDEN');\n        require(rateTrigger <= rateCapArbitrage, 'FeSwap: GAP TOO MORE');\n\n        pairAAB = getPair[tokenA][tokenB];\n        if(pairAAB != address(0)) {\n            pairABB = getPair[tokenB][tokenA];\n            address oldOwner = IFeSwapPair(pairAAB).pairOwner();\n            if(oldOwner!=pairOwner) {\n                IFeSwapPair(pairAAB).setOwner(pairOwner);           // Owner Security must be checked by Router\n                IFeSwapPair(pairABB).setOwner(pairOwner);\n                emit PairOwnerChanged(pairAAB, pairABB, oldOwner, pairOwner);\n            }\n            if(rateTrigger!=0)\n            {\n                rateTrigger = rateTrigger*6 + rateTriggerFactory*4 + 10000;     // base is 10000\n                IFeSwapPair(pairAAB).adjusArbitragetRate(rateTrigger); \n                IFeSwapPair(pairABB).adjusArbitragetRate(rateTrigger);                \n            }\n        } else {\n            bytes memory bytecode = type(FeSwapPair).creationCode;\n            bytes32 saltAAB = keccak256(abi.encodePacked(tokenA, tokenB));\n            bytes32 saltABB = keccak256(abi.encodePacked(tokenB, tokenA));\n            assembly {\n                pairAAB := create2(0, add(bytecode, 32), mload(bytecode), saltAAB)\n                pairABB := create2(0, add(bytecode, 32), mload(bytecode), saltABB)\n            }\n\n            if(rateTrigger == 0) rateTrigger = rateTriggerFactory;\n            rateTrigger = rateTrigger*6 + rateTriggerFactory*4 + 10000;\n\n            IFeSwapPair(pairAAB).initialize(tokenA, tokenB, pairOwner, routerFeSwap, rateTrigger);\n            getPair[tokenA][tokenB] = pairAAB;\n            allPairs.push(pairAAB);\n\n            IFeSwapPair(pairABB).initialize(tokenB, tokenA, pairOwner, routerFeSwap, rateTrigger);\n            getPair[tokenB][tokenA] = pairABB;\n            allPairs.push(pairABB);\n\n            emit PairCreated(tokenA, tokenB, pairAAB, pairABB, allPairs.length);\n        }\n    }\n\n    function setFeeTo(address _feeTo) external override {\n        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');\n        feeTo = _feeTo;\n    }\n\n    function setFactoryAdmin(address _factoryAdmin) external override {\n        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');\n        factoryAdmin = _factoryAdmin;\n    }\n\n    function setRouterFeSwap(address _routerFeSwap) external override {\n        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');\n        routerFeSwap = _routerFeSwap;                                         // for Router Update\n    }    \n\n    function configFactory(uint64 newTriggerRate, uint64 newRateCap, uint64 newProfitShareRate) external override {\n        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');\n        rateTriggerFactory  = newTriggerRate;\n        rateCapArbitrage    = newRateCap;\n        rateProfitShare     = newProfitShareRate;                   // 1/X => rateProfitShare = (X-1)\n    } \n    \n    // Function to update Router in case of emergence\n    function managePair(address _tokenA, address _tokenB, address _pairOwner, address _routerFeSwap) external override {\n        require(msg.sender == factoryAdmin, 'FeSwap: FORBIDDEN');\n        address pairAAB = getPair[_tokenA][_tokenB];\n        address pairABB = getPair[_tokenB][_tokenA];\n        \n        require(pairAAB != address(0), 'FeSwap: NO TOKEN PAIR');\n        IFeSwapPair(pairAAB).initialize(_tokenA, _tokenB, _pairOwner, _routerFeSwap, 0);\n        IFeSwapPair(pairABB).initialize(_tokenB, _tokenA, _pairOwner, _routerFeSwap, 0);\n    } \n}\n")))}l.isMDXComponent=!0}}]);