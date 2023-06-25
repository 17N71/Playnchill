import { IGetGameCard } from "@/modules/getTop4"
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import type { GetStaticProps } from "next"
import { getLast12, getTop4 } from "./queries"

export const getHomeStaticProps =
	(client: ApolloClient<NormalizedCacheObject>): GetStaticProps<{ top4Data: IGetGameCard }> =>
	async () => {
		try {
			const { data: top4Data } = await client.query<IGetGameCard>({ query: getTop4 })
			const { data: last12Games } = await client.query<IGetGameCard>({ query: getLast12 })
			return {
				props: {
					top4Data,
					last12Games,
				},
			}
		} catch (error) {
			console.error(error)
			return {
				notFound: true,
			}
		}
	}
