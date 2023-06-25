import styles from "./headerTop.module.scss"
import Account from "../Account"
import Navigation from "../Navigation"
import { MatchMediaHOC } from "react-match-media"
import ExchangeAndCumulative from "../ExchangeAndCumulative"
const MediaNavBig = MatchMediaHOC(Navigation, "(min-width: 1100px)")
const HeaderTop = () => {
	return (
		<div className={styles.headerTop}>
			<div className={styles.headerSubTop}>
				<ExchangeAndCumulative />
				<MediaNavBig />
			</div>
			<Account />
		</div>
	)
}

export default HeaderTop
