import type { Request, Response } from 'express';
import SlideService from '../services/slideService';

class SlideController {
    private service = new SlideService();

    getAll = async (req: Request, res: Response) => {
        try {
            const slides = await this.service.getAll();
            res.json(slides);
        } catch (err) {
            res.status(500).json({ message: err instanceof Error ? err.message : 'Error inesperado' });
        }
    };

    getByLessonId = async (req: Request, res: Response) => {
        try {
            const { lessonId } = req.params as unknown as { lessonId: number };
            const slides = await this.service.getByLessonId(lessonId);
            res.json(slides);
        } catch (err) {
            res.status(500).json({ message: err instanceof Error ? err.message : 'Error inesperado' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params as unknown as { id: number };
            const slide = await this.service.getById(id);
            res.json(slide);
        } catch (err) {
            res.status(404).json({ message: err instanceof Error ? err.message : 'Slide no encontrado' });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const { lessonId } = req.params as unknown as { lessonId: number };
            const newSlide = await this.service.create(lessonId, req.body);
            res.status(201).json(newSlide);
        } catch (err) {
            res.status(400).json({ message: err instanceof Error ? err.message : 'Error inesperado' });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params as unknown as { id: number };
            const updated = await this.service.update(id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ message: err instanceof Error ? err.message : 'Error inesperado' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const { id } = req.params as unknown as { id: number };
            await this.service.remove(id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ message: err instanceof Error ? err.message : 'Slide no encontrado' });
        }
    };
}

export default SlideController;