import 'server-only'
import { InputMaybe, Resolvers } from '@/gql/codegen/resolvers-types'
import Downloader, { DownloadType } from '@/libs/server-only/Downloader'
import PierSettings from '@/libs/server-only/PierSettings'
import System from '@/libs/server-only/System'
import Genre from '@/libs/server-only/collections/Genre'
import prisma from '@/prisma/database'

const checkExistingPathThrowingError = (path?: InputMaybe<string>) => {
	if (path === undefined || path === null) return
	if (!System.isAccessible(path)) {
		throw new Error(`Path '${path}' cannot be set as it is not accessible.`)
	}
}

const resolvers: Resolvers = {
	Query: {
		settings: async () => {
			const rawSettings = await PierSettings.getSettings(prisma)
			return { ...rawSettings, downloads: { ...rawSettings.downloads, updatedAt: rawSettings.downloads.updatedAt.toISOString() } }
		},
		genres: async () => {
			return prisma.genre.findMany()
		},
		tracks: async () => {
			/** @todo - Anyone: Refactor this into the Track collection. */
			/**
			 * @todo - Anyone: The track collection should have a query function that gets all this information inside it.
			 * Finding by 'id' so the database doesn't explode
			 */
			const tracksPromise = prisma.track.findMany()
			const genresPromise = prisma.genre.findMany()
			const authorsPromise = prisma.author.findMany()
			const filesPromise = prisma.file.findMany()
			const thumbnailsPromise = prisma.image.findMany()
			const providersPromise = prisma.provider.findMany()
			const [tracks, genres, authors, files, thumbnails, providers] = await Promise.all([
				tracksPromise,
				genresPromise,
				authorsPromise,
				filesPromise,
				thumbnailsPromise,
				providersPromise,
			])
			return tracks.map((track) => {
				// Optional fields
				const genre = genres.find((genre) => genre.id === track.genreId)

				// Compulsory fields
				const author = authors.find((author) => author.id === track.authorId)
				if (!author) throw new Error(`Could not find author with id '${track.authorId}'`)
				const file = files.find((file) => file.id === track.fileId)
				if (!file) throw new Error(`Could not find the track's file with id '${track.fileId}'`)
				const provider = providers.find((provider) => provider.id === author.providerId)
				if (!provider) throw new Error(`Could not find provider with id '${author.providerId}'`)
				const thumbnail = thumbnails.find((thumbnail) => thumbnail.id === track.thumbnailId)
				if (!thumbnail) throw new Error(`Could not find thumbnail with id '${track.thumbnailId}'`)
				const thumbnailFile = files.find((file) => file.id === thumbnail.fileId)
				if (!thumbnailFile) throw new Error(`Could not find thumbnail's file with id '${thumbnail.fileId}'`)
				return {
					...track,
					genre,
					author: {
						...author,
						provider,
					},
					thumbnail: {
						...thumbnail,
						file: thumbnailFile,
					},
					file,
				}
			})
		},
	},
	Mutation: {
		update_settings: async (_, { input }) => {
			if (!input) throw new Error('No input provided')

			checkExistingPathThrowingError(input?.downloads?.path)
			checkExistingPathThrowingError(input?.downloads?.audioPath)
			checkExistingPathThrowingError(input?.downloads?.imagePath)
			checkExistingPathThrowingError(input?.downloads?.videoPath)
			checkExistingPathThrowingError(input?.downloads?.metadataPath)

			const rawSettings = await PierSettings.setSettings(prisma, input)
			return { ...rawSettings, downloads: { ...rawSettings.downloads, updatedAt: rawSettings.downloads.updatedAt.toISOString() } }
		},
		download_audio: async (_, { input: { url, overrideOnCollision } }) => {
			return await Downloader.download({ url, type: DownloadType.AUDIO, overrideOnCollision })
		},
		initialize_genres: async (_, { input }) => {
			await Genre.tryAddDefaults({ overrideExisting: input?.overrideExisting }, prisma)
			return true
		},
	},
}

export default resolvers
