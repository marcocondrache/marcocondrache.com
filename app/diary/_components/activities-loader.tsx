"use client";

import { useEffect, useState } from "react";

import { Activity } from "@/types/strava";

import { Activities } from "./activities";

export function ActivitiesLoader({
  promise,
}: {
  promise: Promise<Activity[]>;
}) {
  const [data, setData] = useState<Activity[] | null>(null);

  useEffect(() => {
    promise?.then(setData)?.catch(() => setData([]));
  }, [promise]);

  return (
    <Activities activities={data ?? []} isLoading={!data} maxHeight={300} />
  );
}
