export interface CpayToken {
  token: string;
}

export interface BasePaginationOptions {
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
