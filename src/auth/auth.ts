import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import { RegisterInfo, RegisterOptions } from "./auth.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Auth extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async register(options: RegisterOptions): Promise<RegisterInfo> {
    try {
      const path = `/api/public/auth/register`;

      return this.post<RegisterInfo>(`${path}`, { ...options });
    } catch (err) {
      throw err;
    }
  }

  async login(): Promise<string> {
    const { token } = await this.auth(
      this.options.publicKey,
      this.options.privateKey,
      this.options?.walletId,
      this.options?.passphrase
    );

    return token;
  }
}
