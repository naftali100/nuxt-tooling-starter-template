import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import path from 'path';

import * as userSchema from './schema/user';
import { sql } from 'drizzle-orm';

const config = useRuntimeConfig();
const pool = new Pool({ connectionString: config.databaseUrl });

const db = drizzle({
  client: pool,
  schema: {
    ...userSchema,
  },
});
try {
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  });
} catch (e) {
  console.log(e);
}

await db.execute(sql`SELECT 1`);

export function useDrizzle() {
  return db;
}
