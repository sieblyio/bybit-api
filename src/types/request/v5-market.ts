import { KlineIntervalV3 } from '../shared';
import {
  CategoryV5,
  InstrumentStatusV5,
  InstrumentSymbolTypeV5,
  OptionTypeV5,
} from '../shared-v5';

export interface GetKlineParamsV5 {
  category: 'spot' | 'linear' | 'inverse';
  symbol: string;
  interval: KlineIntervalV3;
  start?: number;
  end?: number;
  limit?: number;
}

export interface GetMarkPriceKlineParamsV5 {
  /**
   * linear (default if omitted), inverse, or option.
   */
  category?: 'linear' | 'inverse' | 'option';
  symbol: string;
  interval: KlineIntervalV3;
  start?: number;
  end?: number;
  /**
   * Futures: [1, 1000], default 200. Options: [1, 500], default 200.
   */
  limit?: number;
}

export interface GetIndexPriceKlineParamsV5 {
  category: 'linear' | 'inverse';
  symbol: string;
  interval: KlineIntervalV3;
  start?: number;
  end?: number;
  limit?: number;
}

export interface GetPremiumIndexPriceKlineParamsV5 {
  category: 'linear';
  symbol: string;
  interval: KlineIntervalV3;
  start?: number;
  end?: number;
  limit?: number;
}

export interface GetInstrumentsInfoParamsV5 {
  category: CategoryV5;
  symbol?: string;
  /** Filter by instrument `symbolType` (e.g. `commodity`, `stock`, `forex` for linear). */
  symbolType?: InstrumentSymbolTypeV5;
  status?: InstrumentStatusV5;
  /** For `category=option`, pass `All` to return all option symbols. */
  baseCoin?: string;
  limit?: number;
  cursor?: string;
}

/**
 * GET /v5/market/instrument-summary
 *
 * `category` is required. Page with `cursor` = previous `nextPageCursor`.
 */
export interface GetInstrumentSummaryParamsV5 {
  /** Product type. `linear` or `option`. */
  category: 'linear' | 'option';
  symbol?: string;
  /** Instrument type. */
  symbolType?: string;
  /** Market region, for example `HK`, `US`, `CN`, `KR`. */
  marketRegion?: string;
  /** Base coin, for example `NVDA` or `TSLA`. */
  baseCoin?: string;
  /** Page size. Range [1, 1000]. Default 500. */
  limit?: number;
  /** Cursor. Use `nextPageCursor` from the previous response. */
  cursor?: string;
}

export interface GetOrderbookParamsV5 {
  category: CategoryV5;
  symbol: string;
  limit?: number;
}

export interface GetRPIOrderbookParamsV5 {
  category?: 'spot' | 'linear' | 'inverse';
  symbol: string;
  limit: number; // Required for RPI orderbook, [1, 50]
}

export interface GetIndexPriceComponentsParamsV5 {
  indexName: string; // Index name, like BTCUSDT
}

export interface GetADLAlertParamsV5 {
  symbol?: string; // Contract name, e.g. BTCUSDT. Uppercase only
}

export interface GetFeeGroupStructureParamsV5 {
  productType: string; // Product type. contract only for now
  groupId?: string; // Group ID. 1, 2, 3, 4, 5, 6, 7
}

export interface GetTickersParamsV5<TCategory = CategoryV5> {
  category: TCategory;
  symbol?: string;
  baseCoin?: string;
  expDate?: string;
}

export interface GetFundingRateHistoryParamsV5 {
  category: 'linear' | 'inverse';
  symbol: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface GetPublicTradingHistoryParamsV5 {
  category: CategoryV5;
  symbol: string;
  baseCoin?: string;
  optionType?: OptionTypeV5;
  limit?: number;
}

export type OpenInterestIntervalV5 =
  | '5min'
  | '15min'
  | '30min'
  | '1h'
  | '4h'
  | '1d';

export interface GetOpenInterestParamsV5 {
  category: 'linear' | 'inverse';
  symbol: string;
  intervalTime: OpenInterestIntervalV5;
  startTime?: number;
  endTime?: number;
  limit?: number;
  cursor?: string;
}

export interface GetHistoricalVolatilityParamsV5 {
  category: 'option';
  baseCoin?: string;
  period?: 7 | 14 | 21 | 30 | 60 | 90 | 180 | 270;
  startTime?: number;
  endTime?: number;
}

export interface GetInsuranceParamsV5 {
  coin?: string;
}

export interface GetRiskLimitParamsV5 {
  category?: 'linear' | 'inverse';
  symbol?: string;
  cursor?: string;
}

export interface GetOptionDeliveryPriceParamsV5 {
  category: 'option';
  symbol?: string;
  baseCoin?: string;
  limit?: number;
  cursor?: string;
}

export interface GetDeliveryPriceParamsV5 {
  category: 'linear' | 'inverse' | 'option';
  symbol?: string;
  baseCoin?: string;
  settleCoin?: string;
  limit?: number;
  cursor?: string;
}

export interface GetLongShortRatioParamsV5 {
  category: 'linear' | 'inverse';
  symbol: string;
  period: OpenInterestIntervalV5;
  startTime?: string;
  endTime?: string;
  limit?: number;
  cursor?: string;
}

export interface GetFullDepthOrderbookParamsV5 {
  category: 'spot' | 'linear' | 'inverse';
  symbol: string;
}

export interface GetOptionBaseCoinsParamsV5 {
  /**
   * Comma-separated underlying types.
   * 0 crypto, 1 commodity, 2 stock, 3 forex, 4 oil. Omit to return all types.
   */
  underlyingType?: string;
}

export interface GetCorporateActionsParamsV5 {
  category?: 'option';
  baseCoin?: string;
  actionType?: 'ForwardSplit' | 'ReverseSplit' | 'Dividend';
  limit?: number;
  cursor?: string;
}
