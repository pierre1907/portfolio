import { HiStar } from "react-icons/hi2";
import { testimonials } from "../data/cv.js";
import Reveal from "./Reveal.jsx";
import Carousel from "./Carousel.jsx";

export default function Temoignages() {
  return (
    <section id="temoignages" className="section-shell py-20 md:py-28 scroll-mt-24">
      <Reveal>
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
          Témoignages
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl">Ce qu'en disent les équipes qui les utilisent</h2>
        <p className="mt-3 text-[var(--text-soft)] max-w-xl">
          Retours recueillis auprès de responsables et gérants utilisant les extensions et sites développés.
        </p>
      </Reveal>

      <div className="mt-10 md:mt-12">
        <Carousel
          items={testimonials}
          perView={{ base: 1, sm: 2, lg: 4 }}
          label="témoignage"
          renderItem={(t) => (
            <Reveal className="card p-6 h-full flex flex-col">
              <div className="flex items-center gap-1 text-[var(--accent-strong)]">
                {Array.from({ length: 5 }).map((_, star) => (
                  <HiStar key={star} className="w-4 h-4" />
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--text)] leading-relaxed line-clamp-5">« {t.quote} »</p>
              <div className="mt-5 pt-4 border-t border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-h)]">{t.name}</p>
                <p className="text-xs text-[var(--text-soft)]">{t.role}</p>
                <p className="mt-1 text-xs font-medium text-[var(--accent-strong)]">{t.project}</p>
              </div>
            </Reveal>
          )}
        />
      </div>
    </section>
  );
}
