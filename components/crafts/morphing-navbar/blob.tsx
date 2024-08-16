import { HTMLMotionProps, m } from "framer-motion";

import { cn } from "@/lib/utils";

export type BlobProps = HTMLMotionProps<"div">;

export function Blob({ className, children, style, ...props }: BlobProps) {
  return (
    <m.div
      className={cn(
        "z-10 flex size-10 items-center justify-center space-x-3 bg-black px-3 dark:bg-white",
        className
      )}
      style={{
        borderRadius: "9999px",
        ...style,
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}
