import { Router } from 'express';
import { validateBody, validateParams } from '../middleware/validations';
import { z } from 'zod';

import db from '../db/db';
import { lessons } from "../db/schema";
import e from 'cors';
import { eq } from 'drizzle-orm';

const router = Router();

const lessonsList = [
    { id: 1, lessonName: 'Primera', type: 'Lección', status: 'completed' },
    { id: 2, lessonName: 'Segunda', type: 'Lección', status: 'finished' },
    { id: 3, lessonName: 'Tercera', type: 'Lección', status: 'finished' },
    { id: 4, lessonName: 'Cuarta', type: 'Lección', status: 'in-progress' },
    { id: 5, lessonName: 'Quinta', type: 'Laboratorio', status: 'not-started' }
]

router.get('/lessons', (req, res) => {
    res.json(lessons)
});

export default router;