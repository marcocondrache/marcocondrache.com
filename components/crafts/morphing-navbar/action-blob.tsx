import { m } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  AvatarFallback,
  AvatarImage,
  MotionAvatar,
} from "@/components/ui/avatar";

import { Blob, BlobProps } from "./blob";

export function ActionBlob({
  hasButton,
  multiplier,
  children,
  className,
  ...props
}: BlobProps & { hasButton?: boolean; multiplier: number }) {
  return (
    <Blob
      key="actionBlob"
      layout
      layoutId="actionBlob"
      className={cn("px-2", className)}
      {...props}
    >
      <MotionAvatar
        key="actionAvatar"
        layout
        className="hidden size-6 fine:block sm:block"
      >
        <AvatarImage src="https://github.com/marcocondrache.png" />
        <AvatarFallback>MC</AvatarFallback>
      </MotionAvatar>
      {hasButton && (
        <m.button
          key="actionButton"
          layout
          className="text-nowrap rounded-full border border-stone-700 px-3 py-1 text-xs text-white dark:text-stone-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 / multiplier, duration: 0.4 / multiplier }}
        >
          Let&apos;s talk
        </m.button>
      )}
      {children}
    </Blob>
  );
}
