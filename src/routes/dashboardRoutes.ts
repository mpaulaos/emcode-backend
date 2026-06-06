import { Router } from 'express';
import CourseController from '../controllers/courseController';
import DashboardController from '../controllers/dashboardController';

const router = Router();
const courseController = new CourseController();
const dashboardController = new DashboardController();

router.get('/teacher', dashboardController.getTeacher);
router.get('/courses/:id', courseController.getById);

export default router;  