/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ApplicantEndpoint,
  ApplicantEndpointInterface,
} from "../../../contracts/endpoints/ApplicantEndpoint";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "applicantStorageAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "applicantAddress",
        type: "address",
      },
    ],
    name: "getApplicantByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "applicantAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct Applicant",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "applicantAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "registerApplicant",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b42380380610b42833981810160405281019061003291906101c8565b61004c67fcd02b0c1669238c60c01b61016260201b60201c565b6100666749465789ca12a8e860c01b61016260201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100c0672ccdf36905d211be60c01b61016260201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061011b674fc0f886668f647d60c01b61016260201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101f5565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101958261016a565b9050919050565b6101a58161018a565b81146101b057600080fd5b50565b6000815190506101c28161019c565b92915050565b6000602082840312156101de576101dd610165565b5b60006101ec848285016101b3565b91505092915050565b61093e806102046000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063026ff3df1461003b578063e588c64d1461006b575b600080fd5b61005560048036038101906100509190610337565b61009b565b6040516100629190610487565b60405180910390f35b610085600480360381019061008091906105de565b610196565b6040516100929190610655565b60405180910390f35b6100a361028e565b6100b7676453ab01ee9ead4260c01b61028b565b6100cb67adc95ad4069df24260c01b61028b565b6100df673407bfe6a0aee0c460c01b61028b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663026ff3df836040518263ffffffff1660e01b815260040161013a919061067f565b60006040518083038186803b15801561015257600080fd5b505afa158015610166573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061018f91906107ec565b9050919050565b60006101ac67769abda972e4119460c01b61028b565b6101c0678c6a2d2a81cb218160c01b61028b565b6101d467f67de01624640da960c01b61028b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634bd5551984846040518363ffffffff1660e01b815260040161023192919061087f565b602060405180830381600087803b15801561024b57600080fd5b505af115801561025f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028391906108db565b905092915050565b50565b604051806060016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610304826102d9565b9050919050565b610314816102f9565b811461031f57600080fd5b50565b6000813590506103318161030b565b92915050565b60006020828403121561034d5761034c6102cf565b5b600061035b84828501610322565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561039e578082015181840152602081019050610383565b838111156103ad576000848401525b50505050565b6000601f19601f8301169050919050565b60006103cf82610364565b6103d9818561036f565b93506103e9818560208601610380565b6103f2816103b3565b840191505092915050565b6000610408826102d9565b9050919050565b610418816103fd565b82525050565b6000819050919050565b6104318161041e565b82525050565b6000606083016000830151848203600086015261045482826103c4565b9150506020830151610469602086018261040f565b50604083015161047c6040860182610428565b508091505092915050565b600060208201905081810360008301526104a18184610437565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104eb826103b3565b810181811067ffffffffffffffff8211171561050a576105096104b3565b5b80604052505050565b600061051d6102c5565b905061052982826104e2565b919050565b600067ffffffffffffffff821115610549576105486104b3565b5b610552826103b3565b9050602081019050919050565b82818337600083830152505050565b600061058161057c8461052e565b610513565b90508281526020810184848401111561059d5761059c6104ae565b5b6105a884828561055f565b509392505050565b600082601f8301126105c5576105c46104a9565b5b81356105d584826020860161056e565b91505092915050565b600080604083850312156105f5576105f46102cf565b5b600061060385828601610322565b925050602083013567ffffffffffffffff811115610624576106236102d4565b5b610630858286016105b0565b9150509250929050565b60008115159050919050565b61064f8161063a565b82525050565b600060208201905061066a6000830184610646565b92915050565b610679816102f9565b82525050565b60006020820190506106946000830184610670565b92915050565b600080fd5b600080fd5b60006106b76106b28461052e565b610513565b9050828152602081018484840111156106d3576106d26104ae565b5b6106de848285610380565b509392505050565b600082601f8301126106fb576106fa6104a9565b5b815161070b8482602086016106a4565b91505092915050565b61071d816103fd565b811461072857600080fd5b50565b60008151905061073a81610714565b92915050565b6107498161041e565b811461075457600080fd5b50565b60008151905061076681610740565b92915050565b6000606082840312156107825761078161069a565b5b61078c6060610513565b9050600082015167ffffffffffffffff8111156107ac576107ab61069f565b5b6107b8848285016106e6565b60008301525060206107cc8482850161072b565b60208301525060406107e084828501610757565b60408301525092915050565b600060208284031215610802576108016102cf565b5b600082015167ffffffffffffffff8111156108205761081f6102d4565b5b61082c8482850161076c565b91505092915050565b600082825260208201905092915050565b600061085182610364565b61085b8185610835565b935061086b818560208601610380565b610874816103b3565b840191505092915050565b60006040820190506108946000830185610670565b81810360208301526108a68184610846565b90509392505050565b6108b88161063a565b81146108c357600080fd5b50565b6000815190506108d5816108af565b92915050565b6000602082840312156108f1576108f06102cf565b5b60006108ff848285016108c6565b9150509291505056fea2646970667358221220bb13775a77ccaddd58ed7a030b2d64d886ceef91bc90fe2081c399d78106daf564736f6c63430008090033";

type ApplicantEndpointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ApplicantEndpointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ApplicantEndpoint__factory extends ContractFactory {
  constructor(...args: ApplicantEndpointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    applicantStorageAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ApplicantEndpoint> {
    return super.deploy(
      applicantStorageAddress,
      overrides || {}
    ) as Promise<ApplicantEndpoint>;
  }
  override getDeployTransaction(
    applicantStorageAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(applicantStorageAddress, overrides || {});
  }
  override attach(address: string): ApplicantEndpoint {
    return super.attach(address) as ApplicantEndpoint;
  }
  override connect(signer: Signer): ApplicantEndpoint__factory {
    return super.connect(signer) as ApplicantEndpoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ApplicantEndpointInterface {
    return new utils.Interface(_abi) as ApplicantEndpointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApplicantEndpoint {
    return new Contract(address, _abi, signerOrProvider) as ApplicantEndpoint;
  }
}
