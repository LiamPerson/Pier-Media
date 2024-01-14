import { AudioMedia } from '@/constants/media'
import { fromCdn } from '@/libs/helpers'
import { Box, Paper, Stack, Typography } from '@mui/material'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioThumbnail } from './AudioThumbnail'

type AudioPlayerSmallProps = {
	media: AudioMedia
}

export const AudioPlayerSmall = ({ media }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			autoPlay
			header={
				/** @todo - Anyone: Improve the styling here */
				<Paper sx={{ padding: 2 }}>
					<Stack
						direction='row'
						justifyContent='space-between'
						spacing={2}
					>
						<Box>
							<Typography variant='h6'>{media.title}</Typography>
							<Typography variant='subtitle1'>
								<i style={{ fontWeight: 'lighter' }}>By</i> {media.author}
							</Typography>
							<Typography variant='subtitle2'>{media.genre}</Typography>
						</Box>
						<AudioThumbnail media={media} />
					</Stack>
				</Paper>
			}
			src={fromCdn(media.src)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
