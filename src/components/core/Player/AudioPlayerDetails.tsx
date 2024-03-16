import { Box, Button, Collapse, Paper, Skeleton, Stack, Typography } from '@mui/material'
import 'react-h5-audio-player/lib/styles.css'
import { useState } from 'react'

import { AUDIO_THUMBNAIL_MAXIMUM_HEIGHT, AudioThumbnail } from './AudioThumbnail'
import { useAudio } from './useAudio'
import { usePlayer } from './usePlayer'

const MinimizedTitle = ({ audio }: { audio: ReturnType<typeof useAudio> }) => {
	if (!audio) {
		return (
			<Skeleton
				variant='text'
				width={200}
			/>
		)
	}
	return (
		<Typography
			variant='h6'
			fontWeight='light'
		>
			{audio?.title || 'Loading'} <span style={{ color: '#ffffffb7' }}>By {audio?.author.name}</span>
		</Typography>
	)
}

const MaximizedInfoBox = ({ audio }: { audio: ReturnType<typeof useAudio> }) => {
	if (!audio) {
		return (
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-between'
				spacing={2}
			>
				<Box>
					<Skeleton
						variant='text'
						height='32px'
						width={65}
					/>
					<Skeleton
						variant='text'
						height='28px'
						width={120}
					/>
					<Skeleton
						variant='text'
						height='21px'
						width={50}
					/>
				</Box>
				<Skeleton
					variant='rectangular'
					width={AUDIO_THUMBNAIL_MAXIMUM_HEIGHT * (16 / 9)}
					height={AUDIO_THUMBNAIL_MAXIMUM_HEIGHT}
				/>
			</Stack>
		)
	}
	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent='space-between'
			spacing={2}
		>
			<Box>
				<Typography variant='h6'>{audio?.title}</Typography>
				<Typography variant='subtitle1'>
					<i style={{ fontWeight: 'lighter' }}>By</i> {audio?.author.name}
				</Typography>
				<Typography variant='subtitle2'>{audio?.genre?.name}</Typography>
			</Box>
			<AudioThumbnail audio={audio} />
		</Stack>
	)
}

export const AudioPlayerDetails = ({ audio }: { audio: ReturnType<typeof useAudio> }) => {
	const [minimized, setMinimized] = useState(false)
	const { playlist } = usePlayer()

	return (
		<Box>
			<Stack
				direction='row'
				justifyContent='space-between'
				spacing={2}
			>
				{minimized && <MinimizedTitle audio={audio} />}
				<Button onClick={() => setMinimized(!minimized)}>{minimized ? 'Maximize' : 'Minimize'}</Button>
				<Button onClick={() => console.log('Playlist', playlist)}>Log Playlist</Button>
			</Stack>
			<Collapse in={!minimized}>
				<Paper sx={{ padding: 2, height: minimized ? 0 : 'auto', overflow: 'hidden' }}>
					<MaximizedInfoBox audio={audio} />
				</Paper>
			</Collapse>
		</Box>
	)
}
