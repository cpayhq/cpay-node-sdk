import { MemoizeExpiring } from "typescript-memoize";

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

  @MemoizeExpiring(
    60000 *,
    (publicKey: string, privateKey: string, walletId?: string) => {
      return publicKey + ";" + privateKey + ";" + walletId;
    }
  )
  private auth(
    publicKey: string,
    privateKey: string,
    walletId?: string
  ): Promise<CpayToken> {
    if (this.options.publicKey && this.options.privateKey) {
      const path = `/api/public/auth`;
      let data = {
        publicKey,
        privateKey,
      };

      if (walletId) {
        data = Object.assign(data, { walletId });
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
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
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
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId
      );
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
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId
      );
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
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId
      );
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
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId
      );
      const path = `/api/public/transaction/income`;

      return this.auth_post<boolean>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }
}

export default CpaySDK;
