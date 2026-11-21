import { about, quickFacts } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid h-fit grid-cols-1 gap-4 min-[420px]:grid-cols-2">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-line bg-card p-5 shadow-sm dark:shadow-none">
              <dt className="text-xs font-semibold uppercase tracking-wider text-faint">{fact.label}</dt>
              <dd className="mt-2 font-semibold text-heading">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
