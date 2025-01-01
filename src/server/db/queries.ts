import "server-only";

import { sql } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

import { db } from ".";
import { view } from "./schema";

export const incrementView = async (slug: string) => {
  noStore();

  return await db
    .insert(view)
    .values({ slug, count: 1 })
    .onConflictDoUpdate({
      target: view.slug,
      set: {
        count: sql`${view.count} + 1`,
      },
    });
};

export const getViews = async () => {
  noStore();

  return await db.query.view.findMany();
};
