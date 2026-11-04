import { useState } from "react";
import { Cloud, Server, House, Settings2, ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal.jsx";

const targets = [
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "edge", label: "Edge", icon: Server },
  { id: "local", label: "Local", icon: House },
];

const tokens = [
  "--color-void",
  "--surface-gradient",
  "--rim-inset",
  "--horizon-line",
  "--color-lumen",
  "--radius-md",
  "--motion-slow",
  "--shadow-card",
];

export default function Workbench() {
  const [target, setTarget] = useState("cloud");
  const [checks, setChecks] = useState({ encrypt: true, mirror: false, quiet: true });
  const toggle = (k) => setChecks((c) => ({ ...c, [k]: !c[k] }));

  const checkItems = [
    { key: "encrypt", label: "Encrypt at rest" },
    { key: "mirror", label: "Mirror to staging" },
    { key: "quiet", label: "Quiet logs" },
  ];

  return (
    <section className="section" id="workbench">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow mono">— Workbench</span>
          <h2 className="h2 display">Specimens you can wire up tonight.</h2>
        </Reveal>
        <Reveal delay={80} as="p" className="section-intro">
          Form controls, panels, and the signature Horizon Panel — assembled from the
          same CSS custom properties shipped with the system.
        </Reveal>
      </div>

      <div className="workbench-grid">
        <Reveal className="panel provision hoverable">
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "contents" }}>
            <span className="eyebrow mono">— New workspace</span>
            <div className="provision-head">
              <div>
                <h3 className="card-title display">Provision an environment</h3>
                <p className="card-text">Three controls, one ease, no spinners that bounce.</p>
              </div>
              <div className="segmented" role="tablist" aria-label="Target">
                {targets.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      type="button"
                      key={t.id}
                      className={`seg ${target === t.id ? "is-active" : ""}`}
                      aria-selected={target === t.id}
                      onClick={() => setTarget(t.id)}
                    >
                      <Icon size={14} /> {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="field-row">
              <label className="field">
                <span className="mono label">Workspace name</span>
                <input type="text" defaultValue="aurora-deck" />
              </label>
              <label className="field">
                <span className="mono label">Region</span>
                <input type="text" defaultValue="eu-north-1" />
              </label>
            </div>

            <label className="field">
              <span className="mono label">Owner email</span>
              <input type="email" placeholder="you@lumen.dev" />
            </label>

            <div className="checks">
              {checkItems.map((c) => (
                <span
                  key={c.key}
                  className={`check ${checks[c.key] ? "on" : ""}`}
                  onClick={() => toggle(c.key)}
                  role="checkbox"
                  aria-checked={checks[c.key]}
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle(c.key))}
                >
                  <span className="check-box">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{c.label}</span>
                </span>
              ))}
            </div>

            <div className="form-actions">
              <button className="btn btn-ghost" type="button">Cancel</button>
              <button className="btn btn-solid" type="submit">
                Provision <Settings2 size={15} />
              </button>
            </div>
          </form>
        </Reveal>

        <div className="workbench-side">
          <Reveal delay={80} className="panel mission horizon-panel hoverable">
            <div className="mission-row">
              <div>
                <span className="mono label">Mission</span>
                <h3 className="card-title display">Horizon · Bootstrapping</h3>
              </div>
              <div className="mission-meta">
                <span className="status-dot" />
                <a className="btn btn-ghost sm" href="#">
                  Engage <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="panel tokens hoverable">
            <span className="mono label">Material tokens</span>
            <h3 className="card-title display">The vocabulary, in twelve chips.</h3>
            <p className="card-text">
              Surfaces, rims, and edges — each token exposed as a CSS custom property.
            </p>
            <div className="chips">
              {tokens.map((t) => (
                <span className="chip mono" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
