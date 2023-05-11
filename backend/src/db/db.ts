import pg from "pg";

export const client = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "root",
  port: 5432,
});
