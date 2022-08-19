import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import { CurrencyInfo, CurrencyOptions } from "./currency.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Currency extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
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
