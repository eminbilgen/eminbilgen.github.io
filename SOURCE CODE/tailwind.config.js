module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smph': { 'raw': '(max-height: 700px)'},
        'tallph': { 'raw': '(min-height: 700px)'},
        'bigph': { 'raw': '(min-height: 760px)' },
        'tablet': { 'raw': '(min-width: 768px)' },
        'laptop': { 'raw': '(min-height: 791px)', 'raw': '(min-width:1024px)' },
      },
      colors: {
        gri: {
          950: '#EEEEEE',
          900: '#1E1E1E',
          850: '#F5F5F5',
          300: '#f2f2f2',
          200: '#CCCCCC',
          150: '#eaeaea',
          100: '#f9f9f9',
        },
      }
    },
  },
  plugins: [],
}