import { education } from "@/data/portfolio";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I've studied">
      <ol className="relative ml-1.5 space-y-10 border-l border-line pl-6 sm:pl-8">
        {education.map((item) => (
          <li key={item.degree} className="relative">
            <span
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-page sm:-left-[39px]"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-accent">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-heading">{item.degree}</h3>
            <p className="mt-1 text-muted">{item.school}</p>
            {item.detail && <p className="mt-1 text-sm text-faint">{item.detail}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
