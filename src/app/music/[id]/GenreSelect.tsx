import { useMutation, useQuery } from '@apollo/client'
import { Autocomplete, FormControl, TextField } from '@mui/material'

import { GetAudiosDocument, GetAudiosQuery, GetGenresDocument, UpdateAudioDocument } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type GenreSelectProps = {
	audioId: number
	defaultGenre: NonNullable<ValueOf<GetAudiosQuery['audios']>>['genre']
}
export const GenreSelect = ({ audioId, defaultGenre }: GenreSelectProps) => {
	const { data: genres, loading } = useQuery(GetGenresDocument, { fetchPolicy: 'cache-first' })
	const [mutate, { loading: sendingMutation, error: errorMutation }] = useMutation(UpdateAudioDocument)
	if (errorMutation) {
		console.error('Error while mutating audio in GenreSelect:', errorMutation)
	}
	const handleChange = (newGenreId: number | undefined) => {
		if (newGenreId === undefined) {
			return
		}
		mutate({
			variables: {
				input: {
					_where: { id: audioId },
					genreId: newGenreId,
				},
			},
			update(cache, { data: returnedData }) {
				if (!returnedData?.update_audio.affected_rows) return console.log('Early return 3')
				const audio = cache
					.readQuery({
						query: GetAudiosDocument,
					})
					?.audios.find((item) => item?.id === audioId)
				const newGenre = genres?.genres.find((g) => g?.id === newGenreId)
				if (!audio) return console.log('Early return 1')
				if (!newGenre) return console.log('Early return 2')
				cache.modify({ id: cache.identify({ __typename: audio.__typename, id: audioId }), fields: { genre: () => newGenre } })
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
