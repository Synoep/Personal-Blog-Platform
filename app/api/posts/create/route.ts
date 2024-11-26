import { NextRequest, NextResponse } from 'next/server';
import Post from '../../models/postModels';
// Adjust to match your project structure.

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, content, userId } = body;

        const post = await Post.create({ title, content, authorId: userId });
        return NextResponse.json({ message: 'Post created successfully', post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Post creation failed', error }, { status: 500 });
    }
}
