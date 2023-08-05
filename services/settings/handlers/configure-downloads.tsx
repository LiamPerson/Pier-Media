import FileSystem from '@/libs/server-only/FileSystem'
import PierSettings from '@/libs/server-only/PierSettings'
import { PrismaClient } from '@prisma/client'
import Ajv from 'ajv'
import { NextApiHandler } from 'next'

/**
 * Configuring downloads for Pier must have all elements of the configuration file presumed to
 * be empty, missing, and or with the incorrect value and MUST be validated.
 *
 * The file must also be assumed to be missing or corrupt.
 */

export type DownloadsSettings = {
	video_directory?: string
	audio_directory?: string
}

const settingsSchema = {
	type: 'object',
	properties: {
		video_directory: {
			type: 'string',
			format: 'filepath',
		},
		audio_directory: {
			type: 'string',
			format: 'filepath',
		},
	},
	additionalProperties: true,
}

const handler: NextApiHandler = async (req, res) => {
	const incomingSettingsObject = JSON.parse(req.body) as unknown
	const validator = new Ajv()
	validator.addFormat('filepath', FileSystem.isAccessible)
	const validate = validator.compile(settingsSchema)
	if (!validate(incomingSettingsObject)) {
		res.status(400).json({ errors: validate.errors })
		return
	}

	const validatedSettings = incomingSettingsObject as DownloadsSettings

	const prisma = new PrismaClient()
	const settings = await PierSettings.getSettings(prisma)

	await prisma.downloadSettings.update({
		where: {
			id: settings.downloadSettingsId,
		},
		data: {
			audioPath: validatedSettings.audio_directory,
			videoPath: validatedSettings.video_directory,
		},
	})

	res.status(200).json({ youGave: incomingSettingsObject })
}

export default handler
