import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blsky': "url('/image/blsky.png')",
        'home': "url('/image/home.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var()',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#169216",
          "secondary": "#086315",
          "accent": "#00c9b7",
          "neutral": "#060606",
          "base-100": "#24262a",
          "info": "#00a9d3",
          "success": "#00fbc8",
          "warning": "#ff9100",
          "error": "#ff006e",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
