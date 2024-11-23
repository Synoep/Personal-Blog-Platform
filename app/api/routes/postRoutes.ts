import { Router } from 'express';
import { createPost, getAllPosts, getPostsByAuthor } from '../controllers/postController';
import { authenticate } from '../middlewares/authMiddleware'; // Verify this path is correct

const router = Router();

router.post('/post', authenticate, createPost); // Authenticated route
router.get('/posts', getAllPosts); // Public route
router.get('/posts/author', authenticate, getPostsByAuthor); // Authenticated route to get posts by a specific author

export default router;
