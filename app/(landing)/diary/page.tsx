import { api } from "@/server/strava";

import { ActivitiesLoader } from "./_components/activities-loader";

export const metadata = {
  title: "Diary",
  description: "My personal diary where I track my activities and progress.",
};

export default async function Page() {
  const promise = api.getActivities();

  return (
    <section className="space-y-8">
      <ActivitiesLoader promise={promise} />
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
