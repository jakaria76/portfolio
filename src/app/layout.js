import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });
// Bangla font, used only where Bangla text appears (via the font-bangla class)
const bangla = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-bangla",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${bangla.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
