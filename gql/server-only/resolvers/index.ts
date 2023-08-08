import { InputMaybe, Resolvers } from '@/gql/codegen/resolvers-types'
import PierSettings from '@/libs/server-only/PierSettings'
import { PrismaClient } from '@prisma/client'
import FileSystem from '@/libs/server-only/FileSystem'

const checkExistingPathThrowingError = (path?: InputMaybe<string>) => {
	if (path === undefined || path === null) return
	if (!FileSystem.isAccessible(path)) {
		throw new Error(`Path '${path}' cannot be set as it is not accessible.`)
	}
}

const resolvers: Resolvers = {
	Query: {
		settings: async () => {
			const prisma = new PrismaClient()
			const rawSettings = await PierSettings.getSettings(prisma)
			return { ...rawSettings, downloads: { ...rawSettings.downloads, updatedAt: rawSettings.downloads.updatedAt.toISOString() } }
		},
	},
	Mutation: {
		update_settings: async (_, { input }) => {
			if (!input) throw new Error('No input provided')

			checkExistingPathThrowingError(input?.downloads?.path)
			checkExistingPathThrowingError(input?.downloads?.audioPath)
			checkExistingPathThrowingError(input?.downloads?.imagePath)
			checkExistingPathThrowingError(input?.downloads?.videoPath)

			const prisma = new PrismaClient()
			const rawSettings = await PierSettings.setSettings(prisma, input)
			return { ...rawSettings, downloads: { ...rawSettings.downloads, updatedAt: rawSettings.downloads.updatedAt.toISOString() } }
		},
	},
}

export default resolvers
