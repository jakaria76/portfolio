"use client";

import { useEffect } from "react";

// Watches every element with data-reveal and adds "is-visible" when it scrolls
// into view, which plays its CSS animation (see globals.css). While the loading
// screen is showing it waits, so the first section animates in right after it.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    window.__revealReady = true;
    if (!root.classList.contains("reveal-on")) return;

    const elements = () => document.querySelectorAll("[data-reveal]:not(.is-visible)");
    let observer;

    const start = () => {
      if (!("IntersectionObserver" in window)) {
        elements().forEach((el) => el.classList.add("is-visible"));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );
      elements().forEach((el) => observer.observe(el));
    };

    if (root.classList.contains("preloading")) {
      window.addEventListener("preloader:done", start, { once: true });
    } else {
      start();
    }

    return () => {
      window.removeEventListener("preloader:done", start);
      observer?.disconnect();
    };
  }, []);

  return null;
}
