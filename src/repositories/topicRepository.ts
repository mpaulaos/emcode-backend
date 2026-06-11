import db from '../db/db';
import { topics } from '../db/schema';
import { eq } from 'drizzle-orm';

type CreateTopicData = {
    courseId: number; 
    topicName: string;
    isVisible?: boolean;
};

type UpdateTopicData = {
    topicName?: string;
    isVisible?: boolean;
};

class TopicRepository {
    async findAll() {
        return await db.select().from(topics);
    }

    async findByCourseId(courseId: number) { 
        return await db.select().from(topics).where(eq(topics.courseId, courseId));
    }

    async findById(id: number) {
        const [topic] = await db.select().from(topics).where(eq(topics.id, id));
        return topic ?? null;
    }

    async create(data: CreateTopicData) {
        const payload = { ...data, isVisible: data.isVisible ?? true };
        const [newTopic] = await db.insert(topics).values(payload).returning();
        return newTopic;
    }

    async update(id: number, data: UpdateTopicData) {
        const [updated] = await db
            .update(topics)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(topics.id, id))
            .returning();
        return updated ?? null;
    }

    async remove(id: number) {
        const [deleted] = await db
            .delete(topics)
            .where(eq(topics.id, id))
            .returning();
        return deleted ?? null;
    }
}

export default TopicRepository;