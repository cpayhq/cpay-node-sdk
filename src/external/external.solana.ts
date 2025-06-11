import { CryptoNowSDKBase, CryptoNowSDKBaseOptions } from "../CryptoNowSDKBase";
import {
  ExternalEstimateWriteInfo,
  ExternalSolanaMintNftInfo,
  ExternalSolanaMintNftOptions,
} from "./external.interface";

export interface CryptoNowSDKOptions extends CryptoNowSDKBaseOptions {}

export class ExternalSolana extends CryptoNowSDKBase {
  constructor(parameters: CryptoNowSDKOptions) {
    super(parameters);
  }

  async mintNft(
    options: ExternalSolanaMintNftOptions,
    accessToken?: string
  ): Promise<ExternalSolanaMintNftInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/external/mint-solana-nft`;

      return this.auth_post<ExternalSolanaMintNftInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async estimateMintNft(
    options: ExternalSolanaMintNftOptions,
    accessToken?: string
  ): Promise<ExternalEstimateWriteInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/external/mint-solana-nft/estimate`;

      return this.auth_post<ExternalEstimateWriteInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}
