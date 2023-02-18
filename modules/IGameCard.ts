import { AllGameCard } from "./getTop4"

export type IGameCard = {
	game: AllGameCard
	isTop?: boolean
	isHit?: boolean
	isNew?: boolean
}
export type IGameCardInner = {
	game: AllGameCard
	isTop?: boolean
	isHit?: boolean
	isNew?: boolean
	isHasFav?: boolean
	isHasBasket?: boolean
	toggleFav?: () => void
	toggleBas?: () => void
}
