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
        mono: ["var(--font-dm-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "spin-orbit": "spinOrbit 3s linear infinite",
        "spin-reverse": "spinReverse 4.5s linear infinite",
        "pulse-brand": "pulseBrand 2.2s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "bounce-dot": "bounceDot 1.4s ease-in-out infinite",
      },
      keyframes: {
        spinOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseBrand: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(234, 88, 12, 0.4), 0 10px 25px -5px rgba(15, 23, 42, 0.08)",
          },
          "50%": {
            transform: "scale(1.04)",
            boxShadow: "0 0 25px 6px rgba(234, 88, 12, 0.28), 0 14px 30px -4px rgba(15, 23, 42, 0.12)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceDot: {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.3" },
          "40%": { transform: "translateY(-6px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};