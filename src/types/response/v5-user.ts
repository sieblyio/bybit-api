import {
  ReferralFriendStatusV5,
  ReferralProductLineV5,
} from '../request/v5-user';
import { PermissionsV5 } from '../shared-v5';

export interface CreateSubMemberResultV5 {
  uid: string;
  username: string;
  memberType: number;
  status: number;
  remark: string;
}

export interface CreateSubApiKeyResultV5 {
  id: string;
  note: string;
  apiKey: string;
  readOnly: number;
  secret: string;
  permissions: PermissionsV5;
}

export interface SubMemberV5 {
  uid: string;
  username: string;
  memberType: number;
  status: number;
  accountMode: number;
  remark: string;
}
export type ApiKeyType = 1 | 2;

export interface ApiKeyPermissionsV5 {
  ContractTrade: string[];
  Spot: string[];
  Wallet: string[];
  Options: string[];
  Derivatives: string[];
  CopyTrading: string[];
  BlockTrade: string[];
  Exchange: string[];
  NFT: string[];
  Affiliate: string[];
  Earn?: string[];
  FiatP2P?: string[];
  FiatBitPay?: string[];
  FiatConvertBroker?: string[];
  /** @deprecated */
  FiatGlobalPay?: string[];
  BitCard?: string[];
  ByXPost?: string[];
}

export interface ApiKeyInfoV5 {
  id: string;
  note: string;
  apiKey: string;
  readOnly: 0 | 1;
  secret: string;
  permissions: ApiKeyPermissionsV5;
  ips: string[];
  type: 1 | 2; // 1: personal, 2: connected to third-party app
  deadlineDay: number;
  expiredAt: string;
  createdAt: string;
  /** @deprecated */
  unified: number;
  uta: 0 | 1; // 0: regular account, 1: unified trade account
  userID: number;
  inviterID: number;
  vipLevel: string;
  mktMakerLevel: string;
  affiliateID: number;
  rsaPublicKey: string;
  isMaster: boolean;
  parentUid: string;
  kycLevel: 'LEVEL_DEFAULT' | 'LEVEL_1' | 'LEVEL_2';
  kycRegion: string;
  isFixApi?: boolean;
}

export interface UpdateApiKeyResultV5 {
  id: string;
  note: string;
  apiKey: string;
  readOnly: 0 | 1;
  secret: string;
  permissions: PermissionsV5;
  ips: string[];
}

export interface SubAccountAllApiKeysResultV5 {
  result: {
    id: string;
    ips?: string[];
    apiKey: string;
    note: string;
    status: number;
    expiredAt?: string;
    createdAt: string;
    type: ApiKeyType;
    permissions: PermissionsV5;
    secret: string;
    readOnly: 0 | 1;
    deadlineDay?: number;
    flag: string;
  }[];
  nextPageCursor: string;
}

export interface AffiliateUserListItemV5 {
  userId: string;
  registerTime: string;
  source: string;
  remarks: string;
  isKyc: boolean;
  takerVol30Day: string;
  makerVol30Day: string;
  tradeVol30Day: string;
  depositAmount30Day: string;
  takerVol365Day: string;
  makerVol365Day: string;
  tradeVol365Day: string;
  depositAmount365Day: string;
  takerVol: string;
  makerVol: string;
  tradeVol: string;
  startDate: string;
  endDate: string;
  /** tradfi trade volume in [startDate, endDate] when startDate/endDate in params */
  tradfiTradeVol?: string;
  /** tradfi trade volume in last 30 days. 0 when startDate/endDate in params */
  tradfiTradeVol30Day?: string;
  /** tradfi trade volume in past year. 0 when startDate/endDate in params */
  tradfiTradeVol365Day?: string;
  /** Commission between startDate and endDate when startDate/endDate in params. Coin -> amount */
  commissionsVol?: Record<string, string>;
  /** Commission in last 30 days. Coin -> amount */
  commissions30Day?: Record<string, string>;
  /** Commission in past year. Coin -> amount */
  commissions365Day?: Record<string, string>;
}

export interface AffiliateUserInfoV5 {
  uid: string;
  vipLevel: string;
  takerVol30Day: string;
  makerVol30Day: string;
  tradeVol30Day: string;
  depositAmount30Day: string;
  takerVol365Day: string;
  makerVol365Day: string;
  tradeVol365Day: string;
  depositAmount365Day: string;
  totalWalletBalance: '1' | '2' | '3' | '4';
  depositUpdateTime: string;
  volUpdateTime: string;
  KycLevel: 0 | 1 | 2;
  /** tradfi trade volume in last 30 days (USDT) */
  tradfiTradeVol30Day?: string;
  /** tradfi trade volume in past year (USDT) */
  tradfiTradeVol365Day?: string;
  /** tradfi commissions in last 30 days. Coin -> amount */
  commissions30Day?: Record<string, string>;
  /** tradfi commissions in past year. Coin -> amount */
  commissions365Day?: Record<string, string>;
  /** Payment amount in the last 30 days */
  paySendAmount30Day: string;
  /** Pay first transaction amount */
  payFtt: string;
  /** Card first-time transaction amount */
  cardFtt: string;
}

export interface AffiliateSubAffiliateListItemV5 {
  subAffId: string;
  userId: string;
  name: string;
  email: string;
  /** Commission per currency (BTC, ETH, MNT, USDC, USDT) for the queried date range */
  commissionsVol: Record<string, string>;
  commissionsForUsdt: string;
  becameAffTime: string;
  startDate: string;
  endDate: string;
}

export interface AffiliateSubAffiliateListResultV5 {
  list: AffiliateSubAffiliateListItemV5[];
  nextPageCursor: string;
}

export interface FriendReferralRecordV5 {
  id: string;
  inviteeUid: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReferralCodeItemV5 {
  referralCode: string;
  referralLink: string;
  scene: number;
}

export interface ReferralCodesResultV5 {
  referralCodes: ReferralCodeItemV5[];
}

/** 0 unknown, 1 awaiting credit, 2 settled. Unrecognized values are returned as 0. */
export type ReferralCommissionStatusV5 = 0 | 1 | 2;

export interface ReferralCommissionRecordV5 {
  /** Masked invitee ID: first character + `***` + last character. */
  userId: string;
  /** Commission payment time, Unix seconds. */
  paymentTime: number;
  /** Commission rate. */
  rate: string;
  businessUnit: ReferralProductLineV5;
  commissionOriginCoin: string;
  /** Commission amount in the original currency. */
  commissionOriginAmount: string;
  /** Commission value in USDT. */
  commissionUsdtAmount: string;
  commissionStatus: ReferralCommissionStatusV5;
  /**
   * Whether the invitee is a Boost user. May be omitted.
   */
  isBoostM2?: boolean;
}

export interface ReferralCommissionRecordsResultV5 {
  records: ReferralCommissionRecordV5[];
  total: number;
}

export interface ReferralRebateRatioRuleV5 {
  /** Referral commission rate, from 0 to 100. */
  rebateRatio: number;
  /** Required number of qualified invitees. */
  referralCount: number;
  /** Whether the tier requires trading volume. */
  hasTradeCondition: boolean;
  /** Trading-volume threshold for the tier. */
  tradeAmountCondition: number;
}

export interface ReferralRebateRuleV5 {
  /** Deposit threshold. Currency and precision are not specified. */
  depositAmount: number;
  /** Trading threshold. Currency and precision are not specified. */
  tradeAmount: number;
  rebateRatioRules: ReferralRebateRatioRuleV5[];
  /** Number of days that the referral commission lasts. */
  rebateDurationDays: number;
  /**
   * Currently not populated. A default of `0` does not confirm a threshold.
   */
  tradefiDepositAmount?: number;
  /**
   * Currently not populated. A default of `0` does not confirm a threshold.
   */
  tradefiTradeAmount?: number;
}

/**
 * Task reward type. See Bybit enum `awardType`.
 * `100` loads reward-packet details. Types `95` and `97` do not currently
 * include assembled reward details.
 */
export type ReferralAwardTypeV5 =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100;

export interface ReferralCampaignAwardV5 {
  /** Regular reward ID or reward packet ID. */
  id: number;
  /**
   * English reward name. Reward packets use `UP TO <value_usd>` or
   * `EARN <value_usd>`.
   */
  name: string;
  /** English reward type. Always `Packet` for reward packets. */
  type: string;
  /** English product type. Empty for reward packets. */
  productLine: string;
  /** UTC RFC 3339. Empty when unavailable or for reward packets. */
  startTime: string;
  /** UTC RFC 3339. Empty when unavailable. */
  endTime: string;
}

/** One configured task inside a parsed campaign JSON string. */
export interface ReferralCampaignTaskItemV5 {
  id: number;
  awardType: ReferralAwardTypeV5;
  /** English title of each valid rule. `null` when there are no valid rules. */
  ruleTitle: string[] | null;
  /** English description of each valid rule. Same index as `ruleTitle`. */
  ruleDescription: string[] | null;
  /** First parameter of each valid rule. Same index as `ruleTitle`. */
  ruleParam: string[] | null;
  taskAwards: ReferralCampaignAwardV5[];
  /** M1 rewards with `UserRelateType=REFERRAL`. */
  m1Awards: ReferralCampaignAwardV5[];
}

/**
 * Parsed shape of one `ReferralCampaignRewardsResultV5.tasks` string.
 * `schemaVersion` is `2`. This is campaign configuration, not the user's
 * task progress or a claimed reward.
 */
export interface ReferralCampaignTaskPayloadV5 {
  schemaVersion: 2;
  source: 'base' | 'fiat' | 'earn';
  /** Campaign configuration ID, not a user reward-record ID. */
  campaignId: string;
  /** May be empty if task details cannot be assembled. */
  tasks: ReferralCampaignTaskItemV5[];
}

export interface ReferralCampaignRewardsResultV5 {
  /**
   * Site referral rules. This does not indicate the tier matched by the
   * current user.
   */
  rebateRule: ReferralRebateRuleV5;
  /**
   * Campaign JSON strings, in base, fiat, then earn order when active.
   * Parse each string as `ReferralCampaignTaskPayloadV5`.
   */
  tasks: string[];
}

export interface ReferralCommissionInfoV5 {
  totalCommission: string;
  yesterdayCommission: string;
  totalFriends: number;
  /** Number of invitees eligible for commission. */
  qualifiedFriends: number;
  walletBalance: string;
  /** Current-quarter trading volume of qualified invitees. */
  qualifiedFriendsQuarterTotalTradeVolume: string;
  /**
   * Active invitees in the current quarter. May be `0` when the source
   * value is `0`.
   */
  curQuarterActiveFriendsCount: number;
  /** Legacy referral-commission programme indicator. */
  hasOldReferral: number;
  /**
   * 0 unknown or not downgraded, 1 downgraded due to active invitee count,
   * 2 downgraded due to invitee trading volume.
   */
  degradeType: 0 | 1 | 2;
  commissionRate: string;
  /** 0 unknown, 1 upgraded, 2 upgrading, 3 not upgraded. */
  upgradeUnifiedAccount: 0 | 1 | 2 | 3;
  /**
   * 1 enabled, 2 disabled. May be `0` when the source value is `0`.
   */
  withdrawalSwitch: 0 | 1 | 2;
  /**
   * Qualified invitees in the previous quarter. May be `0` when the source
   * value is `0`.
   */
  lastQuarterQualifiedFriendsCount: number;
}

export interface ReferralUserIdentityProfileV5 {
  isAffiliate: boolean;
  /**
   * Whether the current user is an M1 inviter. Checked only when the user
   * is not an affiliate.
   */
  isM1: boolean;
  /**
   * Affiliate ID from the affiliate direct-customer relationship. `0` if
   * none is found.
   */
  inviterAffiliateId: number;
  /**
   * Relationship indicator: `1` when an affiliate direct-customer record
   * exists, otherwise `0`. This is not the affiliate user's ID.
   */
  inviterAffiliateUserId: number;
  /**
   * Relationship indicator: `1` when an invitation record exists for the
   * current user as invitee, otherwise `0`. This is not the inviter's ID.
   */
  inviterUserId: number;
  /**
   * Present only when an M1 inviter record matches the authenticated user
   * and the commission query succeeds.
   */
  commissionInfo?: ReferralCommissionInfoV5;
}

export interface ReferralUserInvitationRecordV5 {
  /** Masked invitee ID. */
  userIdMask: string;
  /** Invitee registration timestamp. */
  signTime: number;
  userStatus: ReferralFriendStatusV5;
  /** Total commission, at most eight decimal places. */
  totalCommission: string;
  /**
   * Unencrypted decimal invitee user ID. `userIdMask` is separate. The docs
   * say to confirm that exposing this value is intended.
   */
  userId: string;
  taskProgress: string;
  /**
   * `true` for some new EU-site invitees and non-Boost JPN-site invitees.
   * The Boost path leaves the default `false`.
   */
  notShowCommission: boolean;
  /**
   * Not populated by the current endpoint. May be omitted, or `""`.
   */
  totalBaseRewards?: string;
}

export interface ReferralUserInvitationsResultV5 {
  records: ReferralUserInvitationRecordV5[];
  total: number;
}
