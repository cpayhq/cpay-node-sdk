import { CpaySDKBaseOptions } from "./CpaySDKBase";
import { Currency } from "./currency/currency";
import { Multisend } from "./multisend/multisend";
import { Wallet } from "./wallet/wallet";
import { Withdrawal } from "./withdrawal/withdrawal";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class CpaySDK {
  /**
   * @param parameters
   */
  constructor(parameters: CpaySDKOptions) {
    this.wallet = new Wallet(parameters);
    this.currency = new Currency(parameters);
    this.withdrawal = new Withdrawal(parameters);
    this.multisend = new Multisend(parameters);
  }

  wallet: Wallet;
  currency: Currency;
  withdrawal: Withdrawal;
  multisend: Multisend;
}

export default CpaySDK;
