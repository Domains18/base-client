import { Logo } from '../logo/logo'

import { User } from 'lucide-react'

export function Header() {
  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="hidden md:flex items-center space-x-6 bg-gray-800 px-4 py-2 rounded-full backdrop-blur-md text-sm">
        <a
          href="#"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Inspiration
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Assets
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Calendar
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-primary transition-colors"
        >
          Resume
        </a>
        <div
          className="flex items-center space-x-2 bg-gray-400 rounded-2xl px-3 py-1
    text-sm cursor-pointer hover:bg-gray-500 transition-colors
          "
        >
          <span className="text-dark-300">Home Server</span>
          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-300">17</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-flame-500 hover:from-flame-500 hover:to-primary text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <User className="w-4 h-4" />
          <span>Create Account</span>
        </button>
      </div>
    </nav>
  )
}
