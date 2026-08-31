"use client";

import { useMemo, useState } from "react";

type Farmer = {
  rank: number;
  farmer: string;
  personality: string;
  strategy: string;
  asset: string;
  holdings: string;
  value: string;
  pnl: string;
  pnlPct: string;
  activity: string;
  status: "ACTIVE" | "HARVESTING" | "REBALANCING";
};

type Asset = {
  rank: number;
  asset: string;
  farmers: number;
  value: string;
  allocation: string;
  change: string;
};

type Strategy = {
  rank: number;
  strategy: string;
  farmers: number;
  value: string;
  avgReturn: string;
  risk: "LOW" | "MED" | "HIGH";
};

const farmers: Farmer[] = [
  { rank: 1, farmer: "#1842", personality: "SEED", strategy: "MOMENTUM", asset: "GOOGL", holdings: "42.18", value: "$7,842", pnl: "+$1,842", pnlPct: "+30.7%", activity: "12s ago", status: "ACTIVE" },
  { rank: 2, farmer: "#0731", personality: "CROP", strategy: "GROWTH", asset: "NVDA", holdings: "31.44", value: "$7,210", pnl: "+$1,510", pnlPct: "+26.5%", activity: "38s ago", status: "REBALANCING" },
  { rank: 3, farmer: "#2290", personality: "HERD", strategy: "VALUE", asset: "MSFT", holdings: "38.02", value: "$6,981", pnl: "+$1,281", pnlPct: "+22.4%", activity: "1m ago", status: "ACTIVE" },
  { rank: 4, farmer: "#0917", personality: "STAMPEDE", strategy: "TREND", asset: "AMZN", holdings: "27.84", value: "$6,744", pnl: "+$1,044", pnlPct: "+18.3%", activity: "2m ago", status: "HARVESTING" },
  { rank: 5, farmer: "#1403", personality: "BARN", strategy: "BALANCED", asset: "AAPL", holdings: "35.17", value: "$6,512", pnl: "+$812", pnlPct: "+14.2%", activity: "3m ago", status: "ACTIVE" },
  { rank: 6, farmer: "#2114", personality: "SEED", strategy: "MOMENTUM", asset: "GOOGL", holdings: "34.62", value: "$6,201", pnl: "+$701", pnlPct: "+12.7%", activity: "4m ago", status: "ACTIVE" },
  { rank: 7, farmer: "#0568", personality: "CROP", strategy: "GROWTH", asset: "TSLA", holdings: "22.91", value: "$5,944", pnl: "+$644", pnlPct: "+12.2%", activity: "5m ago", status: "REBALANCING" },
  { rank: 8, farmer: "#1988", personality: "HERD", strategy: "VALUE", asset: "MSFT", holdings: "29.43", value: "$5,731", pnl: "+$531", pnlPct: "+10.2%", activity: "7m ago", status: "ACTIVE" },
  { rank: 9, farmer: "#1022", personality: "STAMPEDE", strategy: "TREND", asset: "NVDA", holdings: "19.87", value: "$5,482", pnl: "+$482", pnlPct: "+9.6%", activity: "9m ago", status: "HARVESTING" },
  { rank: 10, farmer: "#2401", personality: "BARN", strategy: "BALANCED", asset: "AAPL", holdings: "27.14", value: "$5,207", pnl: "+$407", pnlPct: "+8.5%", activity: "11m ago", status: "ACTIVE" },
];

const assets: Asset[] = [
  { rank: 1, asset: "GOOGL", farmers: 847, value: "$184,291", allocation: "18.7%", change: "+8.4%" },
  { rank: 2, asset: "MSFT", farmers: 792, value: "$171,844", allocation: "17.4%", change: "+6.9%" },
  { rank: 3, asset: "NVDA", farmers: 641, value: "$158,372", allocation: "16.1%", change: "+12.8%" },
  { rank: 4, asset: "AAPL", farmers: 598, value: "$142,910", allocation: "14.5%", change: "+4.2%" },
  { rank: 5, asset: "AMZN", farmers: 521, value: "$119,483", allocation: "12.1%", change: "+7.1%" },
  { rank: 6, asset: "TSLA", farmers: 487, value: "$108,772", allocation: "11.0%", change: "+3.8%" },
];

const strategies: Strategy[] = [
  { rank: 1, strategy: "MOMENTUM", farmers: 412, value: "$138,482", avgReturn: "+21.4%", risk: "HIGH" },
  { rank: 2, strategy: "GROWTH", farmers: 387, value: "$129,744", avgReturn: "+18.9%", risk: "HIGH" },
  { rank: 3, strategy: "TREND", farmers: 341, value: "$118,210", avgReturn: "+16.7%", risk: "MED" },
  { rank: 4, strategy: "VALUE", farmers: 298, value: "$105,883", avgReturn: "+13.8%", risk: "LOW" },
  { rank: 5, strategy: "BALANCED", farmers: 276, value: "$97,420", avgReturn: "+11.9%", risk: "LOW" },
];

const personalities = [
  { name: "SEED", farmers: 512, value: "$142,904", description: "Systematic capital deployment and measured growth." },
  { name: "CROP", farmers: 486, value: "$137,218", description: "Growth-oriented exposure with active capital rotation." },
  { name: "HERD", farmers: 441, value: "$129,874", description: "Diversified positioning built around established assets." },
  { name: "STAMPEDE", farmers: 398, value: "$121,602", description: "Fast-moving allocation with stronger directional bias." },
  { name: "BARN", farmers: 367, value: "$108,331", description: "Defensive portfolio behavior and balanced allocation." },
];

const statusCopy = {
  ACTIVE: "EXECUTING",
  HARVESTING: "HARVESTING",
  REBALANCING: "REBALANCING",
};

export default function LeaderboardPage() {
  const [view, setView] = useState<"farmers" | "assets" | "strategies" | "personalities">("farmers");
  const [period, setPeriod] = useState<"ALL TIME" | "30D" | "7D">("ALL TIME");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"rank" | "value" | "pnl">("rank");

  const filteredFarmers = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = farmers.filter((farmer) =>
      !query ||
      farmer.farmer.toLowerCase().includes(query) ||
      farmer.personality.toLowerCase().includes(query) ||
      farmer.strategy.toLowerCase().includes(query) ||
      farmer.asset.toLowerCase().includes(query)
    );

    if (sort === "value") {
      return [...result].sort((a, b) => Number(b.value.replace(/[$,]/g, "")) - Number(a.value.replace(/[$,]/g, "")));
    }

    if (sort === "pnl") {
      return [...result].sort((a, b) => Number(b.pnl.replace(/[$,+]/g, "")) - Number(a.pnl.replace(/[$,+]/g, "")));
    }

    return result;
  }, [search, sort]);

  return (
    <div className="app leaderboardApp">
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
          <a href="/leaderboard">LEADERBOARD</a>
          <a href="/wheatpaper">WHEATPAPER</a>
        </nav>

        <div className="topActions">
          <span className="network"><i /> BASE</span>
          <button className="walletButton">CONNECT WALLET</button>
        </div>
      </header>

      <section className="assetBanner" aria-label="Asset Universe">
        <div className="assetBannerInner">
          <div className="assetBannerLabel" />
          <div className="assetMarquee">
            <div className="assetMarqueeTrack">
              {[
                ["MSFT", "/assets/asset-01.svg"], ["AMZN", "/assets/asset-02.svg"],
                ["NVDA", "/assets/asset-03.svg"], ["META", "/assets/asset-04.svg"],
                ["AAPL", "/assets/asset-06.svg"], ["GOOGL", "/assets/asset-07.svg"],
                ["ETH", "/assets/asset-08.svg"], ["VZ", "/assets/asset-10.svg"],
                ["COIN", "/assets/asset-11.svg"], ["SPCX", "/assets/asset-12.svg"],
                ["TSLA", "/assets/asset-13.svg"], ["DERP", "/assets/asset-14.png"],
                ["NFLX", "/assets/asset-15.svg"], ["INTC", "/assets/asset-16.svg"],
                ["PLTR", "/assets/asset-17.svg"], ["MA", "/assets/asset-18.svg"],
              ].map(([code, image]) => (
                <div className="assetUniverseItem" key={code}>
                  <div className="assetUniverseImage"><img src={image} alt={code} /></div>
                  <span className="assetUniverseName">{code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="leaderboardPage">
        <section className="leaderboardHero">
          <div className="leaderboardHeroEyebrow">
            <span className="liveDot" /> NETWORK PERFORMANCE INDEX
          </div>

          <div className="leaderboardHeroGrid">
            <div>
              <h1>FARMER <span>LEADERBOARD</span></h1>
              <p>
                A LIVE PERFORMANCE INDEX OF THE dFARMER NETWORK —
                RANKING PORTFOLIO VALUE, CAPITAL GROWTH, STRATEGY
                PERFORMANCE, AND ASSET CONCENTRATION.
              </p>
            </div>

            <div className="networkStats">
              <div className="networkStat">
                <span>FARMERS</span>
                <strong>3,333</strong>
                <small>ACTIVE NETWORK</small>
              </div>
              <div className="networkStat">
                <span>PORTFOLIO VALUE</span>
                <strong>$986.7K</strong>
                <small>NETWORK TOTAL</small>
              </div>
              <div className="networkStat">
                <span>24H FLOW</span>
                <strong>+$18.4K</strong>
                <small>CAPITAL MOVEMENT</small>
              </div>
            </div>
          </div>
        </section>

        <section className="leaderboardControls">
          <div className="leaderboardTabs">
            {[
              ["farmers", "TOP FARMERS"],
              ["assets", "ASSET HOLDERS"],
              ["strategies", "STRATEGIES"],
              ["personalities", "PERSONALITIES"],
            ].map(([key, label]) => (
              <button
                key={key}
                className={view === key ? "active" : ""}
                onClick={() => setView(key as typeof view)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="leaderboardPeriod">
            {(["ALL TIME", "30D", "7D"] as const).map((item) => (
              <button
                key={item}
                className={period === item ? "active" : ""}
                onClick={() => setPeriod(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="leaderboardContent">
          {view === "farmers" && (
            <>
              <div className="leaderboardSectionHead">
                <div>
                  <small>NETWORK RANKING / {period}</small>
                  <h2>TOP <span>FARMERS</span></h2>
                </div>

                <div className="leaderboardTools">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="SEARCH FARMER / ASSET"
                    aria-label="Search leaderboard"
                  />
                  <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
                    <option value="rank">RANK</option>
                    <option value="value">PORTFOLIO VALUE</option>
                    <option value="pnl">P&amp;L</option>
                  </select>
                </div>
              </div>

              <div className="leaderboardMetrics">
                <div><span>LEADING FARMER</span><strong>#1842</strong><small>$7,842 PORTFOLIO</small></div>
                <div><span>TOP PERSONALITY</span><strong>SEED</strong><small>512 FARMERS</small></div>
                <div><span>TOP STRATEGY</span><strong>MOMENTUM</strong><small>+21.4% AVG.</small></div>
                <div><span>TOP ASSET</span><strong>GOOGL</strong><small>18.7% NETWORK</small></div>
              </div>

              <div className="podium">
                {farmers.slice(0, 3).map((farmer) => (
                  <div className={`podiumCard podium${farmer.rank}`} key={farmer.farmer}>
                    <small>RANK {String(farmer.rank).padStart(2, "0")}</small>
                    <div className="podiumGlyph">{String(farmer.rank).padStart(2, "0")}</div>
                    <div className="podiumFarmer">{farmer.farmer}</div>
                    <div className="podiumPersonality">{farmer.personality} / {farmer.strategy}</div>
                    <strong>{farmer.value}</strong>
                    <span>PORTFOLIO VALUE</span>
                    <em>{farmer.pnl} · {farmer.pnlPct}</em>
                  </div>
                ))}
              </div>

              <div className="leaderboardTable">
                <div className="tableHeader">
                  <span>RANK</span><span>FARMER</span><span>PERSONALITY</span>
                  <span>STRATEGY</span><span>LEADING ASSET</span><span>HOLDINGS</span>
                  <span>PORTFOLIO</span><span>24H / P&amp;L</span><span>STATE</span>
                </div>

                {filteredFarmers.map((farmer) => (
                  <div className="leaderboardRow" key={farmer.farmer}>
                    <span className="rank">#{String(farmer.rank).padStart(2, "0")}</span>
                    <strong>{farmer.farmer}</strong>
                    <span>{farmer.personality}</span>
                    <span className="strategy">{farmer.strategy}</span>
                    <span className="asset">{farmer.asset}</span>
                    <span>{farmer.holdings}</span>
                    <strong className="value">{farmer.value}</strong>
                    <span className="pnl">{farmer.pnlPct}</span>
                    <span className={`farmerStatus ${farmer.status.toLowerCase()}`}>
                      <i /> {statusCopy[farmer.status]}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "assets" && (
            <div className="leaderboardViewPanel">
              <div className="leaderboardSectionHead">
                <div>
                  <small>CAPITAL CONCENTRATION / {period}</small>
                  <h2>ASSET <span>HOLDERS</span></h2>
                </div>
                <div className="viewTotal"><strong>18</strong><span>SUPPORTED ASSETS</span></div>
              </div>

              <div className="distributionGrid">
                <div className="distributionCard featured">
                  <small>DOMINANT NETWORK ASSET</small>
                  <strong>GOOGL</strong>
                  <span>$184,291</span>
                  <em>18.7% OF NETWORK VALUE</em>
                  <div className="distributionBar"><i style={{ width: "74%" }} /></div>
                </div>
                <div className="distributionCard">
                  <small>HIGHEST FARMER COUNT</small>
                  <strong>847</strong>
                  <span>FARMERS</span>
                  <em>GOOGL</em>
                </div>
                <div className="distributionCard">
                  <small>FASTEST ASSET</small>
                  <strong>NVDA</strong>
                  <span>+12.8%</span>
                  <em>NETWORK ALLOCATION CHANGE</em>
                </div>
              </div>

              <div className="assetTable">
                <div className="assetTableHeader">
                  <span>RANK</span><span>ASSET</span><span>FARMERS</span>
                  <span>COMBINED VALUE</span><span>NETWORK SHARE</span><span>CHANGE</span>
                </div>
                {assets.map((asset) => (
                  <div className="assetTableRow" key={asset.asset}>
                    <span>#{String(asset.rank).padStart(2, "0")}</span>
                    <strong>{asset.asset}</strong>
                    <span>{asset.farmers}</span>
                    <strong className="value">{asset.value}</strong>
                    <span>{asset.allocation}</span>
                    <span className="pnl">{asset.change}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "strategies" && (
            <div className="leaderboardViewPanel">
              <div className="leaderboardSectionHead">
                <div>
                  <small>STRATEGY PERFORMANCE / {period}</small>
                  <h2>STRATEGY <span>RANKINGS</span></h2>
                </div>
              </div>

              <div className="strategyExplain">
                <div><span>01</span><strong>PERFORMANCE</strong><p>Ranks strategies by observed portfolio output and capital growth.</p></div>
                <div><span>02</span><strong>ADOPTION</strong><p>Shows how much of the network is operating under each strategy.</p></div>
                <div><span>03</span><strong>RISK BAND</strong><p>Displays the protocol-defined behavioral risk classification.</p></div>
              </div>

              <div className="assetTable strategyTable">
                <div className="assetTableHeader">
                  <span>RANK</span><span>STRATEGY</span><span>FARMERS</span>
                  <span>PORTFOLIO VALUE</span><span>AVG. OUTPUT</span><span>RISK</span>
                </div>
                {strategies.map((strategy) => (
                  <div className="assetTableRow" key={strategy.strategy}>
                    <span>#{String(strategy.rank).padStart(2, "0")}</span>
                    <strong>{strategy.strategy}</strong>
                    <span>{strategy.farmers}</span>
                    <strong className="value">{strategy.value}</strong>
                    <span className="pnl">{strategy.avgReturn}</span>
                    <span className={`riskBadge ${strategy.risk.toLowerCase()}`}>{strategy.risk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "personalities" && (
            <div className="leaderboardViewPanel">
              <div className="leaderboardSectionHead">
                <div>
                  <small>FARMER BEHAVIOR / {period}</small>
                  <h2>PERSONALITY <span>INDEX</span></h2>
                </div>
              </div>

              <div className="personalityGrid">
                {personalities.map((personality, index) => (
                  <div className="personalityRankCard" key={personality.name}>
                    <div className="personalityRank">#{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <small>PERSONALITY</small>
                      <strong>{personality.name}</strong>
                      <p>{personality.description}</p>
                    </div>
                    <div className="personalityNumbers">
                      <span><b>{personality.farmers}</b> FARMERS</span>
                      <span><b>{personality.value}</b> VALUE</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="leaderboardFooterNote">
          <div>
            <span className="liveDot" />
            NETWORK TELEMETRY
          </div>
          <p>
            Rankings represent protocol data and configured Farmer behavior.
            Portfolio values, strategy output, and network positions can change
            as assets move and autonomous execution occurs.
          </p>
        </section>
      </main>
    </div>
  );
}
