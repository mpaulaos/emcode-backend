import { z } from 'zod';

const optionSchema = z.object({
    id: z.string(),
    texto: z.string().min(1, 'El texto de la opción es requerido'),
});

const singleChoiceContentSchema = z.object({
    pregunta: z.string().min(1, 'La pregunta es requerida'),
    opciones: z.array(optionSchema).min(2, 'Debe haber al menos 2 opciones'),
    respuestaCorrecta: z.string().min(1, 'Debe indicar la respuesta correcta'),
});

const multipleChoiceContentSchema = z.object({
    pregunta: z.string().min(1, 'La pregunta es requerida'),
    opciones: z.array(optionSchema).min(2, 'Debe haber al menos 2 opciones'),
    respuestasCorrectas: z.array(z.string()).min(1, 'Debe indicar al menos una respuesta correcta'),
});

const blankSchema = z.object({
    id: z.string(),
    respuestaCorrecta: z.string().min(1, 'La respuesta correcta es requerida'),
});

const fillBlankContentSchema = z.object({
    textoConEspacios: z.string().min(1, 'El texto es requerido'),
    espacios: z.array(blankSchema).min(1, 'Debe haber al menos un espacio'),
});

export const createSlideSchema = z.object({
    slideType: z.enum(['text', 'text_image', 'single_choice', 'multiple_choice', 'fill_blank']),
    order: z.number().int().nonnegative('El orden debe ser un número positivo'),
    text: z.string().optional(),
    imageUrl: z.string().url('Debe ser una URL válida').optional(),
    imageAlt: z.string().optional(),
    practiceContent: z.union([
        singleChoiceContentSchema,
        multipleChoiceContentSchema,
        fillBlankContentSchema,
    ]).optional(),
}).refine(
    (data) => !(data.slideType === 'text_image' && data.imageUrl && !data.imageAlt),
    { message: 'El texto alternativo (imageAlt) es obligatorio si hay imagen', path: ['imageAlt'] }
);

export const getSlideSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

export const lessonIdParamSchema = z.object({
    lessonId: z.coerce.number().int().positive('El lessonId debe ser un número positivo'),
});

export const updateSlideSchema = createSlideSchema.partial();

export type CreateSlideInput = z.infer<typeof createSlideSchema>;
export type UpdateSlideInput = z.infer<typeof updateSlideSchema>;
export type SlideIdParam = z.infer<typeof getSlideSchema>;
export type LessonIdParam = z.infer<typeof lessonIdParamSchema>;