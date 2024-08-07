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
  children,
  className,
  ...props
}: BlobProps & { hasButton?: boolean }) {
  return (
    <Blob
      layout
      layoutId="actionBlob"
      transition={{ duration: 2 }}
      className={cn("px-2", className)}
      {...props}
    >
      <MotionAvatar layout className="size-6">
        <AvatarImage src="https://github.com/marcocondrache.png" />
        <AvatarFallback>MC</AvatarFallback>
      </MotionAvatar>
      {hasButton && (
        <m.button
          layout
          className="text-nowrap rounded-full border border-stone-700 px-3 py-1 text-xs text-white dark:text-stone-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
        >
          Let&apos;s talk
        </m.button>
      )}
      {children}
    </Blob>
  );
}
