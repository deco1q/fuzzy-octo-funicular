import { Triangle, Terminal, ArrowRight } from "lucide-react";

const links = ["System", "Capabilities", "Workbench", "Plans"];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Triangle size={18} strokeWidth={1.6} />
          </span>
          <span className="brand-name">Lumen Edge</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost sm" href="#">
            <Terminal size={15} /> Docs
          </a>
          <a className="btn btn-solid sm" href="#">
            Sign in <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
