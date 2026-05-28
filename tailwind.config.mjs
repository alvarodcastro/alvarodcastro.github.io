/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1E3A8A',
          hover: '#1e40af',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '64rem',   // max-w-5xl equivalent
        prose: '48rem',     // max-w-3xl equivalent
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '48rem',
            color: '#111827',
            a: {
              color: '#1E3A8A',
              '&:hover': { color: '#1e40af' },
            },
            'h1,h2,h3,h4': {
              fontFamily: 'Charter, Georgia, serif',
              color: '#111827',
            },
            code: {
              backgroundColor: '#F3F4F6',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
