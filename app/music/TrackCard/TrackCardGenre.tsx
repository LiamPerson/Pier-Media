import { Typography } from '@mui/material'

import PriceTagsIcon from '@/components/shared/icons/PriceTagsIcon'
import { GetTracksQuery } from '@/gql/codegen/graphql'

type Track = NonNullable<GetTracksQuery['tracks'][number]>

type Props = {
	genre?: Track['genre']
}

const TrackCardGenre = ({ genre }: Props) => {
	if (!genre) return null
	return (
		<Typography sx={{ display: 'inline-block' }}>
			<PriceTagsIcon
				width={'12px'}
				height={'12px'}
			/>{' '}
			{genre.name}
		</Typography>
	)
}

export default TrackCardGenre
