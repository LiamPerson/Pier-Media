import { Autocomplete, TextField, Box } from '@mui/material'
import { NextRouter, useRouter } from 'next/router'
import { SyntheticEvent } from 'react'

interface ActionParams {
	router?: NextRouter
}

interface Option {
	label: string
	action?: (params: ActionParams) => void
}
const OPTIONS: Option[] = [
	{ label: 'Go to 📽 Videos', action: ({ router }) => router?.push('/videos') },
	{ label: 'Go to 🎬 Movies', action: ({ router }) => router?.push('/movies') },
]

const SiteSearch = () => {
	const router = useRouter()

	const handleChange = (event: SyntheticEvent<Element, Event>, value: Option | null) => {
		if (value?.action) value.action({ router })
	}

	return (
		<Autocomplete
			onChange={handleChange}
			renderInput={(params) => (
				<TextField
					variant='standard'
					{...params}
					label='Search'
					inputProps={{ ...params.inputProps, autoComplete: 'new-password' }}
				/>
			)}
			sx={{
				width: 120,
				transition: '0.2s',
				'&:focus, &:active, &:hover, &:focus-within': {
					width: 200,
				},
			}}
			options={OPTIONS}
			getOptionLabel={(option) => option.label}
			renderOption={(props, option) => (
				<Box
					component='li'
					sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
					{...props}
				>
					{option.label}
				</Box>
			)}
		/>
	)
}

export default SiteSearch
