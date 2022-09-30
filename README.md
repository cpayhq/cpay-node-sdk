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

1. Wallet

```
Create deposit wallet.

let options = {
  currencyId?: string;
  typeWallet?: string; // user, merchant
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

2. Withdrawal

```
Estimate transaction fee.

let options = {
  to: string;
  amount: string;
  priority: boolean;
  currencyToken?: string;
}
walletId - is required.
passphrase - is required.
const estimateFee = await cpay.withdrawal.estimateFee(options);
```

```
Create withdrawal request.

let options = {
  to: string;
  amount: string;
  priorityFee?: number;
  currencyToken?: string;
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal.create(options);
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

3. Available merchant currencies

```
let options = {
}
const currencies = await cpay.currency.getAvailableCurrencies(options);
```

4. Multisend

```
Estimate system fee.
let options = {
  currencyToken: string;
  multisendWallets: { address: string; amount: string }[];
}
const estimateData = await cpay.multisend.estimateSystemFee(options);
```

```
Approve.
let options = {
  estimationId: string;
}
const approveData = await cpay.multisend.approve(options);
```

```
Estimate miner fee.
let options = {
  estimationId: string;
}
const approveData = await cpay.multisend.estimateMinerFee(options);
```

```
Create multisend.
let options = {
  estimationId: string;
}
const approveData = await cpay.multisend.create(options);
```

5. Checkout

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
  expireTime: number,
  linkImage: string,
  currencies: string[],
  collectName?: boolean,
  collectEmail?: boolean,
  description: string,
  organizationName: string
}

const createDonation = await cpay.checkout.createDonation(options);
```

```
Create sale checkout.

let options = {
  expireTime: number;
  linkImage?: string;
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
  expireTime: number;
  linkImage: string;
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
  expireTime: number,
  linkImage: string,
  currencies: string[],
  collectName?: boolean,
  collectEmail?: boolean,
  description: string,
  organizationName: string,
  deleteImage?: boolean;
}

const updateDonation = await cpay.checkout.updateDonation(options);
```

```
Update sale checkout.

let options = {
  expireTime: number;
  linkImage?: string;
  currencies: string[];
  collectName?: boolean;
  collectEmail?: boolean;
  description: string;
  productName: string;
  price: string;
  fiatCurrency: string;
  deleteImage?: boolean;
}

const updateSale = await cpay.checkout.updateSale(options);
```

```
Update sale token checkout.

let options = {
  expireTime: number;
  linkImage: string;
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
}

const updateSaleToken = await cpay.checkout.updateSaleToken(options);
```
