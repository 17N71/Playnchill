import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./button.module.scss"
const Button = ({
	children,
	variant = "transparent",
	borderStyles = "light-gray",
	className = "",
	...props
}: IButtonProps) => {
	if (variant === "transparent" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.transparent} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "transparent" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.transparent} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "transparent" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.transparent} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "blue" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.blueText} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "blue" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.blueText} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "blue" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.blueText} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "light-gray" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.lightGrayBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "light-gray" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.lightGrayBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "light-gray" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.lightGrayBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.venomBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.venomBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "venom" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.venomBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "white" && borderStyles === "light-gray") {
		return (
			<button
				className={`${styles.button} ${styles.whiteBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "white" && borderStyles === "none") {
		return (
			<button
				className={`${styles.button} ${styles.whiteBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	if (variant === "white" && borderStyles === "venom") {
		return (
			<button
				className={`${styles.button} ${styles.whiteBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
	return (
		<button
			className={`${styles.button} ${styles.transparent} ${styles.lightGrayBorder} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
	className?: string
	variant?: "transparent" | "venom" | "blue" | "venom-transparent" | "light-gray" | "white"
	borderStyles?: "none" | "venom" | "light-gray"
}
