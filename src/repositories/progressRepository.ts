import { and, eq, inArray } from 'drizzle-orm';
import db from '../db/db';
import { lessons, student_progress, topics } from '../db/schema';

class ProgressRepository {
    async findByUserAndLesson(userId: number, lessonId: number) {
        const [record] = await db
            .select()
            .from(student_progress)
            .where(
                and(
                    eq(student_progress.userId, userId),
                    eq(student_progress.lessonId, lessonId),
                ),
            );
        return record ?? null;
    }

    async upsert(userId: number, lessonId: number, isCompleted: boolean) {
        const existing = await this.findByUserAndLesson(userId, lessonId);
        if (existing) {
            const [updated] = await db
                .update(student_progress)
                .set({ isCompleted, updatedAt: new Date() })
                .where(eq(student_progress.id, existing.id))
                .returning();
            return updated;
        }
        const [created] = await db
            .insert(student_progress)
            .values({ userId, lessonId, isCompleted })
            .returning();
        return created;
    }

    async getLessonIdsByCourse(courseId: number) {
        const topicRows = await db
            .select({ id: topics.id })
            .from(topics)
            .where(eq(topics.courseId, courseId));
        const topicIds = topicRows.map((row) => row.id);
        if (!topicIds.length) return [];

        const lessonRows = await db
            .select({ id: lessons.id })
            .from(lessons)
            .where(inArray(lessons.topicId, topicIds));
        return lessonRows.map((row) => row.id);
    }

    async findByUserAndCourse(userId: number, courseId: number) {
        const lessonIds = await this.getLessonIdsByCourse(courseId);
        if (!lessonIds.length) return [];

        return db
            .select()
            .from(student_progress)
            .where(
                and(
                    eq(student_progress.userId, userId),
                    inArray(student_progress.lessonId, lessonIds),
                ),
            );
    }

    async findAllByUser(userId: number) {
        return db
            .select()
            .from(student_progress)
            .where(eq(student_progress.userId, userId));
    }
}

export default ProgressRepository;
