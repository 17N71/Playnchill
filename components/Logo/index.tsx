import { HeaderContextProps } from "@/modules/headerContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { HeaderContext } from "../HeaderComponents/Header"
import styles from "./logo.module.scss"
const Logo = ({ withText = false, className = "" }: { withText?: boolean; className?: string }) => {
	const { closeMenuHandle } = useContext(HeaderContext) as HeaderContextProps

	switch (withText) {
		case false:
			return (
				<Link href={"/"} className={`${styles.logo} ${className}`} onClick={closeMenuHandle}>
					<Image
						className={styles.logoImage}
						src={"/favicon.png"}
						alt={"Logo playnchill"}
						width={33}
						height={33}
					/>
					Playnchill
				</Link>
			)
		case true:
			return (
				<Link href={"/"} className={`${styles.logo} ${className}`} onClick={closeMenuHandle}>
					<Image
						className={styles.logoImage}
						src={"/favicon.png"}
						alt={"Logo playnchill"}
						width={33}
						height={33}
					/>
				</Link>
			)
		default:
			return (
				<Link href={"/"} className={`${styles.logo} ${className}`} onClick={closeMenuHandle}>
					<Image
						className={styles.logoImage}
						src={"/favicon.png"}
						alt={"Logo playnchill"}
						width={33}
						height={33}
					/>
					Playnchill
				</Link>
			)
	}
}

export default Logo
