import { PropsWithChildren } from "react";
import { AnimatePresence, HTMLMotionProps, m } from "framer-motion";

import { cn } from "@/lib/utils";

export type BlobProps = PropsWithChildren<
  Omit<HTMLMotionProps<"div">, "children">
>;

export function Blob({ className, children, ...props }: BlobProps) {
  return (
    <m.div
      className={cn(
        "z-10 flex h-10 items-center justify-center space-x-3 bg-black px-3 dark:bg-white",
        className
      )}
      style={{
        borderRadius: "9999px",
      }}
      {...props}
    >
      <AnimatePresence>{children}</AnimatePresence>
    </m.div>
  );
}
