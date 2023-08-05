import { CONFIGURE_DOWNLOADS_ENDPOINT } from '../endpoints'
import { DownloadsSettings } from '../handlers/configure-downloads'

const configureDownloads = (settings: DownloadsSettings) => {
	return fetch(CONFIGURE_DOWNLOADS_ENDPOINT, {
		method: 'POST',
		body: JSON.stringify(settings),
	})
}

export default configureDownloads
