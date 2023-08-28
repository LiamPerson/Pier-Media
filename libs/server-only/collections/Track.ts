import { PrismaClient } from '@prisma/client'
import Provider from './Provider'
import Image from './Image'
import Author from './Author'
import Genre from './Genre'
import File from './File'

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
		genre: Genre.Type
	}
	export const get = async (track: getProps, prisma: PrismaClient) => {
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
				genre: {
					connect: {
						id: track.genre.id,
					},
				},
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
			},
			create: {
				title: track.title,
				description: track.description,
				sourceId: track.sourceId,
				bitrate: track.bitrate,
				originalUrl: track.originalUrl,
				contributingArtistsJson: JSON.stringify(track.contributingArtistIds),
				duration: track.duration,
				genre: {
					connect: {
						id: track.genre.id,
					},
				},
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
			},
		})
		return trackDetails
	}
}

export default Track
