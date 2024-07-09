import db from "@/db/connection";
import { view } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function getViews() {
  return await db.select().from(view);
}

export async function getSlugViews(slug: string) {
  return await db
    .select({
      count: view.count,
    })
    .from(view)
    .where(eq(view.slug, slug));
}

export async function incrementView(slug: string) {
  return await db
    .insert(view)
    .values({ slug })
    .onConflictDoUpdate({
      target: view.slug,
      set: {
        count: sql`${view.count} + 1`,
      },
    });
}
