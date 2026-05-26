import { pgTable, serial, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),

    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length: 100 }).notNull(),

    email: varchar('email', { length: 150 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),

    phone: varchar('phone', { length: 20 }),
    profilePicture: text('profile_picture'),

    role: varchar('role', { length: 20 }).default('student').$type<'admin' | 'teacher' | 'student'>(),

    isActive: boolean('is_active').default(true),
    isVerified: boolean('is_verified').default(false),

    lastLogin: timestamp('last_login', { mode: 'date' }),

    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});