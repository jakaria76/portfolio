import { site } from "@/data/portfolio";
import Section from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: "md-jakaria76", href: site.linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "jakaria76", href: site.github, Icon: GitHubIcon, external: true },
];

// Design: centred layout; a banner with a slowly moving gradient and floating
// glows zooms in, then the three contact cards pop up one by one.
export default function Contact() {
  return (
    <Section id="contact" number="07" eyebrow="Contact" title="Let's work together" align="center">
      <div
        data-reveal="zoom"
        className="animate-gradient relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-emerald-500/15 via-cyan-500/5 to-emerald-500/15 px-5 py-10 text-center sm:px-12 sm:py-14"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="animate-float absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="animate-float-slow absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            Have a project idea, a collaboration in mind or just want to say hi? I&apos;m always happy
            to connect, and my inbox is open.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent-solid px-8 py-3.5 font-semibold text-on-accent shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl sm:w-auto"
          >
            <MailIcon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
            Say hello
          </a>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 text-left md:grid-cols-[1.5fr_1fr_1fr] md:gap-4">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <li key={label} data-reveal="up" style={{ "--d": `${300 + i * 120}ms` }}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-card/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent-solid group-hover:text-on-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-faint">{label}</span>
                    <span className="block break-words text-sm font-semibold text-heading">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
