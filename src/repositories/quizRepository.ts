import db from '../db/db';
import { quizAttempts } from '../db/schema';
import { and, eq, desc } from 'drizzle-orm';

type CreateQuizAttemptData = {
    userId: number;
    lessonId: number;
    score: number;
    correctCount: number;
    incorrectCount: number;
    totalQuestions: number;
    answers: unknown;
};

class QuizRepository {
    async create(data: CreateQuizAttemptData) {
        const [attempt] = await db.insert(quizAttempts).values(data).returning();
        return attempt;
    }

    async findByUserAndLesson(userId: number, lessonId: number) {
        return db
            .select()
            .from(quizAttempts)
            .where(
                and(
                    eq(quizAttempts.userId, userId),
                    eq(quizAttempts.lessonId, lessonId),
                ),
            )
            .orderBy(desc(quizAttempts.createdAt));
    }
}

export default QuizRepository;
