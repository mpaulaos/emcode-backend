import crypto from 'crypto';
import bcrypt from 'bcrypt';
import env from '../../env';
import UserRepository from '../repositories/userRepository';
import PasswordResetRepository from '../repositories/passwordResetRepository';
import EmailService from './emailService';
import { CreateUserDTO, LoginDTO, UpdateUserProfileDTO, ChangePasswordDTO, ResetPasswordDTO } from '../schemas/userSchema';

class UserService {
    private userRepository: UserRepository;
    private passwordResetRepository: PasswordResetRepository;
    private emailService: EmailService;

    constructor() {
        this.userRepository = new UserRepository();
        this.passwordResetRepository = new PasswordResetRepository();
        this.emailService = new EmailService();
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users.map(({ passwordHash, ...user }) => user);
    }

    async getProfile(userId: number) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const { passwordHash, ...userData } = user;
        const disabilities = user.role === 'student'
            ? await this.userRepository.findDisabilities(userId)
            : [];
        return { ...userData, disabilities };
    }

    async register(userData: CreateUserDTO) {
        const { password, ...rest } = userData;
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await this.userRepository.create({ ...rest, passwordHash });
        const { passwordHash: _, ...user } = newUser;
        return user;
    }

    async login(credentials: LoginDTO) {
        const { email, password } = credentials;
        const user = await this.userRepository.findByEmail(email);
        if (!user || !user.passwordHash) {
            throw new Error('Credenciales inválidas');
        }
        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) {
            throw new Error('Credenciales inválidas');
        }
        const { passwordHash, ...userData } = user;
        return userData as typeof userData & { role: string | null };
    }

    async updateProfile(userId: number, data: UpdateUserProfileDTO) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const { disabilityIds, ...userData } = data as any;

        if (disabilityIds !== undefined && user.role === 'student') {
            await this.userRepository.setDisabilities(userId, disabilityIds);
        }

        const updatedUser = await this.userRepository.update(userId, userData);
        const { passwordHash, ...userResponse } = updatedUser!;
        const disabilities = user.role === 'student'
            ? await this.userRepository.findDisabilities(userId)
            : [];
        return { ...userResponse, disabilities };
    }

    async changePassword(userId: number, data: ChangePasswordDTO) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (!user.passwordHash) {
            throw new Error('Credenciales inválidas');
        }

        const valid = await bcrypt.compare(data.currentPassword, user.passwordHash);
        if (!valid) {
            throw new Error('Credenciales inválidas');
        }

        const passwordHash = await bcrypt.hash(data.newPassword, 10);
        await this.userRepository.update(userId, { passwordHash });
    }

    async requestPasswordReset(email: string) {
        const user = await this.userRepository.findByEmail(email);

        // Same outcome whether or not the email exists, so the endpoint can't be used
        // to enumerate which addresses are registered.
        if (!user || user.isActive === false) {
            return;
        }

        // Only the most recent request stays usable
        await this.passwordResetRepository.deleteByUserId(user.id);

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + env.PASSWORD_RESET_EXPIRES_MINUTES * 60 * 1000);

        await this.passwordResetRepository.create({
            userId: user.id,
            tokenHash: this.hashResetToken(token),
            expiresAt,
        });

        const resetUrl = `${env.FRONTEND_URL}/reset-password?token=${token}`;

        await this.emailService.sendPasswordResetEmail({
            to: user.email,
            name: user.firstName,
            resetUrl,
        });
    }

    async resetPassword(data: ResetPasswordDTO) {
        const record = await this.passwordResetRepository.findValidByTokenHash(
            this.hashResetToken(data.token),
            new Date(),
        );

        if (!record) {
            throw new Error('Token inválido o expirado');
        }

        const passwordHash = await bcrypt.hash(data.newPassword, 10);
        const user = await this.userRepository.update(record.userId, { passwordHash });

        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        await this.passwordResetRepository.markUsed(record.id);
        await this.passwordResetRepository.deleteByUserId(record.userId);

        const { passwordHash: _, ...userData } = user;
        return userData as typeof userData & { role: string | null };
    }

    private hashResetToken(token: string) {
        return crypto.createHash('sha256').update(token).digest('hex');
    }
}

export default UserService;
