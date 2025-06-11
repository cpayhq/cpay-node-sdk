import { CryptoNowSDKBase, CryptoNowSDKBaseOptions } from "../CryptoNowSDKBase";
import {
  ClientBalancesQuery,
  ClientListInfo,
  ClientListQuery,
  ClientRegisterInfo,
  ClientWalletInfo,
  RegisterClientOptions,
} from "./client.interface";

export interface CryptoNowSDKOptions extends CryptoNowSDKBaseOptions {}

export class Client extends CryptoNowSDKBase {
  constructor(parameters: CryptoNowSDKOptions) {
    super(parameters);
  }

  async register(
    options: RegisterClientOptions,
    accessToken?: string,
  ): Promise<ClientRegisterInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken();
      }
      const path = `/api/public/client/register`;

      return this.auth_post<ClientRegisterInfo>(
        `${path}`,
        options,
        accessToken,
      );
    } catch (err) {
      throw err;
    }
  }

  async list(
    options: ClientListQuery,
    accessToken?: string,
  ): Promise<ClientListInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken();
      }
      const path = `/api/public/client/list`;

      return this.auth_get<ClientListInfo>(
        `${path}`,
        { ...options },
        accessToken,
      );
    } catch (err) {
      throw err;
    }
  }

  async getBalances(
    clientId: string,
    options: ClientBalancesQuery,
    accessToken?: string,
  ): Promise<ClientWalletInfo[]> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken();
      }
      const path = `/api/public/client/balances/${clientId}`;

      return this.auth_get<ClientWalletInfo[]>(
        `${path}`,
        { ...options },
        accessToken,
      );
    } catch (err) {
      throw err;
    }
  }
}

export default Client;
