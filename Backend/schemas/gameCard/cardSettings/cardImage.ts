import { defineField, defineType } from "sanity"

export default defineType({
	name: "gameImage",
	title: "Game image",
	type: "object",
	fields: [
		defineField({
			name: "gameImage",
			title: "Game image",
			type: "image",
			fields: [
				{
					name: "attribution",
					title: "Alternative text",
					type: "string",
				},
			],
		}),
	],
})
