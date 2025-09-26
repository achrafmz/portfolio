// src/pages/Home.js
import { Helmet } from "react-helmet";

import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Certification from "../components/Certification/Certification"; // Import Certification
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  return (
    <>
    <Helmet>
        <title>Achraf Mazouz - Portfolio</title>
        <meta
          name="description"
          content="Portfolio d'Achraf Mazouz : découvrez mes projets, compétences, certifications et contactez-moi."
        />
        <meta
          name="keywords"
          content="Achraf Mazouz, portfolio, projets, compétences, certificats, contact"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Achraf Mazouz",
            "url": "https://achrafmazouz.com",
            "sameAs": [
              "https://www.linkedin.com/in/achrafmazouz",
              "https://github.com/achrafmazouz"
            ],
            "jobTitle": "Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Personal Projects"
            }
          }
          `}
        </script>
      </Helmet>
      <Hero />
      <Projects />
      <About />
      <Certification /> {/* Add Certification section */}
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
