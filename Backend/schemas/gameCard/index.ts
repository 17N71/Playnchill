import { defineField, defineType } from "sanity"
export default defineType({
	name: "gameCard",
	title: "Game card",
	type: "document",
	fields: [
		defineField({
			name: "nameGame",
			title: "Name of game",
			type: "string",
		}),
		defineField({
			name: "gamePrice",
			title: "Price of game",
			type: "number",
		}),
		defineField({
			name: "saleForGame",
			title: "Sale for game by percent",
			type: "number",
		}),

		defineField({
			name: "gameGenre",
			title: "Genre of game",
			type: "string",
		}),
		defineField({
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "nameGame",
				maxLength: 200,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		}),
		defineField({
			name: "gameImage",
			title: "Game Images",
			type: "gameImage",
		}),
		defineField({
			name: "gameImages",
			title: "Array game images",
			type: "gameImages",
		}),
	],
})
