import { File as FileModel, PrismaClient } from '@prisma/client'
import { lookup } from 'mime-types'
import { PathLike } from 'node:fs'
import Debugger from '../Debugger'

namespace File {
	interface getProps {
		onCreate?: (file: FileModel) => void
		onUpdate?: (file: FileModel) => void
		mediaType: string // The media/mime type of the file
		location: string // Where the file has been saved
		size: number // The size of the file in bytes
		tags: string[] // Tags for the file
	}

	export const get = async (file: getProps, prisma: PrismaClient) => {
		const mediaType = lookup(file.location)
		if (!mediaType) throw new Error(`Error in File collection: Could not find media type for file '${file.location}'`)
		let fileDetails = await prisma.file.findUnique({
			where: {
				location: file.location,
			},
		})
		if (fileDetails) {
			Debugger.log('File.get: File already exists:', fileDetails)
			let existingTags = JSON.parse(fileDetails.tagsJson)
			if (!existingTags || !Array.isArray(existingTags)) existingTags = []
			fileDetails = await prisma.file.update({
				where: {
					id: fileDetails.id,
				},
				data: {
					size: file.size,
					mediaType,
					tagsJson: JSON.stringify(new Set([...existingTags, ...file.tags])),
				},
			})
			file.onUpdate?.(fileDetails)
		} else {
			Debugger.log('File.get: File does not exist, creating:', file)
			fileDetails = await prisma.file.create({
				data: {
					location: file.location,
					size: file.size,
					mediaType,
					tagsJson: JSON.stringify(file.tags),
				},
			})
			file.onCreate?.(fileDetails)
		}

		return fileDetails
	}
}

export default File
