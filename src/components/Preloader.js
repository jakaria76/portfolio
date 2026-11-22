"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";

const FADE_MS = 700;

// Full-screen loading screen shown on the first visit of a browser session.
// It is rendered in the HTML from the start (so the page never flashes first),
// then the progress bar fills for `site.preloaderSeconds` and it fades away.
// A small script in layout.js adds "preloader-skip" to <html> for repeat
// visits in the same session and for search-engine bots, which hides it at once.
export default function Preloader({ hasPhoto }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const finish = () => {
      root.classList.remove("preloading");
      window.dispatchEvent(new Event("preloader:done"));
      try {
        sessionStorage.setItem("preloaded", "1");
      } catch {
        // storage blocked: the loader will simply show again next time
      }
    };

    if (root.classList.contains("preloader-skip") || !site.preloaderSeconds) {
      finish();
      setGone(true);
      return;
    }

    const duration = site.preloaderSeconds * 1000;
    const start = performance.now();
    let frame;
    let fadeTimer;

    // The progress bar animates with requestAnimationFrame (smooth)...
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so it feels quick at first and settles at 100%
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // ...but finishing uses a plain timer, which also runs when animation frames
    // are paused (e.g. the site was opened in a background tab), so it never gets stuck.
    const doneTimer = setTimeout(() => {
      cancelAnimationFrame(frame);
      setProgress(100);
      setLeaving(true);
      finish();
      fadeTimer = setTimeout(() => setGone(true), FADE_MS);
    }, duration);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(doneTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      id="preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-page px-4 transition-all ease-out ${
        leaving ? "pointer-events-none -translate-y-6 opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center">
        {/* photo with spinning ring */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32">
          <div
            className="absolute inset-0 rounded-full border-[3px] border-accent/15 border-t-accent motion-safe:animate-spin"
            style={{ animationDuration: "1.1s" }}
            aria-hidden="true"
          />
          <div className="absolute inset-[7px] overflow-hidden rounded-full bg-chip ring-1 ring-line">
            {hasPhoto ? (
              // plain <img>: it must show instantly, before Next.js image loading kicks in
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.photo} alt="" className="h-full w-full object-cover" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-3xl font-extrabold text-heading">
                MJ
              </span>
            )}
          </div>
        </div>

        <p className="animate-fade-up mt-7 text-center text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
          {site.name}
        </p>
        <p className="animate-fade-up mt-2 text-center text-sm font-semibold [animation-delay:120ms] sm:text-base">
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            {site.title}
          </span>
        </p>

        {/* progress bar */}
        <div className="mt-8 w-56 sm:w-64">
          <div className="h-1.5 overflow-hidden rounded-full bg-chip ring-1 ring-line">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs font-medium text-faint">
            <span>Loading portfolio</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
