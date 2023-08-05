import { DOWNLOAD_AUDIO_ENDPOINT } from '../endpoints'

const downloadAudio = async (downloadUrl: string) => {
	// Get pure video id
	const response = await fetch(DOWNLOAD_AUDIO_ENDPOINT, {
		method: 'POST',
		body: JSON.stringify(downloadUrl),
	})
	console.log('Response from server', response)
	return response
}

export default downloadAudio
