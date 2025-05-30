import { Auth } from "./auth/auth";
import Checkout from "./checkout/checkout";
import { GemeSDKBaseOptions } from "./GemeSDKBase";
import { Currency } from "./currency/currency";
import External from "./external/external";
import { Multisend } from "./multisend/multisend";
import { Swap } from "./swap/swap";
import Transaction from "./transaction/transaction";
import { Wallet } from "./wallet/wallet";
import { Withdrawal } from "./withdrawal/withdrawal";

export interface GemeSDKOptions extends GemeSDKBaseOptions {}

export class GemeSDK {
  /**
   * @param parameters
   */
  constructor(parameters: GemeSDKOptions) {
    this.wallet = new Wallet(parameters);
    this.currency = new Currency(parameters);
    this.withdrawal = new Withdrawal(parameters);
    this.multisend = new Multisend(parameters);
    this.checkout = new Checkout(parameters);
    this.transaction = new Transaction(parameters);
    this.externalCall = new External(parameters);
    this.auth = new Auth(parameters);
    this.swap = new Swap(parameters);
  }

  wallet: Wallet;
  currency: Currency;
  withdrawal: Withdrawal;
  multisend: Multisend;
  checkout: Checkout;
  transaction: Transaction;
  externalCall: External;
  auth: Auth;
  swap: Swap;
}

export default GemeSDK;
