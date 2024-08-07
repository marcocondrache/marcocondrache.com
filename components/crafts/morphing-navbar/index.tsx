"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, m } from "framer-motion";

import { ActionBlob } from "./action-blob";
import { BlobFilter } from "./blob-filter";
import { CompanyBlob } from "./company-blob";
import { Navigation } from "./navigation";

export function MorphingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BlobFilter />
      <nav
        className="relative flex flex-row place-content-center space-x-7"
        style={{ filter: "url('#blobFilter')" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <AnimatePresence>
          <LayoutGroup>
            {!isOpen && <CompanyBlob />}

            <m.div
              layout
              layoutDependency={isOpen}
              transition={{ duration: 2 }}
              className="flex h-10 flex-row items-center justify-between bg-black dark:bg-white"
              style={{
                borderRadius: "9999px",
              }}
            >
              {isOpen && <CompanyBlob hasText={true} />}

              <Navigation />

              {isOpen && (
                <div className="flex flex-row">
                  <ActionBlob hasButton={true} />
                </div>
              )}
            </m.div>

            {!isOpen && <ActionBlob />}
          </LayoutGroup>
        </AnimatePresence>
      </nav>
    </>
  );
}
