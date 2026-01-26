/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Slate-900 (Professional Dark Blue/Black)
                secondary: "#0284c7", // Sky-600 (Bright Accent)
                accent: "#6366f1", // Indigo-500
                light: "#f8fafc", // Slate-50
                dark: "#1e293b", // Slate-800
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
