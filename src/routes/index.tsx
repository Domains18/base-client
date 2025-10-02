import { Header } from '@/components/header/header'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-dark-900 text-white overflow-hidden min-h-screen">
      <Header />
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-accent-teal/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0">
          <Link
            to="/passwords"
            className="absolute top-1/4 left-1/4 card-glass p-4 w-40 border border-white/30 hover:border-primary transition-all duration-300 animate-[bounce-float_3s_ease-in-out_infinite]"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent-teal rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Password Vault</span>
            </div>
            <div className="text-xs text-gray-400">256 items</div>
          </Link>

          <Link
            to="/documents"
            className="absolute top-1/3 right-1/4 card-glass p-4 w-40 border border-white/30 hover:border-primary transition-all duration-300 animate-[bounce-float_3s_ease-in-out_infinite_1s]"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Document Safe</span>
            </div>
            <div className="text-xs text-gray-400">12 Files</div>
          </Link>

          <Link
            to="/url-shortener"
            className="absolute bottom-1/4 left-1/3 card-glass p-4 w-40 border border-white/30 hover:border-primary transition-all duration-300 animate-[bounce-float_3s_ease-in-out_infinite_2s]"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-accent-cyan to-accent-mint rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Link Shortener</span>
            </div>
            <div className="text-xs text-gray-400">8 Links</div>
          </Link>

          <Link
            to="/crm"
            className="absolute bottom-1/3 right-1/3 card-glass p-4 w-40 border border-white/30 hover:border-primary transition-all duration-300 animate-[bounce-float_3s_ease-in-out_infinite_0.5s]"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-accent-mint to-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Personal CRM</span>
            </div>
            <div className="text-xs text-gray-400">50 Contacts</div>
          </Link>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <button className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 mx-auto border border-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </button>
          </div>

          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="text-sm text-gray-300">
              Your Digital Sanctuary
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

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              My Personal Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent-teal to-accent-cyan bg-clip-text text-transparent flame-text">
              Fortress
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            A secure and centralized hub for your passwords, documents, resumes,
            and personal utilities. All under your control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/login"
              className="btn-primary px-8 py-3 w-full sm:w-auto text-center"
            >
              Enter Hub
            </Link>
            <button className="btn-ghost px-8 py-3 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 flex items-center space-x-2 text-gray-400">
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
          <span className="text-sm hidden sm:inline">Explore Features</span>
        </div>

        <div className="absolute bottom-8 right-4 sm:right-8 text-gray-400">
          <div className="text-sm mb-2">System Status</div>
          <div className="w-12 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-30 hidden md:block">
          <svg viewBox="0 0 256 128" className="w-full h-full">
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff88" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 L32,90 L64,70 L96,85 L128,60 L160,75 L192,50 L224,40 L256,30"
              stroke="#00ff88"
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

    </div>
  )
}
