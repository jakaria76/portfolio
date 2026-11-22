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

// Design: text slides in from the left, the "At a glance" card from the right,
// and each fact inside the card follows one after another.
export default function About() {
  const [intro, ...rest] = about;

  return (
    <Section id="about" number="01" eyebrow="About" title="A little about me">
      <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div data-reveal="left">
          <p className="text-xl font-medium leading-relaxed text-body sm:text-2xl sm:leading-relaxed">
            <RichText text={intro} />
          </p>
          <div className="relative mt-6 space-y-4 pl-5 text-base leading-relaxed text-muted sm:text-lg">
            <span
              data-reveal="draw-y"
              style={{ "--d": "300ms" }}
              className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500/30"
              aria-hidden="true"
            />
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>

        <div
          data-reveal="right"
          style={{ "--d": "150ms" }}
          className="relative rounded-2xl border border-line bg-card p-5 shadow-xl shadow-slate-900/5 sm:p-6 dark:shadow-none"
        >
          <div
            className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-faint">At a glance</p>
          <dl className="mt-4 divide-y divide-line">
            {quickFacts.map((fact, i) => {
              const Icon = icons[fact.icon] ?? BriefcaseIcon;
              return (
                <div
                  key={fact.label}
                  data-reveal="up"
                  style={{ "--d": `${300 + i * 110}ms` }}
                  className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-solid group-hover:text-on-accent">
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
