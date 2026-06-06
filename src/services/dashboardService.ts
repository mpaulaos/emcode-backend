import DashboardRepository from '../repositories/dashboardRepository';

class DashboardService {
  private dashboardRepository: DashboardRepository;

  constructor() {
    this.dashboardRepository = new DashboardRepository();
  }

  async getTeacherDashboard() {
    const courses = await this.dashboardRepository.getTeacherCourses();
    return {
      teacherName: 'Paula', // Acá hay que cambiar el usuario autenticado 
      courses,
    };
  }
}

export default DashboardService;