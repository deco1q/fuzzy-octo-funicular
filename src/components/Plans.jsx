import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

const plans = [
  {
    name: "Studio",
    badge: "Solo",
    price: "$0",
    per: "/ month",
    note: "For one designer prototyping the language.",
    features: [
      "Core tokens · CSS export",
      "Light & dark surfaces",
      "6 component specimens",
      "Community signal channel",
    ],
    cta: "Start free",
    solid: false,
    featured: false,
  },
  {
    name: "Atelier",
    badge: "Most chosen",
    price: "$24",
    per: "/ month",
    note: "For product teams shipping multiple surfaces a week.",
    features: [
      "Everything in Studio",
      "Figma + Code parity",
      "Horizon Panel kit",
      "Motion & ease library",
      "Private workspace mirror",
    ],
    cta: "Choose Atelier",
    ctaIcon: ArrowRight,
    solid: true,
    featured: true,
  },
  {
    name: "Observatory",
    badge: "Scale",
    price: "Custom",
    per: "",
    note: "For organizations with multiple brands and audit trails.",
    features: [
      "Everything in Atelier",
      "Multi-tenant token sync",
      "SAML / SSO",
      "SLA & dedicated horizon",
    ],
    cta: "Contact studio",
    solid: false,
    featured: false,
  },
];

export default function Plans() {
  return (
    <section className="section" id="plans">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow mono">— Plans</span>
          <h2 className="h2 display">Three tiers, one luminous edge.</h2>
        </Reveal>
        <Reveal delay={80} as="p" className="section-intro">
          Every plan ships with the full token set, the signature Horizon Panel, and a
          framework-agnostic export. The line only gets brighter from here.
        </Reveal>
      </div>

      <div className="cards cards-3 plans">
        {plans.map((p, i) => {
          const CtaIcon = p.ctaIcon;
          return (
            <Reveal
              key={p.name}
              delay={i * 90}
              className={`panel plan hoverable ${p.featured ? "is-featured horizon-panel" : ""}`}
            >
              <div className="plan-head">
                <h3 className="card-title display">{p.name}</h3>
                <span className={`badge mono ${p.solid ? "solid" : ""}`}>{p.badge}</span>
              </div>
              <p className="price display">
                {p.price} {p.per && <span className="per mono">{p.per}</span>}
              </p>
              <p className="card-text">{p.note}</p>
              <ul className="features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} strokeWidth={2.4} /> {f}
                  </li>
                ))}
              </ul>
              <button className={`btn block ${p.solid ? "btn-solid" : "btn-ghost"}`}>
                {p.cta} {CtaIcon && <CtaIcon size={15} />}
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
