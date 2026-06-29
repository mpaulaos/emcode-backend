import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository';
import { CreateUserDTO, LoginDTO, UpdateUserProfileDTO, ChangePasswordDTO } from '../schemas/userSchema';

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
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
        return userData;
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

        const updatedUser = await this.userRepository.update(userId, data);
        const { passwordHash, ...userData } = updatedUser!;
        return userData;
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
}

export default UserService;
