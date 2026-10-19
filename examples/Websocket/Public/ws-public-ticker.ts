import { WebsocketClient } from '../../../src/index';

const wsClient = new WebsocketClient();
const topic = 'tickers.BTCUSDT';
let stopped = false;

const timeout = setTimeout(() => {
  console.error('No BTCUSDT price received within 20 seconds.');
  stop(1);
}, 20_000);

function stop(exitCode = 0) {
  if (stopped) return;
  stopped = true;
  clearTimeout(timeout);
  wsClient.closeAll();
  process.exitCode = exitCode;
}

wsClient.on('exception', (error) => {
  console.error('WebSocket error:', error);
  stop(1);
});

wsClient.on('response', (response) => {
  if (response.op === 'subscribe' && response.success === false) {
    console.error('Subscription rejected:', response);
    stop(1);
  }
});

wsClient.on('update', (message) => {
  if (stopped || message.topic !== topic || !message.data?.lastPrice) return;

  console.log({
    symbol: message.data.symbol,
    lastPrice: message.data.lastPrice,
    timestamp: message.ts,
  });
  stop();
});

Promise.all(wsClient.subscribeV5(topic, 'linear')).catch((error) => {
  console.error('Could not subscribe:', error);
  stop(1);
});
