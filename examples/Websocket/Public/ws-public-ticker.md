Subscribe to the public `tickers.BTCUSDT` topic with `WebsocketClient` and the
`linear` product category. No API key or secret is needed.

After installing `bybit-api`, save the displayed code as `ws-public.mjs` and run
`node ws-public.mjs`.

Register the `exception`, `response`, and `update` handlers before calling
`subscribeV5()`. The example prints the first received price and closes the
connection. It exits with a nonzero status if the subscription fails or no
price arrives within 20 seconds.

The output contains `symbol`, `lastPrice` as a decimal string, and the exchange's
`timestamp` in milliseconds. For a continuous feed, keep the connection open
and merge ticker deltas into the preceding snapshot. Bybit omits unchanged
fields from linear ticker deltas, so a message without `lastPrice` does not
mean the price is zero or unavailable. See the
[Bybit ticker stream documentation](https://bybit-exchange.github.io/docs/v5/websocket/public/ticker)
for the message contract.
