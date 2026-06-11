import { Request, Response } from 'express';
import TopicService from '../services/topicService';
import type { CreateTopicInput, UpdateTopicInput } from '../schemas/topicSchema';

class TopicController {
    private topicService: TopicService;

    constructor() {
        this.topicService = new TopicService();
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const topics = await this.topicService.getAll();
            res.json(topics);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getByCourseId = async (req: Request, res: Response) => {
        try {
            const topics = await this.topicService.getByCourseId(Number(req.params.courseId));
            res.json(topics);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const topic = await this.topicService.getById(Number(req.params.id));
            if (!topic) {
                return res.status(404).json({ message: 'Tema no encontrado' });
            }
            res.json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
    

    create = async (req: Request, res: Response) => {
        try {
            const courseId = Number(req.params.courseId);
            const topic = await this.topicService.create(courseId, req.body);
            res.status(201).json(topic);
        } catch (error) {
            console.error('Error al crear topic:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };


    update = async (req: Request, res: Response) => {
        try {
            const topic = await this.topicService.update(Number(req.params.id), req.body);
            if (!topic) {
                return res.status(404).json({ message: 'Tema no encontrado' });
            }
            res.json(topic);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const topic = await this.topicService.remove(Number(req.params.id));
            if (!topic) {
                return res.status(404).json({ message: 'Tema no encontrado' });
            }
            res.json({ message: 'Tema eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default TopicController;