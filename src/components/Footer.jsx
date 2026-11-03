import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../data/cv.js";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-soft)]">
        <p>© {currentYear} {profile.name}</p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Profil LinkedIn"
          className="inline-flex items-center gap-2 hover:text-[var(--accent)]"
        >
          <FaLinkedinIn className="w-4 h-4" />
          LinkedIn
        </a>
        <p>Dakar, Sénégal</p>
      </div>
    </footer>
  );
}
