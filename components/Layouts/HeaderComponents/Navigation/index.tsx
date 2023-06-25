import { useHeaderStore } from "@/store"
import Link from "next/link"
import { useRouter } from "next/router"
import { shallow } from "zustand/shallow"
import styles from "./nav.module.scss"
const Navigation = () => {
	const [nav] = useHeaderStore((state) => [state.nav], shallow)
	const { asPath } = useRouter()
	const slug = asPath.slice(1)
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				{nav.map((item) => (
					<li key={item.id} className={item.slug === slug ? styles.activeSlug : ""}>
						<Link href={item.slug}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
