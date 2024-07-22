"use client";

import { useCallback, useMemo, useState } from "react";
import {
  addDay,
  dayOfYear,
  isBefore,
  monthStart,
  sameDay,
  yearEnd,
  yearStart,
} from "@formkit/tempo";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Activity } from "./_components/activity";
import { Line } from "./_components/line";
import { Timeline } from "./_components/timeline";

export default function Page() {
  const [day, setDay] = useState(new Date());

  const easierLayout = useMediaQuery("(any-pointer: coarse)");

  const days = useMemo(() => {
    const now = new Date();
    const start = yearStart(now);
    const end = yearEnd(now);

    const days = [];
    for (let i = start; isBefore(i, end); i = addDay(i)) days.push(i);

    return days;
  }, []);

  const renderLine = useCallback(
    (date: Date) => (
      <Line
        key={date.toISOString()}
        variant={sameDay(date, monthStart(date)) ? "starter" : "default"}
        style={{
          height: `${Math.floor(Math.random() * (160 - 40 + 1)) + 40}px`,
        }}
      />
    ),
    []
  );

  return (
    <section className="space-y-8">
      <Activity day={day} />
      <Timeline
        data={days}
        offset={0}
        renderLine={renderLine}
        selectedLine={(date) => setDay(date || new Date())}
        defaultIndex={dayOfYear(new Date()) - 1}
        easierLayout={easierLayout}
      />
      <p>
        This component allows me to scroll through the entire year and view my
        activities on a day-by-day basis. This is useful for observing the
        <em> consistency</em> of my training plan throughout the year.
      </p>
      <p>
        By visualizing my activities in this format, I can easily identify
        <em> patterns</em> in my workout routine and assess how well I&apos;m
        adhering to my <em>fitness</em> goals.
      </p>
    </section>
  );
}
