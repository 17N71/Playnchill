import { GoChevronUp } from "react-icons/go"
import styles from "./exach.module.scss"
import ExchangeAndCumulativeMenu from "./../ExchangeAndCumulativeMenu"
import useBoolean from "@/hooks/useBoolean"
import { useEffect } from "react"
import type { MouseEvent } from "react"
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
				RU <span className={styles.slash}>/</span>${" "}
				<GoChevronUp color={open ? "#77BE1D" : ""} title={"Меню языка и валюты"} />
			</button>
			<span>Накопительный счет</span>
			{open && <ExchangeAndCumulativeMenu open={open} />}
		</div>
	)
}

export default ExchangeAndCumulative
