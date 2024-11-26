import { NextResponse } from 'next/server';
import User from '../../models/userModels';
import connectDB from '../../utils/database';

export async function POST(request: Request) {

    await connectDB();
    const { email, password, name } = await request.json();

    // Implement your signup logic here, like saving to a database.
    const newUser = await User.create({ email, password, name });
    console.log('User created:', newUser);
    return NextResponse.json({ user: newUser, message: 'User created successfully' }, { status: 201 });
}
