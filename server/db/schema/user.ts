import { timestamp, pgTable, text, uuid, pgEnum } from 'drizzle-orm/pg-core';
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { z } from 'zod';

export const users = pgTable('user', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const insertUserSchema = createInsertSchema(users, {
  email: z.string().email(),
});
export const selectUserSchema = createSelectSchema(users, {
  email: z.string().email(),
});

export const updateUserSchema = createUpdateSchema(users, {
  email: z.string().email(),
});
