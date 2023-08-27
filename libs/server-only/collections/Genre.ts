import { Prisma, PrismaClient } from '@prisma/client'
import DEFAULT_GENRES from '@/data/audio_genres.json'
import { Maybe } from '@/gql/codegen/resolvers-types'
import { InputMaybe } from '@/gql/codegen/graphql'

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
		overrideExisting?: InputMaybe<boolean>
	}
	export const tryAddDefaults = async ({ overrideExisting }: tryAddDefaultsProps, prisma: PrismaClient) => {
		/** @todo - Liam: Import audio_genres.json and recursively try add them to the tracks. Override existing should prevent overriding collisions on the name */
		if (overrideExisting) {
			await prisma.$transaction(
				DEFAULT_GENRES.map((genre) => prisma.genre.upsert({ update: genre, where: { name: genre.name }, create: genre })),
				{ isolationLevel: Prisma.TransactionIsolationLevel.Serializable }
			)
		} else {
			await prisma.$transaction(
				DEFAULT_GENRES.map((genre) => prisma.genre.create({ data: genre })),
				{ isolationLevel: Prisma.TransactionIsolationLevel.Serializable }
			)
		}
	}
}

export default Genre
