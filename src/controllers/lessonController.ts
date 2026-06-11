import { Request, Response } from 'express';
import LessonService from '../services/lessonService';

class LessonController {
    private lessonService: LessonService;

    constructor() {
        this.lessonService = new LessonService();
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const lessons = await this.lessonService.getAll();
            res.json(lessons);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getByTopicId = async (req: Request, res: Response) => {
        try {
            const lessons = await this.lessonService.getByTopicId(Number(req.params.topicId));
            res.json(lessons);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const lesson = await this.lessonService.getById(Number(req.params.id));
            if (!lesson) {
                return res.status(404).json({ message: 'Lección no encontrada' });
            }
            res.json(lesson);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
    

    create = async (req: Request, res: Response) => {
        try {
            const topicId = Number(req.params.topicId);
            const lesson = await this.lessonService.create(topicId, req.body);
            res.status(201).json(lesson);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };


    update = async (req: Request, res: Response) => {
        try {
            const lesson = await this.lessonService.update(Number(req.params.id), req.body);
            if (!lesson) {
                return res.status(404).json({ message: 'Lección no encontrada' });
            }
            res.json(lesson);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const lesson = await this.lessonService.remove(Number(req.params.id));
            if (!lesson) {
                return res.status(404).json({ message: 'Lección no encontrada' });
            }
            res.json({ message: 'Lección eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

}

export default LessonController;