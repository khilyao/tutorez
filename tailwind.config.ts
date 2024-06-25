import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "noto-sans": ["NotoSans", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "nav-active": "#DB00FF",
        "hero-primary": "#9E00FF",
      },
      backgroundImage: {
        "linear-main":
          "linear-gradient(180.00deg, rgba(254, 170, 255, 0.4),rgba(254, 183, 255, 0.3) 13.573%,rgba(255, 207, 250, 0.2) 21.823%,rgba(253, 139, 255, 0.05) 37.442%,rgba(255, 250, 205, 0.35) 59.641%,rgba(254, 239, 217, 0.34) 72.793%,rgba(250, 203, 255, 0.3) 74.063%,rgba(247, 157, 255, 0.3) 84.234%,rgba(248, 164, 255, 0.3) 100%);",
        "linear-main-mobile":
          "linear-gradient(180.00deg, rgba(254, 170, 255, 0.6),rgba(254, 183, 255, 0.5) 10.831%,rgba(255, 207, 250, 0.3) 21.931%,rgba(254, 239, 217, 0.2) 27.215%,rgba(254, 239, 217, 0.2) 47.734%,rgba(255, 159, 159, 0.3) 52.271%,rgba(255, 250, 205, 0.4) 69.317%,rgba(255, 250, 205, 0.4) 77.366%,rgba(254, 183, 255, 0.33) 81.695%,rgba(254, 183, 255, 0.3) 100%)",
      },
      dropShadow: {
        "nav-link": "0 0 35px #DB00FF",
        "nav-link-mobile": "0 0 20px #DB00FF",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
