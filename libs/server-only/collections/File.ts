import { PrismaClient } from '@prisma/client'
import { lookup } from 'mime-types'
import { PathLike } from 'node:fs'

namespace File {
	interface getProps {
		location: string // Where the file has been saved
		size: number // The size of the file in bytes
		tags: string[] // Tags for the file
	}

	export const get = async (file: getProps, prisma: PrismaClient) => {
		const mediaType = lookup(file.location)
		if (!mediaType) throw new Error(`Error in File collection: Could not find media type for file '${file.location}'`)
		const upsertedFileDetails = await prisma.file.upsert({
			where: {
				location: file.location,
			},
			update: {
				size: file.size,
				mediaType,
			},
			create: {
				location: file.location,
				size: file.size,
				mediaType,
				tagsJson: JSON.stringify(file.tags),
			},
		})
		let existingTags = JSON.parse(upsertedFileDetails.tagsJson)
		if (!existingTags || !Array.isArray(existingTags)) existingTags = []
		// Fix up tags
		const updatedFileDetails = await prisma.file.update({
			where: {
				id: upsertedFileDetails.id,
			},
			data: {
				tagsJson: JSON.stringify(new Set([...existingTags, ...file.tags])),
			},
		})
		return updatedFileDetails
	}
}

export default File
