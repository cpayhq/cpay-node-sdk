import {
  InstaxGatewaySDKBase,
  InstaxGatewaySDKBaseOptions,
} from "../InstaxGatewaySDKBase";
import {
  TransactionListInfo,
  TransactionListOptions,
} from "./transaction.interface";

export interface InstaxGatewaySDKOptions extends InstaxGatewaySDKBaseOptions {}

export class Transaction extends InstaxGatewaySDKBase {
  constructor(parameters: InstaxGatewaySDKOptions) {
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
