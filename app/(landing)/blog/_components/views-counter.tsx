import { cache } from "react";
import { getViews } from "@/server/queries";

const getData = cache(getViews);

export async function ViewsCounter({ slug }: { slug: string }) {
  const data = await getData();

  return <>{data.find((item) => item.slug === slug)?.count ?? 0} views</>;
}
