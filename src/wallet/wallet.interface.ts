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

export interface WalletInfo {
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

export interface CreateWalletOptions {
  currencyId: string;
  typeWallet?: string;
  privateKey?: string;
  isMnemonic?: boolean;
  password?: string;
  setMain?: boolean;
  isNew?: boolean;
}

export interface CreateWalletInfo {
  id: string;
  address: string;
  balance: number;
  balanceUSD: number;
  passphrase: string;
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
