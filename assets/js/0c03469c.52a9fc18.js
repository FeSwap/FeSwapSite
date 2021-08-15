(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[5399],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8897:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),s={id:"FeswGovernor",title:"FESW DAO",hide_title:!0,sidebar_label:"FeSwap Governor",hide_table_of_contents:!0},i=void 0,p={unversionedId:"Contracts/FeswGovernor",id:"Contracts/FeswGovernor",isDocsHomePage:!1,title:"FESW DAO",description:"FeSwap Governor Contract",source:"@site/docs/Contracts/FeswGovernor.md",sourceDirName:"Contracts",slug:"/Contracts/FeswGovernor",permalink:"/docs/Contracts/FeswGovernor",version:"current",frontMatter:{id:"FeswGovernor",title:"FESW DAO",hide_title:!0,sidebar_label:"FeSwap Governor",hide_table_of_contents:!0},sidebar:"FeSwapSidebar",previous:{title:"TimeLock",permalink:"/docs/Contracts/Timelock"},next:{title:"FeSwap Decentralized Exchange",permalink:"/docs/FeSwap/introduction"}},l=[{value:'<span className="title"> FeSwap Governor Contract Address </span>',id:"feswap-governor-contract-address",children:[]},{value:'<span className="title"> FeSwap Governor Deployments Parameters </span>',id:"feswap-governor-deployments-parameters",children:[]},{value:'<span className="title"> FeSwap Governor Contract Code </span>',id:"feswap-governor-contract-code",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"title"},(0,a.kt)("h1",null," FeSwap Governor Contract ")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"FeSwap ",(0,a.kt)("inlineCode",{parentName:"p"},"FeswGovernor")," contract is the contract that users can call to submit governance proposals and vote on these proposals.\nAnyone owning more than 10,000,000 FESW voting-weight can submit proposals, and one proposal that get more than 40,000,000 FESW votes and no more votes against will be judged to win the vote. Anyone can call ",(0,a.kt)("inlineCode",{parentName:"p"},"FeswGovernor")," to execute the succeeded proposals."),(0,a.kt)("p",null,"The voting quorum can be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"FeswGovernor")," proposals from FeSwap community. "),(0,a.kt)("h3",{id:"feswap-governor-contract-address"},(0,a.kt)("span",{className:"title"}," FeSwap Governor Contract Address ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"ETH NetWork"),(0,a.kt)("th",{parentName:"tr",align:"center"},"FeSwap Governor Contract Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x77F98c147a37564c32E48054Bff7692A1F97f343"},"0x77F98c147a37564c32E48054Bff7692A1F97f343"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Ropsten"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://ropsten.etherscan.io/address/0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"},"0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Rinkeby"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://rinkeby.etherscan.io/address/0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"},"0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Goerli"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"},"0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Kovan"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://kovan.etherscan.io/address/0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"},"0x179E988DaE54D010e86F288C4872d7d3eB4EF0C6"))))),(0,a.kt)("h3",{id:"feswap-governor-deployments-parameters"},(0,a.kt)("span",{className:"title"}," FeSwap Governor Deployments Parameters ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," constructor(address timelock","_",", address Feswa","_",") "))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"information"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"timelock","_"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1"},"0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This is the address of ",(0,a.kt)("a",{parentName:"td",href:"../Contracts/Timelock"},"TimeLock Governance")," contract, which is the entity that concretely enforce the governance proposals winning the community voting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Feswa","_"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe"},"0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This is ",(0,a.kt)("a",{parentName:"td",href:"../Contracts/fesw"},"FESW token")," address.")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"** Parameters on ETH Chain ")),(0,a.kt)("h3",{id:"feswap-governor-contract-code"},(0,a.kt)("span",{className:"title"}," FeSwap Governor Contract Code ")),(0,a.kt)("p",null,"FeSwap ",(0,a.kt)("inlineCode",{parentName:"p"},"FeswGovernor")," code is open-sourced at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeSwap/Governance/blob/main/contracts/FeswGovernor.sol"},"Github FeSwapCore Project")," "),(0,a.kt)("p",null,"Following is the code deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="FeswGovernor.sol"',title:'"FeswGovernor.sol"'},'// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.7.0;\npragma experimental ABIEncoderV2;\n\ncontract FeswGovernor {\n    /// @notice The name of this contract\n    string public constant name = "Feswap Governor";\n    \n    uint public constant QUORUM_VOTES               = 40_000_000e18;        // 4% of Fesw\n    uint public constant PROPOSAL_THRESHOLD         = 10_000_000e18;        // 1% of Fesw\n    uint public constant PROPOSAL_MAX_OPERATIONS    = 10;                   // 10 actions\n    uint public constant VOTING_PERIOD              = 7 days;               // 7 days\n\n    /// @notice The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed\n    uint public quorumVotes;\n\n    /// @notice The number of votes required in order for a voter to become a proposer\n    uint public proposalThreshold;\n\n    /// @notice The maximum number of actions that can be included in a proposal\n    uint public proposalMaxOperations;\n\n    /// @notice The duration of voting on a proposal, in blocks\n    uint public votingPeriod;\n\n    /// @notice The address of the Feswap Protocol Timelock\n    TimelockInterface public timelock;\n\n    /// @notice The address of the Feswap governance token\n    FeswaInterface public Feswa;\n\n    /// @notice The total number of proposals\n    uint public proposalCount;\n\n    struct Proposal {\n        // Unique id for looking up a proposal\n        uint id;\n\n        // Creator of the proposal\n        address proposer;\n\n        // the ordered list of target addresses for calls to be made\n        address[] targets;\n\n        // The ordered list of values (i.e. msg.value) to be passed to the calls to be made\n        uint[] values;\n\n        // The ordered list of function signatures to be called\n        string[] signatures;\n\n        // The ordered list of calldata to be passed to each call\n        bytes[] calldatas;\n\n        // The block at which voting begins: holders must delegate their votes prior to this block\n        uint startBlock;        \n        uint startBlockTime;\n\n        // The block at which voting ends: votes must be cast prior to this block\n        uint endBlockTime;\n\n        // The timestamp that the proposal will be available for execution, set once the vote succeeds\n        uint eta;\n\n        // Current number of votes in favor of this proposal\n        uint forVotes;\n\n        // Current number of votes in opposition to this proposal\n        uint againstVotes;\n\n        // Flag marking whether the proposal has been canceled\n        bool canceled;\n\n        // Flag marking whether the proposal has been executed\n        bool executed;\n    }\n    \n    /// @notice Ballot receipt record for a voter\n    struct Receipt {\n        // Whether or not a vote has been cast\n        bool hasVoted;\n\n        // Whether or not the voter supports the proposal\n        bool support;\n\n        // The number of votes the voter had, which were cast\n        uint96 votes;\n    }\n\n    /// @notice Possible states that a proposal may be in\n    enum ProposalState {\n        Pending,\n        Active,\n        Canceled,\n        Defeated,\n        Succeeded,\n        Queued,\n        Expired,\n        Executed\n    }\n\n    /// @notice The official record of all proposals ever proposed\n    mapping (uint => Proposal) public proposals;\n\n    /// @notice Receipts of ballots for the entire set of voters\n    mapping (uint => mapping (address => Receipt)) public receipts;\n\n    /// @notice The latest proposal for each proposer\n    mapping (address => uint) public latestProposalIds;\n\n    /// @notice The EIP-712 typehash for the contract\'s domain\n    bytes32 public constant DOMAIN_TYPEHASH = keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)");\n\n    /// @notice The EIP-712 typehash for the ballot struct used by the contract\n    bytes32 public constant BALLOT_TYPEHASH = keccak256("Ballot(uint256 proposalId,bool support)");\n\n    /// @notice An event emitted when a new proposal is created\n    event ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, \n                          uint startBlockTime, uint endBlockTime, string description);\n\n    /// @notice An event emitted when a vote has been cast on a proposal\n    event VoteCast(address voter, uint proposalId, bool support, uint votes);\n\n    /// @notice An event emitted when a proposal has been canceled\n    event ProposalCanceled(uint id);\n\n    /// @notice An event emitted when a proposal has been queued in the Timelock\n    event ProposalQueued(uint id, uint eta);\n\n    /// @notice An event emitted when a proposal has been executed in the Timelock\n    event ProposalExecuted(uint id);\n\n    constructor(address timelock_, address Feswa_) {\n        timelock                = TimelockInterface(timelock_);\n        Feswa                   = FeswaInterface(Feswa_);\n        quorumVotes             = QUORUM_VOTES;\n        proposalThreshold       = PROPOSAL_THRESHOLD;\n        proposalMaxOperations   = PROPOSAL_MAX_OPERATIONS;\n        votingPeriod            = VOTING_PERIOD;\n    }\n\n    function config(uint quorumVotes_, uint proposalThreshold_, uint proposalMaxOperations_, uint votingPeriod_) public {\n        require(msg.sender == address(timelock), "FeswGovernor:: Not Timelock");\n        if (quorumVotes != 0)           quorumVotes = quorumVotes_;\n        if (proposalThreshold != 0)     proposalThreshold = proposalThreshold_;\n        if (proposalMaxOperations != 0) proposalMaxOperations = proposalMaxOperations_;\n        if (votingPeriod != 0)          votingPeriod = votingPeriod_;\n    }\n\n    function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) public returns (uint) {\n        require(Feswa.getPriorVotes(msg.sender, sub256(block.number, 1)) > proposalThreshold, "FeswGovernor::propose: proposer votes below proposal threshold");\n        require(targets.length == values.length && targets.length == signatures.length && targets.length == calldatas.length, "FeswGovernor::propose: proposal function information arity mismatch");\n        require(targets.length != 0, "FeswGovernor::propose: must provide actions");\n        require(targets.length <= proposalMaxOperations, "FeswGovernor::propose: too many actions");\n\n        uint latestProposalId = latestProposalIds[msg.sender];\n        if (latestProposalId != 0) {\n          ProposalState proposersLatestProposalState = state(latestProposalId);\n          require(proposersLatestProposalState != ProposalState.Active, "FeswGovernor::propose: one live proposal per proposer, found an already active proposal");\n          require(proposersLatestProposalState != ProposalState.Pending, "FeswGovernor::propose: one live proposal per proposer, found an already pending proposal");\n        }\n\n        uint startBlockTime = block.timestamp;\n        uint endBlockTime = add256(startBlockTime, votingPeriod);\n\n        proposalCount++;\n        Proposal memory newProposal;\n        newProposal.id = proposalCount;\n        newProposal.proposer = msg.sender;\n        newProposal.targets = targets;\n        newProposal.values = values;\n        newProposal.signatures = signatures;\n        newProposal.calldatas = calldatas;\n        newProposal.startBlock = block.number;\n        newProposal.startBlockTime = startBlockTime;\n        newProposal.endBlockTime = endBlockTime;\n        \n        proposals[newProposal.id] = newProposal;\n        latestProposalIds[newProposal.proposer] = newProposal.id;\n\n        emit ProposalCreated(newProposal.id, msg.sender, targets, values, signatures, calldatas, startBlockTime, endBlockTime, description);\n        return newProposal.id;\n    }\n\n    function queue(uint proposalId) public {\n        require(state(proposalId) == ProposalState.Succeeded, "FeswGovernor::queue: proposal can only be queued if it is succeeded");\n\n        Proposal storage proposal = proposals[proposalId];\n        uint eta = add256(block.timestamp, timelock.delay());\n        for (uint i = 0; i < proposal.targets.length; i++) {\n            _queueOrRevert(proposal.targets[i], proposal.values[i], proposal.signatures[i], proposal.calldatas[i], eta);\n        }\n        proposal.eta = eta;\n        emit ProposalQueued(proposalId, eta);\n    }\n\n    function _queueOrRevert(address target, uint value, string memory signature, bytes memory data, uint eta) internal {\n        require(!timelock.queuedTransactions(keccak256(abi.encode(target, value, signature, data, eta))), \n                    "FeswGovernor::_queueOrRevert: proposal action already queued at eta");\n        timelock.queueTransaction(target, value, signature, data, eta);\n    }\n\n    function execute(uint proposalId) public payable {\n        require(state(proposalId) == ProposalState.Queued, "FeswGovernor::execute: proposal can only be executed if it is queued");\n        Proposal storage proposal = proposals[proposalId];\n        proposal.executed = true;\n        for (uint i = 0; i < proposal.targets.length; i++) {\n            timelock.executeTransaction{value:proposal.values[i]}(proposal.targets[i], proposal.values[i], proposal.signatures[i], proposal.calldatas[i], proposal.eta);\n        }\n        emit ProposalExecuted(proposalId);\n    }\n\n    function cancel(uint proposalId) public {\n        require(state(proposalId) != ProposalState.Executed, "FeswGovernor::cancel: cannot cancel executed proposal");\n\n        Proposal storage proposal = proposals[proposalId];\n        require(Feswa.getPriorVotes(proposal.proposer, sub256(block.number, 1)) < proposalThreshold, "FeswGovernor::cancel: proposer above threshold");\n\n        proposal.canceled = true;\n        for (uint i = 0; i < proposal.targets.length; i++) {\n            timelock.cancelTransaction(proposal.targets[i], proposal.values[i], proposal.signatures[i], proposal.calldatas[i], proposal.eta);\n        }\n\n        emit ProposalCanceled(proposalId);\n    }\n\n    function getActions(uint proposalId) public view returns (address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas) {\n        Proposal storage p = proposals[proposalId];\n        return (p.targets, p.values, p.signatures, p.calldatas);\n    }\n\n    function getReceipt(uint proposalId, address voter) public view returns (Receipt memory) {\n        return receipts[proposalId][voter];\n    }\n\n    function state(uint proposalId) public view returns (ProposalState) {\n        require(proposalCount >= proposalId && proposalId > 0, "FeswGovernor::state: invalid proposal id");\n        Proposal storage proposal = proposals[proposalId];\n        if (proposal.canceled) {\n            return ProposalState.Canceled;\n        } else if (block.timestamp <= proposal.startBlockTime) {\n            return ProposalState.Pending;\n        } else if (block.timestamp <= proposal.endBlockTime) {\n            return ProposalState.Active;\n        } else if (proposal.forVotes <= proposal.againstVotes || proposal.forVotes < quorumVotes) {\n            return ProposalState.Defeated;\n        } else if (proposal.eta == 0) {\n            return ProposalState.Succeeded;\n        } else if (proposal.executed) {\n            return ProposalState.Executed;\n        } else if (block.timestamp >= add256(proposal.eta, timelock.GRACE_PERIOD())) {\n            return ProposalState.Expired;\n        } else {\n            return ProposalState.Queued;\n        }\n    }\n\n    function castVote(uint proposalId, bool support) public {\n        return _castVote(msg.sender, proposalId, support);\n    }\n\n    function castVoteBySig(uint proposalId, bool support, uint8 v, bytes32 r, bytes32 s) public {\n        bytes32 domainSeparator = keccak256(abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name)), getChainId(), address(this)));\n        bytes32 structHash = keccak256(abi.encode(BALLOT_TYPEHASH, proposalId, support));\n        bytes32 digest = keccak256(abi.encodePacked("\\x19\\x01", domainSeparator, structHash));\n        address signatory = ecrecover(digest, v, r, s);\n        require(signatory != address(0), "FeswGovernor::castVoteBySig: invalid signature");\n        return _castVote(signatory, proposalId, support);\n    }\n\n    function _castVote(address voter, uint proposalId, bool support) internal {\n        require(state(proposalId) == ProposalState.Active, "FeswGovernor::_castVote: voting is closed");\n        Proposal storage proposal = proposals[proposalId];\n        Receipt storage receipt = receipts[proposalId][voter];\n        require(receipt.hasVoted == false, "FeswGovernor::_castVote: voter already voted");\n        uint96 votes = Feswa.getPriorVotes(voter, proposal.startBlock);\n\n        if (support) {\n            proposal.forVotes = add256(proposal.forVotes, votes);\n        } else {\n            proposal.againstVotes = add256(proposal.againstVotes, votes);\n        }\n\n        receipt.hasVoted = true;\n        receipt.support = support;\n        receipt.votes = votes;\n\n        emit VoteCast(voter, proposalId, support, votes);\n    }\n\n    function add256(uint256 a, uint256 b) internal pure returns (uint) {\n        uint c = a + b;\n        require(c >= a, "addition overflow");\n        return c;\n    }\n\n    function sub256(uint256 a, uint256 b) internal pure returns (uint) {\n        require(b <= a, "subtraction underflow");\n        return a - b;\n    }\n\n    function getChainId() internal pure returns (uint) {\n        uint chainId;\n        assembly { chainId := chainid() }\n        return chainId;\n    }\n}\n\ninterface TimelockInterface {\n    function delay() external view returns (uint);\n    function GRACE_PERIOD() external view returns (uint);\n    function acceptAdmin() external;\n    function queuedTransactions(bytes32 hash) external view returns (bool);\n    function queueTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external returns (bytes32);\n    function cancelTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external;\n    function executeTransaction(address target, uint value, string calldata signature, bytes calldata data, uint eta) external payable returns (bytes memory);\n}\n\ninterface FeswaInterface {\n    function getPriorVotes(address account, uint blockNumber) external view returns (uint96);\n}\n')))}d.isMDXComponent=!0}}]);