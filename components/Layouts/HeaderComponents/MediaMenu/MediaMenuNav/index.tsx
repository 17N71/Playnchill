import { HeaderContextProps } from "@/modules/headerContext"
import { useHeaderStore } from "@/store"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { shallow } from "zustand/shallow"
import { HeaderContext } from "../../Header"
import styles from "./mediaNav.module.scss"

const MediaMenuNav = () => {
	const [nav] = useHeaderStore((state) => [state.nav], shallow)
	const { asPath } = useRouter()
	const slug = asPath.slice(1)
	const { closeMenuHandle } = useContext(HeaderContext) as HeaderContextProps
	return (
		<nav className={styles.nav}>
			<strong>Накопительный счет</strong>
			<ul className={styles.ul}>
				{nav.map((item) => (
					<li
						key={item.id}
						className={item.slug === slug ? styles.activeSlug : ""}
						onClick={closeMenuHandle}
					>
						<Link href={item.slug} onClick={closeMenuHandle}>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MediaMenuNav
