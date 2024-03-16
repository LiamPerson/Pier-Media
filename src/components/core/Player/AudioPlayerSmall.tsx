import AudioPlayer from 'react-h5-audio-player'

import { AudioPlayerDetails } from './AudioPlayerDetails'
import { useAudio } from './useAudio'
import { usePlayer } from './usePlayer'

import { AudioMedia } from '@/constants/media'
import { fromCdn } from '@/libs/helpers'

import 'react-h5-audio-player/lib/styles.css'

type AudioPlayerSmallProps = {
	media: AudioMedia
}

export const AudioPlayerSmall = ({ media }: AudioPlayerSmallProps) => {
	const audio = useAudio(media.id)
	const { previous, next } = usePlayer()

	if (!audio) return null // @todo - Add loading state

	return (
		<AudioPlayer
			showSkipControls
			showJumpControls={false}
			autoPlay
			header={<AudioPlayerDetails media={media} />}
			onClickNext={next}
			onClickPrevious={previous}
			onEnded={next}
			src={fromCdn(audio.file.location)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
