import { cn } from "@/lib/utils";

export function Blur({ className, ...rest }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 z-30 h-20 w-full opacity-90 backdrop-blur-sm",
        className
      )}
      {...rest}
    />
  );
}
