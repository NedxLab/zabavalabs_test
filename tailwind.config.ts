import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mm: { max: "423px" },
      // => @media (max-width: 575px) { ... }
      mxs: { max: "575px" },
      // => @media (max-width: 575px) { ... }
      xs: "576px",
      // => @media (min-width: 576px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      msm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      msd: "830px",
      mmsd: { max: "829px" },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      mlg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      mxl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
export default config;
