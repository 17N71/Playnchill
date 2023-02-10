import Image from "next/image"
import styles from "./acc.module.scss"
const Account = () => {
	return (
		<div className={styles.account}>
			<span className={styles.accountName}>Hanzed Rules</span>
			<Image
				className={styles.accountImage}
				src={"/account.jpeg"}
				alt={"Hanzed Rules's account"}
				width={34}
				height={34}
			/>
		</div>
	)
}

export default Account
