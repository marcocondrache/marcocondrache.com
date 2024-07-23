import { Suspense } from "react";
import { api } from "@/server/strava";

import { ActivitiesTimeline } from "./_components/activities-timeline";

export default async function Page() {
  const activitiesPromise = api.getActivities();

  return (
    <section className="space-y-8">
      <Suspense>
        <ActivitiesTimeline activitiesPromise={activitiesPromise} />
      </Suspense>
      <p>
        This component allows to scroll through the entire year and view my
        activities on a day-by-day basis. This is useful for observing the
        <em> consistency</em> of my training plan throughout the year.
      </p>
      <p className="!mb-20">
        By visualizing my activities in this format, I can easily identify
        <em> patterns</em> in my workout routine and assess how well I&apos;m
        adhering to my <em>fitness</em> goals.
      </p>
    </section>
  );
}
