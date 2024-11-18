import { ClarniumSDKBase, ClarniumSDKBaseOptions } from "../ClarniumSDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface ClarniumSDKOptions extends ClarniumSDKBaseOptions {}

export class Currency extends ClarniumSDKBase {
  constructor(parameters: ClarniumSDKOptions) {
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
