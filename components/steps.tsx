import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type StepProps = PropsWithChildren<{
  title: string;
  from?: string;
  to?: string | "present";
}>;

export function Step({ children, title, from, to }: StepProps) {
  const fromDate = from && new Date(from);
  const toDate = to === "present" ? "present" : to && new Date(to);

  return (
    <>
      <div className="step mt-8 flex flex-row items-center justify-between">
        <h3 className="scroll-m-20 text-lg font-medium tracking-tight">
          {title}
        </h3>
        {fromDate && toDate && (
          <span className="ml-2 text-xs text-stone-400">
            {fromDate.toLocaleDateString()}&nbsp;-&nbsp;
            {toDate === "present" ? "present" : toDate.toLocaleDateString()}
          </span>
        )}
      </div>
      {children}
    </>
  );
}

export type StepsProps = React.HTMLAttributes<HTMLDivElement>;

function StepsComponent(
  { className, children, ...props }: StepsProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      className={cn("[&>div.step]:step mb-12 ml-4 border-l pl-8", className)}
    >
      {children}
    </div>
  );
}

export const Steps = React.forwardRef(StepsComponent);
