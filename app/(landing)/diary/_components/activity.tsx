"use client";

import { format } from "@formkit/tempo";
import { WidthIcon } from "@radix-ui/react-icons";
import { useAtomValue } from "jotai";

import { useMounted } from "@/hooks/use-mounted";

import { selectedDay } from "./timeline";

export function Activity({ ...props }: React.ComponentProps<"div">) {
  const day = useAtomValue(selectedDay);
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
