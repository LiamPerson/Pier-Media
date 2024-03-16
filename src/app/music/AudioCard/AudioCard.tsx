import { Card, CardContent, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import AudioCardDuration from './AudioCardDuration'
import AudioCardGenre from './AudioCardGenre'

import { usePlayer } from '@/components/core/Player/usePlayer'
import NextLink from '@/components/shared/NextLink'
import { MediaType } from '@/constants/media'
import { GetAudiosQuery } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type Props = {
	audio: NonNullable<ValueOf<GetAudiosQuery['audios']>>
}

export const AudioCard = ({ audio }: Props) => {
	const { add } = usePlayer()
	const handleClick = () => {
		add({
			id: audio.id,
			type: MediaType.AUDIO,
		})
	}
	return (
		<NextLink href={`/music/${audio.id}`}>
			<Card
				key={audio.id}
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
							src={audio.thumbnail.file.location}
							alt={`Video cover of ${audio.title}`}
							width={audio.thumbnail.width}
							height={audio.thumbnail.height}
						/>
					</Paper>
					<Typography variant='h5'>{audio.title}</Typography>
					<Typography variant='body2'>
						By {audio.author.name} <AudioCardDuration duration={audio.duration} /> <AudioCardGenre genre={audio.genre} />
					</Typography>
					<Typography variant='body1'>
						Sourced from <Link href={audio.originalUrl}>{audio.author.provider.name}</Link>
					</Typography>
				</CardContent>
			</Card>
		</NextLink>
	)
}
