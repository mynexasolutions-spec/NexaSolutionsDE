/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
          accent: "var(--primary-accent)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
        },
        brand: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          light: "var(--primary-light)",
          accent: "var(--primary-accent)",
          dark: "var(--dark-navy)",
          orange: "#EA580C",
        },
        dark: {
          DEFAULT: "var(--dark-bg)",
          bg: "var(--dark-bg)",
          surface: "var(--dark-surface)",
          navy: "var(--dark-navy)",
          card: "var(--dark-card)",
        },
        light: {
          DEFAULT: "var(--light-bg)",
          bg: "var(--light-bg)",
          surface: "var(--light-surface)",
          border: "var(--light-border)",
        },
        partner: {
          n8n: "var(--n8n)",
          aws: "var(--aws)",
          "aws-navy": "var(--aws-navy)",
          meta: "var(--meta)",
          make: "var(--make)",
          "make-blue": "var(--make-blue)",
        },
        n8n: "var(--n8n)",
        aws: {
          DEFAULT: "var(--aws)",
          navy: "var(--aws-navy)",
        },
        meta: "var(--meta)",
        make: {
          DEFAULT: "var(--make)",
          blue: "var(--make-blue)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-dm-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};