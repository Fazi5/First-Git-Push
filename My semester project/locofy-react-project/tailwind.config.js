/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9fafc",
        white: "#fff",
        aliceblue: {
          "100": "#ebeef3",
          "200": "#e1e8f0",
        },
        black1: "#000",
        gray: {
          "100": "#010101",
          "200": "rgba(38, 38, 38, 0.37)",
          "300": "rgba(38, 38, 38, 0.6)",
          "400": "rgba(38, 38, 38, 0.61)",
        },
        main: "#262626",
        dimgray: "#696868",
        black: "#3e3232",
        silver: "#b8c2ce",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        "sequel-sans": "'Sequel Sans'",
        darkline: "Darkline",
        roboto: "Roboto",
      },
      borderRadius: {
        "10xs": "3px",
        "27xl": "46px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "17xl": "36px",
      "5xl": "24px",
      mini: "15px",
      sm: "14px",
      base: "16px",
      "3xl": "22px",
      xs: "12px",
      "9xl": "28px",
      "3xs": "10px",
      smi: "13px",
      "18xl": "37px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
