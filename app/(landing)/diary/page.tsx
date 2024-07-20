"use client";

import { useCallback, useMemo, useState } from "react";
import {
  addDay,
  dayOfYear,
  format,
  isBefore,
  monthStart,
  sameDay,
  yearEnd,
  yearStart,
} from "@formkit/tempo";

import { Line, Timeline, TimelineProps } from "@/components/timeline";

export default function Page() {
  const [day, setDay] = useState(new Date());
  const [offset, setOffset] = useState(0);

  const days = useMemo(() => {
    const now = new Date();
    const start = yearStart(now);
    const end = yearEnd(now);

    const days = [];
    for (let i = start; isBefore(i, end); i = addDay(i)) days.push(i);

    return days;
  }, []);

  const renderLine = useCallback(
    ((date, ref) => (
      <Line
        key={date.toISOString()}
        ref={ref as React.LegacyRef<HTMLDivElement>}
        variant={sameDay(date, monthStart(date)) ? "starter" : "default"}
        style={{
          height: `${Math.floor(Math.random() * (160 - 40 + 1)) + 40}px`,
        }}
      />
    )) satisfies TimelineProps<Date>["renderLine"],
    []
  );

  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 z-10 h-full w-[100px] bg-gradient-to-r from-stone-50 to-transparent dark:from-stone-950" />
        <div className="absolute right-0 z-10 h-full w-[100px] bg-gradient-to-l from-stone-50 to-transparent dark:from-stone-950" />
        <div
          ref={(e) => setOffset(e?.offsetLeft ?? 0)}
          className="absolute left-1/2 z-20 h-[100px] w-[1.5px] -translate-x-1/2 bg-black"
        />
        <Timeline
          data={days}
          offset={offset}
          renderLine={renderLine}
          defaultIndex={dayOfYear(new Date()) - 1}
          currentLine={setDay}
        />
      </div>
      {format(day)}
    </section>
  );
}
