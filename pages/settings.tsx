import DashboardPage from '@/components/core/DashboardPage'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import configureDownloads from '@/services/settings/consumers/configure-downloads'
import { useMutation } from '@tanstack/react-query'
import { getErrorDetails } from '@/libs/ReactQuery'

const IndexPage = () => {
	const [audioErrors, setAudioErrors] = useState<string[]>([])
	const { isLoading, error, isError, mutate, isSuccess, isIdle } = useMutation({ mutationFn: configureDownloads })
	const updateAudioLocation = async (e: React.FocusEvent<HTMLInputElement>) => {
		const newAudioLocation = e.target.value
		const newAudioErrors = []
		if (!newAudioLocation) {
			newAudioErrors.push('Audio location cannot be empty')
		}
		setAudioErrors(newAudioErrors)
		if (!newAudioErrors.length) {
			mutate({ audio_directory: newAudioLocation })
		}
	}

	return (
		<DashboardPage>
			<Typography variant='h1'>Settings</Typography>
			<TextField
				error={!!audioErrors.length || isError}
				onBlur={updateAudioLocation}
				placeholder='Audio download location'
			/>
			{isLoading && <p>Loading mutation...</p>}
			{isError && <p>Something went wrong! {getErrorDetails(error)}</p>}
			{isSuccess && <p>Mutation complete!</p>}
			{isIdle && <p>Idle?</p>}
		</DashboardPage>
	)
}

export default IndexPage
