import { z } from 'zod';

export const guideIdSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

export type GuideIdParam = z.infer<typeof guideIdSchema>;