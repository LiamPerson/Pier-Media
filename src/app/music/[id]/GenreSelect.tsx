import { useMutation, useQuery } from '@apollo/client'
import { Autocomplete, FormControl, TextField } from '@mui/material'

import { GetGenresDocument, GetTracksDocument, GetTracksQuery, UpdateTrackDocument } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type GenreSelectProps = {
	trackId: number
	defaultGenre: NonNullable<ValueOf<GetTracksQuery['tracks']>>['genre']
}
export const GenreSelect = ({ trackId, defaultGenre }: GenreSelectProps) => {
	const { data: genres, loading } = useQuery(GetGenresDocument, { fetchPolicy: 'cache-first' })
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
			update(cache, { data: returnedData }) {
				if (!returnedData?.update_audio.affected_rows) return console.log('Early return 3')
				const track = cache
					.readQuery<GetTracksQuery>({
						query: GetTracksDocument,
					})
					?.tracks.find((t) => t?.id === trackId)
				const newGenre = genres?.genres.find((g) => g?.id === newGenreId)
				if (!track) return console.log('Early return 1')
				if (!newGenre) return console.log('Early return 2')
				cache.modify({ id: cache.identify({ __typename: track.__typename, id: trackId }), fields: { genre: () => newGenre } })
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
				options={genres?.genres || [defaultGenre]}
				getOptionLabel={(option) => option?.name || ''}
			/>
		</FormControl>
	)
}
