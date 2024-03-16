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
				aspectRatio: '16 / 9',
				maxHeight: '70vh',
				minHeight: '360px',
				width: '100%',
				overflow: 'hidden',
				img: {
					objectFit: 'contain',
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
