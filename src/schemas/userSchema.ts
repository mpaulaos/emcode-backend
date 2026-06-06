import { z } from 'zod';

export const createUserSchema = z.object({
    firstName: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre no puede exceder 100 caracteres'),
    lastName: z.string().min(1, 'El apellido es requerido').max(100, 'El apellido no puede exceder 100 caracteres'),
    email: z.email('Email inválido').max(150, 'El email no puede exceder 150 caracteres'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    phone: z.string().max(20, 'El teléfono no puede exceder 20 caracteres').optional(),
    profilePicture: z.url('URL de foto inválida').optional().or(z.literal('')),
    role: z.enum(['admin', 'teacher', 'student']).optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
    email: z.email('Email inválido'),
    password: z.string().min(1, 'La contraseña es requerida'),
});

export type LoginDTO = z.infer<typeof loginSchema>;
