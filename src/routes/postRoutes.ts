import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { validateBody, validateParams } from '../middleware/validations';
import { createPostSchema, createReplySchema, updatePostSchema, postIdSchema, courseIdParamSchema } from '../schemas/postSchema';
import PostController from '../controllers/postController';

const router = Router();
const postController = new PostController();

router.get('/course/:courseId', authenticate, validateParams(courseIdParamSchema), postController.getByCourseId);
router.get('/:id', authenticate, validateParams(postIdSchema), postController.getById);
router.post('/course/:courseId', authenticate, validateParams(courseIdParamSchema), validateBody(createPostSchema), postController.create);
router.post('/:id/replies', authenticate, validateParams(postIdSchema), validateBody(createReplySchema), postController.reply);
router.patch('/:id', authenticate, validateParams(postIdSchema), validateBody(updatePostSchema), postController.update);
router.delete('/:id', authenticate, validateParams(postIdSchema), postController.remove);

export default router;
