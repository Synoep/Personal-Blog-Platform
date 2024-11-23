'use client';

import { useState } from 'react';

export default function NewPostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
            alert('Post created successfully!');
        } else {
            alert('Failed to create post!');
        }
    };

    return (
        <div className="max-w-md mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    placeholder="Post Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={5}
                    required
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
}
    