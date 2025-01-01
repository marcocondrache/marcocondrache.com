import { getView } from "@/server/db/queries";

export async function ViewsCounter({ slug }: { slug: string }) {
  const view = await getView(slug);
  const count = view?.count || 0;

  return <span>{`${count.toLocaleString()} views`}</span>;
}
