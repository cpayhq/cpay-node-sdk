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
  amount: number;
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
  amount: number;
  priorityFee?: number;
  currencyToken?: string;
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal.create(options);
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
