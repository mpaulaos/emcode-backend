import { pgTable, serial, varchar, text, boolean, timestamp, integer, AnyPgColumn, jsonb  } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),

    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length: 100 }).notNull(),

    email: varchar('email', { length: 150 }).notNull().unique(),
    passwordHash: text('password_hash'),

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
    isVisible: boolean("is_visible").notNull().default(true),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});


export const lessons = pgTable('lessons', {
    id: serial('id').primaryKey(),
    topicId: integer('topic_id').notNull().references(() => topics.id),
    lessonName: varchar('lesson_name', { length: 100 }).notNull(),
    lessonType: varchar('lesson_type', { length: 20 }).default('theory').$type<'theory' | 'practice'>(),
    isVisible: boolean("is_visible").notNull().default(true),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
}); 


export const slides = pgTable('slides', {
    id: serial('id').primaryKey(),
    lessonId: integer('lesson_id').notNull().references(() => lessons.id, { onDelete: 'cascade' }),
    slideType: varchar('slide_type', { length: 30 }).notNull(), // 'text' | 'text_image' | 'single_choice' | 'multiple_choice' | 'fill_blank'
    order: integer('order').notNull(),
    text: text('text'),
    imageUrl: text('image_url'),
    imageAlt: text('image_alt'),
    practiceContent: jsonb('practice_content'),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    courseId: integer('course_id').notNull().references(() => courses.id),
    userId: integer('user_id').notNull().references(() => users.id),
    parentPostId: integer('parent_post_id').references((): AnyPgColumn => posts.id),
    content: varchar('content', { length: 500 }).notNull(),
    isDeleted: boolean('is_deleted').default(false),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});


export const enrrollments = pgTable('enrrollments', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id),
    courseId: integer('course_id').notNull().references(() => courses.id),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

export const student_progress = pgTable('student_progress', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id),
    lessonId: integer('lesson_id').notNull().references(() => lessons.id),
    isCompleted: boolean('is_completed').notNull().default(false),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});



export const guides = pgTable('guides', {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 100 }).notNull().unique(),
    title: varchar('title', { length: 255 }).notNull(),
    summary: text('summary').notNull(),
    isVisible: boolean('is_visible').notNull().default(true),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});
 
export const guideSections = pgTable('guide_sections', {
    id: serial('id').primaryKey(),
    guideId: integer('guide_id').notNull().references(() => guides.id, { onDelete: 'cascade' }),
    order: integer('order').notNull(),
    heading: varchar('heading', { length: 255 }).notNull(),
    body: text('body').notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
});


export const disabilities = pgTable('disabilities', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 150 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

export const student_disabilities = pgTable('student_disabilities', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    disabilityId: integer('disability_id').notNull().references(() => disabilities.id, { onDelete: 'cascade' }),
});



//relations
export const userRelations = relations(users, ({ many }) => ({
    courses: many(courses),
    posts: many(posts),
    enrrollments: many(enrrollments),
    progress: many(student_progress),
}));


export const courseRelations = relations(courses, ({ one, many }) => ({
    creator: one(users, {
        fields: [courses.creatorId],
        references: [users.id],
    }),
    topics: many(topics),
    posts: many(posts),
    enrrollments: many(enrrollments),
}));

export const topicRelations = relations(topics, ({ one, many }) => ({
    course: one(courses, {
        fields: [topics.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
}));

export const lessonRelations = relations(lessons, ({ one, many }) => ({
    topic: one(topics, {
        fields: [lessons.topicId],
        references: [topics.id],
    }),
    slides: many(slides),
    progress: many(student_progress),
}));

export const slideRelations = relations(slides, ({ one }) => ({
    lesson: one(lessons, {
        fields: [slides.lessonId],
        references: [lessons.id],
    }),
}));


export const guideRelations = relations(guides, ({ many }) => ({
    sections: many(guideSections),
}));
 
export const guideSectionRelations = relations(guideSections, ({ one }) => ({
    guide: one(guides, {
        fields: [guideSections.guideId],
        references: [guides.id],
    }),
}));




export const postRelations = relations(posts, ({ one, many }) => ({
    course: one(courses, {
        fields: [posts.courseId],
        references: [courses.id],
    }),
    user: one(users, {
        fields: [posts.userId],
        references: [users.id],
    }),
    parentPost: one(posts, {
        fields: [posts.parentPostId],
        references: [posts.id],
        relationName: 'replies',
    }),
    replies: many(posts, {
        relationName: 'parentPost',
    }),
}));



