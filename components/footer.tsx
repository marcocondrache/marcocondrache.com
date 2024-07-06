"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useWindowScroll } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Inspiration } from "./inspiration";
import { Button, buttonVariants } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export function Footer() {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <footer>
      <Drawer>
        <div className="fixed bottom-5 left-1/2 z-40 flex w-full max-w-[calc(712px-2rem)] -translate-x-1/2 flex-row gap-3">
          <DrawerTrigger
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-[unset] grow justify-between px-3 py-1.5 font-normal transition-all"
            )}
          >
            <Inspiration />
            <span>2024</span>
          </DrawerTrigger>

          {(y ?? 0) > 20 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-[unset] px-2"
              )}
              onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
            >
              <ArrowUpIcon />
            </motion.button>
          )}
        </div>
        <DrawerContent>
          <div className="container mx-auto max-w-[712px] px-4 py-10">
            <h1 className="font-serif text-2xl italic">mmc</h1>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
