import { MotionConfig } from "motion/react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Profil from "./components/Profil.jsx";
import Parcours from "./components/Parcours.jsx";
import Projets from "./components/Projets.jsx";
import Temoignages from "./components/Temoignages.jsx";
import Competences from "./components/Competences.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Profil />
        <Parcours />
        <Projets />
        <Temoignages />
        <Competences />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
