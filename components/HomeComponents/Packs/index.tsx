import styles from "./packs.module.scss"
import usePacksIsHas from "./usePackIsHas"
import "@splidejs/react-splide/css"
import Button from "@/components/ui/Button"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import Image from "next/image"
import PacksCard from "./PacksCard"
const Packs = () => {
	const minecraftId = "81047560-2fef-4604-89b5-92a8bbe814e6"

	return (
		<Splide
			options={{
				perPage: 1,
				height: 360,
				mediaQuery: "min",
				pagination: false,
				gap: "1rem",
				breakpoints: {
					1600: {
						perPage: 2,
					},
				},
			}}
			className={`${styles.packs} packs`}
		>
			<SplideSlide>
				<PacksCard
					src={"/Home/Pack/minecraft.png"}
					minecraftId={minecraftId}
					additionalClassName={styles.left}
					name={"Играй уже сейчас в Minecraft"}
					color={styles.minecraftLime}
				/>
			</SplideSlide>
			<SplideSlide>
				<PacksCard
					src={"/Home/Pack/minecraft2.png"}
					minecraftId={minecraftId}
					additionalClassName={styles.right}
					name={"Играй уже сейчас в Minecraft dangerous"}
					color={styles.minecraftOrange}
				/>
			</SplideSlide>
		</Splide>
	)
}

export default Packs
