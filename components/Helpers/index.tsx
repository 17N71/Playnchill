import styles from "./helpers.module.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { SlBasket } from "react-icons/sl"
import { useBasketStore } from "./../../store/useBasket"
import { shallow } from "zustand/shallow"
import { useState } from "react"
import { useEffect } from "react"
const Helpers = () => {
	const [basket] = useBasketStore((state) => [state.basket], shallow)
	const [isBasketFill, setIsBasketFill] = useState<boolean>(false)
	useEffect(() => {
		if (basket.length) {
			setIsBasketFill(true)
		} else {
			setIsBasketFill(false)
		}
	}, [basket])
	return (
		<div className={styles.helpers}>
			<span className={styles.free}>Бесплатно</span>
			<button type='button'>
				<AiOutlineHeart size={26} title='Понравившиеся игры' />
			</button>
			<button type='button' className={`${styles.basket} ${isBasketFill ? styles.fill : ""}`}>
				{isBasketFill && <span className={styles.games}>{basket.length}</span>}
				<SlBasket size={26} title='Корзина игр' />
			</button>
		</div>
	)
}

export default Helpers
