import { z } from 'zod';

export const createLessonSchema = z.object({
    lessonName: z.string().min(1, 'El nombre de la lección es requerido').max(100, 'El nombre de la lección no puede exceder 100 caracteres'),
    lessonType: z.enum(['theory', 'practice']).default('theory'),
    isVisible: z.boolean().default(true),
});

export const getLessonSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo')
});

export const topicIdParamSchema = z.object({
    topicId: z.coerce.number().int().positive('El topicId debe ser un número positivo')
});

export const updateLessonSchema = createLessonSchema.partial();

export type CreateLessonInput = z.infer<typeof createLessonSchema>;
export type UpdateLessonInput = z.infer<typeof updateLessonSchema>;
export type LessonIdParam = z.infer<typeof getLessonSchema>;
export type TopicIdParam = z.infer<typeof topicIdParamSchema>;