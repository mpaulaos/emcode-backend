import { z } from 'zod';

export const createCourseSchema = z.object({
    title: z.string().min(1, 'El título es requerido').max(100, 'El título no puede exceder 100 caracteres'),
    subtitle: z.string().min(1, 'El subtítulo es requerido').max(150, 'El subtítulo no puede exceder 150 caracteres'),
    description: z.string().min(1, 'La descripción es requerida').max(150, 'La descripción no puede exceder 150 caracteres'),
    image: z.string().nullable().optional(),
});

export const updateCourseSchema = createCourseSchema.partial();

export const publishCourseSchema = z.object({
    initialism: z.string().min(1, 'El inicialismo es requerido').max(50, 'Las siglas no puede exceder 50 caracteres'),
    credits: z.string().min(1, 'Los créditos son requeridos').max(2, 'Los créditos no pueden exceder 2 caracteres'),
    courseType: z.enum(['theoryPractice', 'theory'], { message: 'El tipo debe ser theoryPractice o theory' }).default('theoryPractice'),
});

// coerce convierte el string del URL param a número antes de validarlo
export const courseIdSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

export type CreateCourseInput = z.infer<typeof createCourseSchema>;
export type UpdateCourseInput = z.infer<typeof updateCourseSchema>;
export type PublishCourseInput = z.infer<typeof publishCourseSchema>;
export type CourseIdParam = z.infer<typeof courseIdSchema>;