import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { createLessonSchema, getLessonSchema, updateLessonSchema, topicIdParamSchema} from '../schemas/lessonSchema';
import LessonController from '../controllers/lessonController';

const router = Router();
const lessonController = new LessonController();

router.get('/', lessonController.getAll);
router.get('/topic/:topicId', validateParams(topicIdParamSchema), lessonController.getByTopicId);
router.get('/:id', validateParams(getLessonSchema), lessonController.getById);
router.post('/topic/:topicId', validateParams(topicIdParamSchema), validateBody(createLessonSchema), lessonController.create);
router.patch('/:id', validateParams(getLessonSchema), validateBody(updateLessonSchema), lessonController.update);
router.delete('/:id', validateParams(getLessonSchema), lessonController.remove);

export default router;