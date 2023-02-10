import type {
	ReactNode,
	ForwardRefExoticComponent,
	AnchorHTMLAttributes,
	RefAttributes,
} from "react"
import styles from "./clink.module.scss"
import Link from "next/link"
import type { LinkProps } from "next/link"
const CLink: any = ({
	children,
	variant = "transparent",
	borderStyles = "light-gray",
	className = "",
	href = "/",
	...props
}: ICLinkProps): JSX.Element => {
	if (variant === "transparent" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.transparent} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "transparent" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.transparent} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "transparent" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.transparent} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom-transparent" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBgWithTransparent} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "blue" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.blueText} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "blue" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.blueText} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "blue" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.blueText} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "light-gray" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.lightGrayBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "light-gray" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.lightGrayBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "light-gray" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.lightGrayBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "venom" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.venomBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "white" && borderStyles === "light-gray") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.whiteBg} ${styles.lightGrayBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "white" && borderStyles === "none") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.whiteBg} ${styles.noBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	if (variant === "white" && borderStyles === "venom") {
		return (
			<Link
				href={href}
				className={`${styles.button} ${styles.whiteBg} ${styles.venomBorder} ${className}`}
				{...props}
			>
				{children}
			</Link>
		)
	}
	return (
		<Link
			href={href}
			className={`${styles.button} ${styles.transparent} ${styles.lightGrayBorder} ${className}`}
			{...props}
		>
			{children}
		</Link>
	)
}
export default CLink
interface ICLinkProps
	extends ForwardRefExoticComponent<
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
			LinkProps & {
				children?: ReactNode
			} & RefAttributes<HTMLAnchorElement>
	> {
	children: ReactNode
	href: string
	props?: any[]
	className?: string
	variant?: "transparent" | "venom" | "blue" | "venom-transparent" | "light-gray" | "white"
	borderStyles?: "none" | "venom" | "light-gray"
}
