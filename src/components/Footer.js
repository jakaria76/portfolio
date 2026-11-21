import { site } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-sm text-faint sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-1">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="ml-3 rounded-lg border border-line px-3 py-1.5 font-medium text-body transition-colors hover:border-accent/40 hover:text-heading"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
