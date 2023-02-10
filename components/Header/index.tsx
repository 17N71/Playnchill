import { MatchMediaHOC } from "react-match-media"
import ExchangeAndCumulative from "../ExchangeAndCumulative"
import Helpers from "../Helpers"
import MenuButton from "../MenuButton"
import SearchField from "../SearchField"
import Account from "./../Account/index"
import Logo from "./../Logo"
import Navigation from "./../Navigation"
import styles from "./header.module.scss"
const MediaMenuButtonBig = MatchMediaHOC(MenuButton, "(min-width: 1100px)")
const MediaMenuButton = MatchMediaHOC(MenuButton, "(max-width: 1100px)")
const MediaNav = MatchMediaHOC(Navigation, "(min-width: 1100px)")
const Header = () => {
	return (
		<header className={`${styles.header} limiter`}>
			<div className={styles.headerTop}>
				<div className={styles.headerSubTop}>
					<ExchangeAndCumulative />
					<MediaNav />
				</div>
				<Account />
			</div>
			<div className={styles.headerBottom}>
				<Logo />
				<MediaMenuButtonBig />
				<MediaMenuButton isNavigate={true} handler={() => 1} />
				<SearchField />
				<Helpers />
			</div>
		</header>
	)
}

export default Header
