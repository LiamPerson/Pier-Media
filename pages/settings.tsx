import DashboardPage from '@/components/core/DashboardPage'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import configureDownloads from '@/services/settings/consumers/configure-downloads'
import { getErrorDetails } from '@/libs/ReactQuery'
import { GetSettingsDocument } from '@/gql/codegen/graphql'
import { useQuery } from '@apollo/client'
import { useMutation } from '@tanstack/react-query'

const IndexPage = () => {
	const [audioErrors, setAudioErrors] = useState<string[]>([])
	const mutation = useMutation({ mutationFn: configureDownloads })
	const updateAudioLocation = async (e: React.FocusEvent<HTMLInputElement>) => {
		const newAudioLocation = e.target.value
		const newAudioErrors = []
		if (!newAudioLocation) {
			newAudioErrors.push('Audio location cannot be empty')
		}
		setAudioErrors(newAudioErrors)
		if (!newAudioErrors.length) {
			mutation.mutate({ audio_directory: newAudioLocation })
		}
	}

	const newQuery = useQuery(GetSettingsDocument)
	console.log('New query', newQuery)

	return (
		<DashboardPage>
			<Typography variant='h1'>Settings</Typography>
			<TextField
				error={!!audioErrors.length || mutation.isError}
				onBlur={updateAudioLocation}
				placeholder='Audio download location'
			/>
			{mutation.isLoading && <p>Loading mutation...</p>}
			{mutation.isError && <p>Something went wrong! {getErrorDetails(mutation.error)}</p>}
			{mutation.isSuccess && <p>Mutation complete!</p>}
			{mutation.isIdle && <p>Idle?</p>}
		</DashboardPage>
	)
}

export default IndexPage
