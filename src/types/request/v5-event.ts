export interface GetEventInstrumentsInfoParamsV5 {
  symbol?: string;
  status?: 'PreLaunch' | 'Trading' | 'Delivering' | 'Closed';
  limit?: number;
  cursor?: string;
}

export interface GetEventOrderbookParamsV5 {
  symbol: string;
}

export interface GetEventOrderHistoryParamsV5 {
  symbol?: string;
  orderId?: string;
  orderLinkId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface GetEventActiveOrdersParamsV5 {
  symbol?: string;
  orderId?: string;
  orderLinkId?: string;
  limit?: number;
  cursor?: string;
}

export interface GetEventPositionInfoParamsV5 {
  symbol?: string;
  baseCoin?: string;
  settleCoin?: string;
  limit?: number;
  cursor?: string;
}

export interface GetEventTradeHistoryParamsV5 {
  symbol: string;
  orderId?: string;
  orderLinkId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface GetEventSettlementRecordsParamsV5 {
  symbol: string;
  orderId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface SubmitEventQuoteParamsV5 {
  symbol: string;
  orderLinkId: string;
  grossPayoutRatio: string;
  amount: string;
  /** Automatically cancel after this many milliseconds. 0 uses quoteMaxValidMs; non-zero values must not exceed quoteMaxValidMs */
  cancelAfterMs?: number;
}

export interface CancelEventQuoteParamsV5 {
  orderLinkId?: string;
  orderId?: string;
}

export interface CancelAllEventQuotesParamsV5 {
  symbol: string;
}
