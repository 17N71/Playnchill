import useIsHas from "@/hooks/useIsHas"
import { IGameCard } from "@/modules/IGameCard"
import { useBasketStore, useFavoriteStore } from "@/store"
const GameCard = ({ game, isTop = false, isHit = false, isNew = false }: IGameCard) => {
	const { _id, slug, nameGame, gameGenre, gameImage, gamePrice, saleForGame } = game
	const [toggleFavorites] = useFavoriteStore((state) => [state.toggleFavorites])
	const [toggleBasket, isInBasketHas] = useBasketStore((state) => [state.toggleBasket, state.isHas])
	const [isHasBasket] = useIsHas(isInBasketHas, _id)
	return (
		<div>
			{nameGame}
			{JSON.stringify(isHasBasket)}
		</div>
	)
}

export default GameCard
