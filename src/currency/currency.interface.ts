export interface CurrencyInfo {
  currencies: {
    _id: string;
    title: string;
    name: string;
    nodeType: string;
    currencyType: string;
  }[];
  page: number;
  pages: number;
}

export interface CurrencyOptions {
  page?: number;
  limit?: number;
}
