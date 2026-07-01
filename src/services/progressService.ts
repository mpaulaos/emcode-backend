import ProgressRepository from '../repositories/progressRepository';
import LessonRepository from '../repositories/lessonRepository';

class ProgressService {
    private progressRepository: ProgressRepository;
    private lessonRepository: LessonRepository;

    constructor() {
        this.progressRepository = new ProgressRepository();
        this.lessonRepository = new LessonRepository();
    }

    async markLessonAsCompleted(userId: number, lessonId: number) {
        const lesson = await this.lessonRepository.findById(lessonId);
        if (!lesson) {
            return null;
        }
        return this.progressRepository.upsert(userId, lessonId, true);
    }

    async getCourseProgress(userId: number, courseId: number) {
        const lessonIds = await this.progressRepository.getLessonIdsByCourse(courseId);
        const totalLessons = lessonIds.length;

        if (!totalLessons) {
            return { completedLessons: 0, totalLessons: 0, percentage: 0 };
        }

        const progressRecords = await this.progressRepository.findByUserAndCourse(userId, courseId);
        const completedLessons = progressRecords.filter((r) => r.isCompleted).length;
        const percentage = Math.round((completedLessons / totalLessons) * 100);

        return { completedLessons, totalLessons, percentage };
    }

    async getLessonProgress(userId: number, lessonId: number) {
        const record = await this.progressRepository.findByUserAndLesson(userId, lessonId);
        return record ?? null;
    }

    async getAllProgress(userId: number) {
        return this.progressRepository.findAllByUser(userId);
    }
}

export default ProgressService;
