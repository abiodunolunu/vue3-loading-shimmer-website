/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          emerald: "#42b883",
          night: "#35495e",
          "light-grayish-blue": "#eaecef",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif;"],
      },
    },
  },
  plugins: [],
};
