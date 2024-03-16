import { PrismaClient } from '@prisma/client'

import Author from './Author'
import File from './File'
import Genre from './Genre'
import Image from './Image'
import Provider from './Provider'

/**
 * The audio collection.
 */
namespace Audio {
	interface getProps {
		title: string
		description: string
		bitrate: number
		duration: number
		sourceId: string
		file: File.Type
		author: Author.Type
		provider: Provider.Type
		thumbnail: Image.Type
		originalUrl: string
		contributingArtistIds: string[]
		genre?: Genre.Type
	}
	export const upsert = async (audio: getProps, prisma: PrismaClient) => {
		const connectGenre = audio.genre ? { genre: { connect: { id: audio.genre.id } } } : {}
		const audioDetails = await prisma.audio.upsert({
			where: {
				sourceId: audio.sourceId,
				author: {
					provider: {
						id: audio.provider.id,
					},
				},
			},
			update: {
				title: audio.title,
				description: audio.description,
				bitrate: audio.bitrate,
				duration: audio.duration,
				originalUrl: audio.originalUrl,
				sourceId: audio.sourceId,
				contributingArtistsJson: JSON.stringify(audio.contributingArtistIds),
				thumbnail: {
					connect: {
						id: audio.thumbnail.id,
					},
				},
				author: {
					connect: {
						id: audio.author.id,
					},
				},
				file: {
					connect: {
						id: audio.file.id,
					},
				},
				...connectGenre,
			},
			create: {
				title: audio.title,
				description: audio.description,
				sourceId: audio.sourceId,
				bitrate: audio.bitrate,
				originalUrl: audio.originalUrl,
				contributingArtistsJson: JSON.stringify(audio.contributingArtistIds),
				duration: audio.duration,
				thumbnail: {
					connect: {
						id: audio.thumbnail.id,
					},
				},
				author: {
					connect: {
						id: audio.author.id,
					},
				},
				file: {
					connect: {
						id: audio.file.id,
					},
				},
				...connectGenre,
			},
		})
		return audioDetails
	}
}

export default Audio
