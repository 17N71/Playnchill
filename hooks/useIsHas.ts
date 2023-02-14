import { useEffect, useState } from "react"

export default function useIsHas(callback: (id: string) => boolean, id: string) {
	const [isHas, setIsHas] = useState<boolean>()
	useEffect(() => {
		setIsHas(callback(id))
	}, [id, isHas, callback])
	return [isHas]
}
