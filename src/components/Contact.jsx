import { HiOutlineArrowDownTray, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { profile } from "../data/cv.js";
import photo from "../assets/photos/travail-2.jpg";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const whatsapp = profile.phones[0].replace(/\s|\+/g, "");

  return (
    <section id="contact" className="section-shell py-24 md:py-40 scroll-mt-24">
      <div className="card overflow-hidden grid md:grid-cols-[1fr_0.9fr]">
        <Reveal className="p-8 md:p-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-strong)]">
            Contact
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl">Parlons de votre projet IT</h2>
          <p className="mt-3 text-sm text-[var(--text-soft)] max-w-sm">
            Support, administration réseau, sécurisation ou développement d'un outil interne — écrivez-moi, je réponds rapidement.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-sm text-[var(--text)]">
              <HiOutlineEnvelope className="w-5 h-5 shrink-0 text-[var(--accent-strong)]" />
              <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent)]">
                {profile.email}
              </a>
            </li>
            {profile.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3 text-sm text-[var(--text)]">
                <HiOutlinePhone className="w-5 h-5 shrink-0 text-[var(--accent-strong)]" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 text-sm text-[var(--text)]">
              <HiOutlineMapPin className="w-5 h-5 shrink-0 text-[var(--accent-strong)]" />
              {profile.location}
            </li>
            <li className="flex items-center gap-3 text-sm text-[var(--text)]">
              <FaLinkedinIn className="w-5 h-5 shrink-0 text-[var(--accent-strong)]" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                linkedin.com/in/saint-pierre-kassi
              </a>
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-strong)] transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              Écrire sur WhatsApp
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-h)] hover:border-[var(--accent)] transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-h)] hover:border-[var(--accent)] transition-colors"
            >
              <HiOutlineArrowDownTray size={18} />
              Télécharger le CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-56 md:min-h-full">
          <img
            src={photo}
            alt="Saint-Pierre Kassi en réunion de travail"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
