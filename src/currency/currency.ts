import {
  InstaxGatewaySDKBase,
  InstaxGatewaySDKBaseOptions,
} from "../InstaxGatewaySDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface InstaxGatewaySDKOptions extends InstaxGatewaySDKBaseOptions {}

export class Currency extends InstaxGatewaySDKBase {
  constructor(parameters: InstaxGatewaySDKOptions) {
    super(parameters);
  }

  async getAvailableCurrencies(
    options: CurrencyOptions,
    accessToken?: string
  ): Promise<CurrencyInfo> {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/currency`;

      return this.auth_get<CurrencyInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async getPaymasters(
    options: CurrencyOptions,
    accessToken?: string
  ): Promise<CurrencyInfo> {
    try {
      if (!accessToken) {
        const { token } = await this.auth(
          this.options.publicKey,
          this.options.privateKey
        );
        accessToken = token;
      }
      const path = `/api/public/currency/paymasters`;

      return this.auth_get<CurrencyInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}

export default Currency;
