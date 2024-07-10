import { unstable_noStore as noStore } from "next/cache";
import db from "@/db/connection";
import { view } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function getViews() {
  noStore();

  return await db.select().from(view);
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
