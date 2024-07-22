"use client";

import { format } from "@formkit/tempo";
import { WidthIcon } from "@radix-ui/react-icons";

import { useMounted } from "@/hooks/use-mounted";

export interface ActivityProps extends React.ComponentProps<"div"> {
  day: Date;
}

export function Activity({ day, ...props }: ActivityProps) {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <div className="mb-10 flex items-center justify-between" {...props}>
      <h1 className="text-base">{format(day)}</h1>
      <div className="flex items-center gap-2 text-xs text-stone-500">
        <WidthIcon />
        Scroll
      </div>
    </div>
  );
}
