# Node.js & JavaScript SDK for Bybit REST API, WebSocket API & WebSocket Events

[![Build & Test](https://github.com/sieblyio/bybit-api/actions/workflows/e2etest.yml/badge.svg?branch=master)](https://github.com/sieblyio/bybit-api/actions/workflows/e2etest.yml)
[![npm version](https://img.shields.io/npm/v/bybit-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/bybit-api/latest)][1]
[![npm downloads](https://img.shields.io/npm/dt/bybit-api)][1]
[![last commit](https://img.shields.io/github/last-commit/sieblyio/bybit-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/sieblyio/bybit-api/badge)](https://www.codefactor.io/repository/github/sieblyio/bybit-api)
[![Telegram](https://img.shields.io/badge/chat-on%20telegram-blue.svg)](https://t.me/nodetraders)
[![Bybit Tutorial](https://img.shields.io/badge/Bybit%20Tutorial-siebly.io-blue)](https://siebly.io/sdk/bybit/javascript/tutorial)

<p align="center">
  <a href="https://www.npmjs.com/package/bybit-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/bybit-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/bybit-api

> [!TIP]
> Upcoming change: As part of the [Siebly.io](https://siebly.io/) brand, this SDK is now hosted under our [Siebly.io GitHub organisation](https://github.com/sieblyio). The migration is seamless and requires no user changes.

Professional Node.js, JavaScript & TypeScript SDK for the Bybit REST APIs, WebSocket APIs & WebSocket Events.

Take a look at our dedicated [Bybit API quickstart guides for major frameworks and JavaScript runtimes](#frameworks--quickstart-guides).

- Complete integration with all Bybit REST APIs & WebSockets, including the WebSocket API.
- Actively maintained with a modern, promise-driven interface.
- Exclusive benefits with this Node.js, JavaScript & TypeScript SDK for Bybit:
  - Higher API rate limits with this SDK than the highest VIP tier!
    - All qualified API requests made with this SDK are automatically subject to significantly higher rate limits.
    - Rate limits are raised to 400 requests per second, higher than the highest VIP tier.
    - No action required. This is automatic for any API calls made with this SDK, for any user.
    - Read more in the announcement: [here](https://github.com/sieblyio/bybit-api/issues/458).
  - Lower minimum order notional value with this SDK!\*
    - Place orders with a notional value as low as $1.
    - Lower than the default minimum notional order value $5.
    - \*Note: the lower min notional requirement is an undocumented benefit that may end at any time.
- Automatic support for HMAC & RSA authentication.
- TypeScript support (thorough type declarations for most API requests & responses, including WS API).
- JavaScript support (TypeScript not required but definitely recommended).
- Thorough & automatic end-to-end tests making real API calls & WebSocket connections, validating any changes before they reach npm.
- Proxy support via axios integration.
- Robust WebSocket consumer integration with configurable heartbeats & automatic reconnect then resubscribe workflows.
  - Event driven messaging
  - Smart WebSocket persistence
    - Automatically handle silent websocket disconnections through timed heartbeats, including the scheduled 24hr disconnect.
    - Automatically handle authentication.
    - Emit `reconnected` event when dropped connection is restored.
- WebSocket API integration, with two design patterns to choose from:
  1. Asynchronous **promise**-driven responses:
     - Make requests like a REST API, using the WebSocket API. No need to subscribe to asynchronous events.
     - Import the `WebsocketAPIClient` and use it like the REST API client. Call functions and await responses.
       - See example for more details: [examples/ws-api-client.ts](./examples/ws-api-client.ts).
     - Prefer something more raw? Use the `sendWSAPIRequest(...)` method and await responses
       - See example for more details: [examples/ws-api-raw-promises.ts](./examples/ws-api-raw-promises.ts)
  2. Asynchronous **event**-driven responses:
     - Subscribe to `response` and `error` events from WebsocketClient's event emitter.
     - Send commands with the `sendWSAPIRequest(...)` method.
     - Responses to commands will arrive via the `response` and `error` events emitted by the client.
     - See example for more details: [examples/ws-api-raw-events.ts](./examples/ws-api-raw-events.ts)
- Active community support & collaboration in telegram: [Node.js Algo Traders](https://t.me/nodetraders).
- QuickStart Guide: https://siebly.io/sdk/bybit/javascript
- Bybit JavaScript Tutorial: [Bybit JavaScript REST API & WebSocket Tutorial](https://siebly.io/sdk/bybit/javascript/tutorial)

# Table of Contents

## Overview

- [Installation](#installation)
  - [Frameworks & Quickstart Guides](#frameworks--quickstart-guides)
- [Issues & Discussion](#issues--discussion)
- [Related Projects](#related-projects)
- [Documentation](#documentation)
- [Examples](#examples)

## REST API Examples

- [API Clients](#api-clients)
- [REST API Usage](#rest-api-usage)

## WebSocket Integration & Examples

- [WebSockets](#websockets)
- [WebSocket Subscriptions - Consuming Events](#websocket-subscriptions---consuming-events)
- [Websocket API - Sending Orders via WebSockets](#websocket-api---sending-orders-via-websockets)
- [Consumer Load Balancing](#balancing-load-across-multiple-connections)

## Bybit EU and Other Regions

- [`apiRegion` and `x-site-id`](#bybit-eu-and-other-regions-apiregion-and-x-site-id)
- [REST and WebSocket API Usage with Bybit EU](#rest-and-websocket-api-usage-with-bybit-eu)

## Additional Features

- [Logging](#logging)
  - [Customise Logging](#customise-logging)
  - [Debug HTTP Requests](#debug-http-requests)
- [Browser/Frontend Usage](#browserfrontend-usage)
  - [Vite and React](#vite-and-react)
  - [Next.js and server-side requests](#nextjs-and-server-side-requests)
  - [React Native and Expo](#react-native-and-expo)
  - [Standalone Webpack bundle](#standalone-webpack-bundle)
- [Use with LLMs & AI](#use-with-llms--ai)
- [Used By](#used-by)

## Contributing

- [Contributions & Thanks](#contributions--thanks)

---

## Installation

`npm install --save bybit-api`

### Frameworks & Quickstart Guides

Our complete Bybit SDK supports all the major JavaScript runtimes. For maximum convenience, we've included guides to quickly get you started with the most popular runtimes. If you're not sure how to use this SDK with a runtime or framework not listed here, feel free to [open an issue on GitHub](https://github.com/sieblyio/bybit-api/issues).

| Runtime                    | Details                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend (trading bots)     | Using [Node.js and JavaScript](https://sieblyio.github.io/docs/bybit/environments/node.html), [Node.js and TypeScript](https://sieblyio.github.io/docs/bybit/environments/typescript.html), [Bun](https://sieblyio.github.io/docs/bybit/environments/bun.html), or [Deno](https://sieblyio.github.io/docs/bybit/environments/deno.html). This is the recommendation for algorithmic trading systems. |
| Frontend / Web Development | Using [React with Vite](https://sieblyio.github.io/docs/bybit/environments/react.html) or [Vite with plain JavaScript](https://sieblyio.github.io/docs/bybit/environments/vite.html). Display REST and WebSocket prices in the browser.                                                                                                                                                              |
| Next.js App Router         | Using the [Next.js App Router](https://sieblyio.github.io/docs/bybit/environments/next.html) to serve the price from a Route Handler running on Node.js.                                                                                                                                                                                                                                             |
| Mobile (iOS & Android)     | Using [React Native with Expo for iOS and Android](https://sieblyio.github.io/docs/bybit/environments/expo.html). The example guides you to display the current BTCUSDT price from Bybit and stream updates over WebSockets.                                                                                                                                                                         |
| Cloudflare Workers         | [Cloudflare Workers](https://sieblyio.github.io/docs/bybit/environments/cloudflare-workers.html). Return a public price from a Worker, with a separate example for authenticated orders.                                                                                                                                                                                                             |

Refer to [runtime compatibility](https://sieblyio.github.io/docs/bybit/compatibility.html) for a complete list of runtimes that we've actively tested, including setup guides.

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/sieblyio/bybit-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/sieblyio)

<!-- template_related_projects -->

## Related Projects

Check out our JavaScript/TypeScript/Node.js SDKs & Projects:

- Visit our website: [https://Siebly.io](https://siebly.io/)
- Try our REST API & WebSocket SDKs published on npmjs:
  - [Bybit JavaScript SDK: bybit-api](https://www.npmjs.com/package/bybit-api)
  - [Kraken JavaScript SDK: @siebly/kraken-api](https://www.npmjs.com/package/@siebly/kraken-api)
  - [OKX JavaScript SDK: okx-api](https://www.npmjs.com/package/okx-api)
  - [Binance JavaScript SDK: binance](https://www.npmjs.com/package/binance)
  - [Gate (gate.com) JavaScript SDK: gateio-api](https://www.npmjs.com/package/gateio-api)
  - [Bitget JavaScript SDK: bitget-api](https://www.npmjs.com/package/bitget-api)
  - [Kucoin JavaScript SDK: kucoin-api](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase JavaScript SDK: coinbase-api](https://www.npmjs.com/package/coinbase-api)
  - [HTX JavaScript SDK: @siebly/htx-api](https://www.npmjs.com/package/@siebly/htx-api)
- Try my misc utilities:
  - [OrderBooks Node.js: orderbooks](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache: accountstate](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/sieblyio/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Documentation

The [Bybit SDK documentation](https://sieblyio.github.io/docs/bybit/) covers installation, client setup, public market data, authenticated trading, and WebSocket subscriptions.

Most methods accept JS objects. These can be populated using parameters specified by Bybit's API documentation, or check the type definition in each class within the github repository (see table below for convenient links to each class). TypeScript is definitely recommended, but not required.

- [Bybit exchange API reference](https://bybit-exchange.github.io/docs/v5/intro)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)
- [TSDoc Documentation (generated using typedoc via npm module)](https://tsdocs.dev/docs/bybit-api)

## Structure

The SDK is written in TypeScript, but fully compatible with both TypeScript and pure JavaScript projects. A pure JavaScript version can be built using `npm run build`. The output of the `build` command is the version published to npm, packaged as a JavaScript module (with types available for you TypeScript users).

- [src](./src) - the complete SDK written in TypeScript.
- [lib](./lib) - the JavaScript version of the project (built from TypeScript) that is published to npm. This should not be edited directly, as it will be overwritten with each release.
- [examples](./examples) - examples & demonstrations. Contributions are welcome!
- [test](./test) - automated end-to-end tests that run before every release, making real API calls.

---

## Examples

Examples for using each client can be found in:

- the [examples](./examples) folder.
- the [awesome-crypto-examples](https://github.com/sieblyio/awesome-crypto-examples) repository.

If you're missing an example, you're welcome to request one. Priority will be given to [github sponsors](https://github.com/sponsors/tiagosiebler).

## API Clients

You should be using the V5 APIs. If you aren't, you should upgrade your project to use the V5 APIs as soon as possible. Bybit used to have several API groups (originally one per product), but the V5 API is currently the latest standard.

Refer to the [V5 interface mapping page](https://bybit-exchange.github.io/docs/v5/intro#v5-and-v3-interface-mapping-list) for more information on which V5 endpoints can be used instead of previous V3 endpoints. To learn more about the V5 API, please read the [V5 upgrade guideline](https://bybit-exchange.github.io/docs/v5/upgrade-guide).

Here are the available REST clients and the corresponding API groups described in the documentation:

|                       Class                       |                                               Description                                                |
| :-----------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
|                  [ **V5 API** ]                   |          The new unified V5 APIs (successor to previously fragmented APIs for all API groups).           |
|       [RestClientV5](src/rest-client-v5.ts)       | Unified V5 all-in-one REST client for all [V5 REST APIs](https://bybit-exchange.github.io/docs/v5/intro) |
|    [WebsocketClient](src/websocket-client.ts)     |      All WebSocket features (Public & Private consumers for all API categories & the WebSocket API)      |
| [WebsocketAPIClient](src/websocket-api-client.ts) |    Use the WebSocket API like a REST API. Call functions and await responses, powered by WebSockets.     |

## REST API Usage

Create API credentials on Bybit's website:

- [Livenet](https://bybit.com/app/user/api-management?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Testnet](https://testnet.bybit.com/app/user/api-management)

The following is a minimal example for using the REST clients included with this SDK. For more detailed examples, refer to the [examples](./examples/) folder in the repository on GitHub:

```typescript
const { RestClientV5 } = require('bybit-api');
// or
// import { RestClientV5 } from 'bybit-api';

const restClientOptions = {
  /** supports HMAC & RSA API keys - automatically detected */
  /** Your API key */
  key: 'apiKeyHere',

  /** Your API secret */
  secret: 'apiSecretHere',

  /** Set to `true` to connect to testnet. Uses the live environment by default. */
  // testnet: true,

  /**
   * Set to `true` to use Bybit's V5 demo trading:
   * https://bybit-exchange.github.io/docs/v5/demo
   *
   * Note: to use demo trading, you should have `testnet` disabled.
   *
   * You can find a detailed demoTrading example in the examples folder on GitHub.
   */
  // demoTrading: true,

  /** Override the max size of the request window (in ms) */
  // recv_window: 5000, // 5000 = 5 seconds

  /**
   * Enable keep alive for REST API requests (via axios).
   * See: https://github.com/sieblyio/bybit-api/issues/368
   */
  // keepAlive: true,

  /**
   * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over
   * sockets being kept alive. Only relevant if keepAlive is set to true.
   * Default: 1000 (defaults comes from https agent)
   */
  // keepAliveMsecs: 1000, // 1000 = 1 second

  /**
   * Optionally override API domain used:
   * apiRegion: 'default' | 'bytick' | 'TK' | 'KZ' | 'HK' | 'GE' | 'UAE' | 'EU' | 'ID' | 'JP',
   **/

  // apiRegion: 'bytick',

  /**
   * Add the x-site-id header for an eligible international account that uses
   * the global API domain, e.g. BRA_BTL for Brazil or ARG_BTL for Argentina.
   */
  // siteId: 'BRA_BTL',

  /** Default: false. Enable to parse/include per-API/endpoint rate limits in responses. */
  // parseAPIRateLimits: true,

  /**
   * Allows you to provide a custom "signMessage" function,
   * e.g. to use node crypto's much faster createHmac method
   *
   * Look at examples/fasterHmacSign.ts for a demonstration:
   */
  // customSignMessageFn: (message: string, secret: string) => Promise<string>;
};

const API_KEY = 'xxx';
const API_SECRET = 'yyy';

const client = new RestClientV5(
  {
    key: API_KEY,
    secret: API_SECRET,
    // demoTrading: true,

    // Optional: enable to try parsing rate limit values from responses
    // parseAPIRateLimits: true
  },
  // requestLibraryOptions
);

// For public-only API calls, simply don't provide a key & secret or set them to undefined
// const client = new RestClientV5();

client
  .getAccountInfo()
  .then((result) => {
    console.log('getAccountInfo result: ', result);
  })
  .catch((err) => {
    console.error('getAccountInfo error: ', err);
  });

client
  .getOrderbook({ category: 'linear', symbol: 'BTCUSDT' })
  .then((result) => {
    console.log('getOrderBook result: ', result);
  })
  .catch((err) => {
    console.error('getOrderBook error: ', err);
  });
```

---

## WebSockets

The WebsocketClient will automatically use the latest V5 WebSocket endpoints by default. To use a different endpoint, use the `market` parameter. Except for the WebSocket API - this can be accessed without any special configuration.

## WebSocket Subscriptions - Consuming events

Here's a minimal example for using the websocket client. For more complete examples, look into the ws-\* examples in the [examples](./examples/) folder in the repo on GitHub.

```javascript
const { WebsocketClient } = require('bybit-api');
// or
// import { WebsocketClient } from 'bybit-api';

const API_KEY = 'xxx';
const PRIVATE_KEY = 'yyy';

const wsConfig = {
  /**
   * API credentials are optional. They are only required if you plan on using
   * any account-specific topics or the WS API
   * supports HMAC & RSA API keys - automatically detected
   */
  key: 'yourAPIKeyHere',
  secret: 'yourAPISecretHere',

  /*
    The following parameters are optional:
  */

  /**
   * Set to `true` to connect to Bybit's testnet environment.
   * - If demo trading, `testnet` should be set to false!
   * - If testing a strategy, use demo trading instead. Testnet market
   * data is very different from real market conditions.
   */
  // testnet: true

  /**
   * Set to `true` to connect to Bybit's V5 demo trading:
   * https://bybit-exchange.github.io/docs/v5/demo
   *
   * Refer to the examples folder on GitHub for a more detailed demonstration.
   */
  // demoTrading: true,

  // recv window size for websocket authentication (higher latency connections
  // (VPN) can cause authentication to fail if the recv window is too small)
  // recvWindow: 5000,

  /** How often to check if the connection is alive (in ms) */
  // pingInterval: 10000,

  /**
   * How long to wait (in ms) for a pong (heartbeat reply) before assuming the
   * connection is dead
   */
  // pongTimeout: 1000,

  /** Delay in milliseconds before respawning the connection */
  // reconnectTimeout: 500,

  /** Select WebSocket routing using the same region values as REST */
  // apiRegion: 'TK',

  /** Add x-site-id for an eligible Brazil or Argentina international account */
  // siteId: 'BRA_BTL',

  // override which URL to use for websocket connections
  // wsUrl: 'wss://stream.bytick.com/realtime'

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's
   * much faster createHmac method
   *
   * Look at examples/fasterHmacSign.ts for a demonstration:
   */
  // customSignMessageFn: (message: string, secret: string) => Promise<string>;
};

const ws = new WebsocketClient(wsConfig);

// (v5) subscribe to multiple topics at once
ws.subscribeV5(['orderbook.50.BTCUSDT', 'orderbook.50.ETHUSDT'], 'linear');

// Or one at a time
ws.subscribeV5('kline.5.BTCUSDT', 'linear');
ws.subscribeV5('kline.5.ETHUSDT', 'linear');

// Private/public topics can be used in the same WS client instance, even for
// different API groups (linear, options, spot, etc)
ws.subscribeV5('position', 'linear');
ws.subscribeV5('publicTrade.BTC', 'option');

/**
 * The Websocket Client will automatically manage all connectivity & authentication for you.
 *
 * If a network issue occurs, it will automatically:
 * - detect it,
 * - remove the dead connection,
 * - replace it with a new one,
 * - resubscribe to everything you were subscribed to.
 *
 * When this happens, you will see the "reconnected" event.
 */

// Listen to events coming from websockets. This is the primary data source
ws.on('update', (data) => {
  console.log('data received', JSON.stringify(data, null, 2));
});

// Optional: Listen to websocket connection open event
// (automatic after subscribing to one or more topics)
ws.on('open', ({ wsKey, event }) => {
  console.log('connection open for websocket with ID: ', wsKey);
});

// Optional: Listen to responses to websocket queries
// (e.g. the response after subscribing to a topic)
ws.on('response', (response) => {
  console.log('response', response);
});

// Optional: Listen to connection close event.
// Unexpected connection closes are automatically reconnected.
ws.on('close', () => {
  console.log('connection closed');
});

// Listen to raw error events. Recommended.
ws.on('exception', (err) => {
  console.error('exception', err);
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('ws automatically reconnecting.... ', wsKey);
});

ws.on('reconnected', (data) => {
  console.log('ws has reconnected ', data?.wsKey);
});
```

## Websocket API - Sending orders via WebSockets

Bybit supports sending, amending and cancelling orders over a WebSocket connection. The [WebsocketClient](./src/WebsocketClient.ts) fully supports Bybit's WebSocket API via the `sendWSAPIRequest(...)` method. There is also a dedicated [WebsocketAPIClient](./src/websocket-api-client.ts), built over the WSClient's sendWSAPIRequest mechanism for a simpler experience.

Links for reference:

- [Bybit WebSocket API Documentation](https://bybit-exchange.github.io/docs/v5/websocket/trade/guideline)
- [WebsocketAPIClient example, use the Websocket API like a REST API](./examples/ws-api-client.ts)
- [Raw Asynchronous Websocket API Node.js/TypeScript/JavaScript example](./examples/ws-api-raw-promises.ts)

Note: as of January 2025, the demo trading environment does not support the WebSocket API.

There are two ways to use the WS API, depending on individual preference:

1. event-driven:
   - send requests via `client.sendWSAPIRequest(wsKey, operation, params)`, fire and forget
   - handle async replies via event handlers on `client.on('exception', cb)` and `client.on('response', cb)`
   - See example for more details: [examples/ws-api-raw-events.ts](./examples/ws-api-raw-events.ts)
2. promise-driven:
   - import the `WebsocketAPIClient` and use it much like a REST API.
   - make an instance & call the Websocket API with a function.
   - await responses, much like a REST API.
   - use try/catch blocks to handle promise rejections
   - See example for more details: [examples/ws-api-client.ts](./examples/ws-api-client.ts)

The below example demonstrates the promise-driven approach, which behaves similar to a REST API. The WebSocket API even accepts the same parameters as the corresponding REST API endpoints, so this approach should be compatible with existing REST implementations.

Connectivity, authentication and connecting requests & responses to promises - these are all handled automatically without additional configuration by the WebsocketClient. The WebsocketAPIClient is a wrapper built on top of this, providing dedicated methods for every available Websocket API command. Each method has fully typed requests & responses. Benefit from the capabilities of the WebSocket API without the complexity of managing asynchronous messaging over WebSockets.

```javascript
const { WS_KEY_MAP, WebsocketAPIClient } = require('bybit-api');

// or
// import { WS_KEY_MAP, WebsocketAPIClient } from 'bybit-api';

// Create an instance of the WebsocketAPIClient. This is built on
// top of the WebsocketClient and will automatically handle WebSocket
// persistence and authentication for you.
// supports HMAC & RSA API keys - automatically detected
const wsClient = new WebsocketAPIClient({
  key: 'yourApiKeyHere',
  secret: 'yourApiSecretHere',

  // Whether to use the testnet environment.
  // Create testnet API keys here: https://testnet.bybit.com/app/user/api-management
  // testnet: true,

  // Whether to use the livenet demo trading environment
  // Note: As of Jan 2025, demo trading only supports consuming events, it does
  // NOT support the WS API.
  // demoTrading: false,

  // If you want your own event handlers instead of the default ones with logs,
  // disable this setting and see ws-api-client example for more details.
  // attachEventListeners: false
});

// This example is wrapped in an async function, so "await" can be used
async function main() {
  /**
   * Optional. Can be used to prepare a connection before sending
   * commands (e.g. as part of your startup process).
   *
   * This is not necessary and will happen automatically when
   * sending a command, if you aren't connected/authenticated yet.
   */
  // await wsClient.getWSClient().connectWSAPI();

  try {
    console.log('Step 1: Create an order');
    const response = await wsClient.submitNewOrder({
      category: 'linear',
      symbol: 'BTCUSDT',
      orderType: 'Limit',
      qty: '0.001',
      side: 'Buy',
      price: '50000',
    });
    console.log('submitNewOrder response: ', response);
  } catch (e) {
    console.log('submitNewOrder error: ', e);
  }

  try {
    console.log('Step 2: Amend an order');
    const response = await wsClient.amendOrder({
      category: 'linear',
      symbol: 'BTCUSDT',
      orderId: 'b4b9e205-793c-4777-8112-0bf3c2d26b6e',
      qty: '0.001',
      price: '60000',
    });
    console.log('amendOrder response: ', response);
  } catch (e) {
    console.log('amendOrder error: ', e);
  }

  try {
    console.log('Step 3: Cancel an order');
    const response = await wsClient.cancelOrder({
      category: 'linear',
      symbol: 'BTCUSDT',
      orderId: 'b4b9e205-793c-4777-8112-0bf3c2d26b6e',
    });
    console.log('cancelOrder response: ', response);
  } catch (e) {
    console.log('cancelOrder error: ', e);
  }
}

// Start executing the example workflow
main();
```

---

### Balancing load across multiple connections

The WebsocketClient will automatically prepare one connection per API group, for all topics in that API group. Any topics that you subscribe to on that WebSocket client will automatically be added to the same connection.

To spread your subscribed topics over multiple connections, e.g. to reduce the throughput of an individual connectionk, you can make one instance of the WebsocketClient per connection group.

```typescript
const wsClientGroup1 = new WebsocketClient();
const wsClientGroup2 = new WebsocketClient();

// Attach event listeners to each WS Client
// Divide your desired topics into separate groups
```

Important: do not subscribe to the same topics on both clients or you will receive duplicate messages (once per WS client).

---

## Bybit EU and Other Regions: apiRegion and x-site-id

Bybit uses two regional API access models. Use the configuration that matches the site where your account is registered:

| Account setup                            | REST API endpoint            | WebSocket endpoint                                                        | SDK configuration       |
| ---------------------------------------- | ---------------------------- | ------------------------------------------------------------------------- | ----------------------- |
| Account with a dedicated regional domain | Matching regional API domain | Regional mainnet stream when Bybit lists one, otherwise the global stream | Set `apiRegion`         |
| Brazil international account             | `api.bybit.com`              | `stream.bybit.com`                                                        | Set `siteId: 'BRA_BTL'` |
| Argentina international account          | `api.bybit.com`              | `stream.bybit.com`                                                        | Set `siteId: 'ARG_BTL'` |

`apiRegion` selects the regional REST domain and, where Bybit lists one, the regional mainnet WebSocket domain. `siteId` keeps the default global domains and adds the `x-site-id` header to REST requests and Node.js WebSocket handshakes. This is only relevant if your account belongs to a specific region.

See [Bybit's Integration Guidance](https://bybit-exchange.github.io/docs/v5/guide#authentication) for current regional requirements.

### Dedicated Regional API Domains with apiRegion

By default, this Node.js, JavaScript & TypeScript SDK uses the Bybit Global API and WebSocket domains. For regions where Bybit has dedicated regional domains, including the alternative Bybit Global domain (bytick), pass `apiRegion` directly to the REST or WebSocket client.

The following values are currently supported in this option:

- `apiRegion: undefined`: if missing or undefined, this SDK will default to the Bybit Global domain `api.bybit.com`.
- `apiRegion: "default"`: the Bybit Global domain (same behaviour as above).
- `apiRegion: "bytick"`: the alternative Bybit Global domain `api.bytick.com`.
- `apiRegion: "TK"`: the dedicated Bybit Turkey domain `api.bybit.tr`.
- `apiRegion: "KZ"`: the dedicated Bybit Kazakhstan domain `api.bybit.kz`.
- `apiRegion: "HK"`: the dedicated Bybit Hong Kong domain `api.spark-fintech.com`. The SDK also adds `x-refer-site-id: HKG`. Testnet uses `api-testnet.spark-fintech.com`.
- `apiRegion: "GE"`: the dedicated Bybit Georgia domain `api.bybitgeorgia.ge`.
- `apiRegion: "UAE"`: the dedicated Bybit United Arab Emirates domain `api.bybit.ae`.
- `apiRegion: "EU"`: the dedicated Bybit EU/EEA domain `api.bybit.eu`.
- `apiRegion: "ID"`: the dedicated Bybit Indonesia domain `api.bybit.id`.
- `apiRegion: "JP"`: the dedicated Bybit Japan domain `api.manepa.jp`. Testnet uses `api-testnet.manepa.jp`.

For WebSocket clients, the same option selects these mainnet stream domains:

| `apiRegion` | WebSocket domain           |
| ----------- | -------------------------- |
| `TK`        | `stream.bybit.tr`          |
| `KZ`        | `stream.bybit.kz`          |
| `HK`        | `stream.spark-fintech.com` |
| `GE`        | `stream.bybitgeorgia.ge`   |
| `ID`        | `stream.bybit.id`          |
| `JP`        | `stream.manepa.jp`         |

For `default`, `bytick`, `UAE`, and `EU`, WebSocket connections continue to use the global stream because Bybit does not list a dedicated V5 trading stream for those values. This means `apiRegion: 'EU'` selects `api.bybit.eu` for REST and keeps `stream.bybit.com` for WebSocket. Testnet WebSocket connections use `stream-testnet.bybit.com`. For Hong Kong mainnet WebSocket connections, the SDK also adds `x-refer-site-id: HKG` automatically.

```typescript
const ws = new WebsocketClient({ apiRegion: 'TK' });
ws.subscribeV5('tickers.BTCUSDT', 'linear');
```

New regions will be supported when they become available in the Bybit API. If you notice any regions that have not been added yet, please open a new issue on GitHub.

### Brazil and Argentina International Accounts with x-site-id

Brazil and Argentina international accounts use the global REST API domain with a site-specific request header. Pass the matching value through the REST client's `siteId` option:

```typescript
import { RestClientV5, WebsocketClient } from 'bybit-api';

const client = new RestClientV5({
  key: process.env.BYBIT_API_KEY!,
  secret: process.env.BYBIT_API_SECRET!,
  siteId: 'BRA_BTL',
});

const ws = new WebsocketClient({
  key: process.env.BYBIT_API_KEY!,
  secret: process.env.BYBIT_API_SECRET!,
  siteId: 'BRA_BTL',
});
```

Use `siteId: 'ARG_BTL'` for an Argentina international account.

The REST client sends `x-site-id` on every request. In Node.js, `WebsocketClient` and `WebsocketAPIClient` send it during the WebSocket handshake using the same top-level `siteId` option. Both use the global Bybit endpoint. Browser WebSocket connections cannot set custom handshake headers.

See Bybit's [WebSocket connection guidance](https://bybit-exchange.github.io/docs/v5/ws/connect) for the regional requirement.

### REST and WebSocket API Usage with Bybit EU

Below is an example for using REST and WebSocket APIs with an account registered on Bybit EU:

```typescript
const { RestClientV5, WebsocketClient } = require('bybit-api');
// or
// import { RestClientV5, WebsocketClient } from 'bybit-api';

const client = new RestClientV5({
  key: API_KEY,
  secret: API_SECRET,
  // demoTrading: true,

  apiRegion: 'EU',
});

client
  .getAccountInfo()
  .then((result) => {
    console.log('getAccountInfo result: ', result);
  })
  .catch((err) => {
    console.error('getAccountInfo error: ', err);
  });

const ws = new WebsocketClient({ apiRegion: 'EU' });
ws.subscribeV5('tickers.BTCUSDT', 'linear');
```

---

## Logging

### Customise logging

Pass a custom logger (or mutate the imported DefaultLogger class) which supports the log methods `trace`, `info` and `error`, or override methods from the default logger as desired, as in the example below:

```javascript
const { WebsocketClient, DefaultLogger } = require('bybit-api');

// Enable all logging on the trace level (disabled by default)
const customLogger = {
  ...DefaultLogger,
  trace: (...params) => console.log('trace', ...params),
};

const wsClient = new WebsocketClient(
  { key: 'xxx', secret: 'yyy' },
  customLogger,
);
```

### Debug HTTP requests

In rare situations, you may want to see the raw HTTP requets being built as well as the API response. These can be enabled by setting the `BYBITTRACE` env var to `true`.

## Browser/Frontend Usage

The npm package can be imported directly into frontend projects. You do not need to build the SDK's standalone Webpack bundle to use it in a frontend project. Choose the setup for your application below.

### Vite and React

Use the [Vite guide](https://sieblyio.github.io/docs/bybit/environments/vite.html) or [React guide](https://sieblyio.github.io/docs/bybit/environments/react.html) for a complete public market-data project that imports `bybit-api` from npm.

Keep the supplied bundler configuration with the example: it provides EventEmitter through the `events` package. These browser examples use public Bybit market data. Keep private keys and API credentials in a secure server-side environment and make authenticated calls there.

Browser REST requests also depend on Bybit's CORS policy. If a request is blocked, call the SDK through your application's server route instead. A development proxy does not solve CORS for a deployed application.

### Next.js and server-side requests

The [Next.js guide](https://sieblyio.github.io/docs/bybit/environments/next.html) runs the SDK in a Node.js Route Handler and returns the result to the frontend. Use this pattern when requests need credentials or cannot be made directly from the browser.

### React Native and Expo

Follow the [Expo guide](https://sieblyio.github.io/docs/bybit/environments/expo.html) for its Metro configuration and required dependencies, including `events`, `buffer`, `https-browserify`, `stream-http` and `url`. The Metro helper maps Node-style HTTP, HTTPS and URL imports to their polyfills. Browser bundler configuration is not interchangeable with Metro configuration. The example uses public Bybit market data; keep authenticated operations on your server.

### Standalone Webpack bundle

If you need a standalone UMD bundle rather than npm imports in your application, the SDK repository includes a [Webpack configuration](./webpack/webpack.config.js). From a checkout of this repository:

```sh
npm install
npm run build
npm run pack
```

The configuration writes `dist/bybitapi.js` with the `bybitapi` global name. This is a separate packaging option, not a required step for the framework guides above. Browser-specific configuration and API access restrictions still apply.

The previous browser setup required `stream-browserify` for Node's `stream` module. If your bundler needs that polyfill, install it with `npm install stream-browserify` and configure your bundler to resolve `stream` to it. The repository's standalone Webpack configuration disables the Node-only `http` and `https` modules; its REST client cannot use Node's `https.Agent` in a browser.

## Use with LLMs & AI

This SDK includes a bundled `llms.txt` file in the root of the repository. If you're developing with LLMs, use the included `llms.txt` with your LLM - it will significantly improve the LLMs understanding of how to correctly use this SDK.

This file contains AI optimised structure of all the functions in this package, and their parameters for easier use with any learning models or artificial intelligence.

---

## Used By

[![Repository Users Preview Image](https://dependents.info/sieblyio/bybit-api/image)](https://github.com/sieblyio/bybit-api/network/dependents)

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->
- Sign up with my referral links:
  - OKX (receive a 20% fee discount!): https://www.okx.com/join/42013004
  - Binance (receive a 20% fee discount!): https://accounts.binance.com/register?ref=OKFFGIJJ
  - HyperLiquid (receive a 4% fee discount!): https://app.hyperliquid.xyz/join/SIEBLY
  - Gate: https://www.gate.io/signup/NODESDKS?ref_type=103

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
  - gate: https://www.gate.io/signup/AVNNU1WK?ref_type=103

-->
<!-- template_contributions_end -->

### Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sieblyio/bybit-api,sieblyio/okx-api,sieblyio/binance,sieblyio/bitget-api,sieblyio/bitmart-api,sieblyio/gateio-api,sieblyio/kucoin-api,sieblyio/coinbase-api,sieblyio/orderbooks,sieblyio/accountstate,sieblyio/awesome-crypto-examples&type=Date)](https://star-history.com/#sieblyio/bybit-api&sieblyio/okx-api&sieblyio/binance&sieblyio/bitget-api&sieblyio/bitmart-api&sieblyio/gateio-api&sieblyio/kucoin-api&sieblyio/coinbase-api&sieblyio/orderbooks&sieblyio/accountstate&sieblyio/awesome-crypto-examples&Date)

<!-- template_star_history_end -->
