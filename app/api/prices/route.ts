import { NextResponse } from "next/server";

const STOCKS = [
  "MSFT",
  "AMZN",
  "NVDA",
  "META",
  "AAPL",
  "GOOGL",
  "VZ",
  "COIN",
  "SPCX",
  "TSLA",
  "NFLX",
  "INTC",
  "PLTR",
  "MA",
];

const CHAIN_TOKENS: Record<string, string> = {
  DERP: "0x6543b7746ca744c4bb2198191e71f40ff04c41b9",
  TENDIES: "0x45242320dbb855eea8fd36804c6487e10e97fcf9",
  CASHCAT: "0x020bfc650a365f8bb26819deaabf3e21291018b4",
  STONKBROKER: "0xe934e36a439c94017b64a3fece66af12099abf50",
  CLOCKIN: "0x22f53383ed6496c98ada46f5285fe3b4d24da707",
};

async function getRobinhoodStockPrice(symbol: string) {
  try {
    const response = await fetch(
      `https://api.robinhood.com/rhj/prices/${symbol}`,
      {
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    const data = await response.json();

    const bid = Number(data?.bid);
    const ask = Number(data?.ask);

    if (Number.isFinite(bid) && Number.isFinite(ask)) {
      return (bid + ask) / 2;
    }

    return null;
  } catch {
    return null;
  }
}

async function getYahooPrice(symbol: string) {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    const data = await response.json();

    const price =
      data?.chart?.result?.[0]?.meta?.regularMarketPrice;

    return Number.isFinite(price) ? price : null;
  } catch {
    return null;
  }
}

async function getEthPrice() {
  try {
    const response = await fetch(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    const price = Number(data?.data?.amount);

    return Number.isFinite(price) ? price : null;
  } catch {
    return null;
  }
}

async function getChainTokenPrice(address: string) {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${address}`,
      {
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    const data = await response.json();

    const pairs = Array.isArray(data?.pairs)
      ? data.pairs
          .filter(
            (pair: any) =>
              pair?.chainId === "robinhood" &&
              pair?.priceUsd &&
              pair?.liquidity?.usd
          )
          .sort(
            (a: any, b: any) =>
              Number(b.liquidity.usd) -
              Number(a.liquidity.usd)
          )
      : [];

    if (!pairs.length) return null;

    const price = Number(pairs[0].priceUsd);

    return Number.isFinite(price) ? price : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const stockPrices = await Promise.all(
    STOCKS.map(async (symbol) => {
      let price = await getRobinhoodStockPrice(symbol);

      if (price === null) {
        price = await getYahooPrice(symbol);
      }

      return {
        symbol,
        price,
      };
    })
  );

  const ethPrice = await getEthPrice();

  const chainPrices = await Promise.all(
    Object.entries(CHAIN_TOKENS).map(
      async ([symbol, address]) => ({
        symbol,
        price: await getChainTokenPrice(address),
      })
    )
  );

  return NextResponse.json(
    {
      success: true,
      prices: [
        ...stockPrices,
        {
          symbol: "ETH",
          price: ethPrice,
        },
        ...chainPrices,
      ],
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}