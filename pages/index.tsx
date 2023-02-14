import { client } from "@/ApolloClient"
import HomeSliderComponent from "@/components/HomeComponents/HomeSliderComponent"
import Top4 from "@/components/HomeComponents/Top4"
import { ITop4 } from "@/modules/getTop4"
import { IHomeProps } from "@/modules/IHome"
import { getTop4 } from "@/services/queries"
import styles from "@/styles/home.module.scss"
import type { GetStaticProps } from "next"
import { createContext } from "react"
export const HomeDataContext = createContext({})
const Home = ({ top4Data }: IHomeProps) => {
	return (
		<div className={styles.home}>
			<HomeSliderComponent />
			<div className={"layout"}>
				<HomeDataContext.Provider value={{ top4Data }}>
					<Top4 />
				</HomeDataContext.Provider>
			</div>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: top4Data, error } = await client.query<ITop4>({ query: getTop4 })
		if (error) {
			console.log(error)
		}
		return {
			props: {
				top4Data,
			},
		}
	} catch (error) {
		console.error(error)
		return {
			notFound: true,
		}
	}
}
