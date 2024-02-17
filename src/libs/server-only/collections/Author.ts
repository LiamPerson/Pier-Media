import { PrismaClient } from '@prisma/client'

import Provider from './Provider'

/**
 * The Author collection.
 */
namespace Author {
	interface getProps {
		name: string
		sourceId: string
		provider: Provider.Type
	}

	export const upsert = async (author: getProps, prisma: PrismaClient) => {
		const authorDetails = await prisma.author.upsert({
			where: {
				sourceId: author.sourceId,
				provider: {
					id: author.provider.id,
				},
			},
			update: {
				name: author.name,
				sourceId: author.sourceId,
				provider: {
					connect: {
						id: author.provider.id,
					},
				},
			},
			create: {
				name: author.name,
				sourceId: author.sourceId,
				provider: {
					connect: {
						id: author.provider.id,
					},
				},
			},
		})
		return authorDetails
	}

	export type Type = Awaited<ReturnType<typeof upsert>>
}

export default Author
