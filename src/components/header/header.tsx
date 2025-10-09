import { Link } from '@tanstack/react-router'
import { KeyIcon } from 'lucide-react'
import { Logo } from '../logo/logo'


export function Header() {
  return (
    <nav className="relative z-50 flex justify-between items-center px-4 sm:px-6 py-4 bg-transparent border-b border-white/20">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 bg-black/30 backdrop-blur-md px-3 lg:px-4 py-2 rounded-full border border-white/20 text-sm">
        <Link
          to="/"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          to="/documents"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Documents
        </Link>
        <Link
          to="/passwords"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Passwords
        </Link>
        <Link
          to="/url-shortener"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          URL Shortener
        </Link>
        <div
          className="flex items-center space-x-2 bg-gray-700/50 border border-white/20 rounded-2xl px-3 py-1
    text-sm cursor-pointer hover:bg-gray-600/50 transition-colors"
        >
          <span className="text-gray-300">Home Server</span>
          <div className="w-6 h-6 bg-gray-800 border border-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-primary">17</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Link
          to="/login"
        >
          <button className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent-teal hover:from-accent-teal hover:to-primary text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <KeyIcon className="w-4 h-4" />
            <span>FORTRESS</span>
          </button>
        </Link>
      </div>
    </nav>
  )
}
