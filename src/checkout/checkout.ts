import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import { BasePaginationOptions } from "../interfaces/cpay.interface";
import {
  CheckoutInfo,
  CheckoutListInfo,
  CreateDonationOptions,
  CreateSaleOptions,
  CreateSaleTokenOptions,
  SaleTokenEstimateMaxOptions,
  UpdateDonationOptions,
  UpdateSaleOptions,
  UpdateSaleTokenOptions,
} from "./checkout.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Checkout extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async list(options: BasePaginationOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout`;

      return this.auth_get<CheckoutListInfo>(`${path}`, { ...options }, token);
    } catch (err) {
      throw err;
    }
  }

  async info(checkoutId: string) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/${checkoutId}`;

      return this.auth_get<CheckoutInfo>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async remove(checkoutId: string) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/${checkoutId}`;

      return this.auth_delete<boolean>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async createDonation(options: CreateDonationOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/donation`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async createSale(options: CreateSaleOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/sale`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async createSaleToken(options: CreateSaleTokenOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/saleToken`;

      return this.auth_post<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async saleTokenEstimateMax(options: SaleTokenEstimateMaxOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/saleToken/estimateMax`;

      return this.auth_post<{ max: string }>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async updateDonation(checkoutId: string, options: UpdateDonationOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/${checkoutId}/donation`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async updateSale(checkoutId: string, options: UpdateSaleOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/${checkoutId}/sale`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async updateSaleToken(checkoutId: string, options: UpdateSaleTokenOptions) {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/checkout/${checkoutId}/saleToken`;

      return this.auth_patch<CheckoutInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }
}

export default Checkout;
