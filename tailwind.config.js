module.exports = {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#1eb3e1",
        secondary: "#333",
        footer: "#a8a8aa",
        icon: "#343a40",
        lighterGray: "#dee2e6",
        lightGray: "#6c757d",
        darkGray: "#212529",

        success: "#28a745",
        error: "#dc3545",

        defaultBlue: "#007bff",

        headerStart: "#1eb3e1",
        headerEnd: "#1eb3e1",

        footerBorder: "#1eb3e1",

        buttonPrimary: "#1eb3e1",
        buttonSecondary: "#333",

        links: "#1eb3e1",
      },
      boxShadow: {
        clap: "0 0 10px 0 rgb(0, 255, 0, 0.67)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
