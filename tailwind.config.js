/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'c1': '#051A91',
        'c2': '#061C93',
        'c3': '#2284F1',
        'c4': '#1F80EB',
      },
    },
  },
  plugins: [],
};
