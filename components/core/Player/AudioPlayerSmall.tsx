import { AudioMedia } from '@/constants/media'
import { fromCdn } from '@/libs/helpers'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioPlayerDetails } from './AudioPlayerDetails'

type AudioPlayerSmallProps = {
	media: AudioMedia
}

export const AudioPlayerSmall = ({ media }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			autoPlay
			header={<AudioPlayerDetails media={media} />}
			src={fromCdn(media.src)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
