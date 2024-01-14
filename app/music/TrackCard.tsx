import { secondsToTimestamp } from '@/libs/helpers'
import { Card, CardContent, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { GetTracksQuery } from '@/gql/codegen/graphql'
import { usePlayer } from '@/components/core/Player/usePlayer'

type Props = {
	track: NonNullable<GetTracksQuery['tracks'][number]>
}
export const TrackCard = ({ track }: Props) => {
	const { setMedia } = usePlayer()
	return (
		<Card
			key={track.id}
			sx={{ cursor: 'pointer' }}
			onClick={() => {
				setMedia({ src: track.file.location, title: track.title })
			}}
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
					By {track.author.name} | {secondsToTimestamp(track.duration)} {track.genre?.name && ' | ' + track.genre.name}
				</Typography>
				<Typography variant='body1'>
					Sourced from <Link href={track.originalUrl}>{track.author.provider.name}</Link>
				</Typography>
			</CardContent>
		</Card>
	)
}
