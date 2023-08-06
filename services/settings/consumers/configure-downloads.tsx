import axios from 'axios'
import { CONFIGURE_DOWNLOADS_ENDPOINT } from '../endpoints'
import { DownloadsSettings } from '../handlers/configure-downloads'

const configureDownloads = (settings: DownloadsSettings) => {
	return axios.post(CONFIGURE_DOWNLOADS_ENDPOINT, settings)
}

export default configureDownloads
