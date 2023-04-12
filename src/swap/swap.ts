import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  SwapCreateInfo,
  SwapCreateOptions,
  SwapEstimateInfo,
  SwapEstimateOptions,
  SwapHistoryInfo,
  SwapHistoryListOptions,
} from "./swap.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Swap extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async estimate(options: SwapEstimateOptions): Promise<SwapEstimateInfo[]> {
    try {
      if (!this.options.walletId || !this.options.passphrase) {
        throw new Error("WalletId and passphrase is required.");
      }
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId,
        this.options.passphrase
      );
      const path = `/api/public/swap/estimate`;

      return this.auth_get<SwapEstimateInfo[]>(
        `${path}`,
        { ...options },
        token
      );
    } catch (err) {
      throw err;
    }
  }

  async create(options: SwapCreateOptions): Promise<SwapCreateInfo> {
    try {
      if (!this.options.walletId || !this.options.passphrase) {
        throw new Error("WalletId and passphrase is required.");
      }
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId,
        this.options.passphrase
      );
      const path = `/api/public/swap/create`;

      return this.auth_post<SwapCreateInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async history(options: SwapHistoryListOptions): Promise<SwapHistoryInfo> {
    try {
      if (!this.options.walletId || !this.options.passphrase) {
        throw new Error("WalletId and passphrase is required.");
      }
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId,
        this.options.passphrase
      );
      const path = `/api/public/swap/history`;

      return this.auth_get<SwapHistoryInfo>(`${path}`, { ...options }, token);
    } catch (err) {
      throw err;
    }
  }
}
