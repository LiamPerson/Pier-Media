import { Box, Button, Collapse, Paper, Stack, Typography } from '@mui/material'
import 'react-h5-audio-player/lib/styles.css'
import { useState } from 'react'

import { AudioThumbnail } from './AudioThumbnail'
import { useAudio } from './useAudio'
import { usePlayer } from './usePlayer'

import { AudioMedia } from '@/constants/media'

type Props = {
	media: AudioMedia
}
export const AudioPlayerDetails = ({ media }: Props) => {
	const audio = useAudio(media.id)
	const [minimized, setMinimized] = useState(false)
	const { playlist } = usePlayer()

	if (!audio) return null // @todo - Add loading state

	return (
		<Box>
			<Stack
				direction='row'
				justifyContent='space-between'
				spacing={2}
			>
				{minimized && (
					<Typography
						variant='h6'
						fontWeight='light'
					>
						{audio.title} <span style={{ color: '#ffffffb7' }}>By {audio.author.name}</span>
					</Typography>
				)}
				<Button onClick={() => setMinimized(!minimized)}>{minimized ? 'Maximize' : 'Minimize'}</Button>
				<Button onClick={() => console.log('Playlist', playlist)}>Log Playlist</Button>
			</Stack>
			<Collapse in={!minimized}>
				<Paper sx={{ padding: 2, height: minimized ? 0 : 'auto', overflow: 'hidden' }}>
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						justifyContent='space-between'
						spacing={2}
					>
						<Box>
							<Typography variant='h6'>{audio.title}</Typography>
							<Typography variant='subtitle1'>
								<i style={{ fontWeight: 'lighter' }}>By</i> {audio.author.name}
							</Typography>
							<Typography variant='subtitle2'>{audio.genre?.name}</Typography>
						</Box>
						<AudioThumbnail media={media} />
					</Stack>
				</Paper>
			</Collapse>
		</Box>
	)
}
