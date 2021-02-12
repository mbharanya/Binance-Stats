# Binance-Stats

## Run
```
docker run -e  BINANCE_API_KEY=<your binance key here> -e BINANCE_API_SECRET=<your binance secret here> mbharanya/binance-stats:latest

┌──────────┬────────────────────┬───────────────┬───────────────┐
│ Coin     │ Amount             │ USD           │ 24 Change     │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ NANO     │ 192.38752000       │ 1345.64       │ +13.338%      │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ BTC      │ 0.01167504         │ 558.65        │ +0.231%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ ETH      │ 0.27258800         │ 504.57        │ +4.273%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ LINK     │ 13.30000000        │ 412.93        │ +12.602%      │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ ADA      │ 424.69500000       │ 394.12        │ -1.350%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ DOGE     │ 5000.00000000      │ 349.63        │ +0.271%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ VET      │ 5177.00000000      │ 288.08        │ +32.496%      │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ LTO      │ 576.42300000       │ 232.79        │ +9.578%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ FIL      │ 2.50000000         │ 106.74        │ +6.702%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ BNB      │ 0.67397373         │ 91.15         │ +9.382%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ BTT      │ 20411.00000000     │ 25.86         │ +7.775%       │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ USDT     │ 0.97698371         │ 0.98          │ +0%           │
├──────────┼────────────────────┼───────────────┼───────────────┤
│ 💰Total  │                    │ 4311.13 USD   │               │
└──────────┴────────────────────┴───────────────┴───────────────┘
```

## Build / run with node
```bash
npm install
npm start
# build docker
npm run build:docker
```