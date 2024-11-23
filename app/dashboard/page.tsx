'use client';

import React, { useEffect, useState } from 'react';
import { Post } from '../../types/post';

export default function DashboardPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-6">Your Posts</h2>
            {posts.length === 0 ? (
                <p>No posts available. Create one now!</p>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="p-4 border rounded shadow-sm">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="mt-2">{post.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
