import { Router } from 'express';
import StudentController from '../controllers/studentController';
import { authenticate } from '../middleware/auth';
import { validateBody, validateParams, validaQuery } from '../middleware/validations';
import { createStudentSchema, studentIdSchema, studentListQuerySchema, updateStudentSchema } from '../schemas/studentSchema';

const router = Router();
const studentController = new StudentController();

router.get('/', authenticate, validaQuery(studentListQuerySchema), studentController.list);
router.get('/disabilities', studentController.listDisabilities);
router.get('/:id', validateParams(studentIdSchema), studentController.getById);
router.post('/', authenticate, validateBody(createStudentSchema), studentController.create);
router.patch('/:id', authenticate, validateParams(studentIdSchema), validateBody(updateStudentSchema), studentController.update);

export default router;
