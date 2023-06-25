import Image from "next/image"
import styles from "./menuButton.module.scss"
const MenuButton = ({ isNavigate, handler }: MenuButtonProps) => {
	switch (isNavigate) {
		case false:
			return (
				<button className={styles.menuButton} type='button'>
					<Image
						src={"/menu.svg"}
						className={styles.menuButtonImage}
						width={22}
						height={9}
						alt={"Открыть навигацию"}
					/>
				</button>
			)
		case true:
			return (
				<button className={styles.menuButton} type='button' onClick={handler}>
					<Image
						src={"/menu.svg"}
						className={styles.menuButtonImage}
						width={22}
						height={9}
						alt={"Открыть навигацию"}
					/>
				</button>
			)
		default:
			return (
				<button className={styles.menuButton} type='button'>
					<Image
						src={"/menu.svg"}
						className={styles.menuButtonImage}
						width={22}
						height={9}
						alt={"Открыть навигацию"}
					/>
				</button>
			)
	}
}

export default MenuButton
type MenuButtonProps = {
	isNavigate: boolean
	handler: () => void
}
