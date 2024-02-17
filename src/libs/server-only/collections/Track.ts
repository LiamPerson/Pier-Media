import { PrismaClient } from '@prisma/client'
import Provider from './Provider'
import Image from './Image'
import Author from './Author'
import Genre from './Genre'
import File from './File'

/**
 * The Track (audio file) collection.
 */
namespace Track {
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
	export const upsert = async (track: getProps, prisma: PrismaClient) => {
		const connectGenre = track.genre ? { genre: { connect: { id: track.genre.id } } } : {}
		const trackDetails = await prisma.track.upsert({
			where: {
				sourceId: track.sourceId,
				author: {
					provider: {
						id: track.provider.id,
					},
				},
			},
			update: {
				title: track.title,
				description: track.description,
				bitrate: track.bitrate,
				duration: track.duration,
				originalUrl: track.originalUrl,
				sourceId: track.sourceId,
				contributingArtistsJson: JSON.stringify(track.contributingArtistIds),
				thumbnail: {
					connect: {
						id: track.thumbnail.id,
					},
				},
				author: {
					connect: {
						id: track.author.id,
					},
				},
				file: {
					connect: {
						id: track.file.id,
					},
				},
				...connectGenre,
			},
			create: {
				title: track.title,
				description: track.description,
				sourceId: track.sourceId,
				bitrate: track.bitrate,
				originalUrl: track.originalUrl,
				contributingArtistsJson: JSON.stringify(track.contributingArtistIds),
				duration: track.duration,
				thumbnail: {
					connect: {
						id: track.thumbnail.id,
					},
				},
				author: {
					connect: {
						id: track.author.id,
					},
				},
				file: {
					connect: {
						id: track.file.id,
					},
				},
				...connectGenre,
			},
		})
		return trackDetails
	}
}

export default Track