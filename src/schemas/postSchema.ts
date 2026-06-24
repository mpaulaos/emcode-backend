import { z } from 'zod';

export const createPostSchema = z.object({
    content: z.string().min(1, 'El contenido es requerido').max(500, 'El contenido no puede exceder 500 caracteres'),
});

export const createReplySchema = z.object({
    content: z.string().min(1, 'El contenido es requerido').max(500, 'El contenido no puede exceder 500 caracteres'),
});

export const updatePostSchema = z.object({
    content: z.string().min(1, 'El contenido es requerido').max(500, 'El contenido no puede exceder 500 caracteres'),
});

export const postIdSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

export const courseIdParamSchema = z.object({
    courseId: z.coerce.number({ message: 'El courseId debe ser un número' }).int().positive('El courseId debe ser un número positivo'),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type CreateReplyInput = z.infer<typeof createReplySchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type PostIdParam = z.infer<typeof postIdSchema>;
export type CourseIdParam = z.infer<typeof courseIdParamSchema>;
