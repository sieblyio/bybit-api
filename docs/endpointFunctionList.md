
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
| [getSystemStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L739) | :closed_lock_with_key:  | GET | `/v5/system/status` |
| [getServerTime()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L756) |  | GET | `/v5/market/time` |
| [requestDemoTradingFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L768) | :closed_lock_with_key:  | POST | `/v5/account/demo-apply-money` |
| [createDemoAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L781) | :closed_lock_with_key:  | POST | `/v5/user/create-demo-member` |
| [getSpreadInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L794) |  | GET | `/v5/spread/instrument` |
| [getSpreadOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L806) |  | GET | `/v5/spread/orderbook` |
| [getSpreadTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L816) |  | GET | `/v5/spread/tickers` |
| [getSpreadRecentTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L827) |  | GET | `/v5/spread/recent-trade` |
| [getSpreadMaxQty()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L839) | :closed_lock_with_key:  | GET | `/v5/spread/max-qty` |
| [submitSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L848) | :closed_lock_with_key:  | POST | `/v5/spread/order/create` |
| [amendSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L861) | :closed_lock_with_key:  | POST | `/v5/spread/order/amend` |
| [cancelSpreadOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L873) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L891) | :closed_lock_with_key:  | POST | `/v5/spread/order/cancel-all` |
| [getSpreadOpenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L910) | :closed_lock_with_key:  | GET | `/v5/spread/order/realtime` |
| [getSpreadOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L932) | :closed_lock_with_key:  | GET | `/v5/spread/order/history` |
| [getSpreadTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L948) | :closed_lock_with_key:  | GET | `/v5/spread/execution/list` |
| [getKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L968) |  | GET | `/v5/market/kline` |
| [getMarkPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L985) |  | GET | `/v5/market/mark-price-kline` |
| [getIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1000) |  | GET | `/v5/market/index-price-kline` |
| [getPremiumIndexPriceKline()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1015) |  | GET | `/v5/market/premium-index-price-kline` |
| [getInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1031) |  | GET | `/v5/market/instruments-info` |
| [getInstrumentSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1045) |  | GET | `/v5/market/instrument-summary` |
| [getOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1056) |  | GET | `/v5/market/orderbook` |
| [getFullDepthOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1062) |  | GET | `/v5/market/full_orderbook` |
| [getRPIOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1076) |  | GET | `/v5/market/rpi_orderbook` |
| [getTickers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1082) |  | GET | `/v5/market/tickers` |
| [getFundingRateHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1120) |  | GET | `/v5/market/funding/history` |
| [getPublicTradingHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1135) |  | GET | `/v5/market/recent-trade` |
| [getOpenInterest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1148) |  | GET | `/v5/market/open-interest` |
| [getHistoricalVolatility()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1158) |  | GET | `/v5/market/historical-volatility` |
| [getInsurance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1169) |  | GET | `/v5/market/insurance` |
| [getRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1180) |  | GET | `/v5/market/risk-limit` |
| [getOptionDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1195) |  | GET | `/v5/market/delivery-price` |
| [getDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1208) |  | GET | `/v5/market/delivery-price` |
| [getNewDeliveryPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1224) |  | GET | `/v5/market/new-delivery-price` |
| [getLongShortRatio()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1240) |  | GET | `/v5/market/account-ratio` |
| [getIndexPriceComponents()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1250) |  | GET | `/v5/market/index-price-components` |
| [getOrderPriceLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1256) |  | GET | `/v5/market/price-limit` |
| [getADLAlert()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1270) |  | GET | `/v5/market/adlAlert` |
| [getFeeGroupStructure()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1283) |  | GET | `/v5/market/fee-group-info` |
| [getOptionBaseCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1292) |  | GET | `/v5/market/option-base-coins` |
| [getCorporateActions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1298) |  | GET | `/v5/market/corporate-action` |
| [submitOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1313) | :closed_lock_with_key:  | POST | `/v5/order/create` |
| [amendOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1319) | :closed_lock_with_key:  | POST | `/v5/order/amend` |
| [cancelOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1325) | :closed_lock_with_key:  | POST | `/v5/order/cancel` |
| [getActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1334) | :closed_lock_with_key:  | GET | `/v5/order/realtime` |
| [cancelAllOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1340) | :closed_lock_with_key:  | POST | `/v5/order/cancel-all` |
| [getHistoricOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1358) | :closed_lock_with_key:  | GET | `/v5/order/history` |
| [getExecutionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1370) | :closed_lock_with_key:  | GET | `/v5/execution/list` |
| [batchSubmitOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1388) | :closed_lock_with_key:  | POST | `/v5/order/create-batch` |
| [batchAmendOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1413) | :closed_lock_with_key:  | POST | `/v5/order/amend-batch` |
| [batchCancelOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1438) | :closed_lock_with_key:  | POST | `/v5/order/cancel-batch` |
| [getSpotBorrowCheck()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1460) | :closed_lock_with_key:  | GET | `/v5/order/spot-borrow-check` |
| [setDisconnectCancelAllWindow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1481) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [setDisconnectCancelAllWindowV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1499) | :closed_lock_with_key:  | POST | `/v5/order/disconnected-cancel-all` |
| [preCheckOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1514) | :closed_lock_with_key:  | POST | `/v5/order/pre-check` |
| [createStrategyOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1531) | :closed_lock_with_key:  | POST | `/v5/strategy/create` |
| [getStrategyList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1542) | :closed_lock_with_key:  | GET | `/v5/strategy/list` |
| [getStrategyOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1553) | :closed_lock_with_key:  | GET | `/v5/strategy/order-list` |
| [stopStrategy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1564) | :closed_lock_with_key:  | POST | `/v5/strategy/stop` |
| [getPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1589) | :closed_lock_with_key:  | GET | `/v5/position/list` |
| [getFuturesLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1601) | :closed_lock_with_key:  | GET | `/v5/position/symbol-info` |
| [setLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1616) | :closed_lock_with_key:  | POST | `/v5/position/set-leverage` |
| [switchIsolatedMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1629) | :closed_lock_with_key:  | POST | `/v5/position/switch-isolated` |
| [setTPSLMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1643) | :closed_lock_with_key:  | POST | `/v5/position/set-tpsl-mode` |
| [switchPositionMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1658) | :closed_lock_with_key:  | POST | `/v5/position/switch-mode` |
| [setRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1672) | :closed_lock_with_key:  | POST | `/v5/position/set-risk-limit` |
| [setTradingStop()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1687) | :closed_lock_with_key:  | POST | `/v5/position/trading-stop` |
| [setAutoAddMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1698) | :closed_lock_with_key:  | POST | `/v5/position/set-auto-add-margin` |
| [addOrReduceMargin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1710) | :closed_lock_with_key:  | POST | `/v5/position/add-margin` |
| [getClosedPnL()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1722) | :closed_lock_with_key:  | GET | `/v5/position/closed-pnl` |
| [getClosedOptionsPositions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1736) | :closed_lock_with_key:  | GET | `/v5/position/get-closed-positions` |
| [movePosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1761) | :closed_lock_with_key:  | POST | `/v5/position/move-positions` |
| [getMovePositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1772) | :closed_lock_with_key:  | GET | `/v5/position/move-history` |
| [confirmNewRiskLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1791) | :closed_lock_with_key:  | POST | `/v5/position/confirm-pending-mmr` |
| [getPreUpgradeOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1811) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/order/history` |
| [getPreUpgradeTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1826) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/execution/list` |
| [getPreUpgradeClosedPnl()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1837) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/position/closed-pnl` |
| [getPreUpgradeTransactions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1851) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/account/transaction-log` |
| [getPreUpgradeOptionDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1868) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/delivery-record` |
| [getPreUpgradeUSDCSessionSettlements()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1882) | :closed_lock_with_key:  | GET | `/v5/pre-upgrade/asset/settlement-record` |
| [getWalletBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1903) | :closed_lock_with_key:  | GET | `/v5/account/wallet-balance` |
| [getTransferableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1914) | :closed_lock_with_key:  | GET | `/v5/account/withdrawal` |
| [getAccountInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1931) | :closed_lock_with_key:  | GET | `/v5/account/instruments-info` |
| [upgradeToUnifiedAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1942) | :closed_lock_with_key:  | POST | `/v5/account/upgrade-to-uta` |
| [getBorrowHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1953) | :closed_lock_with_key:  | GET | `/v5/account/borrow-history` |
| [repayLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1974) | :closed_lock_with_key:  | POST | `/v5/account/quick-repayment` |
| [manualRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L1999) | :closed_lock_with_key:  | POST | `/v5/account/repay` |
| [setCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2008) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch` |
| [batchSetCollateralCoin()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2014) | :closed_lock_with_key:  | POST | `/v5/account/set-collateral-switch-batch` |
| [getCollateralInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2024) | :closed_lock_with_key:  | GET | `/v5/account/collateral-info` |
| [getCoinGreeks()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2033) | :closed_lock_with_key:  | GET | `/v5/asset/coin-greeks` |
| [getFeeRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2046) | :closed_lock_with_key:  | GET | `/v5/account/fee-rate` |
| [getAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2055) | :closed_lock_with_key:  | GET | `/v5/account/info` |
| [getDCPInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2068) | :closed_lock_with_key:  | GET | `/v5/account/query-dcp-info` |
| [getTransactionLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2075) | :closed_lock_with_key:  | GET | `/v5/account/transaction-log` |
| [getClassicTransactionLogs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2086) | :closed_lock_with_key:  | GET | `/v5/account/contract-transaction-log` |
| [getSMPGroup()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2097) | :closed_lock_with_key:  | GET | `/v5/account/smp-group` |
| [setMarginMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2110) | :closed_lock_with_key:  | POST | `/v5/account/set-margin-mode` |
| [setSpotHedging()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2127) | :closed_lock_with_key:  | POST | `/v5/account/set-hedging-mode` |
| [setLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2140) | :closed_lock_with_key:  | POST | `/v5/account/set-limit-px-action` |
| [getLimitPriceAction()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2151) | :closed_lock_with_key:  | GET | `/v5/account/user-setting-config` |
| [setDeltaNeutralMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2159) | :closed_lock_with_key:  | POST | `/v5/account/set-delta-mode` |
| [setMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2168) | :closed_lock_with_key:  | POST | `/v5/account/mmp-modify` |
| [resetMMP()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2175) | :closed_lock_with_key:  | POST | `/v5/account/mmp-reset` |
| [getMMPState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2182) | :closed_lock_with_key:  | GET | `/v5/account/mmp-state` |
| [getOptionAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2192) | :closed_lock_with_key:  | GET | `/v5/account/option-asset-info` |
| [getPayInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2202) | :closed_lock_with_key:  | GET | `/v5/account/pay-info` |
| [getTradeInfoForAnalysis()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2212) | :closed_lock_with_key:  | GET | `/v5/account/trade-info-for-analysis` |
| [getAssetOverview()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2232) | :closed_lock_with_key:  | GET | `/v5/asset/asset-overview` |
| [getPortfolioMarginInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2242) | :closed_lock_with_key:  | GET | `/v5/asset/portfolio-margin` |
| [getTotalMembersAssets()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2252) | :closed_lock_with_key:  | GET | `/v5/asset/total-members-assets` |
| [getFundingAccountTransactionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2264) | :closed_lock_with_key:  | GET | `/v5/asset/fundinghistory` |
| [getDeliveryRecord()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2280) | :closed_lock_with_key:  | GET | `/v5/asset/delivery-record` |
| [getSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2291) | :closed_lock_with_key:  | GET | `/v5/asset/settlement-record` |
| [getCoinExchangeRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2304) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/order-record` |
| [getCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2319) | :closed_lock_with_key:  | GET | `/v5/asset/coin/query-info` |
| [getSubUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2333) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-sub-member-list` |
| [getAssetInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2348) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-asset-info` |
| [getAllCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2359) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getCoinBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2373) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coin-balance` |
| [getWithdrawableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2387) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/withdrawable-amount` |
| [getTransferableCoinList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2396) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-transfer-coin-list` |
| [createInternalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2412) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/inter-transfer` |
| [getInternalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2431) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-inter-transfer-list` |
| [enableUniversalTransferForSubUIDs()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2451) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/save-transfer-sub-member` |
| [createUniversalTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2462) | :closed_lock_with_key:  | POST | `/v5/asset/transfer/universal-transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2474) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-universal-transfer-list` |
| [getAllowedDepositCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2487) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-allowed-list` |
| [setDepositAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2502) | :closed_lock_with_key:  | POST | `/v5/asset/deposit/deposit-to-account` |
| [getDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2518) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-record` |
| [getSubAccountDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2533) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-record` |
| [getInternalDepositRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2549) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-internal-record` |
| [getMasterDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2561) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-address` |
| [getSubDepositAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2579) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [querySubMemberAddress()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2604) | :closed_lock_with_key:  | GET | `/v5/asset/deposit/query-sub-member-address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2624) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-record` |
| [getWithdrawalAddressList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2636) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/query-address` |
| [getExchangeEntities()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2650) | :closed_lock_with_key:  | GET | `/v5/asset/withdraw/vasp/list` |
| [submitDepositOriginatorInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2660) | :closed_lock_with_key:  | POST | `/v5/asset/travel-rule/deposit/submit` |
| [submitWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2675) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/create` |
| [cancelWithdrawal()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2686) | :closed_lock_with_key:  | POST | `/v5/asset/withdraw/cancel` |
| [getConvertCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2695) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-coin-list` |
| [requestConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2706) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/quote-apply` |
| [confirmConvertQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2715) | :closed_lock_with_key:  | POST | `/v5/asset/exchange/convert-execute` |
| [getConvertStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2727) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/convert-result-query` |
| [getConvertHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2746) | :closed_lock_with_key:  | GET | `/v5/asset/exchange/query-convert-history` |
| [getSmallBalanceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2763) | :closed_lock_with_key:  | GET | `/v5/asset/covert/small-balance-list` |
| [getFiatTradingPairList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2777) | :closed_lock_with_key:  | GET | `/v5/fiat/query-coin-list` |
| [createSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2795) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-member` |
| [createSubUIDAPIKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2807) | :closed_lock_with_key:  | POST | `/v5/user/create-sub-api` |
| [getSubUIDList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2816) | :closed_lock_with_key:  | GET | `/v5/user/query-sub-members` |
| [getSubUIDListUnlimited()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2825) | :closed_lock_with_key:  | GET | `/v5/user/submembers` |
| [setSubUIDFrozenState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2843) | :closed_lock_with_key:  | POST | `/v5/user/frozen-sub-member` |
| [getQueryApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2858) | :closed_lock_with_key:  | GET | `/v5/user/query-api` |
| [getSubAccountAllApiKeys()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2865) | :closed_lock_with_key:  | GET | `/v5/user/sub-apikeys` |
| [getUIDWalletType()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2874) | :closed_lock_with_key:  | GET | `/v5/user/get-member-type` |
| [updateMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2893) | :closed_lock_with_key:  | POST | `/v5/user/update-api` |
| [updateSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2907) | :closed_lock_with_key:  | POST | `/v5/user/update-sub-api` |
| [deleteSubMember()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2920) | :closed_lock_with_key:  | POST | `/v5/user/del-submember` |
| [deleteMasterApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2935) | :closed_lock_with_key:  | POST | `/v5/user/delete-api` |
| [deleteSubApiKey()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2949) | :closed_lock_with_key:  | POST | `/v5/user/delete-sub-api` |
| [createTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2964) | :closed_lock_with_key:  | POST | `/v5/fht/compliance/tax/private/batch_create` |
| [getTaxBatchExport()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2976) | :closed_lock_with_key:  | GET | `/v5/fht/compliance/tax/private/batch_query` |
| [getAffiliateUserList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L2999) | :closed_lock_with_key:  | GET | `/v5/affiliate/aff-user-list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3017) | :closed_lock_with_key:  | GET | `/v5/affiliate/affiliate-sub-list` |
| [getAffiliateUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3033) | :closed_lock_with_key:  | GET | `/v5/user/aff-customer-info` |
| [getFriendReferrals()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3045) | :closed_lock_with_key:  | GET | `/v5/user/invitation/referrals` |
| [getReferralCode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3054) | :closed_lock_with_key:  | GET | `/v5/user/invitation/code` |
| [getReferralCommissionRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3066) | :closed_lock_with_key:  | POST | `/v5/referral/commission/records` |
| [getReferralCampaignRewards()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3079) | :closed_lock_with_key:  | POST | `/v5/referral/campaign/rewards` |
| [getReferralUserIdentityProfile()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3094) | :closed_lock_with_key:  | POST | `/v5/referral/user/identity-profile` |
| [getReferralUserInvitations()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3107) | :closed_lock_with_key:  | POST | `/v5/referral/user/invitations` |
| [signAgreement()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3125) | :closed_lock_with_key:  | POST | `/v5/user/agreement` |
| [getAlphaTradeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3142) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/quote` |
| [executeAlphaTradePurchase()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3153) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/purchase` |
| [executeAlphaTradeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3164) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/redeem` |
| [getAlphaPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3174) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/pay-token-list` |
| [getAlphaTradeOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3184) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/order-list` |
| [getAlphaBizTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3194) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-list` |
| [getAlphaBizTokenPriceList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3204) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-price-list` |
| [getAlphaBizTokenDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3214) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/biz-token-details` |
| [getAlphaAssetList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3224) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-list` |
| [getAlphaAssetDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3232) | :closed_lock_with_key:  | POST | `/v5/alpha/trade/asset-detail` |
| [getAlphaPredictionEngineStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3248) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/engine-status` |
| [getAlphaPredictionPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3258) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/pay-token-list` |
| [getAlphaPredictionEventDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3268) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/event-detail` |
| [getAlphaPredictionOrderEstimate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3278) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-estimate` |
| [executeAlphaPredictionBuy()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3288) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/buy` |
| [executeAlphaPredictionSell()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3298) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sell` |
| [getAlphaPredictionOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3308) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-list` |
| [getAlphaPredictionOrderBook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3318) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/order-book` |
| [getAlphaPredictionTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3328) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/token-price` |
| [getAlphaPredictionPriceHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3338) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/price-history` |
| [getAlphaPredictionPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3348) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-list` |
| [getAlphaPredictionPositionHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3358) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/position-history` |
| [getAlphaPredictionPortfolioSummary()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3368) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/portfolio-summary` |
| [getAlphaPredictionSideMarketList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3378) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/side-market-list` |
| [getAlphaPredictionSportsMatchList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3388) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/match-list` |
| [getAlphaPredictionSportsTimelineStages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3398) | :closed_lock_with_key:  | GET | `/v5/alpha/prediction/sports/timeline-stages` |
| [getAlphaPredictionSportsGroupStageDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3411) | :closed_lock_with_key:  | POST | `/v5/alpha/prediction/sports/group-stage-detail` |
| [getAlphaLPPoolList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3430) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-list` |
| [getAlphaLPPoolInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3440) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pool-info` |
| [executeAlphaLPStake()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3450) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/stake` |
| [executeAlphaLPRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3460) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/redeem` |
| [getAlphaLPOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3470) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/order-list` |
| [getAlphaLPPayTokenList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3480) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-list` |
| [getAlphaLPPayTokenPrice()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3490) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/pay-token-price` |
| [getAlphaLPPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3500) | :closed_lock_with_key:  | POST | `/v5/alpha/lp/position-list` |
| [getVIPMarginData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3520) |  | GET | `/v5/spot-margin-trade/data` |
| [getHistoricalInterestRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3531) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/interest-rate-history` |
| [getSpotMarginCurrencyData()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3556) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/currency-data` |
| [toggleSpotMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3568) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/switch-mode` |
| [setSpotMarginLeverage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3579) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [setSpotMarginLeverageV2()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3587) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-leverage` |
| [getSpotMarginState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3598) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/state` |
| [manualBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3605) | :closed_lock_with_key:  | POST | `/v5/account/borrow` |
| [getMaxBorrowableAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3620) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/max-borrowable` |
| [getPositionTiers()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3629) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/position-tiers` |
| [getCoinState()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3640) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/coinstate` |
| [getAvailableAmountToRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3651) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/repayment-available-amount` |
| [manualRepayWithoutConversion()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3670) | :closed_lock_with_key:  | POST | `/v5/account/no-convert-repay` |
| [getAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3683) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-auto-repay-mode` |
| [setAutoRepayMode()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3701) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-auto-repay-mode` |
| [getTradeAutoRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3716) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/get-trade-auto-repay` |
| [setTradeAutoRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3727) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/set-trade-auto-repay` |
| [getSpotMarginLiability()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3739) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/liability` |
| [submitFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3748) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow` |
| [getFixedRateBorrowOrderInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3757) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-info` |
| [getFixedRateBorrowContractInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3774) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-contract-info` |
| [getFixedRateBorrowOrderQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3791) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-order-quote` |
| [renewFixedRateBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3803) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-renew` |
| [getFixedRateBorrowInterestAccrued()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3809) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixedborrow-interest-accrued` |
| [cancelFixedRateBorrowOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3823) | :closed_lock_with_key:  | POST | `/v5/spot-margin-trade/fixedborrow-order-cancel` |
| [getFlexibleAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3832) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/flexible-available-inventory` |
| [getFixedRateAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3841) | :closed_lock_with_key:  | GET | `/v5/spot-margin-trade/fixed-available-inventory` |
| [getSpotMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3859) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/pledge-token` |
| [getSpotMarginBorrowableCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3876) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/borrow-token` |
| [getSpotMarginInterestAndQuota()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3893) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/loan-info` |
| [getSpotMarginLoanAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3911) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/account` |
| [spotMarginBorrow()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3935) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/loan` |
| [spotMarginRepay()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3946) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/repay` |
| [getSpotMarginBorrowOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3961) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/orders` |
| [getSpotMarginRepaymentOrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L3990) | :closed_lock_with_key:  | GET | `/v5/spot-cross-margin-trade/repay-history` |
| [toggleSpotCrossMarginTrade()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4019) | :closed_lock_with_key:  | POST | `/v5/spot-cross-margin-trade/switch` |
| [getCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4039) |  | GET | `/v5/crypto-loan/collateral-data` |
| [getBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4056) |  | GET | `/v5/crypto-loan/loanable-data` |
| [getAccountBorrowCollateralLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4074) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrowable-collateralisable-number` |
| [borrowCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4094) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/borrow` |
| [repayCryptoLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4115) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/repay` |
| [getUnpaidLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4131) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/ongoing-orders` |
| [getRepaymentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4152) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/repayment-history` |
| [getCompletedLoanOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4172) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/borrow-history` |
| [getMaxAllowedReductionCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4191) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/max-collateral-amount` |
| [adjustCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4210) | :closed_lock_with_key:  | POST | `/v5/crypto-loan/adjust-ltv` |
| [getLoanLTVAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4234) | :closed_lock_with_key:  | GET | `/v5/crypto-loan/adjustment-history` |
| [getLoanBorrowableCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4255) |  | GET | `/v5/crypto-loan-common/loanable-data` |
| [getLoanCollateralCoins()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4267) |  | GET | `/v5/crypto-loan-common/collateral-data` |
| [getMaxCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4277) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/max-collateral-amount` |
| [getMaxLoanAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4296) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/max-loan` |
| [updateCollateralAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4306) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-common/adjust-ltv` |
| [getCollateralAdjustmentHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4317) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/adjustment-history` |
| [getCryptoLoanPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4332) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-common/position` |
| [borrowFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4349) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/borrow` |
| [repayFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4360) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay` |
| [repayCollateralFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4370) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getOngoingFlexibleLoans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4384) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/ongoing-coin` |
| [getBorrowHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4396) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/borrow-history` |
| [getRepaymentHistoryFlexible()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4409) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/repayment-history` |
| [getFlexibleLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4423) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-flexible/available-inventory` |
| [getSupplyOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4443) |  | GET | `/v5/crypto-loan-fixed/supply-order-quote` |
| [getBorrowOrderQuoteFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4456) |  | GET | `/v5/crypto-loan-fixed/borrow-order-quote` |
| [createBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4469) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow` |
| [createSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4482) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply` |
| [cancelBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4492) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/borrow-order-cancel` |
| [cancelSupplyOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4506) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/supply-order-cancel` |
| [getBorrowContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4519) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-contract-info` |
| [getSupplyContractInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4537) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-contract-info` |
| [getBorrowOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4555) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/borrow-order-info` |
| [getSupplyOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4568) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/supply-order-info` |
| [repayFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4582) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/fully-repay` |
| [repayCollateralFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4593) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-flexible/repay-collateral` |
| [getRepaymentHistoryFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4606) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/repayment-history` |
| [renewBorrowOrderFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4623) | :closed_lock_with_key:  | POST | `/v5/crypto-loan-fixed/renew` |
| [getRenewOrderInfoFixed()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4636) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/renew-info` |
| [getFixedLoanAvailableInventory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4645) | :closed_lock_with_key:  | GET | `/v5/crypto-loan-fixed/available-inventory` |
| [getInstitutionalLendingProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4660) |  | GET | `/v5/ins-loan/product-infos` |
| [getInstitutionalLendingCoinDeltaAmount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4672) | :closed_lock_with_key:  | GET | `/v5/ins-loan/coin-delta-amount` |
| [getInstitutionalLendingDelayLiquidationStatus()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4681) | :closed_lock_with_key:  | GET | `/v5/ins-loan/delay-liq-status` |
| [getInstitutionalLendingMarginCoinInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4691) |  | GET | `/v5/ins-loan/ensure-tokens` |
| [getInstitutionalLendingMarginCoinInfoWithConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4700) |  | GET | `/v5/ins-loan/ensure-tokens-convert` |
| [getInstitutionalLendingLoanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4709) | :closed_lock_with_key:  | GET | `/v5/ins-loan/loan-order` |
| [getInstitutionalLendingRepayOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4721) | :closed_lock_with_key:  | GET | `/v5/ins-loan/repaid-history` |
| [getInstitutionalLendingLTV()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4733) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv` |
| [getInstitutionalLendingLTVWithLadderConversionRate()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4742) | :closed_lock_with_key:  | GET | `/v5/ins-loan/ltv-convert` |
| [bindOrUnbindUID()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4757) | :closed_lock_with_key:  | POST | `/v5/ins-loan/association-uid` |
| [repayInstitutionalLoan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4777) | :closed_lock_with_key:  | POST | `/v5/ins-loan/repay-loan` |
| [getExchangeBrokerEarnings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4798) | :closed_lock_with_key:  | GET | `/v5/broker/earnings-info` |
| [getExchangeBrokerAccountInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4811) | :closed_lock_with_key:  | GET | `/v5/broker/account-info` |
| [getBrokerSubAccountDeposits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4827) | :closed_lock_with_key:  | GET | `/v5/broker/asset/query-sub-member-deposit-record` |
| [getBrokerVoucherSpec()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4842) | :closed_lock_with_key:  | POST | `/v5/broker/award/info` |
| [issueBrokerVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4854) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribute-award` |
| [getBrokerIssuedVoucher()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4866) | :closed_lock_with_key:  | POST | `/v5/broker/award/distribution-record` |
| [setBrokerRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4883) | :closed_lock_with_key:  | POST | `/v5/broker/apilimit/set` |
| [getBrokerRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4902) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-cap` |
| [getAllBrokerRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4920) | :closed_lock_with_key:  | GET | `/v5/broker/apilimit/query-all` |
| [getEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4940) |  | GET | `/v5/earn/product` |
| [getFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4951) | :closed_lock_with_key:  | GET | `/v5/earn/flexible-saving/auto-savings` |
| [setFlexibleSavingAutoSavings()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4962) | :closed_lock_with_key:  | POST | `/v5/earn/flexible-saving/auto-savings` |
| [getEarnCouponList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4972) | :closed_lock_with_key:  | GET | `/v5/earn/coupons` |
| [getRWAProductList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4982) |  | GET | `/v5/earn/rwa/product` |
| [placeRWAOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L4992) | :closed_lock_with_key:  | POST | `/v5/earn/rwa/place-order` |
| [getRWAPositionList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5001) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/position` |
| [getRWAOrderList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5010) | :closed_lock_with_key:  | GET | `/v5/earn/rwa/order` |
| [getRWANavChart()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5020) |  | GET | `/v5/earn/rwa/nav-chart` |
| [getHoldToEarnAirdropProducts()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5031) |  | GET | `/v5/earn/hold-to-earn/product` |
| [getAdvanceEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5042) |  | GET | `/v5/earn/advance/product` |
| [getLiquidityMiningProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5053) |  | GET | `/v5/earn/liquidity-mining/product` |
| [reinvestLiquidityMining()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5066) | :closed_lock_with_key:  | POST | `/v5/earn/liquidity-mining/reinvest` |
| [getFixedTermEarnProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5077) |  | GET | `/v5/earn/fixed-term/product` |
| [getAdvanceEarnProductExtraInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5089) |  | GET | `/v5/earn/advance/product-extra-info` |
| [submitAdvanceEarnPlaceOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5100) | :closed_lock_with_key:  | POST | `/v5/earn/advance/place-order` |
| [getAdvanceEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5111) | :closed_lock_with_key:  | GET | `/v5/earn/advance/position` |
| [getAdvanceEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5122) | :closed_lock_with_key:  | GET | `/v5/earn/advance/order` |
| [submitFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5133) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/place-order` |
| [redeemFixedTermEarn()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5144) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/redeem` |
| [getFixedTermEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5155) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/position` |
| [getFixedTermEarnOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5166) | :closed_lock_with_key:  | GET | `/v5/earn/fixed-term/order` |
| [setFixedTermEarnAutoInvest()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5177) | :closed_lock_with_key:  | POST | `/v5/earn/fixed-term/position/auto-invest` |
| [submitStakeRedeem()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5193) | :closed_lock_with_key:  | POST | `/v5/earn/place-order` |
| [getEarnOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5212) | :closed_lock_with_key:  | GET | `/v5/earn/order` |
| [getEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5230) | :closed_lock_with_key:  | GET | `/v5/earn/position` |
| [modifyEarnPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5243) | :closed_lock_with_key:  | POST | `/v5/earn/position/modify` |
| [getEarnYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5256) | :closed_lock_with_key:  | GET | `/v5/earn/yield` |
| [getHoldToEarnAirdropYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5270) | :closed_lock_with_key:  | GET | `/v5/earn/hold-to-earn/yield-history` |
| [getEarnHourlyYieldHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5281) | :closed_lock_with_key:  | GET | `/v5/earn/hourly-yield` |
| [getEarnAprHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5295) |  | GET | `/v5/earn/apr-history` |
| [getEarnTokenProduct()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5305) |  | GET | `/v5/earn/token/product` |
| [submitEarnTokenOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5314) | :closed_lock_with_key:  | POST | `/v5/earn/token/place-order` |
| [getEarnTokenOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5323) | :closed_lock_with_key:  | GET | `/v5/earn/token/order` |
| [getEarnTokenPosition()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5335) | :closed_lock_with_key:  | GET | `/v5/earn/token/position` |
| [getEarnTokenDailyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5344) | :closed_lock_with_key:  | GET | `/v5/earn/token/yield` |
| [getEarnTokenHourlyYield()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5356) | :closed_lock_with_key:  | GET | `/v5/earn/token/hourly-yield` |
| [getEarnTokenHistoryApr()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5368) |  | GET | `/v5/earn/token/history-apr` |
| [getPwmInvestmentPlanList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5383) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/list` |
| [getPwmInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5392) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/detail` |
| [getPwmPendingInvestmentPlanDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5401) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/new-plan` |
| [claimPwmWithdrawableFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5410) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/claim` |
| [getPwmInvestmentPlanAssetTrend()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5419) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/asset-trend` |
| [getPwmFundHistoricalNav()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5428) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/fund-nav` |
| [subscribePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5437) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/subscribe` |
| [investMorePwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5446) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/invest-more` |
| [redeemPwmInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5455) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/investment-plan/redeem` |
| [getPwmInvestmentPlanOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5464) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/investment-plan/order` |
| [getPwmSubscribableProductInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5473) |  | GET | `/v5/earn/pwm/customize-plan/product` |
| [createPwmCustomizeInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5482) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/customize-plan/create` |
| [getPwmAllFunds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5497) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-funds` |
| [settlePwmFundProfit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5506) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/settle-profit` |
| [createPwmFund()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5515) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-fund` |
| [createPwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5524) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-investment-plan` |
| [getPwmAssetManagerInvestmentPlans()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5538) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/get-investment-plan` |
| [managePwmAssetManagerInvestmentPlan()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5550) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-investment-plan` |
| [getPwmAllFundOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5564) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/asset-manager/all-order` |
| [managePwmFundOrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5573) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/manage-order` |
| [createPwmFundSubAccount()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5582) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/asset-manager/create-sub-account` |
| [pwmFundTransfer()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5594) | :closed_lock_with_key:  | POST | `/v5/earn/pwm/fund-transfer` |
| [getPwmFundTransferRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5603) | :closed_lock_with_key:  | GET | `/v5/earn/pwm/query-fund-transfer-result` |
| [queryCardAssetRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5618) | :closed_lock_with_key:  | POST | `/v5/card/transaction/query-asset-records` |
| [queryCardPointsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5627) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/balance` |
| [queryCardPointsRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5634) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/records` |
| [queryCardPointsTier()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5643) | :closed_lock_with_key:  | POST | `/v5/card/reward/points/tier` |
| [queryCardMallItemList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5650) | :closed_lock_with_key:  | POST | `/v5/card/reward/mall/item/list` |
| [queryCardPointCashbackDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5659) | :closed_lock_with_key:  | POST | `/v5/card/reward/point/cashback/detail` |
| [createRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5675) | :closed_lock_with_key:  | POST | `/v5/rfq/create-rfq` |
| [getRFQConfig()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5686) | :closed_lock_with_key:  | GET | `/v5/rfq/config` |
| [cancelRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5695) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-rfq` |
| [cancelAllRFQ()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5705) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-rfq` |
| [createRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5714) | :closed_lock_with_key:  | POST | `/v5/rfq/create-quote` |
| [executeRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5725) | :closed_lock_with_key:  | POST | `/v5/rfq/execute-quote` |
| [cancelRFQQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5736) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-quote` |
| [cancelAllRFQQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5746) | :closed_lock_with_key:  | POST | `/v5/rfq/cancel-all-quotes` |
| [getRFQRealtimeInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5760) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-realtime` |
| [getRFQHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5772) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-list` |
| [getRFQRealtimeQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5786) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-realtime` |
| [getRFQHistoryQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5801) | :closed_lock_with_key:  | GET | `/v5/rfq/quote-list` |
| [getRFQTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5814) | :closed_lock_with_key:  | GET | `/v5/rfq/trade-list` |
| [getRFQPublicTrades()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5827) | :closed_lock_with_key:  | GET | `/v5/rfq/public-trades` |
| [acceptNonLPQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5843) | :closed_lock_with_key:  | POST | `/v5/rfq/accept-other-quote` |
| [getRFQDetails()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5849) | :closed_lock_with_key:  | GET | `/v5/rfq/rfq-detail-list` |
| [getP2PAccountCoinsBalance()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5874) | :closed_lock_with_key:  | GET | `/v5/asset/transfer/query-account-coins-balance` |
| [getP2POnlineAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5891) | :closed_lock_with_key:  | POST | `/v5/p2p/item/online` |
| [createP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5900) | :closed_lock_with_key:  | POST | `/v5/p2p/item/create` |
| [cancelP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5909) | :closed_lock_with_key:  | POST | `/v5/p2p/item/cancel` |
| [updateP2PAd()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5923) | :closed_lock_with_key:  | POST | `/v5/p2p/item/update` |
| [getP2PPersonalAds()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5933) | :closed_lock_with_key:  | POST | `/v5/p2p/item/personal/list` |
| [getP2PAdDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5942) | :closed_lock_with_key:  | POST | `/v5/p2p/item/info` |
| [getP2POrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5957) | :closed_lock_with_key:  | POST | `/v5/p2p/order/simplifyList` |
| [getP2POrderDetail()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5967) | :closed_lock_with_key:  | POST | `/v5/p2p/order/info` |
| [getP2PPendingOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5976) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pending/simplifyList` |
| [markP2POrderAsPaid()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5985) | :closed_lock_with_key:  | POST | `/v5/p2p/order/pay` |
| [releaseP2POrder()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L5994) | :closed_lock_with_key:  | POST | `/v5/p2p/order/finish` |
| [reviewP2PSellerCancelOrderApply()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6006) | :closed_lock_with_key:  | POST | `/v5/p2p/order/buyer/examine/sellerCancelOrderApply` |
| [sendP2POrderMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6018) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/send` |
| [getP2PChatSessions()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6033) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/list_v1` |
| [getP2PChatSessionId()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6043) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/session/getSessionId` |
| [sendP2PChatMessage()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6079) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/send_v1` |
| [getP2PChatMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6091) | :closed_lock_with_key:  | POST | `/v5/p2p/chat/message/listpage_v1` |
| [getP2POrderMessages()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6100) | :closed_lock_with_key:  | POST | `/v5/p2p/order/message/listpage` |
| [getP2PUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6114) | :closed_lock_with_key:  | POST | `/v5/p2p/user/personal/info` |
| [getP2PCounterpartyUserInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6121) | :closed_lock_with_key:  | POST | `/v5/p2p/user/order/personal/info` |
| [getP2PUserPayments()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6130) | :closed_lock_with_key:  | POST | `/v5/p2p/user/payment/list` |
| [setApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6150) | :closed_lock_with_key:  | POST | `/v5/apilimit/set` |
| [queryApiRateLimit()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6179) | :closed_lock_with_key:  | GET | `/v5/apilimit/query` |
| [getRateLimitCap()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6198) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-cap` |
| [getAllRateLimits()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6217) | :closed_lock_with_key:  | GET | `/v5/apilimit/query-all` |
| [getLaunchpoolProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6240) |  | GET | `/v5/spot-x/launchpool/project/list` |
| [getLaunchpoolUserActivityLog()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6246) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/activity-log` |
| [getLaunchpoolCurrentStaking()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6252) | :closed_lock_with_key:  | GET | `/v5/spot-x/launchpool/user/current-staking` |
| [getLaunchpoolUserHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6258) | :closed_lock_with_key:  | POST | `/v5/spot-x/launchpool/user/history` |
| [getPuzzleProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6264) |  | GET | `/v5/spot-x/puzzle/project/list` |
| [getTokenSplashProjectList()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6270) |  | GET | `/v5/spot-x/token-splash/project/list` |
| [getTokenSplashUserActivityParams()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6276) | :closed_lock_with_key:  | GET | `/v5/spot-x/token-splash/user/activity-params` |
| [getEventInstrumentsInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6299) |  | GET | `/v5/event/instruments-info` |
| [getEventOrderbook()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6310) |  | GET | `/v5/event/orderbook` |
| [getEventOrderHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6321) | :closed_lock_with_key:  | GET | `/v5/event/order-list` |
| [getEventActiveOrders()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6332) | :closed_lock_with_key:  | GET | `/v5/event/order-realtime` |
| [getEventPositionInfo()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6343) | :closed_lock_with_key:  | GET | `/v5/event/positions` |
| [getEventTradeHistory()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6354) | :closed_lock_with_key:  | GET | `/v5/event/trades` |
| [getEventSettlementRecords()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6365) | :closed_lock_with_key:  | GET | `/v5/event/settlements` |
| [submitEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6376) | :closed_lock_with_key:  | POST | `/v5/event/quotes` |
| [cancelEventQuote()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6387) | :closed_lock_with_key:  | POST | `/v5/event/cancel` |
| [cancelAllEventQuotes()](https://github.com/sieblyio/bybit-api/blob/master/src/rest-client-v5.ts#L6398) | :closed_lock_with_key:  | POST | `/v5/event/cancel-all` |

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