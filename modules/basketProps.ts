export interface IBasketProps {
	basket: any[]
	clearBasket: () => void
	addToBasket: (newGame: string) => void
	toggleBasket: (id: string) => void
}
export interface IFavoritesStore {
	favorites: string[]
	clearFavorites: () => void
	addToFavorites: (newGameId: string) => void
	toggleFavorites: (id: string) => void
}
