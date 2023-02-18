import type { IGameCardInner } from "@/modules/IGameCard"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineHeart } from "react-icons/ai"
import Button from "../Button"
import styles from "../GameCard/gameCard.module.scss"
const GameCardMediaBig = ({
	toggleFav,
	toggleBas,
	isHasFav,
	isHasBasket,
	game,
	isTop = false,
	isHit = false,
	isNew = false,
}: IGameCardInner) => {
	const { slug, nameGame, gameImage, gameGenre, gamePrice, saleForGame } = game
	const style = {
		backgroundImage: `url('${gameImage.gameImage.asset.url}')`,
	}
	return (
		<div>
			<Link href={`games/${gameGenre}/${slug.current}`} className={`${styles.card}`} style={style}>
				<div className={styles.cardHeader}>
					{isTop ? (
						<button type='button' className={styles.cardButtonTop4}>
							Top
							<Image
								src={"/Home/icons/lightning.svg"}
								alt={"Lightning top4"}
								title={"Lightning top4"}
								width={14}
								height={16}
								className={styles.image}
							/>
							4
						</button>
					) : isHit && !isTop && isNew ? (
						<div className={styles.hitAndNewButtons}>
							<button type='button' className={styles.btnHit}>
								Хид продаж
							</button>
							<button type='button' className={styles.btnNew}>
								Новинка
							</button>
						</div>
					) : isNew && !isHit && !isTop ? (
						<button type='button' className={styles.btnNew}>
							Новинка
						</button>
					) : (
						<div />
					)}
					<button
						type='button'
						className={`${styles.cardAddToFav} ${isHasFav ? styles.inFav : ""}`}
						onClick={toggleFav}
					>
						<AiOutlineHeart size={21} title={"Добавить в фаворити"} />
					</button>
				</div>
				<Button
					type='button'
					variant='venom'
					borderStyles='none'
					className={`${styles.addToBask} ${isHasBasket ? styles.addedToBask : ""}`}
					onClick={toggleBas}
				>
					В корзину
				</Button>
			</Link>
			<div className={styles.cardFooter}>
				<div className={styles.cardFooterPrices}>
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
		</div>
	)
}

export default GameCardMediaBig
