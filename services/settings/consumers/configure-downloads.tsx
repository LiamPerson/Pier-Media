import { DownloadsSettings } from '../handlers/configure-downloads'

const configureDownloads = (settings: DownloadsSettings) => {
	return fetch('/api/configure-downloads', {
		method: 'POST',
		body: JSON.stringify(settings),
	})
}

export default configureDownloads
