# cpay-node-sdk

```
npm i cpay-node-api-sdk
```

```
import CpaySDK from 'cpay-node-api-sdk';

let options = {
  publicKey: 'publicKey',
  privateKey: 'privateKey',
  walletId?: 'walletId',
  passphrase?: 'passphrase'
}
const cpay = new CpaySDK(options)
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

const result = await cpay.auth.register(options);
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
}
Available Currencies: See point 5.
const wallet = await cpay.wallet.createDepositWallet(options);
```

```
Get wallet info

walletId - is required.
passphrase - is required.
const walletInfo = await cpay.wallet.getWalletInfo();

```

```
Get private key

walletId - is required.
passphrase - is required.
const pk = await cpay.wallet.getPrivateKey();

```

```
Get mnemonic

walletId - is required.
passphrase - is required.
const pk = await cpay.wallet.getMnemonic();

```

3. Withdrawal

```
Estimate transaction fee.

let options = {
  to: string;
  amount: string;
  priority: boolean;
  currencyToken?: string;
  sign?: string;
  password?: string;
}
walletId - is required.
passphrase - is required.
const estimateFee = await cpay.withdrawal.estimateFee(options);
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
}
walletId - is required.
passphrase - is required.
const estimateFee = await cpay.withdrawal.estimateNftFee(options);
```

```
Estimate max withdrawal.

let options = {
  to: string;
  currencyToken?: string;
  sign?: string;
  password?: string;
}
walletId - is required.
passphrase - is required.
const max = await cpay.withdrawal.estimateMax(options);
```

```
Create withdrawal request.

let options = {
  to: string;
  amount: string;
  priorityFee?: number;
  currencyToken?: string;
  sign?: string;
  password?: string;
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal.create(options);
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
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal.nftTransfer(options);
```

```
Create InternalTransfer request.

let options = {
  to: string;
  amount: string;
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal.internalTransfer(options);
```

4. Available merchant currencies

```
let options = {
}
const currencies = await cpay.currency.getAvailableCurrencies(options);
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
const estimateData = await cpay.multisend.estimateSystemFee(options);
```

```
Approve.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const approveData = await cpay.multisend.approve(options);
```

```
Estimate miner fee.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const approveData = await cpay.multisend.estimateMinerFee(options);
```

```
Create multisend.
let options = {
  estimationId: string;
  sign?: string;
  password?: string;
}
const result = await cpay.multisend.create(options);
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
const checkoutList = await cpay.checkout.list(options);
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

const createDonation = await cpay.checkout.createDonation(options);
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

const createDonation = await cpay.checkout.createCart(options);
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

const createSale = await cpay.checkout.createSale(options);
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

const createSaleToken = await cpay.checkout.createSaleToken(options);
```

```
Estimate sale token max value.

let options = {
  tradedWallet: string;
  tradedCurrency: string;
  checkoutId?: string;
}

const saleTokenEstimateMax = await cpay.checkout.saleTokenEstimateMax(options);
```

```
Get checkout info.

const info = await cpay.checkout.info(checkoutId: string);
```

```
Delete checkout.

const remove = await cpay.checkout.remove(checkoutId: string);
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

const updateDonation = await cpay.checkout.updateDonation(options);
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

const updateSale = await cpay.checkout.updateSale(options);
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

const updateSaleToken = await cpay.checkout.updateSaleToken(options);
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

const updateSaleToken = await cpay.checkout.updateSaleToken(options);
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
const transactionList = await cpay.transaction.list(options);
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
const info = await cpay.externalCall.read(options);
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
const info = await cpay.externalCall.estimateWrite(options);
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
const info = await cpay.externalCall.write(options);
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
const result = await cpay.swap.estimate(options);
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
const result = await cpay.swap.bestOffer(options);
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
const result = await cpay.swap.create(options);
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
const result = await cpay.swap.history(options);
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
const result = await cpay.wallet.signature.on(options);
```

```
Disable Signature
walletId - is required.
passphrase - is required.

let options = {
  password: string;
}
const result = await cpay.wallet.signature.off(options);
```

```
Download Signature
walletId - is required.
passphrase - is required.

let options = {
  password: string;
}
const result = await cpay.wallet.signature.download(options);
```

```
Status Signature
walletId - is required.
passphrase - is required.

const result = await cpay.wallet.signature.status();
```

```
Change Password Signature
walletId - is required.
passphrase - is required.

let options = {
  oldPassword?: string;
  password: string;
}
const result = await cpay.wallet.signature.changePassword(options);
```
