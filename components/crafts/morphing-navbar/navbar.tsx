"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutGroup, m, MotionConfig, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Blob } from "./blob";
import { BlobFilter } from "./blob-filter";
import { CompanyLogo, MotionCompanyText } from "./company-logo";
import { Navigation } from "./navigation";

const baseDuration = 0.5;

export default function MorphingNavbar() {
  const blobXOffset = 55;
  const isCoarse = useMediaQuery("(any-pointer:coarse)");
  const isReduced = useReducedMotion();

  const [isOpen, setIsOpen] = useState(isCoarse || isReduced);

  return (
    <>
      <BlobFilter />

      <div className="flex w-full items-center self-stretch  overflow-auto px-4 md:justify-center">
        <nav
          className="relative flex w-full min-w-[40.5rem] flex-row justify-center"
          style={{ filter: "url('#blobFilter')" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => !isReduced && setIsOpen(false)}
        >
          <MotionConfig
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <LayoutGroup>
              <Blob
                animate={isOpen ? "consume" : undefined}
                variants={{
                  consume: {
                    scale: 0.8,
                    x: -blobXOffset,
                  },
                }}
                className={"absolute left-28 top-0 px-2"}
              />

              <m.div
                animate={isOpen ? { x: "-110%" } : undefined}
                className="absolute top-0 z-30 flex h-full items-center"
                style={{ left: "6.7rem" }}
              >
                <CompanyLogo className="ml-4 mr-3 h-4" />
              </m.div>

              <m.div
                layout
                layoutDependency={isOpen}
                className={cn(
                  "elevation-border z-20 flex h-10 flex-row items-center bg-white dark:bg-stone-900"
                )}
                style={{
                  contain: "paint",
                  borderRadius: "9999px",
                }}
              >
                {isOpen && (
                  <MotionCompanyText
                    layout
                    key="companyText"
                    className="h-3 pl-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                )}

                <Navigation />

                {isOpen && (
                  <m.button
                    layout
                    key="actionButton"
                    className="ml-7 mr-2 text-nowrap rounded-full border border-stone-300 px-3 py-1 text-xs text-black dark:border-stone-700 dark:text-white"
                  >
                    Let&apos;s talk
                  </m.button>
                )}
              </m.div>

              <m.div
                animate={isOpen ? { x: "-140%" } : undefined}
                className="absolute top-0 z-30 flex h-full items-center"
                style={{ right: "7.5rem" }}
              >
                <Image
                  key="actionAvatar"
                  className="aspect-square size-6 overflow-hidden rounded-full"
                  src={"https://github.com/marcocondrache.png"}
                  alt=""
                  width={100}
                  height={100}
                />
              </m.div>

              <Blob
                style={{ right: "7rem" }}
                animate={isOpen ? "consume" : undefined}
                variants={{
                  consume: {
                    scale: 0.8,
                    x: blobXOffset,
                  },
                }}
                className={"absolute top-0 px-2"}
              />
            </LayoutGroup>
          </MotionConfig>
        </nav>
      </div>
    </>
  );
}
