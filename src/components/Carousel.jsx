import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const GAP = 20;
const DURATION = 500;

function usePerView({ base = 1, sm = 2, lg = 3 }) {
  const [perView, setPerView] = useState(base);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? lg : w >= 640 ? sm : base);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [base, sm, lg]);
  return perView;
}

export default function Carousel({ items, renderItem, perView: perViewConfig, interval = 5500, label = "élément" }) {
  const total = items.length;
  const perView = usePerView(perViewConfig || { base: 1, sm: 2, lg: 3 });
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(total);
  const [animate, setAnimate] = useState(true);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setCardWidth((w - GAP * (perView - 1)) / perView);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [perView]);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  useEffect(() => {
    if (total <= perView) return undefined;
    const id = setInterval(() => {
      if (!pausedRef.current) next();
    }, interval);
    return () => clearInterval(id);
  }, [interval, next, total, perView]);

  useEffect(() => {
    if (index >= total * 2) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => i - total);
      }, DURATION);
      return () => clearTimeout(t);
    }
    if (index < total) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => i + total);
      }, DURATION);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [index, total]);

  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [animate]);

  const extended = [...items, ...items, ...items];
  const step = cardWidth + GAP;
  const translate = index * step;
  const activeDot = ((index % total) + total) % total;
  const fallbackWidth = `calc(${100 / perView}% - ${(GAP * (perView - 1)) / perView}px)`;

  function goTo(i) {
    setIndex(total + i);
  }

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div className="relative" onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
      {total > perView && (
        <button
          type="button"
          onClick={prev}
          aria-label="Précédent"
          className="hidden sm:grid absolute -left-5 top-[38%] -translate-y-1/2 z-10 w-10 h-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
      )}

      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex items-stretch"
          style={{
            gap: GAP,
            transform: `translateX(-${translate}px)`,
            transition: animate ? `transform ${DURATION}ms ease` : "none",
          }}
        >
          {extended.map((item, i) => (
            <div key={i} className="shrink-0" style={{ width: cardWidth ? `${cardWidth}px` : fallbackWidth }}>
              {renderItem(item, i % total)}
            </div>
          ))}
        </div>
      </div>

      {total > perView && (
        <button
          type="button"
          onClick={next}
          aria-label="Suivant"
          className="hidden sm:grid absolute -right-5 top-[38%] -translate-y-1/2 z-10 w-10 h-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      )}

      {total > perView && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller au ${label} ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === activeDot ? "w-6 bg-[var(--accent-strong)]" : "w-2 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
