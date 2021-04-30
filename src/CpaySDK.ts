import { CpaySDKBase, CpaySDKBaseOptions } from "./CpaySDKBase";

import {
  CpayToken,
  CreateWalletInfo,
  CreateWalletOptions,
  CreateWithdrawalOptions,
  CreateWithdrawalInfo,
  WalletInfo,
  EstimateFeeInfo,
  EstimateFeeOptions,
  IncomeBalanceOptions,
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

  async createDepositWallet(
    options: CreateWalletOptions
  ): Promise<CreateWalletInfo> {
    try {
      const { token } = await this.auth();
      const path = `/api/public/wallet/${options.currency}`;

      return this.auth_post<CreateWalletInfo>(`${path}`, {}, token);
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

      return this.auth_get<WalletInfo>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async withdrawal(
    options: CreateWithdrawalOptions
  ): Promise<CreateWithdrawalInfo> {
    try {
      if (!this.options.walletId) {
        throw new Error("WalletId is required.");
      }
      const { token } = await this.auth();
      const path = `/api/public/withdrawal`;

      return this.auth_post<CreateWithdrawalInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async estimateFee(options: EstimateFeeOptions): Promise<EstimateFeeInfo> {
    try {
      if (!this.options.walletId) {
        throw new Error("WalletId is required.");
      }
      const { token } = await this.auth();
      const path = `/api/public/transaction/fee`;

      return this.auth_post<EstimateFeeInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async setIncomeBalance(options: IncomeBalanceOptions): Promise<boolean> {
    try {
      if (!this.options.walletId) {
        throw new Error("WalletId is required.");
      }
      const { token } = await this.auth();
      const path = `/api/public/transaction/income`;

      return this.auth_post<boolean>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }
}

export default CpaySDK;
