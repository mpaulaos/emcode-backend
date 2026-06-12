import { Request, Response } from 'express';
import GuideService from '../services/guideService';

class GuideController {
    private guideService = new GuideService();

    getAll = async (_req: Request, res: Response) => {
        try {
            res.json(await this.guideService.getAll());
        } catch(error) {
            console.error('Error en getAll guides:', error);
            res.status(500).json({ message: 'Error al obtener las guías' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) return res.status(400).json({ message: 'ID inválido' });

            const guide = await this.guideService.getById(id);
            if (!guide) return res.status(404).json({ message: 'Guía no encontrada' });

            res.json(guide);
        } catch(error) {
            console.error('Error en getById guide:', error);
            res.status(500).json({ message: 'Error al obtener la guía' });
        }
    };
}

export default GuideController;