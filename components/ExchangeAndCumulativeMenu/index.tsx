import { motion } from "framer-motion"
import styles from "./exancum.module.scss"
interface IExchangeAndCumulativeMenuProps {
	open: boolean
}
const ExchangeAndCumulativeMenu = ({ open = true }: IExchangeAndCumulativeMenuProps) => {
	return (
		<>
			{open && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					initial={{
						y: -120,
						opacity: 0,
						scale: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
						scale: 1,
					}}
					exit={{
						y: -120,
						opacity: 0,
						scale: 0,
					}}
					transition={{
						duration: 0.35,
					}}
					className={styles.menu}
				>
					<div className={`${styles.languages} `}>
						<div className={`${styles.languageButton} ${styles.active}`}>Русский (RU)</div>
						<div className={`${styles.languageButton}`}>English (EN)</div>
					</div>
					<div className={styles.exchanges}>
						<div className={`${styles.exchange} ${styles.active}`}>$</div>
						<div className={styles.exchange}>&euro;</div>
						<div className={styles.exchange}>&#x20BD;</div>
					</div>
				</motion.div>
			)}
		</>
	)
}

export default ExchangeAndCumulativeMenu
