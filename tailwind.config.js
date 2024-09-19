/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["raa.html", "ra.html"],
  theme: {
    extend: {
      fontFamily : {
        'Macondo' : ["Macondo", "cursive"],
        'Sofadi' : ["Sofadi One", "system-ui"],
        'Dancing' : ["Dancing Script", "cursive"],
        'Pirata' : ["Pirata One", 'system-ui'],
        'Fancinate' : ["Fascinate Inline", 'system-ui']
      },
    },
  },
  plugins: [],
}
