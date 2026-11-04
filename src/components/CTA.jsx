import { ArrowUpRight, BookOpen } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function CTA() {
  return (
    <section className="section">
      <Reveal className="panel cta horizon-panel hoverable">
        <div className="cta-copy">
          <h2 className="h2 display">Move from color noise to a single line of light.</h2>
          <p className="card-text">
            Drop the system into your codebase in an afternoon. The CSS custom
            properties fit any framework, and the horizon line is the only thing you
            need to teach your team.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-solid lg" href="#workbench">
            Open a workspace <ArrowUpRight size={17} />
          </a>
          <a className="btn btn-ghost lg" href="#">
            <BookOpen size={16} /> Read the spec
          </a>
        </div>
      </Reveal>
    </section>
  );
}
