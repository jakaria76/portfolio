import Image from "next/image";
import { experience } from "@/data/portfolio";
import Section from "./Section";
import { ExternalIcon } from "./Icons";

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" eyebrow="Experience" title="Where I work">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.startDate}`}
            className="rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:p-8 dark:shadow-none"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={56}
                    height={56}
                    className="h-12 w-12 shrink-0 rounded-full bg-white object-contain ring-1 ring-line sm:h-14 sm:w-14"
                  />
                ) : (
                  // company initial when there is no logo
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-lg font-bold text-white"
                    aria-hidden="true"
                  >
                    {job.company.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-heading sm:text-xl">{job.role}</h3>
                  <p className="mt-1 font-medium text-body">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-accent"
                      >
                        {job.company}
                        <ExternalIcon className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      job.company
                    )}
                    {job.department && <span className="text-muted"> · {job.department}</span>}
                  </p>
                  <p className="mt-1 text-sm text-faint">
                    {[job.employmentType, job.location].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                <span className="text-sm font-medium text-accent">{job.period}</span>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>
            </div>

            {job.summary && <p className="mt-5 leading-relaxed text-muted">{job.summary}</p>}

            {job.highlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {job.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li key={tech} className="rounded-md bg-chip px-2.5 py-1 text-xs text-body ring-1 ring-line">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
