import { PrismaClient } from '@prisma/client'
import Provider from './Provider'

namespace Author {
	interface getProps {
		name: string
		sourceId: string
		provider: Provider.Type
	}

	export const get = async (author: getProps, prisma: PrismaClient) => {
		const authorDetails = await prisma.author.upsert({
			where: {
				sourceId: author.sourceId,
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

	export type Type = Awaited<ReturnType<typeof get>>
}

export default Author
