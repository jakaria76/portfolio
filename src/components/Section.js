// Shared section wrapper.
// number: "01", "02"... shown small next to the section label
// tone:   "alt" gives the section a tinted band so neighbouring sections look different
// align:  "center" centers the header
export default function Section({ id, number, eyebrow, title, description, tone, align, children }) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`relative scroll-mt-16 overflow-hidden py-14 sm:py-20 lg:py-24 ${
        tone === "alt" ? "border-y border-line bg-chip/60 dark:bg-white/[0.02]" : ""
      }`}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
          <p
            className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent ${
              centered ? "justify-center" : ""
            }`}
          >
            {number && <span className="tabular-nums text-faint">{number}</span>}
            <span data-reveal="draw-x" className="block h-px w-10 bg-accent" aria-hidden="true" />
            <span data-reveal="up">{eyebrow}</span>
          </p>
          <h2
            data-reveal="up"
            style={{ "--d": "100ms" }}
            className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p data-reveal="up" style={{ "--d": "180ms" }} className="mt-3 text-base text-muted sm:text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
