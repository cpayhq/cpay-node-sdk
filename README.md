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

1. Create deposit wallet

```
let options = {
  currencyId?: string;
}
Available Currencies: See point 5.
const wallet = await cpay.createDepositWallet(options);
```

2. Get wallet info

```
walletId - is required.
passphrase - is required.
const walletInfo = await cpay.getWalletInfo();
```

3. Create withdrawal request.

```
let options = {
  to: string;
  amount: number;
  priorityFee?: number;
}
walletId - is required.
passphrase - is required.
const withdrawal = await cpay.withdrawal(options);
```

4. Estimate transaction fee

```
let options = {
  to: string;
  amount: number;
  priority: boolean;
}
walletId - is required.
passphrase - is required.
const estimateFee = await cpay.estimateFee(options);
```

5. Available merchant currencies

```
let options = {
}
const currencies = await cpay.getAvailableCurrencies(options);
```
