import "@splidejs/react-splide/css"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Inter, Manrope, Montserrat } from "@next/font/google"
import Header from "../components/HeaderComponents/Header/index"
import Head from "next/head"
import ApolloConnecter from "@/ApolloClient"
const inter = Inter({
	weight: "400",
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
})
const manrope = Manrope({
	weight: ["400", "500", "600", "700", "200", "300", "800"],
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
})
const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
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
			<ApolloConnecter>
				<Component {...pageProps} />
			</ApolloConnecter>
		</>
	)
}
