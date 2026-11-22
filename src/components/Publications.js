import { Fragment } from "react";
import { publications, site } from "@/data/portfolio";
import Section from "./Section";
import { ExternalIcon } from "./Icons";

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

export default function Publications() {
  return (
    <Section id="research" eyebrow="Research" title="Publications">
      <div className="space-y-6">
        {publications.map((paper) => (
          <article
            key={paper.doi}
            className="rounded-2xl border border-line bg-card p-5 shadow-sm transition-colors hover:border-accent/40 sm:p-8 dark:shadow-none"
          >
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
              {paper.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-chip px-2.5 py-1 text-xs text-body ring-1 ring-line">
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
          </article>
        ))}
      </div>
    </Section>
  );
}
