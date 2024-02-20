import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  SignatureChangePasswordOptions,
  SignatureCommonOptions,
  SignatureOnOptions,
} from "./wallet.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class WalletSignature extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async on(options: SignatureOnOptions): Promise<boolean> {
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
      const path = `/api/public/wallet/signature/on`;

      return this.auth_post<boolean>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async off(options: SignatureCommonOptions): Promise<string> {
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
      const path = `/api/public/wallet/signature/off`;

      return this.auth_post<string>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async status(): Promise<boolean> {
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
      const path = `/api/public/wallet/signature/status`;

      return this.auth_get<boolean>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async download(options: SignatureCommonOptions): Promise<string> {
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
      const path = `/api/public/wallet/signature/download`;

      return this.auth_post<string>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async changePassword(
    options: SignatureChangePasswordOptions
  ): Promise<boolean> {
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
      const path = `/api/public/wallet/signature/change-password`;

      return this.auth_post<boolean>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }
}

export default WalletSignature;
