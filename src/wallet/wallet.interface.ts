interface WalletTokensData {
  currencyId: string;
  currencyName: string;
  balance: string;
  holdBalance: string;
  balanceUSD: string;
  availableBalance: string;
  availableBalanceUSD: string;
}

interface NftItem {
  contractAddress: string;
  tokenId: number;
  balance: number;
  holdBalance: number;
  name: string;
  symbol: string;
}

interface NftData {
  erc721: NftItem[];
  erc1155: NftItem[];
}

export interface WalletInfoV1 {
  id: string;
  address: string;
  currencyId: string;
  balance: string;
  balanceUSD: string;
  holdBalance: string;
  availableBalance: string;
  availableBalanceUSD: string;
  tokens?: WalletTokensData[];
  nfts?: NftData;
}

export interface WalletBalanceV2 {
  currency: {
    id: string;
    name: string;
    nodeType: string;
    currencyType: string;
  };
  balance: {
    value: string;
    usd: number;
    hold: string;
  };
}

export type ChainSymbol = "evm" | "solana" | "trx" | "ton" | "btc" | "dot" | "ksm";

export interface WalletInfoV2 {
  _id: string;
  address: string;
  main: boolean;
  typeWallet: string;
  balances: WalletBalanceV2[];
  createdAt: string;
  isSegwit: boolean;
  chainSymbol: ChainSymbol;
}

export type WalletInfo = WalletInfoV1 | WalletInfoV2;

export const isWalletInfoV2 = (info: WalletInfo): info is WalletInfoV2 =>
  (info as WalletInfoV2).balances !== undefined;

export enum WalletVersion {
  v1 = "v1",
  v2 = "v2",
}

export interface CreateWalletOptions {
  currencyId: string;
  typeWallet?: string;
  privateKey?: string;
  isMnemonic?: boolean;
  password?: string;
  setMain?: boolean;
  isNew?: boolean;
  walletVersion?: WalletVersion;
  clientId?: string;
}

export interface CreateMulticurrencyWalletsOptions {
  currenciesIds: string[];
  typeWallet?: string;
  privateKey?: string;
  isMnemonic?: boolean;
  password?: string;
  setMain?: boolean;
  isNew?: boolean;
  walletVersion?: WalletVersion;
  clientId?: string;
}

export interface SupportCurrency {
  id: string;
  name: string;
  nodeType: string;
}

export interface CreateWalletInfo {
  id: string;
  address: string;
  privateKey?: string;
  mnemonic?: string;
  actualBalance?: string;
  systemBalance?: string;
  passphrase?: string | null;
  nodeType?: string;
  supportCurrencies?: SupportCurrency[];
}

export interface SignatureCommonOptions {
  password?: string;
}

export interface SignatureOnOptions extends SignatureCommonOptions {
  sign: string;
}

export interface SignatureChangePasswordOptions {
  oldPassword?: string;
  password: string;
}
