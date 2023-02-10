import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

interface BearState {
	bears: number
	increase: (by: number) => void
}

const useBearStore = create<BearState>()(
	devtools(
		immer((set, get) => ({
			bears: 0,
			increase: (by) => set((state) => ({ bears: state.bears + by })),
			getBears: get().bears,
		})),

		{
			name: "bear-storage",
		}
	)
)
