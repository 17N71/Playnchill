import { client } from "@/components/Layouts/ApolloClient"
import Home from "@/components/Screens/Home"
import { IHomeProps } from "@/modules/IHome"
import { getHomeStaticProps } from "@/services/getHome.service"
export const getStaticProps = getHomeStaticProps(client)
const HomePage = ({ top4Data, last12Games }: IHomeProps) => {
	return <Home top4Data={top4Data} last12Games={last12Games} />
}
export default HomePage
