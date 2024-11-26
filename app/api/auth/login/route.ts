import { NextResponse } from 'next/server'; // Adjust this import based on your actual path
export async function POST(request: Request) {
    const { email, password } = await request.json();

    if (email === 'test@example.com' && password === 'password123') {
        const user = { id: '1', name: 'Test User', email };
        return NextResponse.json({ user, token: 'example-token' });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}


export async function GET(res: Response) {
    return NextResponse.json({ message: 'Welcome to the He' });
}



