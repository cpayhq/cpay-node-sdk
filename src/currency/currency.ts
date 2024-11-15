import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Currency extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
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
}

export default Currency;
