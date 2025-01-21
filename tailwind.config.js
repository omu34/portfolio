module.exports = {
  content: [
    './**/*.html',
    './src/**/*.css',
    './js/**/*.js',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1536px'
    },
    extend: {
      fontFamily: {
        'bellmt': ['Bell MT', 'serif'],
        'bellmt-italic': ['Bell MT Italic', 'serif'],
        'bellmt-bold': ['Bell MT Bold', 'serif']
      },
    },
    animation: {
      typewriter: 'typewriter 2s steps(11) forwards',
      caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
    },
    keyframes: {
      typewriter: {
        to: {
          left: '100%',
        },
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
    },
  
  },
  plugins: [],
};




