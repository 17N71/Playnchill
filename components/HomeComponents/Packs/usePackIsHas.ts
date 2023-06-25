import { useBasketStore, useFavoriteStore } from "@/store"
import { useEffect, useState } from "react"

const usePacksIsHas = (id: string) => {
	const [toggleBasket, basket] = useBasketStore((state) => [state.toggleBasket, state.basket])
	const [toggleFavorites, favorites] = useFavoriteStore((state) => [
		state.toggleFavorites,
		state.favorites,
	])
	const [isHas, setIsHas] = useState<boolean>(false)
	const [isHasFav, setIsHasFav] = useState<boolean>(false)
	const Ih = basket.find((bask) => bask === id)
	const IhF = favorites.find((favorite) => favorite === id)
	useEffect(() => {
		setIsHas(Ih)
	}, [Ih, id, basket])
	useEffect(() => {
		setIsHasFav(Boolean(IhF))
	}, [IhF, favorites, id])
	return [toggleBasket, isHas, toggleFavorites, isHasFav] as const
}
export default usePacksIsHas
