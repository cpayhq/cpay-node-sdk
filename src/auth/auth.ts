import { InexSDKBase, InexSDKBaseOptions } from "../InexSDKBase";
import { RegisterInfo, RegisterOptions } from "./auth.interface";

export interface InexSDKOptions extends InexSDKBaseOptions {}

export class Auth extends InexSDKBase {
  constructor(parameters: InexSDKOptions) {
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
