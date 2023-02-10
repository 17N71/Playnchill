import Logo from "@/components/Logo"
import SearchField from "../../SearchField"
import styles from "./mediaMenuHeader.module.scss"
import { IoMdClose } from "react-icons/io"
const MediaMenuHeader = ({ closeMenuHandle }: { closeMenuHandle: () => void }) => {
	return (
		<div className={styles.mediaMenuHeader}>
			<Logo withText={true} className={styles.logo} />
			<SearchField className={styles.searchField} />
			<button type='button' className={styles.closeMenu} onClick={closeMenuHandle}>
				<IoMdClose size={26} title={"Закрыть меню"} />
			</button>
		</div>
	)
}

export default MediaMenuHeader
