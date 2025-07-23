import { CoineraSDKBase, CoineraSDKBaseOptions } from "../CoineraSDKBase";
import {
  TransactionListInfo,
  TransactionListOptions
} from "./transaction.interface";

export interface CoineraSDKOptions extends CoineraSDKBaseOptions {}

export class Transaction extends CoineraSDKBase {
  constructor(parameters: CoineraSDKOptions) {
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
