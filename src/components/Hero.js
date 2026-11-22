import Image from "next/image";
import { site } from "@/data/portfolio";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Hero({ hasPhoto, hasResume }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      {/* soft glow in the background */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] max-w-[200vw] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:gap-12">
        {/* photo: on top on mobile, on the right on desktop */}
        <div className="animate-fade-up mx-auto md:order-last md:mx-0">
          <div className="relative h-40 w-40 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <div className="absolute inset-0 rotate-6 rounded-3xl border border-accent/30" aria-hidden="true" />
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/5" aria-hidden="true" />
            {hasPhoto ? (
              <Image
                src={site.photo}
                alt={`Photo of ${site.name}`}
                fill
                priority
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 288px"
                className="rounded-3xl object-cover shadow-xl ring-1 ring-line"
              />
            ) : (
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-5xl font-extrabold text-heading/80 ring-1 ring-line sm:text-6xl">
                MJ
              </div>
            )}
          </div>
        </div>

        <div className="animate-fade-up text-center [animation-delay:100ms] md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently at Mariners Group
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-heading sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          {site.banglaName && (
            <p lang="bn" className="font-bangla mt-2 text-lg font-medium text-faint sm:text-xl">
              {site.banglaName}
            </p>
          )}
          <p className="mt-3 text-xl font-semibold sm:mt-4 sm:text-3xl">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {site.title}
            </span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
            {site.tagline}
          </p>

          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-faint md:justify-start">
            <MapPinIcon className="h-4 w-4" />
            {site.location}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-solid px-6 py-3 font-semibold text-on-accent shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            {hasResume && (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-card px-6 py-3 font-semibold text-heading transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-muted md:justify-start">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="rounded-lg p-2 transition-colors hover:bg-chip hover:text-heading">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
