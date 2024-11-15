import { FinvaroSDKBase, FinvaroSDKBaseOptions } from "../FinvaroSDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface FinvaroSDKOptions extends FinvaroSDKBaseOptions {}

export class Currency extends FinvaroSDKBase {
  constructor(parameters: FinvaroSDKOptions) {
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
