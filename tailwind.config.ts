import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Open Sans Variable', 'serif'],
      'serif': ['Playfair Display Variable', 'sans-serif'],
      },
      colors: {
        "dark-grey": "#444",
        "light-grey": "#f7f7f7",
        "theme-red": "#cf4646",
        "linkedin-blue": "#287bbc",
        "twitter-blue": "#4099ff",
        "github-orange": "#f1ad72",
        "skills-grey": "#eee",
        "projects-orange": "#9c4002",
        "contact-blue": "#074e68",
        "text-grey": "#313131"
      },
    },
  },
  plugins: [],
} satisfies Config;

