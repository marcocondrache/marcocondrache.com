import { cn } from "@/lib/utils";

export function Blur({ className, ...rest }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "tablet:h-40 pointer-events-none fixed left-0 z-30 h-28 w-screen opacity-95 blur backdrop-blur-lg",
        className
      )}
      {...rest}
    />
  );
}
