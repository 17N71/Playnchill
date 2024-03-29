import ApolloConnecter from "@/components/Layouts/ApolloClient"
import Header from "@/components/Layouts/HeaderComponents/Header"
import "@/styles/globals.scss"
import { Inter, Manrope, Montserrat } from "@next/font/google"
import "@splidejs/react-splide/css"
import type { AppProps } from "next/app"
import Head from "next/head"
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
