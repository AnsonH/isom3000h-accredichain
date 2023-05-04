/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type AccreditationStruct = {
  id: PromiseOrValue<BigNumberish>;
  issuer: PromiseOrValue<string>;
  title: PromiseOrValue<string>;
  createdAt: PromiseOrValue<BigNumberish>;
  duration: PromiseOrValue<BigNumberish>;
  nature: PromiseOrValue<string>;
  description: PromiseOrValue<string>;
  isRevoked: PromiseOrValue<boolean>;
  revokeReason: PromiseOrValue<string>;
  revokeTime: PromiseOrValue<BigNumberish>;
};

export type AccreditationStructOutput = [
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  string,
  string,
  boolean,
  string,
  BigNumber
] & {
  id: BigNumber;
  issuer: string;
  title: string;
  createdAt: BigNumber;
  duration: BigNumber;
  nature: string;
  description: string;
  isRevoked: boolean;
  revokeReason: string;
  revokeTime: BigNumber;
};

export interface AccreditationEndpointInterface extends utils.Interface {
  functions: {
    "getAccreditationById(uint256)": FunctionFragment;
    "getAccreditationsByIssuerAddress(address)": FunctionFragment;
    "launchAccreditation(address,string,uint256,uint256,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAccreditationById"
      | "getAccreditationsByIssuerAddress"
      | "launchAccreditation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAccreditationById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccreditationsByIssuerAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "launchAccreditation",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAccreditationById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccreditationsByIssuerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchAccreditation",
    data: BytesLike
  ): Result;

  events: {
    "LaunchAccreditation(uint256,address,string,uint256,uint256,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LaunchAccreditation"): EventFragment;
}

export interface LaunchAccreditationEventObject {
  id: BigNumber;
  issuer: string;
  title: string;
  createdAt: BigNumber;
  duration: BigNumber;
  nature: string;
  description: string;
}
export type LaunchAccreditationEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, string, string],
  LaunchAccreditationEventObject
>;

export type LaunchAccreditationEventFilter =
  TypedEventFilter<LaunchAccreditationEvent>;

export interface AccreditationEndpoint extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccreditationEndpointInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAccreditationById(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[AccreditationStructOutput]>;

    getAccreditationsByIssuerAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[AccreditationStructOutput[]]>;

    launchAccreditation(
      issuer: PromiseOrValue<string>,
      title: PromiseOrValue<string>,
      createdAt: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      nature: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAccreditationById(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<AccreditationStructOutput>;

  getAccreditationsByIssuerAddress(
    inputAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<AccreditationStructOutput[]>;

  launchAccreditation(
    issuer: PromiseOrValue<string>,
    title: PromiseOrValue<string>,
    createdAt: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    nature: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAccreditationById(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<AccreditationStructOutput>;

    getAccreditationsByIssuerAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<AccreditationStructOutput[]>;

    launchAccreditation(
      issuer: PromiseOrValue<string>,
      title: PromiseOrValue<string>,
      createdAt: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      nature: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "LaunchAccreditation(uint256,address,string,uint256,uint256,string,string)"(
      id?: null,
      issuer?: null,
      title?: null,
      createdAt?: null,
      duration?: null,
      nature?: null,
      description?: null
    ): LaunchAccreditationEventFilter;
    LaunchAccreditation(
      id?: null,
      issuer?: null,
      title?: null,
      createdAt?: null,
      duration?: null,
      nature?: null,
      description?: null
    ): LaunchAccreditationEventFilter;
  };

  estimateGas: {
    getAccreditationById(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccreditationsByIssuerAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    launchAccreditation(
      issuer: PromiseOrValue<string>,
      title: PromiseOrValue<string>,
      createdAt: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      nature: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAccreditationById(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccreditationsByIssuerAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    launchAccreditation(
      issuer: PromiseOrValue<string>,
      title: PromiseOrValue<string>,
      createdAt: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      nature: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
