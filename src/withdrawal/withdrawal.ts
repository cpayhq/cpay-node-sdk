import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  CreateWithdrawalInfo,
  CreateWithdrawalOptions,
  EstimateFeeInfo,
  EstimateFeeOptions,
  InternalTransferOptions,
} from "./withdrawal.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Withdrawal extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async create(
    options: CreateWithdrawalOptions
  ): Promise<CreateWithdrawalInfo> {
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
      const path = `/api/public/withdrawal`;

      return this.auth_post<CreateWithdrawalInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async internalTransfer(
    options: InternalTransferOptions
  ): Promise<CreateWithdrawalInfo> {
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
      const path = `/api/public/withdrawal/internal`;

      return this.auth_post<CreateWithdrawalInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }

  async estimateFee(options: EstimateFeeOptions): Promise<EstimateFeeInfo> {
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
      const path = `/api/public/transaction/fee`;

      return this.auth_post<EstimateFeeInfo>(`${path}`, options, token);
    } catch (err) {
      throw err;
    }
  }
}

export default Withdrawal;
