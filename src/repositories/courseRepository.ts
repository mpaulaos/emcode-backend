import db from '../db/db';
import { courses } from '../db/schema';
import { eq } from 'drizzle-orm';

type CreateCourseData = {
    title: string;
    subtitle: string;
    description: string;
    image?: string | null;
    creatorId?: number;
};

type UpdateCourseData = {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string | null;
    initialism?: string;
    credits?: string;
    courseType?: 'theoryPractice' | 'theory';
};

class CourseRepository {
    async findAll() {
        return await db.select().from(courses);
    }

    async findById(id: number) {
        const [course] = await db.select().from(courses).where(eq(courses.id, id));
        return course ?? null;
    }

    async create(data: CreateCourseData) {
        const payload = { ...data, creatorId: data.creatorId ?? 1 };
        const [newCourse] = await db.insert(courses).values(payload).returning();
        return newCourse;
    }

    async update(id: number, data: UpdateCourseData) {
        const [updated] = await db
            .update(courses)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(courses.id, id))
            .returning();
        return updated ?? null;
    }

    async remove(id: number) {
        const [deleted] = await db.delete(courses).where(eq(courses.id, id)).returning();
        return deleted ?? null;
    }
}

export default CourseRepository;