import { fromCdn } from '@/libs/helpers'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

interface AudioPlayerSmallProps {
	src: string
}

const AudioPlayerSmall = ({ src }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			src={fromCdn(src)}
			style={{
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}

export default AudioPlayerSmall
