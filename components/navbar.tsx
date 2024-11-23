import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Personal Blog</h1>
                <div>
                    <a href="/login" className="px-4 py-2 hover:bg-blue-700 rounded">
                        Login
                    </a>
                    <a href="/signup" className="px-4 py-2 hover:bg-blue-700 rounded">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}
