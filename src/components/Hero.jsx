import { motion } from "motion/react";
import { HiOutlineArrowDownTray, HiOutlineEnvelope } from "react-icons/hi2";
import { profile } from "../data/cv.js";
import portrait from "../assets/photos/portrait-1.jpg";

export default function Hero() {
  return (
    <section id="top" className="section-shell pt-20 pb-24 md:pt-28 md:pb-36">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[var(--accent-strong)] bg-[var(--accent-soft)] border border-[var(--accent-soft)]">
            Disponible pour de nouvelles missions IT & développement
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-[1.08]">
            {profile.name}
          </h1>
          <p className="mt-4 text-base md:text-lg text-[var(--text)] max-w-xl">
            {profile.title}
          </p>
          <p className="mt-5 text-[var(--text-soft)] max-w-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-strong)] transition-colors"
            >
              <HiOutlineEnvelope size={18} />
              Me contacter
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-[var(--accent-soft)] -z-10" />
          <img
            src={portrait}
            alt={profile.name}
            className="w-full aspect-[4/5] object-cover rounded-[28px] border border-[var(--border)] shadow-[var(--shadow)]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {profile.stats.map((stat) => (
          <div key={stat.label} className="card p-4 text-center">
            <div className="text-3xl font-semibold tracking-tight text-[var(--text-h)]">{stat.value}</div>
            <div className="mt-1.5 text-xs text-[var(--text-soft)] leading-snug">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
