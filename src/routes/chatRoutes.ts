import { Router } from "express";
import { sendMessage, describeImage } from "../controllers/chatController";
import { validateBody } from "../middleware/validations";
import { authenticate } from "../middleware/auth";
import { describeImageSchema } from "../schemas/chatSchema";

const router = Router();

router.post("/", sendMessage);
router.post(
  "/describe-image",
  authenticate,
  validateBody(describeImageSchema),
  describeImage
);

export default router;