import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: { ca: process.env.PG_SSL },
  },
  verbose: true,
  strict: true,
});
