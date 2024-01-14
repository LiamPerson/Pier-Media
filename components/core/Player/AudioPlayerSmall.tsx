import { fromCdn } from '@/libs/helpers'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

type AudioPlayerSmallProps = {
	src: string
}

export const AudioPlayerSmall = ({ src }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			autoPlay
			src={fromCdn(src)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
