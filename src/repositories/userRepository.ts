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

class UserRepository {
    async findAll() {
        return await db.select().from(users);
    }

    async findByEmail(email: string) {
        const [user] = await db.select().from(users).where(eq(users.email, email));
        return user ?? null;
    }

    async create(data: CreateUserData) {
        const [newUser] = await db.insert(users).values(data).returning();
        return newUser;
    }
}

export default UserRepository;
