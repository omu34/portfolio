/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js", "./css/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        bellMT: ['"Bell MT"', 'serif'],
      },
    },
  },
  plugins: [],
};


