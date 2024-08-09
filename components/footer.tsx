"use client";

import { useSyncExternalStore } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { m } from "framer-motion";

import { cn } from "@/lib/utils";

import { ExternalLink } from "./external-link";
import { buttonVariants } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { VisuallyHidden } from "./visually-hidden";

export function Footer() {
  const y = useSyncExternalStore(
    (change) => {
      window.addEventListener("scroll", change);
      return () => window.removeEventListener("scroll", change);
    },
    () => window.scrollY,
    () => 0
  );

  return (
    <footer tabIndex={-1} role="contentinfo">
      <Drawer>
        <VisuallyHidden>
          <DrawerTitle>Footer</DrawerTitle>
        </VisuallyHidden>
        <div className="fixed inset-x-6 bottom-5 z-40 flex max-w-[calc(712px-2rem)] flex-row gap-3 md:left-1/2 md:w-full md:-translate-x-1/2">
          <DrawerTrigger
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-[unset] grow justify-between px-3 py-1.5 font-normal transition-none"
            )}
          >
            <span>marcocondrache &copy;</span>
            <span>2024</span>
          </DrawerTrigger>

          {(y ?? 0) > 20 && (
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "h-[unset]"
              )}
              onClick={() =>
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
              }
            >
              <ArrowUpIcon />
            </m.button>
          )}
        </div>
        <DrawerContent>
          <VisuallyHidden>
            <DrawerDescription>
              Footer content including disclaimer and useful links.
            </DrawerDescription>
          </VisuallyHidden>
          <div className="container mx-auto max-w-[712px] space-y-6 px-4 py-10">
            <div className="flex flex-row justify-between">
              <div className="w-3/5 space-y-5 text-left text-xs">
                <h2 className="text-lg">Disclaimer</h2>
                <p>
                  This personal website is a work in progress. I am constantly
                  learning and evolving, and so is this website.
                </p>
                <p>
                  I&apos;d like to express my gratitude to all the designers and
                  developers for the inspiration, and to the entire open source
                  community whose contributions made this website possible.
                </p>
              </div>
              <div>
                <h2 className="mb-3 text-lg">Useful links</h2>
                <div>
                  <ExternalLink href="https://github.com">github</ExternalLink>
                  <ExternalLink href="https://www.linkedin.com/in/marco-mihai-condrache/">
                    linkedin
                  </ExternalLink>
                  <ExternalLink href="https://github.com/mossida">
                    mossida
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
