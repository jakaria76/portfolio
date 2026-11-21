import fs from "fs";
import path from "path";
import { site, skills, education, publications } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Shows your photo / resume button only when the file exists in /public
function publicFileExists(file) {
  return fs.existsSync(path.join(process.cwd(), "public", file));
}

export default function Home() {
  const hasPhoto = publicFileExists(site.photo);
  const hasResume = publicFileExists(site.resume);

  // Structured data so Google understands this site is about a person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: publications.map((paper) => paper.highlight),
    url: site.url,
    jobTitle: site.title,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education[0].school,
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: skills.flatMap((group) => group.items),
    // links the published paper to you for Google
    subjectOf: publications.map((paper) => ({
      "@type": "ScholarlyArticle",
      headline: paper.title,
      url: paper.url,
      author: paper.authors.map((name) => ({ "@type": "Person", name })),
      isPartOf: { "@type": "Periodical", name: paper.journal, publisher: paper.publisher },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar hasResume={hasResume} />
      <main>
        <Hero hasPhoto={hasPhoto} hasResume={hasResume} />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
