import { education } from "@/data/portfolio";
import Section from "./Section";
import { GraduationIcon } from "./Icons";

// Design: a horizontal roadmap on desktop (a vertical one on mobile).
// The connecting line draws itself, each step's icon pops in and the cards
// swing open like pages, one after another.
export default function Education() {
  return (
    <Section id="education" number="06" eyebrow="Education" title="Where I've studied">
      <ol className="relative grid gap-6 md:grid-cols-3 md:gap-8">
        {/* connecting line: horizontal on desktop, vertical on mobile */}
        <span
          data-reveal="draw-x"
          className="absolute left-6 right-6 top-6 hidden h-0.5 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500/20 md:block"
          aria-hidden="true"
        />
        <span
          data-reveal="draw-y"
          className="absolute bottom-6 left-6 top-6 w-0.5 rounded-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500/20 md:hidden"
          aria-hidden="true"
        />

        {education.map((item, i) => (
          <li key={item.degree} className="relative pl-16 md:pl-0">
            <div
              data-reveal="pop"
              style={{ "--d": `${300 + i * 250}ms` }}
              className="absolute left-0 top-0 md:relative"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-page ${
                  i === 0
                    ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30"
                    : "border border-line bg-card text-accent"
                }`}
              >
                <GraduationIcon className="h-5 w-5" />
              </span>
            </div>

            <div data-reveal="flip" style={{ "--d": `${400 + i * 250}ms` }} className="md:mt-6">
              <div className="group h-full rounded-2xl border border-line bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:p-6 dark:shadow-none">
                <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-heading">{item.degree}</h3>
                <p className="mt-2 text-muted">{item.school}</p>
                {item.detail && (
                  <p className="mt-3 border-t border-line pt-3 text-sm font-medium text-body">{item.detail}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
