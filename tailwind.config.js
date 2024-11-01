module.exports = {
    content: [
      "./templates/**/*.gohtml",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Source Sans Pro", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake", "emerald", "corporate", "dracula", "winter", "nord"],
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
    plugins: [require("daisyui")],
  };