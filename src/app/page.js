import fs from "fs";
import path from "path";
import { site, skills, education, projects, publications } from "@/data/portfolio";
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

// Structured data (JSON-LD) that tells Google, in its own language:
// this is the profile page of one person, these are their profiles,
// apps and research paper.
function buildJsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;
  const playStoreApps = projects
    .map((project) => ({
      project,
      url: project.links.find((link) => link.type === "playstore" && link.url)?.url,
    }))
    .filter((item) => item.url);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        alternateName: site.alternateNames,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} | ${site.title}`,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: site.alternateNames,
        url: site.url,
        image: `${site.url}${site.photo}`,
        jobTitle: site.title,
        description: site.description,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        alumniOf: education.map((item) => ({
          "@type": "EducationalOrganization",
          name: item.school,
        })),
        knowsAbout: skills.flatMap((group) => group.items),
        sameAs: [site.github, site.linkedin, site.orcid].filter(Boolean),
        ...(site.orcid && {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "ORCID",
            value: site.orcid.replace("https://orcid.org/", ""),
          },
        }),
      },
      ...playStoreApps.map(({ project, url }) => ({
        "@type": "MobileApplication",
        name: project.title,
        description: project.description,
        operatingSystem: "Android",
        applicationCategory: "MobileApplication",
        url,
        author: { "@id": personId },
      })),
      ...publications.map((paper) => ({
        "@type": "ScholarlyArticle",
        headline: paper.title,
        url: paper.url,
        sameAs: `https://doi.org/${paper.doi}`,
        datePublished: "2026-10-26",
        author: paper.authors.map((name) =>
          name === paper.highlight ? { "@id": personId } : { "@type": "Person", name }
        ),
        isPartOf: {
          "@type": "Periodical",
          name: paper.journal,
          publisher: { "@type": "Organization", name: paper.publisher },
        },
      })),
    ],
  };
}

export default function Home() {
  const hasPhoto = publicFileExists(site.photo);
  const hasResume = publicFileExists(site.resume);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
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
