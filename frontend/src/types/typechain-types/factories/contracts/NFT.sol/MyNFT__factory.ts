/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MyNFT, MyNFTInterface } from "../../../contracts/NFT.sol/MyNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "awardItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e46540000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b61289e80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063cf378343146102a7578063e985e9c5146102d7576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611a01565b610307565b6040516101169190611a49565b60405180910390f35b6101276103e9565b6040516101349190611afd565b60405180910390f35b61015760048036038101906101529190611b55565b61047b565b6040516101649190611bc3565b60405180910390f35b61018760048036038101906101829190611c0a565b6104c1565b005b6101a3600480360381019061019e9190611c4a565b6105d9565b005b6101bf60048036038101906101ba9190611c4a565b610639565b005b6101db60048036038101906101d69190611b55565b610659565b6040516101e89190611bc3565b60405180910390f35b61020b60048036038101906102069190611c9d565b6106e0565b6040516102189190611cd9565b60405180910390f35b610229610798565b6040516102369190611afd565b60405180910390f35b61025960048036038101906102549190611d20565b61082a565b005b61027560048036038101906102709190611e95565b610840565b005b610291600480360381019061028c9190611b55565b6108a2565b60405161029e9190611afd565b60405180910390f35b6102c160048036038101906102bc9190611fb9565b6109b5565b6040516102ce9190611cd9565b60405180910390f35b6102f160048036038101906102ec9190612015565b6109ec565b6040516102fe9190611a49565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610a80565b5b9050919050565b6060600080546103f890612084565b80601f016020809104026020016040519081016040528092919081815260200182805461042490612084565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610aea565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610659565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561053d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053490612128565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055c610b35565b73ffffffffffffffffffffffffffffffffffffffff16148061058b575061058a81610585610b35565b6109ec565b5b6105ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c1906121ba565b60405180910390fd5b6105d48383610b3d565b505050565b6105ea6105e4610b35565b82610bf6565b610629576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106209061224c565b60405180910390fd5b610634838383610c8b565b505050565b61065483838360405180602001604052806000815250610840565b505050565b60008061066583610f85565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ce906122b8565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610751576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107489061234a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107a790612084565b80601f01602080910402602001604051908101604052809291908181526020018280546107d390612084565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b5050505050905090565b61083c610835610b35565b8383610fc2565b5050565b61085161084b610b35565b83610bf6565b610890576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108879061224c565b60405180910390fd5b61089c8484848461112f565b50505050565b60606108ad82610aea565b60006006600084815260200190815260200160002080546108cd90612084565b80601f01602080910402602001604051908101604052809291908181526020018280546108f990612084565b80156109465780601f1061091b57610100808354040283529160200191610946565b820191906000526020600020905b81548152906001019060200180831161092957829003601f168201915b50505050509050600061095761118b565b905060008151141561096d5781925050506109b0565b6000825111156109a257808260405160200161098a9291906123a6565b604051602081830303815290604052925050506109b0565b6109ab846111a2565b925050505b919050565b6000806109c2600761120a565b90506109ce8482611218565b6109d88184611436565b6109e260076114aa565b8091505092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610af3816114c0565b610b32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b29906122b8565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bb083610659565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c0283610659565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c445750610c4381856109ec565b5b80610c8257508373ffffffffffffffffffffffffffffffffffffffff16610c6a8461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cab82610659565b73ffffffffffffffffffffffffffffffffffffffff1614610d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf89061243c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d68906124ce565b60405180910390fd5b610d7e8383836001611501565b8273ffffffffffffffffffffffffffffffffffffffff16610d9e82610659565b73ffffffffffffffffffffffffffffffffffffffff1614610df4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610deb9061243c565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f808383836001611507565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611031576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110289061253a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111229190611a49565b60405180910390a3505050565b61113a848484610c8b565b6111468484848461150d565b611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c906125cc565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606111ad82610aea565b60006111b761118b565b905060008151116111d75760405180602001604052806000815250611202565b806111e1846116a4565b6040516020016111f29291906123a6565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611288576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127f90612638565b60405180910390fd5b611291816114c0565b156112d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c8906126a4565b60405180910390fd5b6112df600083836001611501565b6112e8816114c0565b15611328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131f906126a4565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611432600083836001611507565b5050565b61143f826114c0565b61147e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147590612736565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906114a59291906118f2565b505050565b6001816000016000828254019250508190555050565b60008073ffffffffffffffffffffffffffffffffffffffff166114e283610f85565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b600061152e8473ffffffffffffffffffffffffffffffffffffffff1661177c565b15611697578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611557610b35565b8786866040518563ffffffff1660e01b815260040161157994939291906127ab565b602060405180830381600087803b15801561159357600080fd5b505af19250505080156115c457506040513d601f19601f820116820180604052508101906115c1919061280c565b60015b611647573d80600081146115f4576040519150601f19603f3d011682016040523d82523d6000602084013e6115f9565b606091505b5060008151141561163f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611636906125cc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061169c565b600190505b949350505050565b6060600060016116b38461179f565b01905060008167ffffffffffffffff8111156116d2576116d1611d6a565b5b6040519080825280601f01601f1916602001820160405280156117045781602001600182028036833780820191505090505b509050600082602001820190505b600115611771578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161175b5761175a612839565b5b049450600085141561176c57611771565b611712565b819350505050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106117fd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816117f3576117f2612839565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061183a576d04ee2d6d415b85acef810000000083816118305761182f612839565b5b0492506020810190505b662386f26fc10000831061186957662386f26fc10000838161185f5761185e612839565b5b0492506010810190505b6305f5e1008310611892576305f5e100838161188857611887612839565b5b0492506008810190505b61271083106118b75761271083816118ad576118ac612839565b5b0492506004810190505b606483106118da57606483816118d0576118cf612839565b5b0492506002810190505b600a83106118e9576001810190505b80915050919050565b8280546118fe90612084565b90600052602060002090601f0160209004810192826119205760008555611967565b82601f1061193957805160ff1916838001178555611967565b82800160010185558215611967579182015b8281111561196657825182559160200191906001019061194b565b5b5090506119749190611978565b5090565b5b80821115611991576000816000905550600101611979565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6119de816119a9565b81146119e957600080fd5b50565b6000813590506119fb816119d5565b92915050565b600060208284031215611a1757611a1661199f565b5b6000611a25848285016119ec565b91505092915050565b60008115159050919050565b611a4381611a2e565b82525050565b6000602082019050611a5e6000830184611a3a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a9e578082015181840152602081019050611a83565b83811115611aad576000848401525b50505050565b6000601f19601f8301169050919050565b6000611acf82611a64565b611ad98185611a6f565b9350611ae9818560208601611a80565b611af281611ab3565b840191505092915050565b60006020820190508181036000830152611b178184611ac4565b905092915050565b6000819050919050565b611b3281611b1f565b8114611b3d57600080fd5b50565b600081359050611b4f81611b29565b92915050565b600060208284031215611b6b57611b6a61199f565b5b6000611b7984828501611b40565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611bad82611b82565b9050919050565b611bbd81611ba2565b82525050565b6000602082019050611bd86000830184611bb4565b92915050565b611be781611ba2565b8114611bf257600080fd5b50565b600081359050611c0481611bde565b92915050565b60008060408385031215611c2157611c2061199f565b5b6000611c2f85828601611bf5565b9250506020611c4085828601611b40565b9150509250929050565b600080600060608486031215611c6357611c6261199f565b5b6000611c7186828701611bf5565b9350506020611c8286828701611bf5565b9250506040611c9386828701611b40565b9150509250925092565b600060208284031215611cb357611cb261199f565b5b6000611cc184828501611bf5565b91505092915050565b611cd381611b1f565b82525050565b6000602082019050611cee6000830184611cca565b92915050565b611cfd81611a2e565b8114611d0857600080fd5b50565b600081359050611d1a81611cf4565b92915050565b60008060408385031215611d3757611d3661199f565b5b6000611d4585828601611bf5565b9250506020611d5685828601611d0b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611da282611ab3565b810181811067ffffffffffffffff82111715611dc157611dc0611d6a565b5b80604052505050565b6000611dd4611995565b9050611de08282611d99565b919050565b600067ffffffffffffffff821115611e0057611dff611d6a565b5b611e0982611ab3565b9050602081019050919050565b82818337600083830152505050565b6000611e38611e3384611de5565b611dca565b905082815260208101848484011115611e5457611e53611d65565b5b611e5f848285611e16565b509392505050565b600082601f830112611e7c57611e7b611d60565b5b8135611e8c848260208601611e25565b91505092915050565b60008060008060808587031215611eaf57611eae61199f565b5b6000611ebd87828801611bf5565b9450506020611ece87828801611bf5565b9350506040611edf87828801611b40565b925050606085013567ffffffffffffffff811115611f0057611eff6119a4565b5b611f0c87828801611e67565b91505092959194509250565b600067ffffffffffffffff821115611f3357611f32611d6a565b5b611f3c82611ab3565b9050602081019050919050565b6000611f5c611f5784611f18565b611dca565b905082815260208101848484011115611f7857611f77611d65565b5b611f83848285611e16565b509392505050565b600082601f830112611fa057611f9f611d60565b5b8135611fb0848260208601611f49565b91505092915050565b60008060408385031215611fd057611fcf61199f565b5b6000611fde85828601611bf5565b925050602083013567ffffffffffffffff811115611fff57611ffe6119a4565b5b61200b85828601611f8b565b9150509250929050565b6000806040838503121561202c5761202b61199f565b5b600061203a85828601611bf5565b925050602061204b85828601611bf5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061209c57607f821691505b602082108114156120b0576120af612055565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612112602183611a6f565b915061211d826120b6565b604082019050919050565b6000602082019050818103600083015261214181612105565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006121a4603d83611a6f565b91506121af82612148565b604082019050919050565b600060208201905081810360008301526121d381612197565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612236602d83611a6f565b9150612241826121da565b604082019050919050565b6000602082019050818103600083015261226581612229565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006122a2601883611a6f565b91506122ad8261226c565b602082019050919050565b600060208201905081810360008301526122d181612295565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612334602983611a6f565b915061233f826122d8565b604082019050919050565b6000602082019050818103600083015261236381612327565b9050919050565b600081905092915050565b600061238082611a64565b61238a818561236a565b935061239a818560208601611a80565b80840191505092915050565b60006123b28285612375565b91506123be8284612375565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612426602583611a6f565b9150612431826123ca565b604082019050919050565b6000602082019050818103600083015261245581612419565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006124b8602483611a6f565b91506124c38261245c565b604082019050919050565b600060208201905081810360008301526124e7816124ab565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612524601983611a6f565b915061252f826124ee565b602082019050919050565b6000602082019050818103600083015261255381612517565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006125b6603283611a6f565b91506125c18261255a565b604082019050919050565b600060208201905081810360008301526125e5816125a9565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612622602083611a6f565b915061262d826125ec565b602082019050919050565b6000602082019050818103600083015261265181612615565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061268e601c83611a6f565b915061269982612658565b602082019050919050565b600060208201905081810360008301526126bd81612681565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612720602e83611a6f565b915061272b826126c4565b604082019050919050565b6000602082019050818103600083015261274f81612713565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061277d82612756565b6127878185612761565b9350612797818560208601611a80565b6127a081611ab3565b840191505092915050565b60006080820190506127c06000830187611bb4565b6127cd6020830186611bb4565b6127da6040830185611cca565b81810360608301526127ec8184612772565b905095945050505050565b600081519050612806816119d5565b92915050565b6000602082840312156128225761282161199f565b5b6000612830848285016127f7565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220b1b4986577ea99993ce073e09509abb4273fb1b1688ae7a8e31eb0969056056c64736f6c63430008090033";

type MyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFT__factory extends ContractFactory {
  constructor(...args: MyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyNFT> {
    return super.deploy(overrides || {}) as Promise<MyNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyNFT {
    return super.attach(address) as MyNFT;
  }
  override connect(signer: Signer): MyNFT__factory {
    return super.connect(signer) as MyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new utils.Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyNFT {
    return new Contract(address, _abi, signerOrProvider) as MyNFT;
  }
}
