import {
  InstaxGatewaySDKBase,
  InstaxGatewaySDKBaseOptions,
} from "../InstaxGatewaySDKBase";
import {
  SwapCreateInfo,
  SwapCreateOptions,
  SwapEstimateInfo,
  SwapEstimateOptions,
  SwapHistoryInfo,
  SwapHistoryListOptions,
} from "./swap.interface";

export interface InstaxGatewaySDKOptions extends InstaxGatewaySDKBaseOptions {}

export class Swap extends InstaxGatewaySDKBase {
  constructor(parameters: InstaxGatewaySDKOptions) {
    super(parameters);
  }

  async estimate(
    options: SwapEstimateOptions,
    accessToken?: string
  ): Promise<SwapEstimateInfo[]> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/swap/estimate`;

      return this.auth_get<SwapEstimateInfo[]>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async bestOffer(
    options: SwapEstimateOptions,
    accessToken?: string
  ): Promise<SwapEstimateInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/swap/best-offer`;

      return this.auth_get<SwapEstimateInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async create(
    options: SwapCreateOptions,
    accessToken?: string
  ): Promise<SwapCreateInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/swap/create`;

      return this.auth_post<SwapCreateInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async history(
    options: SwapHistoryListOptions,
    accessToken?: string
  ): Promise<SwapHistoryInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/swap/history`;

      return this.auth_get<SwapHistoryInfo>(
        `${path}`,
        { ...options },
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }
}
