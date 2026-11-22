import { Fragment } from "react";
import { about, quickFacts } from "@/data/portfolio";
import Section from "./Section";
import { BookIcon, BriefcaseIcon, GraduationIcon, MapPinIcon, PlayIcon } from "./Icons";

const icons = {
  briefcase: BriefcaseIcon,
  education: GraduationIcon,
  play: PlayIcon,
  research: BookIcon,
  location: MapPinIcon,
};

// Turns **word** into bold text
function RichText({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-heading">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function About() {
  const [intro, ...rest] = about;

  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div>
          <p className="text-xl font-medium leading-relaxed text-body sm:text-2xl sm:leading-relaxed">
            <RichText text={intro} />
          </p>
          <div className="mt-6 space-y-4 border-l-2 border-accent/40 pl-5 text-base leading-relaxed text-muted sm:text-lg">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-6 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-faint">At a glance</p>
          <dl className="mt-4 divide-y divide-line">
            {quickFacts.map((fact) => {
              const Icon = icons[fact.icon] ?? BriefcaseIcon;
              return (
                <div key={fact.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-faint">{fact.label}</dt>
                    <dd className="mt-0.5 font-semibold text-heading">{fact.value}</dd>
                    {fact.detail && <dd className="text-sm text-muted">{fact.detail}</dd>}
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
}
