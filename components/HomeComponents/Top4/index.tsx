import styles from "./top4.module.scss"
import Image from "next/image"
import { useContext } from "react"
import { HomeDataContext } from "@/pages"
import { IHomeProps } from "@/modules/IHome"
import GameCard from "@/components/GameCard"
const Top4 = () => {
	const {
		top4Data: { allGameCard },
	} = useContext(HomeDataContext) as IHomeProps
	return (
		<section className={styles.top4}>
			<h2 className={styles.top4Title}>
				Топ 4{" "}
				<Image
					src={"/Home/icons/lightning.svg"}
					alt={"Lightning top4"}
					title={"Lightning top4"}
					width={17}
					height={22}
				/>
			</h2>

			{allGameCard.length &&
				allGameCard.map((game) => (
					<GameCard isTop={true} isNew={false} isHit={false} key={game._id} game={game} />
				))}
		</section>
	)
}

export default Top4
