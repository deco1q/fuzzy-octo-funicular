import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SignalPanel from "./SignalPanel.jsx";

const stats = [
  { num: "42", label: "Components" },
  { num: "7px / 14px", label: "Radius scale" },
  { num: "1.00 s", label: "Signature ease" },
  { num: "0", label: "Chromatic accents" },
];

export default function Hero() {
  return (
    <section className="hero" id="system">
      <Reveal className="hero-copy">
        <span className="pill">
          <span className="dot" />
          <span className="mono">Lumen Edge — v1.0 quietly online</span>
        </span>

        <h1 className="display">
          Interfaces that<br />
          read as<br />
          <span className="glass">engineered glass</span>
          <br />
          <span className="glass">at dusk.</span>
        </h1>

        <p className="lede">
          A sub-chromatic design system for product teams who want clarity without
          color noise. Soft radial surfaces, hairline rims, and a single luminous
          horizon line carry every state — focus, hover, activation, and depth.
        </p>

        <div className="hero-cta">
          <a className="btn btn-solid lg" href="#workbench">
            Start a workspace <ArrowUpRight size={17} />
          </a>
          <a className="btn btn-ghost lg" href="#">
            <Play size={15} /> Watch the tour
          </a>
        </div>

        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat-num display">{s.num}</dt>
              <dd className="stat-label mono">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <SignalPanel />
      </Reveal>
    </section>
  );
}
