    import { Request, Response } from 'express';
    import { hashPassword, comparePassword } from '../utils/passwordUtils';
    import { generateToken } from '../utils/jwtUtils';
    import User from '../models/userModels';

    export const signup = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const hashedPassword = await hashPassword(password);
            const user = await User.create({ email, passwordHash: hashedPassword });
            res.status(201).json({ message: 'User registered successfully', userId: user.id });
        } catch (error) {
            res.status(500).json({ message: 'Signup failed', error });
        }
    };

    export const login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user || !(await comparePassword(password, user.hashPassword))) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const token = generateToken({ userId: user.id });
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Login failed', error });
        }
    };
