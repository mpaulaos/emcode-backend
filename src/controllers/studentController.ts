import { Request, Response } from 'express';
import StudentService from '../services/studentService';

class StudentController {
    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService();
    }

    list = async (req: Request, res: Response) => {
        try {
            const q = String(req.query.search || '');
            const page = Number(req.query.page || 1);
            const pageSize = Number(req.query.pageSize || 10);
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'Unauthorized' });

            const result = await this.studentService.listTeacherStudents(user.id, q, page, pageSize);
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error listing students' });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const student = await this.studentService.getStudentById(id);
            if (!student) return res.status(404).json({ message: 'Student not found' });
            res.json(student);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching student' });
        }
    };

    listDisabilities = async (_req: Request, res: Response) => {
        try {
            const items = await this.studentService.listDisabilities();
            res.json(items.map((i: any) => ({ id: i.id, name: i.name })));
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching disabilities' });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'Unauthorized' });
            const { firstName, lastName, email, disabilityIds = [], courseIds = [] } = req.body;
            if (!firstName || !lastName || !email) return res.status(400).json({ message: 'Missing fields' });
            const created = await this.studentService.createStudent({ firstName, lastName, email, disabilityIds, courseIds });
            res.status(201).json(created);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating student' });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'Unauthorized' });
            const id = Number(req.params.id);
            const { firstName, lastName, email, disabilityIds } = req.body;
            const student = await this.studentService.updateStudent(id, { firstName, lastName, email, disabilityIds });
            res.json(student);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error updating student' });
        }
    };

    // course-specific
    listCourseStudents = async (req: Request, res: Response) => {
        try {
            const courseId = Number(req.params.courseId);
            const q = String(req.query.search || '');
            const page = Number(req.query.page || 1);
            const pageSize = Number(req.query.pageSize || 10);
            const data = await this.studentService.listCourseStudents(courseId, q, page, pageSize);
            if (!data) return res.status(404).json({ message: 'Course not found' });
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error listing course students' });
        }
    };

    listAvailableStudents = async (req: Request, res: Response) => {
        try {
            const courseId = Number(req.params.courseId);
            const q = String(req.query.search || '');
            const user = req.user;
            if (!user) return res.status(401).json({ message: 'Unauthorized' });
            const items = await this.studentService.listAvailableStudents(user.id, courseId, q);
            res.json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error listing available students' });
        }
    };

    enrollStudent = async (req: Request, res: Response) => {
        try {
            const courseId = Number(req.params.courseId);
            const { studentId } = req.body;
            if (!studentId) return res.status(400).json({ message: 'studentId required' });
            await this.studentService.enrollStudentToCourse(studentId, courseId);
            res.status(204).send();
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error enrolling student' });
        }
    };

    removeFromCourse = async (req: Request, res: Response) => {
        try {
            const courseId = Number(req.params.courseId);
            const studentId = Number(req.params.studentId);
            await this.studentService.removeStudentFromCourse(studentId, courseId);
            res.status(204).send();
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error removing student from course' });
        }
    };
}

export default StudentController;
