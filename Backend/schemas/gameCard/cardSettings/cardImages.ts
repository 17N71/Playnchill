import { defineField, defineType } from "sanity"

export default defineType({
	name: "gameImages",
	title: "Game images",
	type: "object",
	fields: [
		defineField({
			title: "Array game images",
			name: "gameImages",
			type: "array",
			of: [{ type: "image" }],
		}),
	],
})
