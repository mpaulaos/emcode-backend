import db from '../db/db';
import { courses } from '../db/schema';

type CoursePreview = {
    id: number;
    title: string;
    subtitle: string | null;
    description: string | null;
    image: string | null;
};

class DashboardRepository {
    async getTeacherCourses(): Promise<CoursePreview[]> {
        return await db
            .select({
                id: courses.id,
                title: courses.title,
                subtitle: courses.subtitle,
                description: courses.description,
                image: courses.image,
            })
            .from(courses);
    }
}

export default DashboardRepository;