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

export const updateUserProfileSchema = z.object({
    firstName: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre no puede exceder 100 caracteres').optional(),
    lastName: z.string().min(1, 'El apellido es requerido').max(100, 'El apellido no puede exceder 100 caracteres').optional(),
    phone: z.string().max(20, 'El teléfono no puede exceder 20 caracteres').optional().nullable(),
    profilePicture: z.string().max(500, 'La URL de la foto no puede exceder 500 caracteres').optional().nullable(),
    disabilityIds: z.array(z.number().int().positive()).optional(),
});

export type UpdateUserProfileDTO = z.infer<typeof updateUserProfileSchema>;

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1, 'La contraseña actual es requerida'),
    newPassword: z.string().min(6, 'La nueva contraseña debe tener al menos 6 caracteres'),
});

export type ChangePasswordDTO = z.infer<typeof changePasswordSchema>;
