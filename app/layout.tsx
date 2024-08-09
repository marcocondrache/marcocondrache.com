import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Footer } from "@/components/footer";
import { Motion } from "@/components/motion";
import { Navigation } from "@/components/navigation";

const newsreader = Newsreader({
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const fonts = [GeistSans, GeistMono, newsreader];

export const metadata: Metadata = {
  title: "Marco Condrache",
  creator: "Marco Condrache",
  publisher: "Marco Condrache",
  description: "Personal website, blog, and portfolio of Marco Condrache.",
  authors: [{ name: "Marco Condrache", url: "https://marcocondrache.com" }],
  category: "technology",
  metadataBase: new URL("https://marcocondrache.com"),
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
