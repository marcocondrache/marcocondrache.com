"use client";

import { useEffect, useState } from "react";
import { LayoutGroup, m, MotionConfig, useCycle } from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

import { ActionBlob } from "./action-blob";
import { BlobFilter } from "./blob-filter";
import { CompanyBlob } from "./company-blob";
import { Navigation } from "./navigation";

const baseDuration = 0.5;

export default function MorphingNavbar() {
  const isCoarse = useMediaQuery("(any-pointer:coarse)");

  const [isOpen, setIsOpen] = useState(isCoarse);
  const [multiplier, cycleMultiplier] = useCycle(1, 0.25);

  useEffect(() => setIsOpen(isCoarse), [isCoarse]);

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="absolute right-3 top-3 block h-auto rounded-full px-2.5 py-0.5"
        onClick={() => cycleMultiplier()}
      >{`${multiplier}x`}</Button>
      <BlobFilter />

      <nav
        className="inline-flex flex-row space-x-7"
        style={{ filter: "url('#blobFilter')" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false || isCoarse)}
      >
        <MotionConfig transition={{ duration: baseDuration / multiplier }}>
          <LayoutGroup>
            {!isOpen && <CompanyBlob multiplier={multiplier} />}

            <m.div
              layout
              layoutDependency={isOpen}
              className="flex h-10 flex-row items-center justify-between bg-black dark:bg-white"
              style={{
                borderRadius: "9999px",
              }}
            >
              {isOpen && <CompanyBlob hasText={true} multiplier={multiplier} />}

              <Navigation />

              {isOpen && (
                <div className="flex flex-row">
                  <ActionBlob hasButton={true} multiplier={multiplier} />
                </div>
              )}
            </m.div>

            {!isOpen && <ActionBlob multiplier={multiplier} />}
          </LayoutGroup>
        </MotionConfig>
      </nav>
    </>
  );
}
