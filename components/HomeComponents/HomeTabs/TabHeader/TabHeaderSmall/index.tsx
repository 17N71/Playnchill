import type { FC } from "react"
import styles from "./tabHeader.module.scss"
import { tabList } from "./.."
import type { TabHeaderProps } from "./.."
const TabHeaderSmall: FC<TabHeaderProps> = ({ setCurrent, current }) => {
	return (
		<ul role='tablist' className={`${styles.tabHeaderList}`}>
			{tabList.map((tab) => (
				<li
					key={tab.id}
					role='tab'
					onClick={() => setCurrent(tab.text)}
					className={`${styles.tabHeaderItem} ${tab.text === current ? styles.tabActive : ""}`}
					aria-selected={tab.text === "Новинки" ? "true" : "false"}
				>
					{tab.text}
				</li>
			))}
		</ul>
	)
}

export default TabHeaderSmall
