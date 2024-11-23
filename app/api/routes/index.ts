import { Router } from 'express';
import authRoutes from './authRoutes';
import postRoutes from './postRoutes';

const router = Router();

// Use the routes
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);

export default router;
