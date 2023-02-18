export interface IBasketProps {
	basket: any[]
	clearBasket: () => void
	addToBasket: (newGame: string) => void
	toggleBasket: (id: string) => void
	isHas: (id: string) => boolean
}
export interface IFavoritesStore {
	favorites: string[]
	clearFavorites: () => void
	addToFavorites: (newGameId: string) => void
	toggleFavorites: (id: string) => void
	isHas: (id: string) => boolean
}
