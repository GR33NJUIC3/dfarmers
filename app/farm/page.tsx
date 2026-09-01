"use client";

import "./farm.css";

import { useMemo, useState } from "react";


type Tab = "overview" | "strategy" | "capital" | "activity";

const assets = [
  { id: "01", name: "ASSIGNED ASSET", allocation: 25 },
  { id: "02", name: "ASSIGNED ASSET", allocation: 25 },
  { id: "03", name: "ASSIGNED ASSET", allocation: 25 },
  { id: "04", name: "ASSIGNED ASSET", allocation: 25 },
];

export default function FarmPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [risk, setRisk] = useState(50);
  const [frequency, setFrequency] = useState(50);
  const [rebalance, setRebalance] = useState(50);
  const [reserve, setReserve] = useState(10);
  const [takeProfit, setTakeProfit] = useState(25);
  const [compound, setCompound] = useState(true);
  const [guard, setGuard] = useState(true);
  const [capture, setCapture] = useState(false);
  const [deposit, setDeposit] = useState("");
  const [resetOpen, setResetOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const deployment = useMemo(() => {
    const amount = Number(deposit) || 0;
    return {
      deploy: amount * (1 - reserve / 100),
      reserve: amount * (reserve / 100),
    };
  }, [deposit, reserve]);

  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  const resetMint = () => {
    setRisk(50);
    setFrequency(50);
    setRebalance(50);
    setReserve(10);
    setTakeProfit(25);
    setCompound(true);
    setGuard(true);
    setCapture(false);
    setResetOpen(false);
    notify("FARMER CONFIGURATION RETURNED TO MINT STATE");
  };

  return (
    <main className="dfFarm">
      <div className="dfGrid" />

      <header className="dfHeader">
        <a href="/" className="dfBrand">
          <span className="dfLogo"><i /><i /><i /><i /></span>
          <span className="dfBrandText">
            <b>dFarmers</b>
            <small>FARMER NETWORK</small>
          </span>
        </a>

        <nav className="dfTopNav">
          <button onClick={() => setTab("overview")}>ALMANAC</button>
          <button onClick={() => notify("LEADERBOARD VIEW COMING ONLINE")}>LEADERBOARD</button>
          <button onClick={() => notify("OPEN THE WHEAT PAPER FROM THE MAIN NAVIGATION")}>WHEATPAPER</button>
        </nav>

        <div className="dfWallet">
          <span className="dfStatusDot" />
          0x••••7A42
        </div>
      </header>

      <div className="dfRule" />

      <div className="dfShell">
        <aside className="dfSidebar">
          <div className="farmerIdentity">
            <div className="identityTop">
              <span>FARMER</span>
              <strong>#1842</strong>
            </div>
            <div className="farmerGlyph">F</div>
            <h2>YOUR FARMER</h2>
            <p>PROGRAMMABLE FARMER IDENTITY</p>
            <div className="identityStatus"><span /> OPERATIONAL</div>
          </div>

          <div className="sideLabel">FARM CONTROL</div>

          <button className={`sideLink ${tab === "overview" ? "active" : ""}`} onClick={() => setTab("overview")}>
            <span>01</span> COMMAND CENTER
          </button>
          <button className={`sideLink ${tab === "strategy" ? "active" : ""}`} onClick={() => setTab("strategy")}>
            <span>02</span> STRATEGY DESK
          </button>
          <button className={`sideLink ${tab === "capital" ? "active" : ""}`} onClick={() => setTab("capital")}>
            <span>03</span> CAPITAL
          </button>
          <button className={`sideLink ${tab === "activity" ? "active" : ""}`} onClick={() => setTab("activity")}>
            <span>04</span> ACTIVITY
          </button>

          <div className="sideSpacer" />

          <div className="tractorBox">
            <span>TRACTOR</span>
            <strong><i /> ACTIVE</strong>
            <small>AUTONOMOUS EXECUTION LAYER</small>
          </div>

          <button className="resetLink" onClick={() => setResetOpen(true)}>
            RESET TO MINT STATE
          </button>
        </aside>

        <section className="dfMain">
          <div className="pageIntro">
            <div>
              <span className="eyebrow">FARM / CONTROL CENTER</span>
              <h1>YOUR <em>FARM.</em></h1>
              <p>
                Configure your Farmer, manage its strategy, deploy capital,
                and observe the system as it operates.
              </p>
            </div>
            <div className="introMeta">
              <span>ACCOUNT</span><b>ERC-6551 TBA</b>
              <span>NETWORK</span><b>ROBINHOOD CHAIN</b>
            </div>
          </div>

          {notice && <div className="dfNotice">{notice}</div>}

          {tab === "overview" && (
            <>
              <section className="heroPanel">
                <div className="panelBar">
                  <span>FARMER STATUS</span>
                  <b><i /> ONLINE</b>
                </div>
                <div className="heroContent">
                  <div>
                    <span className="greenLabel">PORTFOLIO CONTROL</span>
                    <h2>THE FARMER<br /><em>IS READY.</em></h2>
                    <p>
                      Your Farmer holds its portfolio through its Token-Bound
                      Account. The strategy defines intended behavior. The
                      Tractor performs permitted execution.
                    </p>
                    <div className="buttonRow">
                      <button className="dfPrimary" onClick={() => setTab("strategy")}>
                        OPEN STRATEGY DESK <b>→</b>
                      </button>
                      <button className="dfSecondary" onClick={() => setTab("capital")}>
                        ADD CAPITAL
                      </button>
                    </div>
                  </div>

                  <div className="farmDiagram">
                    <div className="diagramRing outer" />
                    <div className="diagramRing inner" />
                    <div className="diagramCore">F</div>
                    <span className="diagramLabel top">IDENTITY</span>
                    <span className="diagramLabel right">STRATEGY</span>
                    <span className="diagramLabel bottom">EXECUTION</span>
                    <span className="diagramLabel left">TBA</span>
                  </div>
                </div>
              </section>

              <section className="statGrid">
                <Stat label="FARM BALANCE" value="0.00 ETH" detail="PORTFOLIO VALUE" />
                <Stat label="STRATEGY" value="CUSTOM" detail="OWNER CONFIGURED" />
                <Stat label="RISK" value={`${risk}/100`} detail="CURRENT SETTING" />
                <Stat label="ASSETS" value="04" detail="ASSIGNED UNIVERSE" />
              </section>

              <section className="panel">
                <PanelHeading kicker="FARMER DNA" title="ASSIGNED ASSET UNIVERSE" right="FIXED BY GENERATION" />
                <div className="assetGrid">
                  {assets.map((asset) => (
                    <div className="assetCard" key={asset.id}>
                      <span className="assetNumber">{asset.id}</span>
                      <div className="assetSymbol">◈</div>
                      <small>{asset.name}</small>
                      <strong>{asset.allocation}%</strong>
                      <em>FIXED</em>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modelStrip">
                <div><span>OWNER</span><strong>DEFINE</strong></div>
                <b>→</b>
                <div><span>FARMER</span><strong>STRATEGIZE</strong></div>
                <b>→</b>
                <div><span>TRACTOR</span><strong>EXECUTE</strong></div>
                <b>→</b>
                <div><span>PROTOCOL</span><strong>ENFORCE</strong></div>
              </section>
            </>
          )}

          {tab === "strategy" && (
            <section className="strategyPage">
              <div className="strategyHeader">
                <div>
                  <span className="eyebrow">02 / STRATEGY DESK</span>
                  <h2>PROGRAM THE<br /><em>FARMER.</em></h2>
                  <p>Adjust the behavior of your Farmer without changing its generated identity or assigned asset universe.</p>
                </div>
                <div className="configBadge">
                  <span>CONFIGURATION</span>
                  <strong>CUSTOM</strong>
                  <small>OWNER CONTROLLED</small>
                </div>
              </div>

              <div className="panel">
                <PanelHeading kicker="PRIMARY PARAMETERS" title="STRATEGY CONTROLS" right="LIVE PREVIEW" />
                <div className="controlGrid">
                  <Control label="RISK LEVEL" text="Conservative ↔ Aggressive" value={risk} setValue={setRisk} />
                  <Control label="TRADE FREQUENCY" text="Low ↔ High" value={frequency} setValue={setFrequency} />
                  <Control label="REBALANCING" text="Relaxed ↔ Active" value={rebalance} setValue={setRebalance} />
                  <Control label="CASH RESERVE" text="0% ↔ 50%" value={reserve} setValue={setReserve} max={50} />
                  <Control label="TAKE PROFIT" text="5% ↔ 100%" value={takeProfit} setValue={setTakeProfit} min={5} />
                </div>
              </div>

              <div className="panel">
                <PanelHeading kicker="OPTIONAL BEHAVIOR" title="STRATEGY MODULES" right="TOGGLE TO ENABLE" />
                <div className="moduleGrid">
                  <Module title="AUTOMATIC COMPOUNDING" description="Reinvest realized profits according to the active strategy." enabled={compound} setEnabled={setCompound} />
                  <Module title="VOLATILITY GUARD" description="Reduce aggressive execution during unstable market conditions." enabled={guard} setEnabled={setGuard} />
                  <Module title="PROFIT CAPTURE" description="Apply the configured take-profit behavior within protocol limits." enabled={capture} setEnabled={setCapture} />
                </div>
              </div>

              <div className="executionBar">
                <div>
                  <span>EXECUTION MODEL</span>
                  <strong>PARAMETERS → FARMER → TRACTOR → PERMITTED ACTION</strong>
                </div>
                <button className="dfPrimary" onClick={() => notify("STRATEGY CONFIGURATION READY FOR SUBMISSION")}>SAVE STRATEGY <b>→</b></button>
              </div>

              <button className="mintReset" onClick={() => setResetOpen(true)}>RESET ALL CONFIGURATION TO MINT STATE</button>
            </section>
          )}

          {tab === "capital" && (
            <section className="capitalPage">
              <div className="strategyHeader">
                <div>
                  <span className="eyebrow">03 / CAPITAL</span>
                  <h2>PUT CAPITAL<br /><em>TO WORK.</em></h2>
                  <p>Fund the Farmer&apos;s Token-Bound Account. Deployment follows the current strategy and protocol rules.</p>
                </div>
                <div className="balanceBox">
                  <span>FARM BALANCE</span>
                  <strong>0.00 <small>ETH</small></strong>
                  <b><i /> ERC-6551 TBA</b>
                </div>
              </div>

              <div className="panel depositPanel">
                <PanelHeading kicker="CAPITAL DEPLOYMENT" title="ADD ETH TO FARMER" right="ETH" />
                <label className="inputLabel">DEPOSIT AMOUNT</label>
                <div className="ethInput">
                  <input type="number" min="0" step="0.001" placeholder="0.00" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
                  <span>ETH</span>
                </div>
                <div className="deploymentGrid">
                  <Stat label="DEPLOYABLE" value={`${deployment.deploy.toFixed(4)} ETH`} detail="AFTER RESERVE" />
                  <Stat label="RESERVE" value={`${deployment.reserve.toFixed(4)} ETH`} detail={`${reserve}% RESERVED`} />
                  <Stat label="STRATEGY" value={`${risk}/100`} detail="RISK SETTING" />
                </div>
                <button className="dfPrimary full" onClick={() => notify("DEPOSIT FLOW READY FOR BLOCKCHAIN SUBMISSION")}>ADD ETH TO MY FARM <b>→</b></button>
              </div>
            </section>
          )}

          {tab === "activity" && (
            <section className="panel activityPage">
              <PanelHeading kicker="04 / ACTIVITY" title="FARMER EVENT LOG" right="LIVE" />
              {["FARMER CREATED", "TRACTOR READY", "STRATEGY CONFIGURED", "ACCOUNT INITIALIZED"].map((event, i) => (
                <div className="activityRow" key={event}>
                  <span>0{i + 1}</span>
                  <strong>{event}</strong>
                  <small>{i === 0 ? "Mint state established" : "System event recorded"}</small>
                  <b>●</b>
                </div>
              ))}
            </section>
          )}
        </section>
      </div>

      <footer className="dfFooter">
        <span>© 2026 dFARMERS</span>
        <span>FARMER NETWORK / CONTROL CENTER</span>
        <span>BUILT ON ROBINHOOD CHAIN</span>
      </footer>

      {resetOpen && (
        <div className="dfModalBackdrop">
          <div className="dfModal">
            <span className="eyebrow">SYSTEM RESET</span>
            <h2>RETURN TO MINT STATE?</h2>
            <p>This resets configurable strategy parameters and modules. Your Farmer identity and assigned asset universe remain unchanged.</p>
            <div className="resetFacts">
              <span>STRATEGY</span><b>INITIAL CONFIGURATION</b>
              <span>MODULES</span><b>INITIAL CONFIGURATION</b>
              <span>ASSETS</span><b>UNCHANGED</b>
            </div>
            <div className="modalButtons">
              <button className="dfSecondary" onClick={() => setResetOpen(false)}>CANCEL</button>
              <button className="dfDanger" onClick={resetMint}>RESET FARMER</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <div className="stat"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>;
}

function PanelHeading({ kicker, title, right }: { kicker: string; title: string; right: string }) {
  return <div className="panelHeading"><div><span>{kicker}</span><h3>{title}</h3></div><b>{right}</b></div>;
}

function Control({
  label, text, value, setValue, min = 0, max = 100,
}: {
  label: string; text: string; value: number; setValue: (n: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="control">
      <div className="controlTop"><div><strong>{label}</strong><small>{text}</small></div><b>{value}{label === "TAKE PROFIT" ? "%" : ""}</b></div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <div className="rangeLine"><span>{min === 5 ? "5%" : min === 0 ? "0" : min}</span><span>{max === 50 ? "50%" : max}</span></div>
    </div>
  );
}

function Module({ title, description, enabled, setEnabled }: { title: string; description: string; enabled: boolean; setEnabled: (v: boolean) => void }) {
  return (
    <button className={`module ${enabled ? "enabled" : ""}`} onClick={() => setEnabled(!enabled)}>
      <div className="moduleTop"><span>{enabled ? "ACTIVE" : "AVAILABLE"}</span><i>{enabled ? "✓" : "+"}</i></div>
      <strong>{title}</strong>
      <p>{description}</p>
      <div className="switch"><i /></div>
    </button>
  );
}
