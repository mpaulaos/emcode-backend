import { Router } from 'express';
import GuideController from '../controllers/guideController';

const router = Router();
const guideController = new GuideController();

router.get('/', guideController.getAll);
router.get('/:id', guideController.getById);

export default router;