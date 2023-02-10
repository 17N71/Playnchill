import { useState } from "react"
const useBoolean = (initialState: boolean = false) => {
	const [state, setState] = useState<boolean>(initialState)
	const toggleState = () => {
		setState(!state)
	}
	const falsyState = () => setState(false)
	const truthyState = () => setState(true)

	return [state, toggleState, truthyState, falsyState, setState] as const
}
export default useBoolean
