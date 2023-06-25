import HomeSliderComponent from "@/components/HomeComponents/HomeSliderComponent"
import Packs from "@/components/HomeComponents/Packs"
import Top4 from "@/components/HomeComponents/Top4"
import { IHomeProps } from "@/modules/IHome"
import { createContext } from "react"
import styles from "./home.module.scss"
import HomeTabs from "./../../HomeComponents/HomeTabs"
import PromotionsAndDiscounts from "@/components/HomeComponents/PromotionsAndDiscounts"
export const HomeDataContext = createContext({})

const Home = ({ top4Data, last12Games }: IHomeProps) => {
	return (
		<div className={styles.home}>
			<HomeSliderComponent />
			<div className={"layout"}>
				<HomeDataContext.Provider value={{ top4Data, last12Games }}>
					<Top4 />
					<Packs />
					<HomeTabs />
					<PromotionsAndDiscounts />
				</HomeDataContext.Provider>
			</div>
		</div>
	)
}

export default Home
