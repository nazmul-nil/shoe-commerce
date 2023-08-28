/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 0 8px rgba(0,0,0,0.6)',
        'productCard': '0 0 8px #6c14d0',
        'aboutSmallImg': '0 0 6px rgba(0,0,0,0.6)',
        'aboutLargeImg' : '0 0 8px #6c14d0',
        'aboutTextShad' : '0 0 8px #c72092',
        'aboutButtonShad' : '0 0 8px #c72092',
        'reviewCardShad' : '0 0 10px rgba(0,0,0,0.3)',
        'reviewImgShad': '0 0 10px rgba(0,0,0,0.5)',
        'loginShad': '0 0 5px rgba(0,0,0,0.6)',
        'footerIconShad': '0 0 20px 10px rgba(0,0,0,0.05)'
      },
      backgroundImage: {
        'heroBack': "url('/image/bg1.png')"
      },
      fontFamily: {
        'heroFont': "'Playfair Display', serif",
        'default' : "sans-serif"
      }

    },
  },
  plugins: [],
}