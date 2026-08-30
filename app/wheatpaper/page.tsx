"use client";

import "./wheatpaper.css";
import { useEffect, useState } from "react";

type Asset = {
  code: string;
  name: string;
  image: string;
};

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
  { code: "STONKBROKER", name: "SUPPORTED ASSET", image: "/assets/asset-22.png" },
];

export default function Wheatpaper() {
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
    <main className="wheatpaper">

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


      <section className="wpCover">
        <div className="wpKicker">TECHNICAL PROTOCOL DOCUMENT</div>

        <h1>WHEATPAPER</h1>

        <div className="wpSubtitle">
          A Technical Architecture for DERP-Engaged ERC-721 dFarmer Identity,
          Entropy-Determined Four-Asset Selection, Automatic Mint ETH
          Allocation, ERC-6551 Token-Bound Accounts, Strategy-Controlled
          Portfolios, and Constrained Autonomous Tractor Execution
        </div>

        <div className="wpMeta">
          <span>VERSION 3.0</span>
          <span>2026</span>
          <span>ROBINHOOD CHAIN</span>
        </div>

        <div className="wpRule" />

        <p className="wpAbstract">
          dFARMERS defines a dFarmer as a programmable on-chain portfolio
          primitive. At mint, DERP is engaged in the Farmer-generation process
          and entropy determines the Farmer&apos;s generated traits,
          personality, and four-asset portfolio universe. The dFarmer is an
          ERC-721 token associated with an ERC-6551 Token-Bound Account (TBA).
          Mint ETH is automatically allocated across the four assets assigned
          to that Farmer, establishing its initial portfolio. Thereafter,
          owner-configurable strategy parameters govern portfolio behavior,
          while the TBA implementation and protocol authorization layer
          constrain what may actually be executed. Tractor operates as the
          delegated autonomous portfolio operator within those boundaries.
        </p>
      </section>

      <aside className="wpContents">
        <span>DOCUMENT INDEX</span>
        <a href="#abstract">00 / ABSTRACT</a>
        <a href="#architecture">01 / SYSTEM ARCHITECTURE</a>
        <a href="#farmer">02 / dFARMER IDENTITY</a>
        <a href="#tba">03 / ERC-6551 TBA MODEL</a>
        <a href="#generation">04 / FARMER GENERATION</a>
        <a href="#assets">05 / FOUR-ASSET UNIVERSE</a>
        <a href="#regional">05A / REGIONAL ASSET ELIGIBILITY</a>
        <a href="#strategy">06 / STRATEGY ENGINE</a>
        <a href="#allocation">07 / CAPITAL ALLOCATION</a>
        <a href="#funding">08 / MINT CAPITAL & FUNDING</a>
        <a href="#tractor">09 / TRACTOR EXECUTION</a>
        <a href="#withdrawals">10 / WITHDRAWAL ARCHITECTURE</a>
        <a href="#security">11 / SECURITY & AUTHORIZATION</a>
        <a href="#owner">12 / OWNER CONFIGURATION</a>
        <a href="#telemetry">13 / TELEMETRY & VALIDATION</a>
        <a href="#robinhood">14 / ROBINHOOD CHAIN & RWA LAYER</a>
        <a href="#erc4337">15 / ACCOUNT ABSTRACTION</a>
        <a href="#risk">16 / MARKET RISK & SYSTEM CLASSIFICATION</a>
        <a href="#limitations">17 / LIMITATIONS</a>
        <a href="#conclusion">18 / CONCLUSION</a>
      </aside>

      <section id="abstract" className="wpSection">
        <div className="wpSectionNumber">00</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ABSTRACT</span>

          <h2>THE dFARMER AS A PORTFOLIO PRIMITIVE</h2>

          <p>
            dFARMERS treats the dFarmer as a persistent portfolio identity
            rather than a static digital collectible. The ERC-721 token
            establishes identity and ownership; its ERC-6551 Token-Bound
            Account provides the associated on-chain portfolio account.
          </p>

          <p>
            The mint is a portfolio-generation event. DERP participates in the
            entropy process, the resulting traits and personality determine
            four supported assets, and those four assets become fixed to the
            Farmer&apos;s portfolio universe. The owner cannot replace those
            four underlying assets.
          </p>

          <p>
            Mint ETH is automatically allocated across the four designated
            assets. After initialization, the owner may configure the
            Farmer&apos;s strategy and operating parameters through the Farm
            interface. Tractor then evaluates the portfolio and executes
            permitted actions subject to the protocol&apos;s authorization
            boundaries.
          </p>

          <p>
            The system therefore separates identity, account infrastructure,
            asset assignment, strategy, and execution authority while keeping
            final control with the dFarmer owner and protocol-enforced rules.
          </p>

          <div className="wpEquation">
            dFARMER = IDENTITY + TBA + 4 ASSETS + STRATEGY + POLICY + TRACTOR
          </div>
        </div>
      </section>

      <section id="architecture" className="wpSection">
        <div className="wpSectionNumber">01</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">SYSTEM ARCHITECTURE</span>

          <h2>A MULTI-LAYER PORTFOLIO MODEL</h2>

          <p>
            dFARMERS separates six functions that are commonly conflated:
            who the Farmer is, where its assets reside, how its assets are
            selected, how capital is managed, what actions are permitted, and
            which software is authorized to execute those actions.
          </p>

          <div className="wpDiagram">
            <div className="wpNode wpNodeRed">
              <small>LAYER 01</small>
              <strong>ERC-721</strong>
              <span>dFARMER IDENTITY</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>LAYER 02</small>
              <strong>ERC-6551</strong>
              <span>TOKEN-BOUND ACCOUNT</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>LAYER 03</small>
              <strong>DERP + ENTROPY</strong>
              <span>FARMER GENERATION</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>LAYER 04</small>
              <strong>4 ASSETS</strong>
              <span>FIXED PORTFOLIO UNIVERSE</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>LAYER 05</small>
              <strong>STRATEGY</strong>
              <span>OWNER-CONFIGURED PARAMETERS</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode wpNodeRed">
              <small>LAYER 06</small>
              <strong>TRACTOR</strong>
              <span>CONSTRAINED AUTONOMOUS OPERATOR</span>
            </div>
          </div>

          <div className="wpEquation">
            IDENTITY → ACCOUNT → GENERATION → 4-ASSET UNIVERSE → STRATEGY → TRACTOR → EXECUTION
          </div>
        </div>
      </section>

      <section id="farmer" className="wpSection">
        <div className="wpSectionNumber">02</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">dFARMER IDENTITY</span>

          <h2>ERC-721 AS THE IDENTITY PRIMITIVE</h2>

          <p>
            Each dFarmer is represented by a unique ERC-721 token. ERC-721
            supplies the canonical non-fungible identity by which the Farmer
            can be owned, transferred, identified, and associated with its
            corresponding Token-Bound Account.
          </p>

          <p>
            The identity is the persistent reference to which the
            Farmer&apos;s generated traits, personality, four-asset universe,
            TBA, strategy configuration, and portfolio state are attached.
          </p>

          <div className="wpCode">
{`dFarmerNFT
│
├── Contract Address
├── Token ID
├── Metadata / Traits
├── Personality
├── Four-Asset Universe
└── Ownership
      │
      ↓
dFarmer Identity`}
          </div>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>PROPERTY</span>
              <span>ROLE</span>
            </div>
            <div><span>CONTRACT</span><span>Defines the dFarmer collection</span></div>
            <div><span>TOKEN ID</span><span>Uniquely identifies the Farmer</span></div>
            <div><span>OWNER</span><span>Controls the Farmer and its configurable strategy</span></div>
            <div><span>TRAITS</span><span>Generated Farmer attributes</span></div>
            <div><span>PERSONALITY</span><span>Generated behavioral classification</span></div>
            <div><span>ASSET UNIVERSE</span><span>Four assets determined during generation</span></div>
            <div><span>TBA</span><span>On-chain account associated with the Farmer</span></div>
          </div>
        </div>
      </section>

      <section id="tba" className="wpSection">
        <div className="wpSectionNumber">03</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ACCOUNT MODEL</span>

          <h2>ERC-6551 TOKEN-BOUND ACCOUNT</h2>

          <p>
            ERC-6551 provides the account framework by which an NFT may be
            associated with a Token-Bound Account. In dFARMERS, the TBA
            serves as the dFarmer&apos;s on-chain portfolio account: the
            account in which supported positions are held and through which
            permitted portfolio operations are executed.
          </p>

          <div className="wpDiagram wpVertical">
            <div className="wpNode wpNodeRed">
              <small>IDENTITY</small>
              <strong>dFARMER #ID</strong>
              <span>ERC-721 TOKEN</span>
            </div>

            <div className="wpDown">↓</div>

            <div className="wpNode">
              <small>ACCOUNT</small>
              <strong>TOKEN-BOUND ACCOUNT</strong>
              <span>ERC-6551</span>
            </div>

            <div className="wpDown">↓</div>

            <div className="wpNode">
              <small>PORTFOLIO</small>
              <strong>FARMER POSITIONS</strong>
              <span>SUPPORTED TOKENIZED ASSETS</span>
            </div>
          </div>

          <p>
            ERC-6551 itself does not define dFARMERS trading rules,
            authorization policy, withdrawal limits, or autonomous execution.
            Those properties are supplied by the deployed TBA implementation,
            protocol contracts, and authorization layer.
          </p>

          <p>
            In this architecture, the TBA functions as both the Farmer&apos;s
            account and the primary enforcement boundary for delegated
            execution. Tractor can submit an action, but the account and
            protocol logic determine whether that action is permitted.
          </p>

          <div className="wpEquation">
            ERC-721 dFARMER → ERC-6551 TBA → PORTFOLIO ACCOUNT + ENFORCEMENT LAYER
          </div>
        </div>
      </section>

      <section id="generation" className="wpSection">
        <div className="wpSectionNumber">04</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">FARMER GENERATION</span>

          <h2>DERP ENGAGEMENT AND ENTROPY-DRIVEN GENERATION</h2>

          <p>
            DERP is engaged in the Farmer-generation mechanism as an entropy
            input. At mint, the generation process resolves the Farmer&apos;s
            traits and personality. That generated state determines the
            Farmer&apos;s four designated supported assets.
          </p>

          <p>
            The asset universe is therefore established during generation. It
            is not selected later by the owner and cannot be replaced through
            the strategy interface.
          </p>

          <div className="wpDiagram">
            <div className="wpNode">
              <small>01</small>
              <strong>DERP</strong>
              <span>ENTROPY INPUT</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>02</small>
              <strong>ENTROPY</strong>
              <span>GENERATION INPUT</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>03</small>
              <strong>TRAITS</strong>
              <span>GENERATED ATTRIBUTES</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode wpNodeRed">
              <small>04</small>
              <strong>PERSONALITY</strong>
              <span>BEHAVIORAL PROFILE</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>05</small>
              <strong>4 ASSETS</strong>
              <span>FIXED PORTFOLIO UNIVERSE</span>
            </div>
          </div>

          <div className="wpEquation">
            DERP → ENTROPY → TRAITS → PERSONALITY → FOUR ASSETS
          </div>
        </div>
      </section>

      <section id="assets" className="wpSection">
        <div className="wpSectionNumber">05</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">FOUR-ASSET UNIVERSE</span>

          <h2>THE FARMER RECEIVES FOUR FIXED ASSETS</h2>

          <p>
            Each Farmer receives exactly four supported underlying assets as a
            consequence of the mint-time generation process. These assets
            constitute that Farmer&apos;s permitted portfolio universe.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>ASSET 01</strong>
              <span>MINT DETERMINED</span>
              <p>The first supported asset assigned to the Farmer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ASSET 02</strong>
              <span>MINT DETERMINED</span>
              <p>The second supported asset assigned to the Farmer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ASSET 03</strong>
              <span>MINT DETERMINED</span>
              <p>The third supported asset assigned to the Farmer.</p>
            </div>
          </div>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>ASSET 04</strong>
              <span>MINT DETERMINED</span>
              <p>The fourth supported asset assigned to the Farmer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>OWNER CONTROL</strong>
              <span>STRATEGY, NOT ASSET SELECTION</span>
              <p>
                The owner may change how the four assets are managed, but may
                not replace the underlying four-asset universe.
              </p>
            </div>
          </div>

          <p>
            This separation is fundamental. Asset assignment occurs once
            during Farmer generation; portfolio management remains configurable
            after mint.
          </p>

          <div className="wpEquation">
            PERSONALITY → FOUR ASSIGNED ASSETS → FIXED PORTFOLIO UNIVERSE
          </div>
        </div>
      </section>

      <section id="regional" className="wpSection">
        <div className="wpSectionNumber">05A</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">REGIONAL ASSET ELIGIBILITY</span>

          <h2>STOCK TOKEN AVAILABILITY IS REGION-DEPENDENT</h2>

          <p>
            The four-asset Farmer model is subject to the legal and geographic
            availability of supported tokenized stock assets. The stock
            positions described in the Farmer-generation model are not
            universally available to every minter. Eligibility depends on
            whether the minter is located in a jurisdiction in which the
            applicable Robinhood tokenized stock assets are permitted and
            available.
          </p>

          <p>
            Where the minter is located in an eligible region, the Farmer may
            receive its four designated supported stock assets according to the
            established generation process. Where the minter is located in a
            region in which Robinhood stock tokens are not permitted or
            available, the Farmer does not receive those stock positions.
            Instead, the Farmer receives a three-asset allocation consisting of
            $STONKBROKER, $DERP, and Ethereum, allocated at 33% each.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>ELIGIBLE REGION</strong>
              <span>FOUR-ASSET MODEL</span>
              <p>
                The Farmer receives its four designated supported assets when
                the applicable tokenized stock assets are legally and
                technically available to the minter.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>NON-ELIGIBLE REGION</strong>
              <span>THREE-ASSET FALLBACK</span>
              <p>
                The Farmer receives $STONKBROKER, $DERP, and Ethereum at 33%
                each when Robinhood stock tokens are unavailable or not
                permitted in the minter&apos;s region.
              </p>
            </div>
          </div>

          <div className="wpEquation">
            NON-ELIGIBLE REGION = $STONKBROKER 33% + $DERP 33% + ETHEREUM 33%
          </div>

          <p>
            Regional eligibility is therefore an input to the Farmer&apos;s
            initial asset configuration. The protocol does not assume that
            tokenized stock access is globally uniform, and it does not
            represent unavailable stock positions as though they were
            accessible to an ineligible minter.
          </p>

          <p>
            dFARMERS will actively monitor newly qualified regions,
            regulatory developments, and amendments to applicable laws and
            rules that may change the availability of supported tokenized
            stock assets. As additional jurisdictions become qualified, the
            protocol may evaluate those regions for inclusion in the supported
            deployment and asset-eligibility framework.
          </p>
        </div>
      </section>

      <section id="strategy" className="wpSection">
        <div className="wpSectionNumber">06</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">STRATEGY ENGINE</span>

          <h2>STRATEGY DETERMINES HOW THE FARMER OPERATES</h2>

          <p>
            Asset assignment and portfolio management are separate functions.
            The four underlying assets are fixed by the Farmer-generation
            process; strategy determines how capital and positions may be
            managed within that universe.
          </p>

          <p>
            Farmers are initially assigned a strategy, but the owner can
            subsequently modify the Farmer&apos;s strategy and operating
            parameters through the Farm interface, subject to protocol-defined
            boundaries.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>RISK LEVEL</strong>
              <span>CAPITAL AGGRESSION</span>
              <p>Defines the selected level of portfolio risk.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TRADE FREQUENCY</strong>
              <span>EXECUTION TEMPO</span>
              <p>Controls the permitted level of trading activity.</p>
            </div>

            <div className="wpMiniCard">
              <strong>REBALANCING</strong>
              <span>PORTFOLIO DRIFT</span>
              <p>Determines how target allocations may be restored.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TAKE PROFIT</strong>
              <span>PROFIT REALIZATION</span>
              <p>Defines the selected threshold for realizing gains.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ALLOCATION</strong>
              <span>CAPITAL DISTRIBUTION</span>
              <p>Defines how eligible capital is distributed within the Farmer&apos;s universe.</p>
            </div>

            <div className="wpMiniCard">
              <strong>EXECUTION LIMITS</strong>
              <span>PROTOCOL BOUNDARIES</span>
              <p>Determines the range within which owner configuration may operate.</p>
            </div>
          </div>

          <p>
            The strategies are intended to be derived from published academic
            research supporting the underlying portfolio methodologies. They
            are implemented as defined autonomous flows rather than as claims
            of unrestricted artificial intelligence.
          </p>

          <div className="wpEquation">
            STRATEGY = OWNER PARAMETERS ∩ RESEARCH-BASED RULES ∩ PROTOCOL LIMITS
          </div>
        </div>
      </section>

      <section id="allocation" className="wpSection">
        <div className="wpSectionNumber">07</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">CAPITAL ALLOCATION</span>

          <h2>MINT CAPITAL FOLLOWS THE GENERATED FARMER</h2>

          <p>
            The initial economic state of a Farmer is established at mint. ETH
            received from the mint is automatically allocated across the four
            assets determined for that Farmer.
          </p>

          <div className="wpDiagram">
            <div className="wpNode">
              <small>INPUT</small>
              <strong>MINT ETH</strong>
              <span>INITIAL CAPITAL</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode wpNodeRed">
              <small>GENERATION</small>
              <strong>FOUR ASSETS</strong>
              <span>DETERMINED AT MINT</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>ALLOCATION</small>
              <strong>AUTOMATIC</strong>
              <span>CAPITAL DISTRIBUTED</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>OUTPUT</small>
              <strong>INITIAL PORTFOLIO</strong>
              <span>FOUR ASSET POSITIONS</span>
            </div>
          </div>

          <div className="wpEquation">
            MINT ETH → FOUR MINT-DETERMINED ASSETS → INITIAL PORTFOLIO
          </div>

          <p>
            Subsequent capital may be introduced through the Farmer account
            environment and managed according to the active strategy. The
            exact routing and execution path remains dependent on the deployed
            protocol contracts and supported execution environment.
          </p>
        </div>
      </section>

      <section id="funding" className="wpSection">
        <div className="wpSectionNumber">08</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">MINT CAPITAL & FUNDING</span>

          <h2>FROM MINT TO FARMER CAPITAL</h2>

          <p>
            The mint establishes the Farmer&apos;s initial portfolio. The
            generation process determines the four assets, and mint ETH is
            automatically deployed across those assets.
          </p>

          <div className="wpFlow">
            <div>
              <strong>MINT</strong>
              <span>FARMER CREATED</span>
            </div>

            <b>→</b>

            <div>
              <strong>DERP + ENTROPY</strong>
              <span>TRAITS / PERSONALITY</span>
            </div>

            <b>→</b>

            <div>
              <strong>4 ASSETS</strong>
              <span>UNIVERSE DETERMINED</span>
            </div>

            <b>→</b>

            <div>
              <strong>MINT ETH</strong>
              <span>AUTOMATIC ALLOCATION</span>
            </div>

            <b>→</b>

            <div className="wpFlowFinal">
              <strong>INITIAL PORTFOLIO</strong>
              <span>FOUR ASSET POSITIONS</span>
            </div>
          </div>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>CAPITAL COMPONENT</span>
              <span>FUNCTION</span>
            </div>
            <div><span>MINT ETH</span><span>Initial portfolio capital</span></div>
            <div><span>FOUR ASSETS</span><span>Determined during Farmer generation</span></div>
            <div><span>AUTOMATIC ALLOCATION</span><span>Distributes mint capital across the assigned assets</span></div>
            <div><span>SUBSEQUENT CAPITAL</span><span>Managed according to the active strategy and protocol limits</span></div>
          </div>
        </div>
      </section>

      <section id="tractor" className="wpSection">
        <div className="wpSectionNumber">09</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">AUTONOMOUS EXECUTION</span>

          <h2>TRACTOR AS THE DELEGATED AUTONOMOUS OPERATOR</h2>

          <p>
            Tractor is the autonomous application layer responsible for
            operating a dFarmer within its configured strategy and protocol
            permissions.
          </p>

          <p>
            Tractor monitors portfolio state and the Farmer&apos;s configured
            strategy, determines when a permitted action should occur, and
            submits the corresponding transaction. Tractor is not granted
            unrestricted control over the Farmer.
          </p>

          <p>
            When Tractor submits an action, the TBA authorization layer
            evaluates the request against the Farmer&apos;s permitted assets,
            approved contracts, allocation rules, transaction limits, trading
            restrictions, liquidation constraints, and other protocol-defined
            policies. An action that falls outside those boundaries must not
            execute.
          </p>

          <div className="wpCode">
{`Farmer Identity
      │
      ↓
DERP / Entropy Generation
      │
      ↓
Four Fixed Assets
      │
      ↓
Mint ETH Allocation
      │
      ↓
Owner Strategy Parameters
      │
      ↓
Tractor Evaluates Portfolio
      │
      ↓
Authorization / Policy Validation
      │
      ├── REJECT → NO EXECUTION
      │
      └── APPROVE
            │
            ↓
       TBA EXECUTION
            │
            ↓
       ON-CHAIN RESULT`}
          </div>

          <div className="wpEquation">
            EXECUTION = TRACTOR INTENT ∧ AUTHORIZATION ∧ PROTOCOL POLICY
          </div>

          <p>
            The owner retains ultimate control over the Farmer and can revoke
            Tractor&apos;s authorization. The system is therefore designed as
            constrained delegation rather than unrestricted autonomous custody.
          </p>
        </div>
      </section>

      <section id="withdrawals" className="wpSection">
        <div className="wpSectionNumber">10</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">WITHDRAWAL ARCHITECTURE</span>

          <h2>PROTOCOL-CONSTRAINED CAPITAL WITHDRAWAL</h2>

          <p>
            The Farmer&apos;s TBA is designed around continued portfolio
            participation. Withdrawals are therefore subject to protocol
            constraints intended to prevent unrestricted extraction of
            portfolio positions.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>12 MONTHS</strong>
              <span>WITHDRAWAL COOLDOWN</span>
              <p>
                A Farmer may execute a withdrawal no more than once during a
                twelve-month period.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>MAXIMUM PER POSITION</span>
              <p>
                A maximum of 50% of each individual TBA position may be
                withdrawn during the permitted withdrawal window.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>REMAINS IN EACH POSITION</span>
              <p>
                At least half of each position remains inside the Farmer&apos;s
                TBA following a maximum withdrawal.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>PROTOCOL</strong>
              <span>NOT OWNER CONFIGURABLE</span>
              <p>
                Withdrawal limits and cooldowns are protocol controls rather
                than strategy settings.
              </p>
            </div>
          </div>

          <div className="wpCode">
{`Withdrawal Request
      │
      ↓
Check 12-Month Cooldown
      │
      ↓
For Each Position:
Maximum Withdrawal = Position Balance × 50%
      │
      ↓
Validate Requested Amount
      │
      ├── INVALID → REVERT
      │
      └── VALID
            │
            ↓
      Execute Withdrawal
            │
            ↓
50%+ of Each Position Remains`}
          </div>

          <div className="wpEquation">
            MAX WITHDRAWAL = 50% OF EACH INDIVIDUAL POSITION
          </div>

          <p>
            The 50% restriction applies independently to each position. It does
            not permit the owner to withdraw 50% of total account value from
            one asset while removing the remaining portfolio exposure.
          </p>
        </div>
      </section>

      <section id="security" className="wpSection">
        <div className="wpSectionNumber">11</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">SECURITY & AUTHORIZATION</span>

          <h2>ENFORCING FARMER BOUNDARIES</h2>

          <p>
            A portfolio-bearing TBA has a larger security surface than a
            conventional NFT. dFARMERS therefore separates owner-configured
            strategy from protocol-controlled authorization and account rules.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>ASSET POLICY</strong>
              <span>WHAT CAN BE HELD?</span>
              <p>
                Execution is restricted to the Farmer&apos;s four assigned
                supported assets.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>CONTRACT POLICY</strong>
              <span>WHAT CAN BE CALLED?</span>
              <p>
                TBA execution may be restricted to approved contracts and
                operations.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>ALLOCATION POLICY</strong>
              <span>HOW MUCH?</span>
              <p>
                Protocol rules constrain permitted capital allocation and
                transaction behavior.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>TRADE POLICY</strong>
              <span>HOW OFTEN?</span>
              <p>
                Trading frequency and execution activity may be bounded by
                protocol rules.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>LIQUIDATION POLICY</strong>
              <span>WHAT MAY BE SOLD?</span>
              <p>
                Liquidation behavior remains subject to defined account and
                strategy boundaries.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>AUTHORIZATION</strong>
              <span>WHO MAY ACT?</span>
              <p>
                Tractor acts only as a delegated operator within explicit
                permissions and may be revoked by the owner.
              </p>
            </div>
          </div>

          <p>
            Invalid or unauthorized operations should fail before producing an
            unintended portfolio state. The protocol boundary is therefore
            independent from Tractor&apos;s software decision process.
          </p>

          <div className="wpEquation">
            TRACTOR AUTHORITY ⊆ FARMER PERMISSIONS ⊆ PROTOCOL POLICY
          </div>
        </div>
      </section>

      <section id="owner" className="wpSection">
        <div className="wpSectionNumber">12</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">OWNER CONFIGURATION</span>

          <h2>USER CONTROL WITHOUT PROTOCOL OVERRIDE</h2>

          <p>
            The Farm interface exposes a defined set of strategy parameters
            that the dFarmer owner may modify. Changes to on-chain strategy
            configuration require the applicable network transaction and gas.
          </p>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>SETTING</span>
              <span>CONTROL</span>
            </div>
            <div><span>RISK LEVEL</span><span>OWNER CONFIGURABLE</span></div>
            <div><span>TRADE FREQUENCY</span><span>OWNER CONFIGURABLE WITHIN PROTOCOL LIMITS</span></div>
            <div><span>ALLOCATION</span><span>OWNER CONFIGURABLE WITHIN PROTOCOL LIMITS</span></div>
            <div><span>REBALANCING</span><span>OWNER CONFIGURABLE</span></div>
            <div><span>TAKE PROFIT</span><span>OWNER CONFIGURABLE</span></div>
            <div><span>FOUR ASSETS</span><span>FIXED AT FARMER GENERATION</span></div>
            <div><span>TRACTOR AUTHORIZATION</span><span>OWNER REVOCABLE</span></div>
            <div><span>WITHDRAWAL LIMITS</span><span>PROTOCOL CONTROLLED</span></div>
            <div><span>WITHDRAWAL COOLDOWN</span><span>PROTOCOL CONTROLLED</span></div>
            <div><span>SECURITY RULES</span><span>PROTOCOL CONTROLLED</span></div>
          </div>

          <div className="wpEquation">
            OWNER = STRATEGY CONTROL / PROTOCOL = SECURITY CONTROL / TRACTOR = DELEGATED EXECUTION
          </div>
        </div>
      </section>

      <section id="telemetry" className="wpSection">
        <div className="wpSectionNumber">13</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">TELEMETRY & VALIDATION</span>

          <h2>MEASUREMENT BEFORE GREATER AUTONOMY</h2>

          <p>
            The current Tractor implementation is intentionally rule-driven.
            It should not be characterized as an unrestricted artificial
            intelligence capable of independently inventing investment
            decisions.
          </p>

          <p>
            The initial objective is reliable instruction-following and
            deterministic execution. The system then collects real-world
            performance and behavioral data that can be used to evaluate
            strategy quality, portfolio response, execution reliability, and
            the value of progressively more sophisticated autonomy.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>TELEMETRY</strong>
              <span>FULL SYSTEM EVENTS</span>
              <p>Relevant system activity is captured for analysis and verification.</p>
            </div>

            <div className="wpMiniCard">
              <strong>STORAGE</strong>
              <span>SQLITE</span>
              <p>SQLite is used as the current development data-storage layer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>STRATEGIES</strong>
              <span>ACADEMIC BASIS</span>
              <p>Strategy logic is derived from published academic research.</p>
            </div>

            <div className="wpMiniCard">
              <strong>BEHAVIOR</strong>
              <span>EMPIRICAL DATA</span>
              <p>Real-world Farmer behavior becomes an input to future system design.</p>
            </div>

            <div className="wpMiniCard">
              <strong>VALIDATION</strong>
              <span>MEASURABLE EXECUTION</span>
              <p>Autonomous flows can be evaluated against observable outcomes.</p>
            </div>

            <div className="wpMiniCard">
              <strong>PROGRESSION</strong>
              <span>GREATER AUTONOMY</span>
              <p>More sophisticated autonomy is introduced only as evidence supports it.</p>
            </div>
          </div>

          <div className="wpEquation">
            RULES → TELEMETRY → DATA → VALIDATION → OPTIMIZATION → GREATER AUTONOMY
          </div>
        </div>
      </section>

      <section id="robinhood" className="wpSection">
        <div className="wpSectionNumber">14</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">DEPLOYMENT & ASSET LAYER</span>

          <h2>ROBINHOOD CHAIN AND TOKENIZED REAL-WORLD ASSETS</h2>

          <p>
            dFARMERS is designed to interact with actual tokenized
            real-world assets on Robinhood Chain rather than simulated
            representations. The Farmer&apos;s TBA is intended to hold and
            control the corresponding on-chain positions.
          </p>

          <p>
            The underlying RWA infrastructure provides the tokenized assets.
            dFARMERS operates at the application layer, providing the
            Farmer identity, TBA association, strategy system, authorization
            boundaries, telemetry, and autonomous portfolio-management logic.
          </p>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>LAYER</span>
              <span>FUNCTION</span>
            </div>
            <div><span>ROBINHOOD CHAIN</span><span>Underlying execution environment</span></div>
            <div><span>TOKENIZED RWA ASSETS</span><span>Underlying portfolio instruments</span></div>
            <div><span>ERC-721 dFARMER</span><span>Persistent portfolio identity</span></div>
            <div><span>ERC-6551 TBA</span><span>Farmer portfolio account</span></div>
            <div><span>STRATEGY</span><span>Owner-configured portfolio behavior</span></div>
            <div><span>TRACTOR</span><span>Delegated autonomous execution</span></div>
          </div>

          <p>
            dFARMERS is not intended to issue the underlying securities, take
            custody of users&apos; assets as a broker, or represent the
            underlying financial infrastructure itself. The product is
            designed as an application and portfolio-management layer around
            supported tokenized assets.
          </p>
        </div>
      </section>

      <section id="erc4337" className="wpSection">
        <div className="wpSectionNumber">15</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ACCOUNT ABSTRACTION</span>

          <h2>WHY ERC-4337 IS NOT REQUIRED AT THIS STAGE</h2>

          <p>
            ERC-4337 was evaluated as a potential account-abstraction layer
            because of the additional capabilities it can provide for
            smart-account infrastructure. For the current proof of concept,
            however, those capabilities are not required.
          </p>

          <p>
            ERC-6551 already provides the account relationship required by the
            Farmer architecture, while the deployed TBA implementation and
            protocol authorization layer establish the execution boundaries
            required for Tractor.
          </p>

          <p>
            The system therefore avoids introducing an additional abstraction
            layer before its operational requirements justify it. A more
            sophisticated account-abstraction model may become appropriate in
            a later development stage, potentially S2, as the system evolves.
          </p>

          <div className="wpEquation">
            CURRENT ARCHITECTURE = ERC-721 + ERC-6551 TBA + AUTHORIZATION LAYER + TRACTOR
          </div>
        </div>
      </section>

      <section id="risk" className="wpSection">
        <div className="wpSectionNumber">16</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">MARKET RISK & SYSTEM CLASSIFICATION</span>

          <h2>A PORTFOLIO SYSTEM, NOT A WAGERING MECHANISM</h2>

          <p>
            dFARMERS is designed to function as an automated portfolio system
            rather than a discrete betting mechanism. Financial risk remains
            inherent: underlying assets can lose value, strategies can
            underperform, and no portfolio outcome is guaranteed.
          </p>

          <p>
            The structural distinction is that a Farmer represents an ongoing
            portfolio of supported assets governed by allocation, execution,
            and risk-management rules. It is not designed around a discrete
            wager on an uncertain event.
          </p>

          <p>
            Defined asset universes, allocation parameters, transaction
            restrictions, trading-frequency limits, liquidation controls, and
            withdrawal constraints establish the operating boundaries within
            which Tractor can act.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>dFARMER</strong>
              <span>PORTFOLIO IDENTITY</span>
              <p>The persistent NFT identity representing the Farmer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TBA</strong>
              <span>ACCOUNT + ENFORCEMENT</span>
              <p>The Farmer&apos;s on-chain account and delegated-execution boundary.</p>
            </div>

            <div className="wpMiniCard">
              <strong>FOUR ASSETS</strong>
              <span>PORTFOLIO</span>
              <p>The fixed asset universe established during Farmer generation.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TRACTOR</strong>
              <span>AUTOMATED OPERATOR</span>
              <p>The autonomous software operating within owner and protocol permissions.</p>
            </div>
          </div>

          <div className="wpEquation">
            dFARMER = IDENTITY / TBA = ACCOUNT / ASSETS = PORTFOLIO / TRACTOR = OPERATOR
          </div>
        </div>
      </section>

      <section id="limitations" className="wpSection">
        <div className="wpSectionNumber">17</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">LIMITATIONS</span>

          <h2>STANDARD VS. PROTOCOL IMPLEMENTATION</h2>

          <p>
            ERC-721 defines a non-fungible token standard. ERC-6551 defines an
            architecture for Token-Bound Accounts. Neither standard, by
            itself, defines the dFARMERS strategy engine, Farmer-generation
            process, four-asset assignment, automatic mint-capital allocation,
            withdrawal restrictions, Tractor authorization, telemetry system,
            or autonomous portfolio behavior.
          </p>

          <p>
            Those characteristics belong to the dFARMERS implementation:
            its contracts, TBA implementation, generation mechanism,
            authorization logic, execution infrastructure, and supporting
            systems. Their security and enforceability therefore depend upon
            the actual deployed implementation.
          </p>

          <p>
            Likewise, the existence of an ERC-6551 TBA does not independently
            guarantee any particular trading, withdrawal, or authorization
            behavior. Those properties must be enforced by the deployed
            account and protocol architecture.
          </p>

          <div className="wpEquation">
            STANDARD = INFRASTRUCTURE / PROTOCOL = IMPLEMENTATION
          </div>
        </div>
      </section>

      <section id="conclusion" className="wpSection wpConclusion">
        <div className="wpSectionNumber">18</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">CONCLUSION</span>

          <h2>THE dFARMER AS A CONSTRAINED AUTONOMOUS PORTFOLIO</h2>

          <p>
            dFARMERS defines the dFarmer as a programmable portfolio
            primitive composed of identity, account infrastructure,
            DERP-engaged generation, four fixed assets, capital, configurable
            strategy, protocol policy, and delegated autonomous execution.
          </p>

          <div className="wpEquation">
            ERC-721
            →
            ERC-6551 TBA
            →
            DERP + ENTROPY
            →
            PERSONALITY
            →
            4 ASSETS
            →
            MINT ETH
            →
            AUTOMATIC ALLOCATION
            →
            OWNER STRATEGY
            →
            TRACTOR
            →
            AUTHORIZED EXECUTION
          </div>

          <p>
            The ERC-721 establishes who the Farmer is. The ERC-6551
            Token-Bound Account provides its portfolio account. DERP is engaged
            in the generation process; entropy resolves the Farmer&apos;s
            traits and personality; and that generated state determines the
            four underlying assets that form the Farmer&apos;s fixed portfolio
            universe.
          </p>

          <p>
            Mint ETH is automatically allocated across those four assets.
            Thereafter, the owner may modify the Farmer&apos;s strategy and
            operating parameters, but cannot replace the underlying asset
            universe. Tractor evaluates the portfolio and submits permitted
            actions, while the TBA implementation and protocol authorization
            layer enforce the boundaries under which those actions may occur.
          </p>

          <p>
            The current system deliberately represents constrained autonomy
            rather than unrestricted artificial intelligence. Its strategies
            are defined, its execution is observable, and its system events
            are collected for empirical evaluation. Real-world data can then
            inform future increases in autonomous capability.
          </p>

          <p>
            The resulting architecture is intended to establish a foundation
            for progressively more capable on-chain portfolio agents:
            deterministic execution first, telemetry and validation second,
            and increasingly sophisticated autonomy only as evidence supports
            it.
          </p>

          <div className="wpEquation">
            CONSTRAINED EXECUTION → EMPIRICAL VALIDATION → PROGRESSIVE AUTONOMY
          </div>
        </div>
      </section>

      <section className="wpSources">
        <div className="wpSectionLabel">PRIMARY TECHNICAL REFERENCES</div>

        <a
          href="https://eips.ethereum.org/EIPS/eip-721"
          target="_blank"
          rel="noreferrer"
        >
          ERC-721 — Non-Fungible Token Standard
        </a>

        <a
          href="https://eips.ethereum.org/EIPS/eip-6551"
          target="_blank"
          rel="noreferrer"
        >
          ERC-6551 — Non-Fungible Token Bound Accounts
        </a>

        <a
          href="https://docs.robinhood.com/chain/"
          target="_blank"
          rel="noreferrer"
        >
          Robinhood Chain Documentation
        </a>
      </section>

    </main>
  );
}