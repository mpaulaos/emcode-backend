import SlideRepository from '../repositories/slideRepository';
import QuizRepository from '../repositories/quizRepository';
import ProgressService from './progressService';
import LessonRepository from '../repositories/lessonRepository';
import type { SubmitQuizInput } from '../schemas/quizSchema';

type SlideAnswer = {
    slideId: number;
    value: unknown;
};

type GradedSlide = {
    slideId: number;
    slideType: string;
    isCorrect: boolean;
};

class QuizService {
    private slideRepository: SlideRepository;
    private quizRepository: QuizRepository;
    private progressService: ProgressService;
    private lessonRepository: LessonRepository;

    constructor() {
        this.slideRepository = new SlideRepository();
        this.quizRepository = new QuizRepository();
        this.progressService = new ProgressService();
        this.lessonRepository = new LessonRepository();
    }

    async getLastAttempt(userId: number, lessonId: number) {
        const attempts = await this.quizRepository.findByUserAndLesson(userId, lessonId);
        return attempts.length > 0 ? attempts[0] : null;
    }

    async submitQuiz(userId: number, lessonId: number, input: SubmitQuizInput) {
        const lesson = await this.lessonRepository.findById(lessonId);
        if (!lesson) {
            return { error: 'Lección no encontrada', status: 404 };
        }
        if (lesson.lessonType !== 'practice') {
            return { error: 'Solo las lecciones de práctica tienen quiz', status: 400 };
        }

        const slides = await this.slideRepository.findByLessonId(lessonId);
        const practiceSlides = slides.filter(
            (s) => s.slideType === 'single_choice' || s.slideType === 'multiple_choice' || s.slideType === 'fill_blank',
        );

        if (!practiceSlides.length) {
            return { error: 'Esta lección no tiene preguntas de práctica', status: 400 };
        }

        const answerMap = new Map<number, unknown>();
        for (const ans of input.answers) {
            answerMap.set(ans.slideId, ans.value);
        }

        let correctCount = 0;
        let incorrectCount = 0;
        const gradedSlides: GradedSlide[] = [];

        for (const slide of practiceSlides) {
            const userAnswer = answerMap.get(slide.id);
            const content = slide.practiceContent as Record<string, unknown> | null;

            if (userAnswer === undefined || !content) {
                incorrectCount++;
                gradedSlides.push({ slideId: slide.id, slideType: slide.slideType, isCorrect: false });
                continue;
            }

            let isCorrect = false;

            switch (slide.slideType) {
                case 'single_choice': {
                    const correctAnswer = content.correctAnswer as string;
                    isCorrect = userAnswer === correctAnswer;
                    break;
                }
                case 'multiple_choice': {
                    const correctAnswers = content.correctAnswers as string[];
                    const userAnswers = userAnswer as string[];
                    if (Array.isArray(userAnswers) && Array.isArray(correctAnswers)) {
                        const sortedUser = [...userAnswers].sort();
                        const sortedCorrect = [...correctAnswers].sort();
                        isCorrect =
                            sortedUser.length === sortedCorrect.length &&
                            sortedUser.every((v, i) => v === sortedCorrect[i]);
                    }
                    break;
                }
                case 'fill_blank': {
                    const blanks = content.blanks as Array<{ id: string; correctAnswer: string }>;
                    const userBlanks = userAnswer as Record<string, string>;
                    if (blanks && userBlanks) {
                        isCorrect = blanks.every((blank) => {
                            const userVal = userBlanks[blank.id];
                            return userVal?.trim().toLowerCase() === blank.correctAnswer.trim().toLowerCase();
                        });
                    }
                    break;
                }
            }

            if (isCorrect) {
                correctCount++;
            } else {
                incorrectCount++;
            }
            gradedSlides.push({ slideId: slide.id, slideType: slide.slideType, isCorrect });
        }

        const totalQuestions = practiceSlides.length;
        const score = Math.round((correctCount / totalQuestions) * 100);

        const attempt = await this.quizRepository.create({
            userId,
            lessonId,
            score,
            correctCount,
            incorrectCount,
            totalQuestions,
            answers: input.answers,
        });

        await this.progressService.markLessonAsCompleted(userId, lessonId);

        return {
            score,
            correctCount,
            incorrectCount,
            totalQuestions,
            gradedSlides,
            attempt,
        };
    }
}

export default QuizService;
