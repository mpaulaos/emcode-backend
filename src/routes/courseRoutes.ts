import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { courseIdSchema, createCourseSchema, updateCourseSchema, publishCourseSchema } from '../schemas/courseSchema';
import CourseController from '../controllers/courseController';

const router = Router();
const courseController = new CourseController();

router.get('/', courseController.getAll);
router.get('/:id', validateParams(courseIdSchema), courseController.getById);
router.post('/', validateBody(createCourseSchema), courseController.create);
router.patch('/:id', validateParams(courseIdSchema), validateBody(updateCourseSchema), courseController.update);
router.patch('/:id/publish', validateParams(courseIdSchema), validateBody(publishCourseSchema), courseController.publish);
router.delete('/:id', validateParams(courseIdSchema), courseController.remove);

export default router;