import SlideRepository from '../repositories/slideRepository';
import LessonRepository from '../repositories/lessonRepository';
import type { CreateSlideInput, UpdateSlideInput } from '../schemas/slideSchema';

const THEORY_SLIDE_TYPES = ['text', 'text_image'];
const PRACTICE_SLIDE_TYPES = ['single_choice', 'multiple_choice', 'fill_blank'];

class SlideService {
    private repository = new SlideRepository();
    private lessonRepository = new LessonRepository();

    async getAll() {
        return this.repository.findAll();
    }

    async getByLessonId(lessonId: number) {
        return this.repository.findByLessonId(lessonId);
    }

    async getById(id: number) {
        const slide = await this.repository.findById(id);
        if (!slide) throw new Error('Slide no encontrado');
        return slide;
    }

    async create(lessonId: number, input: CreateSlideInput) {
        const lesson = await this.lessonRepository.findById(lessonId);
        if (!lesson) throw new Error('Lección no encontrada');

        const allowedTypes = lesson.lessonType === 'theory' ? THEORY_SLIDE_TYPES : PRACTICE_SLIDE_TYPES;

        if (!allowedTypes.includes(input.slideType)) {
            throw new Error(`El tipo de slide "${input.slideType}" no es válido para una lección de tipo "${lesson.lessonType}"`);
        }

        return this.repository.create({ ...input, lessonId });
    }

    async update(id: number, input: UpdateSlideInput) {
        const updated = await this.repository.update(id, input);
        if (!updated) throw new Error('Slide no encontrado');
        return updated;
    }

    async remove(id: number) {
        const removed = await this.repository.remove(id);
        if (!removed) throw new Error('Slide no encontrado');
        return removed;
    }
}

export default SlideService;