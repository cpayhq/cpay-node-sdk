interface WalletTokensData {
  currencyId: string;
  balance: string;
  holdBalance: string;
}

export interface WalletInfo {
  balance: string;
  balanceUSD: string;
  holdBalance: string;
  availableBalance: string;
  availableBalanceUSD: string;
  tokens?: WalletTokensData[];
}

export interface CreateWalletOptions {
  currencyId: string;
  typeWallet?: string;
}

export interface CreateWalletInfo {
  id: string;
  address: string;
  balance: number;
  balanceUSD: number;
  passphrase: string;
}
