import { useState } from "react";
import { Activity, ArrowUpRight, Diamond } from "lucide-react";
import Sparkline from "./Sparkline.jsx";

const ranges = ["24h", "7d", "30d"];

export default function SignalPanel() {
  const [range, setRange] = useState("24h");

  return (
    <aside className="panel signal horizon-panel hoverable" aria-label="Signal region NA">
      <div className="signal-head">
        <span className="mono label">
          <Activity size={14} className="lumen" /> Signal — Region NA
        </span>
        <div className="segmented" role="tablist" aria-label="Range">
          {ranges.map((r) => (
            <button
              key={r}
              className={`seg ${range === r ? "is-active" : ""}`}
              role="tab"
              aria-selected={range === r}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="signal-grid">
        <div className="metric">
          <span className="mono label">Active sessions</span>
          <span className="metric-num display">12 408</span>
          <span className="metric-delta up">
            <ArrowUpRight size={13} /> <span className="mono">+4.6% vs. baseline</span>
          </span>
          <Sparkline
            gradient
            id="spark-sessions"
            points="0,46 24,42 48,44 72,36 96,38 120,28 144,31 168,20 196,16 220,9"
          />
        </div>

        <div className="metric">
          <span className="mono label">Latency P95</span>
          <span className="metric-num display">
            38 <span className="unit">ms</span>
          </span>
          <span className="metric-delta">
            <Diamond size={12} /> <span className="mono">Edge cache · 7 regions</span>
          </span>
          <Sparkline
            dashed
            points="0,28 24,32 48,26 72,34 96,24 120,30 144,22 168,28 196,20 220,26"
          />
        </div>
      </div>

      <div className="signal-foot">
        <span className="mono label">
          <span className="dot sm" /> All horizons nominal
        </span>
        <span className="mono label dim">Build · LE.1.0.42</span>
      </div>
    </aside>
  );
}
