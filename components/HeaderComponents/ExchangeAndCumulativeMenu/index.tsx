import { AnimatePresence, motion } from "framer-motion"
import styles from "./exancum.module.scss"
interface IExchangeAndCumulativeMenuProps {
	open: boolean
}
const ExchangeAndCumulativeMenu = ({ open = true }: IExchangeAndCumulativeMenuProps) => {
	return (
		<AnimatePresence initial={false}>
			{open && (
				<motion.div
					key={`ExchangeAndCumulativeMenu-${Math.random()}`}
					onClick={(e) => e.stopPropagation()}
					initial={{
						y: -15,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					exit={{
						y: -15,
						opacity: 0,
					}}
					transition={{
						duration: 0.2,
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
		</AnimatePresence>
	)
}

export default ExchangeAndCumulativeMenu
