import {
  CircleStackIcon,
  CpuChipIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { skillGroups } from "../data/cv.js";
import Reveal from "./Reveal.jsx";

const ICONS = {
  shield: ShieldCheckIcon,
  network: WifiIcon,
  support: LifebuoyIcon,
  database: CircleStackIcon,
  tools: WrenchScrewdriverIcon,
  ai: CpuChipIcon,
};

export default function Competences() {
  return (
    <section id="competences" className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="section-shell py-24 md:py-36">
        <Reveal>
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
            Compétences
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl">Ce que je sais faire</h2>
        </Reveal>

        <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.04} className="card p-6 h-full">
                <span className="w-10 h-10 grid place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-semibold text-[var(--text-h)]">{group.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text)] flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
