import { defineConfig } from "drizzle-kit";
import { env } from "./env/server";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schema.ts",
  strict: true,
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
