/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1E3A8A',
          hover: '#14265B',
        },
        signal: '#DF5B38',
        paper: '#F3F1EB',
        ink: '#172033',
        border: '#D8D6CF',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
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
              '&:hover': { color: '#DF5B38' },
            },
            'h1,h2,h3,h4': {
              fontFamily: 'Newsreader, Georgia, serif',
              color: '#172033',
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
