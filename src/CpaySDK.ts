import { CpaySDKBase, CpaySDKBaseOptions } from "./CpaySDKBase";

import {
  CpayToken,
  CreateWalletInfo,
  CreateWalletOptions,
  WalletInfo,
} from "./interfaces/cpay.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class CpaySDK extends CpaySDKBase {
  /**
   * @param parameters
   */
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  setOptions = (options: CpaySDKOptions) => {
    super.setOptions(options);
  };

  private auth(): Promise<CpayToken> {
    if (this.options.publicKey && this.options.privateKey) {
      const path = `/api/public/auth`;
      let data = {
        publicKey: this.options.publicKey,
        privateKey: this.options.privateKey,
      };

      if (this.options.walletId) {
        data = Object.assign(data, { walletId: this.options.walletId });
      }

      return this.request<CpayToken>(`${path}`, {
        method: "POST",
        json: data,
      });
    } else {
      throw new Error("Keys is required.");
    }
  }

  async createWallet(options: CreateWalletOptions): Promise<CreateWalletInfo> {
    try {
      const { token } = await this.auth();
      const path = `/api/public/wallet/${options.currency}`;

      return this.auth_post<CreateWalletInfo>(`${path}`, null, token);
    } catch (err) {
      throw err;
    }
  }

  async getWalletInfo(): Promise<WalletInfo> {
    try {
      if (!this.options.walletId) {
        throw new Error("WalletId is required.");
      }
      const { token } = await this.auth();
      const path = `/api/public/wallet`;

      return this.auth_get<WalletInfo>(`${path}`, null, token);
    } catch (err) {
      throw err;
    }
  }
}

export default CpaySDK;
