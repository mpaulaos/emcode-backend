import { Request, Response } from 'express';
import UserService from '../services/userService';
import { signToken } from '../utils/jwt';

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    register = async (req: Request, res: Response) => {
        try {
            await this.userService.register(req.body);
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        } catch (error) {
            if ((error as any)?.cause?.code === '23505') {
                return res.status(409).json({ message: 'El email ya está registrado' });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.login(req.body);
            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role ?? 'student',
                firstName: user.firstName,
                lastName: user.lastName,
            });
            res.json({ token, user });
        } catch (error) {
            if (error instanceof Error && error.message === 'Credenciales inválidas') {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    getProfile = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.getProfile(req.user!.id);
            res.json(user);
        } catch (error) {
            if (error instanceof Error && error.message === 'Usuario no encontrado') {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    updateProfile = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.updateProfile(req.user!.id, req.body);
            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role ?? 'student',
                firstName: user.firstName,
                lastName: user.lastName,
            });
            res.json({ user, token });
        } catch (error) {
            if (error instanceof Error && error.message === 'Usuario no encontrado') {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };

    changePassword = async (req: Request, res: Response) => {
        try {
            await this.userService.changePassword(req.user!.id, req.body);
            res.json({ message: 'Contraseña actualizada exitosamente' });
        } catch (error) {
            if (error instanceof Error && error.message === 'Usuario no encontrado') {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            if (error instanceof Error && error.message === 'Credenciales inválidas') {
                return res.status(401).json({ message: 'La contraseña actual es incorrecta' });
            }
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
}

export default UserController;
