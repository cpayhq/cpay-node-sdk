export interface CpayToken {
  token: string;
}

export interface AccessWalletOptions {
  sign?: string;
  password?: string;
}

export interface BasePaginationOptions {
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export interface IGetToken {
  publicKey: string;
  privateKey: string;
  walletId?: string;
  passphrase?: string;
}
