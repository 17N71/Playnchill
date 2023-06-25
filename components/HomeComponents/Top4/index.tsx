import styles from "./top4.module.scss"
import Image from "next/image"
import { useContext } from "react"
import { IHomeProps } from "@/modules/IHome"
import GameCard from "@/components/ui/GameCard"
import { HomeDataContext } from "@/components/Screens/Home"
const Top4 = () => {
	const {
		top4Data: { allGameCard },
	} = useContext(HomeDataContext) as IHomeProps
	return (
		<section className={styles.top4}>
			<h2 className={styles.top4Title}>
				Топ 4
				<Image
					src={"/Home/icons/lightning.svg"}
					alt={"Lightning top4"}
					title={"Lightning top4"}
					width={17}
					height={22}
				/>
			</h2>
			<div className={styles.cards}>
				{allGameCard.length > 0 &&
					allGameCard.map((game) => <GameCard isTop={true} key={game._id} game={game} />)}
			</div>
		</section>
	)
}

export default Top4
