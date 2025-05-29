import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff', // Light mode primary
          dark: '#0056b3',    // Dark mode primary
          foreground: '#ffffff', // Text on primary
        },
        secondary: {
          DEFAULT: '#6c757d', // Light mode secondary
          dark: '#495057',    // Dark mode secondary
          foreground: '#ffffff', // Text on secondary
        },
        accent: {
          DEFAULT: '#17a2b8', // Light mode accent
          dark: '#117a8b',    // Dark mode accent
          foreground: '#ffffff', // Text on accent
        },
        neutral: {
          DEFAULT: '#f8f9fa', // Light mode neutral
          dark: '#343a40',    // Dark mode neutral
          foreground: '#212529', // Text on light neutral
          darkForeground: '#f8f9fa', // Text on dark neutral
        },
        success: {
          DEFAULT: '#28a745',
          dark: '#1e7e34',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#ffc107',
          dark: '#d39e00',
          foreground: '#212529',
        },
        error: {
          DEFAULT: '#dc3545',
          dark: '#c82333',
          foreground: '#ffffff',
        },
        background: {
          light: '#ffffff',
          dark: '#121212', // Common dark background
        },
        foreground: {
          light: '#212529', // Default text for light mode
          dark: '#e0e0e0',   // Default text for dark mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // Add other font families if needed, e.g., serif, mono
      },
      borderRadius: {
        'sm': '0.25rem',  // 4px
        'md': '0.5rem',   // 8px
        'lg': '0.75rem',  // 12px
        'xl': '1rem',     // 16px
        '2xl': '1.5rem',  // 24px
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      // Example for backgroundImage if you still want them along with new colors
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
