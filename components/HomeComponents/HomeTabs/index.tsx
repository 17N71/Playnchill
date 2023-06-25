import type { FC } from "react"
import TabHeader from "./TabHeader"
import TabBody from "./TabBody"

const HomeTabs: FC = () => {
	return (
		<section>
			<TabHeader />
			<TabBody />
		</section>
	)
}

export default HomeTabs
