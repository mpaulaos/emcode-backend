import { z } from 'zod';

export const lessonIdParamSchema = z.object({
    lessonId: z.coerce.number().int().positive('El lessonId debe ser un número positivo'),
});

export const courseIdParamSchema = z.object({
    courseId: z.coerce.number().int().positive('El courseId debe ser un número positivo'),
});

export type LessonIdParam = z.infer<typeof lessonIdParamSchema>;
export type CourseIdParam = z.infer<typeof courseIdParamSchema>;
