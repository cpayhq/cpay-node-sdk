export interface TransactionListOptions {
  search?: string;
  from?: number;
  to?: number;
  currencyId?: string;
  fromUSD?: number;
  toUSD?: number;
  type?: string;
  status?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export interface TransactionListInfo {
  page: number;
  pages: number;
  countItem: number;
  entities: {
    id: string;
    type: string;
    typeNetwork: string;
    status: boolean;
    systemStatus: string;
    merchant: string;
    user: string;
    checkout?: {
      id: string;
      name: string;
      description: string;
      identifier: string;
      charge: {
        id: string;
      };
    };
    info: {
      incomingTxHash: string;
      currencyId: string;
      currency: string;
      nodeType: string;
      currencyType: string;
      exchangeId: number;
      from: string;
      to: string;
      fromId: string;
      toId: string;
      hashs: [string];
      addresses: [string];
      multisend: {
        address: string;
        value: string;
        usd: string;
      }[];
      amount: { value: string; usd: number };
      minerFee: { value: string; usd: number; currency: string };
      systemFee?: {
        value: string;
        usd: number;
        currency: string;
        hash: string;
      };
      call?: {
        contractAddress: string;
        method: string;
        options: Record<string, any>;
        arguments: any[];
        value: string;
      };
    };
    fees?: Record<string, any>;
    errorMessage?: string;
    createdAt: Date;
    updatedAt?: Date;
  }[];
}
