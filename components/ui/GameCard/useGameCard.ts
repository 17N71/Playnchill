import { useBasketStore, useFavoriteStore } from "@/store"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"
export default function useGameCard(_id: string) {
	const [isHasBasket, setIsHasBasket] = useState(false)
	const [isHasFav, setIsHasFav] = useState(false)
	const [favorites, toggleFavorites] = useFavoriteStore(
		(state) => [state.favorites, state.toggleFavorites],
		shallow
	)
	const favoriteIsHas = favorites.find((fav) => fav === _id)
	const [baskets, toggleBasket] = useBasketStore(
		(state) => [state.basket, state.toggleBasket],
		shallow
	)
	const toggleFav = (e: Event) => {
		e.preventDefault()
		toggleFavorites(_id)
	}
	const toggleBas = (e: Event) => {
		e.preventDefault()
		toggleBasket(_id)
	}
	const basketIsHas = baskets.find((basket) => basket === _id)
	useEffect(() => {
		setIsHasFav(Boolean(favoriteIsHas))
	}, [_id, favoriteIsHas, favorites])
	useEffect(() => {
		setIsHasBasket(basketIsHas)
	}, [_id, , basketIsHas, baskets])
	return { toggleBas, toggleFav, isHasBasket, isHasFav }
}
