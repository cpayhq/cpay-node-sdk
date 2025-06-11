import {
  InstaxGatewaySDKBase,
  InstaxGatewaySDKBaseOptions,
} from "../InstaxGatewaySDKBase";
import { RegisterInfo, RegisterOptions } from "./auth.interface";

export interface InstaxGatewaySDKOptions extends InstaxGatewaySDKBaseOptions {}

export class Auth extends InstaxGatewaySDKBase {
  constructor(parameters: InstaxGatewaySDKOptions) {
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
