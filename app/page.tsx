"use client";

import { useEffect, useState } from "react";

type Farmer = {
  id: number;
  name: string;
  value: string;
  image: string;
};

type Asset = {
  code: string;
  name: string;
  image: string;
};



const featuredFarmers: Farmer[] = [
  { id: 1842, name: "Rancher", value: "$30.92", image: "/farmers/farmer-01.png" },
  { id: 1858, name: "Grain Merchant", value: "$29.42", image: "/farmers/farmer-02.png" },
  { id: 1854, name: "Farmhand", value: "$29.42", image: "/farmers/farmer-03.png" },
  { id: 1853, name: "Crop Rotator", value: "$29.42", image: "/farmers/farmer-04.png" },
  { id: 1861, name: "Cattle Trader", value: "$28.64", image: "/farmers/farmer-05.png" },
  { id: 1860, name: "Horse Groomer", value: "$28.32", image: "/farmers/farmer-06.png" },
  { id: 1859, name: "Defi Farmer ", value: "$28.32", image: "/farmers/farmer-07.png" },
  { id: 1865, name: "Shepherd", value: "$27.56", image: "/farmers/farmer-08.png" },
];

const farmers: Farmer[] = [
  ...featuredFarmers,
  { id: 1867, name: "DFarmer #1867", value: "$27.56", image: "" },
  { id: 1866, name: "DFarmer #1866", value: "$27.56", image: "" },
  { id: 1864, name: "DFarmer #1864", value: "$27.56", image: "" },
];

const assetUniverse: Asset[] = [
  { code: "MSFT", name: "SUPPORTED ASSET", image: "/assets/asset-01.svg" },
  { code: "AMZN", name: "SUPPORTED ASSET", image: "/assets/asset-02.svg" },
  { code: "NVDA", name: "SUPPORTED ASSET", image: "/assets/asset-03.svg" },
  { code: "META", name: "SUPPORTED ASSET", image: "/assets/asset-04.svg" },
  { code: "AAPL", name: "SUPPORTED ASSET", image: "/assets/asset-06.svg" },
  { code: "GOOGL", name: "SUPPORTED ASSET", image: "/assets/asset-07.svg" },
  { code: "ETH", name: "SUPPORTED ASSET", image: "/assets/asset-08.svg" },
  { code: "VZ", name: "SUPPORTED ASSET", image: "/assets/asset-10.svg" },
  { code: "COIN", name: "SUPPORTED ASSET", image: "/assets/asset-11.svg" },
  { code: "SPCX", name: "SUPPORTED ASSET", image: "/assets/asset-12.svg" },
  { code: "TSLA", name: "SUPPORTED ASSET", image: "/assets/asset-13.svg" },
  { code: "DERP", name: "SUPPORTED ASSET", image: "/assets/asset-14.png" },
  { code: "NFLX", name: "SUPPORTED ASSET", image: "/assets/asset-15.svg" },
  { code: "INTC", name: "SUPPORTED ASSET", image: "/assets/asset-16.svg" },
  { code: "PLTR", name: "SUPPORTED ASSET", image: "/assets/asset-17.svg" },
  { code: "MA", name: "SUPPORTED ASSET", image: "/assets/asset-18.svg" },
  { code: "CASHCAT", name: "SUPPORTED ASSET", image: "/assets/asset-20.png" },
  { code: "STONKBROKER", name: "SUPPORTED ASSET", image: "/assets/asset-19.png" },
];

const traits = ["●", "◉", "●", "a", "✕", "◈", "K", "K", "◉"];


const strategies = [
  { id: 1, name: "Accumulator", description: "Continuously deploys available capital across eligible assets, keeping incoming funds working instead of waiting for a scheduled allocation window.", profile: "CORE", behavior: "ALLOCATE", risk: "LOW" },
  { id: 2, name: "Harvester", description: "Monitors defined gain conditions and realizes eligible gains when thresholds are reached, then routes the resulting capital back through the active allocation logic.", profile: "CORE", behavior: "HARVEST", risk: "LOW" },
  { id: 3, name: "Compounder", description: "Reinvests realized gains into the Farmer’s eligible assets, allowing successful positions to increase the capital base without requiring a new deposit.", profile: "CORE", behavior: "REINVEST", risk: "LOW" },
  { id: 4, name: "Dollar Cost Farmer", description: "Deploys capital at defined intervals, spreading purchases over time so the Farmer is less dependent on a single entry point.", profile: "CORE", behavior: "DCA", risk: "LOW" },
  { id: 5, name: "Reallocator", description: "Compares current asset weights with target weights and shifts capital between eligible assets when the portfolio drifts outside its intended balance.", profile: "CORE", behavior: "REBALANCE", risk: "MED" },
  { id: 6, name: "High Roller", description: "Concentrates a larger share of capital into selected eligible assets instead of maintaining broad diversification, increasing both exposure and volatility.", profile: "ADV", behavior: "CONCENTRATE", risk: "HIGH" },
  { id: 7, name: "Equalizer", description: "Targets an approximately equal weighting across eligible assets and periodically corrects deviations so one asset does not dominate the portfolio.", profile: "CORE", behavior: "EQUALIZE", risk: "LOW" },
  { id: 8, name: "Momentum Farmer", description: "Tilts new allocations toward eligible assets showing stronger recent performance, increasing exposure to current momentum while accepting more rotation risk.", profile: "ADV", behavior: "MOMENTUM", risk: "MED" },
  { id: 9, name: "Dip Farmer", description: "Directs more capital toward eligible assets experiencing drawdowns, attempting to accumulate at lower relative prices while accepting timing risk.", profile: "ADV", behavior: "BUY DIP", risk: "MED" },
  { id: 10, name: "Profit Seeder", description: "Takes realized profits and redeploys them into eligible assets, turning harvested gains into fresh portfolio capital.", profile: "CORE", behavior: "REDEPLOY", risk: "LOW" },
  { id: 11, name: "Yield Recycler", description: "Cycles harvested gains back into the portfolio so realized yield can continue participating in the Farmer’s asset allocation process.", profile: "CORE", behavior: "RECYCLE", risk: "LOW" },
  { id: 12, name: "Drip Farmer", description: "Breaks available capital into smaller recurring allocations, reducing the impact of any single purchase on the overall portfolio.", profile: "CORE", behavior: "DRIP", risk: "LOW" },
  { id: 13, name: "Balancer", description: "Maintains predefined target weights and automatically redirects capital when asset exposure moves away from those targets.", profile: "CORE", behavior: "TARGET", risk: "LOW" },
  { id: 14, name: "Rotator", description: "Periodically changes allocation emphasis among eligible assets according to rotation rules rather than holding a static mix.", profile: "ADV", behavior: "ROTATE", risk: "MED" },
  { id: 15, name: "Trend Farmer", description: "Follows established directional trends and increases exposure where sustained movement is detected, accepting additional timing risk.", profile: "ADV", behavior: "TREND", risk: "MED" },
  { id: 16, name: "Contrarian", description: "Tilts toward assets showing relative weakness, intentionally taking positions against prevailing strength in search of mean reversion.", profile: "ADV", behavior: "CONTRARIAN", risk: "HIGH" },
  { id: 17, name: "Floor Farmer", description: "Maintains a minimum allocation threshold for eligible assets so the portfolio does not fall below predefined exposure levels.", profile: "CORE", behavior: "MINIMUM", risk: "LOW" },
  { id: 18, name: "Cyclic Farmer", description: "Rotates allocation according to a recurring cycle, systematically changing emphasis without requiring discretionary intervention.", profile: "CORE", behavior: "CYCLE", risk: "MED" },
  { id: 19, name: "Accumulator+", description: "Accelerates the normal accumulation process by directing capital more aggressively into eligible assets when activation rules are met.", profile: "ADV", behavior: "ACCELERATE", risk: "MED" },
  { id: 20, name: "Harvest & Hold", description: "Harvests eligible gains while seeking to retain the original capital base, separating realized upside from principal allocation.", profile: "CORE", behavior: "HARVEST", risk: "LOW" },
  { id: 21, name: "Profit Splitter", description: "Divides realized gains according to predefined rules, distributing them across eligible destinations instead of one allocation.", profile: "CORE", behavior: "SPLIT", risk: "LOW" },
  { id: 22, name: "Threshold Farmer", description: "Waits for defined portfolio or market thresholds and activates its allocation logic when those conditions are reached.", profile: "CORE", behavior: "THRESHOLD", risk: "MED" },
  { id: 23, name: "Mean Reverter", description: "Favors eligible assets trading away from their recent average, expecting part of that deviation to normalize over time.", profile: "ADV", behavior: "MEAN REVERT", risk: "MED" },
  { id: 24, name: "Strength Farmer", description: "Increases allocation toward the strongest eligible assets, allowing portfolio weight to follow relative leadership.", profile: "ADV", behavior: "STRENGTH", risk: "MED" },
  { id: 25, name: "Weakness Buyer", description: "Scales into eligible assets as they weaken, building exposure in stages rather than committing the full allocation at once.", profile: "ADV", behavior: "SCALE IN", risk: "HIGH" },
  { id: 26, name: "Reserve Builder", description: "Maintains a designated portion of capital as a reserve, keeping liquidity available for future strategy-triggered deployments.", profile: "CORE", behavior: "RESERVE", risk: "LOW" },
  { id: 27, name: "Reserve Deployer", description: "Releases reserved capital when predefined triggers occur, converting idle liquidity into active portfolio exposure.", profile: "ADV", behavior: "DEPLOY", risk: "MED" },
  { id: 28, name: "Harvest Ladder", description: "Uses multiple harvesting thresholds to realize gains progressively instead of relying on a single all-or-nothing trigger.", profile: "ADV", behavior: "LADDER", risk: "MED" },
  { id: 29, name: "Buy Ladder", description: "Splits purchases across predefined price or allocation levels, scaling into positions as additional entry conditions are reached.", profile: "ADV", behavior: "LADDER", risk: "MED" },
  { id: 30, name: "Profit Lock", description: "Realizes gains at preset levels to secure portions of appreciation before continuing with the remaining exposure.", profile: "CORE", behavior: "LOCK", risk: "LOW" },
  { id: 31, name: "Capital Preserver", description: "Prioritizes protecting the existing capital base by favoring controlled allocations and limiting unnecessarily aggressive exposure.", profile: "CORE", behavior: "PRESERVE", risk: "LOW" },
  { id: 32, name: "Growth Farmer", description: "Biases capital toward higher-growth opportunities within the eligible asset set, accepting greater volatility for higher upside potential.", profile: "ADV", behavior: "GROWTH", risk: "HIGH" },
  { id: 33, name: "Value Farmer", description: "Favors eligible assets that appear relatively inexpensive under the strategy’s valuation signals, accepting that value may take time to materialize.", profile: "ADV", behavior: "VALUE", risk: "MED" },
  { id: 34, name: "Volatility Farmer", description: "Adjusts portfolio behavior as volatility changes, becoming more responsive when market movement expands or contracts.", profile: "ADV", behavior: "VOLATILITY", risk: "HIGH" },
  { id: 35, name: "Steady Hand", description: "Keeps allocations consistent and avoids frequent changes, prioritizing a stable operating process over aggressive repositioning.", profile: "CORE", behavior: "STEADY", risk: "LOW" },
  { id: 36, name: "Rotation Farmer", description: "Shifts capital toward the strongest eligible assets as relative leadership changes, allowing the portfolio to rotate with conditions.", profile: "ADV", behavior: "ROTATION", risk: "MED" },
  { id: 37, name: "Momentum Ladder", description: "Scales into sustained momentum in stages, increasing exposure as strength persists rather than entering the full position immediately.", profile: "ADV", behavior: "SCALE", risk: "HIGH" },
  { id: 38, name: "Dip Ladder", description: "Scales purchases through successive drawdown levels, adding exposure progressively as eligible assets decline.", profile: "ADV", behavior: "SCALE", risk: "HIGH" },
  { id: 39, name: "Harvest Recycler", description: "Harvests eligible gains and systematically feeds them back into the portfolio, combining realization and redeployment into one operating loop.", profile: "CORE", behavior: "RECYCLE", risk: "MED" },
  { id: 40, name: "Equalizer+", description: "Aggressively restore target weights", profile: "ADV", behavior: "REBALANCE", risk: "MED" },
  { id: 41, name: "Concentrator", description: "Increase exposure to leaders", profile: "ADV", behavior: "CONCENTRATE", risk: "HIGH" },
  { id: 42, name: "Diversifier", description: "Spread allocation across assets", profile: "CORE", behavior: "DIVERSIFY", risk: "LOW" },
  { id: 43, name: "Harvest Timer", description: "Harvest on scheduled intervals", profile: "CORE", behavior: "TIMED", risk: "LOW" },
  { id: 44, name: "Allocation Timer", description: "Allocate on scheduled intervals", profile: "CORE", behavior: "TIMED", risk: "LOW" },
  { id: 45, name: "Trend Rebalancer", description: "Rebalance toward active trends", profile: "ADV", behavior: "TREND", risk: "MED" },
  { id: 46, name: "Drawdown Guard", description: "Reduce exposure in deep drawdowns", profile: "ADV", behavior: "GUARD", risk: "LOW" },
  { id: 47, name: "Profit Accelerator", description: "Increase compounding after gains", profile: "ADV", behavior: "ACCELERATE", risk: "HIGH" },
  { id: 48, name: "Base Builder", description: "Build positions from a stable base", profile: "CORE", behavior: "BUILD", risk: "LOW" },
  { id: 49, name: "Yield Farmer", description: "Prioritize recurring portfolio yield", profile: "ADV", behavior: "YIELD", risk: "MED" },
  { id: 50, name: "Degen Farmer", description: "Aggressive allocation with high variance", profile: "ADV", behavior: "AGGRESSIVE", risk: "HIGH" },
];

export default function Home() {
  const [page, setPage] = useState(1);
  const [riskFilter, setRiskFilter] = useState<"ALL" | "LOW" | "MED" | "HIGH">("ALL");
  const [livePrices, setLivePrices] = useState<Record<string, string>>({});

  useEffect(() => {
    let active = true;

    const loadPrices = async () => {
      try {
        const response = await fetch("/api/prices", { cache: "no-store" });
        if (!response.ok) return;

        const data: {
          success?: boolean;
          prices?: { symbol: string; price: string | null }[];
        } = await response.json();

        if (!active || !data.success || !Array.isArray(data.prices)) return;

        const nextPrices: Record<string, string> = {};

        for (const item of data.prices) {
          if (item.price !== null) {
            nextPrices[item.symbol] = item.price;
          }
        }

        setLivePrices(nextPrices);
      } catch {
        // Keep the last successful prices on screen if a refresh fails.
      }
    };

    loadPrices();
    const interval = window.setInterval(loadPrices, 15000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const getAssetPrice = (code: string) => livePrices[code] ?? "—";

  return (
    <main className="app">
      <div className="backgroundGrid" />

      <header className="topbar">
        <a href="/" className="brand">
          <div className="brandMark">
            <span />
            <span />
            <span />
          </div>
          <div>
            <div className="brandName">dFarmers</div>
            <div className="brandSub">FARMER NETWORK</div>
          </div>
        </a>

        <nav className="mainNav">
          <a href="/almanac">ALMANAC</a>
          <a href="/wheatpaper">WHEATPAPER</a>
        </nav>

        <div className="topActions">
          <span className="network">
            <i />
            BASE
          </span>
          <button className="walletButton">CONNECT WALLET</button>
        </div>
      </header>

      <section className="assetBanner" aria-label="Asset Universe">
        <div className="assetBannerInner">
          <div className="assetBannerLabel">
          </div>

          <div className="assetMarquee">
            <div className="assetMarqueeTrack">
              {[...assetUniverse, ...assetUniverse].map((asset, index) => (
                <div
                  className="assetUniverseItem"
                  key={`${asset.code}-${index}`}
                >
                  <div className="assetUniverseImage">
                    {asset.image ? (
                      <img src={asset.image} alt={asset.name} />
                    ) : (
                      <div className="assetUniversePlaceholder">
                        <span>{String((index % 13) + 1).padStart(2, "0")}</span>
                      </div>
                    )}
                  </div>
                  <span className="assetUniverseName">{asset.code}</span>
                  <span className="assetUniversePrice">{getAssetPrice(asset.code)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="shellTop">
          <div className="titleBlock">
            <span className="eyebrow">ENGAGE DERP. GENERATE YOUR FARMER. YOUR FARMER AUTONOMOUSLY EXECUTES.</span>
            <div className="titleLine">
            </div>
          </div>


        </div>

        <section className="infoBar">
        <div>
          <span>TOTAL FARMERS</span>
          <strong>3,333</strong>
        </div>
        <div>
          <span>MINT PRICE</span>
          <strong>.02 ETH</strong>
        </div>
        <div>
          <span>ASSET UNIVERSE</span>
          <strong>4 ASSETS</strong>
        </div>
        <div>
          <span>ROBINHOOD CHAIN</span>
          <strong className="green">ACTIVE</strong>
        </div>
      </section>

        <div className="featuredPanel">
          <div className="featuredHeader">
            <div>
              <span>FARMER PERSONALITIES DEFINE THEIR STATIC ASSET UNIVERSE. MINT ETH IS DISTRIBUTED ACCORDING TO THE dFARMER STRATEGY.</span>
            </div>

          </div>

          <div className="featuredGrid">
            {featuredFarmers.map((farmer, index) => (
              <FeaturedFarmer
                key={farmer.id}
                farmer={farmer}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="futurePanel" aria-hidden="true" />
      </section>

<section className="strategyDeskPanel" aria-label="Strategy Desk">
  <div className="strategyDeskTop">
  <div className="strategyDeskHeading">
    <span className="strategyDeskKicker">AUTONOMOUS PORTFOLIO EXECUTION</span>
    <h2>STRATEGY DESK</h2>
    <p>
Your dFarmer starts with an autonomous strategy at mint, defining how it interacts with its assets. Analyze the Strategy Desk, build your stack, and optimize your Farmer’s performance. Add, replace, or rotate up to two additional compatible strategies at any time, with a maximum of three active strategies.   
    </p>
  </div>
</div>

<div className="strategyDeskToolbar">
  <div className="strategyDeskFilters">
    <button
      type="button"
      className={riskFilter === "ALL" ? "tab active" : "tab"}
      onClick={() => {
        setRiskFilter("ALL");
        setPage(1);
      }}
      aria-pressed={riskFilter === "ALL"}
    >
      ALL <small>50</small>
    </button>

    {[
      { key: "LOW" as const, label: "LOW RISK" },
      { key: "MED" as const, label: "MED RISK" },
      { key: "HIGH" as const, label: "HIGH RISK" },
    ].map((risk) => (
      <button
        key={risk.key}
        type="button"
        className={riskFilter === risk.key ? "tab active riskTab" : "tab riskTab"}
        onClick={() => {
          setRiskFilter(risk.key);
          setPage(1);
        }}
        aria-pressed={riskFilter === risk.key}
      >
        {risk.label}
        <small>
          {strategies.filter((strategy) => strategy.risk === risk.key).length}
        </small>
      </button>
    ))}
  </div>

  <div className="strategyDeskPage">
    {riskFilter === "ALL"
      ? "50 STRATEGIES"
      : `${strategies.filter((strategy) => strategy.risk === riskFilter).length} STRATEGIES`}
    &nbsp; / &nbsp; PAGE {page} / {Math.max(
      1,
      Math.ceil(
        (riskFilter === "ALL"
          ? strategies.length
          : strategies.filter((strategy) => strategy.risk === riskFilter).length) / 8
      )
    )}
  </div>
</div>

<div className="strategyRiskExplanation">
  <span className="strategyRiskEyebrow">
    {riskFilter === "ALL" ? "STRATEGY UNIVERSE" : `RISK PROFILE / ${riskFilter}`}
  </span>
  <p>
    {riskFilter === "ALL"
      ? "Browse the complete strategy universe. "
      : riskFilter === "LOW"
        ? "Low risk emphasizes diversification, controlled allocation, and reduced concentration. These strategies generally prioritize consistency over aggressive positioning."
        : riskFilter === "MED"
          ? "Medium risk increases responsiveness to portfolio conditions. These strategies may rotate, tilt, or time allocations more actively while maintaining defined rules."
          : "High risk permits more concentrated or directional behavior. The tradeoff is greater exposure to volatility, timing error, and potential drawdowns."}
  </p>
</div>

<div className="strategyDeskRows">
    <div className="strategyDeskColumnLabels" aria-hidden="true">
      <span>STRATEGY</span>
      <span>BEHAVIOR</span>
      <span>EXECUTION</span>
    </div>

    {(riskFilter === "ALL"
      ? strategies
      : strategies.filter((strategy) => strategy.risk === riskFilter))
      .slice((page - 1) * 8, page * 8)
      .map((strategy, index) => (
        <StrategyRow
          key={strategy.id}
          strategy={strategy}
          rank={(page - 1) * 8 + index + 1}
        />
      ))}
  </div>

  <div className="strategyDeskFooter">
    <div className="strategyDeskRange">
      <span>{riskFilter === "ALL" ? "ALL STRATEGIES" : `${riskFilter} RISK`}</span>
      <strong>
        {String((page - 1) * 8 + 1).padStart(2, "0")}—
        {String(
          Math.min(
            page * 8,
            (riskFilter === "ALL" ? strategies : strategies.filter((strategy) => strategy.risk === riskFilter)).length
          )
        ).padStart(2, "0")}
      </strong>
      <span>OF {(riskFilter === "ALL" ? strategies : strategies.filter((strategy) => strategy.risk === riskFilter)).length}</span>
    </div>

    <div className="pagination">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        aria-label="Previous strategy page"
        disabled={page === 1}
      >
        ‹
      </button>
      <button
        onClick={() =>
          setPage(
            Math.min(
              Math.max(
                1,
                Math.ceil(
                  (riskFilter === "ALL" ? strategies : strategies.filter((strategy) => strategy.risk === riskFilter)).length / 8
                )
              ),
              page + 1
            )
          )
        }
        aria-label="Next strategy page"
        disabled={
          page ===
          Math.max(
            1,
            Math.ceil(
              (riskFilter === "ALL" ? strategies : strategies.filter((strategy) => strategy.risk === riskFilter)).length / 8
            )
          )
        }
      >
        ›
      </button>
    </div>
  </div>
</section>



      <footer>
        <span>dFarmers</span>
        <span><i className="footerSprout">✦</i> ON-CHAIN FARMER NETWORK</span>
        <span>2026 / SEASON 01</span>
      </footer>


    </main>
  );
}

const featuredAssets = [
  [
    { symbol: "MSFT", logo: "/assets/asset-01.svg" },
    { symbol: "AMZN", logo: "/assets/asset-02.svg" },
    { symbol: "NVDA", logo: "/assets/asset-03.svg" },
    { symbol: "META", logo: "/assets/asset-04.svg" },
  ],
  [
    { symbol: "AAPL", logo: "/assets/asset-06.svg" },
    { symbol: "GOOGL", logo: "/assets/asset-07.svg" },
    { symbol: "ETH", logo: "/assets/asset-08.svg" },
    { symbol: "VZ", logo: "/assets/asset-10.svg" },
  ],
  [
    { symbol: "COIN", logo: "/assets/asset-11.svg" },
    { symbol: "SPCX", logo: "/assets/asset-12.svg" },
    { symbol: "TSLA", logo: "/assets/asset-13.svg" },
    { symbol: "DERP", logo: "/assets/asset-14.png" },
  ],
  [
    { symbol: "NFLX", logo: "/assets/asset-15.svg" },
    { symbol: "INTC", logo: "/assets/asset-16.svg" },
    { symbol: "PLTR", logo: "/assets/asset-17.svg" },
    { symbol: "MA", logo: "/assets/asset-18.svg" },
  ],
  [
    { symbol: "MSFT", logo: "/assets/asset-01.svg" },
    { symbol: "AAPL", logo: "/assets/asset-06.svg" },
    { symbol: "TSLA", logo: "/assets/asset-13.svg" },
    { symbol: "PLTR", logo: "/assets/asset-17.svg" },
  ],
  [
    { symbol: "AMZN", logo: "/assets/asset-02.svg" },
    { symbol: "NVDA", logo: "/assets/asset-03.svg" },
    { symbol: "COIN", logo: "/assets/asset-11.svg" },
    { symbol: "NFLX", logo: "/assets/asset-15.svg" },
  ],
  [
    { symbol: "META", logo: "/assets/asset-04.svg" },
    { symbol: "GOOGL", logo: "/assets/asset-07.svg" },
    { symbol: "ETH", logo: "/assets/asset-08.svg" },
    { symbol: "SPCX", logo: "/assets/asset-12.svg" },
  ],
  [
    { symbol: "VZ", logo: "/assets/asset-10.svg" },
    { symbol: "INTC", logo: "/assets/asset-16.svg" },
    { symbol: "MA", logo: "/assets/asset-18.svg" },
    { symbol: "DERP", logo: "/assets/asset-14.png" },
  ],
];

function FeaturedFarmer({
  farmer,
  index,
}: {
  farmer: Farmer;
  index: number;
}) {
  const assets = featuredAssets[index] || [];

  return (
    <div className="featuredFarmer">
      <div className={`featuredImage ${farmer.image ? "hasImage" : ""}`}>
        {farmer.image ? (
          <img src={farmer.image} alt={farmer.name} />
        ) : (
          <div className="featuredPlaceholder">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
        )}
      </div>

      <div className="featuredName">
        {farmer.name.replace("DFarmer", "DFarmer")}
      </div>

      <div className="featuredAssets">
        {assets.map((asset) => (
          <div className="featuredAsset" key={asset.symbol}>
            <img
              src={asset.logo}
              alt={asset.symbol}
              title={asset.symbol}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyRow({
  strategy,
  rank,
}: {
  strategy: (typeof strategies)[number];
  rank: number;
}) {
  return (
    <div className="strategyDeskRow">
      <div className="strategyRank">
        {String(rank).padStart(2, "0")}
      </div>

      <div className="strategyAvatar">
        <img
          src={`/farmers/farmer-${String(((rank - 1) % 8) + 1).padStart(2, "0")}.png`}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="strategyIdentity">
        <div className="strategyName">{strategy.name}</div>
        <div className="strategyTags">
          <span>{strategy.profile}</span>
          <span>{strategy.risk} RISK</span>
        </div>
      </div>

      <div className="strategyDescription">
        <span>{strategy.description}</span>
      </div>

      <div className="strategyBehavior">
        <span>MODE</span>
        <strong>{strategy.behavior}</strong>
      </div>

      <button
        className="strategyAddButton"
        type="button"
        aria-label={`Select ${strategy.name} strategy`}
      >
        +
      </button>
    </div>
  );
}
function FarmerRow({
  farmer,
  index,
}: {
  farmer: Farmer;
  index: number;
}) {
  return (
    <div className="farmerRow">
      <div className={`imageSlot ${farmer.image ? "hasImage" : ""}`}>
        {farmer.image ? (
          <img src={farmer.image} alt={farmer.name} />
        ) : (
          <div className="imagePlaceholder" aria-label={`Image slot ${index + 1}`} />
        )}
      </div>

      <div className="farmerInfo">
        <div className="farmerName">{farmer.name}</div>
        <div className="farmMeta">
          <span><i /> FARM</span>
          <span>FIELD {String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="farmerSub">
          {traits.map((trait, traitIndex) => (
            <span className="trait" key={`${farmer.id}-${traitIndex}`}>
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="value">{farmer.value}</div>
    </div>
  );
}