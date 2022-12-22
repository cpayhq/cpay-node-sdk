export interface ExternalOptions {
  abi: Record<string, any>[];
  contractAddress: string;
  method: string;
  args?: any[];
  value?: string;
  options?: Record<string, any>;
}

export interface ExternalEstimateWriteInfo {
  gasPrice: string;
  gasLimit: string;
  fee: string;
}

export interface ExternalWriteInfo {
  _id: string;
  hash: string;
}
