
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
| [getSystemStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L735) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L752) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L764) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L777) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L790) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L802) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L812) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L823) |  | GET | `/v5/spread/recent-trade` |
| [getSpreadMaxQty()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L835) | :closed_lock_with_key:  | GET | `/v5/spread/max-qty` |
| [submitSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L844) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L857) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L869) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L887) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L906) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L923) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L939) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L959) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L976) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L991) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1006) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1022) |  | GET | `/v5/market/instruments-info` |
| [getInstrumentSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1036) |  | GET | `/v5/market/instrument-summary` |
| [getOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1047) |  | GET | `/v5/market/orderbook` |
| [getFullDepthOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1053) |  | GET | `/v5/market/full_orderbook` |
| [getRPIOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1067) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1073) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1111) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1126) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1139) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1149) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1160) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1171) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1186) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1199) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1215) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1231) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1241) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1247) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1261) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1274) |  | GET | `/v5/market/fee-group-info` |
| [getOptionBaseCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1283) |  | GET | `/v5/market/option-base-coins` |
| [getCorporateActions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1289) |  | GET | `/v5/market/corporate-action` |
| [submitOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1304) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1310) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1316) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1325) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1331) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1344) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1356) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1374) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1399) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1424) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1446) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1467) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1485) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1500) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [createStrategyOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1517) | :closed_lock_with_key:  | POST | `/v5/strategy/create` |
| [getStrategyList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1528) | :closed_lock_with_key:  | GET | `/v5/strategy/list` |
| [getStrategyOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1539) | :closed_lock_with_key:  | GET | `/v5/strategy/order-list` |
| [stopStrategy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1550) | :closed_lock_with_key:  | POST | `/v5/strategy/stop` |
| [getPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1575) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [getFuturesLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1587) | :closed_lock_with_key:  | GET | `/v5/position/symbol-info` |
| [setLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1602) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1615) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1629) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1644) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1658) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1673) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1684) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1696) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1708) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1722) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1747) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1758) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1777) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1797) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1812) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1823) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1837) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1854) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1868) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1889) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1900) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1917) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1928) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1939) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1960) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1985) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1994) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2000) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2010) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2019) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2032) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2041) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2054) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2061) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2072) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2083) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2096) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2113) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2126) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2137) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setDeltaNeutralMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2145) | :closed_lock_with_key:  | POST | `/v5/account/set-delta-mode` |
| [setMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2154) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2161) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2168) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getOptionAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2178) | :closed_lock_with_key:  | GET | `/v5/account/option-asset-info` |
| [getPayInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2188) | :closed_lock_with_key:  | GET | `/v5/account/pay-info` |
| [getTradeInfoForAnalysis()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2198) | :closed_lock_with_key:  | GET | `/v5/account/trade-info-for-analysis` |
| [getAssetOverview()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2218) | :closed_lock_with_key:  | GET | `/v5/asset/asset-overview` |
| [getPortfolioMarginInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2228) | :closed_lock_with_key:  | GET | `/v5/asset/portfolio-margin` |
| [getTotalMembersAssets()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2238) | :closed_lock_with_key:  | GET | `/v5/asset/total-members-assets` |
| [getFundingAccountTransactionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2250) | :closed_lock_with_key:  | GET | `/v5/asset/fundinghistory` |
| [getDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2266) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2277) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2290) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2305) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2319) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2334) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2345) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2359) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2373) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2382) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2398) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2417) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2437) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2448) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2460) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2473) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2488) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2504) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2519) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2535) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2547) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2565) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2590) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2610) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2622) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2636) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitDepositOriginatorInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2646) | :closed_lock_with_key:  | POST | `/v5/asset/travel-rule/deposit/submit` |
| [submitWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2661) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2672) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2681) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2692) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2701) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2713) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2732) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2749) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2763) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2781) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2793) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2802) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2811) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2829) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2844) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2851) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2860) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2879) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2893) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2906) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2921) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2935) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [createTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2950) | :closed_lock_with_key:  | POST | `/v5/fht/compliance/tax/private/batch_create` |
| [getTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2962) | :closed_lock_with_key:  | GET | `/v5/fht/compliance/tax/private/batch_query` |
| [getAffiliateUserList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2985) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3003) | :closed_lock_with_key:  | GET | `/v5/affiliate/affiliate-sub-list` |
| [getAffiliateUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3019) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getFriendReferrals()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3031) | :closed_lock_with_key:  | GET | `/v5/user/invitation/referrals` |
| [getReferralCode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3040) | :closed_lock_with_key:  | GET | `/v5/user/invitation/code` |
| [getReferralCommissionRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3052) | :closed_lock_with_key:  | POST | `/v5/referral/commission/records` |
| [getReferralCampaignRewards()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3065) | :closed_lock_with_key:  | POST | `/v5/referral/campaign/rewards` |
| [getReferralUserIdentityProfile()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3080) | :closed_lock_with_key:  | POST | `/v5/referral/user/identity-profile` |
| [getReferralUserInvitations()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3093) | :closed_lock_with_key:  | POST | `/v5/referral/user/invitations` |
| [signAgreement()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3111) | :closed_lock_with_key:  | POST | `/v5/user/agreement` |
| [getAlphaTradeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3128) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/quote` |
| [executeAlphaTradePurchase()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3139) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/purchase` |
| [executeAlphaTradeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3150) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/redeem` |
| [getAlphaPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3160) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/pay-token-list` |
| [getAlphaTradeOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3170) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/order-list` |
| [getAlphaBizTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3180) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-list` |
| [getAlphaBizTokenPriceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3190) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-price-list` |
| [getAlphaBizTokenDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3200) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-details` |
| [getAlphaAssetList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3210) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-list` |
| [getAlphaAssetDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3218) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-detail` |
| [getAlphaPredictionEngineStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3234) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/engine-status` |
| [getAlphaPredictionPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3244) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/pay-token-list` |
| [getAlphaPredictionEventDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3254) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/event-detail` |
| [getAlphaPredictionOrderEstimate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3264) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-estimate` |
| [executeAlphaPredictionBuy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3274) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/buy` |
| [executeAlphaPredictionSell()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3284) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sell` |
| [getAlphaPredictionOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3294) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-list` |
| [getAlphaPredictionOrderBook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3304) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-book` |
| [getAlphaPredictionTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3314) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/token-price` |
| [getAlphaPredictionPriceHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3324) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/price-history` |
| [getAlphaPredictionPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3334) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-list` |
| [getAlphaPredictionPositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3344) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-history` |
| [getAlphaPredictionPortfolioSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3354) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/portfolio-summary` |
| [getAlphaPredictionSideMarketList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3364) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/side-market-list` |
| [getAlphaPredictionSportsMatchList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3374) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/match-list` |
| [getAlphaPredictionSportsTimelineStages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3384) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/sports/timeline-stages` |
| [getAlphaPredictionSportsGroupStageDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3397) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/group-stage-detail` |
| [getAlphaLPPoolList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3416) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-list` |
| [getAlphaLPPoolInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3426) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-info` |
| [executeAlphaLPStake()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3436) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/stake` |
| [executeAlphaLPRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3446) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/redeem` |
| [getAlphaLPOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3456) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/order-list` |
| [getAlphaLPPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3466) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-list` |
| [getAlphaLPPayTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3476) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-price` |
| [getAlphaLPPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3486) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/position-list` |
| [getVIPMarginData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3506) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3517) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [getSpotMarginCurrencyData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3542) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/currency-data` |
| [toggleSpotMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3554) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3565) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3573) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3584) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3591) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3606) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3615) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3626) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3637) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3656) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3669) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3685) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getSpotMarginLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3697) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/liability` |
| [submitFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3706) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow` |
| [getFixedRateBorrowOrderInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3715) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-info` |
| [getFixedRateBorrowContractInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3732) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-contract-info` |
| [getFixedRateBorrowOrderQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3749) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-quote` |
| [renewFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3761) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-renew` |
| [getFixedRateBorrowInterestAccrued()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3767) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-interest-accrued` |
| [cancelFixedRateBorrowOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3781) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-order-cancel` |
| [getFlexibleAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3790) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/flexible-available-inventory` |
| [getFixedRateAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3799) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixed-available-inventory` |
| [getSpotMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3817) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3834) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3851) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3869) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3893) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3904) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3919) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3948) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3977) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3997) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4014) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4032) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4052) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4073) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4089) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4110) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4130) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4149) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4168) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4192) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4213) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4225) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4235) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4254) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4264) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4275) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4290) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4307) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4318) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4328) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4342) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4354) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4367) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getFlexibleLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4381) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/available-inventory` |
| [getSupplyOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4401) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4414) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4427) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4440) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4450) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4464) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4477) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4495) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4513) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4526) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4540) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4551) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4564) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4581) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4594) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getFixedLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4603) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/available-inventory` |
| [getInstitutionalLendingProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4618) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingCoinDeltaAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4630) | :closed_lock_with_key:  | GET | `/v5/ins-loan/coin-delta-amount` |
| [getInstitutionalLendingDelayLiquidationStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4639) | :closed_lock_with_key:  | GET | `/v5/ins-loan/delay-liq-status` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4649) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4658) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4667) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4679) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4691) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4700) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4715) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4735) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4756) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4769) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4785) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4800) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4812) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4824) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [setBrokerRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4841) | :closed_lock_with_key:  | POST | `/v5/broker/apilimit/set` |
| [getBrokerRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4860) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-cap` |
| [getAllBrokerRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4878) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-all` |
| [getEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4898) |  | GET | `/v5/earn/product` |
| [getFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4909) | :closed_lock_with_key:  | GET | `/v5/earn/flexible-saving/auto-savings` |
| [setFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4920) | :closed_lock_with_key:  | POST | `/v5/earn/flexible-saving/auto-savings` |
| [getEarnCouponList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4930) | :closed_lock_with_key:  | GET | `/v5/earn/coupons` |
| [getRWAProductList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4940) |  | GET | `/v5/earn/rwa/product` |
| [placeRWAOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4950) | :closed_lock_with_key:  | POST | `/v5/earn/rwa/place-order` |
| [getRWAPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4959) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/position` |
| [getRWAOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4968) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/order` |
| [getRWANavChart()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4978) |  | GET | `/v5/earn/rwa/nav-chart` |
| [getHoldToEarnAirdropProducts()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4989) |  | GET | `/v5/earn/hold-to-earn/product` |
| [getAdvanceEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5000) |  | GET | `/v5/earn/advance/product` |
| [getLiquidityMiningProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5011) |  | GET | `/v5/earn/liquidity-mining/product` |
| [reinvestLiquidityMining()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5024) | :closed_lock_with_key:  | POST | `/v5/earn/liquidity-mining/reinvest` |
| [getFixedTermEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5035) |  | GET | `/v5/earn/fixed-term/product` |
| [getAdvanceEarnProductExtraInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5047) |  | GET | `/v5/earn/advance/product-extra-info` |
| [submitAdvanceEarnPlaceOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5058) | :closed_lock_with_key:  | POST | `/v5/earn/advance/place-order` |
| [getAdvanceEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5069) | :closed_lock_with_key:  | GET | `/v5/earn/advance/position` |
| [getAdvanceEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5080) | :closed_lock_with_key:  | GET | `/v5/earn/advance/order` |
| [submitFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5091) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/place-order` |
| [redeemFixedTermEarn()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5102) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/redeem` |
| [getFixedTermEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5113) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/position` |
| [getFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5124) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/order` |
| [setFixedTermEarnAutoInvest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5135) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/position/auto-invest` |
| [submitStakeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5151) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5170) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5188) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [modifyEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5201) | :closed_lock_with_key:  | POST | `/v5/earn/position/modify` |
| [getEarnYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5214) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getHoldToEarnAirdropYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5228) | :closed_lock_with_key:  | GET | `/v5/earn/hold-to-earn/yield-history` |
| [getEarnHourlyYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5239) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [getEarnAprHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5253) |  | GET | `/v5/earn/apr-history` |
| [getEarnTokenProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5263) |  | GET | `/v5/earn/token/product` |
| [submitEarnTokenOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5272) | :closed_lock_with_key:  | POST | `/v5/earn/token/place-order` |
| [getEarnTokenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5281) | :closed_lock_with_key:  | GET | `/v5/earn/token/order` |
| [getEarnTokenPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5293) | :closed_lock_with_key:  | GET | `/v5/earn/token/position` |
| [getEarnTokenDailyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5302) | :closed_lock_with_key:  | GET | `/v5/earn/token/yield` |
| [getEarnTokenHourlyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5314) | :closed_lock_with_key:  | GET | `/v5/earn/token/hourly-yield` |
| [getEarnTokenHistoryApr()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5326) |  | GET | `/v5/earn/token/history-apr` |
| [getPwmInvestmentPlanList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5341) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/list` |
| [getPwmInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5350) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/detail` |
| [getPwmPendingInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5359) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/new-plan` |
| [claimPwmWithdrawableFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5368) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/claim` |
| [getPwmInvestmentPlanAssetTrend()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5377) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/asset-trend` |
| [getPwmFundHistoricalNav()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5386) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/fund-nav` |
| [subscribePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5395) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/subscribe` |
| [investMorePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5404) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/invest-more` |
| [redeemPwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5413) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/redeem` |
| [getPwmInvestmentPlanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5422) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/order` |
| [getPwmSubscribableProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5431) |  | GET | `/v5/earn/pwm/customize-plan/product` |
| [createPwmCustomizeInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5440) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/customize-plan/create` |
| [getPwmAllFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5455) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-funds` |
| [settlePwmFundProfit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5464) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/settle-profit` |
| [createPwmFund()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5473) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-fund` |
| [createPwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5482) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-investment-plan` |
| [getPwmAssetManagerInvestmentPlans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5496) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/get-investment-plan` |
| [managePwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5508) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-investment-plan` |
| [getPwmAllFundOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5522) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-order` |
| [managePwmFundOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5531) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-order` |
| [createPwmFundSubAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5540) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-sub-account` |
| [pwmFundTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5552) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/fund-transfer` |
| [getPwmFundTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5561) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/query-fund-transfer-result` |
| [queryCardAssetRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5576) | :closed_lock_with_key:  | POST | `/v5/card/transaction/query-asset-records` |
| [queryCardPointsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5585) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/balance` |
| [queryCardPointsRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5592) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/records` |
| [queryCardPointsTier()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5601) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/tier` |
| [queryCardMallItemList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5608) | :closed_lock_with_key:  | POST | `/v5/card/reward/mall/item/list` |
| [queryCardPointCashbackDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5617) | :closed_lock_with_key:  | POST | `/v5/card/reward/point/cashback/detail` |
| [createRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5633) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5644) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5653) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5663) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5672) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5683) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5694) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5704) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5718) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5730) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5744) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5759) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5772) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5785) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5801) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getRFQDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5807) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-detail-list` |
| [getP2PAccountCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5832) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5849) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5858) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5867) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5881) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5891) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5900) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5915) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5925) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5934) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5943) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5952) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [reviewP2PSellerCancelOrderApply()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5964) | :closed_lock_with_key:  | POST | `/v5/p2p/order/buyer/examine/sellerCancelOrderApply` |
| [sendP2POrderMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5976) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2PChatSessions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5991) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/list_v1` |
| [getP2PChatSessionId()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6001) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/getSessionId` |
| [sendP2PChatMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6037) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/send_v1` |
| [getP2PChatMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6049) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/listpage_v1` |
| [getP2POrderMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6058) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6072) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6079) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6088) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6108) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6137) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6156) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6175) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |
| [getLaunchpoolProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6198) |  | GET | `/v5/spot-x/launchpool/project/list` |
| [getLaunchpoolUserActivityLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6204) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/activity-log` |
| [getLaunchpoolCurrentStaking()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6210) | :closed_lock_with_key:  | GET | `/v5/spot-x/launchpool/user/current-staking` |
| [getLaunchpoolUserHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6216) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/history` |
| [getPuzzleProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6222) |  | GET | `/v5/spot-x/puzzle/project/list` |
| [getTokenSplashProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6228) |  | GET | `/v5/spot-x/token-splash/project/list` |
| [getTokenSplashUserActivityParams()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6234) | :closed_lock_with_key:  | GET | `/v5/spot-x/token-splash/user/activity-params` |
| [getEventInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6257) |  | GET | `/v5/event/instruments-info` |
| [getEventOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6268) |  | GET | `/v5/event/orderbook` |
| [getEventOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6279) | :closed_lock_with_key:  | GET | `/v5/event/order-list` |
| [getEventActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6290) | :closed_lock_with_key:  | GET | `/v5/event/order-realtime` |
| [getEventPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6301) | :closed_lock_with_key:  | GET | `/v5/event/positions` |
| [getEventTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6312) | :closed_lock_with_key:  | GET | `/v5/event/trades` |
| [getEventSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6323) | :closed_lock_with_key:  | GET | `/v5/event/settlements` |
| [submitEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6334) | :closed_lock_with_key:  | POST | `/v5/event/quotes` |
| [cancelEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6345) | :closed_lock_with_key:  | POST | `/v5/event/cancel` |

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