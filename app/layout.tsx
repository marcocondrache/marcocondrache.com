import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Motion } from "@/components/motion";

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
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="bg-stone-50 antialiased dark:bg-stone-950">
        <ThemeProvider attribute="class">
          <Motion>{children}</Motion>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
