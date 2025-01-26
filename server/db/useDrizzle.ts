import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import path from 'path';

import * as userSchema from './schema/user';
import { sql } from 'drizzle-orm';

const config = useRuntimeConfig();
export const connection = postgres(config.databaseUrl);

const db = drizzle(connection, {
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
