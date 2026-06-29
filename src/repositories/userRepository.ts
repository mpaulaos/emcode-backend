import { eq } from 'drizzle-orm';
import db from '../db/db';
import { users } from '../db/schema';

type CreateUserData = {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash?: string;
    phone?: string;
    profilePicture?: string;
    role?: 'admin' | 'teacher' | 'student';
    isVerified?: boolean;
};

type UpdateUserData = {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
    profilePicture?: string | null;
    passwordHash?: string;
};

class UserRepository {
    async findAll() {
        return await db.select().from(users);
    }

    async findById(id: number) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user ?? null;
    }

    async findByEmail(email: string) {
        const [user] = await db.select().from(users).where(eq(users.email, email));
        return user ?? null;
    }

    async create(data: CreateUserData) {
        const [newUser] = await db.insert(users).values(data).returning();
        return newUser;
    }

    async update(id: number, data: UpdateUserData) {
        const [updated] = await db
            .update(users)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(users.id, id))
            .returning();
        return updated ?? null;
    }
}

export default UserRepository;
