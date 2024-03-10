import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "@/database/schema";

export const db = drizzle(sql);

export const getUsers = async () => {
  return await db.select().from(users);
};
