import { useState } from "react"
import type { SetStateAction, FC, Dispatch } from "react"
import { MatchMediaHOC } from "react-match-media"
import TabHeaderSmall from "./TabHeaderSmall"
import TabHeaderBig from "./TabHeaderBig"
const BigTabHeader = MatchMediaHOC(TabHeaderBig, "(min-width: 1040px)")
const SmallTabHeader = MatchMediaHOC(TabHeaderSmall, "(max-width: 1040px)")
const TabHeader: FC = () => {
	const [current, setCurrent] = useState("Новинки")
	return (
		<>
			<BigTabHeader current={current} setCurrent={setCurrent} />
			<SmallTabHeader current={current} setCurrent={setCurrent} />
		</>
	)
}

export default TabHeader

export interface TabHeaderProps {
	current: string
	setCurrent: Dispatch<SetStateAction<string>>
}
export const tabList = [
	{ id: 1, text: "Новинки" },
	{ id: 2, text: "Аккаунты" },
	{ id: 3, text: "Ключи" },
	{ id: 4, text: "Активация" },
	{ id: 5, text: "Прокачка" },
]
