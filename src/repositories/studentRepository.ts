import { and, eq, ilike, inArray, or } from 'drizzle-orm';
import db from '../db/db';
import {
	courses,
	disabilities,
	enrrollments,
	lessons,
	student_disabilities,
	student_progress,
	topics,
	users,
} from '../db/schema';
import UserRepository from './userRepository';

class StudentRepository {
	private userRepository = new UserRepository();

	async listDisabilities() {
		return db.select({ id: disabilities.id, name: disabilities.name }).from(disabilities);
	}

	async createStudent(data: { firstName: string; lastName: string; email: string }) {
		return this.userRepository.create({ ...data, role: 'student' });
	}

	async setStudentDisabilities(userId: number, disabilityIds: number[]) {
		await db.delete(student_disabilities).where(eq(student_disabilities.userId, userId));

		if (!disabilityIds.length) {
			return;
		}

		await db.insert(student_disabilities).values(
			disabilityIds.map((disabilityId) => ({ userId, disabilityId })),
		);
	}

	async enrollStudentToCourse(userId: number, courseId: number) {
		const [existing] = await db
			.select({ id: enrrollments.id })
			.from(enrrollments)
			.where(and(eq(enrrollments.userId, userId), eq(enrrollments.courseId, courseId)));

		if (existing) {
			return existing;
		}

		const [created] = await db.insert(enrrollments).values({ userId, courseId }).returning();
		return created;
	}

	async removeEnrollment(userId: number, courseId: number) {
		await db.delete(enrrollments).where(and(eq(enrrollments.userId, userId), eq(enrrollments.courseId, courseId)));
	}

	async findById(id: number) {
		const [user] = await db.select().from(users).where(eq(users.id, id));
		if (!user) {
			return null;
		}

		const enrollmentRows = await db.select({ courseId: enrrollments.courseId }).from(enrrollments).where(eq(enrrollments.userId, id));
		const courseIds = enrollmentRows.map((row) => row.courseId);
		const userCourses = courseIds.length
			? await db.select().from(courses).where(inArray(courses.id, courseIds))
			: [];

		const disabilityRows = await db
			.select({ disabilityId: student_disabilities.disabilityId })
			.from(student_disabilities)
			.where(eq(student_disabilities.userId, id));
		const disabilityIds = disabilityRows.map((row) => row.disabilityId);
		const userDisabilities = disabilityIds.length
			? await db.select({ id: disabilities.id, name: disabilities.name }).from(disabilities).where(inArray(disabilities.id, disabilityIds))
			: [];

		return {
			...user,
			courses: userCourses,
			disabilities: userDisabilities,
		};
	}

	async listTeacherStudents(teacherId: number, search = '', page = 1, pageSize = 10) {
		const teacherCourses = await db.select({ id: courses.id }).from(courses).where(eq(courses.creatorId, teacherId));
		const courseIds = teacherCourses.map((course) => course.id);

		if (!courseIds.length) {
			return { items: [], total: 0, page, pageSize };
		}

		const enrollments = await db
			.select({ userId: enrrollments.userId })
			.from(enrrollments)
			.where(inArray(enrrollments.courseId, courseIds));

		const userIds = Array.from(new Set(enrollments.map((row) => row.userId)));
		if (!userIds.length) {
			return { items: [], total: 0, page, pageSize };
		}

		const filters = [inArray(users.id, userIds), eq(users.role, 'student')];
		const trimmedSearch = search.trim();
		if (trimmedSearch) {
			const term = `%${trimmedSearch}%`;
			filters.push(or(ilike(users.firstName, term), ilike(users.lastName, term), ilike(users.email, term)) as any);
		}

		const matchingUsers = await db.select({ id: users.id }).from(users).where(and(...filters));
		const total = matchingUsers.length;
		const pagedIds = matchingUsers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize).map((row) => row.id);

		if (!pagedIds.length) {
			return { items: [], total, page, pageSize };
		}

		const userRows = await db.select().from(users).where(inArray(users.id, pagedIds));
		const orderMap = new Map(pagedIds.map((id, index) => [id, index]));
		userRows.sort((left, right) => (orderMap.get(left.id) ?? 0) - (orderMap.get(right.id) ?? 0));

		const items = [];
		for (const student of userRows) {
			const disabilityRows = await db
				.select({ disabilityId: student_disabilities.disabilityId })
				.from(student_disabilities)
				.where(eq(student_disabilities.userId, student.id));
			const disabilityIds = disabilityRows.map((row) => row.disabilityId);
			const studentDisabilities = disabilityIds.length
				? await db.select({ id: disabilities.id, name: disabilities.name }).from(disabilities).where(inArray(disabilities.id, disabilityIds))
				: [];

			const studentCoursesRows = await db
				.select({ courseId: enrrollments.courseId })
				.from(enrrollments)
				.where(eq(enrrollments.userId, student.id));
			const studentCourseIds = studentCoursesRows.map((row) => row.courseId);
			const studentCourses = studentCourseIds.length
				? await db.select({ id: courses.id, title: courses.title }).from(courses).where(inArray(courses.id, studentCourseIds))
				: [];

			items.push({
				id: student.id,
				firstName: student.firstName,
				lastName: student.lastName,
				email: student.email,
				courses: studentCourses,
				disabilities: studentDisabilities,
			});
		}

		return { items, total, page, pageSize };
	}

	async listCourseStudents(courseId: number, search = '', page = 1, pageSize = 10) {
		const [course] = await db.select().from(courses).where(eq(courses.id, courseId));
		if (!course) {
			return null;
		}

		const enrollmentRows = await db
			.select({ userId: enrrollments.userId })
			.from(enrrollments)
			.where(eq(enrrollments.courseId, courseId));
		const userIds = Array.from(new Set(enrollmentRows.map((row) => row.userId)));

		if (!userIds.length) {
			const [teacher] = await db.select().from(users).where(eq(users.id, course.creatorId));
			return {
				course: { id: course.id, title: course.title },
				teacher: teacher ? { id: teacher.id, firstName: teacher.firstName, lastName: teacher.lastName, email: teacher.email } : null,
				items: [],
				total: 0,
				page,
				pageSize,
			};
		}

		const filters = [inArray(users.id, userIds), eq(users.role, 'student')];
		const trimmedSearch = search.trim();
		if (trimmedSearch) {
			const term = `%${trimmedSearch}%`;
			filters.push(or(ilike(users.firstName, term), ilike(users.lastName, term), ilike(users.email, term)) as any);
		}

		const matchingUsers = await db.select({ id: users.id }).from(users).where(and(...filters));
		const total = matchingUsers.length;
		const pagedIds = matchingUsers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize).map((row) => row.id);

		const pageUsers = pagedIds.length
			? await db.select().from(users).where(inArray(users.id, pagedIds))
			: [];
		const orderMap = new Map(pagedIds.map((id, index) => [id, index]));
		pageUsers.sort((left, right) => (orderMap.get(left.id) ?? 0) - (orderMap.get(right.id) ?? 0));

		const topicRows = await db.select({ id: topics.id }).from(topics).where(eq(topics.courseId, courseId));
		const topicIds = topicRows.map((row) => row.id);
		const lessonRows = topicIds.length
			? await db.select({ id: lessons.id }).from(lessons).where(inArray(lessons.topicId, topicIds))
			: [];
		const lessonIds = lessonRows.map((row) => row.id);
		const totalLessons = lessonIds.length;

		const [teacher] = await db.select().from(users).where(eq(users.id, course.creatorId));

		const items = [];
		for (const student of pageUsers) {
			const disabilityRows = await db
				.select({ disabilityId: student_disabilities.disabilityId })
				.from(student_disabilities)
				.where(eq(student_disabilities.userId, student.id));
			const disabilityIds = disabilityRows.map((row) => row.disabilityId);
			const studentDisabilities = disabilityIds.length
				? await db.select({ id: disabilities.id, name: disabilities.name }).from(disabilities).where(inArray(disabilities.id, disabilityIds))
				: [];

			let progress = 0;
			if (totalLessons > 0) {
				const completedRows = await db
					.select({ lessonId: student_progress.lessonId, isCompleted: student_progress.isCompleted })
					.from(student_progress)
					.where(eq(student_progress.userId, student.id));
				const completedInCourse = completedRows.filter((row) => lessonIds.includes(row.lessonId) && row.isCompleted);
				progress = Math.round((completedInCourse.length / totalLessons) * 100);
			}

			items.push({
				id: student.id,
				firstName: student.firstName,
				lastName: student.lastName,
				email: student.email,
				disabilities: studentDisabilities,
				progress,
			});
		}

		return {
			course: { id: course.id, title: course.title },
			teacher: teacher ? { id: teacher.id, firstName: teacher.firstName, lastName: teacher.lastName, email: teacher.email } : null,
			items,
			total,
			page,
			pageSize,
		};
	}

	async listAvailableStudentsForCourse(teacherId: number, courseId: number, search = '') {
		const teacherStudents = await this.listTeacherStudents(teacherId, search, 1, 10_000);
		const enrolledRows = await db.select({ userId: enrrollments.userId }).from(enrrollments).where(eq(enrrollments.courseId, courseId));
		const enrolledIds = new Set(enrolledRows.map((row) => row.userId));

		return teacherStudents.items
			.filter((student: any) => !enrolledIds.has(student.id))
			.map((student: any) => ({
				id: student.id,
				firstName: student.firstName,
				lastName: student.lastName,
				email: student.email,
			}));
	}

	async updateStudent(id: number, data: { firstName?: string; lastName?: string; email?: string }) {
		const updateData: { firstName?: string; lastName?: string; email?: string; updatedAt: Date } = {
			updatedAt: new Date(),
			...data,
		};

		const [updated] = await db.update(users).set(updateData).where(eq(users.id, id)).returning();
		return updated ?? null;
	}
}

export default StudentRepository;