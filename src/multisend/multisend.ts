import { CpaySDKBase, CpaySDKBaseOptions } from "../CpaySDKBase";
import {
  EstimateMultisendCommonOptions,
  EstimateMultisendInfo,
  EstimateSystemFeeOptions,
  MultisendInfo,
} from "./multisend.interface";

export interface CpaySDKOptions extends CpaySDKBaseOptions {}

export class Multisend extends CpaySDKBase {
  constructor(parameters: CpaySDKOptions) {
    super(parameters);
  }

  async estimateSystemFee(
    options: EstimateSystemFeeOptions,
    accessToken?: string
  ): Promise<EstimateMultisendInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/multisend/estimateSystemFee`;

      return this.auth_post<EstimateMultisendInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async approve(
    options: EstimateMultisendCommonOptions,
    accessToken?: string
  ): Promise<EstimateMultisendInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/multisend/approve`;

      return this.auth_post<EstimateMultisendInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async estimateMinerFee(
    options: EstimateMultisendCommonOptions,
    accessToken?: string
  ): Promise<EstimateMultisendInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/multisend/estimateMinerFee`;

      return this.auth_post<EstimateMultisendInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async create(
    options: EstimateMultisendCommonOptions,
    accessToken?: string
  ): Promise<MultisendInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/multisend`;

      return this.auth_post<MultisendInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }
}
