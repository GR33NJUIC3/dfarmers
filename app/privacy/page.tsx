"use client";

export default function Privacy() {
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

        <h1>PRIVACY POLICY</h1>

        <p>
          THIS POLICY DESCRIBES HOW dFARMERS MAY COLLECT, USE, STORE,
          AND PROTECT INFORMATION ASSOCIATED WITH YOUR USE OF THE PLATFORM.
        </p>
      </section>


      <section className="legalContent">

        <div className="legalNotice">
          <strong>PRIVACY MATTERS</strong>
          <p>
            dFARMERS IS DESIGNED AROUND BLOCKCHAIN TECHNOLOGY. WALLET
            ADDRESSES, TOKEN-BOUND ACCOUNTS, AND ONCHAIN TRANSACTIONS ARE
            GENERALLY PUBLIC AND MAY BE PERMANENTLY RECORDED ON A BLOCKCHAIN.
          </p>
        </div>


        <article className="legalSection">
          <span>01</span>
          <h2>INFORMATION WE COLLECT</h2>
          <p>
            Depending on how you interact with dFARMERS, information
            may include wallet addresses, blockchain transaction data,
            Farmer NFT information, Token-Bound Account information,
            portfolio and strategy configuration data, and information
            voluntarily provided through the platform.
          </p>
          <p>
            We may also collect basic technical information necessary to
            operate, secure, and improve the website and application,
            including information associated with autonomous execution,
            transaction status, and system telemetry where applicable.
          </p>
        </article>


        <article className="legalSection">
          <span>02</span>
          <h2>BLOCKCHAIN INFORMATION</h2>
          <p>
            Blockchain networks are public by design. Wallet addresses,
            Token-Bound Account addresses, transactions, token balances,
            NFT ownership, asset movements, and related blockchain activity
            may be publicly visible through blockchain explorers and other
            third-party services.
          </p>
          <p>
            dFARMERS does not control the public nature of blockchain
            networks and cannot remove information that has already been
            permanently recorded onchain.
          </p>
        </article>


        <article className="legalSection">
          <span>03</span>
          <h2>WALLET & FARMER INFORMATION</h2>
          <p>
            When you connect a compatible wallet, dFARMERS may process
            the wallet address and associated public blockchain information
            necessary to identify your Farmer and provide platform
            functionality. The Farmer NFT serves as the Farmer's identity,
            while its associated ERC-6551 Token-Bound Account serves as its
            onchain portfolio account.
          </p>
          <p>
            dFARMERS does not request or store private keys, seed
            phrases, or wallet recovery phrases.
          </p>
        </article>


        <article className="legalSection">
          <span>04</span>
          <h2>HOW INFORMATION IS USED</h2>
          <p>
            Information may be used to operate the platform, identify
            Farmer NFTs, associate Farmers with their Token-Bound Accounts,
            display portfolio information, process platform functionality,
            maintain security, investigate technical issues, and improve
            the dFARMERS experience.
          </p>
          <p>
            Information may also be used to evaluate strategy configuration,
            transaction activity, execution outcomes, and system behavior
            for reliability, security, validation, and development purposes.
          </p>
        </article>


        <article className="legalSection">
          <span>05</span>
          <h2>SHADOW / TRACTOR TELEMETRY</h2>
          <p>
            dFARMERS may maintain telemetry relating to Shadow, the
            delegated autonomous execution service represented in the Farm
            interface as the Tractor. Shadow is designed to initiate and
            submit permitted portfolio transactions on behalf of a Farmer's
            Token-Bound Account.
          </p>
          <p>
            Telemetry may include execution requests, transaction status,
            timestamps, strategy conditions, authorization results, errors,
            system events, and other technical information necessary to
            monitor, validate, secure, and improve autonomous execution.
            Telemetry does not give Shadow unrestricted access to private
            wallet credentials.
          </p>
        </article>


        <article className="legalSection">
          <span>06</span>
          <h2>COOKIES & TECHNICAL DATA</h2>
          <p>
            dFARMERS may use cookies, local storage, analytics,
            logging, telemetry, or similar technologies to maintain
            functionality, understand platform usage, improve performance,
            monitor autonomous execution, and protect the platform.
          </p>
          <p>
            You may be able to control certain browser-based technologies
            through your browser settings.
          </p>
        </article>


        <article className="legalSection">
          <span>07</span>
          <h2>THIRD-PARTY SERVICES</h2>
          <p>
            dFARMERS may rely on third-party infrastructure including
            blockchain networks, RPC providers, wallet providers,
            analytics services, marketplaces, bridges, hosting providers,
            tokenized-asset infrastructure, and other technical services.
          </p>
          <p>
            Those providers may process information according to their
            own privacy policies and terms. Third-party infrastructure may
            also expose public blockchain information independently of DERP
            FARMS.
          </p>
        </article>


        <article className="legalSection">
          <span>08</span>
          <h2>DATA SECURITY</h2>
          <p>
            Reasonable technical and organizational measures may be used
            to protect information under our control.
          </p>
          <p>
            However, no website, application, computer system, autonomous
            execution service, or blockchain-based service can be guaranteed
            to be completely secure.
          </p>
        </article>


        <article className="legalSection">
          <span>09</span>
          <h2>DATA RETENTION</h2>
          <p>
            Information may be retained for as long as reasonably
            necessary to provide services, maintain security, comply with
            applicable obligations, resolve disputes, validate system
            behavior, and maintain legitimate business records.
          </p>
          <p>
            Information permanently recorded on public blockchains cannot
            generally be deleted or modified by dFARMERS.
          </p>
        </article>


        <article className="legalSection">
          <span>10</span>
          <h2>INFORMATION SHARING</h2>
          <p>
            dFARMERS may share information with service providers or
            infrastructure partners when reasonably necessary to operate,
            secure, maintain, validate, or improve the platform.
          </p>
          <p>
            Information may also be disclosed when required by applicable
            law, legal process, or to protect the rights, security, or
            integrity of the platform and its users.
          </p>
        </article>


        <article className="legalSection">
          <span>11</span>
          <h2>NO SALE OF PRIVATE WALLET CREDENTIALS</h2>
          <p>
            dFARMERS does not require users to provide private keys,
            seed phrases, or wallet recovery credentials.
          </p>
          <p>
            Users should never provide such credentials to dFARMERS,
            its operators, or anyone claiming to provide support.
          </p>
        </article>


        <article className="legalSection">
          <span>12</span>
          <h2>REGIONAL & THIRD-PARTY DATA CONSIDERATIONS</h2>
          <p>
            Availability of supported tokenized stock assets is
            jurisdiction-dependent. Stock-token availability may vary by
            region and may require third-party eligibility determinations.
            dFARMERS may process technical or eligibility-related
            information necessary to determine whether applicable platform
            functionality is available.
          </p>
          <p>
            dFARMERS actively monitors newly qualified regions,
            regulatory developments, and amendments to applicable laws and
            rules that may affect supported asset availability. Monitoring
            does not guarantee availability in any particular jurisdiction.
          </p>
        </article>


        <article className="legalSection">
          <span>13</span>
          <h2>PROJECT INDEPENDENCE</h2>
          <p>
            dFARMERS is independently developed and operated. dFARMERS
            has no relationship, affiliation, partnership, endorsement,
            ownership connection, or other formal association with Stonkpit,
            Pitboys, Derpboys, the Stonkbrokers ecosystem, or Robinhood.
          </p>
          <p>
            References to third-party assets, infrastructure, networks,
            brands, or ecosystems do not imply sponsorship, endorsement,
            ownership, or organizational affiliation.
          </p>
        </article>


        <article className="legalSection">
          <span>14</span>
          <h2>CHILDREN'S PRIVACY</h2>
          <p>
            dFARMERS is not intended for individuals who are not legally
            permitted to participate in digital asset activities in their
            jurisdiction.
          </p>
          <p>
            We do not knowingly seek to collect personal information from
            children where such collection is prohibited by applicable law.
          </p>
        </article>


        <article className="legalSection">
          <span>15</span>
          <h2>YOUR RESPONSIBILITIES</h2>
          <p>
            You are responsible for ensuring that information you provide
            is accurate and for maintaining the security of your wallet,
            devices, accounts, and authentication credentials.
          </p>
          <p>
            You should also understand that public blockchain activity
            associated with your wallet or Farmer may remain publicly
            observable regardless of information-management practices
            implemented by dFARMERS.
          </p>
        </article>


        <article className="legalSection">
          <span>16</span>
          <h2>POLICY CHANGES</h2>
          <p>
            This Privacy Policy may be updated periodically to reflect
            changes to the platform, technology, autonomous execution
            architecture, legal requirements, or business practices.
          </p>
          <p>
            Updated versions will be published on this page with an
            updated effective date where appropriate.
          </p>
        </article>


        <article className="legalSection">
          <span>17</span>
          <h2>CONTACT</h2>
          <p>
            Questions regarding this Privacy Policy or the handling of
            information associated with dFARMERS may be directed through
            the official contact method provided by the project.
          </p>
        </article>


        <div className="legalFinal">
          <span>dFARMERS</span>
          <strong>ONCHAIN BY DESIGN.</strong>
          <p>
            BECAUSE BLOCKCHAIN DATA IS PUBLIC BY DESIGN, USERS SHOULD
            UNDERSTAND THAT WALLET ACTIVITY, TOKEN-BOUND ACCOUNT ACTIVITY,
            AND FARMER PORTFOLIO TRANSACTIONS MAY BE VISIBLE TO ANYONE.
          </p>
        </div>

      </section>

    </main>
    </div>
  );
}