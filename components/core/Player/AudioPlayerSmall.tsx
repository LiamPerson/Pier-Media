import { fromCdn } from '@/libs/helpers'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Media } from './provider'

type AudioPlayerSmallProps = {
	media: Media
}

export const AudioPlayerSmall = ({ media: media }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			autoPlay
			header={media.title}
			src={fromCdn(media.src)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
