import { INavProps } from "@/modules/header"
import { create } from "zustand"

export const useHeaderStore = create<INavProps>()((_, get) => ({
	nav: [
		{
			id: 1,
			text: "Отзывы",
			slug: "reviews",
		},
		{
			id: 2,
			text: "Гарантии",
			slug: "guarantees",
		},
		{
			id: 3,
			text: "Как купить",
			slug: "how-to-buy",
		},
		{
			id: 4,
			text: "Накопительная",
			slug: "cumulative",
		},
		{
			id: 5,
			text: "Заработай",
			slug: "earn",
		},
	],
}))
