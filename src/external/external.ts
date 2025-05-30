import { GemeSDKBase, GemeSDKBaseOptions } from "../GemeSDKBase";
import {
  ExternalEstimateWriteInfo,
  ExternalOptions,
  ExternalWriteInfo,
} from "./external.interface";
import { ExternalSolana } from "./external.solana";

export interface GemeSDKOptions extends GemeSDKBaseOptions {}

export class External extends GemeSDKBase {
  constructor(parameters: GemeSDKOptions) {
    super(parameters);
    this.solana = new ExternalSolana(parameters);
  }

  solana: ExternalSolana;

  async read(options: ExternalOptions, accessToken?: string): Promise<any> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/external/read`;

      return this.auth_post<any>(`${path}`, { ...options }, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async estimateWrite(
    options: ExternalOptions,
    accessToken?: string
  ): Promise<ExternalEstimateWriteInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/external/estimateWrite`;

      return this.auth_post<ExternalEstimateWriteInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async write(
    options: ExternalOptions,
    accessToken?: string
  ): Promise<ExternalWriteInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/external/write`;

      return this.auth_post<ExternalWriteInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}

export default External;
