import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres");
