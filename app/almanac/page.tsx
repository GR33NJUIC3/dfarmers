"use client";

import "./almanac.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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

export default function Almanac() {
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
    <main className="Almanac">
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

    <button className="walletButton">
      CONNECT WALLET
    </button>

    <div className="mobileSocials">
      <a
        href="YOUR_DISCORD_LINK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/social/discord.svg" alt="Discord" />
      </a>

      <a
        href="https://x.com/dFarmersNFT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/social/x.svg" alt="X" />
      </a>
    </div>
  </div>

  <button
    type="button"
    className="mobileMenuButton"
    aria-label="Open navigation menu"
    onClick={() => {
      document.body.classList.toggle("mobileMenuOpen");
    }}
  >
    <span />
    <span />
    <span />
  </button>

  <nav className="mobileMenu">
    <a href="/almanac">ALMANAC</a>
    <a href="/leaderboard">LEADERBOARD</a>
    <a href="/wheatpaper">WHEATPAPER</a>

    <button className="mobileWalletButton">
      CONNECT WALLET
    </button>
  </nav>
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
                  <span className="assetUniversePrice">
                    {getAssetPrice(asset.code)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wpCover">
        <h1>Farmer's Almanac</h1>

        <div className="wpSubtitle">
          A Technical Architecture for DERP-Engaged ERC-721 dFarmer Identity,
          Entropy-Determined Four-Asset Selection, Automatic Mint ETH
          Allocation, ERC-6551 Token-Bound Accounts, Strategy-Controlled
          Portfolios, and Constrained Autonomous Shadow Execution
        </div>

        <div className="wpMeta">
          <span>VERSION 3.1</span>
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
        <span>FIELD INDEX</span>
        <a href="#abstract">00 / ORIGIN</a>
        <a href="#architecture">01 / ARCHITECTURE</a>
        <a href="#farmer">02 / FARMER IDENTITY</a>
        <a href="#tba">03 / ACCOUNT</a>
        <a href="#generation">04 / GENERATION</a>
        <a href="#assets">05 / ASSET UNIVERSE</a>
        <a href="#regional">05A / REGIONAL ELIGIBILITY</a>
        <a href="#strategy">06 / STRATEGY</a>
        <a href="#allocation">07 / ALLOCATION</a>
        <a href="#funding">08 / CAPITAL ORIGIN</a>
        <a href="#tractor">09 / TRACTOR / SHADOW</a>
        <a href="#withdrawals">10 / WITHDRAWAL</a>
        <a href="#security">11 / SECURITY</a>
        <a href="#owner">12 / OWNER CONFIGURATION</a>
        <a href="#telemetry">13 / TELEMETRY</a>
        <a href="#robinhood">14 / DEPLOYMENT</a>
        <a href="#erc4337">15 / ACCOUNT ORIGIN</a>
        <a href="#risk">16 / SYSTEM CHARACTER</a>
        <a href="#limitations">17 / BOUNDARIES</a>
        <a href="#conclusion">18 / THE LAST WORD</a>
      </aside>

      <section id="abstract" className="wpSection">
        <div className="wpSectionNumber">00</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ORIGIN</span>

          <h2>THE dFARMER AS A LIVING ON-CHAIN INSTRUMENT</h2>

          <p>
            dFARMERS begins with a refusal to treat an NFT as a picture that merely
            occupies a wallet. The dFarmer is a persistent on-chain identity.
            ERC-721 gives that identity ownership and continuity; ERC-6551 gives
            it an account of its own, a place where capital can reside and act.
          </p>

          <p>
            The mint is the Farmer&apos;s first act of becoming. DERP enters the entropy
            process; entropy resolves traits and personality; that generated
            character resolves four supported assets. Those four assets become
            the Farmer&apos;s fixed universe. The owner may shape how they are
            managed, but cannot rewrite the Farmer&apos;s origin.
          </p>

          <p>
            Mint ETH does not simply disappear into a treasury-shaped abstraction. It
            becomes the Farmer&apos;s initial economic body, automatically
            distributed across its designated assets. After birth, the owner
            can tune strategy and operating parameters. Tractor watches,
            evaluates, and acts only where the architecture permits it.
          </p>

          <p>
            The architecture separates what the Farmer is, where it lives, what it may
            hold, how it behaves, and who may execute on its behalf. That
            separation is not bureaucracy. It is the mechanism by which
            autonomy becomes legible, bounded, and worthy of trust.
          </p>

          <div className="wpEquation">
            dFARMER = IDENTITY + TBA + 4 ASSETS + STRATEGY + POLICY + TRACTOR
          </div>
        </div>
      </section>

      <section id="architecture" className="wpSection">
        <div className="wpSectionNumber">01</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ARCHITECTURE</span>

          <h2>THE MACHINE BENEATH THE FARM</h2>

          <p>
            A Farmer is not one contract pretending to be an entire organism. It is a
            composition of distinct powers: identity, account, generation,
            asset universe, strategy, and execution. Each layer answers a
            different question, and the system becomes powerful precisely
            because those questions are not allowed to collapse into one.
          </p>

          <div className="wpDiagram">
            <div className="wpNode wpNodeRed">
              <small>LAYER 01</small>
              <strong>ERC-721</strong>
              <span>FARMER IDENTITY</span>
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
              <span>GENERATION</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>LAYER 04</small>
              <strong>4 ASSETS</strong>
              <span>THE FOURFOLD WORLD</span>
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
              <strong>TRACTOR / SHADOW</strong>
              <span>CONSTRAINED AUTONOMOUS OPERATOR</span>
            </div>
          </div>

          <div className="wpEquation">
            IDENTITY → ACCOUNT → GENERATION → 4-ASSET UNIVERSE → STRATEGY → TRACTOR / SHADOW → EXECUTION
          </div>
        </div>
      </section>

      <section id="farmer" className="wpSection">
        <div className="wpSectionNumber">02</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">FARMER IDENTITY</span>

          <h2>IDENTITY GIVEN FORM</h2>

          <p>
            Every dFarmer begins as a unique ERC-721. This is more than a certificate
            of ownership. It is the persistent name of the machine: transferable,
            identifiable, and permanently associated with the Farmer&apos;s
            Token-Bound Account.
          </p>

          <p>
            Traits, personality, asset universe, TBA, strategy, and portfolio state
            gather around that identity. The NFT is the thread that lets all
            of those systems refer to the same Farmer across time.
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
            <div><span>CONTRACT</span><span>Defines the lineage from which Farmers emerge</span></div>
            <div><span>TOKEN ID</span><span>The Farmer&apos;s singular on-chain identity</span></div>
            <div><span>OWNER</span><span>Holds the Farmer and shapes its permitted behavior</span></div>
            <div><span>TRAITS</span><span>The visible record of its generated character</span></div>
            <div><span>PERSONALITY</span><span>The Farmer&apos;s generated behavioral character</span></div>
            <div><span>ASSET UNIVERSE</span><span>The four assets written into its initial universe</span></div>
            <div><span>TBA</span><span>The account in which the Farmer&apos;s economic life resides</span></div>
          </div>
        </div>
      </section>

      <section id="tba" className="wpSection">
        <div className="wpSectionNumber">03</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ACCOUNT</span>

          <h2>THE ACCOUNT THAT BELONGS TO THE FARMER</h2>

          <p>
            ERC-6551 gives the Farmer something most NFTs never possess: an account
            that belongs to the identity itself. In dFARMERS, the TBA is the
            Farmer&apos;s portfolio body, the on-chain account where supported
            positions reside and through which permitted operations can occur.
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
            ERC-6551 is the architecture, not the philosophy. It does not by itself
            invent trading rules, withdrawal limits, authorization, or autonomy.
            Those powers live in the deployed TBA implementation, protocol
            contracts, and authorization layer that give this architecture its
            actual character.
          </p>

          <p>
            The TBA is therefore both home and gate. Tractor may arrive with an
            instruction, but the account and protocol decide whether the
            instruction has the right to become reality. Autonomy begins at the
            boundary of permission; it never exists beyond it.
          </p>

          <div className="wpEquation">
            ERC-721 dFARMER → ERC-6551 TBA → PORTFOLIO ACCOUNT + ENFORCEMENT LAYER
          </div>
        </div>
      </section>

      <section id="generation" className="wpSection">
        <div className="wpSectionNumber">04</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">GENERATION</span>

          <h2>WHERE ENTROPY GIVES THE FARMER A DESTINY</h2>

          <p>
            DERP is woven into the Farmer&apos;s birth through the generation process.
            At mint, entropy resolves traits and personality, and that state
            determines the four supported assets that become part of the
            Farmer&apos;s permanent universe. Chance is not decoration here;
            it is part of the architecture.
          </p>

          <p>
            The universe is chosen at the beginning because a Farmer should have an
            origin. Strategy may evolve. The four underlying assets do not.
            The owner inherits a machine with a character, not an empty shell
            whose identity can be rewritten whenever convenient.
          </p>

          <div className="wpDiagram">
            <div className="wpNode">
              <small>01</small>
              <strong>DERP</strong>
              <span>THE SPARK</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>02</small>
              <strong>ENTROPY</strong>
              <span>THE UNKNOWN</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>03</small>
              <strong>TRAITS</strong>
              <span>THE RECORD</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode wpNodeRed">
              <small>04</small>
              <strong>PERSONALITY</strong>
              <span>THE CHARACTER</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>05</small>
              <strong>4 ASSETS</strong>
              <span>THE FOURFOLD WORLD</span>
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
          <span className="wpSectionLabel">ASSET UNIVERSE</span>

          <h2>FOUR ASSETS. ONE IRREVERSIBLE BEGINNING.</h2>

          <p>
            Each Farmer emerges with four supported underlying assets. Together they
            form the territory in which that Farmer may operate. The universe
            is finite by design: four doors, four instruments, one generated
            configuration.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>ASSET 01</strong>
              <span>BORN AT MINT</span>
              <p>The first coordinate in the Farmer&apos;s generated economic universe.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ASSET 02</strong>
              <span>BORN AT MINT</span>
              <p>The second coordinate in the Farmer&apos;s generated economic universe.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ASSET 03</strong>
              <span>BORN AT MINT</span>
              <p>The third coordinate in the Farmer&apos;s generated economic universe.</p>
            </div>
          </div>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>ASSET 04</strong>
              <span>BORN AT MINT</span>
              <p>The fourth coordinate in the Farmer&apos;s generated economic universe.</p>
            </div>

            <div className="wpMiniCard">
              <strong>OWNER CONTROL</strong>
              <span>BEHAVIOR, NOT ORIGIN</span>
              <p>
                The owner may teach the Farmer how to move through its universe, but may
                not replace the universe itself.
              </p>
            </div>
          </div>

          <p>
            This separation is deliberate. Origin is fixed; behavior remains alive.
            The Farmer receives its world at generation, then learns to move
            through that world according to the strategy its owner selects.
          </p>

          <div className="wpEquation">
            PERSONALITY / REGION → ELIGIBLE ASSET UNIVERSE → FIXED PORTFOLIO CONFIGURATION
          </div>
        </div>
      </section>

      <section id="regional" className="wpSection">
        <div className="wpSectionNumber">05A</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">REGIONAL ELIGIBILITY</span>

          <h2>THE CHAIN REMEMBERS WHERE YOU STAND</h2>

          <p>
            A technical system that touches real-world assets must acknowledge the
            geography of the real world. The four-asset model therefore bends
            to the legal and technical availability of supported tokenized
            stocks on Robinhood Chain. The Farmer cannot pretend an unavailable
            instrument exists simply because the code wishes it did.
          </p>

          <p>
            In an eligible region, the generated Farmer may receive its four designated
            supported stock assets. In a region where those Robinhood stock
            tokens are unavailable or not permitted, the architecture does not
            fabricate access. The Farmer instead follows the defined fallback:
            $STONKBROKER, $DERP, and Ethereum, allocated at 33% each.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>ELIGIBLE REGION</strong>
              <span>ELIGIBLE-ASSET MODEL</span>
              <p>
                Where access exists, the Farmer receives the four assets resolved by its
                generation process.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>NON-ELIGIBLE REGION</strong>
              <span>THREE-ASSET FALLBACK</span>
              <p>
                Where stock-token access does not exist, the Farmer enters the defined
                three-asset fallback: $STONKBROKER, $DERP, and Ethereum at 33%
                each.
              </p>
            </div>
          </div>

          <div className="wpEquation">
            NON-ELIGIBLE REGION = $STONKBROKER + $DERP + ETHEREUM ≈ 33% EACH
          </div>

          <p>
            Geography becomes part of the generation state. The protocol recognizes
            that the same chain does not create the same legal reality everywhere.
            A Farmer receives what the environment permits, never a fiction of
            access.
          </p>

          <p>
            The architecture remains awake to the world around it. dFARMERS will
            watch newly qualified regions, regulatory developments, and changes
            that alter supported asset availability. As jurisdictions qualify,
            they may be evaluated for inclusion in the deployment and eligibility
            framework.
          </p>
        </div>
      </section>

      <section id="strategy" className="wpSection">
        <div className="wpSectionNumber">06</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">STRATEGY</span>

          <h2>THE OWNER CHOOSES THE TEMPERAMENT</h2>

          <p>
            The Farmer&apos;s world is fixed; its temperament is not. The four underlying
            assets come from generation. Strategy determines how capital may
            move, when positions may be adjusted, and how the machine expresses
            its chosen operating character inside that fixed universe.
          </p>

          <p>
            A Farmer is born with a strategy, but it is not condemned to remain static.
            Its owner can reshape operating parameters through the Farm interface,
            provided every change remains inside the boundaries written by the
            protocol.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>RISK LEVEL</strong>
              <span>TEMPERAMENT</span>
              <p>Sets the Farmer&apos;s chosen tolerance for portfolio aggression.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TRADE FREQUENCY</strong>
              <span>RHYTHM</span>
              <p>Sets the tempo at which the Farmer may act.</p>
            </div>

            <div className="wpMiniCard">
              <strong>REBALANCING</strong>
              <span>RETURN TO FORM</span>
              <p>Defines how the Farmer responds when its portfolio drifts.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TAKE PROFIT</strong>
              <span>REALIZE THE GAIN</span>
              <p>Defines when the Farmer is permitted to realize configured gains.</p>
            </div>

            <div className="wpMiniCard">
              <strong>ALLOCATION</strong>
              <span>SHAPE THE WEIGHT</span>
              <p>Shapes how permitted capital is distributed among the Farmer&apos;s assets.</p>
            </div>

            <div className="wpMiniCard">
              <strong>EXECUTION LIMITS</strong>
              <span>THE OUTER WALL</span>
              <p>Marks the outer edge of what the owner is allowed to command.</p>
            </div>
          </div>

          <p>
            The strategies are intended to stand on published academic research rather
            than mysticism. They become defined autonomous flows: repeatable
            rules translated into execution, not a claim that an artificial
            intelligence possesses unlimited discretion.
          </p>

          <div className="wpEquation">
            STRATEGY = OWNER PARAMETERS ∩ RESEARCH-BASED RULES ∩ PROTOCOL LIMITS
          </div>
        </div>
      </section>

      <section id="allocation" className="wpSection">
        <div className="wpSectionNumber">07</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ALLOCATION</span>

          <h2>CAPITAL ENTERS THE FARMER, NOT THE VOID</h2>

          <p>
            At mint, the Farmer acquires its first economic heartbeat. ETH received
            through mint becomes initial capital and is automatically distributed
            across the asset configuration generated for that Farmer.
          </p>

          <div className="wpDiagram">
            <div className="wpNode">
              <small>INPUT</small>
              <strong>MINT ETH</strong>
              <span>FIRST CAPITAL</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode wpNodeRed">
              <small>GENERATION</small>
              <strong>ASSET UNIVERSE</strong>
              <span>BORN AT MINT / REGION</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>ALLOCATION</small>
              <strong>AUTOMATIC</strong>
              <span>CAPITAL TAKES FORM</span>
            </div>

            <div className="wpArrow">→</div>

            <div className="wpNode">
              <small>OUTPUT</small>
              <strong>INITIAL PORTFOLIO</strong>
              <span>THE FIRST PORTFOLIO</span>
            </div>
          </div>

          <div className="wpEquation">
            MINT ETH → REGION-ELIGIBLE ASSET CONFIGURATION → INITIAL PORTFOLIO
          </div>

          <p>
            Later capital may enter through the Farmer account environment and live
            beneath the active strategy. The exact route remains a property of
            the deployed contracts and supported execution environment—not a
            promise made by the abstraction alone.
          </p>
        </div>
      </section>

      <section id="funding" className="wpSection">
        <div className="wpSectionNumber">08</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">CAPITAL ORIGIN</span>

          <h2>THE FIRST MOMENT OF ECONOMIC LIFE</h2>

          <p>
            The mint establishes the Farmer&apos;s initial portfolio. The
            generation process determines the four assets, and mint ETH is
            automatically deployed across those assets.
          </p>

          <div className="wpFlow">
            <div>
              <strong>MINT</strong>
              <span>A FARMER IS BORN</span>
            </div>

            <b>→</b>

            <div>
              <strong>DERP + ENTROPY</strong>
              <span>CHARACTER EMERGES</span>
            </div>

            <b>→</b>

            <div>
              <strong>ASSET UNIVERSE</strong>
              <span>WORLD + ACCESS</span>
            </div>

            <b>→</b>

            <div>
              <strong>MINT ETH</strong>
              <span>CAPITAL TAKES ROOT</span>
            </div>

            <b>→</b>

            <div className="wpFlowFinal">
              <strong>INITIAL PORTFOLIO</strong>
              <span>THE FIRST PORTFOLIO</span>
            </div>
          </div>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>CAPITAL COMPONENT</span>
              <span>FUNCTION</span>
            </div>
            <div><span>MINT ETH</span><span>The first capital placed into the Farmer&apos;s economic life</span></div>
            <div><span>ASSET CONFIGURATION</span><span>Written by generation and constrained by regional access</span></div>
            <div><span>CAPITAL TAKES ROOT</span><span>Turns mint capital into the Farmer&apos;s initial positions</span></div>
            <div><span>SUBSEQUENT CAPITAL</span><span>Moves only according to strategy and protocol boundaries</span></div>
          </div>
        </div>
      </section>

      <section id="tractor" className="wpSection">
        <div className="wpSectionNumber">09</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">AUTONOMOUS EXECUTION</span>

          <h2>TRACTOR / SHADOW: THE MACHINE THAT WORKS</h2>

          <p>
            Shadow is the execution service beneath the Farm. The interface gives it a
            physical metaphor: the Tractor, the machine that works the Farmer&apos;s
            portfolio. The metaphor is agricultural; the mechanism is software.
            Tractor is what the user sees. Shadow is what executes.
          </p>

          <p>
            Shadow does not become the Farmer. It does not own the NFT and it is not an
            unrestricted wallet. Its purpose is disciplined and narrower:
            observe state, evaluate strategy, decide whether a defined condition
            has arrived, and submit the corresponding permitted transaction.
          </p>

          <p>
            This is the heart of constrained autonomy: wanting to act is not the same
            as having the authority to act. Shadow can identify a rebalance,
            trade, or configured operation. Only the TBA, authorization contracts,
            approved execution paths, and protocol rules can turn that intention
            into an actual movement of assets.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>OBSERVE</strong>
              <span>READ PORTFOLIO STATE</span>
              <p>
                Shadow reads the Farmer&apos;s relevant positions, configuration,
                and permitted operating state.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>EVALUATE</strong>
              <span>APPLY STRATEGY RULES</span>
              <p>
                Shadow evaluates current conditions against the Farmer&apos;s
                configured strategy and execution parameters.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>PROPOSE</strong>
              <span>PREPARE AN ACTION</span>
              <p>
                When a defined condition is met, Shadow prepares the corresponding
                permitted transaction.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>AUTHORIZE</strong>
              <span>PROTOCOL CHECK</span>
              <p>
                The requested operation must satisfy the deployed account and
                protocol authorization rules before execution.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>EXECUTE</strong>
              <span>ON-CHAIN ACTION</span>
              <p>
                An approved transaction is submitted through the supported
                execution path and produces an observable on-chain result.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>RECORD</strong>
              <span>TELEMETRY</span>
              <p>
                Execution events and outcomes can be recorded for monitoring,
                validation, and future strategy evaluation.
              </p>
            </div>
          </div>

          <div className="wpCode">
{`FARMER PORTFOLIO
      │
      ↓
SHADOW / TRACTOR
      │
      ├── OBSERVE
      │
      ├── EVALUATE STRATEGY
      │
      └── PREPARE ACTION
              │
              ↓
      AUTHORIZATION / POLICY
              │
              ├── REJECT → NO EXECUTION
              │
              └── APPROVE
                    │
                    ↓
              TBA / EXECUTION PATH
                    │
                    ↓
              ON-CHAIN RESULT
                    │
                    ↓
                TELEMETRY`}
          </div>

          <div className="wpEquation">
            SHADOW INTENT ∧ AUTHORIZATION ∧ PROTOCOL POLICY → EXECUTION
          </div>

          <p>
            Shadow is not marketed here as an oracle, a human manager, or a sovereign
            intelligence. It is something more precise: a constrained machine
            that repeatedly applies defined rules to live state and attempts
            only actions the deployed architecture allows. Its strength is not
            unlimited freedom. Its strength is repeatability.
          </p>

          <p>
            The owner remains the holder of the dFarmer and the author of its strategy.
            Any Shadow authorization is bounded by what the deployed protocol
            grants and, where implemented, can be revoked. Exact authority,
            transaction flow, and revocation remain properties of the contracts
            and execution infrastructure.
          </p>
        </div>
      </section>

      <section id="withdrawals" className="wpSection">
        <div className="wpSectionNumber">10</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">WITHDRAWAL</span>

          <h2>EVEN EXIT HAS A LAW</h2>

          <p>
            The Farmer is designed to remain a portfolio, not become an empty shell.
            Withdrawal therefore carries protocol law: limits intended to keep
            meaningful exposure inside the Farmer rather than allowing unrestricted
            extraction.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>12 MONTHS</strong>
              <span>TIME BETWEEN EXITS</span>
              <p>
                A Farmer may execute a withdrawal no more than once during a
                twelve-month period.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>MAXIMUM LEAVING EACH POSITION</span>
              <p>
                A maximum of 50% of each individual TBA position may be
                withdrawn during the permitted withdrawal window.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>HALF REMAINS</span>
              <p>
                At least half of each position remains inside the Farmer&apos;s
                TBA following a maximum withdrawal.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>PROTOCOL</strong>
              <span>NOT A MATTER OF TASTE</span>
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
            The 50% rule is position by position. It is not permission to hollow out one
            asset completely while preserving a misleading percentage elsewhere.
            The Farmer remains exposed in every individual position after a
            maximum withdrawal.
          </p>
        </div>
      </section>

      <section id="security" className="wpSection">
        <div className="wpSectionNumber">11</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">SECURITY</span>

          <h2>THE WALLS THAT MAKE AUTONOMY TRUSTWORTHY</h2>

          <p>
            Once an NFT can hold capital and act, security stops being a footnote. A
            portfolio-bearing TBA has real surface area. dFARMERS therefore
            separates what the owner may configure from what the protocol itself
            must enforce.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>ASSET POLICY</strong>
              <span>WHAT MAY EXIST HERE?</span>
              <p>
                Execution is restricted to the Farmer&apos;s assigned supported asset
                universe, which is four assets in eligible regions and the defined
                three-asset fallback in non-eligible regions.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>CONTRACT POLICY</strong>
              <span>WHAT MAY BE TOUCHED?</span>
              <p>
                TBA execution may be restricted to approved contracts and
                operations.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>ALLOCATION POLICY</strong>
              <span>HOW MUCH MAY MOVE?</span>
              <p>
                Protocol rules constrain permitted capital allocation and
                transaction behavior.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>TRADE POLICY</strong>
              <span>HOW FAST MAY IT MOVE?</span>
              <p>
                Trading frequency and execution activity may be bounded by
                protocol rules.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>LIQUIDATION POLICY</strong>
              <span>WHAT MAY LEAVE?</span>
              <p>
                Liquidation behavior remains subject to defined account and
                strategy boundaries.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>AUTHORIZATION</strong>
              <span>WHO HOLDS THE KEY?</span>
              <p>
                Tractor acts only as a delegated operator within explicit
                permissions and may be revoked by the owner.
              </p>
            </div>
          </div>

          <p>
            A bad intention must die at the boundary before it becomes a bad state.
            Authorization is therefore independent from the software that
            requested the action. The machine can ask. The protocol decides.
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

          <h2>THE OWNER COMMANDS; THE PROTOCOL DEFINES</h2>

          <p>
            The Farm interface gives the owner a steering wheel, not a skeleton key.
            Strategy parameters may be changed through the interface, while
            on-chain changes remain real network transactions with real gas and
            real protocol constraints.
          </p>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>SETTING</span>
              <span>CONTROL</span>
            </div>
            <div><span>RISK LEVEL</span><span>OWNER MAY SHAPE</span></div>
            <div><span>TRADE FREQUENCY</span><span>OWNER MAY SHAPE / PROTOCOL BOUND</span></div>
            <div><span>ALLOCATION</span><span>OWNER MAY SHAPE / PROTOCOL BOUND</span></div>
            <div><span>REBALANCING</span><span>OWNER MAY SHAPE</span></div>
            <div><span>TAKE PROFIT</span><span>OWNER MAY SHAPE</span></div>
            <div><span>FOUR ASSETS</span><span>FIXED AT BIRTH</span></div>
            <div><span>TRACTOR AUTHORIZATION</span><span>OWNER REVOCABLE WHERE IMPLEMENTED</span></div>
            <div><span>WITHDRAWAL LIMITS</span><span>PROTOCOL LAW</span></div>
            <div><span>TIME BETWEEN EXITS</span><span>PROTOCOL LAW</span></div>
            <div><span>SECURITY RULES</span><span>PROTOCOL LAW</span></div>
          </div>

          <div className="wpEquation">
            OWNER = STRATEGY CONTROL / PROTOCOL = SECURITY CONTROL / TRACTOR = DELEGATED EXECUTION
          </div>
        </div>
      </section>

      <section id="telemetry" className="wpSection">
        <div className="wpSectionNumber">13</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">TELEMETRY</span>

          <h2>FIRST, LET THE MACHINE PROVE ITSELF</h2>

          <p>
            The first Tractor is deliberately disciplined. It follows rules rather
            than pretending to possess unlimited intelligence or inventing
            investment decisions from nowhere. We begin with a machine whose
            behavior can be described, observed, and tested.
          </p>

          <p>
            The first objective is not spectacle. It is reliable instruction-following,
            deterministic execution, and evidence. The system gathers real-world
            performance and behavioral data so strategy quality, portfolio
            response, execution reliability, and the value of greater autonomy
            can be measured rather than imagined.
          </p>

          <div className="wpGrid3">
            <div className="wpMiniCard">
              <strong>TELEMETRY</strong>
              <span>THE MACHINE LEAVES A TRACE</span>
              <p>The machine leaves a record of relevant system activity.</p>
            </div>

            <div className="wpMiniCard">
              <strong>STORAGE</strong>
              <span>SQLITE</span>
              <p>SQLite serves as the current development data layer.</p>
            </div>

            <div className="wpMiniCard">
              <strong>STRATEGIES</strong>
              <span>RESEARCHED FOUNDATIONS</span>
              <p>Strategy logic is intended to be grounded in published academic research.</p>
            </div>

            <div className="wpMiniCard">
              <strong>BEHAVIOR</strong>
              <span>OBSERVED REALITY</span>
              <p>Observed Farmer behavior becomes evidence for future design.</p>
            </div>

            <div className="wpMiniCard">
              <strong>VALIDATION</strong>
              <span>EXECUTION THAT CAN BE JUDGED</span>
              <p>Autonomous flows can be judged against outcomes that actually occurred.</p>
            </div>

            <div className="wpMiniCard">
              <strong>PROGRESSION</strong>
              <span>AUTONOMY EARNED BY EVIDENCE</span>
              <p>Greater autonomy is earned through evidence, not ambition.</p>
            </div>
          </div>

          <div className="wpEquation">
            RULES → TELEMETRY → DATA → VALIDATION → OPTIMIZATION → AUTONOMY EARNED BY EVIDENCE
          </div>
        </div>
      </section>

      <section id="robinhood" className="wpSection">
        <div className="wpSectionNumber">14</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">DEPLOYMENT</span>

          <h2>THE FARM TOUCHES THE REAL WORLD</h2>

          <p>
            dFARMERS is designed to stand where software meets actual tokenized
            real-world assets on Robinhood Chain. These are not meant to be
            decorative simulations. The Farmer&apos;s TBA is intended to hold
            and control the corresponding on-chain positions.
          </p>

          <p>
            Robinhood Chain provides the underlying environment and tokenized asset
            layer. dFARMERS builds above it: Farmer identity, TBA association,
            strategy, authorization, telemetry, and the machinery required to
            manage a portfolio through constrained autonomy.
          </p>

          <div className="wpTable">
            <div className="wpTableHeader">
              <span>LAYER</span>
              <span>FUNCTION</span>
            </div>
            <div><span>ROBINHOOD CHAIN</span><span>The chain beneath the Farmer</span></div>
            <div><span>TOKENIZED RWA ASSETS</span><span>The real-world instruments the Farmer is built to hold</span></div>
            <div><span>ERC-721 dFARMER</span><span>The identity that persists through the system</span></div>
            <div><span>ERC-6551 TBA</span><span>The account in which Farmer positions reside</span></div>
            <div><span>STRATEGY</span><span>The behavior the owner chooses</span></div>
            <div><span>TRACTOR</span><span>The machine that acts within permission</span></div>
          </div>

          <p>
            dFARMERS does not become the issuer of the underlying securities, a broker,
            or a replacement for the financial infrastructure beneath the
            assets. It is the application layer: the Farmer, the account, the
            strategy, the boundaries, and the machine that operates within them.
          </p>
        </div>
      </section>

      <section id="erc4337" className="wpSection">
        <div className="wpSectionNumber">15</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ACCOUNT ORIGIN</span>

          <h2>WE REFUSE COMPLEXITY THAT HAS NOT EARNED ITS PLACE</h2>

          <p>
            ERC-4337 was considered because sophisticated account abstraction is
            undeniably powerful. But architecture should not accumulate
            machinery simply because machinery exists. For the present proof
            of concept, its additional capabilities are not required.
          </p>

          <p>
            ERC-6551 already gives the Farmer the account relationship it needs. The
            deployed TBA implementation and authorization layer can define the
            boundaries Tractor requires. The simpler architecture is therefore
            the honest architecture for this stage.
          </p>

          <p>
            We will not confuse sophistication with progress. Another abstraction layer
            may become valuable later—potentially S2—when operational demands
            justify it. Until then, ERC-721, ERC-6551, authorization, and Tractor
            are enough to make the machine real.
          </p>

          <div className="wpEquation">
            CURRENT ARCHITECTURE = ERC-721 + ERC-6551 TBA + AUTHORIZATION LAYER + TRACTOR
          </div>
        </div>
      </section>

      <section id="risk" className="wpSection">
        <div className="wpSectionNumber">16</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">SYSTEM CHARACTER</span>

          <h2>THIS IS A PORTFOLIO, NOT A WAGER</h2>

          <p>
            dFARMERS is built as an automated portfolio system, not a discrete wager.
            That distinction does not abolish risk. Assets can fall. Strategies
            can fail. Execution can disappoint. Nothing in the architecture
            guarantees an outcome, and the machine is not designed to pretend
            otherwise.
          </p>

          <p>
            A Farmer is an ongoing portfolio governed by allocation, execution, and
            risk-management rules. Its existence is continuous. Its risk is
            continuous. It is not constructed around a single uncertain event
            and the momentary thrill of being right or wrong.
          </p>

          <p>
            The machine is surrounded by boundaries: a defined asset universe,
            allocation rules, transaction restrictions, trading-frequency limits,
            liquidation controls, and withdrawal constraints. Those boundaries
            are not ornamental. They are the architecture of restraint.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>dFARMER</strong>
              <span>PORTFOLIO IDENTITY</span>
              <p>The Farmer&apos;s persistent identity.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TBA</strong>
              <span>ACCOUNT + ENFORCEMENT</span>
              <p>The Farmer&apos;s economic home and execution boundary.</p>
            </div>

            <div className="wpMiniCard">
              <strong>FOUR ASSETS</strong>
              <span>PORTFOLIO</span>
              <p>The world assigned to the Farmer at generation, subject to regional access.</p>
            </div>

            <div className="wpMiniCard">
              <strong>TRACTOR</strong>
              <span>AUTOMATED OPERATOR</span>
              <p>The machine operating between owner intent and protocol law.</p>
            </div>
          </div>

          <div className="wpEquation">
            dFARMER = IDENTITY / TBA = ACCOUNT / ASSETS = PORTFOLIO / TRACTOR / SHADOW = OPERATOR
          </div>
        </div>
      </section>

      <section id="limitations" className="wpSection">
        <div className="wpSectionNumber">17</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">BOUNDARIES</span>

          <h2>THE STANDARD IS THE LANGUAGE; THE PROTOCOL IS THE LAW</h2>

          <p>
            Standards provide vocabulary, not the soul of a system. ERC-721 defines the
            non-fungible identity. ERC-6551 defines Token-Bound Accounts. Neither
            standard, by itself, creates dFARMERS strategy, generation,
            four-asset assignment, automatic capital allocation, withdrawals,
            Tractor authorization, telemetry, or autonomous behavior.
          </p>

          <p>
            Those characteristics belong to the implementation: the contracts, TBA,
            generation mechanism, authorization logic, execution infrastructure,
            and supporting systems. Their security is therefore not a poetic
            property of the idea. It must be earned by the deployed code.
          </p>

          <p>
            An ERC-6551 TBA alone promises none of the system&apos;s higher-order behavior.
            Trading, withdrawal, authorization, and autonomy must be enforced
            by the deployed account and protocol architecture. The code must
            carry the weight of the manifesto.
          </p>

          <div className="wpEquation">
            STANDARD = INFRASTRUCTURE / PROTOCOL = IMPLEMENTATION
          </div>
        </div>
      </section>

      <section id="conclusion" className="wpSection wpConclusion">
        <div className="wpSectionNumber">18</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">THE LAST WORD</span>

          <h2>THE FARMER IS THE MACHINE</h2>

          <p>
            dFARMERS proposes something deliberately stranger than a conventional NFT:
            a programmable portfolio identity composed of ERC-721 identity,
            ERC-6551 account infrastructure, DERP-engaged generation, four fixed
            assets, capital, configurable strategy, protocol law, and delegated
            autonomous execution.
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
            CAPITAL TAKES ROOT
            →
            OWNER STRATEGY
            →
            TRACTOR
            →
            AUTHORIZED EXECUTION
          </div>

          <p>
            ERC-721 answers the first question: who is this Farmer? ERC-6551 answers the
            second: where does its economic life reside? DERP enters the birth
            process; entropy gives the Farmer traits and personality; that state
            resolves the four underlying assets that define its fixed universe.
          </p>

          <p>
            Mint capital becomes the Farmer&apos;s first portfolio. Afterward, its owner
            may change strategy and operating parameters without rewriting its
            four-asset origin. Tractor watches and acts; the TBA and protocol
            authorization layer decide what is actually allowed to happen.
          </p>

          <p>
            The first machine is intentionally constrained. Its strategies are defined.
            Its execution can be observed. Its events can be recorded. That data
            becomes the beginning of a scientific feedback loop: measure what
            the Farmer does, learn what the architecture proves, and let evidence
            determine whether greater autonomy has been earned.
          </p>

          <p>
            The ambition is not to build a black box and call it intelligent. The
            ambition is to build a machine whose capabilities can grow because
            its behavior is measurable: deterministic execution first, telemetry
            and validation second, increasingly sophisticated autonomy only when
            evidence says the system is ready.
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
<Footer />
    </main>
  );
}