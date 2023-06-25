import useBoolean from "@/hooks/useBoolean"
import { createContext } from "react"
import { MatchMediaHOC } from "react-match-media"
import NavigationSmall from "../NavigationSmall"
import HeaderBottom from "./../HeaderBottom"
import HeaderTop from "./../headerTop"
import styles from "./header.module.scss"
const MediaHeaderTop = MatchMediaHOC(HeaderTop, "(min-width: 1100px)")
const MediaNavigationSmall = MatchMediaHOC(NavigationSmall, "(max-width: 1100px)")
export const HeaderContext = createContext({})
const Header = () => {
	const [menu, menuHandle, , closeMenuHandle] = useBoolean(false)

	return (
		<header className={`${styles.header} limiter`}>
			<HeaderContext.Provider value={{ closeMenuHandle }}>
				<MediaHeaderTop />
				<MediaNavigationSmall menu={menu} closeMenuHandle={closeMenuHandle} />
				<HeaderBottom menuHandle={menuHandle} />
			</HeaderContext.Provider>
		</header>
	)
}

export default Header
