"use client";

export default function Terms() {
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

        <h1>TERMS OF USE</h1>

        <p>
          THESE TERMS GOVERN YOUR ACCESS TO AND USE OF THE dFARMERS
          PLATFORM, WEBSITE, SOFTWARE, AND ASSOCIATED SERVICES.
        </p>
      </section>


      <section className="legalContent">

        <div className="legalNotice">
          <strong>PLEASE READ THESE TERMS CAREFULLY</strong>
          <p>
            BY ACCESSING OR USING dFARMERS, YOU ACKNOWLEDGE THAT YOU
            HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.
            IF YOU DO NOT AGREE, DO NOT USE THE PLATFORM.
          </p>
        </div>


        <article className="legalSection">
          <span>01</span>
          <h2>ACCEPTANCE OF TERMS</h2>
          <p>
            These Terms of Use govern your access to and use of dFARMERS,
            including its website, decentralized applications, smart
            contracts, Farmer NFTs, portfolio systems, interfaces, and
            related services.
          </p>
          <p>
            By accessing or using the platform, you agree to these Terms
            and any future amendments or updates posted by dFARMERS.
          </p>
        </article>


        <article className="legalSection">
          <span>02</span>
          <h2>ELIGIBILITY</h2>
          <p>
            You must be legally permitted to use blockchain-based digital
            asset services in your jurisdiction to participate in dFARMERS.
          </p>
          <p>
            You are responsible for determining whether your participation
            is lawful under the laws and regulations applicable to you.
          </p>
        </article>


        <article className="legalSection">
          <span>02A</span>
          <h2>REGIONAL ASSET ELIGIBILITY</h2>
          <p>
            Availability of supported tokenized stock assets is jurisdiction-
            dependent. Stock positions are not available to every minter or in
            every region. You are responsible for determining whether applicable
            assets and services are legally available to you.
          </p>
          <p>
            Where supported tokenized stock assets are legally and technically
            available in the minter's region, the applicable Farmer may receive
            its generated supported asset configuration. Where Robinhood stock
            tokens are not permitted or available in the minter's region, the
            Farmer instead receives the defined fallback allocation of
            $STONKBROKER, $DERP, and Ethereum at 33% each.
          </p>
          <p>
            dFARMERS actively monitors newly qualified regions, regulatory
            developments, and amendments to applicable laws and rules that may
            change the availability of supported tokenized stock assets.
            Monitoring does not constitute a representation that any asset is
            available or lawful in a particular jurisdiction.
          </p>
        </article>


        <article className="legalSection">
          <span>03</span>
          <h2>FARMER NFTs</h2>
          <p>
            Farmer NFTs represent digital assets associated with the
            dFARMERS ecosystem. A Farmer may receive randomized
            characteristics, including a trading personality and trading
            strategy.
          </p>
          <p>
            Ownership of a Farmer NFT does not guarantee ownership of,
            rights to, or profits from any underlying asset or portfolio.
          </p>
        </article>


        <article className="legalSection">
          <span>04</span>
          <h2>FARMER PERSONALITIES</h2>
          <p>
            Farmer personalities are generated using the DERP protocol and
            are associated with research-based investment methodologies.
          </p>
          <p>
            Personality assignments are generated by the protocol and may
            not be changed, exchanged, or selected by the user unless the
            platform specifically provides such functionality.
          </p>
        </article>


        <article className="legalSection">
          <span>05</span>
          <h2>TRADING STRATEGIES</h2>
          <p>
            Farmer strategies determine programmed approaches to managing
            capital associated with a Farmer.
          </p>
          <p>
            Strategies may include accumulation, profit harvesting,
            compounding, scheduled deployment, portfolio rotation, or
            concentrated allocation.
          </p>
        </article>


        <article className="legalSection">
          <span>06A</span>
          <h2>SHADOW / TRACTOR AUTONOMOUS EXECUTION</h2>
          <p>
            Shadow is dFARMERS' delegated autonomous execution service and is
            represented in the Farm interface as the Tractor. Shadow is designed
            to actually initiate and submit permitted portfolio transactions on
            behalf of a Farmer's ERC-6551 Token-Bound Account. It is therefore
            an execution mechanism, not merely an observer or recommendation
            system.
          </p>
          <p>
            Shadow may monitor portfolio state, evaluate the Farmer's configured
            strategy, determine when a permitted action should occur, and submit
            the corresponding transaction. Shadow does not receive unrestricted
            ownership or control of the Farmer's assets. The Farmer's TBA and
            applicable protocol authorization layer are intended to constrain
            execution according to permitted assets, approved contracts,
            allocation rules, transaction limits, trading-frequency restrictions,
            liquidation restrictions, and other protocol-defined controls.
          </p>
          <p>
            A transaction submitted by Shadow may therefore be rejected where it
            falls outside the applicable authorization or policy boundaries.
            The owner retains control of the Farmer and may revoke Shadow's
            authorization where the deployed protocol provides that mechanism.
            The current implementation is rule-driven; future system
            sophistication may evolve as operational and performance data are
            collected.
          </p>
        </article>


        <article className="legalSection">
          <span>07</span>
          <h2>CAPITAL & TREASURY</h2>
          <p>
            dFARMERS may receive capital from treasury resources,
            mining operations, secondary-market distributions, or other
            sources designated by the project.
          </p>
          <p>
            Capital distribution is subject to the project's operating
            architecture, available resources, applicable fees, network
            conditions, and other factors.
          </p>
        </article>


        <article className="legalSection">
          <span>08</span>
          <h2>BLOCKCHAIN TRANSACTIONS</h2>
          <p>
            Blockchain transactions are generally irreversible. You are
            solely responsible for verifying wallet addresses, transaction
            amounts, network selections, and transaction details before
            signing.
          </p>
          <p>
            dFARMERS is not responsible for transactions sent to an
            incorrect address or transactions otherwise authorized by you.
          </p>
        </article>


        <article className="legalSection">
          <span>09</span>
          <h2>WALLETS & SECURITY</h2>
          <p>
            You are responsible for maintaining the security of your wallet,
            private keys, seed phrases, authentication credentials, and
            connected devices.
          </p>
          <p>
            dFARMERS will never require you to disclose your private key
            or recovery phrase.
          </p>
        </article>


        <article className="legalSection">
          <span>10A</span>
          <h2>PROJECT INDEPENDENCE & THIRD-PARTY RELATIONSHIPS</h2>
          <p>
            dFARMERS is an independently developed and operated project. DERP
            FARMS has no relationship, affiliation, partnership, endorsement,
            ownership connection, or other formal association with Stonkpit,
            Pitboys, Derpboys, the Stonkbrokers ecosystem, or Robinhood.
          </p>
          <p>
            References to third-party assets, infrastructure, networks, brands,
            or ecosystems describe the applicable technical or asset relationship
            and do not imply sponsorship, endorsement, ownership, or organizational
            affiliation. Where dFARMERS interacts with third-party services,
            those interactions remain subject to the terms, restrictions, and
            availability imposed by the applicable third party.
          </p>
        </article>


        <article className="legalSection">
          <span>10</span>
          <h2>THIRD-PARTY SERVICES</h2>
          <p>
            dFARMERS may interact with third-party blockchain networks,
            wallets, marketplaces, exchanges, bridges, data providers,
            infrastructure providers, and other services.
          </p>
          <p>
            Third-party services may have their own terms, fees,
            restrictions, outages, and risks. Your use of those services
            is subject to their applicable terms.
          </p>
        </article>


        <article className="legalSection">
          <span>11</span>
          <h2>FEES & NETWORK COSTS</h2>
          <p>
            Users may incur blockchain network fees, marketplace fees,
            transaction fees, bridge fees, or other third-party costs when
            interacting with dFARMERS or associated services.
          </p>
          <p>
            Fees may change without notice based on network conditions,
            service providers, or platform requirements.
          </p>
        </article>


        <article className="legalSection">
          <span>12</span>
          <h2>INTELLECTUAL PROPERTY</h2>
          <p>
            Unless otherwise stated, the dFARMERS name, branding,
            interface design, graphics, software, written materials, and
            other original platform content are owned by or licensed to
            the project.
          </p>
          <p>
            You may not reproduce, modify, distribute, or commercially
            exploit protected platform content without appropriate
            authorization.
          </p>
        </article>


        <article className="legalSection">
          <span>13</span>
          <h2>PROHIBITED USE</h2>
          <p>
            You may not use dFARMERS to violate applicable laws,
            regulations, sanctions, intellectual property rights, or the
            rights of other users.
          </p>
          <p>
            You may not attempt to interfere with, exploit, manipulate,
            reverse engineer, disrupt, or compromise the platform,
            smart contracts, infrastructure, or other users.
          </p>
        </article>


        <article className="legalSection">
          <span>14</span>
          <h2>MODIFICATIONS & AVAILABILITY</h2>
          <p>
            dFARMERS may modify, suspend, discontinue, or replace
            portions of the platform, its features, strategies, interfaces,
            or supporting infrastructure at any time.
          </p>
          <p>
            No guarantee is made that the platform or any particular
            feature will remain available indefinitely.
          </p>
        </article>


        <article className="legalSection">
          <span>14A</span>
          <h2>NO INVESTMENT ADVICE OR GUARANTEE</h2>
          <p>
            dFARMERS is not a guarantee of profit, return, preservation of
            capital, or successful trading performance. Strategy descriptions,
            research references, Farmer personalities, portfolio behavior, and
            automated execution are informational and technical descriptions of
            the platform and are not individualized investment, financial, legal,
            or tax advice.
          </p>
          <p>
            Digital assets and tokenized assets involve substantial risk,
            including volatility, liquidity risk, smart-contract risk,
            counterparty risk, regulatory risk, technological failure, and the
            possibility of partial or total loss.
          </p>
        </article>


        <article className="legalSection">
          <span>16</span>
          <h2>LIMITATION OF LIABILITY</h2>
          <p>
            To the maximum extent permitted by applicable law, dFARMERS
            and its contributors, developers, operators, and affiliates
            shall not be liable for losses arising from your use of the
            platform, digital assets, blockchain networks, third-party
            services, market movements, or technical failures.
          </p>
        </article>


        <article className="legalSection">
          <span>17</span>
          <h2>INDEMNIFICATION</h2>
          <p>
            To the extent permitted by applicable law, you agree to
            indemnify and hold harmless dFARMERS and its contributors,
            developers, operators, and affiliates from claims, damages,
            liabilities, and expenses arising from your violation of these
            Terms or misuse of the platform.
          </p>
        </article>


        <article className="legalSection">
          <span>18</span>
          <h2>TERMINATION</h2>
          <p>
            Access to portions of the platform may be suspended or
            terminated where necessary to protect the platform, its users,
            its infrastructure, or to comply with applicable law.
          </p>
        </article>


        <article className="legalSection">
          <span>19</span>
          <h2>GOVERNING LAW</h2>
          <p>
            These Terms shall be interpreted and enforced according to
            the laws applicable to the project and its governing
            jurisdiction, subject to applicable conflict-of-law principles.
          </p>
        </article>


        <article className="legalSection">
          <span>20</span>
          <h2>CHANGES TO THESE TERMS</h2>
          <p>
            dFARMERS may update these Terms from time to time. Updated
            Terms become effective when published on the platform unless
            otherwise stated.
          </p>
          <p>
            Your continued use of dFARMERS after an update constitutes
            acceptance of the revised Terms.
          </p>
        </article>


        <div className="legalFinal">
          <span>dFARMERS</span>
          <strong>ONCHAIN AGRICULTURE / CONSTRAINED AUTONOMOUS EXECUTION</strong>
          <p>
            BY USING dFARMERS, YOU ACKNOWLEDGE THAT YOU HAVE READ AND
            AGREE TO THESE TERMS OF USE.
          </p>
        </div>

      </section>

    </main>
    </div>
  );
}