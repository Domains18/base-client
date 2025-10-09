import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/login/')({
    component: LoginComponent,
});

function LoginComponent() {
    return (
        <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">Sign in to access your digital fortress.</p>
                </div>

                <form className="card-glass p-8 space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-300">
                            UserName
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="you@example.com"
                            className="w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password_input"
                            className="text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password_input"
                            placeholder="••••••••"
                            className="w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-600 bg-dark-800 text-primary focus:ring-primary"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-400"
                            >
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-primary hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <div>
                        <button type="submit" className="w-full btn-primary px-4 py-3">
                            Sign In
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
