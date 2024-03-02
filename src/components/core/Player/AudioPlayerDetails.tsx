import { Box, Button, Collapse, Paper, Stack, Typography } from '@mui/material'

import 'react-h5-audio-player/lib/styles.css'
import { useState } from 'react'

import { AudioThumbnail } from './AudioThumbnail'
import { usePlayer } from './usePlayer'

import { AudioMedia } from '@/constants/media'

type Props = {
	media: AudioMedia
}
export const AudioPlayerDetails = ({ media }: Props) => {
	const [minimized, setMinimized] = useState(false)
	const { playlist } = usePlayer()
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
						{media.title} <span style={{ color: '#ffffffb7' }}>By {media.author}</span>
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
							<Typography variant='h6'>{media.title}</Typography>
							<Typography variant='subtitle1'>
								<i style={{ fontWeight: 'lighter' }}>By</i> {media.author}
							</Typography>
							<Typography variant='subtitle2'>{media.genre}</Typography>
						</Box>
						<AudioThumbnail media={media} />
					</Stack>
				</Paper>
			</Collapse>
		</Box>
	)
}
