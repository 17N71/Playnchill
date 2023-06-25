import Image from "next/image"
import type { FC } from "react"
import styles from "../packs.module.scss"
import Button from "@/components/ui/Button"
import usePacksIsHas from "../usePackIsHas"
interface PacksCardProps {
	minecraftId: string
	src: string
	additionalClassName: string
	color: string
	name: string
}
const PacksCard: FC<PacksCardProps> = ({ minecraftId, src, additionalClassName, name, color }) => {
	let [togglePack, isHas, toggleFav, isFav] = usePacksIsHas(minecraftId)

	return (
		<div className={`${styles.packsPack} ${color}`}>
			<div className={styles.imageContainer}>
				<Image
					src={src}
					className={`${styles.packsPackImage} ${additionalClassName}`}
					width={340}
					height={400}
					alt=''
				/>
			</div>
			<div className={styles.packsPackContent}>
				<h3 className={styles.packsPackName}>{name}</h3>
				<div className={styles.packsPackPrices}>
					<span>4 999 Р</span>
					<span> -25%</span>
					<span>6 999 Р</span>
				</div>
				<div className={styles.packsStoreButtons}>
					<Button
						variant='light-gray'
						className={isHas ? styles.baskHas : ""}
						borderStyles='none'
						onClick={() => togglePack(minecraftId)}
					>
						Купить
					</Button>
					<Button
						variant='transparent'
						className={isFav ? styles.favHas : ""}
						borderStyles='none'
						onClick={() => toggleFav(minecraftId)}
					>
						В избранное
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PacksCard
