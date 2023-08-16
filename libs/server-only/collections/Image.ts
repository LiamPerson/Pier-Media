import { PrismaClient } from '@prisma/client'
import Network from '../Network'
import PierSettings from '../PierSettings'
import imageSize from 'image-size'
import File from './File'
import Debugger from '../Debugger'
import { File as FileModel } from '@prisma/client'

namespace Image {
	interface getProps {
		source: string
		filename: string
	}

	const createImage = (file: FileModel, prisma: PrismaClient) => {
		const imageDimensions = imageSize(file.location)
		if (!imageDimensions.width || !imageDimensions.height) throw new Error(`Could not find valid image dimensions for file '${location}'.`)

		return prisma.image.create({
			data: {
				width: imageDimensions.width,
				height: imageDimensions.height,
				fileId: file.id,
			},
		})
	}

	const updateImage = (file: FileModel, prisma: PrismaClient) => {
		const imageDimensions = imageSize(file.location)
		if (!imageDimensions.width || !imageDimensions.height) throw new Error(`Could not find valid image dimensions for file '${location}'.`)
		return prisma.image.update({
			where: {
				fileId: file.id,
			},
			data: {
				width: imageDimensions.width,
				height: imageDimensions.height,
			},
		})
	}

	export const get = async ({ source, filename }: getProps, prisma: PrismaClient) => {
		return new Promise(async (resolve, reject) => {
			Debugger.log('Trying to create image from source:', source)
			const settings = await PierSettings.getSettings(prisma)
			const output = `${settings.downloads.imagePath}/${filename}`
			const { mediaType, size: byteSize } = await Network.getFile({ url: source, output })
			File.get(
				{
					location: output,
					size: byteSize,
					tags: [],
					mediaType,
					onCreate(file) {
						createImage(file, prisma).then(resolve).catch(reject)
					},
					onUpdate(file) {
						updateImage(file, prisma).then(resolve).catch(reject)
					},
				},
				prisma
			)
		})
	}
}

export default Image
