import db from '../db/db';
import { slides } from '../db/schema';
import { eq, asc } from 'drizzle-orm';

type CreateSlideData = {
    lessonId: number;
    slideType: 'text' | 'text_image' | 'single_choice' | 'multiple_choice' | 'fill_blank';
    order: number;
    text?: string;
    imageUrl?: string;
    imageAlt?: string;
    practiceContent?: Record<string, unknown>;
};

type UpdateSlideData = Partial<Omit<CreateSlideData, 'lessonId'>>;

class SlideRepository {
    async findAll() {
        return await db.select().from(slides);
    }

    async findByLessonId(lessonId: number) {
        return await db.select().from(slides).where(eq(slides.lessonId, lessonId)).orderBy(asc(slides.order));
    }

    async findById(id: number) {
        const [slide] = await db.select().from(slides).where(eq(slides.id, id));
        return slide ?? null;
    }

    async create(data: CreateSlideData) {
        const [newSlide] = await db.insert(slides).values(data).returning();
        return newSlide;
    }

    async update(id: number, data: UpdateSlideData) {
        const [updated] = await db
            .update(slides)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(slides.id, id))
            .returning();
        return updated ?? null;
    }

    async remove(id: number) {
        const [deleted] = await db
            .delete(slides)
            .where(eq(slides.id, id))
            .returning();
        return deleted ?? null;
    }
}

export default SlideRepository;