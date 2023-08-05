import { PrismaClient } from '@prisma/client'
import path from 'path'

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
					audioPath: basePath + '/audio',
					imagePath: basePath + '/image',
					videoPath: basePath + '/video',
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

		return settings
	}
}

export default PierSettings
