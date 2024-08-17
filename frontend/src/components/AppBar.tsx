import SignInButton from './SignInButton';
import Link from 'next/link';

const AppBar = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex items-center gap-4">
                <Link href="/" className="transition-colors hover:text-blue-600">
                    Home page
                </Link>
                <Link href="/dashboard" className="trasition-colors hover:text-blue-600">
                    Dashboard
                </Link>
            </div>
            <SignInButton />
        </header>
    );
};

export default AppBar;
