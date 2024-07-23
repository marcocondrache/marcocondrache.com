import { Suspense } from "react";

import {
  ActivitiesTimeline,
  ActivitiesTimelineSkeleton,
} from "./_components/activities-timeline";

export default function Page() {
  return (
    <section className="space-y-8">
      <Suspense fallback={<ActivitiesTimelineSkeleton />}>
        <ActivitiesTimeline />
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
