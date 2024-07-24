"use client";

import { format } from "@formkit/tempo";
import { WidthIcon } from "@radix-ui/react-icons";
import { useAtomValue } from "jotai";

import { Activity as ActivityType } from "@/types/strava"; // Assuming ActivityType is defined in a file named types.ts

import { sportTypeToIcon } from "@/lib/strava";
import { formatDuration } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

import { selectedDay } from "./timeline";

function DayIndicator({ day }: { day: Date }) {
  if (!useMounted()) return null;

  return <h1 className="text-sm">{format(day)}</h1>;
}

function SportIndicator({ activity }: { activity: ActivityType }) {
  return (
    <>
      {sportTypeToIcon(activity.sport_type, {
        size: 20,
        stroke: 1,
      })}
      <span className="text-sm">{formatDuration(activity.elapsed_time)}</span>
    </>
  );
}

function ScrollIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs text-stone-500">
      <WidthIcon />
      Scroll
    </div>
  );
}

export interface ActivityProps extends React.ComponentProps<"div"> {
  activitiesMap: Record<string, ActivityType[]>;
}

export function Activity({ activitiesMap, ...props }: ActivityProps) {
  const day = useAtomValue(selectedDay);
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
