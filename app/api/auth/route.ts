import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    // Example logic: Validate and authenticate user
    if (email === 'test@example.com' && password === 'password123') {
        const user = { id: '1', name: 'Test User', email };
        return NextResponse.json({ user, token: 'example-token' });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
