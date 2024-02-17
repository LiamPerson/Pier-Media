import { Paper, Skeleton } from '@mui/material'
import Image from 'next/image'

import { GetTracksQuery, Maybe } from '@/gql/codegen/graphql'

type Props = {
	track?: Maybe<GetTracksQuery['tracks'][number]>
}

export const TrackThumbnail = ({ track }: Props) => {
	return (
		<Paper
			sx={{
				height: 200,
				overflow: 'hidden',
				img: {
					objectFit: 'cover',
					objectPosition: 'center',
					width: '100%',
					height: '100%',
				},
			}}
		>
			{!track ? (
				<Skeleton
					variant='rectangular'
					width='100%'
					height='100%'
				/>
			) : (
				<Image
					src={track.thumbnail.file.location}
					alt={`Video cover of ${track.title}`}
					width={track.thumbnail.width}
					height={track.thumbnail.height}
				/>
			)}
		</Paper>
	)
}
