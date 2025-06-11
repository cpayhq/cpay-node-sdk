import { CryptoNowSDKBase, CryptoNowSDKBaseOptions } from "../CryptoNowSDKBase";
import {
  TransactionListInfo,
  TransactionListOptions,
} from "./transaction.interface";

export interface CryptoNowSDKOptions extends CryptoNowSDKBaseOptions {}

export class Transaction extends CryptoNowSDKBase {
  constructor(parameters: CryptoNowSDKOptions) {
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
