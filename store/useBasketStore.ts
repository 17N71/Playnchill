import { IBasketProps } from "@/modules/basketProps"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useBasketStore = create<IBasketProps>()(
	persist(
		(set, get) => ({
			basket: [],
			clearBasket: () => set({ basket: [] }, false),
			addToBasket: (newGame: string) => set({ basket: [...get().basket, newGame] }, false),
			toggleBasket: (id: string) => {
				if (get().basket.includes(id)) {
					return set({ basket: [...get().basket.filter((b) => b !== id)] })
				} else {
					return get().addToBasket(id)
				}
			},
			isHas: (id: string): boolean => {
				return get().basket.includes(id)
			},
		}),

		{
			name: "basket",
		}
	)
)
