import { m, MotionValue } from "framer-motion";

export function Cursor({
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
      style={{ x, opacity }}
    />
  );
}
