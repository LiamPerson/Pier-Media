import { PrismaClient } from '@prisma/client'

namespace Genre {
	interface getProps {
		name: string
		description: string
	}
	export const get = async (genre: getProps, prisma: PrismaClient) => {
		const genreDetails = await prisma.genre.upsert({
			where: {
				name: genre.name,
			},
			update: {
				description: genre.description,
			},
			create: {
				name: genre.name,
				description: genre.description,
			},
		})
		return genreDetails
	}
	interface tryAddDefaultsProps {
		overrideExisting: boolean
	}
	export const tryAddDefaults = async ({ overrideExisting }: tryAddDefaultsProps, prisma: PrismaClient) => {
		/** @todo - Liam: Import audio_genres.json and recursively try add them to the tracks. Override existing should prevent overriding collisions on the name */
	}
}

export default Genre
