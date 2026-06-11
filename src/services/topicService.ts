import TopicRepository from '../repositories/topicRepository';
import type { CreateTopicInput, UpdateTopicInput } from '../schemas/topicSchema';

class TopicService {
    private topicRepository: TopicRepository;

    constructor() {
        this.topicRepository = new TopicRepository();
    }

    getAll() {
        return this.topicRepository.findAll();
    }

    getByCourseId(courseId: number) { 
        return this.topicRepository.findByCourseId(courseId);
    }

    getById(id: number) {
        return this.topicRepository.findById(id);
    }

    create(courseId: number, data: CreateTopicInput) { 
        return this.topicRepository.create({ ...data, courseId });
    }

    update(id: number, data: UpdateTopicInput) {
        return this.topicRepository.update(id, data);
    }

    remove(id: number) {
        return this.topicRepository.remove(id);
    }
}

export default TopicService;