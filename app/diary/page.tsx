import { api } from "@/server/strava";

import { Section } from "@/components/layout/section";

import { ActivitiesLoader } from "./_components/activities-loader";

export const metadata = {
  title: "Diary",
  description: "My personal diary where I track my activities and progress.",
};

export default async function Page() {
  const promise = api.getActivities();

  return (
    <Section className="space-y-8">
      <ActivitiesLoader promise={promise} />
    </Section>
  );
}
