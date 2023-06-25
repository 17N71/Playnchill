import { IFavoritesStore } from "@/modules/basketProps"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useFavoriteStore = create<IFavoritesStore>()(
	persist(
		(set, get) => ({
			favorites: [],
			clearFavorites: () => set({ favorites: [] }, false),
			addToFavorites: (newGameId: string) =>
				set({ favorites: [...get().favorites, newGameId] }, false),
			toggleFavorites: (id: string) => {
				if (get().favorites.includes(id)) {
					return set({ favorites: [...get().favorites.filter((fav) => fav !== id)] })
				} else {
					return get().addToFavorites(id)
				}
			},
		}),
		{
			name: "favorites",
		}
	)
)
