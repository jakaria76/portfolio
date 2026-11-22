import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const fullTitle = `${site.name} | ${site.title}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: fullTitle, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  applicationName: site.name,
  openGraph: {
    type: "profile",
    firstName: "Jakaria",
    lastName: "Mahmud",
    username: "jakaria76",
    url: site.url,
    siteName: site.name,
    title: fullTitle,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: site.description,
  },
  robots: { index: true, follow: true },
  ...(site.googleVerification && {
    verification: { google: site.googleVerification },
  }),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before the page paints, so a visitor who chose dark mode
// never sees a flash of the light theme. Light is the default.
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

// Decides before the page paints whether to show the loading screen:
// skipped for search-engine bots (good for SEO) and for repeat visits in the same session.
const preloaderScript = `(function(){var d=document.documentElement;try{var bot=/bot|crawl|spider|slurp|lighthouse|pagespeed|preview|facebookexternalhit|linkedin|whatsapp/i.test(navigator.userAgent);if(bot||sessionStorage.getItem("preloaded")){d.classList.add("preloader-skip");return}}catch(e){}d.classList.add("preloading")})();`;

// Turns on scroll animations for real visitors. Bots and people who prefer
// reduced motion see everything at once. Safety net: if the page script never
// starts, the animations are switched off so no content stays hidden.
const revealScript = `(function(){var d=document.documentElement;try{if(/bot|crawl|spider|slurp|lighthouse|pagespeed|preview|facebookexternalhit|linkedin|whatsapp/i.test(navigator.userAgent)||matchMedia("(prefers-reduced-motion: reduce)").matches)return}catch(e){return}d.classList.add("reveal-on");setTimeout(function(){if(!window.__revealReady)d.classList.remove("reveal-on")},6000)})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        {site.preloaderSeconds > 0 && (
          <script dangerouslySetInnerHTML={{ __html: preloaderScript }} />
        )}
        {/* without JavaScript the loading screen could never finish, so hide it */}
        <noscript>
          <style>{`#preloader{display:none!important}`}</style>
        </noscript>
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. dark-mode or screen
          filter extensions) add attributes like style="filter:none" to <body>
          before React loads. This only ignores attribute differences on <body>
          itself; everything inside is still checked normally. */}
      <body className="overflow-x-clip bg-page text-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
