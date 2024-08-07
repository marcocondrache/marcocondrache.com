import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Provider as StateProvider } from "jotai";

import { Motion } from "@/components/motion";
import { QueryProvider } from "@/components/query-provider";

const newsreader = Newsreader({
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const fonts = [GeistSans, GeistMono, newsreader];

export const metadata: Metadata = {
  title: "Marco Condrache",
  description: "Personal website, blog, and portfolio of Marco Condrache.",
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
        <QueryProvider>
          <StateProvider>
            <ThemeProvider attribute="class">
              <Motion>{children}</Motion>
            </ThemeProvider>
            <SpeedInsights />
            <Analytics />
          </StateProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
