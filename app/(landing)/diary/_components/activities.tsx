import {
  eachDayOfInterval,
  endOfYear,
  getDayOfYear,
  isFirstDayOfMonth,
  startOfDay,
  startOfYear,
} from "date-fns";
import { firstBy, groupBy, prop, sumBy } from "remeda";

import { Activity } from "@/types/strava";

import { Activity as ActivityComponent } from "./activity";
import { Line } from "./line";
import { Timeline } from "./timeline";

export function Activities({
  activities = [],
  isLoading = false,
}: {
  activities?: Activity[];
  isLoading?: boolean;
}) {
  const activitiesMap = groupBy(activities, (a) =>
    startOfDay(a.start_date).toISOString()
  );

  const longestActivity = firstBy(activities, [prop("elapsed_time"), "desc"]);

  function getDays() {
    const start = startOfYear(new Date());
    const end = endOfYear(new Date());

    return eachDayOfInterval({ start, end });
  }

  const renderLine = (date: Date) => {
    const activity = activitiesMap[date.toISOString()];
    const elapsed_time = sumBy(activity ?? [], prop("elapsed_time"));
    const size = isLoading
      ? 160
      : activity && longestActivity
        ? (elapsed_time * 160) / longestActivity.elapsed_time
        : 20;

    return (
      <Line
        key={date.toISOString()}
        variant={isFirstDayOfMonth(date) ? "starter" : "default"}
        state={isLoading ? "loading" : null}
        height={size}
        maxHeight={160}
      />
    );
  };

  const days = getDays();

  return (
    <>
      <ActivityComponent activitiesMap={activitiesMap} />
      <Timeline
        data={days}
        offset={0}
        defaultIndex={getDayOfYear(new Date()) - 1}
      >
        {days.map((date) => renderLine(date))}
      </Timeline>
    </>
  );
}
