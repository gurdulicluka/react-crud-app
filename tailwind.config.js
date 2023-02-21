/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      animation: {
        fadeInDown: "fade-in-down 400ms ease 1",
        success: "success 1500ms ease 1",
      },
      keyframes: {
        "fade-in-down": {
          from: {
            opacity: 0,
            transform: "translateY(-2rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        success: {
          from: {
            "background-color": "#93c5fd",
            // blue
          },
          to: {
            "background-color": "white",
          },
        },
      },
      colors: {
        primary: "#222222",
      },
    },
  },
  plugins: [],
};
