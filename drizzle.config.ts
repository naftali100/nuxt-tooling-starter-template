import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db/schema/*',
  dialect: 'postgresql',
  out: './migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
} satisfies Config;
