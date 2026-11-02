import { AxiosAdapter } from 'axios';

import { RestClientV5 } from '../../src';

describe('Corporate actions and fixed-rate borrow endpoints', () => {
  let api: RestClientV5;
  let adapter: jest.MockedFunction<AxiosAdapter>;
  let result: object;

  beforeEach(() => {
    result = {};
    adapter = jest.fn(async (config) => ({
      config,
      data: {
        retCode: 0,
        retMsg: 'OK',
        result,
        retExtInfo: {},
        time: 1792117143000,
      },
      headers: {},
      status: 200,
      statusText: 'OK',
    }));
    api = new RestClientV5(
      {
        testnet: true,
        key: 'test-key-placeholder',
        secret: 'test-secret-placeholder',
      },
      { adapter },
    );
  });

  it('queries corporate actions without credentials or filters', async () => {
    result = { list: [], nextPageCursor: '' };
    const publicApi = new RestClientV5({ testnet: true }, { adapter });
    const response = await publicApi.getCorporateActions();

    expect(response.result).toEqual(result);
    expect(adapter).toHaveBeenCalledTimes(1);
    expect(adapter.mock.calls[0][0]).toMatchObject({
      method: 'get',
      url: 'https://api-testnet.bybit.com/v5/market/corporate-action',
    });
    expect(adapter.mock.calls[0][0].headers['X-BAPI-SIGN']).toBeUndefined();
  });

  it.each([
    { actionType: 'ForwardSplit' as const, splitType: 'FORWARD' },
    { actionType: 'ReverseSplit' as const, splitType: 'REVERSE' },
  ])(
    'passes $actionType filters and pagination and preserves split details',
    async ({ actionType, splitType }) => {
      result = {
        list: [
          {
            category: 'option',
            symbol: 'AAPLUSDT',
            baseCoin: 'AAPL',
            actionType,
            status: 'Completed',
            effectiveTime: 1788278400000,
            details: { splitFactor: '4', splitType },
          },
        ],
        nextPageCursor: 'next-page',
      };
      const params = {
        category: 'option' as const,
        baseCoin: 'AAPL',
        actionType,
        limit: 1,
        cursor: 'previous-page',
      };
      const response = await api.getCorporateActions(params);

      expect(adapter.mock.calls[0][0].params).toEqual(params);
      expect(response.result).toEqual(result);
      expect(response.result.list[0].details.splitFactor).toBe('4');
    },
  );

  it('preserves dividend installment details and numeric timestamps', async () => {
    result = {
      list: [
        {
          symbol: 'AAPLUSDT',
          baseCoin: 'AAPL',
          actionType: 'Dividend',
          status: 'Announced',
          effectiveTime: 1788278400000,
          details: {
            dividendAmountPerShare: '0.25',
            dividendCurrency: 'USD',
            installmentCount: 4,
            installmentAmountPerShare: '5.00000',
            installmentCoin: 'USDT',
            firstSettlementTimeUtc: 1788134400000,
            installments: [
              {
                installmentNo: 1,
                settlementTimeUtc: 1788134400000,
                status: 'SUCCESS',
              },
            ],
          },
        },
      ],
      nextPageCursor: '',
    };
    const response = await api.getCorporateActions({ actionType: 'Dividend' });

    expect(response.result).toEqual(result);
    expect(response.result.list[0].details.installments?.[0]).toEqual({
      installmentNo: 1,
      settlementTimeUtc: 1788134400000,
      status: 'SUCCESS',
    });
  });

  it('queries penalty interest without filters using a signed GET', async () => {
    result = { list: [], nextPageCursor: '' };
    const response = await api.getFixedRateBorrowInterestAccrued();

    expect(response.result).toEqual(result);
    expect(adapter.mock.calls[0][0]).toMatchObject({
      method: 'get',
      url: 'https://api-testnet.bybit.com/v5/spot-margin-trade/fixedborrow-interest-accrued',
    });
    expect(adapter.mock.calls[0][0].headers['X-BAPI-SIGN']).toEqual(
      expect.any(String),
    );
  });

  it('serializes penalty interest filters and cursor and preserves decimal strings', async () => {
    result = {
      list: [
        {
          refId: '26',
          currency: 'USDT',
          orderId: 'FIXED_BORROW_example',
          loanAmt: '6.019203532535780822',
          interest: '0.000206137107278623',
          interestRate: '0.30',
          ts: '1792117143000',
        },
      ],
      nextPageCursor: 'next-page',
    };
    const response = await api.getFixedRateBorrowInterestAccrued({
      orderId: 'FIXED_BORROW_example',
      orderCurrency: 'USDT',
      limit: '10',
      cursor: 'cursor+=/',
    });

    const request = adapter.mock.calls[0][0];
    const url = new URL(request.url!);
    expect(Object.fromEntries(url.searchParams)).toEqual({
      orderId: 'FIXED_BORROW_example',
      orderCurrency: 'USDT',
      limit: '10',
      cursor: 'cursor+=/',
    });
    expect(response.result).toEqual(result);
    expect(response.result.list[0].interest).toBe('0.000206137107278623');
  });

  it('sends a signed cancellation POST and returns the empty result', async () => {
    const response = await api.cancelFixedRateBorrowOrder({
      orderId: 'FIXED_BORROW_example',
    });

    const request = adapter.mock.calls[0][0];
    expect(request).toMatchObject({
      method: 'post',
      url: 'https://api-testnet.bybit.com/v5/spot-margin-trade/fixedborrow-order-cancel',
    });
    expect(JSON.parse(request.data)).toEqual({
      orderId: 'FIXED_BORROW_example',
    });
    expect(request.headers['X-BAPI-SIGN']).toEqual(expect.any(String));
    expect(response.retCode).toBe(0);
    expect(response.result).toEqual({});
    expect(adapter).toHaveBeenCalledTimes(1);
  });

  it('requires credentials for both private endpoints', async () => {
    const publicApi = new RestClientV5({ testnet: true }, { adapter });

    await expect(publicApi.getFixedRateBorrowInterestAccrued()).rejects.toThrow(
      'Private endpoints require api and private keys set',
    );
    await expect(
      publicApi.cancelFixedRateBorrowOrder({ orderId: 'FIXED_BORROW_example' }),
    ).rejects.toThrow('Private endpoints require api and private keys set');
    expect(adapter).not.toHaveBeenCalled();
  });
});
