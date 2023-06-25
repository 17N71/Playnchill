import { GoChevronUp } from "react-icons/go"
import Account from "../../Account"
import styles from "./mediaMenuSubHeader.module.scss"

const MediaMenuSubHeader = () => {
	return (
		<div className={styles.mediaMenuSubHeader}>
			<div>
				<button type='button'>
					RU <GoChevronUp color='#77BE1D' title='Изменить язык' size={20} />
				</button>
				<button type='button'>
					$ <GoChevronUp color='#77BE1D' title='Изменить курс валюты' size={20} />
				</button>
			</div>
			<Account />
		</div>
	)
}

export default MediaMenuSubHeader
