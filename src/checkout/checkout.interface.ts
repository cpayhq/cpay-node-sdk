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
  accentColor?: string;
  backgroundColor?: string;
  logoImage?: string;
  image?: string;
  metadata?: Record<string, any>;
  hideRetry?: boolean;
}
export interface CheckoutListInfo {
  entities: CheckoutInfo[];
  page: number;
  pages: number;
  countItem: number;
}

export interface CheckoutChargeListInfo {
  entities: {
    id: boolean;
    systemStatus: string;
    createdAt: string;
    outsideOrderId?: string;
  }[];
  page: number;
  pages: number;
  countItem: number;
}

export interface CreateCheckoutBaseOptions {
  expireTime: number;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  hideRetry?: boolean;
}

export interface UpdateCheckoutBaseOptions {
  deleteImage?: boolean;
  deleteLogoImage?: boolean;
}

export interface CreateDonationOptions extends CreateCheckoutBaseOptions {
  organizationName: string;
}

export interface UpdateDonationOptions
  extends CreateDonationOptions,
    UpdateCheckoutBaseOptions {}

export interface CreateSaleOptions extends CreateCheckoutBaseOptions {
  productName: string;
  price: string;
  fiatCurrency: string;
}

export interface UpdateSaleOptions
  extends CreateSaleOptions,
    UpdateCheckoutBaseOptions {}

export interface CreateCartOptions extends CreateCheckoutBaseOptions {
  cartName: string;
  fiatCurrency: string;
}

export interface UpdateCartOptions
  extends CreateCartOptions,
    UpdateCheckoutBaseOptions {}

export interface CreateSaleTokenOptions extends CreateCheckoutBaseOptions {
  productName: string;
  price?: string;
  min: string;
  max: string;
  fiatCurrency?: string;
  fixed: string;
  tradedCurrency: string;
  tradedWallet: string;
}

export interface UpdateSaleTokenOptions
  extends CreateSaleTokenOptions,
    UpdateCheckoutBaseOptions {}

export interface SaleTokenEstimateMaxOptions {
  tradedWallet: string;
  tradedCurrency: string;
  checkoutId?: string;
}

export interface ChargeTransactionsOptions {
  typeNetwork: string;
  search?: string;
  from?: number;
  to?: number;
  currencyId?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
