import { z } from 'zod';

export const createTopicSchema = z.object({
    topicName: z.string().min(1, 'El nombre del tema es requerido').max(100, 'El nombre del tema no puede exceder 100 caracteres'),
    isVisible: z.boolean().default(true)
});

export const courseIdParamSchema = z.object({
    courseId: z.coerce.number().int().positive('El courseId debe ser un número positivo')
});

export const getTopicSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo')
});

export const updateTopicSchema = createTopicSchema.partial();

export type CreateTopicInput = z.infer<typeof createTopicSchema>;
export type UpdateTopicInput = z.infer<typeof updateTopicSchema>;
export type TopicIdParam = z.infer<typeof getTopicSchema>;
export type CourseIdParam = z.infer<typeof courseIdParamSchema>;