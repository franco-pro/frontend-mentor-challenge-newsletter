import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        "4/10": "40%",
        "6/10": "60%",
      },
      content: {
        img_desktop: "url('/assets/images/illustration-sign-up-desktop.svg')",
      },
      boxShadow: {
        custom: "0 3px 20px hsl(4, 100%, 67%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(4, 100%, 67%)",
        dark_grey: "hsl(234, 29%, 20%)",
        charcoal_grey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        custom_white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
