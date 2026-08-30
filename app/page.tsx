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
  { id: 1842, name: "Livestock Manager", value: "$30.92", image: "/farmers/farmer-01.png" },
  { id: 1858, name: "Grain Merchant", value: "$29.42", image: "/farmers/farmer-02.png" },
  { id: 1854, name: "Farm Hand", value: "$29.42", image: "/farmers/farmer-03.png" },
  { id: 1853, name: "Crop Rotator", value: "$29.42", image: "/farmers/farmer-04.png" },
  { id: 1861, name: "Harvest Foreman", value: "$28.64", image: "/farmers/farmer-05.png" },
  { id: 1860, name: "Horse Groomer", value: "$28.32", image: "/farmers/farmer-06.png" },
  { id: 1859, name: "Defi Farmer ", value: "$28.32", image: "/farmers/farmer-07.png" },
  { id: 1865, name: "Cattle Trader", value: "$27.56", image: "/farmers/farmer-08.png" },
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

const strategyImage = "/farmers/farmer-01.png";

const strategies = [
  { id: 1, name: "Accumulator", description: "Continuous allocation", profile: "CORE", behavior: "ALLOCATE", risk: "LOW" },
  { id: 2, name: "Harvester", description: "Threshold harvesting", profile: "CORE", behavior: "HARVEST", risk: "LOW" },
  { id: 3, name: "Compounder", description: "Reinvest realized gains", profile: "CORE", behavior: "REINVEST", risk: "LOW" },
  { id: 4, name: "Dollar Cost Farmer", description: "Periodic allocation", profile: "CORE", behavior: "DCA", risk: "LOW" },
  { id: 5, name: "Reallocator", description: "Rebalance between assets", profile: "CORE", behavior: "REBALANCE", risk: "MED" },
  { id: 6, name: "High Roller", description: "Concentrated allocation", profile: "ADV", behavior: "CONCENTRATE", risk: "HIGH" },
  { id: 7, name: "Equalizer", description: "Equal-weight assets", profile: "CORE", behavior: "EQUALIZE", risk: "LOW" },
  { id: 8, name: "Momentum Farmer", description: "Favor recent strength", profile: "ADV", behavior: "MOMENTUM", risk: "MED" },
  { id: 9, name: "Dip Farmer", description: "Allocate toward drawdowns", profile: "ADV", behavior: "BUY DIP", risk: "MED" },
  { id: 10, name: "Profit Seeder", description: "Deploy realized profits", profile: "CORE", behavior: "REDEPLOY", risk: "LOW" },
  { id: 11, name: "Yield Recycler", description: "Recycle harvested gains", profile: "CORE", behavior: "RECYCLE", risk: "LOW" },
  { id: 12, name: "Drip Farmer", description: "Small continuous allocations", profile: "CORE", behavior: "DRIP", risk: "LOW" },
  { id: 13, name: "Balancer", description: "Maintain target weights", profile: "CORE", behavior: "TARGET", risk: "LOW" },
  { id: 14, name: "Rotator", description: "Periodically rotate allocations", profile: "ADV", behavior: "ROTATE", risk: "MED" },
  { id: 15, name: "Trend Farmer", description: "Follow directional trends", profile: "ADV", behavior: "TREND", risk: "MED" },
  { id: 16, name: "Contrarian", description: "Favor relative weakness", profile: "ADV", behavior: "CONTRARIAN", risk: "HIGH" },
  { id: 17, name: "Floor Farmer", description: "Protect a minimum allocation", profile: "CORE", behavior: "MINIMUM", risk: "LOW" },
  { id: 18, name: "Cyclic Farmer", description: "Rotate on a fixed cycle", profile: "CORE", behavior: "CYCLE", risk: "MED" },
  { id: 19, name: "Accumulator+", description: "Accelerated accumulation", profile: "ADV", behavior: "ACCELERATE", risk: "MED" },
  { id: 20, name: "Harvest & Hold", description: "Harvest gains, retain principal", profile: "CORE", behavior: "HARVEST", risk: "LOW" },
  { id: 21, name: "Profit Splitter", description: "Divide realized gains", profile: "CORE", behavior: "SPLIT", risk: "LOW" },
  { id: 22, name: "Threshold Farmer", description: "Act at defined thresholds", profile: "CORE", behavior: "THRESHOLD", risk: "MED" },
  { id: 23, name: "Mean Reverter", description: "Favor assets near average", profile: "ADV", behavior: "MEAN REVERT", risk: "MED" },
  { id: 24, name: "Strength Farmer", description: "Increase allocation to leaders", profile: "ADV", behavior: "STRENGTH", risk: "MED" },
  { id: 25, name: "Weakness Buyer", description: "Scale into relative weakness", profile: "ADV", behavior: "SCALE IN", risk: "HIGH" },
  { id: 26, name: "Reserve Builder", description: "Maintain a capital reserve", profile: "CORE", behavior: "RESERVE", risk: "LOW" },
  { id: 27, name: "Reserve Deployer", description: "Deploy reserves on triggers", profile: "ADV", behavior: "DEPLOY", risk: "MED" },
  { id: 28, name: "Harvest Ladder", description: "Harvest at multiple thresholds", profile: "ADV", behavior: "LADDER", risk: "MED" },
  { id: 29, name: "Buy Ladder", description: "Scale entries across levels", profile: "ADV", behavior: "LADDER", risk: "MED" },
  { id: 30, name: "Profit Lock", description: "Lock gains at preset levels", profile: "CORE", behavior: "LOCK", risk: "LOW" },
  { id: 31, name: "Capital Preserver", description: "Prioritize principal preservation", profile: "CORE", behavior: "PRESERVE", risk: "LOW" },
  { id: 32, name: "Growth Farmer", description: "Favor portfolio growth", profile: "ADV", behavior: "GROWTH", risk: "HIGH" },
  { id: 33, name: "Value Farmer", description: "Favor lower relative valuations", profile: "ADV", behavior: "VALUE", risk: "MED" },
  { id: 34, name: "Volatility Farmer", description: "Respond to volatility changes", profile: "ADV", behavior: "VOLATILITY", risk: "HIGH" },
  { id: 35, name: "Steady Hand", description: "Maintain consistent allocation", profile: "CORE", behavior: "STEADY", risk: "LOW" },
  { id: 36, name: "Rotation Farmer", description: "Shift toward strongest assets", profile: "ADV", behavior: "ROTATION", risk: "MED" },
  { id: 37, name: "Momentum Ladder", description: "Scale into sustained momentum", profile: "ADV", behavior: "SCALE", risk: "HIGH" },
  { id: 38, name: "Dip Ladder", description: "Scale purchases through drawdowns", profile: "ADV", behavior: "SCALE", risk: "HIGH" },
  { id: 39, name: "Harvest Recycler", description: "Harvest then redeploy", profile: "CORE", behavior: "RECYCLE", risk: "MED" },
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
            <span className="eyebrow">ENGAGE DERP. GENERATE YOUR FARMER. YOUR FARMER TRADES AUTONOMOUSLY.</span>
            <div className="titleLine">
              <h1>Farmers</h1>
            </div>
          </div>

          <div className="collectionMeta">
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="featuredPanel">
          <div className="featuredHeader">
            <div>
              <span>TRADING PERSONALITIES DICTATE FARMER STATIC ASSET UNIVERSE. TRADING STRATEGIES DEFINE FARMER OPERATIONS</span>
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
<div className="tabs strategyTabs">
  <div className="strategyTabOptions">
    {["All", "Yours"].map((item) => (
      <button
        key={item}
        className={item === "All" ? "tab active" : "tab"}
        type="button"
      >
        {item}
        {item === "All" && <small>50</small>}
      </button>
    ))}
  </div>

  <div className="strategyDesk">
    Strategy Desk
  </div>
</div>

        <div className="list">
          {strategies.slice((page - 1) * 8, page * 8).map((strategy) => (
            <StrategyRow key={strategy.id} strategy={strategy} />
          ))}
        </div>

        <div className="listFooter">
          <span>
            {String((page - 1) * 8 + 1).padStart(2, "0")}—
            {String(Math.min(page * 8, strategies.length)).padStart(2, "0")} OF 50
          </span>

          <div className="pagination">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              aria-label="Previous strategy page"
            >
              ‹
            </button>
            <button
              onClick={() => setPage(Math.min(7, page + 1))}
              aria-label="Next strategy page"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="infoBar">
        <div>
          <span>IDENTITY</span>
          <strong>ERC-721</strong>
        </div>
        <div>
          <span>ACCOUNT</span>
          <strong>ERC-6551 TBA</strong>
        </div>
        <div>
          <span>ASSET FIELD</span>
          <strong>4 ASSETS</strong>
        </div>
        <div>
          <span>PROTOCOL</span>
          <strong className="green">ACTIVE</strong>
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

function StrategyRow({ strategy }: { strategy: (typeof strategies)[number] }) {
  return (
    <div className="farmerRow">
      <div className="imageSlot hasImage">
        <img
          src={strategyImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="farmerInfo">
        <div
          className="farmerName"
          style={{ color: "#72a97b" }}
        >
          {strategy.name}
        </div>
<div className="farmMeta strategyDescription">
  <span>{strategy.description}</span>
</div>
      </div>

      <button
        className="strategyAddButton"
        type="button"
        aria-label={`Add ${strategy.name} strategy`}
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