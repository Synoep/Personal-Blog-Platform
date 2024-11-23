import { Router } from 'express';
import signup from '../api/auth/signup';
import login from '../api/auth/login';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
