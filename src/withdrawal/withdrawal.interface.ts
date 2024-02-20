import { AccessWalletOptions } from "src/interfaces/cpay.interface";

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

export interface CreateWithdrawalOptions extends AccessWalletOptions {
  to: string;
  amount: string;
  priorityFee?: number;
  currencyToken?: string;
}

export interface InternalTransferOptions {
  to: string;
  amount: string;
}

export interface EstimateFeeOptions extends AccessWalletOptions {
  to: string;
  amount: string;
  priority: boolean;
  currencyToken?: string;
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
}

export interface CreateNftWithdrawalOptions extends EstimateFeeNftOptions {}

export interface EstimateMaxOptions extends AccessWalletOptions {
  to: string;
  currencyToken?: string;
}
