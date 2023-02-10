import Image from "next/image"
import Link from "next/link"
import styles from "./logo.module.scss"
const Logo = () => {
	return (
		<Link href={"/"} className={styles.logo}>
			<Image src={"/favicon.png"} alt={"Logo playnchill"} width={33} height={33} />
			Playnchill
		</Link>
	)
}

export default Logo
