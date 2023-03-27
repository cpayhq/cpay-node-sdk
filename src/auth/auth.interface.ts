export interface RegisterOptions {
  email: string;
  password: string;
  inviterId?: string;
  roles: string[];
  agent?: string;
}

export interface RegisterInfo {
  wallets: {
    id: string;
    address: string;
    privateKey: string;
    mnemonic: string;
    actualBalance: string;
    systemBalance: string;
    passphrase: string;
    nodeType: string;
  }[];
  apiKey: {
    publicKey: string;
    privateKey: string;
  };
}
