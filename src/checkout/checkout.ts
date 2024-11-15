import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import { BasePaginationOptions } from "../interfaces/cpay.interface";
import {
  CheckoutChargeListInfo,
  CheckoutInfo,
  CheckoutListInfo,
  CreateCartOptions,
  CreateDonationOptions,
  CreateSaleOptions,
  CreateSaleTokenOptions,
  SaleTokenEstimateMaxOptions,
  UpdateCartOptions,
  UpdateDonationOptions,
  UpdateSaleOptions,
  UpdateSaleTokenOptions,
} from "./checkout.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Checkout extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async list(options: BasePaginationOptions, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }

      const path = `/api/public/checkout`;

      return this.auth_get<CheckoutListInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async info(checkoutId: string, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}`;

      return this.auth_get<CheckoutInfo>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async remove(checkoutId: string, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}`;

      return this.auth_delete<boolean>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async createDonation(options: CreateDonationOptions, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/donation`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async createSale(options: CreateSaleOptions, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/sale`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async createSaleToken(options: CreateSaleTokenOptions, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/saleToken`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async createCart(options: CreateCartOptions, accessToken?: string) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/cart`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async saleTokenEstimateMax(
    options: SaleTokenEstimateMaxOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/saleToken/estimateMax`;

      return this.auth_post<{ max: string }>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async updateDonation(
    checkoutId: string,
    options: UpdateDonationOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}/donation`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async updateSale(
    checkoutId: string,
    options: UpdateSaleOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}/sale`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async updateSaleToken(
    checkoutId: string,
    options: UpdateSaleTokenOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}/saleToken`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async updateCart(
    checkoutId: string,
    options: UpdateCartOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}/cart`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async chargeList(
    checkoutId: string,
    options?: BasePaginationOptions,
    accessToken?: string
  ) {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/checkout/${checkoutId}/charge-list`;

      return this.auth_get<CheckoutChargeListInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}

export default Checkout;
