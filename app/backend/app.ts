import express from 'express';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

export default app;
