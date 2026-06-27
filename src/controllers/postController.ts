import { Request, Response } from 'express';
import PostService from '../services/postService';

class PostController {
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
    }

    getByCourseId = async (req: Request, res: Response) => {
        try {
            const posts = await this.postService.getByCourseId(Number(req.params.courseId));
            res.json(posts);
        } catch (error) {
            console.error('[getByCourseId]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const post = await this.postService.getById(Number(req.params.id));
            if (!post) {
                return res.status(404).json({ message: 'Post no encontrado' });
            }
            res.json(post);
        } catch (error) {
            console.error('[getById]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const userId = req.user!.id;
            const courseId = Number(req.params.courseId);
            const post = await this.postService.create(courseId, userId, req.body.content);
            res.status(201).json(post);
        } catch (error) {
            console.error('[create]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    reply = async (req: Request, res: Response) => {
        try {
            const userId = req.user!.id;
            const postId = Number(req.params.id);
            const post = await this.postService.reply(postId, userId, req.body.content);
            res.status(201).json(post);
        } catch (error) {
            if (error instanceof Error && error.message === 'Post no encontrado') {
                return res.status(404).json({ message: error.message });
            }
            console.error('[reply]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const userId = req.user!.id;
            const postId = Number(req.params.id);
            const post = await this.postService.update(postId, userId, req.body.content);
            if (!post) {
                return res.status(404).json({ message: 'Post no encontrado' });
            }
            res.json(post);
        } catch (error) {
            if (error instanceof Error && error.message === 'No tienes permiso para editar este post') {
                return res.status(403).json({ message: error.message });
            }
            if (error instanceof Error && error.message === 'Post no encontrado') {
                return res.status(404).json({ message: error.message });
            }
            console.error('[update]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const userId = req.user!.id;
            const role = req.user!.role;
            const postId = Number(req.params.id);
            const post = await this.postService.remove(postId, userId, role);
            if (!post) {
                return res.status(404).json({ message: 'Post no encontrado' });
            }
            res.json({ message: 'Post eliminado correctamente' });
        } catch (error) {
            if (error instanceof Error && error.message === 'No tienes permiso para eliminar este post') {
                return res.status(403).json({ message: error.message });
            }
            if (error instanceof Error && error.message === 'Post no encontrado') {
                return res.status(404).json({ message: error.message });
            }
            console.error('[remove]', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default PostController;
