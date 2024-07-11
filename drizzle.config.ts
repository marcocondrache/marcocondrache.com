import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schema.ts",
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
