import React, { useEffect, useState } from 'react';

type Post = {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
};

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-6">All Blog Posts</h2>
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="p-4 border rounded shadow-sm">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                            <p className="mt-2">{post.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
