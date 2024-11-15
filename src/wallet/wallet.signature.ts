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

  async on(
    options: SignatureOnOptions,
    accessToken?: string
  ): Promise<boolean> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/on`;

      return this.auth_post<boolean>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async off(
    options: SignatureCommonOptions,
    accessToken?: string
  ): Promise<string> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/off`;

      return this.auth_post<string>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async status(accessToken?: string): Promise<boolean> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/status`;

      return this.auth_get<boolean>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async download(
    options: SignatureCommonOptions,
    accessToken?: string
  ): Promise<string> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/download`;

      return this.auth_post<string>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async changePassword(
    options: SignatureChangePasswordOptions,
    accessToken?: string
  ): Promise<boolean> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/change-password`;

      return this.auth_post<boolean>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async passwordStatus(accessToken?: string): Promise<boolean> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/wallet/signature/password-status`;

      return this.auth_get<boolean>(`${path}`, {}, accessToken);
    } catch (err) {
      throw err;
    }
  }
}

export default WalletSignature;
