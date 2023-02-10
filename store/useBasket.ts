import { IBasketProps } from "@/modules/basketProps"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useBasketStore = create<IBasketProps>()(
	persist(
		(set, get) => ({
			basket: [],
			clearBasket: () => set({ basket: [] }, false),
			addToBasket: (newGame: number) => set({ basket: [...get().basket, newGame] }, false),
		}),

		{
			name: "basket",
		}
	)
)
