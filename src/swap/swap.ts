import { FinvaroSDKBase, FinvaroSDKBaseOptions } from "../FinvaroSDKBase";
import {
  SwapCreateInfo,
  SwapCreateOptions,
  SwapEstimateInfo,
  SwapEstimateOptions,
  SwapHistoryInfo,
  SwapHistoryListOptions,
} from "./swap.interface";

export interface FinvaroSDKOptions extends FinvaroSDKBaseOptions {}

export class Swap extends FinvaroSDKBase {
  constructor(parameters: FinvaroSDKOptions) {
    super(parameters);
  }

  async estimate(options: SwapEstimateOptions): Promise<SwapEstimateInfo[]> {
    try {
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

  async bestOffer(options: SwapEstimateOptions): Promise<SwapEstimateInfo> {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey,
        this.options.walletId,
        this.options.passphrase
      );
      const path = `/api/public/swap/best-offer`;

      return this.auth_get<SwapEstimateInfo>(`${path}`, { ...options }, token);
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
