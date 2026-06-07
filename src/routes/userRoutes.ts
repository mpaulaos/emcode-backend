import jwt from 'jsonwebtoken';
import { Router, Request, Response } from 'express';
import UserController from '../controllers/userController';
import { createUserSchema, loginSchema } from '../schemas/userSchema';
import { validateBody } from '../middleware/validations';
import { authenticate } from '../middleware/auth';
import { generateAuthUrl, handleCallback } from '../services/googleAuthService';
import env from '../../env';

const router = Router();
const userController = new UserController();

router.get('/', authenticate, userController.getAllUsers);
router.post('/register', validateBody(createUserSchema), userController.register);
router.post('/login', validateBody(loginSchema), userController.login);

router.get('/google', (_req: Request, res: Response) => {
  const state = jwt.sign({ ts: Date.now() }, env.JWT_SECRET, { expiresIn: '5m' });
  const authUrl = generateAuthUrl(state);
  res.redirect(authUrl);
});

router.get('/google/callback', async (req: Request, res: Response) => {
  const { code, state } = req.query;
  const stateParam = state as string | undefined;

  try {
    jwt.verify(stateParam!, env.JWT_SECRET);
  } catch {
    return res.redirect(`${env.FRONTEND_URL}/login?error=invalid_state`);
  }

  try {
    const { token, user } = await handleCallback(code as string);
    const userEncoded = encodeURIComponent(JSON.stringify(user));
    res.redirect(`${env.FRONTEND_URL}/auth/callback?token=${token}&user=${userEncoded}`);
  } catch (error) {
    console.error('[OAuth] callback error:', error);
    res.redirect(`${env.FRONTEND_URL}/login?error=google_auth_failed`);
  }
});

export default router;