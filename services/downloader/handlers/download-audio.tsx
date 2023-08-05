import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
	const downloadUrl = JSON.parse(req.body) as string
	console.log('Download url', downloadUrl)
	// Get pure video id
	res.status(200).json({ downloadUrl })
}

export default handler
