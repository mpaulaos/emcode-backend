import { z } from 'zod';

const optionSchema = z.object({
    id: z.string(),
    text: z.string().min(1, 'El texto de la opción es requerido'),
});

const singleChoiceContentSchema = z.object({
    question: z.string().min(1, 'La pregunta es requerida'),
    options: z.array(optionSchema).min(2, 'Debe haber al menos 2 opciones'),
    correctAnswer: z.string().min(1, 'Debe indicar la respuesta correcta'),
});

const multipleChoiceContentSchema = z.object({
    question: z.string().min(1, 'La pregunta es requerida'),
    options: z.array(optionSchema).min(2, 'Debe haber al menos 2 opciones'),
    correctAnswers: z.array(z.string()).min(1, 'Debe indicar al menos una respuesta correcta'),
});

const blankSchema = z.object({
    id: z.string(),
    correctAnswer: z.string().min(1, 'La respuesta correcta es requerida'),
});

const fillBlankContentSchema = z.object({
    textWithBlanks: z.string().min(1, 'El texto es requerido'),
    blanks: z.array(blankSchema).min(1, 'Debe haber al menos un espacio'),
});

const baseSlideSchema = z.object({
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
});

export const createSlideSchema = baseSlideSchema.superRefine((data, ctx) => {
    if (data.slideType === 'text' && !data.text) {
        ctx.addIssue({
            path: ['text'],
            code: z.ZodIssueCode.custom,
            message: 'El texto es requerido para slides de tipo texto',
        });
    }

    if (data.slideType === 'text_image') {
        if (!data.imageUrl) {
            ctx.addIssue({
                path: ['imageUrl'],
                code: z.ZodIssueCode.custom,
                message: 'La imagen es requerida',
            });
        }
        if (!data.imageAlt) {
            ctx.addIssue({
                path: ['imageAlt'],
                code: z.ZodIssueCode.custom,
                message: 'El texto alternativo (imageAlt) es obligatorio',
            });
        }
    }

    if (['single_choice', 'multiple_choice', 'fill_blank'].includes(data.slideType)) {
        if (!data.practiceContent) {
            ctx.addIssue({
                path: ['practiceContent'],
                code: z.ZodIssueCode.custom,
                message: 'El contenido de práctica es requerido',
            });
        } else {
            const validator =
                data.slideType === 'single_choice'
                    ? singleChoiceContentSchema
                    : data.slideType === 'multiple_choice'
                        ? multipleChoiceContentSchema
                        : fillBlankContentSchema;

            if (!validator.safeParse(data.practiceContent).success) {
                ctx.addIssue({
                    path: ['practiceContent'],
                    code: z.ZodIssueCode.custom,
                    message: 'El contenido no corresponde al tipo de slide seleccionado',
                });
            }
        }
    }
});

export const getSlideSchema = z.object({
    id: z.coerce.number({ message: 'El id debe ser un número' }).int().positive('El id debe ser un número positivo'),
});

export const lessonIdParamSchema = z.object({
    lessonId: z.coerce.number().int().positive('El lessonId debe ser un número positivo'),
});

export const updateSlideSchema = baseSlideSchema.partial();

export type CreateSlideInput = z.infer<typeof createSlideSchema>;
export type UpdateSlideInput = z.infer<typeof updateSlideSchema>;
export type SlideIdParam = z.infer<typeof getSlideSchema>;
export type LessonIdParam = z.infer<typeof lessonIdParamSchema>;