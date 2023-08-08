import { Resolvers } from '@/gql/codegen/resolvers-types'
import PierSettings from '@/libs/server-only/PierSettings'
import { PrismaClient } from '@prisma/client'

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
			const prisma = new PrismaClient()
			const rawSettings = await PierSettings.setSettings(prisma, input)
			return { ...rawSettings, downloads: { ...rawSettings.downloads, updatedAt: rawSettings.downloads.updatedAt.toISOString() } }
		},
	},
}

export default resolvers
