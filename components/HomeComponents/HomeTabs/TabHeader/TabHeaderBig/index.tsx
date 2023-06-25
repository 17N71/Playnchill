import { motion } from "framer-motion"
import type { FC } from "react"
import type { TabHeaderProps } from "./.."
import { tabList } from "./.."
import styles from "./tabHeader.module.scss"

const TabHeaderBig: FC<TabHeaderProps> = ({ setCurrent, current }) => {
	return (
		<>
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
						{tab.text === current && (
							<motion.span layoutId={`ActiveItem`} className={styles.line} />
						)}
					</li>
				))}
			</ul>
			<hr className={styles.hr} />
		</>
	)
}

export default TabHeaderBig
