import { useHeaderStore } from "@/store/header"
import Link from "next/link"
import { shallow } from "zustand/shallow"
import styles from "./nav.module.scss"
const Navigation = () => {
	const [nav] = useHeaderStore((state) => [state.nav], shallow)
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				{nav.map((item) => (
					<li key={item.id}>
						<Link href={item.slug}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
