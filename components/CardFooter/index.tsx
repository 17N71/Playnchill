import type { FC } from "react"
import styles from "./cardFooter.module.scss"
type Props = {
	gamePrice: number
	saleForGame: number
	nameGame: string
}

const CardFooter: FC<Props> = ({ gamePrice, saleForGame, nameGame }) => {
	return (
		<div>
			<div className={styles.prices}>
				<span>{(gamePrice - (gamePrice / 100) * saleForGame).toFixed()}</span>
				{` `}
				<span>{saleForGame}%</span>
				{` `}
				<span>{gamePrice}</span>
			</div>
			<h3>{nameGame}</h3>
			<div className={styles.dots}>
				<span>Буст</span>
				<span>Origin</span>
			</div>
		</div>
	)
}

export default CardFooter
