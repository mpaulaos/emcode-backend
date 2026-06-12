import db from '../db/db';
import { guides, guideSections } from '../db/schema';
import { eq } from 'drizzle-orm';

class GuideRepository {
    async findAll() {
        return await db
            .select({ id: guides.id, title: guides.title, summary: guides.summary })
            .from(guides)
            .where(eq(guides.isVisible, true));
    }

    async findById(id: number) {
        const [guide] = await db
            .select()
            .from(guides)
            .where(eq(guides.id, id));

        if (!guide) return null;

        const sections = await db
            .select({ heading: guideSections.heading, body: guideSections.body, order: guideSections.order })
            .from(guideSections)
            .where(eq(guideSections.guideId, guide.id))
            .orderBy(guideSections.order);

        return { ...guide, sections };
    }
}

export default GuideRepository;