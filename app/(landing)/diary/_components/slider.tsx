import { getDayOfYear, isLeapYear } from "date-fns";
import { useAtomValue } from "jotai";

import { cn } from "@/lib/utils";

import { selectedDay } from "./timeline";

export function Slider({
  ref,
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const day = useAtomValue(selectedDay);
  const isLeap = isLeapYear(new Date());

  return (
    <div
      ref={ref}
      key="slider"
      className={cn("scrollbar-hide overflow-auto", className)}
      role="slider"
      aria-valuenow={getDayOfYear(day)}
      aria-valuemin={1}
      aria-valuemax={isLeap ? 366 : 365}
      aria-valuetext={day.toLocaleString()}
      {...props}
    >
      {children}
    </div>
  );
}
