import { AccessWalletOptions } from "src/interfaces/clarnium.interface";

export interface ExternalOptions extends AccessWalletOptions {
  abi: Record<string, any>[];
  contractAddress: string;
  method: string;
  args?: any[];
  value?: string;
  options?: Record<string, any>;
}

export interface ExternalEstimateWriteInfo {
  gasPrice?: string;
  gasLimit?: string;
  fee: string;
}

export interface ExternalWriteInfo {
  _id: string;
  hash: string;
}

export interface ExternalSolanaMintNftInfo extends ExternalWriteInfo {
  address: string;
}

export interface SolanaMetadataOptions {
  trait_type: string;
  value: string;
}

export enum SolanaNftType {
  COLLECTION = "collection",
  NFT = "nft",
}

export enum SolanaNftStorageType {
  CPAY = "cpay",
}

export interface SolanaCollectionInfo {
  name: string;
  family: string;
}

export interface ExternalSolanaMintNftOptions extends AccessWalletOptions {
  name: string;
  description: string;
  symbol: string;
  attributes?: SolanaMetadataOptions[];
  type: SolanaNftType;
  image?: string;
  sellerFeeBasisPoints?: number;
  collectionAddress?: string;
  storage?: SolanaNftStorageType;
  collectionInfo?: SolanaCollectionInfo;
  payerFeePrivateKey?: string;
  tokenOwner?: string;
  creators?: { address: string; share: number }[];
  imageLink?: string;
}
