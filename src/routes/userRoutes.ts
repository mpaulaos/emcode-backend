import jwt from 'jsonwebtoken';
import rateLimit, { type AugmentedRequest, type RateLimitExceededEventHandler } from 'express-rate-limit';
import { Router, Request, Response } from 'express';
import UserController from '../controllers/userController';
import { createUserSchema, loginSchema, updateUserProfileSchema, changePasswordSchema, forgotPasswordSchema, resetPasswordSchema } from '../schemas/userSchema';
import { validateBody } from '../middleware/validations';
import { authenticate } from '../middleware/auth';
import { generateAuthUrl, handleCallback } from '../services/googleAuthService';
import env from '../../env';

const router = Router();
const userController = new UserController();

const RATE_LIMIT_MESSAGE = 'Demasiados intentos. Esperá unos minutos e intentá de nuevo.';

// Tells the user exactly how long is left instead of a vague "in a few minutes"
const rateLimitHandler: RateLimitExceededEventHandler = (req, res) => {
    const { resetTime } = (req as AugmentedRequest).rateLimit;
    if (!resetTime) {
        return res.status(429).json({ message: RATE_LIMIT_MESSAGE });
    }

    const minutes = Math.max(1, Math.ceil((resetTime.getTime() - Date.now()) / 60_000));
    res.status(429).json({
        message: `Demasiados intentos. Esperá ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'} e intentá de nuevo.`,
    });
};

const rateLimitOptions = {
    windowMs: env.PASSWORD_RESET_RATE_LIMIT_WINDOW_MINUTES * 60 * 1000,
    standardHeaders: true as const,
    legacyHeaders: false,
    handler: rateLimitHandler,
};

// Caps how much of the Brevo quota a single IP can burn, and caps token guessing.
// The limit is strict in production and generous elsewhere, so local testing of the
// reset flow doesn't lock you out mid-debug.
const forgotPasswordLimiter = rateLimit({ ...rateLimitOptions, limit: env.PASSWORD_RESET_RATE_LIMIT });
const resetPasswordLimiter = rateLimit({ ...rateLimitOptions, limit: env.PASSWORD_RESET_RATE_LIMIT * 2 });

router.get('/', authenticate, userController.getAllUsers);
router.post('/register', validateBody(createUserSchema), userController.register);
router.post('/login', validateBody(loginSchema), userController.login);
router.post('/forgot-password', forgotPasswordLimiter, validateBody(forgotPasswordSchema), userController.forgotPassword);
router.post('/reset-password', resetPasswordLimiter, validateBody(resetPasswordSchema), userController.resetPassword);

router.get('/profile', authenticate, userController.getProfile);
router.patch('/profile', authenticate, validateBody(updateUserProfileSchema), userController.updateProfile);
router.patch('/password', authenticate, validateBody(changePasswordSchema), userController.changePassword);

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