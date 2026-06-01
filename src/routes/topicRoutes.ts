import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { z } from 'zod';

import db from '../db/db';
import { topics } from "../db/schema";
import e from 'cors';
import { eq } from 'drizzle-orm';


const createTopicSchema = z.object({
    topicName: z.string().min(1, 'El nombre del tema es requerido').max(100, 'El nombre del tema no puede exceder 100 caracteres'),
    courseId: z.number().int().positive()
});

const getTopicSchema = z.object({
    id: z.string()
});

const router = Router();


router.get('/', async (req, res) => {
    const topicList = await db.select().from(topics);
    res.json(topicList);
});


router.get('/:id', validateParams(getTopicSchema), async (req, res) => {
    const id = Number(req.params.id);
    const topic = await db.select().from(topics).where(eq(topics.id, id));
    if (!topic) {
        return res.status(404).json({ message: 'Tema no encontrado' })
    }
    res.json(topic)
});


router.post('/', validateBody(createTopicSchema), async (req, res) => {
    try {
        const { topicName, courseId } = req.body;

        const [newTopic] = await db.insert(topics).values({ topicName, courseId }).returning();

        res.status(201).json({
            message: 'Tema creado',
            topic: newTopic
        });

    } catch (error) {
        res.status(500).json({ message: 'Error interno' });
    }
});


router.delete('/:id', validateParams(getTopicSchema), async (req, res) => {
    res.status(200).json({ message: 'Tema eliminado exitosamente' });
});

export default router;


