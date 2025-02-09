"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { FooterLink } from "./footer-link";
import { ArrowUp } from "lucide-react";
import { SocialIcons } from "./social-icons";

export function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="fixed w-[42.5rem] inset-x-auto bottom-6 p-1 dark:bg-stone-900 rounded-full flex items-center justify-between">
      <Button variant="ghost" size="icon" className="size-8 rounded-full">
        <ArrowUp className="size-4" />
      </Button>
      <div className="flex items-center justify-center gap-1">
        <FooterLink href="/">
          <SocialIcons.LinkedIn className="size-3.5 fill-foreground" />
        </FooterLink>
        <FooterLink href="/">
          <SocialIcons.X className="size-3.5 fill-foreground" />
        </FooterLink>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="size-8 rounded-full text-base"
          variant="ghost"
          size="icon"
        >
          <div className="size-4 rounded-full bg-stone-900 dark:bg-stone-50" />
        </Button>
      </div>
    </footer>
  );
}
