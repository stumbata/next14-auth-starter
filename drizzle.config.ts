import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
export default {
  schema: "./src/database/schema.ts",
  out: "./src/database/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL ?? "",
  },
} satisfies Config;
