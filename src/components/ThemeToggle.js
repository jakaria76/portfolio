"use client";

import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // storage blocked (private mode): the theme still switches for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="rounded-lg p-2 text-muted ring-1 ring-line transition-colors hover:bg-chip hover:text-heading"
    >
      {/* CSS picks the icon, so it is always correct even before React loads */}
      <MoonIcon className="h-5 w-5 dark:hidden" />
      <SunIcon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
