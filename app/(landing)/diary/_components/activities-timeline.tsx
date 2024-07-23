import { api } from "@/server/strava";
import {
  addDay,
  dayOfYear,
  isBefore,
  monthStart,
  sameDay,
  yearEnd,
  yearStart,
} from "@formkit/tempo";

import { Skeleton } from "@/components/ui/skeleton";

import { Activity as ActivityComponent } from "./activity";
import { Line } from "./line";
import { Timeline } from "./timeline";

export function ActivitiesTimelineSkeleton() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Skeleton className="h-[100px] w-1/3" />
        <Skeleton className="h-[100px] w-full" />
      </div>
      <Skeleton className="h-[100px] w-full" />
    </>
  );
}

export async function ActivitiesTimeline() {
  const activities = await api.getActivities();

  const getDays = () => {
    const now = new Date();
    const start = yearStart(now);
    const end = yearEnd(now);

    const days = [];
    for (let i = start; isBefore(i, end); i = addDay(i)) days.push(i);

    return days;
  };

  const renderLine = (date: Date) => (
    <Line
      key={date.toISOString()}
      variant={sameDay(date, monthStart(date)) ? "starter" : "default"}
      style={{
        height: `${Math.floor(Math.random() * (160 - 40 + 1)) + 40}px`,
      }}
    />
  );

  const days = getDays();

  return (
    <>
      <ActivityComponent />
      <Timeline data={days} offset={0} defaultIndex={dayOfYear(new Date()) - 1}>
        {days.map((date) => renderLine(date))}
      </Timeline>
    </>
  );
}
