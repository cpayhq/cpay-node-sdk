import { FinvaroSDKBase, FinvaroSDKBaseOptions } from "../FinvaroSDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface FinvaroSDKOptions extends FinvaroSDKBaseOptions {}

export class Currency extends FinvaroSDKBase {
  constructor(parameters: FinvaroSDKOptions) {
    super(parameters);
  }

  async getAvailableCurrencies(
    options: CurrencyOptions
  ): Promise<CurrencyInfo> {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/currency`;

      return this.auth_get<CurrencyInfo>(`${path}`, { ...options }, token);
    } catch (err) {
      throw err;
    }
  }
}

export default Currency;
