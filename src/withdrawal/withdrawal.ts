import { InexSDKBase, InexSDKBaseOptions } from "../InexSDKBase";
import {
  CreateNftWithdrawalOptions,
  CreateWithdrawalInfo,
  CreateWithdrawalOptions,
  EstimateFeeInfo,
  EstimateFeeNftInfo,
  EstimateFeeNftOptions,
  EstimateFeeOptions,
  EstimateMaxInfo,
  EstimateMaxOptions,
  InternalTransferOptions,
} from "./withdrawal.interface";

export interface InexSDKOptions extends InexSDKBaseOptions {}

export class Withdrawal extends InexSDKBase {
  constructor(parameters: InexSDKOptions) {
    super(parameters);
  }

  async create(
    options: CreateWithdrawalOptions,
    accessToken?: string
  ): Promise<CreateWithdrawalInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/withdrawal`;

      return this.auth_post<CreateWithdrawalInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async nftTransfer(
    options: CreateNftWithdrawalOptions,
    accessToken?: string
  ): Promise<CreateWithdrawalInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/withdrawal/nft`;

      return this.auth_post<CreateWithdrawalInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async internalTransfer(
    options: InternalTransferOptions,
    accessToken?: string
  ): Promise<CreateWithdrawalInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/withdrawal/internal`;

      return this.auth_post<CreateWithdrawalInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async estimateFee(
    options: EstimateFeeOptions,
    accessToken?: string
  ): Promise<EstimateFeeInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/transaction/fee`;

      return this.auth_post<EstimateFeeInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }

  async estimateNftFee(
    options: EstimateFeeNftOptions,
    accessToken?: string
  ): Promise<EstimateFeeNftInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/transaction/feeNft`;

      return this.auth_post<EstimateFeeNftInfo>(
        `${path}`,
        options,
        accessToken
      );
    } catch (err) {
      throw err;
    }
  }

  async estimateMax(
    options: EstimateMaxOptions,
    accessToken?: string
  ): Promise<EstimateMaxInfo> {
    try {
      if (!accessToken) {
        accessToken = await this.getToken(true);
      }
      const path = `/api/public/withdrawal/estimate-max`;

      return this.auth_post<EstimateMaxInfo>(`${path}`, options, accessToken);
    } catch (err) {
      throw err;
    }
  }
}

export default Withdrawal;
