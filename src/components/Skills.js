import { skills } from "@/data/portfolio";
import Section from "./Section";
import { CodeIcon, DatabaseIcon, LayoutIcon, PhoneIcon, ServerIcon, TerminalIcon } from "./Icons";

const icons = {
  Languages: CodeIcon,
  Mobile: PhoneIcon,
  Backend: ServerIcon,
  Frontend: LayoutIcon,
  "Databases & Cloud": DatabaseIcon,
  "DevOps & Tools": TerminalIcon,
};

// Design: cards zoom in one after another and every skill tag
// pops in. On hover a card lifts and its icon fills with the accent colour.
export default function Skills() {
  return (
    <Section id="skills" number="03" eyebrow="Skills" title="Technologies I work with">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {skills.map((group, g) => {
          const Icon = icons[group.category] ?? CodeIcon;
          return (
            <div key={group.category} data-reveal="zoom" style={{ "--d": `${g * 90}ms` }}>
              <div className="group relative h-full rounded-2xl border border-line bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-6 dark:bg-[#0f1422] dark:shadow-none">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:rotate-6 group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-heading">{group.category}</h3>
                    <p className="text-xs text-faint">{group.items.length} technologies</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      data-reveal="pop"
                      style={{ "--d": `${g * 90 + 250 + i * 40}ms` }}
                      className="rounded-md bg-chip px-3 py-1.5 text-sm text-body ring-1 ring-line transition-colors hover:bg-accent/10 hover:text-accent hover:ring-accent/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
