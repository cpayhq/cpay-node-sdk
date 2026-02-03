import { PayblockSDKBase, PayblockSDKBaseOptions } from "../PayblockSDKBase";
import {
  TransactionListInfo,
  TransactionListOptions,
} from "./transaction.interface";

export interface PayblockSDKOptions extends PayblockSDKBaseOptions {}

export class Transaction extends PayblockSDKBase {
  constructor(parameters: PayblockSDKOptions) {
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
