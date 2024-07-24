"use client";

import { useQuery } from "@tanstack/react-query";

import { Activity } from "@/types/strava";

import { Activities } from "./activities";

export function ActivitiesLoader({
  promise,
}: {
  promise: Promise<Activity[]>;
}) {
  const { data, isLoading } = useQuery<Activity[]>({
    queryKey: ["activities"],
    queryFn: () => promise,
  });

  return <Activities activities={data} isLoading={isLoading} />;
}
