import { Request, Response } from 'express';
import DashboardService from '../services/dashboardService';

class DashboardController {
    private dashboardService: DashboardService;

    constructor() {
        this.dashboardService = new DashboardService();
    }

    getTeacher = async (req: Request, res: Response) => {
        try {
            const data = await this.dashboardService.getTeacherDashboard();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default DashboardController;