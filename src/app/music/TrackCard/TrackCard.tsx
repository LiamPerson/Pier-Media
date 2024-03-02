import { Card, CardContent, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import TrackCardDuration from './TrackCardDuration'
import TrackCardGenre from './TrackCardGenre'

import { usePlayer } from '@/components/core/Player/usePlayer'
import NextLink from '@/components/shared/NextLink'
import { MediaType } from '@/constants/media'
import { GetTracksQuery } from '@/gql/codegen/graphql'

type Props = {
	track: NonNullable<GetTracksQuery['tracks'][number]>
}

export const TrackCard = ({ track }: Props) => {
	const { add } = usePlayer()
	const handleClick = () => {
		add({
			id: track.id,
			src: track.file.location,
			title: track.title,
			type: MediaType.AUDIO,
			author: track.author.name,
			genre: track.genre?.name,
			thumbnail: track.thumbnail,
		})
	}
	return (
		<NextLink href={`/music/${track.id}`}>
			<Card
				key={track.id}
				sx={{ cursor: 'pointer' }}
				onClick={handleClick}
			>
				<CardContent>
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
						<Image
							src={track.thumbnail.file.location}
							alt={`Video cover of ${track.title}`}
							width={track.thumbnail.width}
							height={track.thumbnail.height}
						/>
					</Paper>
					<Typography variant='h5'>{track.title}</Typography>
					<Typography variant='body2'>
						By {track.author.name} <TrackCardDuration duration={track.duration} /> <TrackCardGenre genre={track.genre} />
					</Typography>
					<Typography variant='body1'>
						Sourced from <Link href={track.originalUrl}>{track.author.provider.name}</Link>
					</Typography>
				</CardContent>
			</Card>
		</NextLink>
	)
}
