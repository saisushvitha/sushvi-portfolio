/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#f2fafe",
            100: "#d9f2fb",
            500: "#0fc3d6",     // teal buttons/accents (Hire Me / tags)
            600: "#0aa9bb",
            800: "#0a7f8d",
          },
          ink: {
            900: "#14233c",     // deep navy headings
            700: "#253b56",
            500: "#445b78",
          },
        },
        fontFamily: {
            display: ["Inter", "ui-sans-serif"],
            body: ["Inter", "ui-sans-serif"],
        },
        boxShadow: {
          card: "0 10px 25px rgba(20,35,60,.08)",
        },
        borderRadius: {
          xl2: "1rem",
        },
      },
    },
    plugins: [],
  };
  