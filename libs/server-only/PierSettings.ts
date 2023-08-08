import { PrismaClient } from '@prisma/client'
import path from 'path'
import { deepmergeInto } from 'deepmerge-ts'
import { InputMaybe, SettingsInput } from '@/gql/codegen/graphql'

class PierSettings {
	/**
	 * Validates & creates (if needed) the settings table.
	 */
	static async getSettings(prisma: PrismaClient) {
		let downloadSettings = await prisma.downloadSettings.findFirst()
		if (!downloadSettings) {
			const basePath = path.resolve('./downloads')
			downloadSettings = await prisma.downloadSettings.create({
				data: {
					id: 1,
					path: basePath,
					audioPath: path.join(basePath, '/audio'),
					imagePath: path.join(basePath, '/image'),
					videoPath: path.join(basePath, '/video'),
				},
			})
		}

		let settings = await prisma.settings.findFirst()
		if (!settings) {
			settings = await prisma.settings.create({
				data: {
					id: 1,
					downloadSettingsId: downloadSettings.id,
				},
			})
		}

		return { ...settings, downloads: downloadSettings }
	}
	static async setSettings(prisma: PrismaClient, newSettings: InputMaybe<SettingsInput>) {
		const settings = await PierSettings.getSettings(prisma)
		deepmergeInto(settings, newSettings)
		await prisma.settings.update({
			where: {
				id: settings.id,
			},
			data: {
				downloads: {
					update: {
						path: settings.downloads.path,
						audioPath: settings.downloads.audioPath,
						imagePath: settings.downloads.imagePath,
						videoPath: settings.downloads.videoPath,
					},
				},
			},
		})
		return await PierSettings.getSettings(prisma)
	}
}

export default PierSettings
