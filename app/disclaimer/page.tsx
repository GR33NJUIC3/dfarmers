"use client";

export default function Disclaimer() {
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
        <span>dFARMERS / LEGAL</span>

        <h1>
          DISCLAIMER
        </h1>

        <p>
          PLEASE READ THE FOLLOWING INFORMATION CAREFULLY BEFORE
          PARTICIPATING IN dFARMERS.
        </p>
      </section>


      <section className="legalContent">

        <div className="legalNotice">
          <strong>IMPORTANT NOTICE</strong>
          <p>
            dFARMERS IS AN EXPERIMENTAL ONCHAIN SOFTWARE PROJECT.
            PARTICIPATION INVOLVES RISK, INCLUDING THE POSSIBLE LOSS OF
            DIGITAL ASSETS AND CAPITAL. dFARMERS MAY INTERACT WITH OR
            DEPLOY ON SUPPORTED BLOCKCHAIN INFRASTRUCTURE. dFARMERS IS
            NOT ASSOCIATED WITH ROBINHOOD, STONKPIT, PITBOYS, DERPBOYS,
            THE STONKBROKERS ECOSYSTEM, OR THEIR FOUNDERS OR OPERATORS.
          </p>
        </div>


        <article className="legalSection">
          <span>01</span>
          <h2>NOT FINANCIAL ADVICE</h2>
          <p>
            Nothing contained on this website, within the dFARMERS
            application, or in any associated documentation is intended
            to constitute financial, investment, trading, legal, tax,
            or other professional advice.
          </p>
          <p>
            Information regarding investment research, trading strategies,
            assets, portfolio behavior, or historical academic research
            is provided for informational and educational purposes only.
          </p>
        </article>


        <article className="legalSection">
          <span>02</span>
          <h2>NO GUARANTEE OF RETURNS</h2>
          <p>
            Past performance, academic research, historical market data,
            simulations, backtests, or theoretical strategies do not
            guarantee future results.
          </p>
          <p>
            dFARMERS makes no representation or guarantee that any
            Farmer, strategy, portfolio, asset, or allocation will
            generate a profit.
          </p>
        </article>


        <article className="legalSection">
          <span>03</span>
          <h2>DIGITAL ASSET & TOKENIZED ASSET RISK</h2>
          <p>
            Digital assets, tokenized assets, and blockchain-based assets
            can experience extreme volatility and may lose some or all of
            their value. Markets may become illiquid, unavailable, or
            otherwise behave in ways that cannot be predicted.
          </p>
          <p>
            Users are solely responsible for understanding and accepting
            the risks associated with digital assets and tokenized assets
            before participating.
          </p>
        </article>


        <article className="legalSection">
          <span>04</span>
          <h2>SMART CONTRACT & SOFTWARE RISK</h2>
          <p>
            Blockchain applications, smart contracts, Token-Bound Accounts,
            wallets, bridges, APIs, exchanges, and other software
            infrastructure may contain vulnerabilities, bugs, exploits,
            outages, or unexpected behavior.
          </p>
          <p>
            No software system can be guaranteed to operate without
            interruption or error.
          </p>
        </article>


        <article className="legalSection">
          <span>05</span>
          <h2>FARMER PERSONALITIES & ASSET CONFIGURATION</h2>
          <p>
            Farmer personalities are generated through the dFARMERS
            protocol and are associated with different academic research
            methodologies and asset configurations. Asset availability may
            also depend on the minter's jurisdiction and applicable
            eligibility requirements.
          </p>
          <p>
            In eligible regions, a Farmer may receive four supported assets
            determined through the generation process. Where supported
            Robinhood tokenized stock assets are not permitted or available
            in the minter's region, the Farmer instead receives the defined
            fallback allocation of $STONKBROKER, $DERP, and Ethereum at
            33% each.
          </p>
          <p>
            The assignment of a personality or asset configuration does not
            constitute a recommendation to purchase, hold, sell, or
            otherwise transact in any particular asset.
          </p>
        </article>


        <article className="legalSection">
          <span>06</span>
          <h2>SHADOW / TRACTOR AUTONOMOUS EXECUTION</h2>
          <p>
            Shadow is dFARMERS' delegated autonomous execution service and
            is represented in the Farm interface as the Tractor. Shadow is
            designed to monitor a Farmer's portfolio and configured strategy,
            determine when a permitted action should occur, and actually
            initiate and submit portfolio transactions on behalf of the
            Farmer's ERC-6551 Token-Bound Account.
          </p>
          <p>
            Shadow is therefore an execution mechanism that can move capital
            for the Farmer; it is not merely an observer or recommendation
            engine. However, Shadow does not receive unrestricted control of
            the Farmer's assets. Requested transactions remain subject to the
            applicable TBA and protocol authorization layer.
          </p>
          <p>
            The authorization layer is intended to constrain execution through
            permitted assets, approved contracts, allocation rules, transaction
            limits, trading-frequency restrictions, liquidation constraints,
            and other protocol-defined controls. A requested transaction that
            falls outside those boundaries may be rejected and may not execute.
          </p>
          <p>
            The current Shadow implementation is rule-driven rather than an
            unrestricted artificial intelligence system. The owner retains
            control of the Farmer and may revoke Shadow's authorization where
            the deployed protocol provides that mechanism. Autonomous execution
            does not eliminate market, execution, software, or other risks.
          </p>
        </article>


        <article className="legalSection">
          <span>07</span>
          <h2>TRADING STRATEGIES</h2>
          <p>
            Farmer strategies define programmed approaches to capital
            management and portfolio behavior. Owners may configure
            supported strategy parameters within protocol-defined boundaries.
            Strategy selection does not guarantee profitability or protection
            against losses.
          </p>
          <p>
            Actual results may differ materially from theoretical,
            historical, or simulated results. A strategy may also perform
            differently as market conditions, liquidity, regulations, or
            available execution infrastructure change.
          </p>
        </article>


        <article className="legalSection">
          <span>08</span>
          <h2>MINING & TREASURY CAPITAL</h2>
          <p>
            dFARMERS may utilize treasury resources, mining proceeds,
            secondary-sale distributions, or other sources of capital
            to support the ecosystem.
          </p>
          <p>
            The availability, amount, timing, and future use of such
            capital are not guaranteed. Project treasury resources are
            distinct from a Farmer's onchain portfolio account unless
            expressly designated otherwise by the protocol.
          </p>
        </article>


        <article className="legalSection">
          <span>09</span>
          <h2>THIRD-PARTY SERVICES & INFRASTRUCTURE</h2>
          <p>
            dFARMERS may interact with third-party networks, wallets,
            exchanges, marketplaces, bridges, data providers, tokenized-asset
            infrastructure, and other services.
          </p>
          <p>
            dFARMERS does not control third-party systems and is not
            responsible for failures, outages, security incidents,
            transaction delays, fees, eligibility restrictions, or losses
            arising from their use.
          </p>
          <p>
            References to third-party assets, infrastructure, brands, or
            ecosystems do not imply sponsorship, endorsement, ownership,
            or organizational affiliation.
          </p>
        </article>


        <article className="legalSection">
          <span>10</span>
          <h2>REGIONAL & REGULATORY ELIGIBILITY</h2>
          <p>
            Digital asset and tokenized-asset laws and regulations vary by
            jurisdiction and may change over time. Certain supported assets
            or platform functionality may not be available to every user.
          </p>
          <p>
            Where supported Robinhood tokenized stock assets are not permitted
            or available in a minter's region, the Farmer uses the defined
            $STONKBROKER, $DERP, and Ethereum fallback allocation at 33% each.
            This fallback does not represent access to unavailable stock-token
            positions.
          </p>
          <p>
            dFARMERS actively monitors newly qualified regions, regulatory
            developments, and amendments to applicable laws and rules that may
            affect supported asset availability. Monitoring does not guarantee
            that a particular region or asset will become available.
          </p>
          <p>
            Users are solely responsible for determining whether participation
            and any applicable asset activity is permitted in their jurisdiction
            and for satisfying applicable legal and tax obligations.
          </p>
        </article>


        <article className="legalSection">
          <span>11</span>
          <h2>PROJECT INDEPENDENCE</h2>
          <p>
            dFARMERS is independently developed and operated. dFARMERS has
            no relationship, affiliation, partnership, endorsement, ownership
            connection, or other formal association with Stonkpit, Pitboys,
            Derpboys, the Stonkbrokers ecosystem, or Robinhood.
          </p>
          <p>
            Any technical interaction with third-party infrastructure or assets
            does not create an affiliation with the provider, issuer, network,
            project, ecosystem, or brand involved.
          </p>
        </article>


        <article className="legalSection">
          <span>12</span>
          <h2>USER RESPONSIBILITY</h2>
          <p>
            Users are responsible for securing their wallets, private
            keys, recovery phrases, devices, and transaction approvals.
          </p>
          <p>
            Blockchain transactions may be irreversible. Users should
            independently verify all transaction details before signing
            and should understand that autonomous execution may result in
            transactions being submitted on behalf of a Farmer within the
            permissions established by the protocol.
          </p>
        </article>


        <article className="legalSection">
          <span>13</span>
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
          <strong>PARTICIPATE AT YOUR OWN RISK.</strong>
          <p>
            BY USING THE dFARMERS PLATFORM, YOU ACKNOWLEDGE THAT YOU
            HAVE READ, UNDERSTOOD, AND ACCEPTED THE RISKS DESCRIBED ABOVE.
            AUTONOMOUS EXECUTION DOES NOT REMOVE THE POSSIBILITY OF
            SUBSTANTIAL FINANCIAL, TECHNICAL, MARKET, OR REGULATORY LOSS.
          </p>
        </div>

      </section>

    </main>
    </div>
  );
}