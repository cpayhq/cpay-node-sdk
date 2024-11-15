import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  CreateWalletInfo,
  CreateWalletOptions,
  WalletInfo,
} from "./wallet.interface";
import { WalletSignature } from "./wallet.signature";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Wallet extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
    this.signature = new WalletSignature(parameters);
  }

  signature: WalletSignature;

  async createDepositWallet(
    options: CreateWalletOptions,
    accessToken?: string
  ): Promise<CreateWalletInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken();
      }
      const path = `/api/public/wallet/${options.currencyId}`;

      delete options.currencyId;

      return this.auth_post<CreateWalletInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async getWalletInfo(accessToken?: string): Promise<WalletInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet`;

      return this.auth_get<WalletInfo>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async getPrivateKey(accessToken?: string): Promise<string> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/private-key`;

      return this.auth_get<string>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async getMnemonic(accessToken?: string): Promise<string> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/mnemonic`;

      return this.auth_get<string>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }
}

export default Wallet;
