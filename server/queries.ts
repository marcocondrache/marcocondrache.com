import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import { sql } from "drizzle-orm";

import { db } from "./db";
import { view } from "./db/schema";

export async function getViews() {
  noStore();

  return await db.query.view.findMany();
}

export async function incrementView(slug: string) {
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
}
