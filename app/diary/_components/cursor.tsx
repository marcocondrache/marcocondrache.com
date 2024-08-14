import { memo } from "react";
import { m, MotionValue } from "framer-motion";

function Component({
  x,
  opacity,
}: {
  x: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  return (
    <m.div
      key="cursor"
      className="absolute left-0 top-0 z-10 h-full w-[1.5px] bg-orange-600"
      style={{ x, opacity, willChange: "transform, opacity" }}
    />
  );
}

export const Cursor = memo(Component);
