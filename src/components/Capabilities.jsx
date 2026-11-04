import { Layers, Lamp, PanelBottom, Focus, Type, Spline } from "lucide-react";
import Reveal from "./Reveal.jsx";

const items = [
  {
    icon: Layers,
    title: "Radial surfaces",
    text: (
      <>
        An ellipse-at-bottom gradient gives every raised control the feel of light
        spilling from below. Reused as <code>--surface-gradient</code>.
      </>
    ),
    chips: ["surface", "gradient"],
  },
  {
    icon: Lamp,
    title: "Hairline rims",
    text: "A 1px inset highlight at low alpha outlines every component, and strengthens to acknowledge hover and focus.",
    chips: ["inset 1px", "0.10 → 0.16"],
  },
  {
    icon: PanelBottom,
    title: "Horizon line",
    text: "A 70%-wide gradient at the bottom edge fades from 0.2 to 1.0 — the universal signal for focus, activation, and depth.",
    chips: ["width 70%", "lumen glow"],
  },
  {
    icon: Focus,
    title: "Lumen focus",
    text: "Keyboard focus is a cool-white outer ring — never blue, never tinted — so accessibility lives inside the system language.",
    chips: ["1px ring", "16px glow"],
  },
  {
    icon: Type,
    title: "Sub-chromatic palette",
    text: "Hierarchy through luminance, not hue. Eight tokens cover canvas, surfaces, rims, text, and the Lumen highlight.",
    chips: ["8 tokens", "0 accents"],
  },
  {
    icon: Spline,
    title: "One signature ease",
    text: (
      <>
        Surfaces transition at <code>cubic-bezier(.15, .83, .66, 1)</code> at 1000ms
        — slow, weighted, intentional.
      </>
    ),
    chips: ["1000 ms", "single curve"],
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow mono">— Capabilities</span>
          <h2 className="h2 display">Four reusable signals, one quiet system.</h2>
        </Reveal>
        <Reveal delay={80} as="p" className="section-intro">
          Lumen Edge replaces brand color and heavy borders with light. Every
          component is assembled from the same four primitives — radial surface,
          hairline rim, horizon line, and Lumen focus glow — so the system reads as
          one material from button to panel.
        </Reveal>
      </div>

      <div className="cards cards-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <Reveal key={it.title} delay={(i % 3) * 80} className="panel card hoverable">
              <span className="ic-tile">
                <Icon size={21} strokeWidth={1.6} />
              </span>
              <h3 className="card-title display">{it.title}</h3>
              <p className="card-text">{it.text}</p>
              <div className="chips">
                {it.chips.map((c) => (
                  <span className="chip mono" key={c}>{c}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
