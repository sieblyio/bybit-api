
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bybit-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client-v5](#rest-client-v5ts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client-v5.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v5.ts](/src/rest-client-v5.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L744) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L761) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L773) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L786) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L799) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L811) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L821) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L832) |  | GET | `/v5/spread/recent-trade` |
| [getSpreadMaxQty()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L844) | :closed_lock_with_key:  | GET | `/v5/spread/max-qty` |
| [submitSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L853) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L866) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L878) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L896) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L915) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L937) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L953) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L973) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L990) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1005) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1020) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1036) |  | GET | `/v5/market/instruments-info` |
| [getInstrumentSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1050) |  | GET | `/v5/market/instrument-summary` |
| [getOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1061) |  | GET | `/v5/market/orderbook` |
| [getFullDepthOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1067) |  | GET | `/v5/market/full_orderbook` |
| [getRPIOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1081) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1087) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1125) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1140) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1153) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1163) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1174) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1185) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1200) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1213) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1229) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1245) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1255) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1261) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1275) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1288) |  | GET | `/v5/market/fee-group-info` |
| [getOptionBaseCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1297) |  | GET | `/v5/market/option-base-coins` |
| [getCorporateActions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1303) |  | GET | `/v5/market/corporate-action` |
| [submitOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1318) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1324) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1330) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1339) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1345) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1363) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1375) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1393) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1418) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1443) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1465) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1486) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1504) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1519) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [createStrategyOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1536) | :closed_lock_with_key:  | POST | `/v5/strategy/create` |
| [getStrategyList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1547) | :closed_lock_with_key:  | GET | `/v5/strategy/list` |
| [getStrategyOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1558) | :closed_lock_with_key:  | GET | `/v5/strategy/order-list` |
| [stopStrategy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1569) | :closed_lock_with_key:  | POST | `/v5/strategy/stop` |
| [getPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1594) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [getFuturesLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1606) | :closed_lock_with_key:  | GET | `/v5/position/symbol-info` |
| [setLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1621) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1634) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1648) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1663) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1677) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1692) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1703) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1715) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1727) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1741) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1766) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1777) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1796) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1816) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1831) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1842) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1856) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1873) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1887) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1908) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1919) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1936) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1947) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1958) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1979) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2004) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2013) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2019) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2029) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2038) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2051) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2060) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2073) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2080) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2091) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2102) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2115) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2132) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2145) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2156) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setDeltaNeutralMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2164) | :closed_lock_with_key:  | POST | `/v5/account/set-delta-mode` |
| [setMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2173) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2180) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2187) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getOptionAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2197) | :closed_lock_with_key:  | GET | `/v5/account/option-asset-info` |
| [getPayInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2207) | :closed_lock_with_key:  | GET | `/v5/account/pay-info` |
| [getTradeInfoForAnalysis()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2217) | :closed_lock_with_key:  | GET | `/v5/account/trade-info-for-analysis` |
| [getAssetOverview()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2237) | :closed_lock_with_key:  | GET | `/v5/asset/asset-overview` |
| [getPortfolioMarginInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2247) | :closed_lock_with_key:  | GET | `/v5/asset/portfolio-margin` |
| [getTotalMembersAssets()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2257) | :closed_lock_with_key:  | GET | `/v5/asset/total-members-assets` |
| [getFundingAccountTransactionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2269) | :closed_lock_with_key:  | GET | `/v5/asset/fundinghistory` |
| [getDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2285) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2296) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2309) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2324) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2338) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2353) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2364) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2378) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2392) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2401) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2417) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2436) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2456) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2467) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2479) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2492) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2507) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2523) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2538) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2554) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2566) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2584) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2609) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2629) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2641) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2655) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitDepositOriginatorInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2665) | :closed_lock_with_key:  | POST | `/v5/asset/travel-rule/deposit/submit` |
| [submitWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2680) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2691) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2700) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2711) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2720) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2732) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2751) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2768) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2782) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2800) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2812) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2821) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2830) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2848) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2863) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2870) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2879) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2898) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2912) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2925) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2940) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2954) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [createTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2969) | :closed_lock_with_key:  | POST | `/v5/fht/compliance/tax/private/batch_create` |
| [getTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2981) | :closed_lock_with_key:  | GET | `/v5/fht/compliance/tax/private/batch_query` |
| [getAffiliateUserList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3004) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3022) | :closed_lock_with_key:  | GET | `/v5/affiliate/affiliate-sub-list` |
| [getAffiliateUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3038) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getFriendReferrals()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3050) | :closed_lock_with_key:  | GET | `/v5/user/invitation/referrals` |
| [getReferralCode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3059) | :closed_lock_with_key:  | GET | `/v5/user/invitation/code` |
| [getReferralCommissionRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3071) | :closed_lock_with_key:  | POST | `/v5/referral/commission/records` |
| [getReferralCampaignRewards()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3084) | :closed_lock_with_key:  | POST | `/v5/referral/campaign/rewards` |
| [getReferralUserIdentityProfile()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3099) | :closed_lock_with_key:  | POST | `/v5/referral/user/identity-profile` |
| [getReferralUserInvitations()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3112) | :closed_lock_with_key:  | POST | `/v5/referral/user/invitations` |
| [signAgreement()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3130) | :closed_lock_with_key:  | POST | `/v5/user/agreement` |
| [getAlphaTradeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3147) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/quote` |
| [executeAlphaTradePurchase()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3158) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/purchase` |
| [executeAlphaTradeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3169) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/redeem` |
| [getAlphaPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3179) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/pay-token-list` |
| [getAlphaTradeOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3189) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/order-list` |
| [getAlphaBizTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3199) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-list` |
| [getAlphaBizTokenPriceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3209) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-price-list` |
| [getAlphaBizTokenDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3219) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-details` |
| [getAlphaAssetList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3229) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-list` |
| [getAlphaAssetDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3237) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-detail` |
| [getAlphaPredictionEngineStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3253) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/engine-status` |
| [getAlphaPredictionPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3263) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/pay-token-list` |
| [getAlphaPredictionEventDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3273) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/event-detail` |
| [getAlphaPredictionOrderEstimate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3283) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-estimate` |
| [executeAlphaPredictionBuy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3293) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/buy` |
| [executeAlphaPredictionSell()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3303) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sell` |
| [getAlphaPredictionOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3313) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-list` |
| [getAlphaPredictionOrderBook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3323) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-book` |
| [getAlphaPredictionTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3333) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/token-price` |
| [getAlphaPredictionPriceHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3343) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/price-history` |
| [getAlphaPredictionPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3353) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-list` |
| [getAlphaPredictionPositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3363) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-history` |
| [getAlphaPredictionPortfolioSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3373) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/portfolio-summary` |
| [getAlphaPredictionSideMarketList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3383) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/side-market-list` |
| [getAlphaPredictionSportsMatchList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3393) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/match-list` |
| [getAlphaPredictionSportsTimelineStages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3403) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/sports/timeline-stages` |
| [getAlphaPredictionSportsGroupStageDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3416) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/group-stage-detail` |
| [getAlphaLPPoolList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3435) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-list` |
| [getAlphaLPPoolInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3445) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-info` |
| [executeAlphaLPStake()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3455) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/stake` |
| [executeAlphaLPRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3465) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/redeem` |
| [getAlphaLPOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3475) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/order-list` |
| [getAlphaLPPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3485) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-list` |
| [getAlphaLPPayTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3495) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-price` |
| [getAlphaLPPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3505) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/position-list` |
| [getVIPMarginData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3525) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3536) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [getSpotMarginCurrencyData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3561) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/currency-data` |
| [toggleSpotMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3573) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3584) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3592) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3603) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3610) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3625) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3634) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3645) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3656) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3675) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3688) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3706) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getTradeAutoRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3721) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-trade-auto-repay` |
| [setTradeAutoRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3732) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-trade-auto-repay` |
| [getSpotMarginLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3744) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/liability` |
| [submitFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3753) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow` |
| [getFixedRateBorrowOrderInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3762) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-info` |
| [getFixedRateBorrowContractInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3779) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-contract-info` |
| [getFixedRateBorrowOrderQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3796) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-quote` |
| [renewFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3808) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-renew` |
| [getFixedRateBorrowInterestAccrued()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3814) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-interest-accrued` |
| [cancelFixedRateBorrowOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3828) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-order-cancel` |
| [getFlexibleAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3837) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/flexible-available-inventory` |
| [getFixedRateAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3846) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixed-available-inventory` |
| [getSpotMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3864) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3881) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3898) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3916) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3940) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3951) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3966) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3995) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4024) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4044) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4061) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4079) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4099) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4120) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4136) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4157) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4177) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4196) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4215) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4239) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4260) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4272) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4282) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4301) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4311) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4322) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4337) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4354) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4365) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4375) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4389) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4401) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4414) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getFlexibleLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4428) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/available-inventory` |
| [getSupplyOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4448) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4461) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4474) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4487) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4497) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4511) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4524) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4542) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4560) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4573) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4587) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4598) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4611) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4628) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4641) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getFixedLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4650) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/available-inventory` |
| [getInstitutionConnectionLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4668) | :closed_lock_with_key:  | GET | `/v5/ins/connection-limit` |
| [getInstitutionalLendingProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4683) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingCoinDeltaAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4695) | :closed_lock_with_key:  | GET | `/v5/ins-loan/coin-delta-amount` |
| [getInstitutionalLendingDelayLiquidationStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4704) | :closed_lock_with_key:  | GET | `/v5/ins-loan/delay-liq-status` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4714) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4723) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4732) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4744) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4756) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4765) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4780) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4800) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4821) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4834) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4850) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4865) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4877) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4889) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [setBrokerRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4906) | :closed_lock_with_key:  | POST | `/v5/broker/apilimit/set` |
| [getBrokerRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4925) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-cap` |
| [getAllBrokerRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4943) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-all` |
| [getEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4963) |  | GET | `/v5/earn/product` |
| [getFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4974) | :closed_lock_with_key:  | GET | `/v5/earn/flexible-saving/auto-savings` |
| [setFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4985) | :closed_lock_with_key:  | POST | `/v5/earn/flexible-saving/auto-savings` |
| [getEarnCouponList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4995) | :closed_lock_with_key:  | GET | `/v5/earn/coupons` |
| [getRWAProductList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5005) |  | GET | `/v5/earn/rwa/product` |
| [placeRWAOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5015) | :closed_lock_with_key:  | POST | `/v5/earn/rwa/place-order` |
| [getRWAPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5024) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/position` |
| [getRWAOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5033) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/order` |
| [getRWANavChart()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5043) |  | GET | `/v5/earn/rwa/nav-chart` |
| [getHoldToEarnAirdropProducts()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5054) |  | GET | `/v5/earn/hold-to-earn/product` |
| [getAdvanceEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5065) |  | GET | `/v5/earn/advance/product` |
| [getLiquidityMiningProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5076) |  | GET | `/v5/earn/liquidity-mining/product` |
| [reinvestLiquidityMining()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5089) | :closed_lock_with_key:  | POST | `/v5/earn/liquidity-mining/reinvest` |
| [getFixedTermEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5100) |  | GET | `/v5/earn/fixed-term/product` |
| [getAdvanceEarnProductExtraInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5112) |  | GET | `/v5/earn/advance/product-extra-info` |
| [submitAdvanceEarnPlaceOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5123) | :closed_lock_with_key:  | POST | `/v5/earn/advance/place-order` |
| [getAdvanceEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5134) | :closed_lock_with_key:  | GET | `/v5/earn/advance/position` |
| [getAdvanceEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5145) | :closed_lock_with_key:  | GET | `/v5/earn/advance/order` |
| [submitFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5156) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/place-order` |
| [redeemFixedTermEarn()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5167) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/redeem` |
| [getFixedTermEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5178) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/position` |
| [getFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5189) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/order` |
| [setFixedTermEarnAutoInvest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5200) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/position/auto-invest` |
| [submitStakeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5216) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5235) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5253) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [modifyEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5266) | :closed_lock_with_key:  | POST | `/v5/earn/position/modify` |
| [getEarnYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5279) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getHoldToEarnAirdropYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5293) | :closed_lock_with_key:  | GET | `/v5/earn/hold-to-earn/yield-history` |
| [getEarnHourlyYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5304) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [getEarnAprHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5318) |  | GET | `/v5/earn/apr-history` |
| [getEarnTokenProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5328) |  | GET | `/v5/earn/token/product` |
| [submitEarnTokenOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5337) | :closed_lock_with_key:  | POST | `/v5/earn/token/place-order` |
| [getEarnTokenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5346) | :closed_lock_with_key:  | GET | `/v5/earn/token/order` |
| [getEarnTokenPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5358) | :closed_lock_with_key:  | GET | `/v5/earn/token/position` |
| [getEarnTokenDailyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5367) | :closed_lock_with_key:  | GET | `/v5/earn/token/yield` |
| [getEarnTokenHourlyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5379) | :closed_lock_with_key:  | GET | `/v5/earn/token/hourly-yield` |
| [getEarnTokenHistoryApr()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5391) |  | GET | `/v5/earn/token/history-apr` |
| [getPwmInvestmentPlanList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5406) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/list` |
| [getPwmInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5415) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/detail` |
| [getPwmPendingInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5424) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/new-plan` |
| [claimPwmWithdrawableFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5433) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/claim` |
| [getPwmInvestmentPlanAssetTrend()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5442) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/asset-trend` |
| [getPwmFundHistoricalNav()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5451) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/fund-nav` |
| [subscribePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5460) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/subscribe` |
| [investMorePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5469) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/invest-more` |
| [redeemPwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5478) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/redeem` |
| [getPwmInvestmentPlanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5487) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/order` |
| [getPwmSubscribableProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5496) |  | GET | `/v5/earn/pwm/customize-plan/product` |
| [createPwmCustomizeInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5505) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/customize-plan/create` |
| [getPwmAllFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5520) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-funds` |
| [settlePwmFundProfit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5529) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/settle-profit` |
| [createPwmFund()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5538) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-fund` |
| [createPwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5547) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-investment-plan` |
| [getPwmAssetManagerInvestmentPlans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5561) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/get-investment-plan` |
| [managePwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5573) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-investment-plan` |
| [getPwmAllFundOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5587) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-order` |
| [managePwmFundOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5596) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-order` |
| [createPwmFundSubAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5605) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-sub-account` |
| [pwmFundTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5617) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/fund-transfer` |
| [getPwmFundTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5626) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/query-fund-transfer-result` |
| [getCardList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5643) | :closed_lock_with_key:  | POST | `/v5/card/list` |
| [getCardLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5654) | :closed_lock_with_key:  | POST | `/v5/card/limit/get` |
| [queryCardAssetRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5663) | :closed_lock_with_key:  | POST | `/v5/card/transaction/query-asset-records` |
| [queryCardPointsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5672) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/balance` |
| [queryCardPointsRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5679) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/records` |
| [queryCardPointsTier()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5688) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/tier` |
| [queryCardMallItemList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5695) | :closed_lock_with_key:  | POST | `/v5/card/reward/mall/item/list` |
| [queryCardPointCashbackDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5704) | :closed_lock_with_key:  | POST | `/v5/card/reward/point/cashback/detail` |
| [createRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5720) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5731) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5740) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5750) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5759) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5770) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5781) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5791) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5805) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5817) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5831) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5846) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5859) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5872) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5888) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getRFQDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5894) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-detail-list` |
| [getP2PAccountCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5919) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5936) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5945) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5954) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5968) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5978) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5987) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6002) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6012) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6021) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6030) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6039) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [reviewP2PSellerCancelOrderApply()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6051) | :closed_lock_with_key:  | POST | `/v5/p2p/order/buyer/examine/sellerCancelOrderApply` |
| [sendP2POrderMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6063) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2PChatSessions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6078) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/list_v1` |
| [getP2PChatSessionId()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6088) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/getSessionId` |
| [sendP2PChatMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6124) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/send_v1` |
| [getP2PChatMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6136) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/listpage_v1` |
| [getP2POrderMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6145) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6159) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6166) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6175) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6195) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6224) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6243) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6262) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |
| [getLaunchpoolProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6285) |  | GET | `/v5/spot-x/launchpool/project/list` |
| [getLaunchpoolUserActivityLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6291) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/activity-log` |
| [getLaunchpoolCurrentStaking()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6297) | :closed_lock_with_key:  | GET | `/v5/spot-x/launchpool/user/current-staking` |
| [getLaunchpoolUserHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6303) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/history` |
| [getPuzzleProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6309) |  | GET | `/v5/spot-x/puzzle/project/list` |
| [getTokenSplashProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6315) |  | GET | `/v5/spot-x/token-splash/project/list` |
| [getTokenSplashUserActivityParams()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6321) | :closed_lock_with_key:  | GET | `/v5/spot-x/token-splash/user/activity-params` |
| [getEventInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6344) |  | GET | `/v5/event/instruments-info` |
| [getEventOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6355) |  | GET | `/v5/event/orderbook` |
| [getEventOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6366) | :closed_lock_with_key:  | GET | `/v5/event/order-list` |
| [getEventActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6377) | :closed_lock_with_key:  | GET | `/v5/event/order-realtime` |
| [getEventPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6388) | :closed_lock_with_key:  | GET | `/v5/event/positions` |
| [getEventTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6399) | :closed_lock_with_key:  | GET | `/v5/event/trades` |
| [getEventSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6410) | :closed_lock_with_key:  | GET | `/v5/event/settlements` |
| [submitEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6421) | :closed_lock_with_key:  | POST | `/v5/event/quotes` |
| [cancelEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6432) | :closed_lock_with_key:  | POST | `/v5/event/cancel` |
| [cancelAllEventQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6443) | :closed_lock_with_key:  | POST | `/v5/event/cancel-all` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bybit API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L95) | :closed_lock_with_key:  | WS | `order.create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L111) | :closed_lock_with_key:  | WS | `order.amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L127) | :closed_lock_with_key:  | WS | `order.cancel` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L143) | :closed_lock_with_key:  | WS | `order.create-batch` |
| [batchAmendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L171) | :closed_lock_with_key:  | WS | `order.amend-batch` |
| [batchCancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/websocket-api-client.ts#L199) | :closed_lock_with_key:  | WS | `order.cancel-batch` |