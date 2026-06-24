import StudentRepository from '../repositories/studentRepository';

class StudentService {
    private repo: StudentRepository;

    constructor() {
        this.repo = new StudentRepository();
    }

    async listDisabilities() {
        return this.repo.listDisabilities();
    }

    async createStudent(payload: { firstName: string; lastName: string; email: string; disabilityIds?: number[]; courseIds?: number[] }) {
        const { firstName, lastName, email, disabilityIds = [], courseIds = [] } = payload;
        const user = await this.repo.createStudent({ firstName, lastName, email });
        if (disabilityIds.length) await this.repo.setStudentDisabilities(user.id, disabilityIds);
        for (const c of courseIds) await this.repo.enrollStudentToCourse(user.id, c);
        return this.repo.findById(user.id);
    }

    async getStudentById(id: number) {
        return this.repo.findById(id);
    }

    async listTeacherStudents(teacherId: number, search = '', page = 1, pageSize = 10) {
        return this.repo.listTeacherStudents(teacherId, search, page, pageSize);
    }

    async updateStudent(id: number, data: { firstName?: string; lastName?: string; email?: string; disabilityIds?: number[] }) {
        const { disabilityIds, ...rest } = data as any;
        const updated = await this.repo.updateStudent(id, rest);
        if (disabilityIds) await this.repo.setStudentDisabilities(id, disabilityIds);
        return this.repo.findById(id);
    }

    async listCourseStudents(courseId: number, search = '', page = 1, pageSize = 10) {
        return this.repo.listCourseStudents(courseId, search, page, pageSize);
    }

    async listAvailableStudents(teacherId: number, courseId: number, search = '') {
        return this.repo.listAvailableStudentsForCourse(teacherId, courseId, search);
    }

    async enrollStudentToCourse(studentId: number, courseId: number) {
        return this.repo.enrollStudentToCourse(studentId, courseId);
    }

    async removeStudentFromCourse(studentId: number, courseId: number) {
        return this.repo.removeEnrollment(studentId, courseId);
    }
}

export default StudentService;
