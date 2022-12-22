import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  TransactionListInfo,
  TransactionListOptions,
} from "./transaction.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Transaction extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async list(options: TransactionListOptions): Promise<TransactionListInfo> {
    try {
      if (!this.options.walletId || !this.options.passphrase) {
        throw new Error("WalletId and passphrase is required.");
      }
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId,
        this.options.passphrase
      );
      const path = `/api/public/transaction/list`;

      return this.auth_get<TransactionListInfo>(
        `${path}`,
        { ...options },
        token
      );
    } catch (err) {
      throw err;
    }
  }
}

export default Transaction;
