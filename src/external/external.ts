import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  ExternalEstimateWriteInfo,
  ExternalOptions,
  ExternalWriteInfo,
} from "./external.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class External extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async read(options: ExternalOptions): Promise<any> {
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
      const path = `/api/public/external/read`;

      return this.auth_post<any>(`${path}`, { ...options }, token);
    } catch (err) {
      throw err;
    }
  }

  async estimateWrite(
    options: ExternalOptions
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
      const path = `/api/public/external/estimateWrite`;

      return this.auth_post<ExternalEstimateWriteInfo>(
        `${path}`,
        { ...options },
        token
      );
    } catch (err) {
      throw err;
    }
  }

  async write(options: ExternalOptions): Promise<ExternalWriteInfo> {
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
      const path = `/api/public/external/write`;

      return this.auth_post<ExternalWriteInfo>(
        `${path}`,
        { ...options },
        token
      );
    } catch (err) {
      throw err;
    }
  }
}

export default External;
