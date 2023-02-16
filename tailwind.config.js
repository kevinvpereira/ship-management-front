// https://tailwindcss.com/docs
// https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l

module.exports = {
  important: true,
  prefix: '',
  content: ['./src/**/*.{html,scss,ts}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'status-success': '#99CC00',
        'status-error': '#AF283F',
        'status-warning': '#FBB315',
        'primary': {
          200: "#90e0ef",
          400: '#00b4d8',
          DEFAULT: '#01497c',
          600: '#012a4a'
        },
        'secondary': {
          200: '#FEF7DC',
          400: "#E6DDC6",         
          DEFAULT: '#C2B8A3',
          600: '#A19882'
        }
      },
      fontSize: {
        xs: ["0.5rem"], // 8px
        sm: ["0.75rem"], // 12px
        md: ["1rem"], // 16px
        lg: ["1.25rem"], // 20px
        xl: ["1.5rem"], // 24px
        xxl: ["2rem"], // 32px
      },
      fontFamily: {
        sans: ["DM Sans", "Work Sans", "Arial", "Open Sans"],
        "merriweather": ["Merriweather", "Roboto"],
      },
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
