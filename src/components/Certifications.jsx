import { HiOutlineLanguage, HiOutlineSparkles, HiOutlineTrophy } from "react-icons/hi2";
import { certifications, interests, languages } from "../data/cv.js";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 md:py-36 scroll-mt-24">
      <Reveal>
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
          Certifications
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl">Diplômes & reconnaissances</h2>
      </Reveal>

      <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.05} className="card p-5">
            <span className="w-9 h-9 grid place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
              <HiOutlineTrophy size={18} />
            </span>
            <p className="mt-3 text-sm font-medium text-[var(--text-h)] leading-snug">{cert.title}</p>
            <p className="mt-1 text-xs text-[var(--text-soft)]">{cert.org}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        <Reveal delay={0.05} className="card p-6">
          <span className="w-9 h-9 grid place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
            <HiOutlineLanguage size={18} />
          </span>
          <h3 className="mt-3 font-semibold text-[var(--text-h)] text-sm">Langues</h3>
          <ul className="mt-3 space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="text-sm text-[var(--text)] flex justify-between gap-3">
                <span className="font-medium text-[var(--text-h)]">{lang.name}</span>
                <span className="text-[var(--text-soft)] text-right">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="card p-6">
          <span className="w-9 h-9 grid place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
            <HiOutlineSparkles size={18} />
          </span>
          <h3 className="mt-3 font-semibold text-[var(--text-h)] text-sm">Centres d'intérêt</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
