import {
  ArchiveBoxIcon,
  ShoppingBagIcon,
  TruckIcon,
  HomeModernIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../data/cv.js";
import Reveal from "./Reveal.jsx";
import Carousel from "./Carousel.jsx";
import orderOperationsDashboard from "../assets/projects/order-operations-dashboard.jpg";
import deliverySettings from "../assets/projects/delivery-settings.jpg";
import chocolatesarayi from "../assets/projects/chocolatesarayi.jpg";
import madioufcouture from "../assets/projects/madioufcouture.jpg";
import propriyo from "../assets/projects/propriyo.jpg";

const ICONS = {
  shop: ShoppingBagIcon,
  truck: TruckIcon,
  box: ArchiveBoxIcon,
  home: HomeModernIcon,
};

const IMAGES = {
  "order-operations-dashboard": orderOperationsDashboard,
  "delivery-settings": deliverySettings,
  chocolatesarayi,
  madioufcouture,
  propriyo,
};

export default function Projets() {
  return (
    <section id="projets" className="section-shell py-20 md:py-28 scroll-mt-24">
      <Reveal>
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
          Projets
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl">Ce que j'ai construit</h2>
        <p className="mt-3 text-[var(--text-soft)] max-w-xl">
          Un écosystème d'extensions WordPress conçu et maintenu seul, et des déploiements réels chez des clients.
        </p>
      </Reveal>

      <div className="mt-10 md:mt-12">
        <Carousel
          items={projects}
          perView={{ base: 1, sm: 2, lg: 3 }}
          label="projet"
          renderItem={(project) => {
            const Icon = ICONS[project.icon];
            const image = IMAGES[project.image];
            return (
              <Reveal className="card overflow-hidden h-full flex flex-col">
                {image && (
                  <img
                    src={image}
                    alt={`Capture d'écran — ${project.title}`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top border-b border-[var(--border)]"
                  />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-10 h-10 grid place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-soft)] whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-semibold text-[var(--text-h)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text)] leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-strong)] hover:text-[var(--accent)]"
                    >
                      {project.linkLabel}
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          }}
        />
      </div>
    </section>
  );
}
