import { PaytonzSDKBase, PaytonzSDKBaseOptions } from "../PaytonzSDKBase";
import { RegisterInfo, RegisterOptions } from "./auth.interface";

export interface PaytonzSDKOptions extends PaytonzSDKBaseOptions {}

export class Auth extends PaytonzSDKBase {
  constructor(parameters: PaytonzSDKOptions) {
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
