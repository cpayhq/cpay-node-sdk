import { FinvaroSDKBase, FinvaroSDKBaseOptions } from "../FinvaroSDKBase";
import {
  CreateWalletInfo,
  CreateWalletOptions,
  WalletInfo,
} from "./wallet.interface";
import { WalletSignature } from "./wallet.signature";

export interface FinvaroSDKOptions extends FinvaroSDKBaseOptions {}

export class Wallet extends FinvaroSDKBase {
  constructor(parameters: FinvaroSDKOptions) {
    super(parameters);
    this.signature = new WalletSignature(parameters);
  }

  signature: WalletSignature;

  async createDepositWallet(
    options: CreateWalletOptions
  ): Promise<CreateWalletInfo> {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/wallet/${options.currencyId}`;

      delete options.currencyId;

      return this.auth_post<CreateWalletInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async getWalletInfo(): Promise<WalletInfo> {
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
      const path = `/api/public/wallet`;

      return this.auth_get<WalletInfo>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async getPrivateKey(): Promise<string> {
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
      const path = `/api/public/wallet/private-key`;

      return this.auth_get<string>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }

  async getMnemonic(): Promise<string> {
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
      const path = `/api/public/wallet/mnemonic`;

      return this.auth_get<string>(`${path}`, {}, token);
    } catch (err) {
      throw err;
    }
  }
}

export default Wallet;
