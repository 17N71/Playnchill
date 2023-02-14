import { gql } from "@apollo/client"

export const getTop4 = gql`
	query getGames {
		allGameCard(where: { gameGenre: { eq: "top4" } }) {
			_id
			nameGame
			gameGenre
			saleForGame
			gamePrice
			slug {
				current
			}
			gameImage {
				gameImage {
					asset {
						url
					}
				}
			}
		}
	}
`
