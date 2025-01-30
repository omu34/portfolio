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
        'bellmt': ['Unbounded', 'serif'],
        'bellmt-bold': ['Unbounded', 'bold'],
      },
    
      animation: {
        typewriter: 'typing 2s steps(7, end) forwards, blink 0.8s step-end infinite 2s',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '10ch' }, // Adjust '10ch' based on the number of characters in your text
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
  
    },
  },
  plugins: [],
};




