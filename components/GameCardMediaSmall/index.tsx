import type { IGameCardInner } from "@/modules/IGameCard"
import Image from "next/image"
import Link from "next/link"
import { FiHeart } from "react-icons/fi"
import { SlBasket } from "react-icons/sl"
import styles from "./smallGameCard.module.scss"
const GameCardMediaSmall = ({
	toggleFav,
	toggleBas,
	isHasFav,
	isHasBasket,
	game,
	isTop = false,
	isHit = false,
	isNew = false,
}: IGameCardInner) => {
	return (
		<div className={styles.card}>
			<Image
				src={game.gameImage.gameImage.asset.url}
				alt={game.nameGame}
				title={game.nameGame}
				width={100}
				height={150}
				className={styles.image}
			/>
			<div className={styles.info}>
				<div className={styles.cardPrices}>
					<span>{(game.gamePrice - (game.gamePrice / 100) * game.saleForGame).toFixed()}</span>
					<span>{game.saleForGame}%</span>
					<span>{game.gamePrice}</span>
				</div>
				<h3 className={styles.cardName}>
					<Link href={`games/${game.gameGenre}/${game.slug.current}`}>{game.nameGame}</Link>
				</h3>
				<div className={styles.dots}>
					<span>Ключ</span>
					<span>Аккаунт Steam</span>
				</div>
				{isTop ? (
					<button type={"button"} className={styles.top4}>
						Top    4
					</button>
				) : isHit && isNew && !isTop ? (
					<div className={styles.ISbuttons}>
						<button type='button' className={styles.buttonHit}>
							Хид продаж
						</button>
						<button type='button' className={styles.buttonNew}>
							Новинка
						</button>
					</div>
				) : isNew && !isHit && !isTop ? (
					<button type='button' className={styles.buttonNew}>
						Новинка
					</button>
				) : (
					<div />
				)}
				<div className={styles.storButtons}>
					<button
						type='button'
						className={`${styles.buttonStore} ${isHasBasket ? styles.active : ""}`}
						onClick={toggleBas}
					>
						<SlBasket size={24} title='Добавить в корзину' />
					</button>
					<button
						type='button'
						className={`${styles.buttonStore} ${isHasFav ? styles.active : ""}`}
						onClick={toggleFav}
					>
						<FiHeart size={24} title='Добавить в фовориты' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default GameCardMediaSmall
