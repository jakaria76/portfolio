import { site } from "@/data/portfolio";
import Section from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="rounded-3xl border border-line bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/5 p-6 sm:p-12">
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Have a project idea, a collaboration in mind or just want to say hi? I&apos;m always happy
          to connect, and my inbox is open.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-accent-solid px-6 py-3 font-semibold text-on-accent transition-colors hover:bg-accent-hover sm:w-auto"
        >
          <MailIcon className="h-5 w-5" />
          Say hello
        </a>

        <div className="mt-8 flex flex-col gap-4 text-muted sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-8">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all transition-colors hover:text-heading">
            <MailIcon className="h-5 w-5 shrink-0" />
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-heading">
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-heading">
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
