import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  CreateWalletInfo,
  CreateWalletOptions,
  WalletInfo,
} from "./wallet.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Wallet extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async createDepositWallet(
    options: CreateWalletOptions
  ): Promise<CreateWalletInfo> {
    try {
      const { token } = await this.auth(
        this.options.publicKey,
        this.options.privateKey
      );
      const path = `/api/public/wallet/${options.currencyId}`;

      return this.auth_post<CreateWalletInfo>(
        `${path}`,
        options.typeWallet ? { typeWallet: options.typeWallet } : {},
        token
      );
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
}

export default Wallet;
