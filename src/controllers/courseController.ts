import { Request, Response } from 'express';
import CourseService from '../services/courseService';
import type { CourseIdParam, CreateCourseInput} from '../schemas/courseSchema';

class CourseController {
    private courseService: CourseService;

    constructor() {
        this.courseService = new CourseService();
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const courses = await this.courseService.getAll();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.getById(Number(req.params.id));
            if (!course) {
                return res.status(404).json({ message: 'Curso no encontrado' });
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    create = async (req: Request<{}, {}, CreateCourseInput>, res: Response) => {
        try {
            const course = await this.courseService.create(req.body);
            res.status(201).json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.update(Number(req.params.id), req.body);
            if (!course) {
                return res.status(404).json({ message: 'Curso no encontrado' });
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    publish = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.publish(Number(req.params.id), req.body);
            if (!course) {
                return res.status(404).json({ message: 'Curso no encontrado' });
            }
            res.json(course);
        } catch (error: any) {
            if (error instanceof Error && error.message.includes('required to publish')) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.remove(Number(req.params.id));
            if (!course) {
                return res.status(404).json({ message: 'Curso no encontrado' });
            }
            res.json({ message: 'Curso eliminado exitosamente', course });
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default CourseController;