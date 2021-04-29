export interface CpayToken {
  token: string;
}

export interface CreateWalletOptions {
  currency: AvailableWalletCurrencies;
}

export interface CreateWalletInfo {
  id: string;
  address: string;
  balance: number;
  balanceUSD: number;
}

export interface WalletInfo {
  incomeBalance: number;
  balance: number;
  balanceUSD: number;
}

export enum AvailableWalletCurrencies {
  eth = "eth",
  btc = "btc",
  usdt = "usdt",
}
