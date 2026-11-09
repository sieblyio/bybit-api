import {
  LeverageTokenStatusV5,
  LTOrderStatusV5,
  LTOrderTypeV5,
} from '../shared-v5';

export interface LeverageTokenInfoV5 {
  ltCoin: string;
  ltName: string;
  maxPurchase: string;
  minPurchase: string;
  maxPurchaseDaily: string;
  maxRedeem: string;
  minRedeem: string;
  maxRedeemDaily: string;
  purchaseFeeRate: string;
  redeemFeeRate: string;
  ltStatus: LeverageTokenStatusV5;
  fundFee: string;
  fundFeeTime: string;
  manageFeeRate: string;
  manageFeeTime: string;
  value: string;
  netValue: string;
  total: string;
}

export interface LeveragedTokenMarketResultV5 {
  ltCoin: string;
  nav: string;
  navTime: string;
  circulation: string;
  basket: string;
  leverage: string;
}

export interface PurchaseSpotLeveragedTokenResultV5 {
  ltCoin: string;
  ltOrderStatus: LTOrderStatusV5;
  execQty: string;
  execAmt: string;
  amount: string;
  purchaseId: string;
  serialNo: string;
  valueCoin: string;
}
export interface RedeemSpotLeveragedTokenResultV5 {
  ltCoin: string;
  ltOrderStatus: LTOrderStatusV5;
  quantity: string;
  execQty: string;
  execAmt: string;
  redeemId: string;
  serialNo: string;
  valueCoin: string;
}

export interface SpotLeveragedTokenOrderHistoryV5 {
  ltCoin: string;
  orderId: string;
  ltOrderType: LTOrderTypeV5;
  orderTime: number;
  updateTime: number;
  ltOrderStatus: LTOrderStatusV5;
  fee: string;
  amount: string;
  value: string;
  valueCoin: string;
  serialNo: string;
}

export interface VIPMarginDataV5 {
  vipCoinList: {
    list: {
      borrowable: boolean;
      collateralRatio: string;
      currency: string;
      hourlyBorrowRate: string;
      liquidationOrder: string;
      marginCollateral: boolean;
      maxBorrowingAmount: string;
    }[];
    vipLevel: string;
  }[];
}

export interface SpotMarginCurrencyDataV5 {
  currency: string;
  flexibleManualBorrowable: boolean;
  minFlexibleManualBorrowQty: string;
  flexibleManualBorrowAccuracy: string;
  fixedManualBorrowable: boolean;
  minFixedManualBorrowQty: string;
  fixedManualBorrowAccuracy: string;
  fixedInterestRateAccuracy: string;
  minFixedInterestRate: string;
  maxFixedInterestRate: string;
}

export interface SpotMarginStateV5 {
  spotLeverage: string;
  spotMarginMode: '1' | '0';
  effectiveLeverage: string;
}

// Spot Margin Trade (UTA) response types
export interface ManualBorrowResultV5 {
  coin: string;
  amount: string;
}

export interface MaxBorrowableAmountV5 {
  currency: string;
  /**
   * Maximum borrowable amount. Can be `"0"` when spot margin mode is off, or
   * when no collateral coins are enabled. The app can still show a borrow
   * amount after a collateral coin is selected. Undocumented; Bybit API staff
   * confirmed this on 15 Oct 2026. Check `getSpotMarginState()`,
   * `setCollateralCoin()` (`POST /v5/account/set-collateral-switch`), and
   * `toggleSpotMarginTrade()` first.
   */
  maxLoan: string;
}

export interface PositionTierV5 {
  tier: string;
  borrowLimit: string;
  positionMMR: string;
  positionIMR: string;
  maxLeverage: string;
}

export interface CurrencyPositionTiersV5 {
  currency: string;
  positionTiersRatioList: PositionTierV5[];
}

export interface CoinStateV5 {
  currency: string;
  spotLeverage: string;
}

export interface AvailableAmountToRepayV5 {
  currency: string;
  lossLessRepaymentAmount: string;
}

export interface ManualRepayWithoutConversionResultV5 {
  /**
   * Result status:
   * - P: Processing
   * - SU: Success
   * - FA: Failed
   */
  resultStatus: 'P' | 'SU' | 'FA';
}

export interface AutoRepayModeItemV5 {
  currency: string; // Coin name, uppercase only
  autoRepayMode: '0' | '1'; // 0: Off, 1: On
}

export interface AutoRepayModeResultV5 {
  data: AutoRepayModeItemV5[];
}

export interface TradeAutoRepayResultV5 {
  /** Saved switch state. 1: enabled; 0: disabled */
  autoRepay: '0' | '1';
}

export interface SpotMarginLiabilityInfoV5 {
  currency: string;
  totalBorrowAmount: string;
  fixedBorrowAmount: string;
  flexibleBorrowAmount: string;
  spotTotalBorrow: string;
  derivativesBorrow: string;
}

export interface FixedRateBorrowResultV5 {
  orderId: string;
}

export interface FixedRateBorrowOrderInfoV5 {
  annualRate: string;
  orderId: string;
  orderTime: string;
  filledQty: string;
  orderQty: string;
  orderCurrency: string;
  state: number;
  term: number;
  repayType: string;
  strategyType: 'PARTIAL' | 'FULL';
}

export interface FixedRateBorrowContractInfoV5 {
  annualRate: string;
  borrowCurrency: string;
  borrowTime: string;
  interestPaid: string;
  loanId: string;
  orderId: string;
  repaymentTime: string;
  residualPenaltyInterest: string;
  residualPrincipal: string;
  status: number;
  term: string;
  repayType: string;
  strategyType: 'PARTIAL' | 'FULL';
}

export interface FixedRateBorrowQuoteV5 {
  orderCurrency: string;
  term: number;
  annualRate: string;
  qty: string;
}

export interface FixedRateBorrowInterestAccruedV5 {
  refId: string;
  currency: string;
  orderId: string;
  loanAmt: string;
  interest: string;
  interestRate: string;
  ts: string;
}

export interface FlexibleAvailableInventoryV5 {
  currency: string;
  availableInventory: string;
  updateTime: string;
}

export interface FixedRateAvailableInventoryV5 {
  currency: string;
  term: string;
  annualRate: string;
  availableInventory: string;
  updateTime: string;
}
