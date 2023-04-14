export interface CurrencyInfo {
  currencies: {
    _id: string;
    title: string;
    name: string;
    nodeType: string;
    currencyType: string;
    mainCurrency?: string;
    replenishMinimumValue?: number;
    decimals: number;
    supportMultisend: boolean;
    supportSwap: boolean;
  }[];
  page: number;
  pages: number;
}

export interface CurrencyOptions {
  page?: number;
  limit?: number;
}
