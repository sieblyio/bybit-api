export type EventContractTypeV5 = 'Up_Down' | 'UpDown' | 'Target' | 'Range';
export type EventContractDirectionV5 =
  | 'UP'
  | 'DOWN'
  | 'ABOVE'
  | 'BELOW'
  | 'RANGE_IN'
  | 'RANGE_OUT';

export interface EventInstrumentFeeRateRuleV5 {
  minSecToDelivery: number;
  maxSecToDelivery: number;
  baseMarkup: string;
}

export interface EventInstrumentQuotationLimitV5 {
  minSecToDelivery: number;
  maxSecToDelivery: number;
  quoteMaxAmountPerUser: string;
  quoteMinAmountPerUser: string;
  quoteMinAmount: string;
}

export interface EventInstrumentLotSizeFilterV5 {
  minOrderAmount: string;
  maxOrderAmount: string;
  orderAmountTickSize: string;
  quoteMaxValidMs: number;
  quoteMinIntervalPerUserMs: number;
}

export interface EventInstrumentInfoV5 {
  symbol: string;
  symbolId: number;
  baseCoin: string;
  quoteCoin: string;
  settleCoin: string;
  eventContractType: EventContractTypeV5 | string;
  durationWindow: string | number;
  rvThreshold: string;
  rebate: string;
  takerFeeRate: string;
  makerFeeRate: string;
  launchTime: string;
  deliveryTime: string;
  status: string;
  targetPrice: string;
  lowerBound: string;
  upperBound: string;
  callOptionSymbolId: number;
  putOptionSymbolId: number;
  feeRateRule: EventInstrumentFeeRateRuleV5[];
  lotSizeFilter: EventInstrumentLotSizeFilterV5;
  quotationLimit: EventInstrumentQuotationLimitV5[];
}

export interface EventInstrumentInfoResultV5 {
  nextPageCursor: string;
  list: EventInstrumentInfoV5[];
}

/** REST Get Orderbook: each entry is [payoutRatio, orderValue] */
export type EventOrderbookLevelV5 = [string, string];

export interface EventOrderbookV5 {
  s: string;
  r: EventOrderbookLevelV5[];
  ts: number;
  u: number;
  seq: number;
  cts: number;
}

export interface EventOrderHistoryItemV5 {
  orderId: string;
  orderLinkId: string;
  orderStatus: string;
  symbol: string;
  symbolId: string;
  baseCoin: string;
  quoteCoin: string;
  settleCoin: string;
  ecDirection: EventContractDirectionV5 | string;
  ecDurationWindow: string;
  ecTargetPrice: string;
  ecContractType: EventContractTypeV5 | string;
  ecLowerBound: string;
  ecUpperBound: string;
  settleTimeMs: string;
  ecOrderValue: string;
  ecIndexPrice: string;
  orderAvgPayoutRatio: string;
  cumExecValue: string;
  payoutRatio: string;
  tradeFee: string;
  transTime: string;
  createTime: string;
  updateTime: string;
  cumPayout: string;
  cumExecFee: string;
  cancelType: string;
  createType: string;
  rejectReason: string;
  extraFees: string;
}

export interface EventOrderHistoryResultV5 {
  list: EventOrderHistoryItemV5[];
  cursor: string;
}

export interface EventActiveOrderV5 {
  orderId: string;
  orderLinkId: string;
  symbol: string;
  symbolId: string;
  side: string;
  orderStatus: string;
  payoutRatio: string;
  cumExecValue: string;
  cumExecFee: string;
  leavesValue: string;
  ecContractType: EventContractTypeV5 | string;
  ecDirection: EventContractDirectionV5 | string;
  ecOrderValue: string;
  ecSettleTime: string;
  ecTargetPrice: string;
  ecLowerBound: string;
  ecUpperBound: string;
  ecDurationWindow: string;
  ecIndexPrice: string;
  orderAvgPayoutRatio: string;
  createType: string;
  createdTime: string;
  updatedTime: string;
}

export interface EventActiveOrdersResultV5 {
  list: EventActiveOrderV5[];
  nextPageCursor: string;
}

export interface EventPositionV5 {
  symbol: string;
  baseCoin: string;
  settleCoin: string;
  side: string;
  ecContractType: EventContractTypeV5 | string;
  ecDirection: EventContractDirectionV5 | string;
  avgPayoutRatio: string;
  positionValue: string;
  ecSettleTime: string;
  cumClosedPnl: string;
  createdTime: string;
  updatedTime: string;
  seq: number;
}

export interface EventPositionInfoResultV5 {
  list: EventPositionV5[];
  nextPageCursor: string;
}

export interface EventTradeV5 {
  orderId: string;
  orderLinkId: string;
  execId: string;
  symbol: string;
  baseCoin: string;
  settleCoin: string;
  side: string;
  execType: string;
  execPrice: string;
  execValue: string;
  execFee: string;
  execFeeRate: string;
  orderPrice: string;
  feeCoin: string;
  transTime: string;
  timeInForce: string;
  crossSeq: string;
  ecPayout: string;
  ecDurationWindow: string;
  settleTimeMs: string;
  ecOrderValue: string;
  ecContractType: EventContractTypeV5 | string;
  ecDirection: EventContractDirectionV5 | string;
  ecTargetPrice: string;
  ecLowerBound: string;
  ecUpperBound: string;
  extraFees: string;
}

export interface EventTradeHistoryResultV5 {
  list: EventTradeV5[];
  cursor: string;
}

export interface EventSettlementV5 {
  transId: string;
  symbol: string;
  symbolId: string;
  baseCoin: string;
  settleCoin: string;
  side: string;
  ecContractType: EventContractTypeV5 | string;
  ecDirection: EventContractDirectionV5 | string;
  settlePrice: string;
  entryPrice: string;
  grossPayoutRatio: string;
  ecDurationWindow: string;
  ecTargetPrice: string;
  ecLowerBound: string;
  ecUpperBound: string;
  transTime: string;
  crossSeq: string;
  execFee: string;
  execFeeRate: string;
  payout: string;
  sessionRpl: string;
  orderId: string;
}

export interface EventSettlementRecordsResultV5 {
  list: EventSettlementV5[];
  cursor: string;
}

export interface EventQuoteResultV5 {
  orderLinkId: string;
  orderId: string;
}

export interface CancelAllEventQuotesResultV5 {
  list: EventQuoteResultV5[];
  /** 1: success; 0: failed */
  success: '1' | '0';
}
