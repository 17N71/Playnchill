/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "320px",
				md: "768px",
				lg: "991px",
				xl: "1024px",
				xlm: "1040px",
				mlm: "1100px",
				"2xl": "1280px",
			},
			colors: {
				darkblue: "#06040F",
				darkGray: "#100D18",
				mediumGrey: "#171320",
				lightMediumGrey: "#3c364e",
				venom: "#77BE1D",
				borderColor: "#13101b",
				sky: "#366EDC",
				orange: "#FF4C00",
			},
		},
	},
	plugins: [],
}
