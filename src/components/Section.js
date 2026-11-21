export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">{title}</h2>
          {description && <p className="mt-3 text-base text-muted sm:text-lg">{description}</p>}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
