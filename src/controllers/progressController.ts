import { Request, Response } from 'express';
import ProgressService from '../services/progressService';

class ProgressController {
    private progressService: ProgressService;

    constructor() {
        this.progressService = new ProgressService();
    }

    markCompleted = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'No autenticado' });

            const lessonId = Number(req.params.lessonId);
            const result = await this.progressService.markLessonAsCompleted(user.id, lessonId);
            if (!result) {
                return res.status(404).json({ message: 'Lección no encontrada' });
            }
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getCourseProgress = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'No autenticado' });

            const courseId = Number(req.params.courseId);
            const progress = await this.progressService.getCourseProgress(user.id, courseId);
            res.json(progress);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getAllProgress = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'No autenticado' });

            const progress = await this.progressService.getAllProgress(user.id);
            res.json(progress);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default ProgressController;
