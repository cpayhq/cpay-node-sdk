export interface CpayToken {
  token: string;
}

export interface CreateWalletOptions {
  currency: AvailableWalletCurrencies;
}

export interface CreateWithdrawalOptions {
  to: string;
  amount: number;
  priorityFee?: number;
}

export interface EstimateFeeOptions {
  to: string;
  amount: number;
  priority: boolean;
}

export interface IncomeBalanceOptions {
  amount: number;
}

export interface CreateWalletInfo {
  id: string;
  address: string;
  balance: number;
  balanceUSD: number;
}

export interface CreateWithdrawalInfo {
  id: string;
}

export interface EstimateFeeInfo {
  fee: string;
  ethFee?: string;
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
