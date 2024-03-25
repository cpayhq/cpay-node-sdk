import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  ExternalEstimateWriteInfo,
  ExternalSolanaMintNftInfo,
  ExternalSolanaMintNftOptions,
} from "./external.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class ExternalSolana extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async mintNft(
    options: ExternalSolanaMintNftOptions
  ): Promise<ExternalSolanaMintNftInfo> {
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
      const path = `/api/public/external/mint-solana-nft`;

      return this.auth_post<ExternalSolanaMintNftInfo>(
        `${path}`,
        options,
        token
      );
    } catch (err) {
      throw err;
    }
  }

  async estimateMintNft(
    options: ExternalSolanaMintNftOptions
  ): Promise<ExternalEstimateWriteInfo> {
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
      const path = `/api/public/external/mint-solana-nft/estimate`;

      return this.auth_post<ExternalEstimateWriteInfo>(
        `${path}`,
        options,
        token
      );
    } catch (err) {
      throw err;
    }
  }
}
