import styles from "./navSmall.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import MediaMenuSubHeader from "../MediaMenu/MediaMenuSubHeader"
import MediaMenuHeader from "../MediaMenu/MediaMenuHeader"
import MediaMenuNav from "../MediaMenu/MediaMenuNav"
import { useEffect } from "react"
import { FiPercent } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import CLink from "@/components/CLink"
import LikedOrToBuyGamesButtons from "@/components/HeaderComponents/LikedOrToBuyGamesButtons"
const NavigationSmall = ({ menu, closeMenuHandle }: NavigationSmallProps) => {
	useEffect(() => {
		if (menu) {
			window.document.documentElement.style.overflow = "hidden"
		} else {
			window.document.documentElement.style.overflow = "auto"
		}
	}, [menu])
	return (
		<AnimatePresence initial={false}>
			{menu && (
				<motion.div
					key={`mediaMenu-${Math.random()}`}
					initial={{
						y: "95vh",
						opacity: 0.2,
						scale: 0.2,
					}}
					animate={{
						y: 0,
						opacity: 1,
						scale: 1,
					}}
					exit={{ y: "95vh", opacity: 0, scale: 0 }}
					transition={{
						duration: 0.19,
						transitionTimingFunction: "cubic-bezier(0.92,1.42,0.89,1.42)",
					}}
					className={styles.mediaMenu}
				>
					<div className={styles.flexWrapper}>
						<div>
							<MediaMenuHeader closeMenuHandle={closeMenuHandle} />
							<div className={styles.subHeaderMenu}>
								<MediaMenuSubHeader />
								<MediaMenuNav />
							</div>
						</div>
						<div>
							<div className={styles.subHeaderMenu}>
								<CLink className={styles.buttonCatalog}>В каталог</CLink>
							</div>
							<div className={styles.subFooter}>
								<LikedOrToBuyGamesButtons />
								<button type='button' className={styles.subFooterButton}>
									<FiPercent size={24} title='Скидкы' />
								</button>
								<button type='button' className={styles.subFooterButton}>
									<FaRegUser size={24} title='Авторизация' />
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default NavigationSmall

type NavigationSmallProps = {
	menu: boolean
	closeMenuHandle: () => void
}
