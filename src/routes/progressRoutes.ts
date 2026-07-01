import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { lessonIdParamSchema, courseIdParamSchema } from '../schemas/progressSchema';
import { submitQuizSchema } from '../schemas/quizSchema';
import ProgressController from '../controllers/progressController';
import QuizController from '../controllers/quizController';
import { authenticate } from '../middleware/auth';

const router = Router();
const progressController = new ProgressController();
const quizController = new QuizController();

router.post('/lessons/:lessonId', authenticate, validateParams(lessonIdParamSchema), progressController.markCompleted);
router.get('/lessons/:lessonId/quiz/last', authenticate, validateParams(lessonIdParamSchema), quizController.getLastAttempt);
router.post('/lessons/:lessonId/quiz', authenticate, validateParams(lessonIdParamSchema), validateBody(submitQuizSchema), quizController.submitQuiz);
router.get('/courses/:courseId', authenticate, validateParams(courseIdParamSchema), progressController.getCourseProgress);
router.get('/', authenticate, progressController.getAllProgress);

export default router;
