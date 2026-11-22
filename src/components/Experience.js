import Image from "next/image";
import { experience } from "@/data/portfolio";
import Section from "./Section";
import { ExternalIcon } from "./Icons";

// Design: a timeline. The line draws itself downward, the company logo pops in
// as the timeline node, and the card slides in from the right with its points
// and tech tags following in sequence.
export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" number="02" eyebrow="Experience" title="Where I work">
      <ol className="relative">
        <span
          data-reveal="draw-y"
          className="absolute left-6 top-2 h-full w-0.5 rounded-full bg-gradient-to-b from-emerald-500 via-cyan-500/50 to-transparent sm:left-7"
          aria-hidden="true"
        />
        {experience.map((job) => (
          <li key={`${job.company}-${job.startDate}`} className="relative pb-8 pl-16 last:pb-0 sm:pl-24">
            {/* timeline node */}
            <div data-reveal="pop" style={{ "--d": "200ms" }} className="absolute left-0 top-0">
              <div className="relative">
                {job.current && (
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30 motion-reduce:hidden"
                    style={{ animationDuration: "2.4s" }}
                    aria-hidden="true"
                  />
                )}
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={56}
                    height={56}
                    className="relative h-12 w-12 rounded-full bg-white object-contain shadow-lg ring-4 ring-page sm:h-14 sm:w-14"
                  />
                ) : (
                  <div
                    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 text-lg font-bold text-white ring-4 ring-page sm:h-14 sm:w-14"
                    aria-hidden="true"
                  >
                    {job.company.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <article
              data-reveal="right"
              style={{ "--d": "300ms" }}
              className="overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-slate-900/5 transition-colors hover:border-accent/40 dark:shadow-none"
            >
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500" aria-hidden="true" />
              <div className="p-5 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
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

                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                    <span className="rounded-lg bg-chip px-3 py-1 text-sm font-semibold text-accent ring-1 ring-line">
                      {job.period}
                    </span>
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
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    {job.highlights.map((point, i) => (
                      <li
                        key={point}
                        data-reveal="left"
                        style={{ "--d": `${450 + i * 120}ms` }}
                        className="flex gap-3"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {job.stack.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                    {job.stack.map((tech, i) => (
                      <li
                        key={tech}
                        data-reveal="pop"
                        style={{ "--d": `${600 + i * 45}ms` }}
                        className="rounded-md bg-chip px-2.5 py-1 text-xs text-body ring-1 ring-line"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
