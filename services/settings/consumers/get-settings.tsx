import axios from 'axios'
import { GET_SETTINGS_ENDPOINT } from '../endpoints'
import { GetSettingsResponse } from '../handlers/get-settings'

const getSettings = async () => {
	return axios.get<GetSettingsResponse>(GET_SETTINGS_ENDPOINT)
}
export default getSettings
