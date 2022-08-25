export interface CheckoutInfo {
  _id: string;
  identifier: string;
  currencies: string[];
  createdAt: string;
  updatedAt: string;
  organizationName?: string;
  type: string;
  merchant: string;
  expireTime: number;
  description: string;
  collectName: boolean;
  collectEmail: boolean;
  fiatCurrency?: string;
  price?: string;
  productName?: string;
  fixed?: boolean;
  max?: string;
  min?: string;
  tradedCurrency?: string;
  tradedWallet?: string;
}

export interface CheckoutListInfo {
  entities: CheckoutInfo[];
  page: number;
  pages: number;
  countItem: number;
}

export interface CreateDonationOptions {
  expireTime: number;
  linkImage: string;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  organizationName: string;
}

export interface UpdateDonationOptions extends CreateDonationOptions {
  deleteImage?: boolean;
}

export interface CreateSaleOptions {
  expireTime: number;
  linkImage?: string;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  productName: string;
  price: string;
  fiatCurrency: string;
}

export interface UpdateSaleOptions extends CreateSaleOptions {
  deleteImage?: boolean;
}

export interface CreateSaleTokenOptions {
  expireTime: number;
  linkImage: string;
  currencies: string[];
  collectName: boolean;
  collectEmail: boolean;
  description: string;
  productName: string;
  price?: string;
  min: string;
  max: string;
  fiatCurrency?: string;
  fixed: string;
  tradedCurrency: string;
  tradedWallet: string;
}

export interface UpdateSaleTokenOptions extends CreateSaleTokenOptions {
  deleteImage?: boolean;
}

export interface SaleTokenEstimateMaxOptions {
  tradedWallet: string;
  tradedCurrency: string;
  checkoutId?: string;
}
