import { and, eq, gt, isNull, lt } from 'drizzle-orm';
import db from '../db/db';
import { password_reset_tokens } from '../db/schema';

type CreateTokenData = {
    userId: number;
    tokenHash: string;
    expiresAt: Date;
};

class PasswordResetRepository {
    async create(data: CreateTokenData) {
        const [token] = await db.insert(password_reset_tokens).values(data).returning();
        return token;
    }

    async findValidByTokenHash(tokenHash: string, now: Date) {
        const [token] = await db
            .select()
            .from(password_reset_tokens)
            .where(and(
                eq(password_reset_tokens.tokenHash, tokenHash),
                isNull(password_reset_tokens.usedAt),
                gt(password_reset_tokens.expiresAt, now),
            ));
        return token ?? null;
    }

    async markUsed(id: number) {
        await db
            .update(password_reset_tokens)
            .set({ usedAt: new Date() })
            .where(eq(password_reset_tokens.id, id));
    }

    async deleteByUserId(userId: number) {
        await db.delete(password_reset_tokens).where(eq(password_reset_tokens.userId, userId));
    }

    async deleteExpired(now: Date) {
        await db.delete(password_reset_tokens).where(lt(password_reset_tokens.expiresAt, now));
    }
}

export default PasswordResetRepository;
