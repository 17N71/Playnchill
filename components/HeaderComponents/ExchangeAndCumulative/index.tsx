import useBoolean from "@/hooks/useBoolean"
import type { MouseEvent } from "react"
import { useEffect } from "react"
import { GoChevronUp } from "react-icons/go"
import ExchangeAndCumulativeMenu from "../ExchangeAndCumulativeMenu"
import styles from "./exach.module.scss"
const ExchangeAndCumulative = () => {
	const [open, toggleOpen, , close] = useBoolean(false)
	const toggleOpenHandle = (e: MouseEvent<HTMLElement, Event>) => {
		e.stopPropagation()
		toggleOpen()
	}
	useEffect(() => {
		function closeOnKey(e: KeyboardEvent) {
			if (e.key === "Escape" && open) {
				close()
			}
		}
		window.addEventListener("click", close)
		window.addEventListener("keydown", closeOnKey)
		return () => {
			window.removeEventListener("click", close)
			window.removeEventListener("keydown", closeOnKey)
		}
	}, [open, close])
	return (
		<div className={styles.ExchangeAndCumulative}>
			<button type='button' onClick={toggleOpenHandle} className={styles.button}>
				RU <span className={styles.slash}>/</span>$
				<GoChevronUp
					style={{
						transition: "0.18s all 0s",
						transform: `rotate(${open ? "180deg" : "0deg"})`,
					}}
					color={open ? "#77BE1D" : ""}
					title={"Меню языка и валюты"}
				/>
			</button>
			<span>Накопительный счет</span>
			<ExchangeAndCumulativeMenu open={open} />
		</div>
	)
}

export default ExchangeAndCumulative
