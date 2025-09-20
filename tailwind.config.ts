import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#EE2E3B',

        dark: {
          50: '#1a1a1a',
          100: '#171717',
          200: '#141414',
          300: '#111111',
          400: '#0e0e0e',
          500: '#0b0b0b',
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },

        orange: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad6be',
          300: '#f7b894',
          400: '#f39268',
          500: '#ef6c3c',
          600: '#EE2E3B',
          700: '#d71e2a',
          800: '#b71c24',
          900: '#8b1419',
        },

        flame: {
          50: '#fff8f1',
          100: '#ffeee0',
          200: '#ffd9b8',
          300: '#ffbb85',
          400: '#ff9752',
          500: '#ff7420',
          600: '#ff5722',
          700: '#e64a19',
          800: '#bf360c',
          900: '#8b2f00',
        },

        accent: {
          gold: '#ffa726',
          amber: '#ffb74d',
          copper: '#d84315',
          bronze: '#a0522d',
          rust: '#b7472a',
        },

        glow: {
          primary: 'rgba(238, 46, 59, 0.5)',
          orange: 'rgba(255, 116, 32, 0.5)',
          flame: 'rgba(255, 87, 34, 0.5)',
          gold: 'rgba(255, 167, 38, 0.5)',
          amber: 'rgba(255, 183, 77, 0.5)',
        },

        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },

      fontFamily: {
        mono: [
          'Fira Code',
          'JetBrains Mono',
          'Consolas',
          'Monaco',
          'monospace',
        ],
        display: ['Orbitron', 'sans-serif'],
        modern: ['Inter', 'system-ui', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      boxShadow: {
        'glow-primary':
          '0 0 5px #EE2E3B, 0 0 10px #EE2E3B, 0 0 15px #EE2E3B, 0 0 20px #EE2E3B',
        'glow-orange':
          '0 0 5px #ff7420, 0 0 10px #ff7420, 0 0 15px #ff7420, 0 0 20px #ff7420',
        'glow-flame':
          '0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 15px #ff5722, 0 0 20px #ff5722',
        'glow-gold':
          '0 0 5px #ffa726, 0 0 10px #ffa726, 0 0 15px #ffa726, 0 0 20px #ffa726',
        'glow-soft': '0 0 20px rgba(238, 46, 59, 0.3)',
        'glow-medium': '0 0 30px rgba(238, 46, 59, 0.5)',
        'glow-strong': '0 0 40px rgba(238, 46, 59, 0.7)',
        'inner-glow': 'inset 0 0 10px rgba(238, 46, 59, 0.5)',
        ember:
          '0 4px 20px rgba(255, 87, 34, 0.4), 0 0 40px rgba(238, 46, 59, 0.2)',
        fire: '0 0 30px rgba(255, 116, 32, 0.6), 0 0 60px rgba(238, 46, 59, 0.4)',
      },

      backgroundImage: {
        'dark-orange':
          'linear-gradient(135deg, #000000 0%, #0b0b0b 25%, #EE2E3B 100%)',
        'fire-gradient':
          'linear-gradient(45deg, #000000 0%, #ff5722 50%, #EE2E3B 100%)',
        'ember-glow':
          'linear-gradient(90deg, #EE2E3B 0%, #ff7420 25%, #ffa726 50%, #ff5722 75%, #EE2E3B 100%)',
        'dark-flame':
          'linear-gradient(180deg, #000000 0%, #171717 50%, #ff5722 100%)',
        'heat-wave':
          'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(238, 46, 59, 0.1) 100px)',
        'carbon-fiber':
          'repeating-linear-gradient(45deg, #000000 0px, #000000 2px, #0b0b0b 2px, #0b0b0b 4px)',
        molten:
          'radial-gradient(circle, #ff5722 0%, #EE2E3B 50%, #000000 100%)',
      },

      keyframes: {
        'flame-flicker': {
          '0%, 100%': {
            textShadow:
              '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1',
          },
          '50%': {
            textShadow:
              '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor',
            opacity: '0.8',
          },
        },
        'ember-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            boxShadow:
              '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'heat-shimmer': {
          '0%, 100%': { transform: 'translateY(0px) scaleY(1)' },
          '25%': { transform: 'translateY(-2px) scaleY(1.02)' },
          '50%': { transform: 'translateY(0px) scaleY(0.98)' },
          '75%': { transform: 'translateY(2px) scaleY(1.01)' },
        },
        'spark-travel': {
          '0%': { transform: 'translateX(-100%) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) scale(1)', opacity: '0' },
        },
        'molten-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'carbon-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'thermal-pulse': {
          '0%, 100%': { filter: 'hue-rotate(0deg) brightness(1)' },
          '25%': { filter: 'hue-rotate(15deg) brightness(1.1)' },
          '50%': { filter: 'hue-rotate(30deg) brightness(1.2)' },
          '75%': { filter: 'hue-rotate(15deg) brightness(1.1)' },
        },
      },

      animation: {
        'flame-flicker': 'flame-flicker 2s ease-in-out infinite',
        'ember-pulse': 'ember-pulse 3s ease-in-out infinite',
        'heat-shimmer': 'heat-shimmer 4s ease-in-out infinite',
        'spark-travel': 'spark-travel 3s linear infinite',
        'molten-flow': 'molten-flow 6s ease-in-out infinite',
        'carbon-scan': 'carbon-scan 4s linear infinite',
        'thermal-pulse': 'thermal-pulse 5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },

      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        tech: '0 1rem 0 1rem',
        ember: '0.5rem 1rem 0.5rem 1rem',
      },

      backdropBlur: {
        xs: '2px',
      },

      zIndex: {
        '100': '100',
        '1000': '1000',
      },
    },
  },

  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const orangeColors = {
        primary: theme('colors.primary'),
        ...theme('colors.orange'),
        ...theme('colors.flame'),
        ...theme('colors.accent'),
      }

      const orangeUtilities: Record<string, any> = {}

      Object.entries(orangeColors).forEach(([key, value]) => {
        orangeUtilities[`.text-flame-${key}`] = {
          color: value,
          textShadow: `0 0 5px ${value}, 0 0 10px ${value}, 0 0 15px ${value}`,
        }

        orangeUtilities[`.border-flame-${key}`] = {
          borderColor: value,
          boxShadow: `0 0 5px ${value}`,
        }

        orangeUtilities[`.bg-flame-${key}`] = {
          backgroundColor: value,
          boxShadow: `inset 0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px ${value}`,
        }
      })

      orangeUtilities['.text-tech'] = {
        fontFamily: theme('fontFamily.tech'),
        fontWeight: '600',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }

      orangeUtilities['.border-tech'] = {
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(45deg, #EE2E3B, #ff5722)',
        backgroundClip: 'border-box',
        borderRadius: '0.5rem',
      }

      orangeUtilities['.glass-dark'] = {
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(238, 46, 59, 0.2)',
      }

      orangeUtilities['.carbon-texture'] = {
        background:
          'repeating-linear-gradient(45deg, #000000 0px, #000000 2px, #0b0b0b 2px, #0b0b0b 4px)',
        backgroundSize: '4px 4px',
      }

      orangeUtilities['.heat-distortion'] = {
        background:
          'linear-gradient(45deg, transparent 30%, rgba(238, 46, 59, 0.1) 50%, transparent 70%)',
        backgroundSize: '200% 200%',
        animation: 'molten-flow 4s ease-in-out infinite',
      }

      addUtilities(orangeUtilities)
    },
  ],
}

export default config
