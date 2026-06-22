import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { createSlideSchema, getSlideSchema, updateSlideSchema, lessonIdParamSchema } from '../schemas/slideSchema';
import SlideController from '../controllers/slideController';

const router = Router();
const slideController = new SlideController();

router.get('/', slideController.getAll);
router.get('/lesson/:lessonId', validateParams(lessonIdParamSchema), slideController.getByLessonId);
router.get('/:id', validateParams(getSlideSchema), slideController.getById);
router.post('/lesson/:lessonId', validateParams(lessonIdParamSchema), validateBody(createSlideSchema), slideController.create);
router.patch('/:id', validateParams(getSlideSchema), validateBody(updateSlideSchema), slideController.update);
router.delete('/:id', validateParams(getSlideSchema), slideController.remove);

export default router;