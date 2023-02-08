/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			darkblue: "#06040F",
			venom: "##77BE1D",
			sky: "##366EDC",
			orange: "#FF4C00",
		},
		extend: {
			screens: {
				sm: "320px",
				md: "768px",
				lg: "991px",
				xl: "1024px",
				"2xl": "1280px",
			},
		},
	},
	plugins: [],
}
