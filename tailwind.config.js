/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js", "./css/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        'bellmt': ['"Bell MT"', 'serif'], 
        'bellmt-italic': ['"Bell MT Italic"', 'serif'],
        'bellmt-bold': ['"Bell MT Bold"', 'serif'],
      },
    },
  },
  plugins: [],
};


