/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url('/src/images/reg-form-bg.svg')",
        'footer-texture': "url('/src/images/bgfooter.svg')",
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
}
