/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      // Winter + Neon Color Palette
      colors: {
        // Base winter colors
        winter: {
          50: '#f8fafc',   // Pure snow
          100: '#f1f5f9',  // Light frost
          200: '#e2e8f0',  // Soft ice
          300: '#cbd5e1',  // Gentle frost
          400: '#94a3b8',  // Winter mist
          500: '#64748b',  // Storm clouds
          600: '#475569',  // Deep winter
          700: '#334155',  // Winter night
          800: '#1e293b',  // Arctic night
          900: '#0f172a',  // Polar darkness
        },
        
        // Neon accents
        neon: {
          cyan: '#00ffff',      // Electric cyan
          blue: '#0080ff',      // Neon blue
          purple: '#8000ff',    // Electric purple
          pink: '#ff00ff',      // Hot pink
          green: '#00ff80',     // Matrix green
          yellow: '#ffff00',    // Electric yellow
          orange: '#ff8000',    // Neon orange
        },
        
        // Glow variants (with transparency)
        glow: {
          cyan: 'rgba(0, 255, 255, 0.5)',
          blue: 'rgba(0, 128, 255, 0.5)',
          purple: 'rgba(128, 0, 255, 0.5)',
          pink: 'rgba(255, 0, 255, 0.5)',
          green: 'rgba(0, 255, 128, 0.5)',
          yellow: 'rgba(255, 255, 0, 0.5)',
          orange: 'rgba(255, 128, 0, 0.5)',
        },
        
        // Ice variants (winter + neon mix)
        ice: {
          cyan: '#e0ffff',
          blue: '#e6f2ff',
          purple: '#f0e6ff',
          pink: '#ffe6ff',
          green: '#e6ffe6',
        }
      },
      
      // Typography
      fontFamily: {
        'mono': ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
        'display': ['Orbitron', 'sans-serif'],
        'cyber': ['Oxanium', 'sans-serif'],
      },
      
      // Spacing for precise layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Box shadows for glow effects
      boxShadow: {
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'neon-blue': '0 0 5px #0080ff, 0 0 10px #0080ff, 0 0 15px #0080ff, 0 0 20px #0080ff',
        'neon-purple': '0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 15px #8000ff, 0 0 20px #8000ff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
        'neon-green': '0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 15px #00ff80, 0 0 20px #00ff80',
        'neon-yellow': '0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00, 0 0 20px #ffff00',
        'glow-soft': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-medium': '0 0 30px rgba(0, 255, 255, 0.5)',
        'glow-strong': '0 0 40px rgba(0, 255, 255, 0.7)',
        'inner-neon': 'inset 0 0 10px rgba(0, 255, 255, 0.5)',
      },
      
      // Custom gradients
      backgroundImage: {
        'winter-neon': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #00ffff 100%)',
        'cyber-ice': 'linear-gradient(45deg, #f8fafc 0%, #00ffff 50%, #8000ff 100%)',
        'aurora': 'linear-gradient(90deg, #00ffff 0%, #8000ff 25%, #ff00ff 50%, #00ff80 75%, #ffff00 100%)',
        'ice-storm': 'linear-gradient(180deg, #f8fafc 0%, #cbd5e1 50%, #0080ff 100%)',
        'neon-grid': 'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(0, 255, 255, 0.1) 100px)',
        'matrix-rain': 'linear-gradient(180deg, transparent 0%, rgba(0, 255, 128, 0.1) 50%, transparent 100%)',
      },
      
      // Animation keyframes
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '50%': { 
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor',
            opacity: '0.8'
          }
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor'
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
          }
        },
        'matrix-flicker': {
          '0%, 100%': { opacity: '1' },
          '2%': { opacity: '0.8' },
          '4%': { opacity: '1' },
          '8%': { opacity: '0.9' },
          '10%': { opacity: '1' },
          '92%': { opacity: '1' },
          '94%': { opacity: '0.8' },
          '96%': { opacity: '1' },
          '98%': { opacity: '0.9' },
        },
        'cyber-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      
      // Animation utilities
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'matrix-flicker': 'matrix-flicker 5s infinite',
        'cyber-scan': 'cyber-scan 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      // Border radius for futuristic shapes
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'cyber': '0 1rem 0 1rem',
        'diamond': '0 0.5rem 1rem 0.5rem',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Z-index scale
      zIndex: {
        '100': '100',
        '1000': '1000',
      }
    },
  },
  
  plugins: [
    // Custom plugin for neon utilities
    function({ addUtilities, theme }) {
      const neonColors = theme('colors.neon');
      const neonUtilities = {};
      
      // Generate neon text utilities
      Object.entries(neonColors).forEach(([key, value]) => {
        neonUtilities[`.text-neon-${key}`] = {
          color: value,
          textShadow: `0 0 5px ${value}, 0 0 10px ${value}, 0 0 15px ${value}`,
        };
        
        neonUtilities[`.border-neon-${key}`] = {
          borderColor: value,
          boxShadow: `0 0 5px ${value}`,
        };
        
        neonUtilities[`.bg-neon-${key}`] = {
          backgroundColor: value,
          boxShadow: `inset 0 0 10px rgba(255, 255, 255, 0.2), 0 0 10px ${value}`,
        };
      });
      
      // Additional custom utilities
      neonUtilities['.text-cyber'] = {
        fontFamily: theme('fontFamily.cyber'),
        fontWeight: '600',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      };
      
      neonUtilities['.border-cyber'] = {
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(45deg, #00ffff, #8000ff)',
        backgroundClip: 'border-box',
        borderRadius: '0.5rem',
      };
      
      neonUtilities['.glass-effect'] = {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      };
      
      neonUtilities['.hologram'] = {
        background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.1) 50%, transparent 70%)',
        backgroundSize: '200% 200%',
        animation: 'shimmer 3s ease-in-out infinite',
      };
      
      addUtilities(neonUtilities);
    },
  ],
}