"use client";

import { cn } from "@/lib/utils";

export function CraftContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "not-prose linear-border isolate my-5 inline-flex flex-row place-content-center overflow-auto rounded-md bg-alabster dark:bg-black md:col-span-3 md:!col-start-1",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
