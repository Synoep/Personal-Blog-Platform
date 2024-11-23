import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, password, name } = await request.json();

    // Implement your signup logic here, like saving to a database.
    const newUser = { id: '2', name, email };
    return NextResponse.json({ user: newUser, message: 'User created successfully' });
}
