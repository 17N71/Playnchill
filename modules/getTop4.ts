export interface Slug {
	current: string
}
export interface Asset {
	url: string
}

export interface GameImage2 {
	asset: Asset
}
export interface GameImage {
	gameImage: GameImage2
}

export interface AllGameCard {
	_id: string
	nameGame: string
	gameGenre: string
	saleForGame: number
	gamePrice: number
	slug: Slug
	gameImage: GameImage
}

export interface ITop4 {
	allGameCard: AllGameCard[]
}
