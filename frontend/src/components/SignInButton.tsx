'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SignInButton = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className="flex items-center">
            {session && session.user ? (
                <>
                    <p className="mr-2">{session.user.name}</p>
                    <Link href="/api/auth/signout">
                        <span className="text-red-500 hover:underline cursor-pointer">Sign out</span>
                    </Link>
                </>
            ) : (
                <>
                    <Link href="/api/auth/signin">
                        <span className="text-green-500 hover:underline cursor-pointer">Sign In</span>
                    </Link>
                    <Link href="/signup" className="ml-4">
                        <span className="text-green-500 hover:underline cursor-pointer">Sign Up</span>
                    </Link>
                </>
            )}
        </div>
    );
};

export default SignInButton;
