import { Request, Response } from 'express';
import Post from '../models/postModel';

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        const { userId } = req.user;
        const post = await Post.create({ title, content, authorId: userId });
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Post creation failed', error });
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts', error });
    }
};

export const getPostsByAuthor = async (req: Request, res: Response) => {
    try {
        const { author } = req.query;
        const posts = await Post.findAll({ where: { authorId: author } });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts by author', error });
    }
};
