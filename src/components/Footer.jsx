import { Triangle } from "lucide-react";

const links = ["Spec", "Components", "Motion", "Changelog"];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="mono label">
        <span className="brand-mark">
          <Triangle size={14} strokeWidth={1.8} />
        </span>
        Lumen Edge · Design System v1.0
      </span>
      <nav className="footer-links mono" aria-label="Footer">
        {links.map((l) => (
          <a key={l} href="#">{l}</a>
        ))}
      </nav>
    </footer>
  );
}
