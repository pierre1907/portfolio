import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi2";
import { experiences, education } from "../data/cv.js";
import Reveal from "./Reveal.jsx";

export default function Parcours() {
  return (
    <section id="parcours" className="section-shell py-24 md:py-36 scroll-mt-24">
      <Reveal>
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
          Parcours
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl">Expérience professionnelle</h2>
      </Reveal>

      <div className="mt-10 md:mt-12 space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.role + exp.period} delay={i * 0.04} className="card p-6 md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-9 h-9 grid place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <HiOutlineBriefcase size={18} />
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[var(--text-h)]">{exp.role}</h3>
                  <p className="text-sm text-[var(--text-soft)]">{exp.org}</p>
                </div>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-soft)] whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2 pl-12">
              {exp.bullets.map((b) => (
                <li key={b} className="text-sm text-[var(--text)] leading-relaxed list-disc marker:text-[var(--accent)]">
                  {b}
                </li>
              ))}
            </ul>

            {exp.result && (
              <p className="mt-4 ml-12 text-sm text-[var(--accent-strong)] bg-[var(--accent-soft)] rounded-xl px-4 py-3">
                {exp.result}
              </p>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-20 md:mt-28">
        <h3 className="text-xl font-semibold text-[var(--text-h)]">Formation</h3>
        <div className="mt-6 space-y-4">
          {education.map((ed) => (
            <div key={ed.title} className="card p-5 flex flex-wrap items-start gap-3 justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-9 h-9 grid place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <HiOutlineAcademicCap size={18} />
                </span>
                <div>
                  <p className="font-medium text-[var(--text-h)] text-sm">{ed.title}</p>
                  <p className="text-sm text-[var(--text-soft)]">{ed.org}</p>
                </div>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-soft)] whitespace-nowrap">
                {ed.period}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
