import { Request, Response } from 'express';
import QuizService from '../services/quizService';

class QuizController {
    private quizService: QuizService;

    constructor() {
        this.quizService = new QuizService();
    }

    getLastAttempt = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'No autenticado' });

            const lessonId = Number(req.params.lessonId);
            const attempt = await this.quizService.getLastAttempt(user.id, lessonId);

            if (!attempt) {
                return res.status(404).json({ message: 'No hay intentos previos' });
            }

            res.json(attempt);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    submitQuiz = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'No autenticado' });

            const lessonId = Number(req.params.lessonId);
            const result = await this.quizService.submitQuiz(user.id, lessonId, req.body);

            if ('error' in result) {
                return res.status((result as { status: number }).status).json({ message: (result as { error: string }).error });
            }

            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default QuizController;
