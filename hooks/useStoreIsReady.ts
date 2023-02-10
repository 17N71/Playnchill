import { useEffect, useState } from "react"

const useStoreIsReady = (basket: any[]) => {
	const [isBasketFill, setIsBasketFill] = useState<boolean>(false)
	useEffect(() => {
		if (basket.length) {
			setIsBasketFill(true)
		} else {
			setIsBasketFill(false)
		}
	}, [basket])
	return [isBasketFill] as const
}
export default useStoreIsReady
