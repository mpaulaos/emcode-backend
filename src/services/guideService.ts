import GuideRepository from '../repositories/guideRepository';

class GuideService {
    private guideRepository = new GuideRepository();

    getAll() { return this.guideRepository.findAll(); }
    getById(id: number) { return this.guideRepository.findById(id); }
}

export default GuideService;