import LikedOrToBuyGamesButtons from "../LikedOrToBuyGamesButtons"
import styles from "./helpers.module.scss"
const Helpers = () => {
	return (
		<div className={styles.helpers}>
			<span className={styles.free}>Бесплатно</span>
			<LikedOrToBuyGamesButtons />
		</div>
	)
}

export default Helpers
