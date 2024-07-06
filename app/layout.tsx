import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Marco Condrache",
  description: "Personal website, blog, and portfolio of Marco Condrache.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="bg-stone-50 antialiased dark:bg-stone-950">
        <ThemeProvider attribute="class">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
