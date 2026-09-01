"use client";

import { useEffect, useState } from "react";

export default function SystemAdmission() {
  const [visible, setVisible] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [openSection, setOpenSection] = useState(1);

  useEffect(() => {
    const accepted = localStorage.getItem("dfarmers-system-admission");

    if (accepted !== "accepted") {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const acceptAdmission = () => {
    if (!acknowledged) return;

    localStorage.setItem(
      "dfarmers-system-admission",
      "accepted"
    );

    document.body.style.overflow = "";
    setVisible(false);
  };

  if (!visible) return null;

  const disclosures = [
    {
      number: "01",
      title: "EXPERIMENTAL SOFTWARE",
      content: (
        <>
          dFarmers is experimental on-chain software. The protocol,
          smart contracts, token-bound accounts, autonomous execution
          systems, supported assets, and interfaces may contain defects,
          vulnerabilities, limitations, or unforeseen behaviors.
        </>
      ),
    },
    {
      number: "02",
      title: "FINANCIAL RISK COMES FIRST",
      content: (
        <>
          dFarmers involves digital assets, NFTs, tokenized assets,
          and portfolio positions that can be highly volatile.{" "}
          <span className="highlight">
            You may lose some or all of your assets.
          </span>{" "}
          Never mint, activate, deposit, trade, or otherwise interact
          with dFarmers using assets you cannot afford to lose completely.
        </>
      ),
    },
    {
      number: "03",
      title: "NO GUARANTEED RESULTS",
      content: (
        <>
          dFarmers makes{" "}
          <span className="highlight">no guarantee</span> of portfolio
          performance, appreciation, profits, rewards, distributions,
          harvest results, autonomous execution outcomes, or any other
          economic result. Past performance does not guarantee future
          results.
        </>
      ),
    },
    {
      number: "04",
      title: "NOT FINANCIAL, INVESTMENT, LEGAL, OR TAX ADVICE",
      content: (
        <>
          Nothing on dFarmers constitutes financial, investment, legal,
          accounting, or tax advice, or an offer, solicitation, or
          recommendation to buy or sell any asset or financial instrument.
          <br />
          <br />
          <span className="highlight">
            You are responsible for your own research and decisions.
          </span>
        </>
      ),
    },
    {
      number: "05",
      title: "TOKENIZED ASSETS ARE SOFTWARE",
      content: (
        <>
          Supported tokenized assets and their smart-contract
          representations are software-based systems. Their behavior
          depends on blockchain infrastructure, smart contracts,
          protocols, and third-party systems, and functionality or
          availability may change.
        </>
      ),
    },
    {
      number: "06",
      title: "AUTONOMOUS EXECUTION",
      content: (
        <>
          A dFarmer may use protocol-defined autonomous execution
          mechanisms to manage its portfolio according to its configured
          strategy and applicable system rules.
          <br />
          <br />
          <span className="highlight">
            You are responsible for understanding the strategy and
            parameters associated with your dFarmer before activating it.
          </span>
        </>
      ),
    },
    {
      number: "07",
      title: "ON-CHAIN TRANSACTIONS ARE YOUR RESPONSIBILITY",
      content: (
        <>
          dFarmers provides an interface for interacting with on-chain
          protocols and smart contracts. Transactions execute directly
          on-chain and may be irreversible.
          <br />
          <br />
          <span className="bright">
            You are responsible for verifying the asset, transaction,
            contract, destination, and requested action before signing.
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="system-admission-overlay">

      {/* Background veil */}
      <div className="system-admission-backdrop" />

      {/* Admission window */}
      <section className="system-admission-modal">

        <div className="system-admission-hero">

          <div className="system-admission-id">
            dFarmers System Admission
          </div>

          <h1>
            <span>△</span>
            PLEASE READ
          </h1>

          <p>
            Before entering dFarmers, please read and acknowledge
            the following.
          </p>

        </div>


        <div className="system-admission-disclosures">

          {disclosures.map((section, index) => {
            const number = index + 1;
            const open = openSection === number;

            return (
              <article
                className={`system-admission-item ${
                  open ? "open" : ""
                }`}
                key={section.number}
              >

                <button
                  type="button"
                  className="system-admission-head"
                  onClick={() =>
                    setOpenSection(open ? 0 : number)
                  }
                >

                  <span className="system-admission-number">
                    {section.number}
                  </span>

                  <span className="system-admission-title">
                    {section.title}
                  </span>

                  <span className="system-admission-arrow" />

                </button>

                {open && (
                  <div className="system-admission-content">
                    {section.content}
                  </div>
                )}

              </article>
            );
          })}

        </div>


        <div className="system-admission-risk">

          <div className="system-admission-risk-title">
            ⚠ NEVER RISK MORE THAN YOU CAN AFFORD TO LOSE
          </div>

          <div className="system-admission-risk-copy">
            Never mint, activate, deposit, trade, or otherwise
            interact with dFarmers using assets you cannot afford
            to lose completely.
          </div>

        </div>


        <div className="system-admission-ack">

          <button
            type="button"
            className="system-admission-check"
            onClick={() =>
              setAcknowledged(!acknowledged)
            }
          >

            <span
              className={`system-admission-checkbox ${
                acknowledged ? "checked" : ""
              }`}
            >
              {acknowledged ? "✓" : ""}
            </span>

            <span className="system-admission-check-text">
              I have read and understood these disclosures and
              acknowledge the risks and responsibilities of using
              dFarmers.
            </span>

          </button>


          <button
            type="button"
            disabled={!acknowledged}
            className={`system-admission-enter ${
              acknowledged ? "active" : ""
            }`}
            onClick={acceptAdmission}
          >
            ENTER THE SYSTEM
          </button>

        </div>


        <div className="system-admission-footer">

          <span>
            dFarmers • FARMER NETWORK
          </span>

          <span>
            BUILT ON ROBINHOOD CHAIN
          </span>

        </div>

      </section>
    </div>
  );
}