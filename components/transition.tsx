import { m } from "framer-motion";

export function Transition({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <m.div
      layoutId="transition"
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      {children}
    </m.div>
  );
}
