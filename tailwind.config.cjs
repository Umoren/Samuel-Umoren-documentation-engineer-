/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: '#334155',
                        a: {
                            color: '#0969da',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        'h1, h2, h3': {
                            letterSpacing: '-0.025em',
                        },
                        code: {
                            backgroundColor: '#f1f5f9',
                            padding: '0.125rem 0.25rem',
                            borderRadius: '0.25rem',
                            fontWeight: '400',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
                dark: {
                    css: {
                        color: '#e2e8f0',
                        a: {
                            color: '#3b82f6',
                            '&:hover': {
                                color: '#60a5fa',
                            },
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            color: '#f8fafc',
                        },
                        code: {
                            backgroundColor: '#1e293b',
                        },
                        blockquote: {
                            color: '#cbd5e1',
                            borderLeftColor: '#475569',
                        },
                        hr: {
                            borderColor: '#334155',
                        },
                        strong: {
                            color: '#f1f5f9',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}