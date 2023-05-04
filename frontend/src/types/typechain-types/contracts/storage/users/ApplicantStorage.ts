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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type ApplicantStruct = {
  name: PromiseOrValue<string>;
  applicantAddress: PromiseOrValue<string>;
  createdAt: PromiseOrValue<BigNumberish>;
};

export type ApplicantStructOutput = [string, string, BigNumber] & {
  name: string;
  applicantAddress: string;
  createdAt: BigNumber;
};

export interface ApplicantStorageInterface extends utils.Interface {
  functions: {
    "createApplicant(address,string)": FunctionFragment;
    "getApplicantByAddress(address)": FunctionFragment;
    "isApplicantExists(address)": FunctionFragment;
    "setAddresses(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createApplicant"
      | "getApplicantByAddress"
      | "isApplicantExists"
      | "setAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createApplicant",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getApplicantByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApplicantExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddresses",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createApplicant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApplicantByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApplicantExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ApplicantStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ApplicantStorageInterface;

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
    createApplicant(
      applicantAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getApplicantByAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[ApplicantStructOutput]>;

    isApplicantExists(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setAddresses(
      applicantEndpointAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createApplicant(
    applicantAddress: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getApplicantByAddress(
    inputAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<ApplicantStructOutput>;

  isApplicantExists(
    inputAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setAddresses(
    applicantEndpointAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createApplicant(
      applicantAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getApplicantByAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<ApplicantStructOutput>;

    isApplicantExists(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setAddresses(
      applicantEndpointAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createApplicant(
      applicantAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getApplicantByAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApplicantExists(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAddresses(
      applicantEndpointAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createApplicant(
      applicantAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getApplicantByAddress(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApplicantExists(
      inputAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddresses(
      applicantEndpointAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
