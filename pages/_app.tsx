import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Inter, Manrope, Montserrat } from "@next/font/google"
import Header from "./../components/Header/index"
import Head from "next/head"
const inter = Inter({
	weight: "400",
	subsets: ["cyrillic", "cyrillic-ext"],
})
const manrope = Manrope({
	weight: ["400", "500", "600"],
	subsets: ["cyrillic", "cyrillic-ext"],
})
const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["cyrillic", "cyrillic-ext"],
})
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html,
				body,
				* {
					font-family: ${manrope.style.fontFamily};
				}
				.inter {
					font-family: ${inter.style.fontFamily} !important;
				}
				.montserrat {
					font-family: ${montserrat.style.fontFamily} !important;
				}
			`}</style>
			<Header />
			<Head>
				<title>Playnchill</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
