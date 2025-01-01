import { LazyMotion, domMax } from "motion/react";

export function Motion({ children }: React.PropsWithChildren) {
  return (
    <LazyMotion strict features={domMax}>
      {children}
    </LazyMotion>
  );
}
