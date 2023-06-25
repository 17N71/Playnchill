import type { FC } from "react"
import { useContext } from "react"
import styles from "./tabBody.module.scss"
import { HomeDataContext } from "@/components/Screens/Home"
import type { IGetGameCard } from "@/modules/getTop4"
import GameCard from "@/components/ui/GameCard"
import CLink from "@/components/ui/CLink"
const TabBody: FC = () => {
	const { last12Games } = useContext<{ last12Games: IGetGameCard }>(HomeDataContext as any)
	return (
		<div className={styles.cards}>
			{last12Games.allGameCard.map((card, index) => (
				<GameCard isNew={index < 2} isHit={index === 1} key={card._id} game={card} />
			))}
			<CLink variant='blue' href={"/catalog"} borderStyles='light-gray'>
				Перейти в каталог
			</CLink>
		</div>
	)
}
export default TabBody
