import { z } from 'zod';

const idParamSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

const courseIdParamSchema = z.object({
    courseId: z.coerce.number({ message: 'El courseId debe ser un número' }).int().positive('El courseId debe ser un número positivo'),
});

const studentIdParamSchema = z.object({
    studentId: z.coerce.number({ message: 'El studentId debe ser un número' }).int().positive('El studentId debe ser un número positivo'),
});

export const studentListQuerySchema = z.object({
    search: z.string().optional().default(''),
    page: z.coerce.number().int().positive().default(1),
    pageSize: z.coerce.number().int().positive().default(10),
});

export const availableStudentsQuerySchema = z.object({
    search: z.string().optional().default(''),
});

export const createStudentSchema = z.object({
    firstName: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre no puede exceder 100 caracteres'),
    lastName: z.string().min(1, 'El apellido es requerido').max(100, 'El apellido no puede exceder 100 caracteres'),
    email: z.email('Email inválido').max(150, 'El email no puede exceder 150 caracteres'),
    disabilityIds: z.array(z.coerce.number().int().positive()).default([]),
    courseIds: z.array(z.coerce.number().int().positive()).default([]),
});

export const updateStudentSchema = z.object({
    firstName: z.string().min(1).max(100).optional(),
    lastName: z.string().min(1).max(100).optional(),
    email: z.email('Email inválido').max(150).optional(),
    disabilityIds: z.array(z.coerce.number().int().positive()).optional(),
});

export const studentIdSchema = idParamSchema;
export const courseStudentParamsSchema = z.object({
    courseId: courseIdParamSchema.shape.courseId,
    studentId: studentIdParamSchema.shape.studentId,
});
export const courseIdSchema = courseIdParamSchema;
export const enrollStudentSchema = z.object({
    studentId: z.coerce.number({ message: 'El studentId debe ser un número' }).int().positive('El studentId debe ser un número positivo'),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;
export type UpdateStudentInput = z.infer<typeof updateStudentSchema>;
export type StudentListQuery = z.infer<typeof studentListQuerySchema>;