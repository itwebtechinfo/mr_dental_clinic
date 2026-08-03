/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#d32f2f",
        "primary-blue": "#1976d2",
        "primary-dark": "#0d2538",
        "primary-light": "#f0f8ff",
        "accent-gold": "#ffd700",
        "text-dark": "#1a1a1a",
        "text-light": "#666666",
        "grey-50": "#f9fafb",
        "grey-100": "#f3f4f6",
        "grey-200": "#e5e7eb",
        "grey-300": "#d1d5db",
        "grey-400": "#9ca3af",
        "grey-500": "#6b7280",
        "grey-600": "#4b5563",
        "grey-700": "#374151",
        "grey-800": "#1f2937",
        "grey-900": "#111827",
      },
      backgroundImage: {
        "gradient-red-blue": "linear-gradient(135deg, #d32f2f 0%, #1976d2 100%)",
        "gradient-blue-red": "linear-gradient(135deg, #1976d2 0%, #d32f2f 100%)",
        "gradient-grey-light": "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
        "gradient-grey-medium": "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0, 0, 0, 0.08)",
        "custom-lg": "0 10px 30px rgba(0, 0, 0, 0.12)",
        "custom-xl": "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 10s infinite alternate",
        "rotate-slow": "rotate 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          from: {
            textShadow:
              "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(211, 47, 47, 0.3)",
          },
          to: {
            textShadow:
              "0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(211, 47, 47, 0.5), 0 0 40px rgba(25, 118, 210, 0.3)",
          },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
