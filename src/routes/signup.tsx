import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: SignupComponent,
})

function SignupComponent() {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-gray-400">Join and build your digital sanctuary.</p>
        </div>

        <form className="card-glass p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password_input" className="text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password_input"
              placeholder="••••••••"
              className="w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm_password" className="text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="••••••••"
              className="w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <button type="submit" className="w-full btn-primary px-4 py-3">
              Create Account
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
