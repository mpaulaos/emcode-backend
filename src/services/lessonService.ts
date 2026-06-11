import LessonRepository from "../repositories/lessonRepository";
import type {CreateLessonInput, UpdateLessonInput} from "../schemas/lessonSchema";

class LessonService {
    private lessonRepository: LessonRepository;

    constructor(){
        this.lessonRepository = new LessonRepository();
    }

    getAll() {
            return this.lessonRepository.findAll();
        }
    
        getByTopicId(topicId: number) { 
            return this.lessonRepository.findByTopicId(topicId);
        }
    
        getById(id: number) {
            return this.lessonRepository.findById(id);
        }
    
        create(topicId: number, data: CreateLessonInput) { 
            return this.lessonRepository.create({ ...data, topicId });
        }
    
        update(id: number, data: UpdateLessonInput) {
            return this.lessonRepository.update(id, data);
        }
    
        remove(id: number) {
            return this.lessonRepository.remove(id);
        }
}

export default LessonService;