"use client";

import Footer from "../components/Footer";

export default function Risk() {
  return (
    <div className="app">
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
              {[
                { code: "MSFT", image: "/assets/asset-01.svg" },
                { code: "AMZN", image: "/assets/asset-02.svg" },
                { code: "NVDA", image: "/assets/asset-03.svg" },
                { code: "META", image: "/assets/asset-04.svg" },
                { code: "AAPL", image: "/assets/asset-06.svg" },
                { code: "GOOGL", image: "/assets/asset-07.svg" },
                { code: "ETH", image: "/assets/asset-08.svg" },
                { code: "VZ", image: "/assets/asset-10.svg" },
                { code: "COIN", image: "/assets/asset-11.svg" },
                { code: "SPCX", image: "/assets/asset-12.svg" },
                { code: "TSLA", image: "/assets/asset-13.svg" },
                { code: "DERP", image: "/assets/asset-14.png" },
                { code: "NFLX", image: "/assets/asset-15.svg" },
                { code: "INTC", image: "/assets/asset-16.svg" },
                { code: "PLTR", image: "/assets/asset-17.svg" },
                { code: "MA", image: "/assets/asset-18.svg" },
              ].map((asset, index) => (
                <div
                  className="assetUniverseItem"
                  key={`${asset.code}-${index}`}
                >
                  <div className="assetUniverseImage">
                    <img src={asset.image} alt={asset.code} />
                  </div>
                  <span className="assetUniverseName">{asset.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="legalPage">

      <section className="legalHero">
        <span>dFARMERS / RISK</span>

        <h1>RISK DISCLOSURE</h1>

        <p>
          dFARMERS INVOLVES DIGITAL ASSETS, BLOCKCHAIN INFRASTRUCTURE,
          AUTOMATED STRATEGIES, AND MARKET EXPOSURE. PARTICIPATION INVOLVES
          SUBSTANTIAL RISK.
        </p>
      </section>


      <section className="legalContent">

        <div className="legalNotice">
          <strong>HIGH-RISK DIGITAL ASSET SYSTEM</strong>
          <p>
            YOU MAY LOSE SOME OR ALL OF THE CAPITAL ASSOCIATED WITH A
            FARMER. DIGITAL ASSET PRICES CAN MOVE RAPIDLY AND THERE IS
            NO GUARANTEE THAT ANY FARMER, ASSET, STRATEGY, OR PORTFOLIO
            WILL PRODUCE A POSITIVE RETURN.
          </p>
        </div>


        <article className="legalSection">
          <span>01</span>
          <h2>MARKET RISK</h2>
          <p>
            Digital assets, tokenized securities, and other supported assets can
            experience significant and rapid price movements. A Farmer's portfolio may decline in
            value due to market conditions, volatility, liquidity changes,
            economic events, or changes in investor sentiment.
          </p>
          <p>
            A strategy that performed well historically may perform poorly
            in future market conditions.
          </p>
        </article>


        <article className="legalSection">
          <span>02</span>
          <h2>ASSET CONCENTRATION</h2>
          <p>
            Each Farmer's personality contributes to an asset configuration that
            is subject to regional eligibility and may contain a limited number
            of eligible assets. The Farmer's ERC-721 NFT is its identity, while
            its associated ERC-6551 Token-Bound Account (TBA) serves as its
            on-chain portfolio account.
          </p>
          <p>
            Concentration in a particular asset, sector, market, or
            investment theme may increase the impact of adverse price
            movements on the Farmer's portfolio.
          </p>
        </article>


        <article className="legalSection">
          <span>03</span>
          <h2>STRATEGY RISK</h2>
          <p>
            Farmer strategies are programmed rules for managing capital. The owner may
            configure supported strategy parameters within the boundaries provided
            by the protocol.
            They may accumulate, harvest, compound, periodically
            reallocate, or concentrate capital according to predefined
            conditions.
          </p>
          <p>
            A programmed strategy may produce unfavorable results,
            particularly when market conditions differ from the
            conditions under which the strategy was designed.
          </p>
        </article>


        <article className="legalSection">
          <span>04</span>
          <h2>MODEL & RESEARCH RISK</h2>
          <p>
            Farmer personalities are informed by published academic
            research and investment methodologies.
          </p>
          <p>
            Academic findings do not guarantee future performance.
            Research methodologies may fail to reproduce historical
            results, may perform differently in live markets, and may
            contain assumptions that do not apply to future conditions.
          </p>
        </article>


        <article className="legalSection">
          <span>05</span>
          <h2>CRYPTOCURRENCY RISK</h2>
          <p>
            Cryptocurrency markets can experience extreme volatility,
            rapid drawdowns, liquidity disruptions, regulatory changes,
            network failures, and substantial changes in market structure.
          </p>
          <p>
            Cryptocurrency exposure may result in significant or complete
            loss of capital.
          </p>
        </article>


        <article className="legalSection">
          <span>06</span>
          <h2>MINING REVENUE RISK</h2>
          <p>
            dFARMERS may use mining proceeds as a source of ecosystem
            capital. Mining revenue is not guaranteed and may vary based
            on network difficulty, asset prices, hardware performance,
            electricity costs, infrastructure availability, and other
            factors.
          </p>
        </article>


        <article className="legalSection">
          <span>07</span>
          <h2>TREASURY RISK</h2>
          <p>
            Capital distributed to Farmers may originate from project
            treasury resources and other designated sources.
          </p>
          <p>
            Treasury resources are finite and may fluctuate in value.
            Future distributions are not guaranteed and may be affected
            by project performance, operating expenses, market conditions,
            or other circumstances.
          </p>
        </article>


        <article className="legalSection">
          <span>08</span>
          <h2>SMART CONTRACT RISK</h2>
          <p>
            Smart contracts and blockchain applications may contain
            programming errors, vulnerabilities, exploits, or unexpected
            behaviors.
          </p>
          <p>
            An exploit or software failure could result in partial or
            complete loss of digital assets.
          </p>
        </article>


        <article className="legalSection">
          <span>09</span>
          <h2>BRIDGE & NETWORK RISK</h2>
          <p>
            dFARMERS may rely on blockchain bridges and Layer 2
            infrastructure to move capital between networks.
          </p>
          <p>
            Bridges and networks may experience congestion, outages,
            exploits, transaction failures, delays, or unexpected fees.
          </p>
        </article>


        <article className="legalSection">
          <span>10</span>
          <h2>EXECUTION RISK</h2>
          <p>
            Automated portfolio execution through Shadow / Tractor may be affected by
            market liquidity, transaction timing, network congestion, available
            trading infrastructure, price movements, slippage, authorization
            checks, failed transactions, and transaction costs.
          </p>
          <p>
            The execution price may differ materially from the price
            observed when a strategy decision was generated.
          </p>
        </article>


        <article className="legalSection">
          <span>10A</span>
          <h2>SHADOW / TRACTOR EXECUTION RISK</h2>
          <p>
            Shadow is dFARMERS' delegated autonomous execution service and is
            represented in the Farm interface as the Tractor. Shadow is designed
            to actually initiate and submit portfolio transactions on behalf of
            a Farmer's ERC-6551 Token-Bound Account. It is therefore a mechanism
            for executing permitted capital movements, not merely an observer or
            recommendation system.
          </p>
          <p>
            Shadow may monitor portfolio state, evaluate the Farmer's configured
            strategy, determine when a permitted action should occur, and submit
            the corresponding transaction. Execution remains subject to the
            applicable TBA and protocol authorization layer, including permitted
            assets, approved contracts, allocation rules, transaction limits,
            trading-frequency restrictions, liquidation constraints, and other
            protocol-defined controls.
          </p>
          <p>
            No software authorization model eliminates execution risk. A valid
            transaction may still experience slippage, delay, price movement,
            failed execution, network congestion, or other adverse conditions.
            The owner may revoke Shadow's authorization where the deployed
            protocol provides that mechanism. The current implementation is
            rule-driven and may evolve as real-world performance and telemetry
            are collected.
          </p>
        </article>


        <article className="legalSection">
          <span>12</span>
          <h2>LIQUIDITY RISK</h2>
          <p>
            Certain assets may have limited trading liquidity. In periods
            of market stress, it may become difficult or impossible to
            execute transactions at expected prices.
          </p>
          <p>
            Low liquidity can increase spreads, slippage, and potential
            losses.
          </p>
        </article>


        <article className="legalSection">
          <span>13</span>
          <h2>REGULATORY RISK</h2>
          <p>
            Laws and regulations concerning digital assets, tokenized
            securities, NFTs, automated trading, mining, and blockchain
            infrastructure continue to evolve.
          </p>
          <p>
            Changes in regulation may restrict, modify, or prevent certain
            dFARMERS activities or access in particular jurisdictions.
          </p>
        </article>


        <article className="legalSection">
          <span>13A</span>
          <h2>PROJECT INDEPENDENCE & THIRD-PARTY RELATIONSHIPS</h2>
          <p>
            dFARMERS is independently developed and operated and has no
            relationship, affiliation, partnership, endorsement, ownership
            connection, or other formal association with Stonkpit, Pitboys,
            Derpboys, the Stonkbrokers ecosystem, or Robinhood.
          </p>
          <p>
            References to third-party assets, infrastructure, networks, or
            ecosystems do not imply sponsorship, endorsement, ownership, or
            organizational affiliation. Interactions with third-party services
            remain subject to their own eligibility requirements, terms,
            restrictions, outages, and risks.
          </p>
        </article>


        <article className="legalSection">
          <span>15</span>
          <h2>THIRD-PARTY RISK</h2>
          <p>
            dFARMERS may depend on third-party wallets, marketplaces,
            exchanges, bridges, data providers, blockchain networks, and
            other infrastructure.
          </p>
          <p>
            Failures or changes to third-party services may affect
            portfolio operations, asset availability, or capital movement.
          </p>
        </article>


        <article className="legalSection">
          <span>16</span>
          <h2>SECURITY RISK</h2>
          <p>
            Digital assets may be targeted by hackers, scammers, malware,
            phishing attacks, compromised wallets, compromised accounts,
            and other security threats.
          </p>
          <p>
            Users are responsible for maintaining the security of their
            wallets, private keys, recovery phrases, and devices.
          </p>
        </article>


        <article className="legalSection">
          <span>17</span>
          <h2>NO GUARANTEE OF CAPITAL PRESERVATION</h2>
          <p>
            dFARMERS does not guarantee that a Farmer will preserve its
            initial capital, maintain a particular portfolio value, or
            generate positive returns.
          </p>
          <p>
            Participation should only be undertaken with capital that the
            participant can afford to lose.
          </p>
        </article>


        <div className="legalFinal">
          <span>dFARMERS</span>
          <strong>UNDERSTAND THE RISK BEFORE YOU FARM.</strong>
          <p>
            PARTICIPATION IN dFARMERS INVOLVES SUBSTANTIAL FINANCIAL,
            TECHNICAL, MARKET, AND REGULATORY RISK.
          </p>
        </div>

      </section>
<Footer />
    </main>
    </div>
  );
}