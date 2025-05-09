import { PrismaClient } from '@prisma/client'
import imageSize from 'image-size'

import Debugger from '../Debugger'
import Network from '../Network'
import PierSettings from '../PierSettings'

import File from './File'

/**
 * The Image collection.
 */
namespace Image {
	interface getProps {
		source: string
		filename: string
		isMetadata?: boolean // Is the image metadata for another file?
	}

	export const upsert = async ({ source, filename, isMetadata }: getProps, prisma: PrismaClient) => {
		Debugger.log('Trying to create image from source:', source)
		const settings = await PierSettings.getSettings(prisma)
		let output = `${settings.downloads.imagePath}/${filename}`
		if (isMetadata) {
			output = `${settings.downloads.metadataPath}/${filename}`
		}
		const { mediaType, size: byteSize } = await Network.getFile({ url: source, output })
		const file = await File.upsert({ location: output, size: byteSize, tags: [] }, prisma)

		const imageDimensions = imageSize(output)
		if (!imageDimensions.width || !imageDimensions.height) throw new Error(`Could not find valid image dimensions for file '${output}'.`)
		Debugger.log('Image.get: Image details:', mediaType, byteSize, imageSize, imageDimensions)
		const imageDetails = await prisma.image.upsert({
			where: {
				fileId: file.id,
			},
			update: {
				width: imageDimensions.width,
				height: imageDimensions.height,
				file: {
					connect: {
						id: file.id,
					},
				},
			},
			create: {
				width: imageDimensions.width,
				height: imageDimensions.height,
				file: {
					connect: {
						id: file.id,
					},
				},
			},
		})
		return { ...imageDetails, file }
	}
	export type Type = Awaited<ReturnType<typeof upsert>>
}

export default Image
