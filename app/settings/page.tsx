'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { GetSettingsDocument, UpdateSettingsDocument } from '@/gql/codegen/graphql'
import { ApolloError, useMutation, useQuery } from '@apollo/client'

interface InputSetProps {
	label: string
	defaultValue: string
	error?: Error | ApolloError
	isLoading: boolean
	placeholder: string
	onValidChangeEnd: (newValue: string) => void
}
const InputSet = ({ label, defaultValue, error, placeholder, onValidChangeEnd, isLoading }: InputSetProps) => {
	const [internalErrors, setInternalErrors] = useState<string[]>([])
	const onChangeEnd = (newValue: string) => {
		const newErrors = evaluateErrors(newValue)
		setInternalErrors(newErrors)
		if (!newErrors.length) {
			onValidChangeEnd(newValue)
		}
	}
	return (
		<Paper sx={{ padding: 2 }}>
			<Typography>{label}</Typography>
			<TextField
				defaultValue={defaultValue}
				error={internalErrors.length > 0 || !!error}
				placeholder={placeholder}
				onBlur={(e) => onChangeEnd(e.target.value)}
				sx={{
					width: '100%',
				}}
				disabled={isLoading}
			/>
			{isLoading && <p>Loading ...</p>}
			{error && <p>Something went wrong! {error.message}</p>}
		</Paper>
	)
}

const evaluateErrors = (newLocation: string) => {
	const newAudioErrors = []
	if (!newLocation) {
		newAudioErrors.push('Audio location cannot be empty')
	}
	return newAudioErrors
}

const IndexPage = () => {
	const [mutate, mutationInfo] = useMutation(UpdateSettingsDocument)
	const { data, loading: isQueryLoading } = useQuery(GetSettingsDocument)

	return (
		<DashboardPage>
			<Typography variant='h1'>Settings</Typography>
			<Stack
				gap={2}
				mt={5}
			>
				<InputSet
					label='Audio download location'
					defaultValue={data?.settings?.downloads?.audioPath || ''}
					error={mutationInfo.error}
					isLoading={mutationInfo.loading || isQueryLoading}
					placeholder='Audio download location'
					onValidChangeEnd={(newLocation) => mutate({ variables: { input: { downloads: { audioPath: newLocation } } } })}
				/>
				<InputSet
					label='Video download location'
					defaultValue={data?.settings?.downloads?.videoPath || ''}
					error={mutationInfo.error}
					isLoading={mutationInfo.loading || isQueryLoading}
					placeholder='Audio download location'
					onValidChangeEnd={(newLocation) => mutate({ variables: { input: { downloads: { videoPath: newLocation } } } })}
				/>
				<InputSet
					label='Image download location'
					defaultValue={data?.settings?.downloads?.imagePath || ''}
					error={mutationInfo.error}
					isLoading={mutationInfo.loading || isQueryLoading}
					placeholder='Audio download location'
					onValidChangeEnd={(newLocation) => mutate({ variables: { input: { downloads: { imagePath: newLocation } } } })}
				/>
				<InputSet
					label='Metadata download location'
					defaultValue={data?.settings?.downloads?.metadataPath || ''}
					error={mutationInfo.error}
					isLoading={mutationInfo.loading || isQueryLoading}
					placeholder='Audio download location'
					onValidChangeEnd={(newLocation) => mutate({ variables: { input: { downloads: { metadataPath: newLocation } } } })}
				/>
			</Stack>
		</DashboardPage>
	)
}

export default IndexPage
