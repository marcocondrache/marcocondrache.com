"use client";

import { format } from "date-fns";
import { RxWidth } from "react-icons/rx";

import { Activity as ActivityType } from "@/types/strava";
import { sportTypeToIcon } from "@/lib/strava";
import { formatDuration } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

function DayIndicator({ day }: { day: Date }) {
  if (!useMounted()) return null;

  return <h1 className="text-sm">{format(day, "eee, MMMM d")}</h1>;
}

function SportIndicator({ activity }: { activity: ActivityType }) {
  return (
    <>
      {sportTypeToIcon(activity.sport_type, {
        size: 20,
        className: "stroke-1",
      })}
      <span className="text-sm">{formatDuration(activity.elapsed_time)}</span>
    </>
  );
}

function ScrollIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs text-stone-400">
      <RxWidth />
      Scroll
    </div>
  );
}

export interface ActivityProps extends React.ComponentProps<"div"> {
  day: Date;
  activitiesMap: Record<string, ActivityType[]>;
}

export function Activity({ day, activitiesMap, ...props }: ActivityProps) {
  const activities = activitiesMap[day.toISOString()];

  return (
    <div className="mb-10 flex items-center justify-between" {...props}>
      <div className="flex w-full items-center space-x-2">
        <DayIndicator day={day} />
        {activities?.[0] && (
          <>
            <span className="text-sm text-stone-500">•</span>
            <SportIndicator activity={activities[0]} />
          </>
        )}
      </div>
      <ScrollIndicator />
    </div>
  );
}
