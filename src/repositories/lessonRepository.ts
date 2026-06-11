import db from '../db/db';
import { lessons } from '../db/schema';
import { eq } from 'drizzle-orm';

type CreateLessonData = {
    topicId: number;
    lessonName: string;
    lessonType?: 'theory' | 'practice';
    isVisible?: boolean;
};

type UpdateLessonData = {
    lessonName?: string;
    lessonType?: 'theory' | 'practice';
    isVisible?: boolean;
};

class LessonRepository {
    async findAll() {
        return await db.select().from(lessons);
    }

    async findByTopicId(topicId: number) { 
        return await db.select().from(lessons).where(eq(lessons.topicId, topicId));
    }

    async findById(id: number) {
        const [lesson] = await db.select().from(lessons).where(eq(lessons.id, id));
        return lesson ?? null;
    }

    async create(data: CreateLessonData) {
        const payload = { ...data, isVisible: data.isVisible ?? true };
        const [newLesson] = await db.insert(lessons).values(payload).returning();
        return newLesson;
    }

    async update(id: number, data: UpdateLessonData) {
        const [updated] = await db
            .update(lessons)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(lessons.id, id))
            .returning();
        return updated ?? null;
    }

    async remove(id: number) {
        const [deleted] = await db
            .delete(lessons)
            .where(eq(lessons.id, id))
            .returning();
        return deleted ?? null;
    }
}

export default LessonRepository;