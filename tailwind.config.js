/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "neutral-40": "#e2e8f0",
        "violet-main-500": "#4f46e5",
        "violet-200": "#f7f8fd",
        "neutral-80": "#5b6776",
        plum: "#b8b6f7",
        "neutral-70": "#79808a",
        "neutral-90": "#344155",
        "neutral-30": "#eff2f6",
        "base-black": "#080325",
        "error-500": "#d1493d",
        "neutral-50": "#cbcfd5",
        "violet-sn-hoverclicked-900": "#191a38",
        "neutral-100": "#121212",
      },
      fontFamily: {
        "text-sm-regular": "Inter",
      },
      borderRadius: {
        "981xl": "1000px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "3xs": "10px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
