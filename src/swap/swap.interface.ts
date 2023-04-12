export interface SwapEstimateOptions {
  toId: string;
  amount: string;
  sort?: string;
  type?: string;
}

export interface SwapCreateOptions {
  currencyFromId: string;
  toId: string;
  currencyToId: string;
  amount: number;
  partner: string;
  fixed: boolean;
  rateId: string;
}

export interface SwapEstimateInfo {
  id: string;
  supportRate: number;
  duration: string;
  min: number;
  max: number;
  fixed: boolean;
  partner: string;
  exists: boolean;
  fromAmount: number;
  fromCurrency: string;
  fromNetwork: string;
  toAmount: number;
  toCurrency: string;
  toNetwork: string;
}

export interface SwapCreateInfo {
  id: string;
  exchangeId: string;
}

export interface SwapHistoryListOptions {
  currencyFromId?: string;
  currencyToId?: string;
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

interface SwapWalletInfo {
  id: string;
  address: string;
  amount: {
    value: number;
    usd: number;
  };
  currency: {
    id: string;
    name: string;
  };
  paymentId: string;
  hash: string;
}

export interface SwapHistoryInfo {
  page: number;
  pages: number;
  countItems: number;
  entities: {
    _id: string;
    exchangeId: string;
    partner: string;
    fixed: boolean;
    typeNetwork: string;
    status: boolean;
    systemStatus: string;
    convertRate: number;
    from: SwapWalletInfo;
    to: SwapWalletInfo;
    merchant: string;
    user: string;
    rateId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
