import { Skeleton, Typography } from '@mui/material'

import { GetTracksQuery, Maybe } from '@/gql/codegen/graphql'

type Props = {
	track?: Maybe<GetTracksQuery['tracks'][number]>
}

export const TrackTitle = ({ track }: Props) => {
	if (!track?.title) {
		return (
			<Skeleton
				variant='text'
				width={500}
				height={120}
			/>
		)
	}
	return <Typography variant='h1'>{track.title}</Typography>
}
