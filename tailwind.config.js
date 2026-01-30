/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'journey-blue': '#4F46E5',
        'journey-green': '#10B981',
        'journey-cream': '#FEF3C7',
        'journey-gray': '#6B7280',
      },
      fontFamily: {
        'playful': ['"Fredoka"', 'sans-serif'],
        'body': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}