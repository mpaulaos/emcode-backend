import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { createTopicSchema, getTopicSchema, updateTopicSchema, courseIdParamSchema } from '../schemas/topicSchema';
import TopicController from '../controllers/topicController';

const router = Router();
const topicController = new TopicController();

router.get('/', topicController.getAll);
router.get('/course/:courseId', validateParams(courseIdParamSchema), topicController.getByCourseId);
router.get('/:id', validateParams(getTopicSchema), topicController.getById);
router.post('/course/:courseId', validateParams(courseIdParamSchema), validateBody(createTopicSchema), topicController.create);
router.patch('/:id', validateParams(getTopicSchema), validateBody(updateTopicSchema), topicController.update);
router.delete('/:id', validateParams(getTopicSchema), topicController.remove);

export default router;

