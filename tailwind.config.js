/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		// "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				primary: "#fff",
				secondary: "#1C1D24",
				tertiary: "#131419",
				accent: {
					DEFAULT: "#ac6b34",
					hover: "#925a2b",
				},
				paragraph: "#878e99",
			},
		},
	},
	plugins: [],
};
