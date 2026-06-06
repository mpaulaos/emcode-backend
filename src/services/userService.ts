import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository';
import { CreateUserDTO, LoginDTO } from '../schemas/userSchema';

class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users.map(({ passwordHash, ...user }) => user);
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
        if (!user) {
            throw new Error('Credenciales inválidas');
        }
        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) {
            throw new Error('Credenciales inválidas');
        }
        const { passwordHash, ...userData } = user;
        return userData as typeof userData & { role: string | null };
    }
}

export default UserService;
