"use server";

import { eq, sql } from "drizzle-orm";
import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";

import { db } from ".";
import { view } from "./schema";

export async function incrementView(slug: string) {
  await db
    .insert(view)
    .values({ slug, count: 1 })
    .onConflictDoUpdate({
      target: view.slug,
      set: {
        count: sql`${view.count} + 1`,
      },
    });

  revalidateTag(`views:${slug}`);
}

export async function getView(slug: string) {
  "use cache";

  cacheTag(`views:${slug}`);

  return await db.query.view.findFirst({
    where: eq(view.slug, slug),
  });
}
