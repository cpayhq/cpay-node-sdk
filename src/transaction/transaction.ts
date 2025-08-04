import { FineraSDKBase, FineraSDKBaseOptions } from "../FineraSDKBase";
import {
  TransactionListInfo,
  TransactionListOptions
} from "./transaction.interface";

export interface FineraSDKOptions extends FineraSDKBaseOptions {}

export class Transaction extends FineraSDKBase {
  constructor(parameters: FineraSDKOptions) {
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
