"use client";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterMain">

        {/* BRAND */}
        <div className="siteFooterBrand">
          <a href="/" className="footerBrand">
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

          <p>
            AUTONOMOUS ON-CHAIN PORTFOLIO NETWORK
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="siteFooterColumn">
          <span>NAVIGATION</span>

          <a href="/almanac">ALMANAC</a>
          <a href="/leaderboard">LEADERBOARD</a>
          <a href="/wheatpaper">WHEATPAPER</a>
        </div>

        {/* LEGAL */}
        <div className="siteFooterColumn">
          <span>LEGAL</span>

          <a href="/terms">TERMS</a>
          <a href="/privacy">PRIVACY</a>
          <a href="/risk">RISK</a>
          <a href="/disclaimer">DISCLAIMER</a>
        </div>

        {/* NETWORK */}
        <div className="siteFooterColumn">
          <span>NETWORK</span>

          <div className="footerNetwork">
            <i />
            ROBINHOOD CHAIN
          </div>

          <div className="footerSocials">
            <a
              href="YOUR_DISCORD_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <img
                src="/social/discord.svg"
                alt="Discord"
              />
            </a>

            <a
              href="https://x.com/dFarmersNFT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <img
                src="/social/x.svg"
                alt="X"
              />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="siteFooterBottom">
        <span>© 2026 dFARMERS</span>
      </div>
    </footer>
  );
}