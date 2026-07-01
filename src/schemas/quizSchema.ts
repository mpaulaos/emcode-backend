import { z } from 'zod';

const answerSchema = z.object({
    slideId: z.number().int().positive(),
    value: z.any(),
});

export const submitQuizSchema = z.object({
    answers: z.array(answerSchema).min(1, 'Debe enviar al menos una respuesta'),
});

export const lessonIdParamSchema = z.object({
    lessonId: z.coerce.number().int().positive('El lessonId debe ser un número positivo'),
});

export type SubmitQuizInput = z.infer<typeof submitQuizSchema>;
export type LessonIdParam = z.infer<typeof lessonIdParamSchema>;
