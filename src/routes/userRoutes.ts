import { Router } from 'express';
import UserController from '../controllers/userController';
import { createUserSchema, loginSchema } from '../schemas/userSchema';
import { validateBody } from '../middleware/validations';
import { authenticate } from '../middleware/auth';

const router = Router();
const userController = new UserController();

router.get('/', authenticate, userController.getAllUsers);
router.post('/register', validateBody(createUserSchema), userController.register);
router.post('/login', validateBody(loginSchema), userController.login);

export default router;