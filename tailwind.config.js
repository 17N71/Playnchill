/*@type {import('tailwindcss').Config} */

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "320px",
				vsm: "620px",
				md: "768px",
				lg: "991px",
				xl: "1024px",
				xlm: "1040px",
				mlm: "1100px",
				"2xl": "1280px",
				big: "1600px",
			},
			colors: {
				darkblue: "#06040F",
				borderColor: "#13101b",
				darkGray: "#100D18",
				mediumGrey: "#171320",
				lightMediumGrey: "#3c364e",
				roseOrange: "#FF3030",
				minecraftRoseOrange: "#FF3D23",
				orange: "#FF4C00",

				minecraftOrange: "#FDA828",
				customYellow: "#FFE817",
				minecraftLime: "#ACE238",
				venom: "#77BE1D",
				minecraftGreen: "#1DBE53",
				sky: "#366EDC",
			},
		},
	},
	plugins: [],
}
