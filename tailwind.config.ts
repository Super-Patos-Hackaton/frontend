import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        heading: ['var(--font-acme)'],
      },
      colors: {
        brand: {
          '50': '#fdf6ef',
          '100': '#faebda',
          '200': '#f5d3b3',
          '300': '#eeb583',
          '400': '#e68d51',
          '500': '#e06f2f',
          '600': '#da5d28',
          '700': '#ae4320',
          '800': '#8b3621',
          '900': '#702f1e',
          '950': '#3c160e',
        },
        success: {
          50: '#f2faeb',
          100: '#e4f3d4',
          200: '#cae8ae',
          300: '#a8d77f',
          400: '#88c556',
          500: '#6bac39',
          600: '#508729',
          700: '#3f6724',
          800: '#355321',
          900: '#2e4720',
          950: '#16260d',
        },
        placeholder: 'hsl(var(--placeholder))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        tremor: {
          brand: {
            faint: '#eeb583',
            muted: '#eeb583',
            subtle: '#eeb583',
            DEFAULT: '#e06f2f',
            emphasis: '#eeb583',
            inverted: 'var(--background)',
          },
          background: {
            muted: colors.transparent,
            subtle: colors.transparent,
            DEFAULT: colors.transparent,
            emphasis: colors.transparent,
          },
          border: {
            // DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.transparent,
          },
          content: {
            subtle: 'var(--background)',
            DEFAULT: 'var(--background)',
            emphasis: 'var(--background)',
            strong: 'var(--background)',
            inverted: '#fdf6ef',
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#eeb583',
            muted: '#eeb583',
            subtle: '#e06f2f',
            DEFAULT: '#e06f2f',
            emphasis: '#eeb583',
            inverted: '#fdf6ef',
          },
          background: {
            muted: colors.transparent,
            subtle: colors.transparent,
            DEFAULT: colors.transparent,
            emphasis: colors.transparent,
          },
          border: {
            // DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.transparent,
          },
          content: {
            subtle: '#fdf6ef',
            DEFAULT: '#fdf6ef',
            emphasis: '#fdf6ef',
            strong: '#fdf6ef',
            inverted: 'var(--background)',
          },
        },
      },
      backgroundImage: {
        'login-background-image':
          "url('/img/login-background-image-blur.webp')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // boxShadow: {
      //   // light
      //   'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      //   'tremor-card':
      //     '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      //   'tremor-dropdown':
      //     '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      //   // dark
      //   'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      //   'dark-tremor-card':
      //     '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      //   'dark-tremor-dropdown':
      //     '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      // },

      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
    safelist: [
      {
        pattern:
          /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
    ],
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

export default config;
