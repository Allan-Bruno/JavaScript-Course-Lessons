/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        "[number]px": "[number]px",
      },
    },
  },
  variants: {},
  plugins: [],
};
