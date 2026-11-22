import { Fragment } from "react";
import { publications, site } from "@/data/portfolio";
import Section from "./Section";
import { BookIcon, ExternalIcon } from "./Icons";

function AuthorList({ authors, highlight }) {
  return (
    <p className="text-sm leading-relaxed text-muted">
      {authors.map((author, i) => (
        <Fragment key={author}>
          {author === highlight ? (
            <strong className="font-semibold text-heading">{author}</strong>
          ) : (
            author
          )}
          {i < authors.length - 1 && ", "}
        </Fragment>
      ))}
    </p>
  );
}

// Design: tinted band; the paper card comes into focus from a blur, wrapped in a
// gradient border with a large book mark in the corner. Tags pop in.
export default function Publications() {
  return (
    <Section id="research" number="05" eyebrow="Research" title="Publications" tone="alt">
      <div className="space-y-6">
        {publications.map((paper) => (
          <div
            key={paper.doi}
            data-reveal="blur"
            className="rounded-2xl bg-gradient-to-br from-emerald-500/60 via-line to-cyan-500/60 p-px shadow-xl shadow-emerald-500/5 dark:shadow-none"
          >
          <article className="relative overflow-hidden rounded-[15px] bg-card p-5 sm:p-8 dark:bg-[#0f1422]">
            <BookIcon className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rotate-12 text-accent/[0.07] sm:h-52 sm:w-52" />
            <div className="relative">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{paper.status}</span>
              <span className="text-faint">{paper.date}</span>
            </div>

            <h3 className="mt-4 text-lg font-bold leading-snug text-heading sm:text-xl">
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {paper.title}
              </a>
            </h3>

            <div className="mt-3">
              <AuthorList authors={paper.authors} highlight={paper.highlight} />
            </div>

            <p className="mt-2 text-sm text-body">
              <em className="font-medium">{paper.journal}</em> ({paper.publisher}), {paper.details}
            </p>

            <p className="mt-5 leading-relaxed text-muted">{paper.summary}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {paper.tags.map((tag, i) => (
                <li key={tag} data-reveal="pop" style={{ "--d": `${400 + i * 60}ms` }} className="rounded-md bg-chip px-2.5 py-1 text-xs text-body ring-1 ring-line">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-solid px-3.5 py-2 text-on-accent transition-colors hover:bg-accent-hover"
              >
                <ExternalIcon className="h-4 w-4" />
                Read paper
              </a>
              {site.orcid && (
                <a
                  href={site.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-body transition-colors hover:border-accent/40 hover:text-heading"
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-[#A6CE39] text-[9px] font-bold text-white"
                    aria-hidden="true"
                  >
                    iD
                  </span>
                  ORCID
                </a>
              )}
              <span className="break-all text-faint">DOI: {paper.doi}</span>
            </div>
            </div>
          </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
