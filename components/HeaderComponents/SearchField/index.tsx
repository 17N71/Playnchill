import styles from "./search.module.scss"
import { RiSearch2Line } from "react-icons/ri"
const SearchField = ({ className = "" }: { className?: string }) => {
	return (
		<div className={`${styles.searchField} ${className}`}>
			<input className={styles.input} placeholder={"Поиск"} type={"search"} />
			<button type='submit' className={styles.searchButton}>
				<RiSearch2Line title={"Поиск"} color={"#323232"} size={32} />
			</button>
		</div>
	)
}

export default SearchField
