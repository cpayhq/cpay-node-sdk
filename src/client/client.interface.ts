export interface RegisterClientOptions {
  name: string;
  email: string;
}

export interface ClientRegisterInfo {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClientBalancesQuery {
  typeNetwork: string;
  hideZeroBalance?: boolean | string;
}

export interface ClientListQuery extends ClientBalancesQuery {
  search?: string;
  sort?: string;
  order?: "ASC" | "DESC";
  page?: number;
  limit?: number;
}

export interface ClientAsset {
  id: string;
  name: string;
  symbol: string;
  balance: string;
  balanceUSD: string;
}

export interface ClientWalletInfo {
  id: string;
  address: string;
  balanceUSD: string;
  assets: ClientAsset[];
}

export interface AggregatedClientInfo extends ClientRegisterInfo {
  wallets: ClientWalletInfo[];
  balanceUSD: string;
}

export interface ClientListInfo {
  page: number;
  pages: number;
  countItems: number;
  entities: AggregatedClientInfo[];
}
