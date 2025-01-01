import { getViews } from "@/server/db/queries";
import { cache } from "react";

const getData = cache(getViews);

export async function ViewsCounter({ slug }: { slug: string }) {
  const viewsForSlug = await getData();
  const number = viewsForSlug?.find((view) => view.slug === slug)?.count || 0;

  return <span>{`${number.toLocaleString()} views`}</span>;
}
