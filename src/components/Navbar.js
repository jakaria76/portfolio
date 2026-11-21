"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";
import { MenuIcon, CloseIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ hasResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    // close the mobile menu if the screen becomes desktop-sized
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-nav backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-heading">
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`relative text-sm transition-colors hover:text-heading ${
                    active === link.href ? "font-medium text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      active === link.href ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {hasResume && (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-accent/50 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
              >
                Resume
              </a>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* mobile: theme toggle stays visible next to the menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-body hover:bg-chip hover:text-heading"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-line px-4 pb-4 pt-2 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "true" : undefined}
                className={`block rounded-lg px-3 py-3 hover:bg-chip hover:text-heading ${
                  active === link.href ? "bg-chip font-medium text-accent" : "text-body"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {hasResume && (
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-3 font-medium text-accent hover:bg-chip"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}
