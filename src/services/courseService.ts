import CourseRepository from '../repositories/courseRepository';
import type { CreateCourseInput, UpdateCourseInput, PublishCourseInput } from '../schemas/courseSchema';

// Contrato: los métodos que buscan por id devuelven el recurso o null.
// El controlador es quien decide si null se traduce en un 404.

class CourseService {
  private courseRepository: CourseRepository;

  constructor() {
    this.courseRepository = new CourseRepository();
  }

  getAll() {
    return this.courseRepository.findAll();
  }

  getById(id: number) {
    return this.courseRepository.findById(id);
  }

  create(data: CreateCourseInput) {
    //se pone un id por defecto por la autenticación(rol) 
    return this.courseRepository.create({ ...data, creatorId: 1 });
  }

  update(id: number, data: UpdateCourseInput) {
    return this.courseRepository.update(id, data);
  }

  publish(id: number, data: PublishCourseInput) {
    // Validación adicional: al publicar, initialism y credits deben existir
    if (!data.initialism || !data.credits) {
      throw new Error('initialism and credits are required to publish');
    }
    const payload = {
      initialism: data.initialism,
      credits: data.credits,
      courseType: data.courseType,
    };
    return this.courseRepository.update(id, payload);
  }

  remove(id: number) {
    return this.courseRepository.remove(id);
  }
}

export default CourseService;