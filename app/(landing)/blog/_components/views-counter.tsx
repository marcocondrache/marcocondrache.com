export async function ViewsCounter({
  slug,
  promise,
}: {
  slug: string;
  promise: Promise<{ slug: string; count: number }[]>;
}) {
  const data = await promise;

  return <>{data.find((item) => item.slug === slug)?.count ?? 0} views</>;
}
