'use client'

import type React from 'react'

import { Header } from '@/components/header/header'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

const terminalLines = [
  '> Initializing secure connection...',
  '> Encrypting data stream... [████████████] 100%',
  '> Verifying cryptographic signatures...',
  '> Loading quantum-resistant algorithms...',
  '> Establishing blockchain verification...',
  '> Syncing distributed ledger...',
  '> Authenticating multi-factor credentials...',
  '> Deploying zero-knowledge proofs...',
  '> Scanning for vulnerabilities... [SECURE]',
  '> Activating neural network protocols...',
  '> Compiling smart contracts...',
  '> Mining consensus blocks...',
  '> Validating merkle tree structure...',
  '> Optimizing hash functions...',
  '> Decrypting payload... [SUCCESS]',
]

function TerminalBackground() {
  const [lines, setLines] = useState<
    Array<{ text: string; id: number; opacity: number }>
  >([])
  const lineIdRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLine =
        terminalLines[Math.floor(Math.random() * terminalLines.length)]
      const newLine = {
        text: randomLine,
        id: lineIdRef.current++,
        opacity: 1,
      }

      setLines((prev) => {
        const updated = [...prev, newLine]
        return updated.slice(-8) // Keep only last 8 lines
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start p-4 font-mono text-xs text-primary opacity-80">
        {lines.map((line, index) => (
          <div
            key={line.id}
            className="mb-1 animate-fade-in"
            style={{
              opacity: Math.max(0.2, 1 - index * 0.1),
              animation: 'fadeIn 0.5s ease-in',
            }}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  )
}

function DraggableCard({
  children,
  initialPosition,
  animationDelay,
  to,
}: {
  children: React.ReactNode
  initialPosition: { x: number; y: number }
  animationDelay: string
  to: string
}) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Initialize responsive positioning
  useEffect(() => {
    const initializePosition = () => {
      if (typeof window === 'undefined') return

      const vw = window.innerWidth
      const vh = window.innerHeight

      // Convert percentage-based or viewport-based initial positions to pixels
      let adjustedX = initialPosition.x
      let adjustedY = initialPosition.y

      // Handle responsive positioning for different screen sizes
      if (vw < 640) {
        // Mobile
        adjustedX = Math.min(adjustedX, vw - 150) // Ensure cards fit on mobile
        adjustedY = Math.min(adjustedY, vh - 100)
      } else if (vw < 1024) {
        // Tablet
        adjustedX = Math.min(adjustedX, vw - 170)
        adjustedY = Math.min(adjustedY, vh - 110)
      }

      // Ensure cards are within viewport bounds
      const boundedX = Math.max(20, Math.min(adjustedX, vw - 180))
      const boundedY = Math.max(80, Math.min(adjustedY, vh - 120))

      setPosition({ x: boundedX, y: boundedY })
    }

    const handleResize = () => {
      if (!isDragging) {
        initializePosition()
      }
    }

    initializePosition()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [initialPosition.x, initialPosition.y, isDragging])

  const handleStart = (clientX: number, clientY: number) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top,
    })
    setIsDragging(true)
    setHasMoved(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX, e.clientY)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    const touch = e.touches[0]
    handleStart(touch.clientX, touch.clientY)
  }

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if the card was dragged
    if (hasMoved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging) return

      const newX = clientX - dragOffset.x
      const newY = clientY - dragOffset.y

      // Constrain to viewport bounds
      const vw = window.innerWidth
      const vh = window.innerHeight
      const boundedX = Math.min(Math.max(newX, 0), vw - 160) // 160 = card width
      const boundedY = Math.min(Math.max(newY, 0), vh - 100) // 100 = card height

      setPosition({ x: boundedX, y: boundedY })

      // Track if card has been moved significantly
      const moveDistance = Math.sqrt(
        Math.pow(newX - initialPosition.x, 2) +
          Math.pow(newY - initialPosition.y, 2),
      )
      if (moveDistance > 5) {
        setHasMoved(true)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault() // Prevent scrolling
      const touch = e.touches[0]
      handleMove(touch.clientX, touch.clientY)
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })
      document.addEventListener('touchend', handleEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, dragOffset, initialPosition.x, initialPosition.y])

  const CardContent = () => (
    <div
      ref={cardRef}
      className={`absolute card-glass p-3 sm:p-4 w-36 sm:w-40 cursor-move select-none transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] ${
        !isDragging ? 'animate-bounce-float' : ''
      } ${isDragging ? 'scale-105 shadow-[0_0_30px_rgba(0,255,136,0.5)]' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        animationDelay: !isDragging ? animationDelay : '0s',
        zIndex: isDragging ? 1000 : 50,
        transform: isDragging ? 'rotate(2deg)' : 'rotate(0deg)',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      {children}
    </div>
  )

  // If the card hasn't been moved significantly, make it a clickable link
  if (!hasMoved && !isDragging) {
    return (
      <Link to={to} className="contents">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

function App() {
  return (
    <div className="bg-dark-900 text-white overflow-hidden min-h-screen">
      <Header />
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <TerminalBackground />

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-accent-teal/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Cards Layer - positioned above main content */}
        <div className="floating-card-layer">
          <DraggableCard
            initialPosition={{
              x:
                typeof window !== 'undefined'
                  ? Math.max(50, window.innerWidth * 0.08)
                  : 80,
              y:
                typeof window !== 'undefined'
                  ? Math.max(300, window.innerHeight * 0.7)
                  : 400,
            }}
            animationDelay="1s"
            to="/passwords"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-accent-teal rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Passwords</span>
            </div>
            <div className="text-xs text-gray-400">100+ synced</div>
          </DraggableCard>

          <DraggableCard
            initialPosition={{
              x:
                typeof window !== 'undefined'
                  ? Math.max(200, window.innerWidth * 0.75)
                  : 300,
              y:
                typeof window !== 'undefined'
                  ? Math.max(120, window.innerHeight * 0.2)
                  : 150,
            }}
            animationDelay="2s"
            to="/documents"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-accent-cyan rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Documents</span>
            </div>
            <div className="text-xs text-gray-400">250+ files</div>
          </DraggableCard>

          <DraggableCard
            initialPosition={{
              x:
                typeof window !== 'undefined'
                  ? Math.max(150, window.innerWidth * 0.5 - 80)
                  : 350,
              y:
                typeof window !== 'undefined'
                  ? Math.max(80, window.innerHeight * 0.15)
                  : 100,
            }}
            animationDelay="3s"
            to="/url-shortener"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-accent-gold to-flame-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Links</span>
            </div>
            <div className="text-xs text-gray-400">50+ created</div>
          </DraggableCard>

          <DraggableCard
            initialPosition={{
              x:
                typeof window !== 'undefined'
                  ? Math.max(100, window.innerWidth * 0.12)
                  : 120,
              y:
                typeof window !== 'undefined'
                  ? Math.max(200, window.innerHeight * 0.35)
                  : 250,
            }}
            animationDelay="4s"
            to="/crm"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-flame-600 to-accent-gold rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">CRM</span>
            </div>
            <div className="text-xs text-gray-400">Coming soon</div>
          </DraggableCard>
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
