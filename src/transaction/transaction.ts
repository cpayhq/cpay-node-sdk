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

  async list(
    options: TransactionListOptions,
    accessToken?: string
  ): Promise<TransactionListInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/transaction/list`;

      return this.auth_get<TransactionListInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}

export default Transaction;
