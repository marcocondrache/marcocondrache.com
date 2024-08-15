import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Blur } from "@/components/blur";
import { Footer } from "@/components/footer";
import { Motion } from "@/components/motion";
import { Navigation } from "@/components/navigation";

const newsreader = Newsreader({
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const switzer = localFont({
  src: "../fonts/switzer.ttf",
  variable: "--font-switzer",
});

const fonts = [switzer, newsreader];

export const metadata: Metadata = {
  title: "Marco Condrache",
  creator: "Marco Condrache",
  publisher: "Marco Condrache",
  description: "Personal website, blog, and portfolio.",
  authors: [{ name: "Marco Condrache", url: "https://marcocondrache.com" }],
  category: "technology",
  metadataBase: new URL("https://marcocondrache.com"),
  openGraph: {
    title: "Marco Condrache",
    description: "Personal website, blog, and portfolio.",
    url: "https://marcocondrache.com",
    siteName: "Marco Condrache",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Mihai Condrache",
    description: "Personal website, blog, and portfolio.",
    siteId: "marcocondrache",
    creator: "@marcocondrache",
    creatorId: "marcocondrache",
  },
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fonts.map((f) => f.variable))}>
      <body>
        <Motion>
          <main className="container relative min-h-screen max-w-6xl py-10">
            <div className="grid h-full grid-flow-row grid-cols-1 gap-y-8 md:grid-cols-[1fr_42.5rem_1fr]">
              <Navigation className="pb-4 pt-10 md:col-start-2" />

              {children}
            </div>
          </main>

          <Footer />
        </Motion>

        <Blur className="top-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <Blur className="bottom-0 [mask-image:linear-gradient(to_top,black,transparent)]" />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
