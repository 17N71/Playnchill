import type { IGameCard } from "@/modules/IGameCard"
import { useBasketStore, useFavoriteStore } from "@/store"
import { useEffect, useState } from "react"
import { MatchMediaHOC } from "react-match-media"
import GameCardMediaBig from "../GameCardMediaBig"
import GameCardMediaSmall from "../GameCardMediaSmall"
const MediaGameCardMediaBig = MatchMediaHOC(GameCardMediaBig, "(min-width: 768px)")
const MediaGameCardMediaSmall = MatchMediaHOC(GameCardMediaSmall, "(max-width: 768px)")

const GameCard = ({ game, isTop = false, isHit = false, isNew = false }: IGameCard) => {
	const { _id } = game
	const [isHasBasket, setIsHasBasket] = useState(false)
	const [isHasFav, setIsHasFav] = useState(false)
	const [toggleFavorites, setIsHasFavStore] = useFavoriteStore((state) => [
		state.toggleFavorites,
		state.isHas,
	])
	const [toggleBasket, setIsHasBasketStore] = useBasketStore((state) => [
		state.toggleBasket,
		state.isHas,
	])
	const toggleFav = (e: Event) => {
		e.preventDefault()
		toggleFavorites(_id)
		setIsHasFav(setIsHasFavStore(_id))
	}
	const toggleBas = (e: Event) => {
		e.preventDefault()

		toggleBasket(_id)
		setIsHasBasket(setIsHasBasketStore(_id))
	}
	useEffect(() => {
		setIsHasFav(setIsHasFavStore(_id))
		setIsHasBasket(setIsHasBasketStore(_id))
	}, [setIsHasBasketStore, _id, setIsHasFavStore])

	return (
		<>
			<MediaGameCardMediaBig
				toggleBas={toggleBas}
				toggleFav={toggleFav}
				isHasFav={isHasFav}
				isHasBasket={isHasBasket}
				game={game}
				isTop={isTop}
				isHit={isHit}
				isNew={isNew}
			/>
			<MediaGameCardMediaSmall
				toggleBas={toggleBas}
				toggleFav={toggleFav}
				isHasFav={isHasFav}
				isHasBasket={isHasBasket}
				game={game}
				isTop={isTop}
				isHit={isHit}
				isNew={isNew}
			/>
		</>
	)
}

export default GameCard
