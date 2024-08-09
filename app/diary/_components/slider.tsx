import { getDayOfYear, isLeapYear } from "date-fns";

import { cn } from "@/lib/utils";

export function Slider({
  day,
  ref,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { day: Date }) {
  const isLeap = isLeapYear(day);

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
