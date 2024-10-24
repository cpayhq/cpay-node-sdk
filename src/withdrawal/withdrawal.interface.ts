import { AccessWalletOptions } from "src/interfaces/finvaro.interface";

export interface CreateWithdrawalInfo {
  id: string;
}

export interface EstimateFeeInfo {
  fee: string;
  minerFee: string;
  systemFee?: string;
  merchantFee?: string;
  currencyMinerFee: string;
  currencyFee: string;
}

export interface EstimateFeeNftInfo {
  fee: string;
  minerFee: string;
  systemFee: string;
  currencyMinerFee: string;
  currencySystemFee: string;
}

export interface EstimateMaxInfo {
  amount: string;
}

export enum PriorityTx {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface CreateWithdrawalOptions extends AccessWalletOptions {
  to: string;
  amount: string;
  priority?: PriorityTx;
  currencyToken?: string;
  payerFeePrivateKey?: string;
  comment?: string;
}

export interface InternalTransferOptions {
  to: string;
  amount: string;
}

export interface EstimateFeeOptions extends AccessWalletOptions {
  to: string;
  amount: string;
  priority?: PriorityTx;
  currencyToken?: string;
  payerFeePrivateKey?: string;
}

enum TypeNFt {
  ERC_721 = "erc721",
  ERC_1155 = "erc1155",
}

export interface EstimateFeeNftOptions extends AccessWalletOptions {
  to: string;
  amount: string;
  contractAddress: string;
  tokenId: number;
  type: TypeNFt;
  payerFeePrivateKey?: string;
}

export interface CreateNftWithdrawalOptions extends EstimateFeeNftOptions {}

export interface EstimateMaxOptions extends AccessWalletOptions {
  to: string;
  currencyToken?: string;
  payerFeePrivateKey?: string;
  priority?: PriorityTx;
}
