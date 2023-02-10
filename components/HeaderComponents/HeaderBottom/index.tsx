import { MatchMediaHOC } from "react-match-media"
import MenuButton from "../MenuButton"
import SearchField from "../SearchField"
import Helpers from "./../Helpers"
import Logo from "../../Logo"
import styles from "./headerBottom.module.scss"
const MediaMenuButtonBig = MatchMediaHOC(MenuButton, "(min-width: 1100px)")
const MediaMenuButton = MatchMediaHOC(MenuButton, "(max-width: 1100px)")
const MediaSearchField = MatchMediaHOC(SearchField, "(min-width: 1100px)")
const HeaderBottom = ({ menuHandle }: { menuHandle: () => void }) => {
	return (
		<div className={styles.headerBottom}>
			<MediaMenuButton isNavigate={true} handler={menuHandle} />
			<Logo />
			<MediaMenuButtonBig />
			<MediaSearchField />
			<Helpers />
		</div>
	)
}

export default HeaderBottom
