import { ILikedProps } from "@/modules/basketProps"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useLikedProductsStore = create<ILikedProps>()(
	persist(
		(set, get) => ({
			likedProducts: [],
			clearBasket: () => set({ likedProducts: [] }, false),
			addToBasket: (newGame: number) =>
				set({ likedProducts: [...get().likedProducts, newGame] }, false),
		}),

		{
			name: "likedProducts",
		}
	)
)
