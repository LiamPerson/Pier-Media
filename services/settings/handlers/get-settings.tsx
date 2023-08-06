import PierSettings from '@/libs/server-only/PierSettings'
import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next'

export type GetSettingsResponse = Awaited<ReturnType<(typeof PierSettings)['getSettings']>>

const handler: NextApiHandler = async (req, res) => {
	const prisma = new PrismaClient()

	const settings = await PierSettings.getSettings(prisma)

	res.status(200).json(settings as GetSettingsResponse)
}

export default handler
