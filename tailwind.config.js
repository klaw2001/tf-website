/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tf-primary': '#4f46e5',
        'tf-secondary': '#2563eb',
        'tf-black': '#0f172a',
        'tf-white': '#ffffff',
        'tf-text-main': '#0f172a',
        'tf-text-light': '#475569',
      },
      backgroundImage: {
        'tf-gradient': 'linear-gradient(to right, #2563eb, #4f46e5)',
        'tf-gradient-reverse': 'linear-gradient(to left, #2563eb, #4f46e5)',
      },
    },
  },
  plugins: [],
}

