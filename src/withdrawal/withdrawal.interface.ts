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

export interface CreateWithdrawalOptions {
  to: string;
  amount: string;
  priorityFee?: number;
  currencyToken?: string;
}

export interface EstimateFeeOptions {
  to: string;
  amount: string;
  priority: boolean;
  currencyToken?: string;
}
