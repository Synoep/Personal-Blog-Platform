import React from 'react';
import { Post } from '../types/post';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 text-sm">
                {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2">{post.content}</p>
        </div>
    );
}
