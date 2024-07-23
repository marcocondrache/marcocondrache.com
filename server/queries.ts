import "server-only";

import { unstable_noStore } from "next/cache";
import { sql } from "drizzle-orm";

import { db } from "./db";
import { view } from "./db/schema";

export const incrementView = async (slug: string) => {
  unstable_noStore();

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
  unstable_noStore();

  return await db.query.view.findMany();
};
