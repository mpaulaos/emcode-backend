import db from '../db/db';
import { posts, users } from '../db/schema';
import { eq, and, isNull, desc } from 'drizzle-orm';

export type PostWithUser = {
    id: number;
    courseId: number;
    userId: number;
    parentPostId: number | null;
    content: string;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorFirstName: string | null;
    authorLastName: string | null;
    authorProfilePicture: string | null;
};

type CreatePostData = {
    courseId: number;
    userId: number;
    content: string;
    parentPostId?: number | null;
};

type UpdatePostData = {
    content: string;
};

const postWithUserSelect = {
    id: posts.id,
    courseId: posts.courseId,
    userId: posts.userId,
    parentPostId: posts.parentPostId,
    content: posts.content,
    isDeleted: posts.isDeleted,
    createdAt: posts.createdAt,
    updatedAt: posts.updatedAt,
    authorFirstName: users.firstName,
    authorLastName: users.lastName,
    authorProfilePicture: users.profilePicture,
};

class PostRepository {
    async findTopLevelByCourseId(courseId: number): Promise<PostWithUser[]> {
        return await db
            .select(postWithUserSelect)
            .from(posts)
            .leftJoin(users, eq(posts.userId, users.id))
            .where(
                and(
                    eq(posts.courseId, courseId),
                    isNull(posts.parentPostId),
                )
            )
            .orderBy(desc(posts.createdAt));
    }

    async findById(id: number): Promise<PostWithUser | null> {
        const [post] = await db
            .select(postWithUserSelect)
            .from(posts)
            .leftJoin(users, eq(posts.userId, users.id))
            .where(eq(posts.id, id));
        return post ?? null;
    }

    async findAllByCourseId(courseId: number): Promise<PostWithUser[]> {
        return await db
            .select(postWithUserSelect)
            .from(posts)
            .leftJoin(users, eq(posts.userId, users.id))
            .where(eq(posts.courseId, courseId))
            .orderBy(desc(posts.createdAt));
    }

    async create(data: CreatePostData) {
        const [newPost] = await db
            .insert(posts)
            .values({
                courseId: data.courseId,
                userId: data.userId,
                content: data.content,
                ...(data.parentPostId != null ? { parentPostId: data.parentPostId } : {}),
            })
            .returning();
        return newPost;
    }

    async update(id: number, data: UpdatePostData) {
        const [updated] = await db
            .update(posts)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(posts.id, id))
            .returning();
        return updated ?? null;
    }

    async softDelete(id: number) {
        const [updated] = await db
            .update(posts)
            .set({ isDeleted: true, updatedAt: new Date() })
            .where(eq(posts.id, id))
            .returning();
        return updated ?? null;
    }

    async findUserIdByPostId(id: number): Promise<number | null> {
        const [post] = await db
            .select({ userId: posts.userId })
            .from(posts)
            .where(eq(posts.id, id));
        return post?.userId ?? null;
    }
}

export default PostRepository;
