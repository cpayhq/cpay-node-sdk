import { CryptoNowSDKBase, CryptoNowSDKBaseOptions } from "../CryptoNowSDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface CryptoNowSDKOptions extends CryptoNowSDKBaseOptions {}

export class Currency extends CryptoNowSDKBase {
  constructor(parameters: CryptoNowSDKOptions) {
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
