import DashboardPage from '@/components/core/DashboardPage'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import configureDownloads from '@/services/settings/consumers/configure-downloads'

const IndexPage = () => {
	const [audioErrors, setAudioErrors] = useState<string[]>([])
	const updateAudioLocation = (e: React.FocusEvent<HTMLInputElement>) => {
		const newAudioLocation = e.target.value
		const newAudioErrors = []
		if (!newAudioLocation) {
			newAudioErrors.push('Audio location cannot be empty')
		}
		setAudioErrors(newAudioErrors)
		if (!newAudioErrors.length) {
			configureDownloads({ audio_directory: newAudioLocation })
		}
	}

	return (
		<DashboardPage>
			<Typography variant='h1'>Settings</Typography>
			<TextField
				error={!!audioErrors.length}
				onBlur={updateAudioLocation}
				placeholder='Audio download location'
			/>
		</DashboardPage>
	)
}

export default IndexPage
