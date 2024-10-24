# finvaro-node-sdk

```
npm i finvaro-node-api-sdk
```

```
import FinvaroSDK from 'finvaro-node-api-sdk';

let options = {
  publicKey: 'publicKey',
  privateKey: 'privateKey',
  walletId?: 'walletId',
  passphrase?: 'passphrase'
}
const finvaro = new FinvaroSDK(options)
```

Available Methods:

1. Auth

```
Create account

let options = {
  email: string;
  password: string;
  inviterId?: string;
  roles: string[];
  agent?: string;
}

const result = await finvaro.auth.register(options);
```

2. Wallet

```
Create deposit wallet.

let options = {
  currencyId?: string;
  typeWallet?: string; // user, merchant
  privateKey?: string;
  isMnemonic?: boolean;
  setMain?: boolean;
  password?: string;
  isNew?: boolean;
}
Available Currencies: See point 5.
const wallet = await finvaro.wallet.createDepositWallet(options);
```

```
Get wallet info

walletId - is required.
passphrase - is required.
const walletInfo = await finvaro.wallet.getWalletInfo();

```

```
Get private key

walletId - is required.
passphrase - is required.
const pk = await finvaro.wallet.getPrivateKey();

```

```
Get mnemonic

walletId - is required.
passphrase - is required.
const pk = await finvaro.wallet.getMnemonic();

```

3. Withdrawal

```
Estimate transaction fee.

let options = {
  to: string;
  amount: string;
  priority?: string;
  currencyToken?: string;
  sign?: string;
  password?: string;
  payerFeePrivateKey?: string; // Only solana
  comment?: string; //Only TON
}
walletId - is required.
passphrase - is required.
const estimateFee = await finvaro.withdrawal.estimateFee(options);
```

```
Estimate nft transaction fee.

let options = {
  to: string;
  amount: string;
  contractAddress: string;
  tokenId: number;
  type: string; //erc721 or erc1155
  sign?: string;
  password?: string;
  payerFeePrivateKey?: string; // Only solana
}
walletId - is required.
passphrase - is required.
const estimateFee = await finvaro.withdrawal.estimateNftFee(options);
```

```
Estimate max withdrawal.

let options = {
  to: string;
  currencyToken?: string;
  sign?: string;
  password?: string;
  payerFeePrivateKey?: string; // Only solana
  priority?: string;
}
walletId - is required.
passphrase - is required.
const max = await finvaro.withdrawal.estimateMax(options);
```

```
Create withdrawal request.

let options = {
  to: string;
  amount: string;
  priority?: string;
  currencyToken?: string;
  sign?: string;
  password?: string;
  payerFeePrivateKey?: string; // Only solana
}
walletId - is required.
passphrase - is required.
const withdrawal = await finvaro.withdrawal.create(options);
```

```
Create nft withdrawal request.

let options = {
  to: string;
  amount: string;
  contractAddress: string;
  tokenId: number;
  type: string; //erc721 or erc1155
  sign?: string;
  password?: string;
  payerFeePrivateKey?: string; // Only solana
}
walletId - is required.
passphrase - is required.
const withdrawal = await finvaro.withdrawal.nftTransfer(options);
```

```
Create InternalTransfer request.

let options = {
  to: string;
  amount: string;
}
walletId - is required.
passphrase - is required.
const withdrawal = await finvaro.withdrawal.internalTransfer(options);
```

4. Available merchant currencies

```
let options = {
}
const currencies = await finvaro.currency.getAvailableCurrencies(options);
```

5. Multisend

```
Estimate system fee.
let options = {
  currencyToken: string;
  multisendWallets: { address: string; amount: string }[];
  sign?: string;
  password?: string;
}
const estimateData = await finvaro.multisend.estimateSystemFee(options);
```

```
Approve.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const approveData = await finvaro.multisend.approve(options);
```

```
Estimate miner fee.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const approveData = await finvaro.multisend.estimateMinerFee(options);
```

```
Create multisend.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const result = await finvaro.multisend.create(options);
```

6. Checkout

```
Checkout list.

let options = {
  search?: 'string',
  sort?: string,
  order?: string,
  page?: number,
  limit?: number
}
const checkoutList = await finvaro.checkout.list(options);
```

```
Create donation checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number,
  currencies: string[],
  collectName?: boolean,
  collectEmail?: boolean,
  description: string,
  organizationName: string
}

const createDonation = await finvaro.checkout.createDonation(options);
```

```
Create cart checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  organizationName: string;
  cartName: string;
  fiatCurrency: string;
}

const createDonation = await finvaro.checkout.createCart(options);
```

```
Create sale checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  productName: string;
  price: string;
  fiatCurrency: string;
}

const createSale = await finvaro.checkout.createSale(options);
```

```
Create sale token checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName: boolean;
  collectEmail: boolean;
  description: string;
  productName: string;
  price?: string;
  min: string;
  max: string;
  fiatCurrency?: string;
  fixed: string;
  tradedCurrency: string;
  tradedWallet: string;
}

const createSaleToken = await finvaro.checkout.createSaleToken(options);
```

```
Estimate sale token max value.

let options = {
  tradedWallet: string;
  tradedCurrency: string;
  checkoutId?: string;
}

const saleTokenEstimateMax = await finvaro.checkout.saleTokenEstimateMax(options);
```

```
Get checkout info.

const info = await finvaro.checkout.info(checkoutId: string);
```

```
Delete checkout.

const remove = await finvaro.checkout.remove(checkoutId: string);
```

```
Update donation checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number,
  currencies: string[],
  collectName?: boolean,
  collectEmail?: boolean,
  description: string,
  organizationName: string,
  deleteImage?: boolean;
  deleteLogoImage?: boolean;
}

const updateDonation = await finvaro.checkout.updateDonation(checkoutId, options);
```

```
Update sale checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  productName: string;
  price: string;
  fiatCurrency: string;
  deleteImage?: boolean;
  deleteLogoImage?: boolean;
}

const updateSale = await finvaro.checkout.updateSale(checkoutId, options);
```

```
Update sale token checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName: boolean;
  collectEmail: boolean;
  description: string;
  productName: string;
  price?: string;
  min: string;
  max: string;
  fiatCurrency?: string;
  fixed: string;
  tradedCurrency: string;
  tradedWallet: string;
  deleteImage?: boolean;
  deleteLogoImage?: boolean;
}

const updateSaleToken = await finvaro.checkout.updateSaleToken(checkoutId, options);
```

```
Update cart checkout.

let options = {
  linkImage?: string;
  linkLogoImage?: string;
  metadata?: Record<string, any>;
  accentColor?: string;
  backgroundColor?: string;
  expireTime: number;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  organizationName: string;
  cartName: string;
  fiatCurrency: string;
  deleteImage?: boolean;
  deleteLogoImage?: boolean;
}

const updateCart = await finvaro.checkout.updateCart(checkoutId, options);
```

```
Get charges list by checkout

let options = {
  search?: 'string',
  sort?: string,
  order?: string,
  page?: number,
  limit?: number
}

const updateSaleToken = await finvaro.checkout.chargeList(checkoutId, options);
```

7. Transaction

```
Transaction list.
walletId - is required.
passphrase - is required.

let options = {
  search?: string;
  from?: number;
  to?: number;
  currencyId?: string;
  fromUSD?: number;
  toUSD?: number;
  type?: string;
  status?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
const transactionList = await finvaro.transaction.list(options);
```

8. External call

```
Read from contract.
walletId - is required.
passphrase - is required.

let options = {
  abi: Record<string, any>[];
  contractAddress: string;
  method: string;
  args?: any[];
  value?: string;
  options?: Record<string, any>;
}
const info = await finvaro.externalCall.read(options);
```

```
Estimate write.
walletId - is required.
passphrase - is required.

let options = {
  abi: Record<string, any>[];
  contractAddress: string;
  method: string;
  args?: any[];
  value?: string;
  options?: Record<string, any>;
  sign?: string;
  password?: string;
}
const info = await finvaro.externalCall.estimateWrite(options);
```

```
Write to the contract.
walletId - is required.
passphrase - is required.

let options = {
  abi: Record<string, any>[];
  contractAddress: string;
  method: string;
  args?: any[];
  value?: string;
  options?: Record<string, any>;
  sign?: string;
  password?: string;
}
const info = await finvaro.externalCall.write(options);
```

```
Mint Solana Nft
walletId - is required.
passphrase - is required.

let options = {
  name: string;
  description: string;
  symbol: string;
  attributes?: SolanaMetadataOptions[];
  type: SolanaNftType;
  image?: string;
  sellerFeeBasisPoints?: number;
  collectionAddress?: string;
  storage?: SolanaNftStorageType;
  collectionInfo?: SolanaCollectionInfo;
  payerFeePrivateKey?: string;
  sign?: string;
  password?: string;
  tokenOwner?: string;
  creators?: {address: string; share: number}[]
  imageLink?: srting;
}
const result = await finvaro.externalCall.solana.mintNft(options);
```

```
Estimate Mint Solana Nft
walletId - is required.
passphrase - is required.

let options = {
  name: string;
  description: string;
  symbol: string;
  attributes?: SolanaMetadataOptions[];
  type: SolanaNftType;
  image: string;
  sellerFeeBasisPoints?: number;
  collectionAddress?: string;
  storage?: SolanaNftStorageType;
  collectionInfo?: SolanaCollectionInfo;
  payerFeePrivateKey?: string;
  sign?: string;
  password?: string;
  tokenOwner?: string;
  creators?: {address: string; share: number}[]
  imageLink?: srting;
}
const result = await finvaro.externalCall.solana.estimateMintNft(options);
```

9. Swap

```
Estimate swap
walletId - is not required.
passphrase - is not required.

let options = {
  fromId: string; // currencyId
  toId: string; // currencyId
  amount: string;
  sort?: string; // rate or duration
  type?: string; // fixed or float
}
const result = await finvaro.swap.estimate(options);
```

```
Best offer swap
walletId - is required.
passphrase - is required.

let options = {
  fromId: string; // currencyId
  toId: string; // currencyId
  amount: string;
  type?: string; // fixed or float
}
const result = await finvaro.swap.bestOffer(options);
```

```
Create swap
walletId - is required.
passphrase - is required.

let options = {
  currencyFromId: string; // currencyId
  toId: string; // walletId
  currencyToId: string; // currencyId
  amount: number;
  partner: string;
  fixed: boolean;
  rateId: string;
  sign?: string;
  password?: string;
}
const result = await finvaro.swap.create(options);
```

```
History swap
walletId - is not required.
passphrase - is not required.

let options = {
  currencyFromId?: string;
  currencyToId?: string;
  search?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}
const result = await finvaro.swap.history(options);
```

10. Wallet Signature

```
Enable Signature
walletId - is required.
passphrase - is required.

let options = {
  sign: string;
  password?: string;
}
const result = await finvaro.wallet.signature.on(options);
```

```
Disable Signature
walletId - is required.
passphrase - is required.

let options = {
  password: string;
}
const result = await finvaro.wallet.signature.off(options);
```

```
Download Signature
walletId - is required.
passphrase - is required.

let options = {
  password: string;
}
const result = await finvaro.wallet.signature.download(options);
```

```
Status Signature
walletId - is required.
passphrase - is required.

const result = await finvaro.wallet.signature.status();
```

```
Change Password Signature
walletId - is required.
passphrase - is required.

let options = {
  oldPassword?: string;
  password: string;
}
const result = await finvaro.wallet.signature.changePassword(options);
```

```
Get Status Password Signature
walletId - is required.
passphrase - is required.

const result = await finvaro.wallet.signature.passwordStatus();
```
