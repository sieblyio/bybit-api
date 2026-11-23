export interface CardShippingInfoV5 {
  delvProvider: string | null;
  trackingNo: string | null;
  shipmentTime: number | null;
  shippingStatus: string | null;
  shippingStatusDetail: string | null;
  trackingUrl: string | null;
  allowToChangeAddress: boolean | null;
  deliverReminderCode: string | null;
}

export interface CardV5 {
  cardId: string | null;
  cardProductCode: number | null;
  productId: number | null;
  cardHolderName: string | null;
  /** 1: Virtual card, 2: Physical card */
  cardType: 1 | 2 | null;
  maskedCardNumber: string | null;
  pan6: string | null;
  pan4: string | null;
  /** MM/yy */
  cardExpireDate: string | null;
  cardCurrency: string | null;
  /** 0: Undefined, 1: Inactive, 2: Active, 3: Frozen, 4: Banned, 5: Cancelled, 6: Invalid, 7: Created */
  status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;
  subStatus: number | null;
  countryAlpha3: string | null;
  /** Unix timestamp in milliseconds */
  cardActivateTime: number | null;
  /** Unix timestamp in milliseconds */
  createTime: number | null;
  allowOnlineTransaction: boolean | null;
  allowAtmWithdrawal: boolean | null;
  supportedCurrencyList: (string | null)[] | null;
  shippingInfo: CardShippingInfoV5 | null;
  isGooglePayAvailable: boolean;
  isApplePayAvailable: boolean;
}

export interface CardListResultV5 {
  /** Fixed at 1 */
  pageNo: number;
  pageSize: number;
  /** Fixed at 1 */
  totalPage: number;
  totalCount: number;
  data: CardV5[];
}

/** All amounts are JSON numbers in baseFiat. Unavailable values can be null. */
export interface CardLimitItemV5 {
  baseFiat: string | null;
  /** SPENDING, ATM_WITHDRAW, or other original strings such as "3", "4", "5" */
  itemType: string | null;
  singleAllowed: number | null;
  singleCustomLimit: number | null;
  dailyUsed: number | null;
  dailyAllowed: number | null;
  dailyCustomLimit: number | null;
  monthlyUsed: number | null;
  monthlyAllowed: number | null;
  monthlyCustomLimit: number | null;
  yearlyUsed: number | null;
  yearlyAllowed: number | null;
  lifeTimeUsed: number | null;
  lifeTimeAllowed: number | null;
}

export interface CardLimitResultV5 {
  limitItems: CardLimitItemV5[];
}

export interface CardAssetRecordV5 {
  pan4: string;
  pan6: string;
  tradeStatus: string;
  side: string;
  basicAmount: string;
  basicCurrency: string;
  transactionAmount: string;
  transactionCurrency: string;
  txnCreate: number;
  merchCountry: string;
  merchCity: string;
  merchName: string;
  txnId: string;
  declinedReason: string;
  totalFees: string;
  uid: number;
  transactionCurrencyAmount: string;
  fxPad: string;
  interchangeFee: string;
  billAmount: string;
  paidAmount: string;
  paidCurrency: string;
  bonusAmount: string;
  foreignTransactionFee: string;
  totalTax: string;
  paidFiat: string;
  withdrawalFee: string;
  status: string;
  orderNo: string;
  mccCode: string;
  merchCategoryDesc: string;
}

export interface CardAssetRecordsResultV5 {
  pageSize: number;
  pageNo: number;
  totalCount: number;
  data: CardAssetRecordV5[];
}

export interface CardPointBalanceV5 {
  accountId: string;
  availablePoint: string | number;
  pendingPoint: string | number;
  status: string;
  updateTime: string | number;
  settlementPeriod: number;
}

export interface CardPointRecordV5 {
  outOrderId: string;
  point: number;
  side: string;
  type: string;
  subType: string;
  createTime: number;
  updateTime: number;
  bizId: string;
  bizTxnId: string;
  transactionDate: string;
  transactionId: string;
  transactionAmount: string;
  basicCurrency: string;
  merchCategoryDesc: string;
  merchName: string;
  merchCountry: string;
  merchCity: string;
  pan4: string;
  payFiatAmount: string;
  transactionCurrencyAmount: string;
}

export interface CardPointRecordsResultV5 {
  pageSize: number;
  pageNo: number;
  totalCount: number;
  data: CardPointRecordV5[];
}

export interface CardPointTierInfoV5 {
  usedLimit: string;
  limit: string;
  unit: string;
  tier: string;
  autoCashback: boolean;
}

export interface CardMallItemV5 {
  itemId: string;
  itemName: string;
  priority: number;
  onTime: string;
  offTime: string;
  price: string;
  discountPrice: string;
  totalNum: number;
  redeemNum: number;
  picPath: string;
  currency: string;
  currencyType: number;
  itemType: number;
  itemBizType: number;
}

export interface CardMallItemListResultV5 {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  data: CardMallItemV5[];
}

export interface CardPointCashbackDetailV5 {
  points: string;
  amt: string;
  ccy: string;
  ccyType: string;
  createTime: string;
  bizTxnId: string;
  sourceId: number;
  sourceCode: string;
  orderStatus: number;
  orderSubStatus: number;
  orderShowStatus: string;
  failedBizCode: string;
}
