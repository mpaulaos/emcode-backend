import { Router } from 'express';
import { validateBody, validateParams, validaQuery } from '../middleware/validations';
import { courseIdSchema, createCourseSchema, updateCourseSchema, publishCourseSchema } from '../schemas/courseSchema';
import CourseController from '../controllers/courseController';
import StudentController from '../controllers/studentController';
import { authenticate } from '../middleware/auth';
import { availableStudentsQuerySchema, courseIdSchema as studentCourseIdSchema, courseStudentParamsSchema, enrollStudentSchema, studentListQuerySchema } from '../schemas/studentSchema';

const router = Router();
const courseController = new CourseController();
const studentController = new StudentController();

router.get('/', courseController.getAll);
router.get('/:id', validateParams(courseIdSchema), courseController.getById);
router.post('/', validateBody(createCourseSchema), courseController.create);
router.patch('/:id', validateParams(courseIdSchema), validateBody(updateCourseSchema), courseController.update);
router.patch('/:id/publish', validateParams(courseIdSchema), validateBody(publishCourseSchema), courseController.publish);
router.delete('/:id', validateParams(courseIdSchema), courseController.remove);

// course-students nested endpoints
router.get('/:courseId/students', validateParams(studentCourseIdSchema), validaQuery(studentListQuerySchema), studentController.listCourseStudents);
router.get('/:courseId/students/available', authenticate, validateParams(studentCourseIdSchema), validaQuery(availableStudentsQuerySchema), studentController.listAvailableStudents);
router.post('/:courseId/students', authenticate, validateParams(studentCourseIdSchema), validateBody(enrollStudentSchema), studentController.enrollStudent);
router.delete('/:courseId/students/:studentId', authenticate, validateParams(courseStudentParamsSchema), studentController.removeFromCourse);

export default router;