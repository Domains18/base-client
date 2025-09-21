import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
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
              DeFi App
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
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">Protection</span>
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-300">17</span>
              </div>
            </div>
          </div>
        </div>

        {/* Create Account Button */}
        <button className="btn-primary">Create Account</button>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>

          {/* Glowing orb effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-flame-600/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Asset Cards - Floating */}
        <div className="absolute inset-0">
          {/* Cortex Card - Top Left */}
          <div className="absolute top-20 left-10 card-glass p-4 w-32 animate-float">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-flame-600 rounded-full"></div>
              <span className="text-sm font-medium">Cortex</span>
            </div>
            <div className="text-xs text-gray-400">20.345</div>
          </div>

          {/* Quant Card - Top Right */}
          <div
            className="absolute top-32 right-10 card-glass p-4 w-32 animate-float"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-flame-600 to-accent-gold rounded-full"></div>
              <span className="text-sm font-medium">Quant</span>
            </div>
            <div className="text-xs text-gray-400">2345</div>
          </div>

          {/* Aelf Card - Bottom Left */}
          <div
            className="absolute bottom-40 left-20 card-glass p-4 w-32 animate-float"
            style={{ animationDelay: '2s' }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-accent-gold to-flame-500 rounded-full"></div>
              <span className="text-sm font-medium">Aelf</span>
            </div>
            <div className="text-xs text-gray-400">10.346</div>
          </div>

          {/* Meeton Card - Bottom Right */}
          <div
            className="absolute bottom-32 right-20 card-glass p-4 w-32 animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-flame-500 to-primary rounded-full"></div>
              <span className="text-sm font-medium">Meeton</span>
            </div>
            <div className="text-xs text-gray-400">440</div>
          </div>
        </div>

        {/* Central Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Play Button */}
          <div className="mb-8">
            <button className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 mx-auto">
              <svg
                className="w-6 h-6 ml-1 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Unlock Assets Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="text-sm text-gray-300">
              Unlock Your Assets Spark!
            </span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              One-click for Asset
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent flame-text">
              Defense
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Dive into the art assets, where innovative blockchain technology
            meets financial expertise
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary px-8 py-3">Open App</button>
            <button className="btn-ghost px-8 py-3">Discover More</button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 flex items-center space-x-2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-sm">02/03 Scroll down</span>
        </div>

        {/* DeFi horizons indicator */}
        <div className="absolute bottom-8 right-8 text-gray-400">
          <div className="text-sm mb-2">DeFi horizons</div>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Chart/Graph visualization */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-30">
          <svg viewBox="0 0 256 128" className="w-full h-full">
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#EE2E3B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#EE2E3B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 L32,90 L64,70 L96,85 L128,60 L160,75 L192,50 L224,40 L256,30"
              stroke="#EE2E3B"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,100 L32,90 L64,70 L96,85 L128,60 L160,75 L192,50 L224,40 L256,30 L256,128 L0,128 Z"
              fill="url(#chartGradient)"
            />
          </svg>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="relative z-10 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-50">
            {/* Partner logos - simplified as text for now */}
            <div className="text-gray-500 font-medium">Vercel</div>
            <div className="text-gray-500 font-medium">Loom</div>
            <div className="text-gray-500 font-medium">Cash App</div>
            <div className="text-gray-500 font-medium">Loops</div>
            <div className="text-gray-500 font-medium">Zapier</div>
            <div className="text-gray-500 font-medium">Ramp</div>
            <div className="text-gray-500 font-medium">Raycast</div>
          </div>
        </div>
      </div>
    </div>
  )
}
