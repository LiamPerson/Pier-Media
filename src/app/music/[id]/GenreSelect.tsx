import { useMutation, useQuery } from '@apollo/client'
import { Autocomplete, FormControl, TextField } from '@mui/material'

import { GetGenresDocument, GetTracksQuery, UpdateTrackDocument } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type GenreSelectProps = {
	trackId: number
	defaultGenre: NonNullable<ValueOf<GetTracksQuery['tracks']>>['genre']
}
export const GenreSelect = ({ trackId, defaultGenre }: GenreSelectProps) => {
	const { data, loading } = useQuery(GetGenresDocument, { fetchPolicy: 'cache-first' })
	const [mutate, { loading: sendingMutation, error: errorMutation }] = useMutation(UpdateTrackDocument)
	if (errorMutation) {
		console.error('Error while mutating track in GenreSelect:', errorMutation)
	}
	const handleChange = (newGenreId: number | undefined) => {
		if (newGenreId === undefined) {
			return
		}
		mutate({
			variables: {
				input: {
					_where: { id: trackId },
					genreId: newGenreId,
				},
			},
		})
	}
	return (
		<FormControl>
			<Autocomplete
				renderInput={(params) => (
					<TextField
						{...params}
						inputProps={{ ...params.inputProps, autoComplete: 'new-password' }}
						label='Genre'
					/>
				)}
				sx={{ width: '400px' }}
				disabled={loading || sendingMutation}
				autoHighlight
				defaultValue={defaultGenre}
				onChange={(_, value) => handleChange(value?.id)}
				options={data?.genres || [defaultGenre]}
				getOptionLabel={(option) => option?.name || ''}
			/>
		</FormControl>
	)
}
