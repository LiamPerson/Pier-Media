import DashboardPage from '@/components/core/DashboardPage'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { GetSettingsDocument, UpdateSettingsDocument } from '@/gql/codegen/graphql'
import { useMutation, useQuery } from '@apollo/client'

const IndexPage = () => {
	const [audioErrors, setAudioErrors] = useState<string[]>([])
	const [mutate, mutationInfo] = useMutation(UpdateSettingsDocument)
	const updateAudioLocation = async (e: React.FocusEvent<HTMLInputElement>) => {
		const newAudioLocation = e.target.value
		const newAudioErrors = []
		if (!newAudioLocation) {
			newAudioErrors.push('Audio location cannot be empty')
		}
		setAudioErrors(newAudioErrors)
		if (!newAudioErrors.length) {
			mutate({ variables: { input: { downloads: { audioPath: newAudioLocation } } } })
		}
	}

	const newQuery = useQuery(GetSettingsDocument)
	console.log('New query', newQuery)
	console.log('Mutation info', mutationInfo)

	return (
		<DashboardPage>
			<Typography variant='h1'>Settings</Typography>
			<TextField
				error={!!audioErrors.length || !!mutationInfo.error}
				onBlur={updateAudioLocation}
				placeholder='Audio download location'
			/>
			{mutationInfo.loading && <p>Loading mutation...</p>}
			{mutationInfo.error && <p>Something went wrong! {mutationInfo.error.message}</p>}
		</DashboardPage>
	)
}

export default IndexPage
