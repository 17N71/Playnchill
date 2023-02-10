import useStoreIsReady from "@/hooks/useStoreIsReady"
import { useBasketStore, useLikedProductsStore } from "@/store"
import { AiOutlineHeart } from "react-icons/ai"
import { SlBasket } from "react-icons/sl"
import { shallow } from "zustand/shallow"
import styles from "./likedOrToBuyGamesButtons.module.scss"

const LikedOrToBuyGamesButtons = () => {
	const [basket] = useBasketStore((state) => [state.basket], shallow)
	const [likedProducts] = useLikedProductsStore((state) => [state.likedProducts], shallow)
	const [isBasketFill] = useStoreIsReady(basket)
	const [isLikedProductsFill] = useStoreIsReady(likedProducts)
	return (
		<>
			<button
				type='button'
				className={`${styles.basket} ${isLikedProductsFill ? styles.fill : ""}`}
			>
				{isLikedProductsFill && <span className={styles.games}>{likedProducts.length}</span>}
				<AiOutlineHeart size={26} title='Понравившиеся игры' />
			</button>
			<button type='button' className={`${styles.basket} ${isBasketFill ? styles.fill : ""}`}>
				{isBasketFill && <span className={styles.games}>{basket.length}</span>}
				<SlBasket size={26} title='Корзина игр' />
			</button>
		</>
	)
}

export default LikedOrToBuyGamesButtons
