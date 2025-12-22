import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          blue: "#2563EB",
          lightBlue: "#AEE4FF",
          gray: "#F1F5F9",
          accent: "#D9FF3F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
