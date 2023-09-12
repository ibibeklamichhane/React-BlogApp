/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      inner:
        'inset 3px 3px 3px #cdcdcd, inset -3px -3px 3px #fafafa, 0px 0px 0px #cdcdcd, 0px 0px 0px #fafafa',
      outer:
        'inset 0px 0px 0px #cdcdcd, inset 0px 0px 0px #fafafa, 3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa',
    },
    extend: {
      boxShadow: ['hover'],
            transitionProperty: ['hover'],
            transitionDuration: ['hover'],
            transitionTimingFunction: ['hover'],
    },
  },
  plugins: [],
}

