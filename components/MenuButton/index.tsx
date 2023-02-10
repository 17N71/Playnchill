import Image from "next/image"
const MenuButton = ({ isNavigate, handler }: MenuButtonProps) => {
	switch (isNavigate) {
		case false:
			return (
				<button type='button'>
					<Image src={"/menu.svg"} width={22} height={9} alt={"Открыть навигацию"} />
				</button>
			)
		case true:
			return (
				<button type='button' onClick={handler}>
					<Image src={"/menu.svg"} width={22} height={9} alt={"Открыть навигацию"} />
				</button>
			)
		default:
			return (
				<button type='button'>
					<Image src={"/menu.svg"} width={22} height={9} alt={"Открыть навигацию"} />
				</button>
			)
	}
}

export default MenuButton
type MenuButtonProps = {
	isNavigate: boolean
	handler: () => void
}
