import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const view = pgTable("view", {
  slug: text("slug").primaryKey(),
  count: integer("count").notNull().default(0),
});
