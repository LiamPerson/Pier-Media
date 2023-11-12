import { PrismaClient } from '@prisma/client'
import Author from './Author'
import Provider from './Provider'

namespace Video {
	interface getProps {
		provider: Provider.Type
		name: string
		sourceId: string
		author: Author.Type
	}

	export const upsert = async (author: getProps, prisma: PrismaClient) => {
		let authorDetails = await prisma.author.findFirst({
			where: {
				sourceId: author.sourceId,
			},
		})
		if (!authorDetails) {
			authorDetails = await prisma.author.create({
				data: {
					name: author.name,
					sourceId: author.sourceId,
					provider: {
						connect: {
							id: author.provider.id,
						},
					},
				},
			})
		}
		return authorDetails
	}

	export type Type = Awaited<ReturnType<typeof upsert>>
}

export default Video
