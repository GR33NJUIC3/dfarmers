"use client";

import "./wheatpaper.css";
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
          A Cybernetic Architecture for dFarmer Identity, Entropy-Determined
          Portfolio Formation, Token-Bound Accounts, Strategy-Controlled
          Capital, and Constrained Autonomous Execution
        </div>

        <div className="wpMeta">
          <span>VERSION 4.0</span>
          <span>2026</span>
          <span>ROBINHOOD CHAIN</span>
        </div>

        <div className="wpRule" />

        <p className="wpAbstract">
          The dFarmer is treated here not as a static collectible, but as a
          persistent computational object around which capital, information,
          ownership, and permitted action are organized. At generation, DERP
          participates in the Farmer-generation process and entropy resolves
          traits, personality, and the Farmer&apos;s four-asset portfolio
          universe. The resulting ERC-721 identity is associated with an
          ERC-6551 Token-Bound Account (TBA), which provides the Farmer&apos;s
          portfolio account. Mint capital is subsequently allocated according
          to the generated asset state. Thereafter, owner-defined strategy
          parameters determine intended behavior, while protocol policy
          determines the subset of that behavior that may actually occur.
          Tractor supplies the delegated execution mechanism within those
          boundaries.
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

          <h2>THE dFARMER AS A COMPUTATIONAL PORTFOLIO</h2>

          <p>
            The useful distinction is between identity and behavior. The ERC-721
            establishes a persistent identity and ownership relation. The
            associated ERC-6551 Token-Bound Account supplies the account through
            which the Farmer&apos;s portfolio state may be represented and acted
            upon. The NFT therefore identifies the system; it does not, by
            itself, constitute the system&apos;s entire computational behavior.
          </p>

          <p>
            The mint is consequently a state-initialization event. DERP participates
            in the generation mechanism, entropy resolves the Farmer&apos;s
            generated state, and that state determines a four-element asset
            universe. Once established, the four underlying assets are fixed;
            strategy may govern their treatment, but it does not redefine the
            domain in which the Farmer operates.
          </p>

          <p>
            Mint ETH establishes the initial capital state. If the initial capital is
            M and the allocation weights are w₁,...,wₙ, then

            ∑ᵢ wᵢ = 1,    Cᵢ = M wᵢ.

            After initialization, the owner may alter permitted strategy
            parameters. Tractor observes the resulting portfolio state,
            evaluates the configured rules, and submits an action only when
            that action satisfies the protocol&apos;s authorization boundary.
          </p>

          <p>
            The architecture is therefore a separation of identity, account,
            portfolio domain, intention, policy, and execution. This separation
            matters because an instruction to act and an authority to act are
            not the same thing. In symbolic form:

            F = (I, A, U, S, P, X)

            where I is identity, A the account, U the permitted asset universe,
            S the strategy, P the protocol policy, and X the executed action.
          </p>

          <div className="wpEquation">
            F = (I, A, U, S, P, X)
          </div>
        </div>
      </section>

      <section id="architecture" className="wpSection">
        <div className="wpSectionNumber">01</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">SYSTEM ARCHITECTURE</span>

          <h2>A SYSTEM OF STATE, CONTROL, AND FEEDBACK</h2>

          <p>
            The architecture can be read as a chain of transformations. Identity
            establishes continuity; the TBA establishes the account; generation
            establishes the asset domain; strategy establishes intended
            behavior; policy establishes permissible behavior; and Tractor
            translates the permitted decision into an observable transaction.
            The resulting system is naturally described as a feedback system:

            state → observation → decision → policy check → action → new state.
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
            IDENTITY → ACCOUNT → GENERATION → ASSET UNIVERSE → STRATEGY → POLICY → EXECUTION
          </div>
        </div>
      </section>

      <section id="farmer" className="wpSection">
        <div className="wpSectionNumber">02</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">dFARMER IDENTITY</span>

          <h2>ERC-721 AS THE IDENTITY COORDINATE</h2>

          <p>
            Each dFarmer is represented by an ERC-721 token. Its principal function
            in this architecture is persistence of identity: the pair

            I = (C, N)

            where C is the collection contract and N is the token identifier,
            supplies a stable reference to the Farmer across transfers and
            state changes.
          </p>

          <p>
            The identity acts as the coordinate to which generated traits,
            personality, asset-domain information, account association,
            strategy configuration, and portfolio state are related. Ownership
            therefore changes the controlling principal without requiring the
            identity of the Farmer to be recreated.
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

          <h2>THE TOKEN-BOUND ACCOUNT AS PORTFOLIO STATE</h2>

          <p>
            ERC-6551 provides the account relationship through which an NFT may be
            associated with a Token-Bound Account. In dFARMERS, the TBA is
            intended to function as the Farmer&apos;s portfolio account. This
            creates a useful separation:

            identity answers “which Farmer?”;
            the TBA answers “where is its portfolio state?”.
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
            ERC-6551 itself does not define dFARMERS trading rules, authorization
            policy, withdrawal limits, or autonomous execution. Those properties
            belong to the deployed TBA implementation, protocol contracts, and
            authorization layer. The standard establishes the account model;
            the implementation establishes the behavior.
          </p>

          <p>
            The TBA therefore occupies an important control boundary. Tractor may
            propose or submit an action, but submission is not equivalent to
            authority. The intended relationship is:

            Tractor authority ⊆ Farmer permissions ⊆ protocol policy.

            The account and protocol determine whether the proposed transition
            is admissible.
          </p>

          <div className="wpEquation">
            ERC-721 IDENTITY → ERC-6551 ACCOUNT → PORTFOLIO STATE
          </div>
        </div>
      </section>

      <section id="generation" className="wpSection">
        <div className="wpSectionNumber">04</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">FARMER GENERATION</span>

          <h2>GENERATION, ENTROPY, AND INITIAL CONDITIONS</h2>

          <p>
            DERP is engaged in the Farmer-generation mechanism as an input to the
            generation process. Let R denote the relevant entropy state and G
            the generation function. Then:

            G(R) = (T, P, U)

            where T denotes generated traits, P the generated personality,
            and U the resulting asset universe.
          </p>

          <p>
            The important invariant is that the generated asset domain is not a
            strategy variable. Once U₀ has been established at generation,

            Uₜ = U₀   for subsequent t,

            subject to the actual deployed protocol rules. The owner may alter
            permitted behavior inside U, but does not redefine U through the
            strategy interface.
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
            DERP → ENTROPY STATE → GENERATED STATE → PERSONALITY → ASSET UNIVERSE
          </div>
        </div>
      </section>

      <section id="assets" className="wpSection">
        <div className="wpSectionNumber">05</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">FOUR-ASSET UNIVERSE</span>

          <h2>THE ASSET UNIVERSE AS A STATE-SPACE BOUNDARY</h2>

          <p>
            Let the Farmer&apos;s generated asset universe be

            U = &#123;a₁, a₂, a₃, a₄&#125;.

            The four elements are the domain over which portfolio allocation
            and strategy may operate. The distinction between the universe and
            the allocation is fundamental: U describes what may be represented;
            the weights w describe how capital is distributed within U.
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
            Thus the system separates selection from control. Generation establishes
            the domain U; strategy determines a permitted state within that
            domain. This prevents an owner strategy from silently redefining
            the Farmer&apos;s underlying identity or generated asset class.
          </p>

          <div className="wpEquation">
            PERSONALITY → U = &#123;a₁,a₂,a₃,a₄&#125; → FIXED ASSET DOMAIN
          </div>
        </div>
      </section>

      <section id="regional" className="wpSection">
        <div className="wpSectionNumber">05A</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">REGIONAL ASSET ELIGIBILITY</span>

          <h2>ELIGIBILITY AS AN ENVIRONMENTAL CONSTRAINT</h2>

          <p>
            The asset universe is also conditional upon external eligibility. Let
            E(a,r) ∈ &#123;0,1&#125; denote whether asset a is available to a participant
            in region r. The effective universe is therefore

            U(r) = &#123;a ∈ U : E(a,r)=1&#125;.

            The system must not treat an unavailable asset as though it were
            executable merely because it exists in the general universe.
          </p>

          <p>
            Where the applicable stock-token assets are eligible, the generated
            four-asset model may be used. Where they are unavailable or not
            permitted, the specified fallback is

            Ufallback = &#123;$STONKBROKER, $DERP, ETH&#125;

            with equal weights

            w₁ = w₂ = w₃ = 1/3 ≈ 33.333%.

            This satisfies the required normalization ∑wᵢ = 1.
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
                The Farmer receives $STONKBROKER, $DERP, and Ethereum with normalized
                equal weights of 1/3 each when the applicable stock tokens are
                unavailable or not permitted.
              </p>
            </div>
          </div>

          <div className="wpEquation">
            NON-ELIGIBLE REGION = &#123;$STONKBROKER, $DERP, ETH&#125; ; wᵢ = 1/3
          </div>

          <p>
            Regional eligibility is consequently part of the initial state function.
            The portfolio cannot be described independently of the environment
            in which its permitted assets may be accessed. This is not merely a
            legal qualification; it is a system constraint on the reachable
            state space.
          </p>

          <p>
            Changes in regional eligibility may therefore change the set of reachable
            portfolio states. Any expansion of supported regions or assets
            remains dependent upon the applicable deployment, infrastructure,
            and rules governing those assets.
          </p>
        </div>
      </section>

      <section id="strategy" className="wpSection">
        <div className="wpSectionNumber">06</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">STRATEGY ENGINE</span>

          <h2>STRATEGY AS A CONTROL FUNCTION</h2>

          <p>
            Strategy is a control function over an already-defined state space.
            If xₜ denotes portfolio state, yₜ the observed environment, and θ
            the owner-configured parameters, the intended control may be written

            uₜ = S(xₜ, yₜ; θ).

            The strategy does not create the asset universe; it determines
            permitted behavior within it.
          </p>

          <p>
            The Farmer may begin with an assigned strategy and subsequently accept
            owner configuration within the permitted parameter space. The
            important distinction is between changing θ and changing the
            protocol itself: the former is configuration; the latter is outside
            ordinary strategy control.
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
            The strategies are intended to be grounded in published portfolio
            methodologies and expressed as explicit rules. The present system
            should therefore be understood as constrained automation, not as a
            claim that an unrestricted artificial intelligence independently
            invents investment policy.
          </p>

          <div className="wpEquation">
            uₜ = S(xₜ,yₜ;θ),    subject to    uₜ ∈ P
          </div>
        </div>
      </section>

      <section id="allocation" className="wpSection">
        <div className="wpSectionNumber">07</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">CAPITAL ALLOCATION</span>

          <h2>CAPITAL ALLOCATION AS STATE INITIALIZATION</h2>

          <p>
            Minting establishes an initial capital state. Let M be the capital
            available for allocation and wᵢ the weight assigned to asset aᵢ.
            Then

            Cᵢ = M wᵢ,      ∑ᵢ wᵢ = 1.

            The resulting initial portfolio is

            P₀ = &#123;(aᵢ, Cᵢ)&#125;.
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
            M → &#123;a₁,a₂,a₃,a₄&#125; → wᵢ → Cᵢ = M wᵢ → P₀
          </div>

          <p>
            After initialization, additional capital changes the portfolio state
            according to the deployed funding and execution rules. In general,

            xₜ₊₁ = f(xₜ, mₜ, uₜ, εₜ),

            where mₜ is capital introduced at time t, uₜ is the permitted
            control action, and εₜ represents external execution conditions.
          </p>
        </div>
      </section>

      <section id="funding" className="wpSection">
        <div className="wpSectionNumber">08</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">MINT CAPITAL & FUNDING</span>

          <h2>CAPITAL AS A DYNAMIC STATE VARIABLE</h2>

          <p>
            The mint therefore performs two coupled operations: it establishes
            identity and initializes capital. Generation determines the asset
            domain; allocation maps available mint capital onto that domain.
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

          <h2>TRACTOR AS THE EXECUTION ELEMENT OF A FEEDBACK LOOP</h2>

          <p>
            Tractor is the delegated execution mechanism of the system. Its purpose
            is not to possess unrestricted authority, but to translate an
            admissible strategy decision into an attempted state transition.
          </p>

          <p>
            At time t, Tractor observes portfolio state xₜ and relevant information
            yₜ. It evaluates the configured strategy and produces an intended
            action uₜ. The action is then subjected to protocol policy before
            execution. Thus observation precedes action, and action remains
            subordinate to authority.
          </p>

          <p>
            Let P denote the set of protocol-permitted actions. Then the executable
            action is

            Xₜ = uₜ,  if uₜ ∈ P
                 ∅,   otherwise.

            The significance is structural: a strategy can produce an
            intention that the protocol refuses to realize. Autonomy is thus
            bounded by the set of reachable states defined by policy.
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
            Xₜ = S(xₜ,yₜ;θ) ∩ P
          </div>

          <p>
            The owner remains the controlling principal for the Farmer, while Tractor
            operates through delegated permissions that may be revoked according
            to the deployed implementation. The architecture is therefore one
            of constrained delegation rather than unrestricted autonomous
            custody.
          </p>
        </div>
      </section>

      <section id="withdrawals" className="wpSection">
        <div className="wpSectionNumber">10</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">WITHDRAWAL ARCHITECTURE</span>

          <h2>WITHDRAWAL AS A CONSTRAINED STATE TRANSITION</h2>

          <p>
            Withdrawal is another state transition governed by policy. If Bᵢ denotes
            the balance of position i, the stated per-position constraint is

            Wᵢ ≤ 0.5 Bᵢ.

            If tₗ denotes the last withdrawal time, the stated cooldown requires

            t - tₗ ≥ 365 days.
          </p>

          <div className="wpGrid2">
            <div className="wpMiniCard">
              <strong>12 MONTHS</strong>
              <span>WITHDRAWAL COOLDOWN</span>
              <p>
                A withdrawal is admissible only after the stated twelve-month interval has elapsed.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>MAXIMUM PER POSITION</span>
              <p>
                For each position, the withdrawal amount satisfies Wᵢ ≤ 0.5Bᵢ.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>50%</strong>
              <span>REMAINS IN EACH POSITION</span>
              <p>
                Under a maximum withdrawal, the remaining balance satisfies Bᵢ' ≥ 0.5Bᵢ.
              </p>
            </div>

            <div className="wpMiniCard">
              <strong>PROTOCOL</strong>
              <span>NOT OWNER CONFIGURABLE</span>
              <p>
                Cooldown and withdrawal limits are policy constraints, not ordinary strategy parameters.
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
            Wᵢ ≤ 0.5Bᵢ  AND  (t - tₗ) ≥ 365 days
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

          <h2>POLICY AS A CONTROL BOUNDARY</h2>

          <p>
            Once an NFT can be associated with capital and delegated execution, the
            relevant security problem becomes one of controlling reachable
            state transitions. The system therefore separates strategy
            configuration from the authority required to execute a transition.
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
            The security objective is not to make Tractor incapable of error. It is to
            ensure that an erroneous or unauthorized instruction does not imply
            authority. Policy must remain an independent boundary around the
            execution mechanism.
          </p>

          <div className="wpEquation">
            A_Tractor ⊆ A_Farmer ⊆ A_Protocol
          </div>
        </div>
      </section>

      <section id="owner" className="wpSection">
        <div className="wpSectionNumber">12</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">OWNER CONFIGURATION</span>

          <h2>INTENTION WITHOUT AUTHORITY ESCALATION</h2>

          <p>
            Owner configuration changes the parameter vector θ governing strategy.
            Such configuration is therefore a change in intended behavior, not
            a transfer of protocol authority. The protocol boundary remains
            external to θ.
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
            OWNER → θ (INTENTION) / PROTOCOL → P (AUTHORITY) / TRACTOR → X (EXECUTION)
          </div>
        </div>
      </section>

      <section id="telemetry" className="wpSection">
        <div className="wpSectionNumber">13</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">TELEMETRY & VALIDATION</span>

          <h2>OBSERVATION BEFORE GREATER AUTONOMY</h2>

          <p>
            The present Tractor implementation is deliberately rule-driven. This is
            not a deficiency in terminology; it is an explicit systems
            decision. The first requirement of an autonomous control system is
            that its behavior be observable and its permissible actions
            describable.
          </p>

          <p>
            The system therefore begins with a measurable loop:

            observation → rule evaluation → permitted action → observation.

            Telemetry supplies the record from which the behavior of that loop
            can be evaluated. If T is the telemetry set, then measured behavior
            B may be regarded as a function of T, and strategy quality can be
            evaluated against observed outcomes rather than asserted in advance.
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
            RULES → OBSERVATION → TELEMETRY → VALIDATION → REFINEMENT → GREATER AUTONOMY
          </div>
        </div>
      </section>

      <section id="robinhood" className="wpSection">
        <div className="wpSectionNumber">14</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">DEPLOYMENT & ASSET LAYER</span>

          <h2>THE ASSET LAYER AND THE APPLICATION BOUNDARY</h2>

          <p>
            The application layer is designed around tokenized real-world assets
            available through the supported chain environment. dFARMERS does
            not thereby become the issuer of every underlying instrument; it
            organizes identity, account association, portfolio logic, policy,
            and delegated execution around supported assets.
          </p>

          <p>
            The architectural boundary can therefore be stated as

            ASSET INFRASTRUCTURE → APPLICATION STATE → CONTROL LOGIC → EXECUTION.

            The underlying asset layer supplies the instruments; dFARMERS
            supplies the Farmer abstraction and the control system surrounding
            them.
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
            The precise scope of the application should remain distinct from the
            underlying asset infrastructure. The protocol description here is
            concerned with the Farmer identity, portfolio account, strategy,
            policy, telemetry, and execution architecture; the rights,
            availability, and mechanics of any underlying instrument remain
            properties of their respective infrastructure.
          </p>
        </div>
      </section>

      <section id="erc4337" className="wpSection">
        <div className="wpSectionNumber">15</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">ACCOUNT ABSTRACTION</span>

          <h2>WHY ADDITIONAL ABSTRACTION IS NOT YET REQUIRED</h2>

          <p>
            ERC-4337 represents an additional abstraction mechanism. The engineering
            question is therefore not whether the mechanism is sophisticated,
            but whether the present system requires the capability it provides.
            For the current architecture, the required account relationship is
            already supplied through ERC-6551 and the deployed TBA model.
          </p>

          <p>
            Introducing another abstraction layer before its capabilities are
            necessary would enlarge the system without enlarging its required
            state space. The present composition is therefore intentionally
            economical:

            ERC-721 + ERC-6551 TBA + authorization + Tractor.
          </p>

          <p>
            This is an engineering choice rather than a rejection of account
            abstraction in principle. If future requirements introduce a
            capability that materially improves the system, the abstraction
            boundary can be reconsidered. Until then, unnecessary machinery is
            avoided.
          </p>

          <div className="wpEquation">
            CURRENT ARCHITECTURE = ERC-721 + ERC-6551 TBA + POLICY + TRACTOR
          </div>
        </div>
      </section>

      <section id="risk" className="wpSection">
        <div className="wpSectionNumber">16</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">MARKET RISK & SYSTEM CLASSIFICATION</span>

          <h2>PORTFOLIO DYNAMICS UNDER UNCERTAINTY</h2>

          <p>
            The system is structured as a portfolio process rather than as a single
            discrete event. That structural distinction does not remove market
            risk. If portfolio value is

            Vₜ = ∑ᵢ qᵢ,ₜ pᵢ,ₜ,

            then changes in prices, quantities, execution conditions, and
            strategy behavior can all alter Vₜ. No architecture of rules
            guarantees a favorable result.
          </p>

          <p>
            A Farmer instead represents a continuing state whose evolution is governed
            by portfolio rules. Its relevant questions are therefore questions
            of state, exposure, allocation, execution, and risk rather than the
            outcome of a single uncertain event.
          </p>

          <p>
            These rules define a bounded state space. The objective is not to eliminate
            uncertainty, which cannot be done, but to constrain the set of
            transitions through which the system may respond to uncertainty.
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
            F = IDENTITY + ACCOUNT + ASSET DOMAIN + STRATEGY + POLICY + EXECUTION
          </div>
        </div>
      </section>

      <section id="limitations" className="wpSection">
        <div className="wpSectionNumber">17</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">LIMITATIONS</span>

          <h2>STANDARD, IMPLEMENTATION, AND BEHAVIOR</h2>

          <p>
            ERC-721 and ERC-6551 define infrastructure primitives. Neither standard,
            by itself, defines the dFARMERS generation function, asset-domain
            rules, allocation mechanism, strategy engine, withdrawal policy,
            Tractor authorization, telemetry system, or autonomous behavior.
          </p>

          <p>
            Those characteristics belong to the deployed implementation. Consequently,
            claims about security, enforcement, or autonomous behavior must be
            evaluated against the actual contracts, account implementation,
            authorization logic, execution infrastructure, and operational
            controls rather than inferred from the standards alone.
          </p>

          <p>
            The existence of a TBA therefore does not imply a particular policy. The
            account relationship and the behavioral policy are separate
            propositions and must be verified independently.
          </p>

          <div className="wpEquation">
            STANDARD ≠ POLICY / STANDARD ≠ STRATEGY / STANDARD ≠ EXECUTION
          </div>
        </div>
      </section>

      <section id="conclusion" className="wpSection wpConclusion">
        <div className="wpSectionNumber">18</div>
        <div className="wpSectionBody">
          <span className="wpSectionLabel">CONCLUSION</span>

          <h2>THE dFARMER AS A CONSTRAINED FEEDBACK SYSTEM</h2>

          <p>
            The dFarmer may be understood as a computational portfolio primitive whose
            state is distributed across identity, account, generated asset
            domain, capital, strategy, policy, and execution. Its significance
            lies not in any single component, but in the controlled relation
            among them.
          </p>

          <div className="wpEquation">
            STATE₀ = (IDENTITY, ACCOUNT, U, CAPITAL)
            →
            OBSERVATION
            →
            STRATEGY
            →
            POLICY
            →
            EXECUTION
            →
            STATEₜ₊₁
          </div>

          <p>
            The ERC-721 establishes identity. The TBA establishes the associated
            account. DERP participates in generation; entropy resolves the
            generated state; personality and generation rules determine the
            asset domain. These operations establish the initial conditions from
            which later portfolio behavior proceeds.
          </p>

          <p>
            Mint capital is mapped into the generated asset domain according to the
            applicable allocation rule. The owner may modify permitted strategy
            parameters without redefining that domain. Tractor then participates
            in the feedback loop, while the TBA and policy layer determine which
            proposed transitions are admissible.
          </p>

          <p>
            The present system is therefore an instance of constrained autonomy. Its
            rules are explicit, its execution is observable, and its events can
            be measured. Greater autonomy should follow evidence rather than
            precede it: a system should first establish that its feedback loop
            is measurable before granting that loop greater freedom.
          </p>

          <p>
            The intended progression is consequently:
            <br />
            <br />
            deterministic rules → measurement → validation → refinement
            → greater autonomy.
            <br />
            <br />
            The governing principle is simple: autonomy is safest when the
            system can observe the consequences of its own actions.
          </p>

          <div className="wpEquation">
            OBSERVATION → DECISION → POLICY → EXECUTION → OBSERVATION
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