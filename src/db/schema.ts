import { pgTable, serial, varchar, text, boolean, timestamp, integer  } from 'drizzle-orm/pg-core';

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


export const courses = pgTable('courses', {
    id: serial('id').primaryKey(),
    creatorId: integer('user_id').notNull().references(() => users.id),
    title: varchar('title', {length: 100}).notNull(),
    subtitle: varchar('subtitle', {length: 150}),
    initialism: varchar('initialism', {length: 50}).unique(),
    credits: varchar('credits', {length: 2}),
    image: text('image'),
    courseType: varchar('type', {length: 20}).default('theoryPractice').$type<'theoryPractice' | 'theory'>(),
    description: varchar('description', {length:300}),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),

});


export const topics = pgTable('topics', {
    id: serial('id').primaryKey(),
    courseId: integer('course_id').notNull().references(() => courses.id),
    topicName: varchar('topic_name', { length: 100 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});


export const lessons = pgTable('lessons', {
    id: serial('id').primaryKey(),
    topicId: integer('topic_id').notNull().references(() => topics.id),
    lessonName: varchar('lesson_name', { length: 100 }).notNull(),
    lessonType: varchar('lesson_type', { length: 20 }).default('video').$type<'video' | 'text'>(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
}); 


export const slides = pgTable('slides', {
    id: serial('id').primaryKey(),
    lessonId: integer('lesson_id').notNull().references(() => lessons.id),
    content: text('content').notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});