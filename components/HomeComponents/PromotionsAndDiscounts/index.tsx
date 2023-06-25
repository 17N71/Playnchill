import { FC, useRef } from "react"
import styles from "./promotionsAndDiscounts.module.scss"
import Image from "next/image"
import { useInView } from "framer-motion"

const PromotionsAndDiscounts: FC = () => {
	const ref = useRef<HTMLElement>(null)
	const isInView = useInView(ref, { once: false })
	return (
		<section ref={ref} className={styles.promotionsAndDiscounts}>
			<h2 className={styles.promotionsAndDiscountsTitle}>
				Акции и скидки <span className='text-venom'>%</span>
			</h2>
			<div className={styles.promotionsAndDiscountsCards}>
				<div className={styles.promotionsAndDiscountsCard}>
					<Image
						src={isInView ? "/promotions/card1.jpg" : ""}
						width={620}
						height={320}
						title={"Minecraft"}
						alt={"Minecraft"}
					/>
					<div className={styles.promotionsAndDiscountsPrices}>
						<span>{16_400 - (16_400 * 15) / 100} P</span>
						<span>-15%</span>
						<span>16 400 P</span>
					</div>
					<h3 className={styles.promotionsAndDiscountsName}>Minecraft</h3>
					<div className={styles.promotionsAndDiscountsAccounts}>
						<span>Ключ</span>
						<span>Аккаунт Steam</span>
					</div>
				</div>
				<div className={styles.promotionsAndDiscountsCard}>
					<Image
						src={isInView ? "/promotions/card2.jpg" : ""}
						width={620}
						height={320}
						title={"The witness"}
						alt={"The witness"}
					/>
					<div className={styles.promotionsAndDiscountsPrices}>
						<span>{16_400 - (16_400 * 15) / 100} P</span>
						<span>-15%</span>
						<span>16 400 P</span>
					</div>
					<h3 className={styles.promotionsAndDiscountsName}>The witness</h3>
					<div className={styles.promotionsAndDiscountsAccounts}>
						<span>Ключ</span>
						<span>Аккаунт Steam</span>
					</div>
				</div>
				<div className={styles.promotionsAndDiscountsCard}>
					<Image
						src={isInView ? "/promotions/card3.jpg" : ""}
						width={620}
						height={320}
						title={"Ori the blind forest"}
						alt={"Ori the blind forest"}
					/>
					<div className={styles.promotionsAndDiscountsPrices}>
						<span>{16_400 - (16_400 * 15) / 100} P</span>
						<span>-15%</span>
						<span>16 400 P</span>
					</div>
					<h3 className={styles.promotionsAndDiscountsName}>Ori the blind forest</h3>
					<div className={styles.promotionsAndDiscountsAccounts}>
						<span>Ключ</span>
						<span>Аккаунт Steam</span>
					</div>
				</div>
				<div className={styles.promotionsAndDiscountsCard}>
					<Image
						src={isInView ? "/promotions/card4.jpg" : ""}
						width={620}
						height={320}
						title={"Unravel two"}
						alt={"Unravel two"}
					/>
					<div className={styles.promotionsAndDiscountsPrices}>
						<span>{16_400 - (16_400 * 15) / 100} P</span>
						<span>-15%</span>
						<span>16 400 P</span>
					</div>
					<h3 className={styles.promotionsAndDiscountsName}>Unravel two</h3>
					<div className={styles.promotionsAndDiscountsAccounts}>
						<span>Ключ</span>
						<span>Аккаунт Steam</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PromotionsAndDiscounts
