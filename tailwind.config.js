export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#10B981',
        brandDark: '#047857',
        brandLight: '#6EE7B7',
        gold: '#F59E0B',
        goldDark: '#D97706',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
