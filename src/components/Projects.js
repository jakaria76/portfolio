import Image from "next/image";
import { projects } from "@/data/portfolio";
import Section from "./Section";
import { ExternalIcon, GitHubIcon, PlayIcon } from "./Icons";

const linkStyles = {
  playstore: {
    label: "Google Play",
    Icon: PlayIcon,
    className:
      "rounded-lg bg-accent-solid px-3.5 py-2 text-on-accent hover:bg-accent-hover",
  },
  live: {
    label: "Live demo",
    Icon: ExternalIcon,
    className: "py-2 text-accent hover:text-accent-hover",
  },
  github: {
    label: "Source code",
    Icon: GitHubIcon,
    className: "py-2 text-body hover:text-heading",
  },
};

function ProjectLinks({ links }) {
  const visible = links.filter((link) => link.url);
  if (visible.length === 0) return null;
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-medium">
      {visible.map((link) => {
        const style = linkStyles[link.type];
        return (
          <a
            key={`${link.type}-${link.label ?? ""}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition-colors ${style.className}`}
          >
            <style.Icon className="h-4 w-4" />
            {link.label ?? style.label}
          </a>
        );
      })}
    </div>
  );
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <div className="shine relative aspect-video overflow-hidden rounded-xl border border-line">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  // No screenshot yet: show the app logo if there is one
  if (project.logo) {
    return (
      <div className="shine flex aspect-video items-center justify-center rounded-xl border border-line bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/10">
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          width={128}
          height={128}
          className="h-24 w-24 rounded-3xl shadow-lg transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110 sm:h-32 sm:w-32"
        />
      </div>
    );
  }
  // Placeholder until a screenshot or logo is added
  return (
    <div className="shine flex aspect-video items-center justify-center rounded-xl border border-line bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/10 px-4">
      <span className="text-center text-2xl font-bold text-heading/70 sm:text-3xl">{project.title}</span>
    </div>
  );
}

// Design: cards rise up with a 3D tilt (two at a time, staggered), a light
// sweeps across the image on hover and the logo tilts.
function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-6 dark:shadow-none">
      <ProjectImage project={project} />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:mt-6">
        <h4 className="text-xl font-bold text-heading">{project.title}</h4>
        <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {project.type}
        </span>
      </div>

      {project.builtAt && (
        <p className="mt-2 text-sm text-faint">
          Built at <span className="font-medium text-body">{project.builtAt}</span>
        </p>
      )}

      {project.published && (
        <p className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent">
          <PlayIcon className="h-3.5 w-3.5" />
          Published on Google Play
        </p>
      )}

      <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-chip px-2.5 py-1 text-xs text-body ring-1 ring-line">
            {tech}
          </li>
        ))}
      </ul>

      <ProjectLinks links={project.links} />
    </article>
  );
}

const groups = [
  {
    key: "mobile",
    title: "Mobile Apps",
    note: "Cross-platform apps built with Flutter, three of them live on Google Play.",
  },
  {
    key: "web",
    title: "Web Applications",
    note: "Full-stack and frontend projects built with ASP.NET Core, Laravel and React.",
  },
];

export default function Projects() {
  const grouped = groups.map((group) => ({
    ...group,
    items: projects.filter((project) => project.category === group.key),
  }));

  return (
    <Section id="projects" number="04" eyebrow="Projects" title="Things I've built">
      {/* quick jump between the two groups */}
      <nav aria-label="Project categories" className="-mt-2 mb-8 flex flex-wrap gap-3 sm:-mt-4">
        {grouped.map((group, i) => (
          <a
            data-reveal="pop"
            style={{ "--d": `${200 + i * 100}ms` }}
            key={group.key}
            href={`#projects-${group.key}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-body transition-colors hover:border-accent/40 hover:text-heading"
          >
            {group.title}
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
              {group.items.length}
            </span>
          </a>
        ))}
      </nav>

      <div className="space-y-12 sm:space-y-14">
        {grouped.map((group) => (
          <div key={group.key} id={`projects-${group.key}`} className="scroll-mt-24">
            <div data-reveal="blur" className="mb-6 border-b border-line pb-4 sm:mb-8">
              <h3 className="text-2xl font-bold text-heading">{group.title}</h3>
              <p className="mt-1 text-muted">{group.note}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {group.items.map((project, i) => (
                <div
                  key={`${group.key}-${project.title}`}
                  data-reveal="tilt"
                  style={{ "--d": `${(i % 2) * 150}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
