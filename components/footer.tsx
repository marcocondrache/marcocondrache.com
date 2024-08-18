import Link from "next/link";
import { PiXLogo } from "react-icons/pi";
import { RxLinkedinLogo } from "react-icons/rx";

import { cn } from "@/lib/utils";

import { FooterData } from "./footer-data";
import { FooterToggle } from "./footer-toggle";
import { ScrollButton } from "./scroll-button";
import { buttonVariants } from "./ui/button";

export function Footer() {
  return (
    <footer className="elevation-border fixed inset-x-6 bottom-6 z-40 flex max-w-[calc(712px-2rem)] items-center justify-between overflow-hidden rounded-full bg-white p-1 pl-5 text-sm text-stone-600 contain-content dark:bg-stone-900 dark:text-stone-100 md:left-1/2 md:w-full md:-translate-x-1/2">
      <FooterData />

      <div className="flex items-center text-base">
        <ScrollButton />
        <Link
          aria-label="My profile on X"
          href={"https://x.com/marcocondrache"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-8 rounded-full text-base"
          )}
          target="_blank"
        >
          <PiXLogo />
        </Link>
        <Link
          aria-label="My profile on Linkedin"
          href={"https://www.linkedin.com/in/marco-mihai-condrache/"}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-8 rounded-full text-base"
          )}
          target="_blank"
        >
          <RxLinkedinLogo />
        </Link>
        <FooterToggle />
      </div>
    </footer>
  );
}
