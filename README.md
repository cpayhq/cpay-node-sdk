# cpay-node-sdk

```
npm i cpay-node-api-sdk
```

```
import CpaySDK from 'cpay-node-api-sdk';

let options = {
  publicKey: 'publicKey',
  privateKey: 'privateKey',
  walletId?: 'walletId'
}
const cpay = new CpaySDK(options)
```

Available Methods:

1. Create deposit wallet

```
let options = {
  currency?: string;
}
Available Currencies: eth, btc, usdt;
const wallet = await cpay.createDepositWallet(options);
```

2. Get wallet info

```
walletId - is required.
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
const estimateFee = await cpay.estimateFee(options);
```

5. Set income balance

```
This function is needed in order that, if within the system encountered an internal currency conversion, for example, changed the ETH to BTC, it is necessary to establish a new balance for the purse in the system, so that the funds could be derived.

let options = {
  amount: number;
}
walletId - is required.
const estimateFee = await cpay.setIncomeBalance(options);
```
