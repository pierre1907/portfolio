import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineMoon, HiOutlineSun, HiOutlineXMark } from "react-icons/hi2";

const LINKS = [
  { href: "#profil", label: "Profil" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#competences", label: "Compétences" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    // ignore
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(getInitialTheme);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[var(--bg)]/80 border-b border-[var(--border)]">
      <div className="section-shell flex items-center justify-between h-18 py-3">
        <a href="#top" className="font-semibold text-[var(--text-h)] tracking-tight">
          S.-P. Kassi
        </a>

        <nav className="hidden md:flex items-center gap-1 card pill p-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                active === link.href
                  ? "text-[var(--text-h)] bg-[var(--accent-soft)]"
                  : "text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--accent-soft)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            {dark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-strong)] transition-colors"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] text-[var(--text)]"
          >
            {open ? <HiOutlineXMark size={18} /> : <HiOutlineBars3 size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden section-shell pb-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm ${
                active === link.href ? "text-[var(--text-h)] bg-[var(--accent-soft)]" : "text-[var(--text)] hover:bg-[var(--accent-soft)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
