import { profile } from "../data/cv.js";
import portrait from "../assets/photos/travail-1.jpg";
import Reveal from "./Reveal.jsx";

export default function Profil() {
  return (
    <section id="profil" className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="section-shell py-24 md:py-36">
        <Reveal>
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
            Profil
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl">Qui je suis</h2>
        </Reveal>

        <div className="mt-10 md:mt-12 grid md:grid-cols-[1fr_0.8fr] gap-8 items-center">
          <Reveal delay={0.05} className="card p-6 md:p-8">
            <p className="text-[var(--text)] leading-relaxed">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src={portrait}
              alt="Saint-Pierre Kassi au travail"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-[var(--border)] shadow-[var(--shadow)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
