interface MultisendFileOptions {
  address: string;
  amount: string;
}

export interface EstimateSystemFeeOptions {
  currencyToken: string;
  multisendWallets: MultisendFileOptions[];
}

export interface EstimateMultisendInfo {
  estimationId: string;
  countTxs: number;
  systemFee: string;
  minerFee: string;
  totalAmount: string;
  allowance: string;
  currencyFee: string;
  needApprove: boolean;
  multisendWallets: MultisendFileOptions[];
}

export interface EstimateMultisendCommonOptions {
  estimationId: string;
}

export interface MultisendInfo {
  ids: string[];
}
