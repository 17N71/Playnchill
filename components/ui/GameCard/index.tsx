import type { IGameCard } from "@/modules/IGameCard"
import { MatchMediaHOC } from "react-match-media"
import GameCardMediaBig from "../../GameCardMediaBig"
import GameCardMediaSmall from "../../GameCardMediaSmall"
import useGameCard from "./useGameCard"
const MediaGameCardMediaBig = MatchMediaHOC(GameCardMediaBig, "(min-width: 768px)")
const MediaGameCardMediaSmall = MatchMediaHOC(GameCardMediaSmall, "(max-width: 768px)")

const GameCard = ({ game, isTop = false, isHit = false, isNew = false }: IGameCard) => {
	const { _id } = game
	const { toggleBas, toggleFav, isHasBasket, isHasFav } = useGameCard(_id)
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
